import type { Metadata, NextPage } from 'next';
import Box from '@mui/material/Box';

import { NavigationMap } from '@data';

const data = NavigationMap['/blogs/vim'];

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
};

const Page: NextPage = async () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Box>VIM Commands:</Box>
      <Box></Box>
    </Box>
  );
};

export default Page;
