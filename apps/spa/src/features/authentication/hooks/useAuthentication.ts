import { useAuth0 } from "@auth0/auth0-react";

export const useAuthentication = () => {
    const {
        user,
        isAuthenticated,
        isLoading,
        loginWithRedirect: login,
        logout
    } = useAuth0();
    return {
        user,
        isAuthenticated,
        isLoading,
        login,
        logout
    };
};
