import type { Metadata, NextPage } from 'next';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import NextLink from 'next/link';
import Button from '@mui/material/Button';

export const metadata: Metadata = {
  title: 'Blogs | Vimal Menon',
  description: 'This is my personal website',
};

const Blogs: NextPage = async () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Card>
        <CardHeader title="VIM / NVIM" subheader="Learn all about Vim navigation" />
        <CardContent>This is card content</CardContent>
        <CardActions>
          <Button LinkComponent={NextLink} href="/blogs/vim">
            Vim
          </Button>
        </CardActions>
      </Card>
      <Card>
        <CardHeader title="Linux Command" subheader="Learn all about Linux Command" />
        <CardContent>This is card content</CardContent>
        <CardActions>
          <Button LinkComponent={NextLink} href="/blogs/linux">
            Linux
          </Button>
        </CardActions>
      </Card>
      <Card>
        <CardHeader title="Rust" subheader="Learn all about Rust programming language" />
        <CardContent>This is card content</CardContent>
        <CardActions>
          <Button LinkComponent={NextLink} href="/blogs/rust">
            Rust
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Blogs;
