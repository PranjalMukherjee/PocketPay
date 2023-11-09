import { Box, Stack, styled } from '@mui/material';
import React from 'react';
import theme from '../../../theme/index';
import MuiButton from '../../atoms/Button';
export const StyledBox = styled(Box)({
  width: '100%',
  maxWidth: '29.625rem',
  height: '24.688rem',
  borderRadius: '1rem',
  border: `0.063rem solid ${theme.palette.Greys.stroke}`,
  backgroundColor: theme.palette.structuralColors.white
});
export const StyledOuterBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: '29.625rem',
  height: '56.25rem'
});
export const StyledCompleteButton = styled(MuiButton)({
  padding: '1rem 1.875rem 1rem 1.875rem',
  borderRadius: '3.5rem',
  width: '8.438rem',
  boxShadow: '0px 0.5rem 1.5rem rgba(85, 51, 255, 0.24)',
  '&:hover': {
    boxShadow: '0px 0.5rem 1.5rem rgba(85, 51, 255, 0.24)'
  }
});

export const StyledIconBox = styled(Box)({
  width: '2.5rem',
  height: '2.5rem',
  borderRadius: '3.125rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: `1px solid ${theme.palette.Greys.stroke}`
});

export const StyledIconsStack = styled(Stack)({
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'row',
  padding: '1.5rem 1.875rem 0.5rem 1.875rem'
});

export const StyledTypoStack = styled(Stack)({
  padding: '1.25rem 5.625rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.625rem'
});
