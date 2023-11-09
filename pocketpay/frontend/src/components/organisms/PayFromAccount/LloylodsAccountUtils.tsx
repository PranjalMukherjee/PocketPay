import React from 'react';
import { Stack } from '@mui/material';
import MuiButton from '../../atoms/Button';
import styled from '@emotion/styled';
import theme from '../../../theme';
export const StyledOuterStack = styled(Stack)({
  width: '100%',
  maxWidth: '32.25rem',
  maxHeight: '36.25rem',
  height: '100%',
  overflowY: 'auto',
  '&::-webkit-scrollbar': {
    display: 'none'
  },
  gap: '2rem'
});
export const StyledBox = styled(Stack)({
  width: '455px',
  height: 'auto',
  border: `1px solid ${theme.palette.Greys.stroke}`,
  borderRadius: '1rem',
  padding: '3rem 2rem'
});

export const StyledContinueButton = styled(MuiButton)({
  padding: '1rem 2.688rem 1rem 2.688rem',
  borderRadius: '3.5rem',
  width: '13.625rem',
  height: '3.5rem',
  boxShadow: '0px 0.5rem 1.5rem rgba(85, 51, 255, 0.24)',
  '&:hover': {
    boxShadow: '0px 0.5rem 1.5rem rgba(85, 51, 255, 0.24)'
  }
});
export const StyledPayManualButton = styled(MuiButton)({
  padding: '1rem 2.688rem 1rem 2.688rem',
  borderRadius: '3.5rem',
  width: '13.625rem',
  height: '3.5rem',
  boxShadow: '0px 0.125rem 0.5rem 0px #1414141F',
  '&:hover': {
    boxShadow: '0px 0.125rem 0.5rem 0px #1414141F'
  },
  '&:disabled': {
    backgroundColor: theme.palette.structuralColors.white,
    boxShadow: '0px 0.125rem 0.5rem 0px #1414141F'
  }
});

export const IconButtonStack = styled(Stack)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2.5rem',
  marginTop: '2.5rem'
});

export const StyledUl = styled('ul')({
  color: theme.palette.text.mediumEmphasis,
  padding: '0px 1.625rem'
});
