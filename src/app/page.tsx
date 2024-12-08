import Box from '@mui/material/Box';

import { env } from '../config';

const Home: React.FC = () => {
  return (
    <Box>
      This is Home page {env.API} {JSON.stringify(env)}{' '}
    </Box>
  );
};

export default Home;
