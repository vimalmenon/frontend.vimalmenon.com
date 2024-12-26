import React from 'react';
import { AppContext } from '@context';
import { Body, Footer, Header, Breadcrumbs } from '@common';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import type { Metadata } from 'next';
import Box from '@mui/material/Box';
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
              <Breadcrumbs />
              <Body>
                <Box sx={{ padding: 2, flex: '1 1 100%' }}>{children}</Box>
              </Body>
              <Footer />
            </Container>
          </AppContext>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
};

export default RootLayout;
