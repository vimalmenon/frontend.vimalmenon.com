import type { Metadata, NextPage } from 'next';
import { VimContext } from './Vim.context';
import { VimPanel } from './VimPanel';
import { VimView } from './VimView';

export const metadata: Metadata = {
  title: 'VIM / NVIM | Admin | Vimal Menon',
  description: 'This is my personal website',
};

const Page: NextPage = async () => {
  return (
    <VimContext>
      <VimPanel />
      <VimView />
    </VimContext>
  );
};

export default Page;
