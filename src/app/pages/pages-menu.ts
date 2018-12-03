import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [

    // custom
    {
        title: 'IoT Dashboard',
        icon: 'nb-home',
        link: '/pages/dashboard',
        home: true,
    },
    {
        title: 'Forms',
        group: true,
    },
    {
        title: 'Forms Management',
        icon: 'nb-grid-a-outline',
        link: '/pages/forms/management',
    },
    {
        title: 'Create Forms',
        icon: 'nb-compose',
        link: '/pages/forms/create',
    },
    {
        title: 'Account',
        group: true,
    },
    {
        title: 'User Management',
        icon: 'nb-person',
        link: '/pages/account/management',
    },
    {
        title: 'Setting',
        group: true,
    },
    {
        title: 'Admin Setting',
        icon: 'nb-gear',
        link: '/pages/forms/layouts',
    },

];
