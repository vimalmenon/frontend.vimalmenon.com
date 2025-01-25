import type { Metadata, NextPage } from 'next';
import Box from '@mui/material/Box';

import { NavigationMap, VimNavigationData } from '@data';
import NextLink from 'next/link';

import Link from '@mui/material/Link';

const data = NavigationMap['/blogs/vim'];

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
};

const Page: NextPage = async () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Box>VIM Commands:</Box>
      <Box>
        {VimNavigationData.map((data) => {
          return (
            <Box key={data.url}>
              <Link component={NextLink} href={data.url} underline="none">
                {data.name}
              </Link>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Page;
