import type { Metadata, NextPage } from 'next';
import Box from '@mui/material/Box';

export const metadata: Metadata = {
  title: 'Blog | Vimal Menon',
  description: 'This is my personal website',
};

const Blogs: NextPage = async () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box>This is Blogs page</Box>
    </Box>
  );
};

export default Blogs;
