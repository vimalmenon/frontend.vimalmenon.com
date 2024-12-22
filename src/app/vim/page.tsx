import type { Metadata, NextPage } from 'next';
import Box from '@mui/material/Box';
import { VimContext } from './Vim.context';
import { VimCommandForm } from './VimCommandForm';
import { VimCommandView } from './VimCommandView';
import { VimCommandPanel } from './VimCommandPanel';
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
    <VimContext commands={result}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Box>VIM Commands:</Box>
        <VimCommandPanel />
        <VimCommandForm />
        <VimCommandView commands={result} />
      </Box>
    </VimContext>
  );
};

export default VimPage;
