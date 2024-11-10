import type { Metadata, NextPage } from 'next';
import { Highlight } from '@components';
import Box from '@mui/material/Box';

export const metadata: Metadata = {
  title: 'TMUX Tutorial | Vimal Menon',
  description: 'This is my personal website',
};

const TmuxPage: NextPage = () => {
  return (
    <Box sx={{display: "flex", flexDirection: "column"}}>
      <div>
      This is Tmux
      </div>
      <Highlight code={'$tmux'} language={'shell'} />
    </Box>
  );
};

export default TmuxPage;
