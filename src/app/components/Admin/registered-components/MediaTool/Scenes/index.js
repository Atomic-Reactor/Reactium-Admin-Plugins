import _ from 'underscore';
import op from 'object-path';
import Thumb from './Scene/Thumb';
import Action from './Scene/Action';
import Upload from './Scene/Upload';
import Library from './Scene/Library';
import External from './Scene/External';
import React, { useEffect, useState } from 'react';
import useDirectories from 'components/Admin/Media/Directory/useDirectories';

import Reactium, {
    __,
    useEventHandle,
    useHookComponent,
    useRefs,
    useStatus,
    useHandle,
} from 'reactium-core/sdk';

const initialActive = (max, value) => {
    if (value.length > 0) return 'thumb';
    return 'action';
};

const MediaTool = props => {
    const refs = useRefs();
    const { max } = props;

    let type = op.get(props, 'type', ['all']);
    type = Array.isArray(op.get(props, 'type', ['all'])) ? type : [type];

    const [value, setSelection] = useState(props.value || []);

    // DEBUG - HELP REFACTOR
    console.log({ value });

    const dirs = useDirectories() || [];
    const [active, setActive, isActive] = useStatus(initialActive(max, value));
    const [directories, updateDirectories] = useState(dirs);

    const setDirectories = newDirectories => {
        if (_.isString(newDirectories)) {
            newDirectories = String(newDirectories)
                .replace(/ /g, '-')
                .replace(/[^a-z0-9\-\_\/]/gi, '')
                .toLowerCase();

            newDirectories = newDirectories.startsWith('/')
                ? newDirectories.substr(1)
                : newDirectories;

            newDirectories = _.flatten([directories, newDirectories]);
        }

        newDirectories = !newDirectories
            ? []
            : _.chain(newDirectories)
                  .compact()
                  .uniq()
                  .value();

        newDirectories.sort();

        updateDirectories(newDirectories);
    };

    const ElementDialog = useHookComponent('ElementDialog');
    const { Dropzone, Scene } = useHookComponent('ReactiumUI');

    const add = (items = []) => {
        items = Array.isArray(items) ? items : [items];
        items = items.map(({ objectId, url }) => ({ objectId, url }));
        items = max === 1 ? [_.last(items)] : items;

        const values = Array.from(value);

        // if single selection, remove all other values
        if (max === 1) values.forEach(item => op.set(item, 'delete', true));

        // add the items to the value
        items.forEach(item => values.push(item));

        // update the selection`
        setSelection(values);

        // show thumbs
        _.defer(() => nav('thumb', 'left'));
    };

    const cx = Reactium.Utils.cxFactory('media-tool');

    const back = () => refs.get('scene').back();

    const browseFiles = () => {
        const dropzone = refs.get('dropzone');
        dropzone.browseFiles();
    };

    const nav = (panel, direction) => {
        const scene = refs.get('scene');
        if (scene) {
            scene.navTo({ panel, direction });
        }
    };

    const remove = async objectId => {
        const values = Array.from(value);

        values.forEach(item => {
            if (item.objectId === objectId) op.set(item, 'delete', true);
        });

        const count = _.reject(values, { delete: true }).length;
        if (max === 1 || count < 1) await nav('action', 'right');

        setSelection(values);
    };

    const removeAll = async (exclude = []) => {
        if (!value) return;
        const values = Array.from(value).filter(
            ({ objectId }) => !exclude.includes(objectId),
        );
        values.forEach(item => op.set(item, 'delete', true));
        await nav('action', 'right');
        setSelection(values);
    };

    const reset = () => {
        // clear editor.media value
        Reactium.Cache.del('editor.media');
        setActive('action');
        removeAll();
    };

    const _handle = () => ({
        max,
        add,
        active,
        back,
        browseFiles,
        cx,
        directories,
        isActive,
        nav,
        refs,
        remove,
        removeAll,
        setActive,
        setDirectories,
        setSelection,
        type,
        value,
    });

    const [handle, setHandle] = useEventHandle(_handle());

    const onFileAdded = async e => {
        const upload = refs.get('upload');
        let { directory } = upload.value;

        if (!isActive('upload')) {
            if (!directory) directory = 'uploads';
            upload.setDirectory(directory);
            await nav('upload', 'left');
        }

        if (!directory) {
            upload.setError(__('Select directory'), e.added);
            return;
        }

        upload.add(Reactium.Media.upload(e.added, directory));
    };

    // update directories
    useEffect(() => {
        if (!dirs) return;
        const newDirectories = _.chain([directories, dirs])
            .flatten()
            .uniq()
            .value();

        if (!_.isEqual(directories, newDirectories)) {
            setDirectories(newDirectories);
        }
    }, [dirs]);

    // update handle on value change
    const updateHandle = () => {
        const newHandle = _handle();
        if (_.isEqual(newHandle, handle)) return;

        Object.keys(newHandle).forEach(key =>
            op.set(handle, key, newHandle[key]),
        );

        setHandle(handle);
    };

    useEffect(updateHandle);

    // initial active
    useEffect(() => {
        if (active || !value) return;
        setActive(initialActive(max, value || []));
    }, [active, max, value]);

    useEffect(() => {
        return () => {
            reset();
        };
    }, []);

    // reset on new
    // TODO: Externalize this. Put reset on handle, let parent component do this
    // useEffect(reset, [op.get(editor, 'value.objectId')]);

    return (
        <div className={cx()}>
            <Dropzone
                files={{}}
                onFileAdded={onFileAdded}
                ref={elm => refs.set('dropzone', elm)}>
                <Scene
                    active={active}
                    className={cx('scene')}
                    onChange={({ active }) => setActive(active, true)}
                    ref={elm => refs.set('scene', elm)}>
                    <Action handle={handle} id='action' />
                    <Thumb handle={handle} id='thumb' />
                    <External handle={handle} id='external' />
                    <Library handle={handle} id='library' />
                    <Upload
                        handle={handle}
                        id='upload'
                        ref={elm => refs.set('upload', elm)}
                    />
                </Scene>
            </Dropzone>
        </div>
    );
};

export default MediaTool;