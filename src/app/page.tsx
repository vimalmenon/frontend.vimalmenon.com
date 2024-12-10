import Box from '@mui/material/Box';

import { env } from '../config';

export const dynamic = 'force-dynamic';

const Home: React.FC = async () => {
  return (
    <Box>
      This is Home page
      <Box>
        <Box>API</Box>
        <Box>{env.API}</Box>
      </Box>
      <Box>
        <Box>Env</Box>
        <Box>{env.ENV}</Box>
      </Box>

    </Box>
  );
};

export default Home;
