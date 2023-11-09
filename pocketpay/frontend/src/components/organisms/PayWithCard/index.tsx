import { Box, Divider, Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';
import BankCard from '../../molecules/BankCard';
import TypographyComponent from '../../atoms/Typography';
import theme from '../../../theme/index';
import {
  InnerBox,
  PAYWITHCARDCONSTANTS,
  SavedCardText,
  SavedCardTextLabel,
  StyledBox
} from './PayWithCardUtils';

const PayWithCard = () => {
  const [selectvalue, setSelectedvalue] = useState('');

  const handleBankCardChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedvalue(event.target.value);
  };

  return (
    <StyledBox data-testid="outer-box">
      <TypographyComponent variant="h1">{PAYWITHCARDCONSTANTS.title}</TypographyComponent>

      <Box sx={{ marginTop: '42px' }}>
        <Tabs>
          <Tab
            sx={{
              marginLeft: '80px',
              borderBottom: `2px solid ${theme.palette.primary[500]}`
            }}
            label={
              <SavedCardText>
                <TypographyComponent variant="body3" width="96px" height="24px">
                  {PAYWITHCARDCONSTANTS.savedCardText}
                </TypographyComponent>
              </SavedCardText>
            }
          />
          <Tab
            sx={{ marginLeft: '107px' }}
            label={
              <SavedCardTextLabel>
                <TypographyComponent variant="body3">
                  {PAYWITHCARDCONSTANTS.newCardText}
                </TypographyComponent>
              </SavedCardTextLabel>
            }
            disabled
          />
        </Tabs>
      </Box>
      <Divider sx={{ marginTop: '12px' }}></Divider>

      <InnerBox>
        <BankCard
          cardName={PAYWITHCARDCONSTANTS.cardName}
          lastFourDigits={PAYWITHCARDCONSTANTS.cardList[0].cardDigits}
          expiryDate={PAYWITHCARDCONSTANTS.cardList[0].expiryDate}
          checked={selectvalue === 'option1'}
          onChange={handleBankCardChange}
          value={'option1'}
        />
        <BankCard
          cardName={PAYWITHCARDCONSTANTS.cardName}
          lastFourDigits={PAYWITHCARDCONSTANTS.cardList[0].cardDigits}
          expiryDate={PAYWITHCARDCONSTANTS.cardList[0].expiryDate}
          checked={selectvalue === 'option2'}
          onChange={handleBankCardChange}
          value={'option2'}
        />
      </InnerBox>
    </StyledBox>
  );
};

export default PayWithCard;
