import Reactium from 'reactium-core/sdk';
import ContentTypeEditor from './index';
import SidebarWidget from './SidebarWidget';
import Enums from './enums';
import FieldType from './FieldType';
import FieldTypeDialog from './FieldType/Dialog';
import Breadcrumbs from './Breadcrumbs';
import HeaderWidget from './HeaderWidget';
import ConentTypeList from './List';

const registerPlugin = async () => {
    await Reactium.Plugin.register(
        'ContentType',
        Reactium.Enums.priority.highest,
    );

    // Add ContentType SDK
    Reactium.ContentType = require('./sdk').default;

    // Register FieldType Base Components
    Reactium.Component.register('FieldType', FieldType);
    Reactium.Component.register('FieldTypeDialog', FieldTypeDialog);

    const permitted = await Reactium.Capability.check(['type-ui.view']);

    if (permitted) {
        await Reactium.Hook.run('content-type-enums', Enums);

        Reactium.Zone.addComponent({
            component: Breadcrumbs,
            order: -1000,
            zone: ['admin-header'],
        });

        Reactium.Zone.addComponent({
            id: 'ADMIN-CONTENT-TYPE-ADD',
            component: HeaderWidget,
            order: 2,
            zone: ['admin-logo'],
        });

        Reactium.Zone.addComponent({
            component: SidebarWidget,
            zone: ['admin-sidebar-menu'],
            order: 300,
        });

        Reactium.Zone.addComponent({
            component: ContentTypeEditor,
            zone: ['admin-content-type-editor'],
            order: 0,
            Enums,
        });

        Reactium.Zone.addComponent({
            id: 'ADMIN-CONTENT-TYPE-LIST',
            component: ConentTypeList,
            order: -1000,
            zone: ['admin-content-types'],
        });
    }
};
registerPlugin();
