import Box from '@mui/material/Box';

import { env } from '@constants';

export const dynamic = 'force-dynamic';
export const metadata: Metadata = {
  title: 'Vimal Menon',
  description: 'This is my personal website',
};

const Home: React.FC = async () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box>This is Home page</Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', flex: '1' }}>
        <Box>API</Box>
        <Box>{env.API}</Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', flex: '1' }}>
        <Box>Env</Box>
        <Box>{env.ENV}</Box>
      </Box>
    </Box>
  );
};

export default Home;
