import type { Metadata, NextPage } from 'next';
import Box from '@mui/material/Box';

export const metadata: Metadata = {
  title: 'Admin | Vimal Menon',
  description: 'This is my personal website',
};

const Admin: NextPage = async () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box>This is Admin page</Box>
    </Box>
  );
};

export default Admin;
