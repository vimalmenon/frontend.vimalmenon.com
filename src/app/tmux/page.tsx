import type { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'TMUX Tutorial | Vimal Menon',
  description: 'This is my personal website',
};

const TmuxPage: NextPage = () => {
  return <div>This is Tmux</div>;
};

export default TmuxPage;
