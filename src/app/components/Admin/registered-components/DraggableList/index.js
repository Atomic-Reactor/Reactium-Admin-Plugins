import React, {
    useState,
    useRef,
    useImperativeHandle,
    forwardRef,
} from 'react';
import { useGesture } from 'react-use-gesture';
import { useSprings, animated } from 'react-spring';
import uuid from 'uuid/v4';
import op from 'object-path';
import _ from 'underscore';
import cn from 'classnames';
import isHotkey from 'is-hotkey';
import { __, useAsyncEffect } from 'reactium-core/sdk';

const clamp = (number, lower, upper) => {
    if (number !== undefined) {
        number = Math.min(number, upper);
        number = Math.max(number, lower);
    }

    return number;
};

const swap = (array, from, to) => {
    const cpy = [...array];
    const item = array[from];

    cpy.splice(from, 1);
    cpy.splice(to, 0, item);

    return cpy;
};

const mapIdx = (items = []) =>
    items.map((item = {}, idx) => ({
        ...item,
        idx,
    }));

const txFactory = props => dragContext => {
    const {
        items,
        selected,
        originalIndex,
        yOffset,
        init = true,
    } = dragContext;
    const dragScale = op.get(props, 'dragScale', 1.01);
    const dragShadow = op.get(props, 'dragShadow', 15);

    return index => {
        const newIndex = items.findIndex(({ idx }) => index === idx);

        let newStyle = {
            x: 0,
            y: op.get(items, [newIndex, 'y'], 0),
            scale: 1,
            zIndex: '0',
            shadow: 1,
            immediate: init,
        };

        if (selected && index === originalIndex) {
            newStyle = {
                x: 0,
                y: yOffset,
                scale: dragScale,
                zIndex: '1',
                shadow: dragShadow,
                immediate: n => n === 'y' || n === 'zIndex',
            };
        }

        if (typeof props.dragTx === 'function')
            newStyle = props.dragTx(index, dragContext, newStyle);

        return newStyle;
    };
};

