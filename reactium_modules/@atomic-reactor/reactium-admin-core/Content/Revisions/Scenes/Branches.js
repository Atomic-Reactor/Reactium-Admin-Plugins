import React from 'react';
import op from 'object-path';
import cn from 'classnames';
import _ from 'underscore';
import { Button, Icon } from '@atomic-reactor/reactium-ui';
import Reactium, { __ } from 'reactium-core/sdk';
import { Scrollbars } from 'react-custom-scrollbars';
import SelectBranch from '../_helpers/SelectBranch';
import SelectCompare from '../_helpers/SelectCompare';

const slugify = name => {
    if (!name) return '';
    return require('slugify')(name, {
        replacement: '_', // replace spaces with replacement
        remove: /[^A-Za-z0-9_\s]/g, // regex to remove characters
        lower: true, // result in lower case
    });
};

const BranchesScene = props => {
    const { handle } = props;
    const { cx, state } = handle;
    const fromChanges = op.get(state, 'working.changes', {});
    const toChanges = op.get(state, 'compare.changes', {});
    const changes =
        Object.values(fromChanges).length + Object.values(toChanges).length;
    const from = { ...op.get(state, 'working.content', {}), ...fromChanges };
    const to = { ...op.get(state, 'compare.content', {}), ...toChanges };
    const fromBranch = op.get(from, 'history.branch', '');
    const fromBranchLabel = op.get(
        from,
        ['branches', fromBranch, 'label'],
        fromBranch,
    );
    const toBranch = op.get(to, 'history.branch', '');
    const toBranchLabel = op.get(to, ['branches', toBranch, 'label'], toBranch);

    const render = () => {
        const { rows, diffs } = getRowsData();

        return (
            state.activeScene === 'branches' && (
                <div className={cx('branches')}>
                    <div className={cx('branches-controls')}>
                        <div className={cx('branches-control')}>
                            <SelectBranch handle={handle} />
                        </div>
                        <div className={cx('branches-control')}>
                            <SelectCompare handle={handle} />
                        </div>
                    </div>
                    <Scrollbars
                        autoHeight={true}
                        autoHeightMin={'calc(100vh - 300px)'}>
                        <ul
                            className={cn(
                                cx('branches-diff'),
                                'branch-compare',
                            )}>
                            {renderRows(rows)}
                        </ul>
                    </Scrollbars>
                    <div className={cx('branches-controls')}>
                        <div className={cx('branch-diff-count')}></div>
                        <div className={cx('branches-control')}>
                            <Button
                                disabled={changes < 1}
                                onClick={handle.saveChanges}>
                                {__('Save Changes')}
                            </Button>
                        </div>
                    </div>
                </div>
            )
        );
    };

    const renderRows = rows => {
        const components = _.indexBy(Reactium.Content.Comparison.list, 'id');

        return rows.map(row => {
            const { fieldType, diff = false } = row;
            const fId = op.get(fieldType, 'fieldId', '');
            const ftId = op.get(fieldType, 'fieldType', '');

            const Component = op.get(
                components,
                [ftId, 'component'],
                ({ value }) => (
                    <div>
                        <pre>{JSON.stringify(value, null, 2)}</pre>
                    </div>
                ),
            );

            const className = cn(
                'branch-compare-row',
                `branch-compare-row-${slugify(ftId)}`,
            );

            return (
                <li key={fId} className={className}>
                    {['from', 'to'].map(direction => {
                        const value = row[direction];
                        return (
                            <div
                                key={direction}
                                className={cn(`branch-compare-${direction}`, {
                                    'branch-compare-diff': diff,
                                })}>
                                <div className='branch-compare-copy'>
                                    {renderCopyControl(direction, value, row)}
                                </div>
                                <div className='comparison-component'>
                                    <Component
                                        value={value}
                                        field={fieldType}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </li>
            );
        });
    };

    const getRowsData = () => {
        const fields = fieldData();
        const missingFrom = missingFieldsInType(from, fields);
        const missingTo = missingFieldsInType(to, fields);
        const rows = [];
        const diffs = {};

        if (missingFrom.length || missingTo.length) {
            rows.push({
                fieldType: {
                    fieldId: 'missing',
                    fieldSlug: 'missing',
                    fieldType: 'Missing',
                    fieldName: __('Missing Fields'),
                },
                from: missingFrom,
                to: missingTo,
            });
        }

        Object.values(fields).forEach(fieldType => {
            const slug = fieldType.fieldSlug;
            const fromFieldData = op.get(from, slug);
            const toFieldData = op.get(to, slug);
            const diff = !_.isEqual(fromFieldData, toFieldData);
            rows.push({
                fieldType,
                from: fromFieldData,
                to: toFieldData,
                diff,
            });

            diffs[slug] = diff;
        });

        return {
            rows,
            diffs,
        };
    };

    const fieldData = () => {
        const contentType = _.findWhere(state.types, { type: state.type });
        const fieldsByRegion = _.groupBy(
            Object.values(contentType.fields),
            'region',
        );
        const fields = [];
        _.sortBy(
            Object.values(contentType.regions).map(region => {
                let order;
                if (region.id === 'default') order = -1000;
                else if (region.id === 'sidebar') order = 1000;
                else order = op.get(region, 'order', 0);

                return { ...region, order };
            }),
            'order',
        ).forEach(({ id }) => {
            const regionFields = op.get(fieldsByRegion, id);
            regionFields
                .filter(({ fieldId }) => fieldId !== 'publisher')
                .forEach(field => fields.push(field));
        });

        return _.indexBy(
            fields.map(field => ({
                fieldSlug: slugify(field.fieldName),
                ...field,
            })),
            'fieldSlug',
        );
    };

    const missingFieldsInType = (content, fieldData) => {
        const missingKeys = Object.keys(content)
            .filter(fieldSlug => !(fieldSlug in fieldData))
            .filter(
                fieldSlug =>
                    ![
                        'objectId',
                        'title',
                        'uuid',
                        'slug',
                        'type',
                        'user',
                        'ACL',
                        'status',
                        'history',
                        'branches',
                        'publish',
                        'meta',
                        'createdAt',
                        'updatedAt',
                        'canRead',
                        'canWrite',
                        'schema',
                    ].includes(fieldSlug),
            );
        return missingKeys;
    };

    const renderCopyControl = (direction, value, row) => {
        const { fieldType, diff = false } = row;

        if (op.get(fieldType, 'fieldType') === 'Missing') return null;

        const changes = direction === 'to' ? fromChanges : toChanges;
        const target = direction === 'to' ? 'working' : 'compare';
        const icon =
            direction === 'to' ? 'Feather.ArrowLeft' : 'Feather.ArrowRight';
        const fieldName = op.get(fieldType, 'fieldName', '');
        const fieldSlug = op.get(fieldType, 'fieldSlug', '');

        const labels = {};
        labels.from = getFieldLabels(fieldName, fromBranchLabel, toBranchLabel);
        labels.to = getFieldLabels(fieldName, toBranchLabel, fromBranchLabel);

        return !op.has(changes, fieldSlug) ? (
            <Button
                key={`${direction}-copy`}
                disabled={!diff}
                data-tooltip={labels[direction].copy}
                data-align='left'
                data-vertical-align='middle'
                size={Button.ENUMS.SIZE.XS}
                color={Button.ENUMS.COLOR.CLEAR}
                onClick={() => {
                    handle.stageBranchChanges(
                        {
                            [fieldSlug]: value,
                        },
                        target,
                    );
                }}>
                <span className='sr-only'>{labels[direction].copy}</span>
                <Icon name={icon} />
            </Button>
        ) : (
            <Button
                key={`${direction}-undo`}
                data-tooltip={labels[direction].undo}
                data-align='left'
                data-vertical-align='middle'
                size={Button.ENUMS.SIZE.XS}
                color={Button.ENUMS.COLOR.CLEAR}
                onClick={() => {
                    handle.unstageBranchChange(fieldSlug, target);
                }}>
                <span className='sr-only'>{labels[direction].undo}</span>
                <Icon name='Linear.Undo2' />
            </Button>
        );
    };

    const getFieldLabels = (fieldName, fromLabel, toLabel) => {
        return {
            copy: __('Copy %fieldName from %fromLabel to %toLabel')
                .replace('%fieldName', fieldName)
                .replace('%fromLabel', fromLabel)
                .replace('%toLabel', toLabel),
            undo: __('Undo change to %fieldName in version %toLabel')
                .replace('%fieldName', fieldName)
                .replace('%fromLabel', fromLabel)
                .replace('%toLabel', toLabel),
        };
    };

    return render();
};

export default BranchesScene;
