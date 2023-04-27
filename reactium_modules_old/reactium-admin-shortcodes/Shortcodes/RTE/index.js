import React from 'react';
import Panel from './Panel';
import op from 'object-path';
import Reactium, { __, useHookComponent } from 'reactium-core/sdk';

import SDK from '../sdk';

const SidebarButton = props => {
    const { Button, Icon } = useHookComponent('ReactiumUI');
    return (
        <Button
            {...Reactium.RTE.ENUMS.PROPS.BUTTON}
            {...props}
            data-tooltip={__('Add Shortcode')}>
            <Icon
                {...Reactium.RTE.ENUMS.PROPS.ICON}
                name='Linear.Puzzle'
                size={20}
            />
        </Button>
    );
};

const FormatElement = ({ shortcode, ...props }) => {
    const type = SDK.Component.get(shortcode.type);

    let EditorComponent;

    if (op.get(type, 'editorComponent')) {
        EditorComponent = useHookComponent(type.editorComponent);
    }

    if (!EditorComponent) {
        EditorComponent = props => <span {...props} />;
    }

    return <EditorComponent {...props} />;
};

const PLUGIN = {
    ID: 'shortcode',
};

export default editor => {
    const onButtonClick = e => {
        const btn = e.currentTarget;
        let { x, y, width } = btn.getBoundingClientRect();

        x += width;
        y = Math.floor(window.innerHeight / 4);

        editor.panel
            .setID(PLUGIN.ID)
            .setContent(<Panel selection={editor.selection} editor={editor} />)
            .moveTo(x, y)
            .show();
    };

    // register leaf format
    Reactium.RTE.Format.register(PLUGIN.ID, {
        element: FormatElement,
    });

    // register sidebar button
    Reactium.RTE.Button.register(PLUGIN.ID, {
        order: 62,
        sidebar: true,
        button: props => <SidebarButton {...props} onClick={onButtonClick} />,
    });

    // register hotkey

    const { isInline } = editor;

    editor.isInline = n => (n.type === PLUGIN.ID ? true : isInline(n));

    return editor;
};
