import { INavigation } from '@types';

class Navigation implements INavigation {
  constructor(
    public name: string,
    public url: string,
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

const Home = new Navigation('Home', '/', []);
const Admin = new Navigation('Admin', '/admin', [Home]);
const Blogs = new Navigation('Blogs', '/blogs', [Home]);
const Vim = new Navigation('VIM', '/blogs/vim', [Home, Blogs]);
const AdminLinks = new Navigation('Links', '/admin/links', [Home, Admin]);
const AdminVim = new Navigation('VIM', '/admin/vim', [Home, Admin]);
const Linux = new Navigation('Linux', '/blogs/linux', [Home, Blogs]);
const Rust = new Navigation('Rust', '/blogs/rust', [Home, Blogs]);

export const NavigationData: INavigation[] = [Home, Blogs, Admin];
export const AdminNavigationData: INavigation[] = [AdminLinks, AdminVim];
export const BlogNavigationData: INavigation[] = [Vim, Linux, Rust];

export const NavigationMap = {
  [Home.url]: Home,
  [Admin.url]: Admin,
  [Blogs.url]: Blogs,
  [Linux.url]: Linux,
  [AdminLinks.url]: AdminLinks,
  [Vim.url]: Vim,
  [Rust.url]: Rust,
  [AdminVim.url]: AdminVim,
};
