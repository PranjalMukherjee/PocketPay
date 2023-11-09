import React from 'react';
import { useState } from 'react';
import { BANK_LIST, CANCEL_THE_TRANSFER, CHOOSE_BANK } from '../../../utils/constants';
import { InputField } from '../../atoms/TextField';
import Typography from '../../atoms/Typography';
import BankCard from '../../molecules/BankSelectionCard';
import { Box, BoxProps, styled } from '@mui/material';
import theme from '../../../theme';

const StyledContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  gap: theme.spacing(10),
  width: '100%'
});
const ButtonWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '2.5rem',
  borderRadius: '56px',
  width: '218px',
  marginLeft: '12vw',
  boxShadow:
    '0px 0px 1px 0px rgba(20, 20, 20, 0.12), 0px 0px 8px 0px rgba(20, 20, 20, 0.04), 0px 8px 8px 0px rgba(20, 20, 20, 0.04)',

  transition: 'background-color 0.3s',
  '&:hover': {
    backgroundColor: theme.palette.structuralColors.buttonHover
  },
  cursor: 'pointer'
});
export interface ChooseBankProps {
  onClickHandler?: () => void;
  onCancelHandler?: () => void;
}
const ChooseBankCard = (props: ChooseBankProps) => {
  const [list, setList] = useState(BANK_LIST);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.trim();
    const updatedList = BANK_LIST.filter((item) =>
      item.bank.toLowerCase().includes(value.toLowerCase())
    );
    setList(value === '' ? BANK_LIST : updatedList);
  };
  return (
    <StyledContainer {...props} data-testid="ChooseBank">
      <Typography variant="h1" color="text.highEmphasis">
        {CHOOSE_BANK}
      </Typography>
      <InputField
        type="text"
        variant="outlined"
        placeholder="Start typing to search"
        onChange={handleChange}
        sx={{ width: 'auto' }}
      />
      {list.map((item) => (
        <BankCard key={item.bank} icon={item.bankIcon} alt={item.bank} bankName={item.bank} onClick={props.onClickHandler}/>
      ))}
      <ButtonWrapper>
        <Typography variant="body2" color={theme.palette.primary.main} onClick={props.onCancelHandler}>
          {CANCEL_THE_TRANSFER}
        </Typography>
      </ButtonWrapper>
    </StyledContainer>
  );
};

export default ChooseBankCard;
