import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';

import { useAuthentication } from '../../authentication';
import { useState } from 'react';
import { LogoutButton } from './LogoutButton';

export const UserDropdown = () => {
  const {
    isAuthenticated,
    isLoading,
    user
  } = useAuthentication();
  const [ anchorElement, setAnchorElement ] = useState<null | HTMLElement>(null);
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => setAnchorElement(event.currentTarget);
  const handleCloseUserMenu = () => setAnchorElement(null);
  return !isAuthenticated || isLoading ? null : (
    <Box sx={{ flexGrow: 0 }}>
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt={user?.name} src={user?.picture} />
        </IconButton>
        <Menu
          sx={{ mt: '45px' }}
          id="menu-appbar"
          anchorEl={anchorElement}
          anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
          }}
          open={Boolean(anchorElement)}
          onClose={handleCloseUserMenu}
        >
          <Divider variant="middle" component="li" />
          <LogoutButton />
        </Menu>
    </Box>
  );
};
