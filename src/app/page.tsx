import Box from '@mui/material/Box';

import { env } from '../config';

export const dynamic = 'force-dynamic';

const Home: React.FC = async () => {
  const data = await fetch(env.API);
  const result = await data.json();
  return (
    <Box>
      This is Home page {env.API} {result.Hello}
    </Box>
  );
};

export default Home;
