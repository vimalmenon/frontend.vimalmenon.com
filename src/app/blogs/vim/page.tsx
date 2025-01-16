import type { Metadata, NextPage } from 'next';
import Box from '@mui/material/Box';

import { VimNavigationData } from '@data';
import NextLink from 'next/link';

export const metadata: Metadata = {
  title: 'VIM Shortcut | Vimal Menon',
  description: 'This is my personal website',
};

const Page: NextPage = async () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Box>VIM Commands:</Box>
      <Box>
        {VimNavigationData.map((data) => {
          return (
            <Box key={data.url}>
              <NextLink href={data.url}>{data.name}</NextLink>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Page;
