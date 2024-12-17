'use client';

import { useVimForm } from '../Vim.service';
import Box from '@mui/material/Box';
import { Fragment } from 'react';
import { Highlight } from '@components';
import { IVimCommandView } from './VimCommandView';

export const VimCommandView: React.FC<IVimCommandView> = ({ commands }) => {
  const { mode } = useVimForm();
  if (mode === 'VIEW') {
    return (
      <div>
        {commands.map((data, index) => {
          return (
            <Fragment key={index}>
              <Box component="p" sx={{ margin: 0.5 }}>
                {data.describe}
              </Box>
              <Highlight code={data.command} language="bash" />
            </Fragment>
          );
        })}
      </div>
    );
  }
  return null;
};
