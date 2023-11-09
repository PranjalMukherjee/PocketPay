import { Stack, styled } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import MuiButton from '../../components/atoms/Button';
import theme from '../../theme';
import TypographyComponent from '../../components/atoms/Typography';
import { Dropdown } from '../../components/atoms/DropDown';
import { VerificationCardValues } from '../../utils/constants';
import { TransactionContext } from '../../context/TransactionContext';

interface VerificationCardProps {
  handleContinueButton?: () => void;
}

const StyledStack = styled(Stack)({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '40rem',

  alignItems: 'stretch',
  justifyContent: 'space-between',
  height: '33.75rem',
  width: '100%'
});

const DropDownStack = styled(Stack)({
  marginBottom: 'auto',
  width: '75%',
  gap: theme.spacing(11)
});
const ContinueButton = styled(MuiButton)({
  padding: '1rem 1.875rem',
  width: '8.438rem',
  borderRadius: '3.5rem',
  height: '3.5rem',

  ['&:hover']: {
    boxShadow: '0px 0.5rem 1.5rem rgba(85, 51, 255, 0.24)'
  },
  boxShadow: '0px 0.5rem 1.5rem rgba(85, 51, 255, 0.24)',
  ['&:disabled']: {
    backgroundColor: theme.palette.primary[100]
  }
});
const StyledButtonStack = styled(Stack)({
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'flex-end'
});

export const VerificationCard = ({ handleContinueButton }: VerificationCardProps) => {
  const { transaction, setTransaction } = useContext(TransactionContext);
  const [purpose, setPurpose] = useState<string>(transaction.purpose);
  const [buttonDisable, setButtonDisable] = useState(true);
  const handleCountryChange = (value: string) => {
    setPurpose(value);
    setButtonDisable(false);
  };
  const handleContinue = () => {
    setTransaction((prev) => ({
      ...prev,
      purpose
    }));
    handleContinueButton?.();
  };
  useEffect(() => {
    if (purpose !== '') {
      setButtonDisable(false);
    }
  }, []);

  return (
    <StyledStack>
      <DropDownStack>
        <Stack gap={'0.75rem'}>
          <TypographyComponent
            variant="h1"
            color={theme.palette.text.highEmphasis}
            children={VerificationCardValues.heading}
          />
          <TypographyComponent
            variant="body3"
            color={theme.palette.text.mediumEmphasis}
            children={VerificationCardValues.subText}
          />
        </Stack>

        <Dropdown
          labelText={VerificationCardValues.dropDownLabel}
          value={purpose}
          handleChange={handleCountryChange}
          placeholder={VerificationCardValues.dropDownPlaceHolder}
          menu={VerificationCardValues.dropDownData}
        />
      </DropDownStack>
      <StyledButtonStack>
        <ContinueButton
          variant={'contained'}
          onClick={handleContinue}
          disabled={buttonDisable}
          children={
            <TypographyComponent
              variant="body2"
              color={theme.palette.structuralColors.white}
              children={'Continue'}
            />
          }
        />
      </StyledButtonStack>
    </StyledStack>
  );
};
