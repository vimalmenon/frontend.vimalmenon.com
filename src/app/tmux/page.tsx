import type { Metadata, NextPage } from 'next';
import { Highlight } from '@components';
import Box from '@mui/material/Box';

export const metadata: Metadata = {
  title: 'TMUX Tutorial | Vimal Menon',
  description: 'This is my personal website',
};

const TmuxPage: NextPage = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <div>TMUX Commands:</div>
      <Highlight code={'tmux'} language={'bash'} />
      <Highlight code={'tmux new -s myname'} language={'shell'} />
      <Highlight code={'tmux ls'} language={'shell'} />
    </Box>
  );
};

export default TmuxPage;
