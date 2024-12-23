import React from 'react';
import Box from '@mui/material/Box';
import { IReactChildren } from '@types';

const BlogsLayout: React.FC<IReactChildren> = ({ children }) => {
  return (
    <Box>
      <Box>Blog Navigation</Box>
      {children}
    </Box>
  );
};

export default BlogsLayout;
