import type { Metadata, NextPage } from 'next';
import { links } from '@data';
import Link from '@mui/material/Link';
import { VimContext } from './Vim.context';

export const metadata: Metadata = {
  title: 'Commands | Admin | Vimal Menon',
  description: 'This is my personal website',
};

const Page: NextPage = async () => {
  return (
    <VimContext>
      {links.map((link) => {
        return (
          <div key={link.name}>
            {link.name}
            {link.links.map((data, index) => {
              return (
                <Link href={data} key={index} target="_blank" rel="noreferrer">
                  {link.name}
                </Link>
              );
            })}
          </div>
        );
      })}
    </VimContext>
  );
};

export default Page;
