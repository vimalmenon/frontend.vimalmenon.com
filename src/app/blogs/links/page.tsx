import Box from '@mui/material/Box';
import { links } from '@data';
import type { Metadata, NextPage } from 'next';
import { Link } from './Link';

export const metadata: Metadata = {
  title: 'Links | Blogs | Vimal Menon',
  description: 'This is my personal website',
};

const Page: NextPage = () => {
  return (
    <Box>
      {links.map((data, index) => {
        return (
          <Box sx={{ margin: 0.5 }} key={index}>
            <Link data={data} index={index} />
          </Box>
        );
      })}
    </Box>
  );
};

export default Page;
