import type { Metadata, NextPage } from 'next';
import Box from '@mui/material/Box';
import { VimCommands, NeoVimCommands } from '@data';
import { Highlight } from '@components';
import { Fragment } from 'react';

export const metadata: Metadata = {
  title: 'Vim Tutorial | Vimal Menon',
  description: 'This is my personal website',
};

const VimPage: NextPage = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <div>VIM Commands:</div>
      <div>
        <a href="https://github.com/vimalmenon/neovim" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
      {VimCommands.map((data, index) => {
        return (
          <Fragment key={index}>
            <Box component="p" sx={{ margin: 0.5 }}>
              {data.describe}
            </Box>
            <Highlight code={data.command} language={data.language} />
          </Fragment>
        );
      })}
      {NeoVimCommands.map((data, index) => {
        return (
          <Fragment key={index}>
            <Box component="p" sx={{ margin: 0.5 }}>
              {data.describe}
            </Box>
            <Highlight code={data.command} language={data.language} />
          </Fragment>
        );
      })}
    </Box>
  );
};

export default VimPage;
