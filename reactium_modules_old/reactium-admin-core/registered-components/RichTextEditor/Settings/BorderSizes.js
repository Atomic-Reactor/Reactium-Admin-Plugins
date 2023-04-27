import React from 'react';
import _ from 'underscore';
import uuid from 'uuid/v4';
import op from 'object-path';
import { __, useHookComponent } from 'reactium-core/sdk';

const data = [
    {
        key: 'borderTopWidth',
        input: { name: 'style.borderTopWidth', title: __('border top') },
        icon: { name: 'Linear.BorderTop', className: 'ico top' },
    },
    {
        key: 'borderRightWidth',
        input: { name: 'style.borderRightWidth', title: __('border right') },
        icon: { name: 'Linear.BorderRight', className: 'ico right' },
    },
    {
        key: 'borderBottomWidth',
        input: { name: 'style.borderBottomWidth', title: __('border bottom') },
        icon: { name: 'Linear.BorderBottom', className: 'ico bottom' },
    },
    {
        key: 'borderLeftWidth',
        input: { name: 'style.borderLeftWidth', title: __('border left') },
        icon: { name: 'Linear.BorderLeft', className: 'ico left' },
    },
];

const noop = () => {};

const BorderSizes = ({ onChange = noop, styles, ...props }) => {
    const { Icon } = useHookComponent('ReactiumUI');

    const _onChange = e => {
        let value = e.target.value;
        value = _.compact([value]).length < 1 ? null : value;
        value = value && _.isNumber(Number(value)) ? `${value}px` : value;
        value = _.isNull(value) ? '' : value;
        onChange({ target: { name: e.target.name, value } });
    };

    return (
        <div {...props}>
            <div className='col-xs-12 form-group input-group qt'>
                {data.map(({ key, input: params }) => (
                    <input
                        defaultValue={op.get(styles, key, '')}
                        onChange={_onChange}
                        key={`bs-${key}`}
                        className='ico'
                        placeholder='0'
                        min={0}
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
    );
};

export { BorderSizes, BorderSizes as default };
