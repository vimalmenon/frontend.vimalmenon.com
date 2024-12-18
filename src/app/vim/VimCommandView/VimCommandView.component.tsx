'use client';

import { useVimForm } from '../Vim.service';
import Box from '@mui/material/Box';
import { Fragment } from 'react';
import { Highlight } from '@components';
import { IVimCommandView } from './VimCommandView';
import { Icons } from '@constants';
import IconButton from '@mui/material/IconButton';

export const VimCommandView: React.FC<IVimCommandView> = ({ commands }) => {
  const { mode, onCommandDelete, setCommand } = useVimForm();
  if (mode === 'VIEW') {
    return (
      <div>
        {commands.map((data, index) => {
          return (
            <Fragment key={index}>
              <Box sx={{ margin: 0.5, display: 'flex', justifyContent: 'space-between' }}>
                {data.describe}
                <div>
                  <IconButton size="small" onClick={() => setCommand(data)}>
                    <Icons.Edit />
                  </IconButton>
                  <IconButton size="small" onClick={() => onCommandDelete(data.id)}>
                    <Icons.Delete />
                  </IconButton>
                </div>
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
