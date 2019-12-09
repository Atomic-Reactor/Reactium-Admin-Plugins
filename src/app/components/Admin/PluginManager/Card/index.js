import React, { useEffect, useState } from 'react';
import Reactium, { __ } from 'reactium-core/sdk';
import { Plugins } from 'reactium-core/components/Plugable';
import op from 'object-path';
import cn from 'classnames';
import { Toggle } from '@atomic-reactor/reactium-ui';
import { Link } from 'react-router-dom';
import { Icon } from '@atomic-reactor/reactium-ui';

const Card = ({ plugin }) => {
    const core =
        op.get(plugin, 'meta.builtIn', false) && plugin.group === 'core';
    const defaultGraphic = core
        ? '/assets/images/atomic-reactor-logo.svg'
        : '/assets/images/plugin.svg';
    const graphic = op.get(plugin, 'meta.logoURL', defaultGraphic);
    const { name, description, active, group } = plugin;

    const toggleActivate = async () => {
        const { ID } = plugin;
        if (plugin.active) {
            await Reactium.Cloud.run('plugin-deactivate', { plugin: ID });
        } else {
            await Reactium.Cloud.run('plugin-activate', { plugin: ID });
        }

        // reload the page to get plugin assets
        if (typeof window !== 'undefined') location.reload(true);
    };

    let [hideControl, setHideControl] = useState(true);
    useEffect(() => {
        if (group !== 'core') {
            Reactium.User.can(
                ['plugin.activate', `${plugin.ID}.activate`],
                false,
            ).then(permitted => {
                if (permitted) setHideControl(false);
            });
        }
    }, []);

    const renderActivation = () => {
        return (
            <>
                <div className='plugin-card-status'>
                    <strong>
                        {active ? __('Plugin Active') : __('Plugin Disabled')}
                    </strong>
                </div>
                {!hideControl && (
                    <div className='plugin-card-toggle'>
                        <Toggle
                            label={
                                plugin.active
                                    ? __('Deactivate')
                                    : __('Activate')
                            }
                            defaultChecked={plugin.active}
                            onChange={toggleActivate}
                        />
                    </div>
                )}
            </>
        );
    };

    const render = () => {
        const settings = op.get(plugin, 'meta.settings', false);
        const settingsUrl = op.get(plugin, 'meta.settingsUrl');
        const settingsTitle = __('Plugin settings for %s').replace(
            '%s',
            plugin.name,
        );

        return (
            <div
                className={cn(
                    'plugin-card',
                    { 'plugin-card--core': core },
                    `plugin-card--${plugin.ID}`
                        .toLowerCase()
                        .replace(/[^a-z0-9]/g, '-'),
                )}>
                <div className='plugin-card__graphic'>
                    <img src={graphic} alt={plugin.name} />
                </div>
                <div className='plugin-card__details'>
                    {!!name && <h3>{name}</h3>}
                    {!!description && <p className='mt-8'>{description}</p>}
                    <Plugins zone='plugin-card-description' plugin={plugin} />
                </div>
                <div className='plugin-card__actions'>
                    {plugin.active && settings && (
                        <Link
                            className={cn(
                                'plugin-settings-link',
                                `plugin-settings-link-${plugin.ID}`,
                                'icon-link',
                            )}
                            to={
                                settingsUrl
                                    ? settingsUrl
                                    : `/admin/plugins/${plugin.ID}`
                            }
                            title={settingsTitle}>
                            <span className='sr-only'>{settingsTitle}</span>
                            <Icon.Feather.Settings />
                        </Link>
                    )}
                    {renderActivation()}
                    <Plugins zone='plugin-card-actions' plugin={plugin} />
                </div>
            </div>
        );
    };

    return render();
};

export default Card;
