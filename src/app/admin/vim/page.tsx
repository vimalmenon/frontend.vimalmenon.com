import type { Metadata, NextPage } from 'next';
import { links } from '@data';
import Link from '@mui/material/Link';
import { VimContext } from './Vim.context';
import { VimPanel } from './VimPanel';
import { VimView } from './VimView';
import Box from '@mui/material/Box';

export const metadata: Metadata = {
  title: 'VIM | Admin | Vimal Menon',
  description: 'This is my personal website',
};

const Page: NextPage = async () => {
  return (
    <VimContext>
      <VimPanel />
      <VimView />
      {links.map((link) => {
        return (
          <Box key={link.name}>
            {link.name}
            {link.links.map((data, index) => {
              return (
                <Link href={data} key={index} target="_blank" rel="noreferrer">
                  {link.name}
                </Link>
              );
            })}
          </Box>
        );
      })}
    </VimContext>
  );
};

export default Page;
