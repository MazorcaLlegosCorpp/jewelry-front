/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id      : 'navigation-features',
        title   : 'Navigation features',
        subtitle: 'Collapsable levels & badge styles',
        type    : 'group',
        icon    : 'heroicons_outline:bars-3',
        children: [
            {
                id   : 'navigation-features.badge-style-simple',
                title: 'Anillos',
                icon : 'heroicons_outline:chevron-right',
                type : 'basic',
                badge: {
                    title  : 'New!',
                    classes: 'text-teal-500',
                },
            },
            {
                id   : 'navigation-features.badge-style-simple',
                title: 'Aretes',
                icon : 'heroicons_outline:chevron-right',
                type : 'basic',
                badge: {
                    title  : 'New!',
                    classes: 'text-teal-500',
                },
            },
            {
                id   : 'navigation-features.badge-style-simple',
                title: 'Cadenas',
                icon : 'heroicons_outline:chevron-right',
                type : 'basic',
                badge: {
                    title  : 'New!',
                    classes: 'text-teal-500',
                },
            },
            {
                id   : 'navigation-features.badge-style-simple',
                title: 'Cruceros',
                icon : 'heroicons_outline:chevron-right',
                type : 'basic',
                badge: {
                    title  : 'New!',
                    classes: 'text-teal-500',
                },
            },
            {
                id   : 'navigation-features.badge-style-simple',
                title: 'Dijes',
                icon : 'heroicons_outline:chevron-right',
                type : 'basic',
                badge: {
                    title  : 'New!',
                    classes: 'text-teal-500',
                },
            },
            {
                id   : 'navigation-features.badge-style-simple',
                title: 'Exclusividades',
                icon : 'heroicons_outline:chevron-right',
                type : 'basic',
                badge: {
                    title  : 'New!',
                    classes: 'text-teal-500',
                },
            },
            {
                id   : 'navigation-features.badge-style-simple',
                title: 'Herrajes',
                icon : 'heroicons_outline:chevron-right',
                type : 'basic',
                badge: {
                    title  : 'New!',
                    classes: 'text-teal-500',
                },
            },
            {
                id   : 'navigation-features.badge-style-simple',
                title: 'Pulseras',
                icon : 'heroicons_outline:chevron-right',
                type : 'basic',
                badge: {
                    title  : 'New!',
                    classes: 'text-teal-500',
                },
            },
            {
                id   : 'navigation-features.badge-style-simple',
                title: 'Rosarios',
                icon : 'heroicons_outline:chevron-right',
                type : 'basic',
                badge: {
                    title  : 'New!',
                    classes: 'text-teal-500',
                },
            },
            {
                id   : 'navigation-features.badge-style-simple',
                title: 'Tobilleras',
                icon : 'heroicons_outline:chevron-right',
                type : 'basic',
                badge: {
                    title  : 'New!',
                    classes: 'text-teal-500',
                },
            },
        ],
    },
    {
        id      : 'pedidos-features',
        title   : 'Pedidos features',
        subtitle: 'Collapsable levels & badge styles',
        type    : 'group',
        icon    : 'heroicons_outline:bars-3',
        children: [
            {
                id   : 'navigation-features.badge-style-simple',
                title: 'Hacer un pedido',
                icon : 'heroicons_outline:clipboard-document-list',
                type : 'basic',
            },
            {
                id   : 'navigation-features.badge-style-simple',
                title: 'Mis pedidos',
                icon : 'heroicons_outline:clipboard-document-check',
                type : 'basic',
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
        id      : 'navigation-features',
        title   : 'Catalogo',
        tooltip : 'Catalogo de productos',
        type    : 'aside',
        icon    : 'heroicons_outline:bars-3',
        children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
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
