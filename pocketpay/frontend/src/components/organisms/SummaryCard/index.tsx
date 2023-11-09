import React from 'react';
import { Stack } from '@mui/material';
import TypographyComponent from '../../atoms/Typography';
import theme from '../../../theme';

import LEFTARROW from '../../../../public/assets/icons/left.svg';
import { getFeeDetails, getRecipientDetails } from '../../../utils/functions';
import { TransferDetailsCardValues } from '../../../utils/constants';
import {
  IconTypoStack,
  StyledButtonStack,
  StyledCancelTransferButton,
  StyledContinueToPayButton,
  StyledMuiIcon,
  StyledStack,
  TypoStack
} from '../../../utils/styledComponents';

interface ReceiverData {
  email: string;
  accountNo: string;
  firstName: string;
  lastName: string;
  ifsc: string;
  accountType: string;
}
interface TransferDetailsCardProps {
  payState: boolean;
  receiverCurrencyType: string;
  senderCurrencyType: string;
  currencyExchangeRate: number;
  receiverData: ReceiverData;
  fee: number;
  totalAmount: number;
  amount_to_convert: number;
  handleContinueButton?: () => void;
  handleCancelButton?: () => void;
  enableContinueButton?:boolean
}

export const TransferDetailsCard = ({
  payState,
  receiverCurrencyType,
  currencyExchangeRate,
  senderCurrencyType,
  fee,
  totalAmount,
  amount_to_convert,
  receiverData,
  handleCancelButton,
  handleContinueButton,
  enableContinueButton
}: TransferDetailsCardProps) => {
  const FeeDetails = getFeeDetails(fee, senderCurrencyType, amount_to_convert, currencyExchangeRate, receiverCurrencyType);
  const RecipientDetails = getRecipientDetails(receiverData);

  return (
    <StyledStack>
      <Stack gap={'1rem'}>
        <TypographyComponent
          variant="caption"
          color={theme.palette.text.lowEmphasis}
          children={TransferDetailsCardValues.heading1}
        />
        <IconTypoStack>
          <TypographyComponent
            variant="body2"
            color={theme.palette.text.highEmphasis}
            children={`${totalAmount} ${senderCurrencyType}`}
          />
          <StyledMuiIcon src={LEFTARROW} alt="LeftArrow" />
          <TypographyComponent
            variant="body2"
            color={theme.palette.text.highEmphasis}
            children={`${(totalAmount * currencyExchangeRate).toFixed(2)} ${receiverCurrencyType}`}
          />
        </IconTypoStack>
        <Stack>
          {FeeDetails.map((item) => (
            <TypoStack key={item.id}>
              <TypographyComponent
                variant="body2"
                color={theme.palette.text.mediumEmphasis}
                children={item.label}
              />
              <TypographyComponent
                variant="body2"
                color={theme.palette.text.highEmphasis}
                children={item.text}
              />
            </TypoStack>
          ))}
        </Stack>
      </Stack>
      <Stack gap={'1.25rem'} marginTop={'2.5rem'}>
        <TypographyComponent
          variant="caption"
          color={theme.palette.text.lowEmphasis}
          children={TransferDetailsCardValues.heading2}
        />
        <Stack>
          {RecipientDetails.map((item) => (
            <TypoStack key={item.id}>
              <TypographyComponent
                variant="body2"
                color={theme.palette.text.mediumEmphasis}
                children={item.label}
              />
              <TypographyComponent
                variant="body2"
                color={theme.palette.text.highEmphasis}
                children={item.text}
              />
            </TypoStack>
          ))}
        </Stack>
      </Stack>
      {payState && (
        <StyledButtonStack>
          <StyledContinueToPayButton
            variant="contained"
            onClick={handleContinueButton}
            children={
              <TypographyComponent
                variant="body2"
                color={theme.palette.structuralColors.white}
                children={TransferDetailsCardValues.continueButton}
              />
            }
            disabled={enableContinueButton}
          />
          <StyledCancelTransferButton
            variant="outlined"
            onClick={handleCancelButton}
            children={
              <TypographyComponent
                variant="body2"
                color={theme.palette.primary[500]}
                children={TransferDetailsCardValues.cancelTransferButton}
              />
            }
          />
        </StyledButtonStack>
      )}
    </StyledStack>
  );
};
