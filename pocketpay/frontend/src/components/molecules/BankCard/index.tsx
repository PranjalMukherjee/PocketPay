import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CardIcon from '../../../../public/assets/icons/creditCard.svg';
import theme from '../../../theme';
import RadioButton from '../../atoms/RadioButton';
import { InputField } from '../../atoms/TextField';
import IconComponent from '../../atoms/Icon';
import { styled } from '@mui/system';
import Typography from '../../atoms/Typography';
import { CARD_DETAILS, cvvRegex } from '../../../utils/constants';

interface BankCardProps {
  cardName: string;
  lastFourDigits: string;
  expiryDate: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  cardDigits?: number;
  onValidCVV?:(event: boolean) =>void
}

const Layout = styled(Box)({
  width: '137.6px',
  height: '24px',
  display: 'flex',
  gap: '9.6px',
  alignItems: 'flex-start'
});

const Card = styled(Box)({
  paddingTop: '6px',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px'
});

const RadioStyles = styled(RadioButton)({
  color: theme.palette.grey[200],
  '&.Mui-checked': {
    color: theme.palette.primary[500]
  }
});

const BankCard = (props: BankCardProps) => {
  const cardDetails = CARD_DETAILS(props.lastFourDigits, props.expiryDate);
  const [cvv, setCvv] = useState<string>('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCvv = event.target.value;
    setCvv(newCvv);
    const isValid = !cvvRegex.test(newCvv);

    if (props.onValidCVV) {
      props.onValidCVV(isValid);
    }
  };
  const validateCVV = (value: string) => {
    if (cvv === '') return false;
    return !cvvRegex.test(value);
  };
 
  return (
    <Layout>
      <RadioStyles
        checked={props.checked}
        onChange={props.onChange}
        value={props.value}
        variant="primary"
      />
      <Card>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
          <Typography
            color={`${theme.palette.text.highEmphasis}`}
            children={props.cardName}
            variant="body2"
          />
          <Box sx={{ display: 'flex', gap: '3px' }}>
            {cardDetails.map((typo) => (
              <Typography
                key={typo.text}
                color={`${typo.color}`}
                children={typo.text}
                variant="body2"
              />
            ))}
          </Box>
        </Box>
        <InputField
          placeholder="CVV / CVC"
          endAdornment={<IconComponent src={CardIcon} alt="card" />}
          style={{ height: '60px', width: '308px' }}
          inputMode="numeric"
          error={validateCVV(cvv)}
          onChange={handleChange}
          value={cvv}
          helperText={<span style={{ color: 'red' }}>{validateCVV(cvv) ? 'CVV should contain only numbers and length should be 3' : ''}</span>}
        />
      </Card>
    </Layout>
  );
};

export default BankCard;
