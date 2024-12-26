import { INavigation } from '@types';

const Home: INavigation = {
  name: 'Home',
  url: '/',
  navigations: [],
  breadcrumbs: [],
};

const Admin: INavigation = {
  name: 'Admin',
  url: '/admin',
  navigations: [],
  breadcrumbs: [
    Home,
    {
      name: 'Admin',
      url: '/admin',
      navigations: [],
      breadcrumbs: [],
    },
  ],
};

const Blogs: INavigation = {
  name: 'Blogs',
  url: '/blogs',
  breadcrumbs: [
    Home,
    {
      name: 'Blogs',
      url: '/blogs',
      breadcrumbs: [],
      navigations: [],
    },
  ],
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
};

const Vim: INavigation = {
  name: 'Vim',
  url: '/blogs/vim',
  navigations: [],
  breadcrumbs: [
    Home,
    Blogs,
    {
      name: 'Vim',
      url: '/blogs/vim',
      navigations: [],
      breadcrumbs: [],
    },
  ],
};

const Links: INavigation = {
  name: 'Links',
  url: '/admin/links',
  navigations: [],
  breadcrumbs: [
    Home,
    Admin,
    {
      name: 'Links',
      url: '/links',
      navigations: [],
      breadcrumbs: [],
    },
  ],
};

const Linux: INavigation = {
  name: 'Linux',
  url: '/blogs/linux',
  navigations: [],
  breadcrumbs: [
    Home,
    Blogs,
    {
      name: 'Linux',
      url: '/linux',
      navigations: [],
      breadcrumbs: [],
    },
  ],
};

export const NavigationData: INavigation[] = [
  Home,
  {
    name: 'Rust',
    url: '/rust',
    navigations: [],
    breadcrumbs: [],
  },
  Vim,
  Linux,
  {
    name: 'Links',
    url: '/links',
    navigations: [],
    breadcrumbs: [],
  },
  Admin,
  Blogs,
];

export const NavigationMap = {
  [Home.url]: Home,
  [Admin.url]: Admin,
  [Blogs.url]: Blogs,
  [Linux.url]: Linux,
  [Links.url]: Links,
};
