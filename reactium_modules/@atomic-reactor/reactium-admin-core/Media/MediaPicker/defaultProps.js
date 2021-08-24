import ENUMS from '../enums';
import { __ } from 'reactium-core/sdk';

const noop = () => {};

export default {
    ID: 'MediaPicker',
    confirm: false,
    debug: false,
    directory: 'all',
    dismissible: false,
    dropzoneProps: {
        config: {
            chunking: false,
            clickable: '[data-browse]',
            previewTemplate: '<span />',
        },
        debug: false,
    },
    filters: Object.keys(ENUMS.TYPE),
    itemsPerPage: 25,
    maxSelect: 1,
    minSelect: 0,
    namespace: 'ar-media-picker',
    page: 1,
    pages: 1,
    onCancel: noop,
    onChange: noop,
    onDismiss: noop,
    onError: noop,
    onInit: noop,
    onItemSelect: noop,
    onItemUnselect: noop,
    onLoad: noop,
    onMount: noop,
    onStatus: noop,
    onSubmit: noop,
    onUnMount: noop,
    searchFields: [
        'directory',
        'ext',
        'filename',
        'meta.description',
        'meta.tags',
        'meta.title',
        'type',
        'url',
    ],
    selection: [],
    submitLabel: __('Done'),
    title: __('Select Media'),
    type: 'all',
};
