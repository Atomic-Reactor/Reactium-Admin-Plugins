import _ from 'underscore';
import cn from 'classnames';
import op from 'object-path';
import PropTypes from 'prop-types';
import { Icon } from '@atomic-reactor/reactium-ui';
import { Scrollbars } from 'react-custom-scrollbars';
import { useEventHandle, useDerivedState } from 'reactium-core/sdk';

import React, {
    forwardRef,
    useEffect,
    useImperativeHandle,
    useRef,
    useState,
} from 'react';

const noop = () => {};

const getIcons = (search = '') =>
    Object.keys(Icon.icons).reduce((obj, group) => {
        obj[group] = Object.keys(Icon.icons[group]);

        if (String(search).length > 0) {
            obj[group] = obj[group].filter(name =>
                String(name)
                    .toLowerCase()
                    .includes(String(search).toLowerCase()),
            );
        }

        return obj;
    }, {});

class PickerEvent extends Event {
    constructor(type, data) {
        super(type, data);

        if (!data) return;

        Object.entries(data).forEach(([key, value]) => {
            if (!this[key]) {
                this[key] = value;
            } else {
                key = `__${key}`;
                this[nkey] = value;
            }
        });
    }
}

const IconGroup = ({
    chunksize = 50,
    color,
    group,
    onClick = noop,
    size: initialSize,
    value = [],
    ...props
}) => {
    const [icons, setIcons] = useState(props.icons || []);
    const size = initialSize + 24 - 8;
    const [index, setIndex] = useState(0);
    const count = Math.ceil(icons.length / chunksize);
    const chunks = _.flatten(_.chunk(icons, chunksize).slice(0, index));

    const next = () => {
        if (index === count) return;
        const timeout = setTimeout(() => setIndex(index + 1), 250);
        return () => {
            clearTimeout(timeout);
        };
    };

    useEffect(next, [index]);

    useEffect(() => {
        if (_.isEqual(icons, props.icons)) return;
        setIcons(props.icons);
    }, [props.icons]);

    const render = () =>
        icons.length < 1 ? null : (
            <section>
                <h3>{group}</h3>
                <div className='container'>
                    {chunks.map(icon => (
                        <div
                            className={cn({
                                active: value.includes(`${group}.${icon}`),
                            })}
                            data-group={group}
                            data-icon={icon}
                            key={`${group}.${icon}`}
                            onClick={onClick}
                            title={`${group}.${icon}`}
                            style={{
                                width: size,
                                height: size,
                                maxWidth: size,
                            }}>
                            <Icon
                                name={`${group}.${icon}`}
                                size={initialSize}
                                style={{ fill: color }}
                            />
                        </div>
                    ))}
                </div>
            </section>
        );

    return render();
};

