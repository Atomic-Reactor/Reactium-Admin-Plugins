import Reactium from 'reactium-core/sdk';
import op from 'object-path';
import getComponents from 'dependencies/getComponents';
import { createBrowserHistory, createMemoryHistory } from 'history';

Reactium.Hook.register(
    'routes-init',
    async context => {
        const allRoutes = op.get(require('manifest').get(), 'allRoutes', {});

        if (!Object.values(allRoutes || {}).length) {
            return [];
        }

        let dynamicRoutes = [];
        if (typeof window !== 'undefined') {
            if ('routes' in window && Array.isArray(window.routes)) {
                dynamicRoutes = window.routes;
            }
        } else {
            if ('routes' in global && Array.isArray(global.routes)) {
                dynamicRoutes = global.routes;
            }
        }

        dynamicRoutes = await Promise.all(
            dynamicRoutes.map(async route => {
                let Found;
                if (typeof route.component === 'string') {
                    const { component } = await Reactium.Hook.run(route.component);
                    if (component) Found = { [route.component]: component };
                    if (!Found) Found = getComponents([{ type: route.component }]);
                }

                return {
                    ...route,
                    component: op.get(Found, route.component, () => null),
                };
            }),
        );

        context.routes = Object.values(allRoutes || {})
            .concat(dynamicRoutes)
            .filter(route => route)
            .reduce((rts, route) => {
                // Support multiple routable components per route file
                if (Array.isArray(route)) {
                    return [
                        ...rts,
                        ...route.map((subRoute, subKey) => ({
                            order: 0,
                            ...subRoute,
                        })),
                    ];
                }

                // Support one routable component
                return [
                    ...rts,
                    {
                        order: 0,
                        ...route,
                    },
                ];
            }, [])
            .reduce((rts, route) => {
                // Support multiple paths for one route
                if (Array.isArray(route.path)) {
                    return [
                        ...rts,
                        ...route.path.map(path => ({
                            ...route,
                            path,
                        })),
                    ];
                }
                return [...rts, route];
            }, []);

        return Promise.resolve();
    },
    Reactium.Enums.priority.highest,
);

Reactium.Hook.register(
    '404-component',
    async context => {
        let { NotFound = null } = getComponents([{ type: 'NotFound' }]);
        context.NotFound = NotFound;

        return Promise.resolve();
    },
    Reactium.Enums.priority.highest,
);

let history;
const getHistory = () => {
    const createHistory =
        typeof window !== 'undefined' && window.process && window.process.type
            ? createMemoryHistory
            : createBrowserHistory;

    if (!history) {
        history = createHistory();
    }

    return history;
};

Reactium.Hook.register(
    'history-create',
    async context => {
        context.history = getHistory();
        Reactium.Routing.history = history;

        return Promise.resolve();
    },
    Reactium.Enums.priority.highest,
);
