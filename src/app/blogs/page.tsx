import type { Metadata, NextPage } from 'next';
import Box from '@mui/material/Box';
import { NavigationItem } from '@components';
import { BlogNavigationData, NavigationMap } from '@data';

const data = NavigationMap['/blogs'];

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
};

const Blogs: NextPage = async () => {
  return (
    <Box sx={{ display: 'flex', gap: 2, flex: '1 1 30%', flexWrap: 'wrap' }}>
      {BlogNavigationData.map((blog) => {
        return (
          <NavigationItem
            data={{
              title: blog.name,
              link: blog.url,
              content: blog.description,
            }}
            key={blog.url}
          />
        );
      })}
    </Box>
  );
};

export default Blogs;
