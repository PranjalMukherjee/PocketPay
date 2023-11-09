import { Box, Stack, styled } from '@mui/material';

import React, { useContext, useState } from 'react';
import TabsComponent from '../../components/molecules/MuiTabs';
import BankCard from '../../components/molecules/BankCard';
import TypographyComponent from '../../components/atoms/Typography';
import { CardTabs } from '../../utils/constants';
import { TransactionContext } from '../../context/TransactionContext';
import { BankCardInterface } from '../../utils/types';
interface DebitCardType {
  cards: BankCardInterface[];
  onContinue: (event: boolean) => void;
}
const StyledBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: '29.625rem',
  height: '56.25rem'
});
const HeaderBox = styled(TabsComponent)({
  display:"flex",
  flexDirection:"row",
  justifyContent:"space-between",
  gap:"30px",
  border:"1px solid"
});

const InnerBox = styled(Stack)({
  gap: '20vh',
  marginTop: '30px'
});
const UpperBox = styled(TypographyComponent)({
  marginBottom: '30px'
});

const CardType = ({ cards, onContinue }: DebitCardType) => {
  const { transaction, setTransaction } = useContext(TransactionContext);
  const [selectvalue, setSelectedvalue] = useState(transaction.cardId ?? 1);
  const [isValid, setIsValid] = useState<boolean>(true);

  const handleBankCardChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const cardId = Number(event.target.value);

    setSelectedvalue(cardId);
    setTransaction((prev) => ({
      ...prev,
      cardId: cardId
    }));
  };

  onContinue(isValid);
  return (
    <StyledBox data-testid="outer-box">
      <UpperBox children={'Pay with your card'} variant={'h1'} />

      <HeaderBox tabNames={CardTabs} selectedTab={CardTabs[0]} variant='fullWidth'/>

      <InnerBox>
        {cards.map((card) => (
          <BankCard
            cardName={card.name}
            lastFourDigits={card.cardNumber}
            expiryDate={card.expiryDate}
            checked={selectvalue === card.id}
            onChange={handleBankCardChange}
            value={card.id.toString()}
            key={card.id}
            onValidCVV={(data: boolean) => {
              setIsValid(data);
            }}
          />
        ))}
      </InnerBox>
    </StyledBox>
  );
};

export default CardType;
