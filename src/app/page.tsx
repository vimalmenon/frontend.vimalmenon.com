import Box from '@mui/material/Box';
import type { Metadata, NextPage } from 'next';
import { env } from '@constants';
import { NavigationMap } from '@data';

const data = NavigationMap['/'];

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
};

const Home: NextPage = async () => {
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
