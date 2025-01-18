import { INavigation } from '@types';

class Navigation implements INavigation {
  constructor(
    public name: string,
    public url: string,
    public title: string,
    public description: string,
    public breadcrumbs: INavigation[],
    public isReady: boolean
  ) {
    this.breadcrumbs = [
      ...breadcrumbs,
      {
        name,
        url,
        description: '',
        breadcrumbs: [],
      },
    ];
  }
}

//Home Navigation
const Home = new Navigation('Home', '/', 'Home', 'This is Home Page for Vimal Menon', [], true);
const Admin = new Navigation(
  'Admin',
  '/admin',
  'Admin | Home',
  'This is Home Page for Vimal Menon',
  [Home],
  true
);
const Blogs = new Navigation(
  'Blogs',
  '/blogs',
  'Blogs | Home',
  'This is Home Page for Vimal Menon',
  [Home],
  true
);

//Admin Navigation
const AdminLinks = new Navigation(
  'Links',
  '/admin/links',
  'Links | Admin | Home',
  'This is Home Page for Vimal Menon',
  [Home, Admin],
  true
);
const AdminVim = new Navigation(
  'VIM',
  '/admin/vim',
  'Vim | Admin | Home',
  'This is Home Page for Vimal Menon',
  [Home, Admin],
  true
);
const AdminLinux = new Navigation(
  'Linux',
  '/admin/linux',
  'Linux | Admin | Home',
  'This is Home Page for Vimal Menon',
  [Home, Admin],
  true
);

//Blogs Navigation
const Linux = new Navigation(
  'Linux',
  '/blogs/linux',
  'Linux | Blogs | Home',
  'List very useful linux command',
  [Home, Blogs],
  true
);
const Links = new Navigation(
  'Links',
  '/blogs/links',
  'Links | Blogs | Home',
  'List very useful linux Links',
  [Home, Blogs],
  true
);

const Rust = new Navigation(
  'Rust',
  '/blogs/rust',
  'Rust | Blogs | Home',
  'Rust tutorial from basic to advanced stuff',
  [Home, Blogs],
  true
);
const Vim = new Navigation(
  'VIM',
  '/blogs/vim',
  'Vim | Blogs | Home',
  'List all the NVIM and VIM shortcut',
  [Home, Blogs],
  true
);
const Convert = new Navigation(
  'Convert to binary / hexadecimal',
  '/blogs/convert',
  'Convert | Blogs | Home',
  'Convert the number to binary or hexadecimal',
  [Home, Blogs],
  true
);

// Vim Navigation
const VimInstall = new Navigation(
  'Install NVIM',
  'Install NVIM | Vim | Blogs | Home',
  `${Vim.url}/install-nvim`,
  'This is Home Page for Vimal Menon',
  [Home, Blogs, Vim],
  true
);
const VimNavigation = new Navigation(
  'Basic Navigation',
  'Basic Navigation | Vim | Blogs | Home',
  `${Vim.url}/basic-navigation`,
  'This is Home Page for Vimal Menon',
  [Home, Blogs, Vim],
  true
);

export const NavigationData: INavigation[] = [Home, Blogs, Admin];
export const AdminNavigationData: INavigation[] = [AdminLinks, AdminVim];
export const BlogNavigationData: INavigation[] = [Vim, Linux, Rust, Links, Convert];
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
  [Links.url]: Links,
  [Convert.url]: Convert,
};
