import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import NextLink from 'next/link';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { INavigationItem } from './NavigationItem';
import { IconButton } from '@mui/material';

export const NavigationItem: React.FC<INavigationItem> = ({ data }) => {
  return (
    <Card key={data.title}>
      <CardHeader
        title={data.title}
        action={
          <IconButton LinkComponent={NextLink} href={data.link}>
            <KeyboardArrowRightIcon />
          </IconButton>
        }
      />
      <CardContent>{data.content}</CardContent>
    </Card>
  );
};
