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
        return <Link data={data} index={index} key={index} />;
      })}
    </Box>
  );
};

export default Page;
