'use client';

import MuiBreadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { usePathname } from 'next/navigation';
import { NavigationMap } from '@data';
import NextLink from 'next/link';
import Box from '@mui/material/Box';

export const Breadcrumbs: React.FC = () => {
  const path = usePathname();
  const navigation = NavigationMap[path];
  return (
    <Box sx={{ padding: [0, 2] }}>
      <MuiBreadcrumbs>
        {navigation.breadcrumbs.map((data) => {
          return (
            <Link component={NextLink} color="inherit" href={data.url} key={data.name}>
              {data.name}
            </Link>
          );
        })}
        {path}
      </MuiBreadcrumbs>
    </Box>
  );
};
