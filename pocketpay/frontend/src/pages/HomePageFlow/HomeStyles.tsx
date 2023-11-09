import React from 'react';
import { Box, styled } from '@mui/material';
import MuiButton from '../../components/atoms/Button';
import theme from '../../theme';
export const SendMoneyButton = styled(MuiButton)({
  width: '159px',
  height: '56px',
  borderRadius: '56px',
  color: theme.palette.structuralColors.white,
  backgroundColor: theme.palette.primary[500],
  ['&:hover']: {
    backgroundColor: theme.palette.primary[300]
  },
  textTransform: 'capitalize'
});

export const OuterBox = styled(Box)({
  width: '100%',
  padding: '1rem 0rem'
});
export const StackStyle = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingLeft: '20px',
  paddingRight: '10px',
  marginBottom: '1rem',
  flexDirection: 'row'
});
export const InnerBox = styled(Box)({
  paddingLeft: '20px',
  paddingRight: '10px',
  display: 'flex',
  gap: '20px',
  flexDirection: 'column'
});

export const ContentBoxStyle = styled(Box)({
  width: '81vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '74vh',
  backgroundColor: theme.palette.structuralColors.white,
  marginLeft: '25px',
  borderRadius: '4px'
});

export const ImageStyle = styled(Box)({
  width: '178px',
  height: '183px',
  marginBottom: '30px'
});
