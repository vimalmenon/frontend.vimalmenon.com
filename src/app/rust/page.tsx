import type { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'Rust Tutorial | Vimal Menon',
  description: 'This is my personal website',
};

const RustPage: NextPage = () => {
  return <div>This is Rust</div>;
};

export default RustPage;
