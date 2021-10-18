import React, { useEffect, useState } from 'react';
import _ from 'underscore';
import slugify from 'slugify';
import { useHookComponent } from 'reactium-core/sdk';

export const Tagbox = props => {
    const { TagsInput } = useHookComponent('ReactiumUI');

    const { add, cx, placeholder, remove, state } = props;

    let { selected, taxonomy = [] } = state;

    const slugs = _.pluck(
        selected.filter(({ deleted }) => deleted !== true),
        'slug',
    );

    const data = () =>
        taxonomy.map(({ slug, name }) => ({
            value: slug,
            label: formatter(name),
        }));

    const formatter = val => {
        if (!val) return val;

        const item = _.findWhere(taxonomy, { slug: slugify(val) });

        if (item) {
            const { name } = item;
            return String(name).toLowerCase();
        }

        return String(val).toLowerCase();
    };

    const onAdd = ({ item }) => {
        // create a new taxonomy item if it doesn't exist
        const slug = String(slugify(item)).toLowerCase();
        const create = !_.findWhere(taxonomy, { slug });

        item = { slug, name: item };

        add(item, create);
    };

    const onRemove = ({ item }) => {
        const tax =
            _.findWhere(taxonomy, { name: item }) ||
            _.findWhere(taxonomy, { slug: item });

        remove(tax);
    };

    const validator = val => {
        const sel = _.pluck(
            selected.filter(({ deleted }) => deleted !== true),
            'slug',
        );
        return !_.uniq(sel.map(formatter)).includes(formatter(val));
    };

    return (
        <div className={cx('tagbox')}>
            <TagsInput
                onAdd={onAdd}
                onRemove={onRemove}
                data={data()}
                formatter={formatter}
                placeholder={placeholder}
                validator={validator}
                value={slugs || []}
            />
        </div>
    );
};
