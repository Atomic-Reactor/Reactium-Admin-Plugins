import _ from 'underscore';
import cn from 'classnames';
import op from 'object-path';
import PropTypes from 'prop-types';
import React, {
    forwardRef,
    useImperativeHandle,
    useEffect,
    useLayoutEffect as useWindowEffect,
    useRef,
    useState,
} from 'react';

// Server-Side Render safe useLayoutEffect (useEffect when node)
const useLayoutEffect =
    typeof window !== 'undefined' ? useWindowEffect : useEffect;

const ENUMS = {};

/**
 * -----------------------------------------------------------------------------
 * Hook Component: Tools
 * -----------------------------------------------------------------------------
 */
let Tools = ({ children, ...props }, ref) => {
    // Refs
    const containerRef = useRef();
    const stateRef = useRef({
        ...props,
    });

    // State
    const [, setNewState] = useState(stateRef.current);

    // Internal Interface
    const setState = newState => {
        // Update the stateRef
        stateRef.current = {
            ...stateRef.current,
            ...newState,
        };

        // Trigger useEffect()
        setNewState(stateRef.current);
    };

    const cx = () => {
        const { className, namespace } = stateRef.current;
        return cn({ [className]: !!className, [namespace]: !!namespace });
    };

    // Side Effects
    useEffect(() => setState(props), Object.values(props));

    // Renderer
    const render = () => {
        return (
            <div ref={containerRef} className={cx()}>
                Tools
            </div>
        );
    };

    // External Interface
    useImperativeHandle(ref, () => ({
        container: containerRef.current,
        ref,
        setState,
        state: stateRef.current,
    }));

    // Render
    return render();
};

Tools = forwardRef(Tools);

Tools.ENUMS = ENUMS;

Tools.propTypes = {
    className: PropTypes.string,
    namespace: PropTypes.string,
};

Tools.defaultProps = {
    namespace: 'ui-component',
};

export { Tools as default };
