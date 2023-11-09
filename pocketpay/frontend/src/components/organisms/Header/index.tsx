import React, { useState } from 'react';
import { Box, Stack, Popover, styled } from '@mui/material';
import theme from '../../../theme';
import MuiIcon from '../../atoms/Icon';
import NotificationBell from '../../../../public/assets/icons/bell.svg';
import Avatar from '../../atoms/Avatar';
import Logo from '../../../../public/assets/icons/Avatar.svg';
import TypographyComponent from '../../atoms/Typography';
import ProfileMenu from '../ProfileMenu';

interface HeaderProps {
  username: string;
}
const StyledBox = styled(Box)({
  backgroundColor: theme.palette.structuralColors.white,
  boxShadow: `0px 0.063rem 0.5rem 0px rgba(0, 0, 0, 0.05)`,
  padding: '1rem 2rem',
  alignItems: 'center',
  justifyContent: 'flex-end',
  display: 'flex',
  flexDirection: 'row',
  gap: '1.25rem'
});

const StyledStack = styled(Stack)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '0.75rem',
  justifyContent: 'center'
});
const StyledAvatar = styled(Avatar)({
  cursor: 'pointer',
  width: '1.75rem',
  height: '1.75rem'
});
export const Header = ({ username }: HeaderProps) => {
  const [isLogoutPopupVisible, setIsLogoutPopupVisible] = useState<boolean>(false);
  const [logoutAnchorElement, setLogoutAnchorElement] = useState<HTMLInputElement | null>(null);

  const handleAvatarClick = (event: React.MouseEvent<HTMLInputElement>) => {
    setLogoutAnchorElement(event.currentTarget);
    setIsLogoutPopupVisible(!isLogoutPopupVisible);
  };

  const handleLogoutClick = () => {
    setIsLogoutPopupVisible(!isLogoutPopupVisible);
  };

  return (
    <StyledBox>
      <MuiIcon src={NotificationBell} alt="notification-bell" />

      <StyledStack>
        <StyledAvatar src={Logo} onClick={handleAvatarClick} data-testid="avatar" />

        <TypographyComponent
          variant="caption"
          color={theme.palette.text.mediumEmphasis}
          children={username}
        />
      </StyledStack>

      {isLogoutPopupVisible && (
        <Popover
          open={isLogoutPopupVisible}
          onClose={handleLogoutClick}
          onClick={handleLogoutClick}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}>
          <ProfileMenu
            userName={username}
            anchorEl={logoutAnchorElement}
            handleLogOut={handleLogoutClick}
            isOpen
          />
        </Popover>
      )}
    </StyledBox>
  );
};
