import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { useAuthentication } from '../../authentication';

export const UserLoading = () => {
  const { isLoading } = useAuthentication();
  return !isLoading ? null : (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress color="secondary" size="30px"/>
    </Box>
  );
};