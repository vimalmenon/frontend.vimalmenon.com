import Box from '@mui/material/Box';

import { env } from '../config';

export const dynamic = 'force-dynamic';

const Home: React.FC = async () => {
  return <Box>This is Home page {env.API}</Box>;
};

export default Home;
