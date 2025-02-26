import { useAuthentication } from '../../authentication';
import { DropdownItem } from './DropdownItem';

export const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuthentication();
    return !isAuthenticated ? null : (
      <DropdownItem onClick={logout}>
        Logout
      </DropdownItem>
    );
};
