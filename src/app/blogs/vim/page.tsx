import type { Metadata, NextPage } from 'next';
import Box from '@mui/material/Box';

import { navigation } from './vim.data';

export const metadata: Metadata = {
  title: 'VIM Shortcut | Vimal Menon',
  description: 'This is my personal website',
};

const Page: NextPage = async () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Box>VIM Commands:</Box>
      <Box>
        {navigation.map((data) => {
          return <Box key={data.url}>{data.name}</Box>;
        })}
      </Box>
    </Box>
  );
};

export default Page;
