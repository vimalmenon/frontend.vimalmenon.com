import React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Navigation } from './Navigation';
import { SwitchTheme } from './SwitchTheme';

export const Header: React.FC = () => {
  return (
    <Box component={'header'} sx={{ display: 'flex' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Vimal Menon
          </Typography>
          <Navigation />
          <SwitchTheme />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
