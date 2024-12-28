import { INavigation } from '@types';

const Home: INavigation = {
  name: 'Home',
  url: '/',
  breadcrumbs: [
    {
      name: 'Home',
      url: '/',
      breadcrumbs: [],
    },
  ],
};

const Admin: INavigation = {
  name: 'Admin',
  url: '/admin',
  breadcrumbs: [
    Home,
    {
      name: 'Admin',
      url: '/admin',
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
    },
  ],
};

const Vim: INavigation = {
  name: 'Vim',
  url: '/blogs/vim',
  breadcrumbs: [
    Home,
    Blogs,
    {
      name: 'Vim',
      url: '/blogs/vim',
      breadcrumbs: [],
    },
  ],
};

const Links: INavigation = {
  name: 'Links',
  url: '/admin/links',
  breadcrumbs: [
    Home,
    Admin,
    {
      name: 'Links',
      url: '/links',
      breadcrumbs: [],
    },
  ],
};

const Linux: INavigation = {
  name: 'Linux',
  url: '/blogs/linux',
  breadcrumbs: [
    Home,
    Blogs,
    {
      name: 'Linux',
      url: '/blogs/linux',
      breadcrumbs: [
        Home,
        Blogs,
        {
          name: 'Linux',
          url: '/blogs/linux',
          breadcrumbs: [],
        },
      ],
    },
  ],
};
const Rust: INavigation = {
  name: 'Rust',
  url: '/blogs/rust',
  breadcrumbs: [
    Home,
    Blogs,
    {
      name: 'Rust',
      url: '/blogs/rust',
      breadcrumbs: [],
    },
  ],
};
export const NavigationData: INavigation[] = [Home, Blogs, Admin];

export const NavigationMap = {
  [Home.url]: Home,
  [Admin.url]: Admin,
  [Blogs.url]: Blogs,
  [Linux.url]: Linux,
  [Links.url]: Links,
  [Vim.url]: Vim,
  [Rust.url]: Rust,
};
