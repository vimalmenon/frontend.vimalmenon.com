'use client';

import { usePathname } from 'next/navigation';
import { IBreadcrumbs } from './Breadcrumbs';

export const Breadcrumbs: React.FC<IBreadcrumbs> = () => {
  const path = usePathname();
  console.log(path);
  return null;
};
