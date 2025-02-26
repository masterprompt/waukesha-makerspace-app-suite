import { PropsWithChildren } from 'react';
import { Auth0Provider } from '@auth0/auth0-react';

export const AuthenticationProvider = ({ children }: PropsWithChildren) => {
    return (
        <Auth0Provider
            domain="dev-orbhum3ffz4dvdtz.us.auth0.com"
            clientId="aJYflweceqH3GvYiqzubm0TOOwRAUIVx"
            authorizationParams={{
            redirect_uri: window.location.origin
            }}
        >
            {children}
        </Auth0Provider>
    );
};