const noop = () => {};
const DraggableList = forwardRef((props, ref) => {
    const { onReorder = noop, children } = props;
    const defaultItemHeight = op.get(props, 'defaultItemHeight', 100);
    const dragSensitivity = op.get(props, 'dragSensitivity', 0.125);
    const tx = txFactory(props);

    const itemsRef = useRef({});
    const getOrdered = items => {
        let h = 0;
        return items.map(
            (
                {
                    id,
                    height = defaultItemHeight,
                    depth = 0,
                    component,
                    ...item
                },
                idx,
            ) => {
                h += height;
                const componentProps = { ...component };
                if (!id)
                    id =
                        op.get(
                            componentProps,
                            'key',
                            op.get(componentProps, 'id', id),
                        ) || uuid();

                const newItem = {
                    ...component,
                    ...item,
                    component,
                    id,
                    height,
                    y: h - height,
                    depth,
                };

                return newItem;
            },
        );
    };

    const initItems = () =>
        getOrdered(
            mapIdx(
                React.Children.map(children, component => {
                    const props = op.get(component, 'props', {});
                    return {
                        ...props,
                        component,
                    };
                }),
            ),
        );

    const [orderedItems, setOrderedItems] = useState(initItems());

    const updateOrderedItems = reorderedItems => {
        // console.log({reorderedItems});
        setOrderedItems(reorderedItems);
        if (typeof onReorder === 'function') {
            setTimeout(() => {
                onReorder(reorderedItems);
            }, 300);
        }
    };

    const [springs, setSprings] = useSprings(
        orderedItems.length,
        tx({ items: orderedItems }),
    );

    const changeHash = items =>
        items.map(({ id, depth }) => `${id}:${depth}`).join('');
    useAsyncEffect(
        async isMounted => {
            _.defer(() => {
                if (isMounted()) setOrderedItems(initItems());
            });
        },
        [changeHash(initItems())],
    );

    const _handle = () => ({
        tx,
        springs,
        setSprings,
        orderedItems,
        updateOrderedItems,
    });

    useImperativeHandle(ref, _handle, [changeHash(orderedItems)]);

    const bind = useGesture({
        onDrag: state => {
            const {
                args: [originalIndex],
                down,
                movement: [x, y],
            } = state;
            const curIndex = orderedItems.findIndex(
                item => originalIndex === item.idx,
            );
            const current = orderedItems[curIndex];
            const yOffset = current.y + y;

            const [newIndex] = orderedItems.reduce(
                ([idx, total], item, i) => {
                    let offset = yOffset;
                    // moving up - portion of top before switch
                    if (y < 0) offset += current.height * dragSensitivity;
                    // moving down - portion of bottom before switch
                    else
                        offset +=
                            current.height - current.height * dragSensitivity;

                    if (offset > total) return [i, total + item.height];
                    return [idx, total];
                },
                [0, 0],
            );

            const curRow = clamp(newIndex, 0, orderedItems.length - 1);
            const newOrder = getOrdered(swap(orderedItems, curIndex, curRow));

            const dragContext = {
                items: newOrder,
                selected: down,
                originalIndex,
                x,
                yOffset,
                init: false,
            };

            if (typeof props.onDrag === 'function') {
                props.onDrag(state, tx(dragContext), dragContext);
            }

            setSprings(tx(dragContext));

            if (!down) updateOrderedItems(newOrder);
        },
    });

    const containerStyle = () => {
        const minHeight = orderedItems.reduce((h, i) => h + i.height, 0);

        return { height: minHeight, minHeight };
    };

    useAsyncEffect(
        async isMounted => {
            let changed = false;
            let cpy = [...orderedItems];
            orderedItems.forEach((item, idx) => {
                if (op.has(itemsRef.current, [item.id])) {
                    const el = itemsRef.current[item.id];
                    const nodes = el.childNodes;

                    let height = 0;
                    for (let node of nodes) {
                        const nodeHeight =
                            node.offsetHeight || node.clientHeight || 0;
                        height += nodeHeight;
                    }

                    if (height !== cpy[idx].height) {
                        changed = true;
                        cpy[idx].height = height;
                    }
                }
            });

            if (changed) {
                cpy = getOrdered(cpy);
                _.defer(() => {
                    if (isMounted()) {
                        setSprings(tx({ items: cpy }));
                        updateOrderedItems(cpy);
                    }
                });
            }
        },
        [children],
    );

    const onSpace = item => {
        const newItems = orderedItems.map(iObj => {
            if (item.id === iObj.id) {
                iObj.selected = !Boolean(iObj.selected);
                return iObj;
            }

            op.del(iObj, 'selected');
            return iObj;
        });

        setSprings(
            tx({
                items: orderedItems,
                selected: item.selected,
                originalIndex: item.idx,
                yOffset: item.y,
                init: false,
            }),
        );

        if (!item.selected) updateOrderedItems(newItems);
    };

    const onUpArrow = item => {
        const currentIndex = orderedItems.findIndex(({ id }) => id === item.id);
        const newIndex = clamp(currentIndex - 1, 0, orderedItems.length - 1);
        const newOrder = getOrdered(swap(orderedItems, currentIndex, newIndex));
        const newItem = newOrder.find(iObj => iObj.id === item.id);

        setSprings(
            tx({
                items: newOrder,
                selected: item.selected,
                originalIndex: item.idx,
                yOffset: newItem.y,
                init: false,
            }),
        );
        setOrderedItems(newOrder);
    };

    const onDownArrow = item => {
        const currentIndex = orderedItems.findIndex(({ id }) => id === item.id);
        const newIndex = clamp(currentIndex + 1, 0, orderedItems.length - 1);
        const newOrder = getOrdered(swap(orderedItems, currentIndex, newIndex));
        const newItem = newOrder.find(iObj => iObj.id === item.id);

        setSprings(
            tx({
                items: newOrder,
                selected: item.selected,
                originalIndex: item.idx,
                yOffset: newItem.y,
                init: false,
            }),
        );
        setOrderedItems(newOrder);
    };

    const onKeyDown = item => e => {
        const currentIndex = orderedItems.findIndex(({ id }) => id === item.id);

        if (isHotkey('space', e)) {
            e.preventDefault();
            onSpace(item);
        }

        if (isHotkey('up', e)) {
            e.preventDefault();
            if (item.selected) {
                onUpArrow(item, currentIndex);
            }
        }

        if (isHotkey('down', e)) {
            e.preventDefault();
            if (item.selected) {
                onDownArrow(item, currentIndex);
            }
        }

        if (typeof props.onKeyDown === 'function') {
            props.onKeyDown(e);
        }
    };

    return (
        <div className='drag-list-container' style={containerStyle()}>
            <div className='drag-list' role='listbox'>
                {springs.map(({ zIndex, shadow, x, y, scale }, i) => {
                    const itemIndex = orderedItems.findIndex(
                        item => item.idx === i,
                    );
                    const item = op.get(orderedItems, itemIndex, {});
                    const ariaActionLabel = `${item.id}-action-label`;

                    return (
                        <animated.div
                            key={item.id}
                            style={{
                                position: 'relative',
                                zIndex,
                                x,
                                y,
                                scale,
                            }}
                            children={
                                <div
                                    className={'drag-list-item'}
                                    style={{ height: item.height }}
                                    ref={el =>
                                        op.set(itemsRef.current, [item.id], el)
                                    }>
                                    <div
                                        className={cn('drag-list-item-inner', {
                                            first: i === 0,
                                            last: i === springs.length - 1,
                                        })}>
                                        <animated.div
                                            role='option'
                                            {...bind(i)}
                                            onKeyDown={onKeyDown(item)}
                                            tabIndex={0}
                                            aria-describedby={ariaActionLabel}
                                            style={{
                                                boxShadow: shadow.to(
                                                    s =>
                                                        `rgba(0, 0, 0, 0.5) 0px ${1.1 *
                                                            s}px ${2 *
                                                            s}px 0px`,
                                                ),
                                            }}>
                                            <span
                                                id={ariaActionLabel}
                                                className='sr-only'>
                                                {__(
                                                    'Press spacebar to reorder. Currently at %place',
                                                ).replace(
                                                    '%place',
                                                    itemIndex + 1,
                                                )}
                                            </span>
                                            {item.component}
                                        </animated.div>
                                    </div>
                                </div>
                            }
                        />
                    );
                })}
            </div>
        </div>
    );
});

DraggableList.defaultProps = {
    onReorder: noop,
    onDrag: noop,
    onKeyDown: noop,
    defaultItemHeight: 100,
    dragScale: 1.005,
    // fraction of item height needed to reorder
    dragSensitivity: 0.125,
};

export default DraggableList;