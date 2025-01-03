import type { Metadata, NextPage } from 'next';
import Box from '@mui/material/Box';
import { blogs } from './blogs.data';
import { NavigationItem } from '@components';

export const metadata: Metadata = {
  title: 'Blogs | Vimal Menon',
  description: 'This is my personal website',
};

const Blogs: NextPage = async () => {
  return (
    <Box sx={{ display: 'flex', gap: 2, flex: '1 1 30%' }}>
      {blogs.map((blog) => {
        return <NavigationItem data={blog} key={blog.title} />;
      })}
    </Box>
  );
};

export default Blogs;
