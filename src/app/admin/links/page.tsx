import type { Metadata, NextPage } from 'next';
import { links } from '@data';
//import Link from '@mui/material/Link';

export const metadata: Metadata = {
  title: 'Links | Admin |  Vimal Menon',
  description: 'This is my personal website',
};

{
  /*          <div key={link.name}>
            {link.name}
            {link.links.map((data, index) => {
              return (
                <Link href={data} key={index} target="_blank" rel="noreferrer">
                  {link.name}
                </Link>
              );
            })}
          </div>*/
}
const Page: NextPage = () => {
  return (
    <div>
      {links.map((link) => {
        return <div key={link.name}></div>;
      })}
    </div>
  );
};

export default Page;
