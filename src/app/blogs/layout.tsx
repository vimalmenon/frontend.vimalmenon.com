import React from 'react';
import type { Metadata } from 'next';
import Box from '@mui/material/Box';
import { IReactChildren } from '@types';

export const metadata: Metadata = {
  title: 'Blogs | Vimal Menon',
  description: 'This is my personal website',
};

const BlogsLayout: React.FC<IReactChildren> = ({ children }) => {
  return (
    <Box sx={{ padding: 3, flex: '1 1 100%' }}>
      <div>this is vimal menon</div>
      {children}
    </Box>
  );
};

export default BlogsLayout;
