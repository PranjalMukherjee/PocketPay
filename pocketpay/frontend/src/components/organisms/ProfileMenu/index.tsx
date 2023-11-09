import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, BoxProps, Menu, Divider, Grid } from '@mui/material';
import USER_ICON from '../../../../public/assets/icons/user.svg';
import settings from '../../../../public/assets/icons/settings.svg';
import help from '../../../../public/assets/icons/help-circle.svg';
import LOGOUT_ICON from '../../../../public/assets/icons/logout.svg';
import {
  DETAIL_MENU,
  HELP_MENU,
  LOG_OUT_MENU,
  NOT_FOUND,
  SETTINGS_MENU,
  USER_ID_MENU
} from '../../../utils/constants';
import theme from '../../../theme/index';
import Typography from '../../atoms/Typography';
import IconComponent from '../../atoms/Icon';
import { useAuth0 } from '@auth0/auth0-react';
import { LOGOUR_URL } from '../../../utils/urls';

interface ProfileMenuProps extends BoxProps {
  userName: string;
  isOpen: boolean;
  anchorEl?: HTMLElement;
  handleLogOut?: () => void;
}

const StyledGrid = styled(Grid)({
  display: 'flex',
  flexDirection: 'column'
});

const StyledGrid2 = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center'
});

const StyledDialog = styled(Menu)({
  minWidth: '230px',
  minHeight: '309px',
  '& .MuiMenu-paper': {
    minWidth: '230px',
    minHeight: '309px'
  }
});

const RootBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2)
}));

const IconBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  height: theme.spacing(6),
  width: theme.spacing(6),
  paddingRight: '8px'
}));

const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  textTransform: 'none',
  flexDirection: 'column',
  borderRadius: theme.spacing(2)
}));

const StyledBox1 = styled(Box)(({ theme }) => ({
  marginLeft: theme.spacing(5),
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(2)
}));

const StyledBox2 = styled(Box)(({ theme }) => ({
  marginLeft: theme.spacing(5)
}));

const TypoBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(6),
  marginBottom: theme.spacing(4)
}));

const ProfileMenu = ({ userName, isOpen, anchorEl, handleLogOut, ...rest }: ProfileMenuProps) => {
  const { logout } = useAuth0();
  return (
    <StyledGrid>
      <StyledDialog open={isOpen} anchorEl={anchorEl} data-testid="profile-menu">
        <StyledBox {...rest}>
          <StyledBox1>
            <StyledGrid2>
              <Typography variant="body2" color={theme.palette.text.highEmphasis}>
                {userName}
              </Typography>
              <Typography variant="caption" color={theme.palette.text.mediumEmphasis}>
                {USER_ID_MENU}
              </Typography>
            </StyledGrid2>
          </StyledBox1>
          <Divider />
          <StyledBox2>
            <TypoBox>
              <RootBox>
                <IconBox>
                  <IconComponent src={USER_ICON} alt={NOT_FOUND} />
                </IconBox>
                <Typography
                  children={DETAIL_MENU}
                  variant="body2"
                  color={theme.palette.text.highEmphasis}
                />
              </RootBox>
            </TypoBox>
            <TypoBox>
              <RootBox>
                <IconBox>
                  <IconComponent src={settings} alt={NOT_FOUND} />
                </IconBox>
                <Typography
                  children={SETTINGS_MENU}
                  variant="body2"
                  color={theme.palette.text.highEmphasis}
                />
              </RootBox>
            </TypoBox>
            <TypoBox>
              <RootBox>
                <IconBox>
                  <IconComponent src={help} alt={NOT_FOUND} />
                </IconBox>
                <Typography
                  children={HELP_MENU}
                  variant="body2"
                  color={theme.palette.text.highEmphasis}
                />
              </RootBox>
            </TypoBox>
            <TypoBox
              onClick={() => {
                localStorage.clear();
                logout({ logoutParams: { returnTo: LOGOUR_URL } });
              }}
              data-testid="Logout-Option"
              sx={{ cursor: 'pointer' }}>
              <RootBox>
                <IconBox>
                  <IconComponent src={LOGOUT_ICON} alt={NOT_FOUND} />
                </IconBox>
                <Typography
                  children={LOG_OUT_MENU}
                  variant="body2"
                  color={theme.palette.text.highEmphasis}
                />
              </RootBox>
            </TypoBox>
          </StyledBox2>
        </StyledBox>
      </StyledDialog>
    </StyledGrid>
  );
};

export default ProfileMenu;
