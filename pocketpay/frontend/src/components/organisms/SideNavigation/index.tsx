import React from 'react';
import { Box, Divider, Stack, StackProps, styled } from '@mui/material';
import Image from '../../atoms/Image';
import MenuItem, { MenuItemProps } from '../../molecules/MenuItem';
import PocketPayLogo from '../../../../public/assets/icons/pocketpay.svg';
import AddIcon from '../../../../public/assets/icons/add.svg';
import Typography from '../../atoms/Typography';
import {
  navItems,
  balanceItems,
  NAVITEM_BALANCE_LABEL,
  NAVITEM_JAR_LABEL,
  NAVITEM_NEW_LABEL
} from '../../../utils/constants';
import theme from '../../../theme';

const StyledStack = styled(Stack)(({ theme }) => ({
  width: theme.spacing(63),
  height: '100vh',
  maxWidth: theme.spacing(63),
  flexShrink: 0,
  flexFlow: 'column nowrap',
  gap: theme.spacing(5),
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(8.5),

  boxShadow: `0px ${theme.spacing(0.25)} ${theme.spacing(2)} 0px rgba(0, 0, 0, 0.05)`,

  '& .nav-items-group': {
    display: 'flex',
    flexFlow: 'column nowrap',
    gap: theme.spacing(6),
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5)
  },

  '& .logo': {
    margin: '0 auto',
    marginBottom: theme.spacing(7),
    width: theme.spacing(25.75),
    height: theme.spacing(5.5),
    flexShrink: 0
  }
}));
export const HomeColor: React.CSSProperties = {
  border: 'none',
  color: theme.palette.primary.main
};

export interface SideNavigationProps extends StackProps {
  newUser: boolean;
}

const SideNavigation: React.FC<SideNavigationProps> = ({ newUser, ...rest }) => {
  const StylingIcon: React.CSSProperties = {
    border: 'none',
    color: theme.palette.text.mediumEmphasis,
    width: theme.spacing(56),
    paddingRight: theme.spacing(5)
  };

  function renderItems(items: MenuItemProps[]) {
    return items.map((item) => {
      if (item.imgAlt === 'Teams icon') {
        return (
          <Stack direction="row" justifyContent="flex-start" key={item.imgAlt}>
            <MenuItem {...item} style={StylingIcon} />
            <Box
              flex={1}
              style={{
                display: 'flex',
                marginRight: theme.spacing(8),
                padding: `${theme.spacing(1)} ${theme.spacing(4)}`,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: theme.spacing(4),
                background: theme.palette.structuralColors.buttonHover
              }}>
              <Typography color="primary.500" variant="caption">
                {NAVITEM_NEW_LABEL}
              </Typography>
            </Box>
          </Stack>
        );
      }
      return <MenuItem key={item.imgAlt} style={StylingIcon} {...item} />;
    });
  }

  return (
    <StyledStack data-testid="SideNavigation" {...rest}>
      <Stack className="logo">
        <Image imgSrc={PocketPayLogo} imgAlt="Pocket Pay Logo" />
      </Stack>
      <Stack className="nav-items-group">{renderItems(navItems)}</Stack>
      {!newUser && (
        <>
          <Divider />
          <Stack className="nav-items-group">
            <Typography variant="caption" color="text.mediumEmphasis">
              {NAVITEM_BALANCE_LABEL}
            </Typography>
            {renderItems(balanceItems)}
          </Stack>
          <Divider />
          <Stack className="nav-items-group">
            <Typography variant="caption" color="text.mediumEmphasis">
              {NAVITEM_JAR_LABEL}
            </Typography>
            <MenuItem text="Open a jar" imgSrc={AddIcon} imgAlt="Add Icon" style={StylingIcon} />
          </Stack>
        </>
      )}
    </StyledStack>
  );
};

export default SideNavigation;
