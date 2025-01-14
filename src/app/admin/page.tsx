import type { Metadata, NextPage } from 'next';
import Box from '@mui/material/Box';
import { items } from './admin.data';
import { NavigationItem } from '@components';

export const metadata: Metadata = {
  title: 'Admin | Vimal Menon',
  description: 'This is my personal website',
};

const Page: NextPage = async () => {
  return (
    <Box sx={{ display: 'flex', gap: 2, flex: '1' }}>
      {items.map((data) => {
        return <NavigationItem data={data} key={data.title} />;
      })}
    </Box>
  );
};

export default Page;
