import MuiIcon from '../../atoms/Icon';
import MuiButton from '../../atoms/Button';
import React from 'react';
import { Box, Stack } from '@mui/material';
import styled from '@emotion/styled';
import theme from '../../../theme/index';
export const StyledOuterStack = styled(Stack)({
  width: '100%',
  maxWidth: '32.25rem',
  maxHeight: '35.313rem',
  height: '100%',
  gap: '2rem',
  overflowY: 'auto',
  '&::-webkit-scrollbar': {
    display: 'none'
  }
});
export const StyledBox = styled(Stack)({
  width: '450px',
  height: 'auto',
  border: `1px solid ${theme.palette.Greys.stroke}`,
  borderRadius: '1rem',
  padding: '1rem 2rem 3rem 2rem',
  gap: '1rem'
});

export const StyledContinueButton = styled(MuiButton)({
  width: '15.625rem',
  height: '3.5rem',
  padding: '1rem 2.688rem 1rem 2.688rem',
  borderRadius: '3.5rem',
  boxShadow: '0px 0.5rem 1.5rem rgba(85, 51, 255, 0.24)',
  '&:hover': {
    boxShadow: '0px 0.5rem 1.5rem rgba(85, 51, 255, 0.24)'
  }
});
export const StyledPayManualButton = styled(MuiButton)({
  width: '15.625rem',
  height: '3.5rem',
  padding: '1rem 2.688rem 1rem 2.688rem',
  borderRadius: '3.5rem',
  boxShadow: '0px 0.125rem 0.5rem 0px #1414141F',
  '&:hover': {
    boxShadow: '0px 0.125rem 0.5rem 0px #1414141F'
  },
  '&:disabled': {
    backgroundColor: theme.palette.structuralColors.white,
    boxShadow: '0px 0.125rem 0.5rem 0px #1414141F'
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

export const StyledButtonStack = styled(Stack)({
  gap: '1.25rem',
  marginTop: '1.5rem',
  alignItems: 'center'
});

export const DisplayStack = styled(Stack)({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '2.5rem',
  marginTop: '0.625rem'
});

export const StyledIcon = styled(MuiIcon)({
  width: '0.984rem',
  height: '0.984rem'
});
export interface BankDetailsProps {
  name: string;
  amount: string;
  accountNo: string;
}
export const bankDetails = (data: BankDetailsProps) => [
  {
    id: 1,
    label: 'Payee name',
    data: data.name
  },
  {
    id: 2,
    label: 'Use this reference',
    data: '#356778810'
  },
  {
    id: 3,
    label: 'Amount to send',
    data: data.amount
  },
  {
    id: 4,
    label: 'UK Sort code',
    data: '24-14-70'
  },
  {
    id: 5,
    label: 'Account number',
    data: data.accountNo
  }
];
