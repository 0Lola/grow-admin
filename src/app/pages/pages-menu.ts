import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
    {
        title: 'Dashboard',
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
        title: 'Forms Result',
        icon: 'nb-bar-chart',
        link: '/pages/forms/result',
    },
    {
        title: 'Create Forms',
        icon: 'nb-compose',
        link: '/pages/forms/create',
    },
    {
        title: 'Setting',
        group: true,
    },
    {
        title: 'Account Management',
        icon: 'nb-person',
        link: '/pages/account/management',
    },
];
