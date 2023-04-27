import React from 'react';
import op from 'object-path';
import { __ } from 'reactium-core/sdk';
import MenuItem from 'reactium_modules/@atomic-reactor/reactium-admin-core/registered-components/MenuItem';

const isActive = (match = {}, location) =>
    String(op.get(match, 'url', '/'))
        .replace(/\\/gi, '')
        .toLowerCase()
        .startsWith('/admin/media');

export default () => (
    <MenuItem
        label={__('Media')}
        route='/admin/media/1'
        icon='Linear.Picture'
        isActive={isActive}
    />
);
