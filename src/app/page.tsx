import Box from '@mui/material/Box';

import { env } from '../config';
const Home: React.FC = () => {
  return <Box>This is Home page {env.API} </Box>;
};

export default Home;
