import type { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'Links Tutorial | Vimal Menon',
  description: 'This is my personal website',
};

const LinksPage: NextPage = () => {
  return (
    <div>
      <div>
        <a href="https://crontab.guru/" target="blank">
          Cron Tab
        </a>
      </div>
      <div>
        <a href="https://github.com/vimalmenon/neovim" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>{' '}
    </div>
  );
};

export default LinksPage;
