import React from 'react';
import { Stack } from '@mui/material';
import theme from '../../../theme';
import TypographyComponent from '../../atoms/Typography';
import MuiIcon from '../../atoms/Icon';
import ACCOUNT from '../../../../public/assets/images/accounts.svg';

import { PayFromAccountCardValues } from '../../../utils/constants';
import {
  IconButtonStack,
  StyledBox,
  StyledContinueButton,
  StyledOuterStack,
  StyledPayManualButton,
  StyledUl
} from './LloylodsAccountUtils';

interface PayFromLloylodAccountCardProps {
  handleContinueButton?: () => void;
  accountType: string;
  amount: string;
}

export const PayFromAccountCard = ({
  handleContinueButton,
  accountType,
  amount
}: PayFromLloylodAccountCardProps) => {
  return (
    <StyledOuterStack>
      <TypographyComponent
        variant="h1"
        color={theme.palette.text.highEmphasis}
        children={PayFromAccountCardValues.heading}
      />
      <StyledBox>
        <TypographyComponent
          variant="body3"
          color={theme.palette.text.mediumEmphasis}
          children={
            <>
              {PayFromAccountCardValues.subText_1}
              <span style={{ color: theme.palette.text.highEmphasis }}>{accountType}</span>
              {PayFromAccountCardValues.subText_2}
              <span style={{ color: theme.palette.text.highEmphasis }}>{amount}</span>
              {PayFromAccountCardValues.subtext_3}
            </>
          }
        />
        <Stack marginTop={'1.5rem'} gap={'1rem'}>
          <TypographyComponent
            variant="body1"
            color={theme.palette.text.highEmphasis}
            children={PayFromAccountCardValues.subText2}
          />
          <StyledUl>
            <Stack gap={'0.75rem'}>
              {PayFromAccountCardValues.list.map((item) => (
                <li key={item}>
                  <TypographyComponent
                    variant="body3"
                    color={theme.palette.text.mediumEmphasis}
                    children={item}
                  />
                </li>
              ))}
            </Stack>
          </StyledUl>
        </Stack>
        <IconButtonStack>
          <MuiIcon src={ACCOUNT} alt="accounts" />
          <Stack gap={'1.25rem'}>
            <StyledContinueButton
              variant="contained"
              onClick={handleContinueButton}
              children={
                <TypographyComponent
                  variant="body2"
                  color={theme.palette.structuralColors.white}
                  children={PayFromAccountCardValues.continueButtonName}
                />
              }
            />
            <StyledPayManualButton
              variant="contained"
              disabled
              children={
                <TypographyComponent
                  variant="body2"
                  color={theme.palette.primary[500]}
                  children={PayFromAccountCardValues.payManuallyButton}
                />
              }
            />
          </Stack>
        </IconButtonStack>
      </StyledBox>
    </StyledOuterStack>
  );
};
