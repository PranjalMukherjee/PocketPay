import { Divider, Stack } from '@mui/material';
import React from 'react';
import theme from '../../../theme/index';
import MuiIcon from '../../atoms/Icon';
import LIOYDS from '../../../../public/assets/icons/horse.svg';
import VISA from '../../../../public/assets/icons/visa.svg';
import Typography from '../../atoms/Typography';
import {
  StyledOuterBox,
  StyledBox,
  StyledIconsStack,
  StyledIconBox,
  StyledTypoStack,
  StyledCompleteButton
} from './PurchaseConfirmationUtils';
import { PurchaseConfirmValues } from '../../../utils/constants';

interface PurchaseconfirmCardProps {
  amount: number;
  currencytype: string;
  cardDigits: number;
  handleCompleteClick?: () => void;
}

export const PurchaseconfirmCard = ({
  handleCompleteClick,
  amount,
  currencytype,
  cardDigits
}: PurchaseconfirmCardProps) => {
  return (
    <StyledOuterBox data-testid="outer-box">
      <Typography variant="h1">{'Pay with your card'}</Typography>
      <StyledBox sx={{ marginTop: '42px' }}>
        <StyledIconsStack>
          <StyledIconBox>
            <MuiIcon src={LIOYDS} alt="LIoyds bank" />
          </StyledIconBox>
          <MuiIcon src={VISA} alt="VISA" />
        </StyledIconsStack>

        <Divider />

        <StyledTypoStack>
          <Stack>
            <Typography
              color={theme.palette.text.highEmphasis}
              children={PurchaseConfirmValues.label}
              variant="body1"
            />
          </Stack>
          <Stack gap={'0.5rem'}>
            <Typography
              color={theme.palette.text.mediumEmphasis}
              children={
                <>
                  <span style={{ color: theme.palette.text.highEmphasis }}>
                    {`${currencytype} ${amount.toFixed(2)}`}
                  </span>
                  {PurchaseConfirmValues.label2}
                  <span style={{ color: theme.palette.text.highEmphasis }}>{cardDigits}</span>
                </>
              }
              variant="caption"
            />
            {PurchaseConfirmValues.purchaseSteps.map((text, index) => (
              <Typography
                key={index}
                color={theme.palette.text.mediumEmphasis}
                children={text.label}
                variant="caption"
              />
            ))}
          </Stack>
          <Stack marginTop={'1.625rem'}>
            <StyledCompleteButton
              variant="contained"
              onClick={handleCompleteClick}
              children={
                <Typography
                  color={theme.palette.structuralColors.white}
                  children={PurchaseConfirmValues.completeButton}
                  variant="body2"
                />
              }
            />
          </Stack>
        </StyledTypoStack>
      </StyledBox>
    </StyledOuterBox>
  );
};
