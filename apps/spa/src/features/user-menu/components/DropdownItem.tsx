import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  onClick?: () => void;
}

export const DropdownItem = ({
  children,
  onClick = () => {}
}: Props) => {
  return (
    <MenuItem onClick={() => onClick()}>
      <Typography sx={{ textAlign: 'center' }}>{children}</Typography>
    </MenuItem>
  );
};
