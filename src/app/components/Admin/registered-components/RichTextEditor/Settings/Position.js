import React from 'react';
import uuid from 'uuid/v4';
import op from 'object-path';
import { __, useDerivedState, useHookComponent } from 'reactium-core/sdk';

const noop = () => {};

const positions = [
    'static',
    'absolute',
    'fixed',
    'relative',
    'sticky',
    'initial',
    'inherit',
];
positions.sort();

const data = [
    {
        key: 'top',
        input: { name: 'style.top', title: __('top') },
        icon: { name: 'Feather.ArrowUp', className: 'ico top' },
    },
    {
        key: 'right',
        input: { name: 'style.right', title: __('right') },
        icon: { name: 'Feather.ArrowRight', className: 'ico right' },
    },
    {
        key: 'bottom',
        input: { name: 'style.bottom', title: __('bottom') },
        icon: { name: 'Feather.ArrowDown', className: 'ico bottom' },
    },
    {
        key: 'left',
        input: { name: 'style.left', title: __('left') },
        icon: { name: 'Feather.ArrowLeft', className: 'ico left' },
    },
];

const Position = ({ onChange, styles }) => {
    const { Icon } = useHookComponent('ReactiumUI');

    const initialFloat = op.get(styles, 'float');

    const [state, setState] = useDerivedState({
        float: initialFloat,
        value: initialFloat
            ? `float-${initialFloat}`
            : op.get(styles, 'position', null),
    });

    const _onChange = e => {
        let value = e.target.value;

        const float = String(value).startsWith('float-')
            ? String(value).replace('float-', '')
            : null;

        const newState = {
            float,
            value,
        };

        const position = float === null ? value : null;

        setState(newState);

        onChange({
            key: ['float', 'position'],
            value: { float, position },
        });
    };

    const canPosition = () => {
        const pos = ['absolute', 'fixed', 'relative', 'sticky'];
        return pos.includes(state.value);
    };

    return (
        <>
            <div className='col-xs-12 pb-xs-12 form-group'>
                <input
                    type='hidden'
                    name='style.float'
                    defaultValue={state.float}
                />
                <input
                    type='hidden'
                    name='style.position'
                    defaultValue={state.value}
                />
                <select value={state.value || ''} onChange={_onChange}>
                    <option value={null}>none</option>
                    <option value='float-left'>float: left</option>
                    <option value='float-right'>float: right</option>
                    {positions.map(pos => (
                        <option key={`pos-${pos}`}>{pos}</option>
                    ))}
                </select>
            </div>
            {canPosition() && (
                <div className='col-xs-12 mb-xs-12'>
                    <div className='form-group input-group qt'>
                        {data.map(({ key, input: params }) => (
                            <input
                                defaultValue={op.get(styles, key, '')}
                                key={`ps-${key}`}
                                className='ico'
                                placeholder='0'
                                {...params}
                            />
                        ))}
                    </div>
                    <div className='icons'>
                        {data.map(({ icon: params }) => (
                            <Icon {...params} key={uuid()} />
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

Position.defaultProps = {
    onChange: noop,
    styles: {},
};

export { Position, Position as default };
