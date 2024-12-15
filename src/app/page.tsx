import Box from '@mui/material/Box';

import { env } from '../config';

export const dynamic = 'force-dynamic';

const Home: React.FC = async () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <div>This is Home page</div>
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
