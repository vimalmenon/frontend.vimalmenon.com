import React from 'react';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import type { Metadata } from 'next';

import { Body, Footer, Header } from '@common';
import { AppContext } from '@context';
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
          <AppContext>
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
          </AppContext>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
};

export default RootLayout;
