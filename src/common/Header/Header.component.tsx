import React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from 'next/link';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { NavigationData } from '@data';

export const Header: React.FC = () => {
  return (
    <Box component={'header'} sx={{ display: 'flex' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Vimal Menon
          </Typography>
          {NavigationData.map((nav) => {
            return (
              <Button color="inherit" key={nav.name}>
                <Link
                  href={nav.url}
                  style={{ color: 'inherit', textDecoration: 'none', fontWeight: 'bold' }}
                >
                  {nav.name}
                </Link>
              </Button>
            );
          })}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
