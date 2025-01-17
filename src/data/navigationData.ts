import { INavigation } from '@types';

class Navigation implements INavigation {
  constructor(
    public name: string,
    public url: string,
    public title: string,
    public description: string,
    public breadcrumbs: INavigation[]
  ) {
    this.breadcrumbs = [
      ...breadcrumbs,
      {
        name,
        url,
        breadcrumbs: [],
      },
    ];
  }
}

//Home Navigation
const Home = new Navigation('Home', '/', 'Home', 'This is Home Page for Vimal Menon', []);
const Admin = new Navigation(
  'Admin',
  '/admin',
  'Admin | Home',
  'This is Home Page for Vimal Menon',
  [Home]
);
const Blogs = new Navigation(
  'Blogs',
  '/blogs',
  'Blogs | Home',
  'This is Home Page for Vimal Menon',
  [Home]
);

//Admin Navigation
const AdminLinks = new Navigation(
  'Links',
  '/admin/links',
  'Links | Admin | Home',
  'This is Home Page for Vimal Menon',
  [Home, Admin]
);
const AdminVim = new Navigation(
  'VIM',
  '/admin/vim',
  'Vim | Admin | Home',
  'This is Home Page for Vimal Menon',
  [Home, Admin]
);
const AdminLinux = new Navigation(
  'Linux',
  '/admin/linux',
  'Linux | Admin | Home',
  'This is Home Page for Vimal Menon',
  [Home, Admin]
);

//Blogs Navigation
const Linux = new Navigation(
  'Linux',
  '/blogs/linux',
  'Linux | Blogs | Home',
  'This is Home Page for Vimal Menon',
  [Home, Blogs]
);
const Rust = new Navigation(
  'Rust',
  '/blogs/rust',
  'Rust | Blogs | Home',
  'This is Home Page for Vimal Menon',
  [Home, Blogs]
);
const Vim = new Navigation(
  'VIM',
  '/blogs/vim',
  'Vim | Blogs | Home',
  'This is Home Page for Vimal Menon',
  [Home, Blogs]
);

// Vim Navigation
const VimInstall = new Navigation(
  'Install NVIM',
  'Install NVIM | Vim | Blogs | Home',
  `${Vim.url}/install-nvim`,
  'This is Home Page for Vimal Menon',
  [Home, Blogs, Vim]
);
const VimNavigation = new Navigation(
  'Basic Navigation',
  'Basic Navigation | Vim | Blogs | Home',
  `${Vim.url}/basic-navigation`,
  'This is Home Page for Vimal Menon',
  [Home, Blogs, Vim]
);

export const NavigationData: INavigation[] = [Home, Blogs, Admin];
export const AdminNavigationData: INavigation[] = [AdminLinks, AdminVim];
export const BlogNavigationData: INavigation[] = [Vim, Linux, Rust];
export const VimNavigationData: INavigation[] = [VimInstall, VimNavigation];

export const NavigationMap = {
  [Home.url]: Home,
  [Admin.url]: Admin,
  [Blogs.url]: Blogs,
  [Linux.url]: Linux,
  [AdminLinks.url]: AdminLinks,
  [Vim.url]: Vim,
  [Rust.url]: Rust,
  [AdminVim.url]: AdminVim,
  [AdminLinux.url]: AdminLinux,
  [VimInstall.url]: VimInstall,
  [VimNavigation.url]: VimNavigation,
};
