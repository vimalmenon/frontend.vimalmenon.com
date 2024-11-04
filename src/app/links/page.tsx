import type { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'Links Tutorial | Vimal Menon',
  description: 'This is my personal website',
};

export const LinksPage: NextPage = () => {
  return (
    <div>
      <a href="https://crontab.guru/" target="blank">
        Cron Tab
      </a>
    </div>
  );
};

export default LinksPage;
