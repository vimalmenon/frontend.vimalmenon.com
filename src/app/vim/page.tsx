import type { Metadata, NextPage } from 'next';
import Box from '@mui/material/Box';
import { VimContext } from './Vim.context';
import { VimCommandForm } from './VimCommandForm';
import { VimCommandView } from './VimCommandView';
import { VimCommandPanel } from './VimCommandPanel';
import { VimCommands, NeoVimCommands } from '@data';
import { apiCaller } from '@utility';
import { API } from '@constants';
import { ICommand } from '@types';

export const dynamic = 'force-dynamic';
export const metadata: Metadata = {
  title: 'Vim Tutorial | Vimal Menon',
  description: 'This is my personal website',
};

const VimPage: NextPage = async () => {
  const result = await apiCaller<ICommand[]>(API.GetVimData());
  return (
    <VimContext>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <div>VIM Commands:</div>
        <VimCommandPanel />
        <VimCommandForm />
        <VimCommandView commands={[...result, ...VimCommands, ...NeoVimCommands]} />
        <div>
          <a href="https://github.com/vimalmenon/neovim" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </Box>
    </VimContext>
  );
};

export default VimPage;
