import Box from '@mui/material/Box';
import type { Metadata, NextPage } from 'next';
import { Context } from './Context.context';
import { SelectedButton } from './SelectButton';
import { ConvertInput } from './ConvertInput';
import { ConvertResult } from './ConvertResult';

export const metadata: Metadata = {
  title: 'Convert | Blogs | Vimal Menon',
  description: 'This is my personal website',
};

const Page: NextPage = () => {
  return (
    <Context>
      <Box>
        <SelectedButton />
        <ConvertInput />
        <ConvertResult />
        <Box>
          Decimal : 0 <br />
          Binary: 0 <br />
          Hexadecimal: 0 <br />
        </Box>
      </Box>
    </Context>
  );
};

export default Page;
