import type { Metadata, NextPage } from 'next';
import { Highlight } from '@components';

export const metadata: Metadata = {
  title: 'TMUX Tutorial | Vimal Menon',
  description: 'This is my personal website',
};

const TmuxPage: NextPage = () => {
  return (
    <div>
      This is Tmux
      <Highlight code={'$tmux'} language={'shell'} />
    </div>
  );
};

export default TmuxPage;
