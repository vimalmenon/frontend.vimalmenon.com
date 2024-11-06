import type { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'Vim Tutorial | Vimal Menon',
  description: 'This is my personal website',
};

const VimPage: NextPage = () => {
  return <div>This is Vim</div>;
};

export default VimPage;