let IconPicker = (initialProps, ref) => {
    const {
        className,
        height,
        namespace,
        onChange,
        onMouseOut,
        onMouseOver,
        onResize,
        onSearch,
        onSelect,
        onTouchStart,
        onUnselect,
        ...props
    } = initialProps;

    const container = useRef();

    const [color, setColor] = useState(op.get(props, 'color', '#666666'));
    const [icons, setIcons] = useState(getIcons(op.get(props, 'search', '')));
    const [multiselect, setMultiselect] = useState(
        op.get(props, 'multiselect', false),
    );
    const [search, setSearch] = useState(op.get(props, 'search', ''));
    const [selected] = useState();
    const [size, setSize] = useState(op.get(props, 'size', 24));
    const [unselected] = useState();
    const [value, setValue] = useState(op.get(props, 'value', []));

    const [state, setState] = useDerivedState({
        mouseout: null,
        mouseover: null,
        selected: null,
        touched: null,
        unselected: null,
    });

    const cx = cls =>
        _.chain([className || namespace, cls])
            .compact()
            .uniq()
            .value()
            .join('-');

    const _onClick = e => {
        e.stopPropagation();
        e.preventDefault();
        const { icon, group } = e.currentTarget.dataset;
        const item = `${group}.${icon}`;

        let newValue = multiselect === true ? Array.from(value) : [];

        // Unselect
        if (newValue.includes(item)) {
            newValue = _.without(newValue, item);
            // dispatch onUnSelect
            if (unselected !== item)
                setState({ unselected: item, selected: null });
        } else {
            newValue.push(item);
            // dispatch onSelect
            if (selected !== item)
                setState({ selected: item, unselected: null });
        }

        newValue = _.uniq(newValue);
        newValue.sort();

        // dispatch onChange
        if (value.join('') !== newValue.join('')) {
            setValue(newValue);
        }
    };

    const _onTouchStart = e => {
        e.stopPropagation();
        e.preventDefault();
        const { icon, group } = e.currentTarget.dataset;
        setState({ touched: `${group}.${icon}` });
    };

    const _onMouseOut = e => {
        e.stopPropagation();
        e.preventDefault();
        const { icon, group } = e.currentTarget.dataset;
        setState({ mouseout: `${group}.${icon}`, mouseover: null });
    };

    const _onMouseOver = e => {
        e.stopPropagation();
        e.preventDefault();
        const { icon, group } = e.currentTarget.dataset;
        setState({ mouseover: `${group}.${icon}`, mouseout: null });
    };

    const _handle = () => ({
        color,
        container: container.current,
        icons,
        multiselect,
        props: initialProps,
        search,
        size,
        setColor,
        setIcons,
        setMultiselect,
        setSearch,
        setSize,
        setState,
        setValue,
        state,
        value,
    });

    const [handle, setHandle] = useEventHandle(_handle());

    useImperativeHandle(ref, () => handle);

    // update icons on search & dispatch - search
    useEffect(() => {
        const results = getIcons(search);
        setIcons(results);

        handle.icons = results;
        handle.dispatchEvent(new PickerEvent('search', { results, search }));
        onSearch({ type: 'search', target: handle, results, search });
    }, [search]);

    // update size & dispatch - resize
    useEffect(() => {
        if (size < 8) {
            setSize(8);
        } else {
            if (!size) return;
            handle.dispatchEvent(new PickerEvent('resize', { size }));
            const timeout = setTimeout(
                () => onResize({ type: 'resize', target: handle, size }),
                1,
            );
            return () => {
                clearTimeout(timeout);
            };
        }
    }, [size]);

    // dispatch - change
    useEffect(() => {
        handle.value = value;
        handle.dispatchEvent(new PickerEvent('change'));
        onChange({ type: 'change', target: handle });
    }, [value]);

    // dispatch - mouseout
    useEffect(() => {
        if (!op.get(state, 'mouseout')) return;
        handle.dispatchEvent(
            new PickerEvent('mouseout', { item: state.mouseout }),
        );
        const timeout = setTimeout(
            () =>
                onMouseOut({
                    type: 'mouseout',
                    target: handle,
                    item: state.mouseout,
                }),
            1,
        );
        return () => {
            clearTimeout(timeout);
        };
    }, [op.get(state, 'mouseout')]);

    // dispatched - mouseover
    useEffect(() => {
        if (!op.get(state, 'mouseover')) return;
        handle.dispatchEvent(
            new PickerEvent('mouseover', { item: state.mouseover }),
        );
        const timeout = setTimeout(
            () =>
                onMouseOver({
                    type: 'mouseover',
                    target: handle,
                    item: state.mouseover,
                }),
            1,
        );
        return () => {
            clearTimeout(timeout);
        };
    }, [op.get(state, 'mouseover')]);

    // dispatch - selected
    useEffect(() => {
        if (!op.get(state, 'selected')) return;
        handle.dispatchEvent(
            new PickerEvent('select', { item: state.selected }),
        );
        const timeout = setTimeout(
            () =>
                onSelect({
                    type: 'select',
                    target: handle,
                    item: state.selected,
                }),
            1,
        );
        return () => {
            clearTimeout(timeout);
        };
    }, [op.get(state, 'selected')]);

    // dispatch - touched
    useEffect(() => {
        if (!op.get(state, 'touched')) return;
        handle.dispatchEvent(
            new PickerEvent('touchstart', { item: state.touched }),
        );

        const timeout = setTimeout(
            () =>
                onTouchStart({
                    type: 'touchstart',
                    target: handle,
                    item: state.touched,
                }),
            1,
        );
        return () => {
            clearTimeout(timeout);
        };
    }, [op.get(state, 'touched')]);

    // dispatch - unselected
    useEffect(() => {
        if (!op.get(state, 'unselected')) return;
        handle.dispatchEvent(
            new PickerEvent('unselect', { item: state.unselected }),
        );
        const timeout = setTimeout(
            () =>
                onUnselect({
                    type: 'unselect',
                    target: handle,
                    item: state.unselected,
                }),
            1,
        );
        return () => {
            clearTimeout(timeout);
        };
    }, [op.get(state, 'unselected')]);

    // update handle
    useEffect(() => {
        const newHandle = _handle();
        Object.entries(newHandle).forEach(([key, val]) =>
            op.set(handle, key, val),
        );
        setHandle(handle);
    }, [
        color,
        container.current,
        icons,
        multiselect,
        selected,
        search,
        size,
        unselected,
        value,
    ]);

    const render = () => {
        return !icons ? null : (
            <Scrollbars autoHeight autoHeightMin={height}>
                <div className={cx()} ref={container}>
                    {Object.entries(icons).map(([group, icos]) => (
                        <IconGroup
                            color={color}
                            group={group}
                            height={height}
                            icons={icos}
                            key={group}
                            onClick={_onClick}
                            onMouseOut={_onMouseOut}
                            onMouseOver={_onMouseOver}
                            onTouchStart={_onTouchStart}
                            size={size}
                            value={value}
                        />
                    ))}
                </div>
            </Scrollbars>
        );
    };

    return render();
};

IconPicker = forwardRef(IconPicker);

IconPicker.propTypes = {
    className: PropTypes.string,
    color: PropTypes.string,
    height: PropTypes.number,
    multiselect: PropTypes.bool,
    namespace: PropTypes.string,
    onChange: PropTypes.func,
    onMouseOut: PropTypes.func,
    onMouseOver: PropTypes.func,
    onResize: PropTypes.func,
    onSearch: PropTypes.func,
    onSelect: PropTypes.func,
    onTouchStart: PropTypes.func,
    onUnselect: PropTypes.func,
    search: PropTypes.string,
    size: PropTypes.number,
    value: PropTypes.array,
};

IconPicker.defaultProps = {
    color: '#666666',
    height: 250,
    multiselect: false,
    namespace: 'ar-icon-picker',
    onChange: noop,
    onMouseOut: noop,
    onMouseOver: noop,
    onResize: noop,
    onSearch: noop,
    onSelect: noop,
    onTouchStart: noop,
    onUnselect: noop,
    size: 18,
    value: [],
};

export default IconPicker;
