import React, { useEffect, useState } from 'react';
import _ from 'underscore';
import op from 'object-path';
import RTEPlugin from '../../RTEPlugin';
import Reactium, { __ } from 'reactium-core/sdk';
import { Editor, Transforms } from 'slate';
import { Button, Icon } from '@atomic-reactor/reactium-ui';
import Panel from './Panel';

export const colors = {
    'color-black': '#000000',
    'color-gray-dark': '#333333',
    'color-gray': '#999999',
    'color-grey': '#CFCFCF',
    'color-grey-light': '#F7F7F7',
    'color-white': '#FFFFFF',
    'color-white-dark': '#FDFDFD',
    'color-yellow': '#F4F19C',
    'color-orange': '#E69840',
    'color-pink': '#D877A0',
    'color-red': '#E09797',
    'color-purple': '#7A7CEF',
    'color-blue': '#4F82BA',
    'color-green': '#659A3F',
    'color-green-light': '#B2BB50',
};

const Plugin = new RTEPlugin({ type: 'formatter', order: 100 });

Plugin.callback = editor => {
    const onButtonClick = (editor, e) => {
        e.preventDefault();
        editor.panel
            .setID('formatter')
            .setContent(<Panel selection={editor.selection} />)
            .show();
    };

    // register buttons
    Reactium.RTE.Button.register(Plugin.type, {
        order: -1000,
        sidebar: true,
        button: ({ editor, ...props }) => {
            const [selection, setSelection] = useState(editor.selection);
            useEffect(() => {
                if (!_.isEqual(selection, editor.selection)) {
                    setSelection(editor.selection);
                }
            }, [editor.selection]);

            return (
                <Button
                    {...Reactium.RTE.ENUMS.PROPS.BUTTON}
                    onClick={e => onButtonClick(editor, e)}
                    data-tooltip={__('Text Formatter')}
                    {...props}>
                    <Icon
                        {...Reactium.RTE.ENUMS.PROPS.ICON}
                        name='Feather.Type'
                    />
                </Button>
            );
        },
    });

    Reactium.RTE.Button.register('align-left', {
        order: 0,
        formatter: 'alignment',
        button: props => (
            <Button {...props}>
                <Icon name='Feather.AlignLeft' />
            </Button>
        ),
    });

    Reactium.RTE.Button.register('align-center', {
        order: 0,
        formatter: 'alignment',
        button: props => (
            <Button {...props}>
                <Icon name='Feather.AlignCenter' />
            </Button>
        ),
    });

    Reactium.RTE.Button.register('align-justify', {
        order: 0,
        formatter: 'alignment',
        button: props => (
            <Button {...props}>
                <Icon name='Feather.AlignJustify' />
            </Button>
        ),
    });

    Reactium.RTE.Button.register('align-right', {
        order: 0,
        formatter: 'alignment',
        button: props => (
            <Button {...props}>
                <Icon name='Feather.AlignRight' />
            </Button>
        ),
    });

    // register blocks
    Reactium.RTE.Block.register('styled', {
        order: -1,
        formatter: true,
        label: 'Body Text',
        size: 16,
        element: props => <span {...props} className='ar-rte-styled' />,
    });

    Reactium.RTE.Block.register('p', {
        order: 0,
        formatter: true,
        label: 'Paragraph',
        size: 16,
        element: ({ children, ...props }) => <p {...props}>{children}</p>,
    });

    Reactium.RTE.Block.register('break', {
        element: ({ children }) => (
            <>
                <br />
                {children}
            </>
        ),
    });

    Reactium.RTE.Block.register('h1', {
        order: 1,
        formatter: true,
        label: 'Heading 1',
        size: 32,
        element: props => <h1 {...props} />,
    });

    Reactium.RTE.Block.register('h2', {
        order: 2,
        formatter: true,
        label: 'Heading 2',
        size: 24,
        element: props => <h2 {...props} />,
    });

    Reactium.RTE.Block.register('h3', {
        order: 3,
        formatter: true,
        label: 'Heading 3',
        size: 18,
        element: props => <h3 {...props} />,
    });

    Reactium.RTE.Block.register('h4', {
        order: 4,
        formatter: true,
        label: 'Heading 4',
        size: 16,
        element: props => <h4 {...props} />,
    });

    Reactium.RTE.Block.register('h5', {
        order: 5,
        formatter: true,
        label: 'Heading 5',
        size: 14,
        element: props => <h5 {...props} />,
    });

    Reactium.RTE.Block.register('h6', {
        order: 6,
        formatter: true,
        label: 'Heading 6',
        size: 12,
        element: props => <h6 {...props} />,
    });

    Reactium.RTE.Block.register('blockquote', {
        order: 10,
        formatter: true,
        label: 'Quote',
        size: 16,
        element: props => <blockquote {...props} />,
    });

    Reactium.RTE.Block.register('div', {
        element: element => {
            const node = op.get(element, 'children.props.node');
            const props = { ...node };

            op.del(props, 'type');
            op.del(props, 'blocked');
            op.del(props, 'children');

            return <div {...element} {...props} />;
        },
    });

    // register fonts
    Reactium.RTE.Font.register('font-1', {
        label: 'Montserrat',
        size: [10, 12, 14, 16, 18, 24, 32, 44, 56, 64, 72, 96],
        weight: [
            {
                weight: 100,
                label: 'Thin',
                family: 'Montserrat, Helvetica, Arial, sans-serif',
            },
            {
                weight: 200,
                label: 'Extra Light',
                family: '"Montserrat Thin", Helvetica, Arial, sans-serif',
            },
            {
                weight: 300,
                label: 'Light',
                family: '"Montserrat Light", Helvetica, Arial, sans-serif',
            },
            {
                weight: 400,
                label: 'Regular',
                family: '"Montserrat Regular", Helvetica, Arial, sans-serif',
            },
            {
                weight: 500,
                label: 'Medium',
                family: '"Montserrat Medium", Helvetica, Arial, sans-serif',
            },
            {
                weight: 600,
                label: 'Semi-Bold',
                family: '"Montserrat SemiBold", Helvetica, Arial, sans-serif',
            },
            {
                weight: 800,
                label: 'Bold',
                family: '"Montserrat Bold", Helvetica, Arial, sans-serif',
            },
            {
                weight: 900,
                label: 'Black',
                family: '"Montserrat Black", Helvetica, Arial, sans-serif',
            },
        ],
    });

    Reactium.RTE.Font.register('font-2', {
        label: 'Cardo',
        size: [10, 12, 14, 16, 18, 24, 32, 44, 56, 64, 72, 96],
        weight: [
            {
                weight: 400,
                label: 'Regular',
                family: 'Cardo, "Times New Roman", Gotham, serif',
            },
            {
                weight: 600,
                label: 'Semi-Bold',
                family: 'Cardo, "Times New Roman", Gotham, serif',
            },
            {
                weight: 800,
                label: 'Bold',
                family: 'Cardo, "Times New Roman", Gotham, serif',
            },
        ],
    });

    Reactium.RTE.Font.register('font-3', {
        label: 'Arial',
        size: [10, 12, 14, 16, 18, 24, 32, 44, 56, 64, 72, 96],
        weight: [
            { weight: 400, label: 'Regular', family: 'Arial, sans-serif' },
            { weight: 600, label: 'Semi-Bold', family: 'Arial, sans-serif' },
            { weight: 800, label: 'Bold', family: 'Arial, sans-serif' },
        ],
    });

    Reactium.RTE.Font.register('font-4', {
        label: 'Helvetica',
        size: [10, 12, 14, 16, 18, 24, 32, 44, 56, 64, 72, 96],
        weight: [
            {
                weight: 400,
                label: 'Regular',
                family: 'Helvetica, Arial, sans-serif',
            },
            {
                weight: 600,
                label: 'Semi-Bold',
                family: 'Helvetica, Arial, sans-serif',
            },
            {
                weight: 800,
                label: 'Bold',
                family: 'Helvetica, Arial, sans-serif',
            },
        ],
    });

    Reactium.RTE.Font.register('font-5', {
        label: 'Courier',
        size: [10, 12, 14, 16, 18, 24, 32, 44, 56, 64, 72, 96],
        weight: [
            {
                weight: 400,
                label: 'Regular',
                family: '"Courier New", Courier, monospace',
            },
            {
                weight: 600,
                label: 'Semi-Bold',
                family: '"Courier New", Courier, monospace',
            },
            {
                weight: 800,
                label: 'Bold',
                family: '"Courier New", Courier, monospace',
            },
        ],
    });

    // register colors
    Object.entries(colors).forEach(([key, value]) =>
        Reactium.RTE.Color.register(key, { value, label: value }),
    );

    // Extend editor
    editor.lastLine = () => [editor.children.length - 1, 0];
    editor.focusEnd = () => Transforms.select(editor, Editor.end(editor, []));

    return editor;
};

export default Plugin;
