'use client';

import { usePathname } from 'next/navigation';
import { NavigationData } from '@data';
import Link from 'next/link';
import Button from '@mui/material/Button';

export const Navigation: React.FC = () => {
  const pathName = usePathname();
  return NavigationData.map((nav) => {
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
  });
};
