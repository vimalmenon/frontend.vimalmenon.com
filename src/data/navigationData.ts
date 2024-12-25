import { INavigation } from '@types';

export const NavigationData: INavigation[] = [
  {
    name: 'Home',
    url: '/',
    navigations: [],
  },
  {
    name: 'Rust',
    url: '/rust',
    navigations: [],
  },
  {
    name: 'Tmux',
    url: '/tmux',
    navigations: [],
  },
  {
    name: 'Vim',
    url: '/vim',
    navigations: [],
  },
  {
    name: 'Linux',
    url: '/linux',
    navigations: [],
  },
  {
    name: 'Links',
    url: '/links',
    navigations: [],
  },
  {
    name: 'Admin',
    url: '/admin',
    navigations: [],
  },
  {
    name: 'Blogs',
    url: '/blogs',
    navigations: [
      {
        name: 'Vim',
        url: '/vim',
        navigations: [],
      },
      {
        name: 'Linux',
        url: '/linux',
        navigations: [],
      },
      {
        name: 'Links',
        url: '/links',
        navigations: [],
      },
    ],
  },
];
