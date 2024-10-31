import React from 'react';

import Box from '@mui/material/Box';
import Link from 'next/link';

import { NavigationData } from '@data';

export const Header: React.FC = () => {
  return (
    <Box component={'header'} sx={{ display: 'flex', flex: '0 0 50px', overflow: 'hidden' }}>
      {NavigationData.map((nav) => {
        return (
          <React.Fragment key={nav.name}>
            <Link href={nav.url}>{nav.name}</Link> &nbsp;|&nbsp;
          </React.Fragment>
        );
      })}
    </Box>
  );
};
