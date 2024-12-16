'use client';
import { useVimForm } from '../Vim.service';
import Box from '@mui/material/Box';
import { VimCommands, NeoVimCommands } from '@data';
import { Fragment } from 'react';
import { Highlight } from '@components';

export const VimCommandView: React.FC = () => {
  const { mode } = useVimForm();
  if (mode === 'VIEW') {
    return (
      <div>
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
      </div>
    );
  }
  return null;
};
