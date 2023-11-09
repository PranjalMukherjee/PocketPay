import { Stack } from '@mui/material';
import React from 'react';
import theme from '../../../theme';
import styled from '@emotion/styled';

interface DashBoardProps {
  navBar: React.ReactNode;
  header: React.ReactNode;
  body: React.ReactNode;
}
const NavBarStyles = styled(Stack)({
  backgroundColor: theme.palette.structuralColors.white
});
const BodyStyles = styled(Stack)({
  backgroundColor: theme.palette.structuralColors.background,
  height: '100%'
});
const DashBoard = (props: DashBoardProps) => {
  return (
    <Stack display={'flex'} flexDirection={'row'}>
      <NavBarStyles minWidth={'270px'}>{props.navBar}</NavBarStyles>
      <Stack width={'1920px'}>
        <Stack>{props.header}</Stack>
        <BodyStyles>{props.body}</BodyStyles>
      </Stack>
    </Stack>
  );
};

export default DashBoard;
