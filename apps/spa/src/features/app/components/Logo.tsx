import Icon from '@mui/material/Icon';
import Image from '../../../assets/WMI_logo_cropped.svg';

export const Logo = () => {
  return (
    <Icon sx={{ fontSize: 60,  pr: 1 }}>
      <img src={Image} alt="logo" style={{ filter: 'invert(100%) sepia(0%) saturate(7500%) hue-rotate(200deg) brightness(104%) contrast(100%)'}} />
    </Icon>
  );
};
