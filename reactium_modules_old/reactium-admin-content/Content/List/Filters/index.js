import _ from 'underscore';
import op from 'object-path';
import React, { useEffect, useRef } from 'react';
import { useHookComponent } from 'reactium-core/sdk';

export default ({ list }) => {
    const ddRef = useRef();

    const { setState, state = {} } = list;

    const status = op.get(state, 'filter');

    const { Button, Dropdown, Icon } = useHookComponent('ReactiumUI');

    const buttonProps = {
        color: Button.ENUMS.COLOR.CLEAR,
        type: Button.ENUMS.TYPE.BUTTON,
        style: { width: 40, height: 40, padding: 0 },
    };

    const statuses = () => {
        let list = op.get(
            state,
            'contentType.fields.publisher.statuses',
            op.get(state, 'statuses'),
        );

        list = Array.isArray(list)
            ? list
            : String(list)
                  .replace(/ /gi, '')
                  .split(',');

        return _.chain(['ALL', list, 'TRASH'])
            .flatten()
            .compact()
            .uniq()
            .value()
            .map(item => ({ label: item, value: item }));
    };

    const setStatus = newStatus =>
        setState({ filter: newStatus === 'ALL' ? null : newStatus });

    useEffect(() => {
        ddRef.current.setState({ selection: [op.get(state, 'filter')] });
    }, [op.get(state, 'filter')]);

    return (
        <Dropdown
            align={Dropdown.ENUMS.ALIGN.RIGHT}
            data={statuses()}
            maxHeight='calc(100vh - 150px)'
            onItemSelect={({ item }) => setStatus(item.value)}
            ref={ddRef}
            selection={[op.get(state, 'filter', null)]}>
            <div className='flex middle'>
                {status && (
                    <Button
                        className='mr-xs-8 ml-xs-12'
                        color={Button.ENUMS.COLOR.TERTIARY}
                        onClick={() => setStatus('ALL')}
                        outline
                        size={Button.ENUMS.SIZE.XS}
                        style={{ padding: '2px 4px 2px 5px', maxHeight: 20 }}
                        type={Button.ENUMS.TYPE.BUTTON}>
                        {status}
                        <Icon
                            name='Feather.X'
                            size={14}
                            className='ml-xs-4'
                            style={{ marginTop: -1 }}
                        />
                    </Button>
                )}
                <Button {...buttonProps} data-dropdown-element>
                    <Icon name='Linear.Funnel' size={20} />
                </Button>
            </div>
        </Dropdown>
    );
};
