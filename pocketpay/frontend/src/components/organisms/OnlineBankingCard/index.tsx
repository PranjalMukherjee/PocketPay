import React from 'react';
import { Stack } from '@mui/material';
import theme from '../../../theme';
import TypographyComponent from '../../atoms/Typography';
import LIOYDS from '../../../../public/assets/icons/horse.svg';
import { OnlineBankingCardValues } from '../../../utils/constants';
import {
  BankDetailsProps,
  DisplayStack,
  StyledBox,
  StyledButtonStack,
  StyledContinueButton,
  StyledIcon,
  StyledIconBox,
  StyledOuterStack,
  StyledPayManualButton,
  bankDetails
} from './OnlineBankingUtils';

interface PayFromAccountCardProps {
  handleContinueButton?: () => void;
  handleCancelTransferButton?: () => void;
  data: BankDetailsProps;
}

export const OnlineBankingCard = ({
  handleContinueButton,
  handleCancelTransferButton,
  data
}: PayFromAccountCardProps) => {
  const bankDetailsArray = bankDetails(data);

  return (
    <StyledOuterStack>
      <TypographyComponent
        variant="h1"
        color={theme.palette.text.highEmphasis}
        children={OnlineBankingCardValues.heading}
      />
      <StyledBox>
        <Stack alignItems={'center'}>
          <StyledIconBox>
            <StyledIcon src={LIOYDS} alt="LIoyds bank" />
          </StyledIconBox>
        </Stack>
        <TypographyComponent
          variant="h1"
          color={theme.palette.text.highEmphasis}
          children={OnlineBankingCardValues.subHeading1}
        />
        <TypographyComponent
          variant="caption"
          color={theme.palette.text.mediumEmphasis}
          children={OnlineBankingCardValues.subHeading2}
        />
        <DisplayStack>
          {bankDetailsArray.map((item) => (
            <Stack gap={'0.25rem'} key={item.label}>
              <TypographyComponent
                variant="caption"
                color={theme.palette.text.lowEmphasis}
                children={item.label}
              />
              <TypographyComponent
                variant="caption"
                color={theme.palette.text.highEmphasis}
                children={item.data}
              />
            </Stack>
          ))}
        </DisplayStack>
        <Stack marginTop={'1.5rem'} gap={'0.25rem'}>
          <TypographyComponent
            variant="caption"
            color={theme.palette.text.lowEmphasis}
            children={OnlineBankingCardValues.bankDetails[0]}
          />
          <TypographyComponent
            variant="caption"
            color={theme.palette.text.highEmphasis}
            style={{ whiteSpace: 'pre-line' }}
            children={OnlineBankingCardValues.bankDetails[1]}
          />
        </Stack>
        <Stack marginTop={'1.5rem'}>
          <TypographyComponent
            variant="caption"
            color={theme.palette.text.mediumEmphasis}
            children={OnlineBankingCardValues.endText}
          />
        </Stack>

        <StyledButtonStack>
          <StyledContinueButton
            variant="contained"
            onClick={handleContinueButton}
            children={
              <TypographyComponent
                variant="body2"
                color={theme.palette.structuralColors.white}
                children={OnlineBankingCardValues.continueButton}
              />
            }
          />
          <StyledPayManualButton
            variant="outlined"
            onClick={handleCancelTransferButton}
            children={
              <TypographyComponent
                variant="body2"
                color={theme.palette.primary[500]}
                children={OnlineBankingCardValues.cancelButton}
              />
            }
          />
        </StyledButtonStack>
      </StyledBox>
    </StyledOuterStack>
  );
};
