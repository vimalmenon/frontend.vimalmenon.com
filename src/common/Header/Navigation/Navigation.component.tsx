'use client';

import { usePathname } from 'next/navigation';
import { NavigationData } from '@data';
import Link from 'next/link';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
export const Navigation: React.FC = () => {
  const pathName = usePathname();

  return (
    <Box sx={{ display: 'flex', gap: 1 }}>
      {NavigationData.map((nav) => {
        return (
          <Link
            href={nav.url}
            style={{ color: 'inherit', textDecoration: 'none', fontWeight: 'bold' }}
            key={nav.name}
          >
            <Button color="inherit" variant={pathName === nav.url ? 'contained' : 'text'}>
              {nav.name}
            </Button>
          </Link>
        );
      })}
    </Box>
  );
};
