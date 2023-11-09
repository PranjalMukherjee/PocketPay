import { Box, Stack, styled } from '@mui/material';
import React from 'react';
import theme from '../../../theme/index';

export const PAYWITHCARDCONSTANTS = {
  title: "Pay with your card",
  savedCardText: "SAVED CARD",
  newCardText: "NEW CARD",
  cardName: "EUR Visa Debit",
  cardList:  [
    { cardDigits: 4546, expiryDate: '09/25' },
    { cardDigits: 9313, expiryDate: '06/25' }
  ]
};
export const StyledBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: '29.625rem',
  height: '56.25rem'
});
export const InnerBox = styled(Stack)({
  gap: '140px',
  marginTop: '30px'
});
export const SavedCardText = styled('span')({
  color: theme.palette.primary[500],
  fontSize: '21px'
});
export const SavedCardTextLabel = styled('span')({
  fontSize: theme.typography.body3.fontSize
});