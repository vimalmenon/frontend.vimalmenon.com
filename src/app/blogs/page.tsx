import type { Metadata, NextPage } from 'next';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import NextLink from 'next/link';
import Button from '@mui/material/Button';
import { blogs } from './blogs.data';

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
            <CardHeader title={blog.title} subheader="Learn all about Vim navigation" />
            <CardContent>{blog.content}</CardContent>
            <CardActions>
              <Button LinkComponent={NextLink} href={blog.link}>
                Vim
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </Box>
  );
};

export default Blogs;
