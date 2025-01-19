'use client';

import Box from '@mui/material/Box';
import { ILinkComponent } from './Link';

import MuiLink from '@mui/material/Link';

export const Link: React.FC<ILinkComponent> = ({ data, index }) => {
  return (
    <Box sx={{ margin: 0.5 }}>
      <Box>
        [{index + 1}] {data.name}
      </Box>
      <Box>
        {data.links.map((link, index) => {
          return (
            <Box key={index} sx={{ marginLeft: 2, display: 'flex', gap: 1 }}>
              {index + 1})
              <MuiLink href={link.link} target="_blank">
                {link.name}
              </MuiLink>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
