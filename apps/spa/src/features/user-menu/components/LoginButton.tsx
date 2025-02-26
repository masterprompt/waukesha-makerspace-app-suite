import Button from '@mui/material/Button';
import { useAuthentication } from '../../authentication';

export const LoginButton = () => {
    const { login, isAuthenticated, isLoading } = useAuthentication();
    return isAuthenticated || isLoading ? null : (
        <Button color="inherit" onClick={() => login()}>Login</Button>
    );
};
