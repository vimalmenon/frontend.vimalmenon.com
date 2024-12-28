import type { Metadata, NextPage } from 'next';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import NextLink from 'next/link';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { blogs } from './blogs.data';
import { IconButton } from '@mui/material';

export const metadata: Metadata = {
  title: 'Blogs | Vimal Menon',
  description: 'This is my personal website',
};

const Blogs: NextPage = async () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      {blogs.map((blog) => {
        return (
          <Card key={blog.title}>
            <CardHeader
              title={blog.title}
              subheader="Learn all about Vim navigation"
              action={
                <IconButton LinkComponent={NextLink} href={blog.link}>
                  <KeyboardArrowRightIcon />
                </IconButton>
              }
            />
            <CardContent>{blog.content}</CardContent>
          </Card>
        );
      })}
    </Box>
  );
};

export default Blogs;
