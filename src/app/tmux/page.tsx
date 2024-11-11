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
      <Box component="p" sx={{ margin: 0.5 }}>
        Start a session
      </Box>
      <Highlight code="tmux" language="bash" />
      <Box component="p" sx={{ margin: 0.5 }}>
        Start a session with name
      </Box>
      <Highlight code="tmux new -s myname" language="bash" />
      <Box component="p" sx={{ margin: 0.5 }}>
        List all sessions
      </Box>
      <Highlight code="tmux ls" language="bash" />
      <Box component="p" sx={{ margin: 0.5 }}>
        Attach to a session with number
      </Box>
      <Highlight code="tmux attach -t <number>" language="bash" />
      <Box component="p" sx={{ margin: 0.5 }}>
        Command key
      </Box>
      <Highlight code="<ctrl> b" language="bash" />
      <Box component="p" sx={{ margin: 0.5 }}>
        Detach from session
      </Box>
      <Highlight code="<ctrl> b + d" language="bash" />
      <Box component="p" sx={{ margin: 0.5 }}>
        Show Time
      </Box>
      <Highlight code="<ctrl> b + t" language="bash" />
    </Box>
  );
};

export default TmuxPage;
