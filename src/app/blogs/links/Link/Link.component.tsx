'use client';

import Box from '@mui/material/Box';
import { ILinkComponent } from './Link';

export const Link: React.FC<ILinkComponent> = ({ data, index }) => {
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
};
