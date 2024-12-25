import type { Metadata, NextPage } from 'next';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';

export const metadata: Metadata = {
  title: 'Blogs | Vimal Menon',
  description: 'This is my personal website',
};

const Blogs: NextPage = async () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Card>
        <CardHeader
          title="VIM / NVIM"
          subheader="Learn all about Vim navigation"
        />
        <CardContent>
          This is card content
        </CardContent>
      </Card>
      <Card>
        <CardHeader
          title="Linux Command"
          subheader="Learn all about Linux Command"
        />
        <CardContent>
          This is card content
        </CardContent>
      </Card>
    </Box>
  );
};

export default Blogs;
