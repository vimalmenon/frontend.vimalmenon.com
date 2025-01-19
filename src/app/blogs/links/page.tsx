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
          <Box sx={{ margin: 0.5 }} key={index}>
            <Box>
              [{index + 1}] {data.name}
            </Box>
            <Box>
              {data.links.map((link, index) => {
                return (
                  <Box key={index} sx={{ marginLeft: 2 }}>
                    {index + 1}) {link.name}
                  </Box>
                );
              })}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default Page;
