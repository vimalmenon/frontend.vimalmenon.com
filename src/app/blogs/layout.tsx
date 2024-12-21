import React from 'react';
import { AppContext } from '@context';
import { Body, Footer, Header } from '@common';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import type { Metadata } from 'next';
import Box from '@mui/material/Box';
import { IReactChildren } from '@types';

export const metadata: Metadata = {
  title: 'Blogs | Vimal Menon',
  description: 'This is my personal website',
};

const BlogsLayout: React.FC<IReactChildren> = ({ children }) => {
  return (
    <html lang="en">
      <meta name="viewport" content="initial-scale=2, width=device-width" />
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <AppContext>
            <CssBaseline />
            <Container
              maxWidth={false}
              disableGutters
              sx={{ display: 'flex', flexDirection: 'column', height: '101vh' }}
            >
              <Header />
              <Body>
                <div>this is vimal menon</div>
                <Box sx={{ padding: 3, flex: '1 1 100%' }}>{children}</Box>
              </Body>
              <Footer />
            </Container>
          </AppContext>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
};

export default BlogsLayout;
