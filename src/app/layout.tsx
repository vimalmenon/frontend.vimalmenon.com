import React from 'react';

import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import type { Metadata } from 'next';

import { Footer, Header, Body } from '@common';
import { IReactChildren } from '@types';

export const metadata: Metadata = {
  title: 'Vimal Menon',
  description: 'This is my personal website',
};

const RootLayout: React.FC<IReactChildren> = ({ children }) => {
  return (
    <html lang="en">
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <CssBaseline />
          <Container
            maxWidth={false}
            disableGutters
            sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}
          >
            <Header />
            <Body>{children}</Body>
            <Footer />
          </Container>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
};

export default RootLayout;
