import Box from '@mui/material/Box';
import { links } from '@data';
import type { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'Links | Blogs | Vimal Menon',
  description: 'This is my personal website',
};

const Page: NextPage = () => {
  return (
    <Box>
      {links.map((data, index) => {
        return (
          <Box component="p" sx={{ margin: 0.5 }} key={index}>
            <Box>{data.name}</Box>
            <Box>
              {data.links.map((link, index) => {
                return <Box key={index}>{link.name}</Box>;
              })}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default Page;
