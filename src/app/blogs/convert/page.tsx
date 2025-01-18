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
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <SelectedButton />
        <ConvertInput />
        <ConvertResult />
      </Box>
    </Context>
  );
};

export default Page;
