import { LoginButton } from '../components/LoginButton';
import { UserDropdown } from '../components/UserDropdown';
import { UserLoading } from '../components/UserLoading';

export const UserMenu = () => {
  return (
    <>
      <UserDropdown />
      <LoginButton />
      <UserLoading />
    </>
  );
};