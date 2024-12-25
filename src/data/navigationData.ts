import { INavigation } from '@types';

export const NavigationData: INavigation[] = [
  {
    name: 'Home',
    url: '/',
    navigations: [],
    breadcrumbs: [],
  },
  {
    name: 'Rust',
    url: '/rust',
    navigations: [],
    breadcrumbs: [],
  },
  {
    name: 'Tmux',
    url: '/tmux',
    navigations: [],
    breadcrumbs: [],
  },
  {
    name: 'Vim',
    url: '/vim',
    navigations: [],
    breadcrumbs: [],
  },
  {
    name: 'Linux',
    url: '/linux',
    navigations: [],
    breadcrumbs: [],
  },
  {
    name: 'Links',
    url: '/links',
    navigations: [],
    breadcrumbs: [],
  },
  {
    name: 'Admin',
    url: '/admin',
    navigations: [],
    breadcrumbs: [],
  },
  {
    name: 'Blogs',
    url: '/blogs',
    breadcrumbs: [],
    navigations: [
      {
        name: 'Vim',
        url: '/vim',
        navigations: [],
        breadcrumbs: [],
      },
      {
        name: 'Linux',
        url: '/linux',
        navigations: [],
        breadcrumbs: [],
      },
      {
        name: 'Links',
        url: '/links',
        navigations: [],
        breadcrumbs: [],
      },
    ],
  },
];
