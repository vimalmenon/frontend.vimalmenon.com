import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
import type { NextPage } from 'next';

const Loading: NextPage = () => {
  return (
    <Stack spacing={1} sx={{ width: '100%' }}>
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      <Skeleton variant="rectangular" height={60} />
      <Skeleton variant="rectangular" height={60} />
      <Skeleton variant="rectangular" height={60} />
    </Stack>
  );
};

export default Loading;
