export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: NavigationItem[];
}

export const NavigationItems: NavigationItem[] = [
  {
    id: 'navigation',
    title: '',
    type: 'group',
    icon: 'icon-group',
    children: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'item',
        url: '/analytics',
        icon: 'feather icon-home'
      },
       {
        id: 'signin',
        title: 'Settings',
        type: 'item',
        url: '/login',
        icon: 'feather icon-settings',
        target: true,
        breadcrumbs: false
      },
       {
        id: 'signin',
        title: 'User Management',
        type: 'item',
        url: '/login',
        icon: 'feather icon-users',
        target: true,
        breadcrumbs: false
      },
      {
        id: 'signin',
        title: 'logout',
        type: 'item',
        url: '/login',
        icon: 'feather icon-log-in',
        target: true,
        breadcrumbs: false
      },

    ]
  },
 
];
