import React from 'react';
import ENUMS from './enums';
import op from 'object-path';
import PropTypes from 'prop-types';
import { useHandle } from 'reactium-core/sdk';
import { Button, Dialog } from '@atomic-reactor/reactium-ui';

/**
 * -----------------------------------------------------------------------------
 * Functional Component: ConfirmBox
 * -----------------------------------------------------------------------------
 */
const ConfirmBox = ({
    buttons,
    message,
    onConfirm,
    onCancel,
    style,
    title,
    ...props
}) => {
    const _onCancel = () => {
        if (onCancel) {
            onCancel();
        }
    };

    const _onConfirm = () => {
        if (onConfirm) {
            onConfirm();
        }
    };

    const Buttons = () =>
        Object.values(buttons).map((btn, i) => {
            if (op.get(btn, 'label')) {
                const onClick =
                    op.get(btn, 'confirm', false) === true
                        ? _onConfirm
                        : _onCancel;

                const clr =
                    op.get(btn, 'cancel') === true ? 'danger' : 'primary';

                return (
                    <Button
                        key={`confirm-box-button-${i}`}
                        size='sm'
                        type='button'
                        color={clr}
                        onClick={onClick}>
                        {btn.label}
                    </Button>
                );
            } else {
                return <span key={`confirm-box-button-${i}`}>{btn}</span>;
            }
        });

    return (
        <div className='admin-confirm-box' style={style}>
            <Dialog
                header={{ title }}
                {...props}
                onDismiss={() => _onCancel()}
                dismissable={true}
                collapsible={false}>
                <div className='admin-confirm-box-message'>{message}</div>
                <div className='admin-confirm-box-buttons'>
                    <Buttons />
                </div>
            </Dialog>
        </div>
    );
};

ConfirmBox.propTypes = {
    buttons: PropTypes.object,
    message: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    onCancel: PropTypes.func,
    onConfirm: PropTypes.func,
    style: PropTypes.object,
    title: PropTypes.string,
};

ConfirmBox.defaultProps = {
    buttons: {
        no: {
            label: ENUMS.TEXT.LABEL.NO,
            cancel: true,
        },
        yes: {
            label: ENUMS.TEXT.LABEL.YES,
            confirm: true,
        },
    },
    message: ENUMS.TEXT.MESSAGE,
    title: ENUMS.TEXT.TITLE,
};

export default ConfirmBox;

/**
 * @api {RegisteredComponent} <ConfirmBox/> ConfirmBox
 * @apiDescription Dialog that asks the user to confirm or cancel the current interaction.
 * @apiName ConfirmBox
 * @apiGroup Registered Component
 * @apiParam {Object} buttons The action buttons to display.
 * @apiParam {Function} onConfirm Function to execute when the interaction is confirmed.
 * @apiParam {Function} onCancel Function to execute when the interaction is canceled.
 * @apiParam {Mixed} [message='Are you sure?'] The confirmation message. The message can be any valid `PropTypes.node` value.
 * @apiParam {Object} [style] React style object applied to the ConfirmBox wrapper div.
 * @apiParam {String} [title='Confirm'] The titlebar content.
 * @apiExample useHookComponent() hook import
import { useHookComponent } from 'reactium-core/sdk';

const MyComponent = () => {
    const ConfirmBox = useHookComponent('ConfirmBox');
    return (
        <ConfirmBox
          title='Confirm Delete'
          message='Are you sure?'
          onCancel={() => console.log('No')}
          onConfirm={() => console.log('Yes')}
        />
    );
}

 * @apiExample Simple Usage:
import ConfirmBox from 'reactium_modules/@atomic-reactor/reactium-admin-core/registered-components/ConfirmBox';

...

<ConfirmBox
  title='Confirm Delete'
  message='Are you sure?'
  onCancel={() => console.log('No')}
  onConfirm={() => console.log('Yes')}
/>

 * @apiExample Custom Button Labels:
...

const buttons = { ...ConfirmBox.defaultProps.buttons };
buttons.no.label = 'Cancel';
buttons.yes.label = 'Proceed';

...

<ConfirmBox
  buttons={buttons}
  title='Confirm Delete'
  message='Are you sure?'
  onCancel={() => console.log('No')}
  onConfirm={() => console.log('Yes')}
/>

@apiExample Custom Buttons:
import { Button } from '@atomic-reactor/reactium-ui';

...

// Display: No, Yes, Maybe buttons.
const buttons = { ...ConfirmBox.defaultProps.buttons };
buttons.maybe = (
  <Button
    size='xs'
    onClick={() => console.log('maybe')}>
    Maybe
  </Button>
);

...

<ConfirmBox
  buttons={buttons}
  title='Confirm Delete'
  message='Are you sure?'
  onCancel={() => console.log('No')}
  onConfirm={() => console.log('Yes')}
/>

// Re-order buttons
const buttons = {
  yes: ConfirmBox.defaultProps.buttons.yes,
  no: ConfirmBox.defaultProps.buttons.no,
};

// Delete a button
const buttons = { ...ConfirmBox.defaultProps.buttons };
delete buttons.no;

 @apiExample Dependencies
import op from 'object-path';
import { useHandle } from 'reactium-core/sdk';
import { Button, Dialog } from '@atomic-reactor/reactium-ui';
 */
