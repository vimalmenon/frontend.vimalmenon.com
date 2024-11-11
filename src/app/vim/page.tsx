import type { Metadata, NextPage } from 'next';
import Box from '@mui/material/Box';
import { VimCommands } from '@data';

export const metadata: Metadata = {
  title: 'Vim Tutorial | Vimal Menon',
  description: 'This is my personal website',
};

const VimPage: NextPage = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <div>VIM Commands:</div>
      {VimCommands.map((key, index) => {
        return <div key={index}></div>;
      })}
    </Box>
  );
};

export default VimPage;
