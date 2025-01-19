'use client';

import Box from '@mui/material/Box';
import MuiLink from '@mui/material/Link';
import { useState } from 'react';

import { ILinkComponent } from './Link';

export const Link: React.FC<ILinkComponent> = ({ data, index }) => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <Box sx={{ margin: 0.5 }}>
      <Box onClick={() => setShow(!show)}>
        [{index + 1}] {data.name}
      </Box>
      {show ? (
        <Box>
          {data.links.map((link, index) => {
            return (
              <Box key={index} sx={{ marginLeft: 2, display: 'flex', gap: 1 }}>
                ({index + 1})
                <MuiLink href={link.link} target="_blank" underline="none">
                  {link.name}
                </MuiLink>
              </Box>
            );
          })}
        </Box>
      ) : null}
    </Box>
  );
};
