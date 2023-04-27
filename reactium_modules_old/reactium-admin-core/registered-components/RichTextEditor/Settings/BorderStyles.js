import React from 'react';
import _ from 'underscore';
import uuid from 'uuid/v4';
import cn from 'classnames';
import op from 'object-path';
import { __, useDerivedState, useHookComponent } from 'reactium-core/sdk';

const noop = () => {};

const KEYS = [
    'borderTopStyle',
    'borderRightStyle',
    'borderBottomStyle',
    'borderLeftStyle',
];

const BorderStyleButton = ({
    borderColor,
    borderSize,
    prop,
    value,
    ...props
}) => {
    const { Button, Icon } = useHookComponent('ReactiumUI');

    const style = {
        borderColor,
        borderSize,
        borderStyle: value,
    };

    const label =
        value === 'none' ? (
            <Icon
                name='Feather.Slash'
                size={10}
                className='red'
                style={{ marginTop: -1 }}
            />
        ) : (
            value
        );
    return (
        prop && (
            <Button color={Button.ENUMS.COLOR.CLEAR} {...props} data-key={prop}>
                <input
                    defaultValue={value || ''}
                    name={`style.${prop}`}
                    type='hidden'
                />
                <div style={style} />
                <small>{label}</small>
            </Button>
        )
    );
};

BorderStyleButton.defaultProps = {
    borderSize: 4,
};

const BorderStyles = ({
    borderStyles,
    className,
    onChange,
    styles,
    ...props
}) => {
    const [state, update] = useDerivedState({
        ...styles,
    });

    const setState = newState =>
        new Promise(resolve => {
            update(newState);
            _.defer(resolve);
        });

    const onClick = e => {
        const key = e.currentTarget.dataset.key;
        const val = String(op.get(state, key, 'none')).toLowerCase();

        let i = borderStyles.indexOf(val) + 1;
        i = i === borderStyles.length ? 0 : i;

        const value = borderStyles[i];

        setState({ [key]: value }).then(() => onChange({ key, value }));
    };

    return (
        <div {...props} className={cn('borderStyles btn-group', className)}>
            {KEYS.map(prop => {
                // prettier-ignore
                const borderColor = op.get(state, String(prop).replace(/Style/g, 'Color'));
                const borderStyle = op.get(state, prop, 'none');

                return (
                    <BorderStyleButton
                        prop={prop}
                        onClick={onClick}
                        value={borderStyle}
                        key={`bs-${uuid()}`}
                        borderColor={borderColor}
                        title={__('border style')}
                    />
                );
            })}
        </div>
    );
};

BorderStyles.defaultProps = {
    onChange: noop,
    styles: {},
};

export { BorderStyleButton, BorderStyles, BorderStyles as default };
