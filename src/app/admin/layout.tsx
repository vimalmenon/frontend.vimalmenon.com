import React from 'react';
import Box from '@mui/material/Box';
import { IReactChildren } from '@types';

const AdminLayout: React.FC<IReactChildren> = ({ children }) => {
  return (
    <Box>
      <Box>Admin Navigation</Box>
      {children}
    </Box>
  );
};

export default AdminLayout;
