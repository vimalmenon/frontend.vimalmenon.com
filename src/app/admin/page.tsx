import type { Metadata, NextPage } from 'next';
import Box from '@mui/material/Box';
import { items } from './admin.data';
import { NavigationItem } from '@components';

export const metadata: Metadata = {
  title: 'Admin | Vimal Menon',
  description: 'This is my personal website',
};

const Admin: NextPage = async () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {items.map((data) => {
        return <NavigationItem data={data} key={data.title} />;
      })}
    </Box>
  );
};

export default Admin;
