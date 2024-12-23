import type { Metadata, NextPage } from 'next';
import { links } from '@data';

export const metadata: Metadata = {
  title: 'Links | Vimal Menon',
  description: 'This is my personal website',
};

const LinksPage: NextPage = () => {
  return (
    <div>
      {links.map((link) => {
        return (
          <div key={link.name}>
            <a href={link.link} target="_blank" rel="noreferrer">
              {link.name}
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default LinksPage;
