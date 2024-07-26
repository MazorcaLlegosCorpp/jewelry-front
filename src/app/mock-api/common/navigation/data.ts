/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id      : 'pedidos-features',
        title   : 'Pedidos',
        type    : 'group',
        icon    : 'heroicons_outline:bars-3',
        children: [
            {
                id   : 'pedidos-features.pedido',
                title: 'Hacer un pedido',
                icon : 'heroicons_outline:clipboard-document-list',
                type : 'basic',
            },
            {
                id   : 'pedidos-features.mis-pedidos',
                title: 'Mis pedidos',
                icon : 'heroicons_outline:clipboard-document-check',
                type : 'basic',
                link: '/my-orders'
            },
        ],
    },
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id      : 'profile',
        title   : 'Perfil',
        tooltip : 'Informacion de mi perfil',
        type    : 'basic',
        icon    : 'heroicons_outline:user-circle',
        link    : '/profile'
    },
    {
        id      : 'inventory',
        title   : 'Catalogo',
        tooltip : 'Busca productos',
        type    : 'basic',
        icon    : 'heroicons_outline:book-open',
        link    : '/inventory'
    },
    {
        id      : 'entrepreneur',
        title   : 'Emprendedores',
        tooltip : 'Visualiza tus emprendedores!',
        type    : 'basic',
        icon    : 'heroicons_outline:users',
        link    : '/entrepeneurs'
    },
    {
        id      : 'pedidos-features',
        title   : 'Pedidos',
        tooltip : 'Todo sobe los pedidos',
        type    : 'aside',
        icon    : 'heroicons_outline:square-3-stack-3d',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
    },
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id   : 'perfil',
        title: 'Perfil',
        type : 'basic',
        icon : 'heroicons_outline:user-circle',
        link : '/profile'
    },
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    },
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id   : 'perfil',
        title: 'Perfil',
        type : 'basic',
        icon : 'heroicons_outline:user-circle',
        link : '/profile'
    },
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    },
];
