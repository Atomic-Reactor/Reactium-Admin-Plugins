/**
 * -----------------------------------------------------------------------------
 * Imports
 * -----------------------------------------------------------------------------
 */
import op from 'object-path';
import _ from 'underscore';
import { Helmet } from 'react-helmet';
import React, { useMemo, useEffect, useRef, useState } from 'react';
import { Button, Icon } from '@atomic-reactor/reactium-ui';
import Reactium, { useHookComponent } from 'reactium-core/sdk';

/**
 * -----------------------------------------------------------------------------
 * Toolkit Element: EditorDemo
 * -----------------------------------------------------------------------------
 */
const testFormat = () => {
    const buttonProps = Reactium.RTE.ENUMS.PROPS.BUTTON;
    const iconProps = Reactium.RTE.ENUMS.PROPS.ICON;

    const plugin = {
        id: 'test',
        order: 0,
        toolbar: true,
        leaf: props => <span {...props} className='blue' />,
        button: ({ editor, ...props }) => (
            <Button
                {...buttonProps}
                active={Reactium.RTE.isMarkActive(editor, 'test')}
                onClick={e => Reactium.RTE.toggleMark(editor, 'test', e)}
                {...props}>
                <Icon {...iconProps} name='Linear.Link' />
            </Button>
        ),
    };

    return plugin;
};

const EditorDemo = props => {
    const editorRef = useRef();
    const [editor, setEditor] = useState(editorRef.current);
    const RichTextEditor = useHookComponent('RichTextEditor');

    const onChange = e => {
        // console.log(e.target.value);
    };

    const render = () => {
        return (
            <div style={{ paddingTop: 100, paddingLeft: 150 }}>
                <Helmet>
                    <title>Rich Text Editor</title>
                </Helmet>
                <RichTextEditor ref={editorRef} value={props.value} />
            </div>
        );
    };

    useEffect(() => {
        if (!editor) return;

        if (!op.get(editor.formats, 'test')) {
            editor.formats['test'] = testFormat();
            editor.setFormats(editor.formats);
        }

        editor.addEventListener('change', onChange);

        return () => {
            editor.removeEventListener('change', onChange);
        };
    });

    useEffect(() => {
        if (!editorRef.current) return;
        if (!editor) {
            setEditor(editorRef.current);
        }
    });

    return render();
};

// Default properties
EditorDemo.defaultProps = {
    value: [
        {
            type: 'paragraph',
            children: [
                {
                    text: 'Lorem ipsum dolor sit amet ',
                },
                {
                    text: 'vero eos et accusamus',
                    bold: true,
                },
                {
                    text: ' et iusto odio dignissimos ducimus qui blanditiis',
                },
            ],
        },
    ],
};

export default EditorDemo;