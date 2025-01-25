import Box from '@mui/material/Box';
import { links, NavigationMap } from '@data';
import type { Metadata, NextPage } from 'next';
import { Link } from './Link';

const data = NavigationMap['/blogs/links'];

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
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
