import { composeProvider } from 'react-compose-provider';
import { AuthenticationProvider } from '../../authentication';

export const Providers = composeProvider(
    AuthenticationProvider
);
