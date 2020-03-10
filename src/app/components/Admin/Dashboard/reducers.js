import deps from 'dependencies';
import domain from './domain';

export default (state = {}, action) => {
    switch (action.type) {
        case deps().actionTypes.DOMAIN_UPDATE: {
            if (action.domain === domain.name) {
                return {
                    ...state,
                    ...action.update,
                };
            }
            return state;
        }

        default:
            return state;
    }
};
