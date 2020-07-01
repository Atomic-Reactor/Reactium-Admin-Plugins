import React from 'react';
import { useMediaFileTypes } from '../_utils';
import Reactium, { __, useHookComponent } from 'reactium-core/sdk';

/**
 * -----------------------------------------------------------------------------
 * Functional Component: FieldType
 * -----------------------------------------------------------------------------
 */
export const FieldType = props => {
    const { DragHandle, id } = props;

    const [types] = useMediaFileTypes();
    const cx = Reactium.Utils.cxFactory('field-type-media');
    const { Checkbox } = useHookComponent('ReactiumUI');
    const FieldTypeDialog = useHookComponent('FieldTypeDialog', DragHandle);

    return (
        <FieldTypeDialog {...props} showHelpText={false}>
            <div className={cx()}>
                <div className='form-group'>
                    <select name='type'>
                        <option value='all'>{__('Type')}</option>
                        {types.map(({ label, value }, i) => (
                            <option key={`media-type-${id}-${i}`} value={value}>
                                {label}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='row'>
                    <div className='col-xs-12 col-md-5 pb-xs-20'>
                        <div className='form-group'>
                            <label>
                                <input
                                    type='text'
                                    name='textSelect'
                                    placeholder={__('Select Label')}
                                />
                            </label>
                        </div>
                    </div>
                    <div className='col-xs-12 col-md-5 pb-xs-20 px-md-16'>
                        <div className='form-group'>
                            <label>
                                <input
                                    type='text'
                                    name='textUpload'
                                    placeholder={__('Upload Label')}
                                />
                            </label>
                        </div>
                    </div>
                    <div className='col-xs-12 col-md-2 pb-xs-20'>
                        <div className='form-group'>
                            <label>
                                <input
                                    name='max'
                                    type='text'
                                    placeholder={__('Max')}
                                />
                            </label>
                        </div>
                    </div>
                </div>
                <div className='checks'>
                    <Checkbox
                        name='required'
                        label={__('Required')}
                        labelAlign='right'
                        value={true}
                    />
                </div>
            </div>
        </FieldTypeDialog>
    );
};
