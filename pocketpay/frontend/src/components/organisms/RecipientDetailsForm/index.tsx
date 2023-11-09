import React, { useContext, useState } from 'react';
import { Stack, styled } from '@mui/material';
import TypographyComponent from '../../atoms/Typography';
import theme from '../../../theme';
import { InputField } from '../../atoms/TextField';
import CheckBoxLabels from '../../atoms/Checkbox';
import { Dropdown } from '../../atoms/DropDown';
import MuiButton from '../../atoms/Button';
import { CONTINUE, FillRecipientConst, LoginCardValues } from '../../../utils/constants';
import {
  isValidEmail,
  validateAccountNo,
  validateFirstName,
  validateIfsc,
  validateLastName
} from '../../../utils/functions';
import { TransactionContext } from '../../../context/TransactionContext';

interface InputFieldData {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  error: boolean;
  helperText: string;
}

interface FillRecipientProps {
  handleContinue?: () => void;
}
type FormFields = {
  email: string;
  accountNo: string;
  firstName: string;
  lastName: string;
  ifsc: string;
  accountType: string;
};
type FormFieldsErrors = {
  emailError: boolean;
  accountNoError: boolean;
  firstNameError: boolean;
  lastNameError: boolean;
  ifscError: boolean;
};
const StyledButton = styled(MuiButton)({
  width: '135px',
  height: '56px',
  padding: '16px 30px',
  borderRadius: '56px',
  '&:disabled': {
    backgroundColor: theme.palette.primary[100]
  }
});

const OverFlowStyles = styled(Stack)({
  gap: '32px',
  maxHeight: '550px',
  overflowY: 'auto',
  '&::-webkit-scrollbar': {
    display: 'none'
  }
});

const FillRecipientDetails = (props: FillRecipientProps) => {
  const { transaction, setTransaction } = useContext(TransactionContext);
  const [formFields, setFormFields] = useState<FormFields>({
    ...transaction.recipientDetails
  });
  const [formErrors, setFormErrors] = useState<FormFieldsErrors>({
    emailError: false,
    accountNoError: false,
    firstNameError: false,
    lastNameError: false,
    ifscError: false
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    // Update the formFields state
    setFormFields((prev) => ({
      ...prev,
      [name]: value
    }));

    // Handle validation and update error state
    switch (name) {
      case 'email':
        setFormErrors((prev) => ({
          ...prev,
          emailError: !isValidEmail(value)
        }));
        break;
      case 'accountNo':
        setFormErrors((prev) => ({
          ...prev,
          accountNoError: !validateAccountNo(value)
        }));
        break;
      case 'firstName':
        setFormErrors((prev) => ({
          ...prev,
          firstNameError: validateFirstName(value)
        }));
        break;
      case 'lastName':
        setFormErrors((prev) => ({
          ...prev,
          lastNameError: validateLastName(value)
        }));
        break;
      case 'ifsc':
        setFormErrors((prev) => ({
          ...prev,
          ifscError: validateIfsc(value)
        }));
        break;
      default:
        break;
    }
  };

  const isFormValid = () => {
    return (
      !formErrors.emailError &&
      !formErrors.accountNoError &&
      !formErrors.firstNameError &&
      !formErrors.lastNameError &&
      !formErrors.ifscError &&
      formFields.accountType.trim() !== ''
    );
  };

  const inputFields: InputFieldData[] = [
    {
      name: 'accountNo',
      value: formFields.accountNo,
      onChange: handleChange,
      label: FillRecipientConst.ACCOUNTNUMBER_LABEL,
      error: formErrors.accountNoError,
      helperText: formErrors.accountNoError ? LoginCardValues.AccountNumberText : ''
    },
    {
      name: 'firstName',
      value: formFields.firstName,
      onChange: handleChange,
      label: FillRecipientConst.FIRST_NAME,
      error: formErrors.firstNameError,
      helperText: formErrors.firstNameError ? LoginCardValues.FirstNameErrorText : ''
    },
    {
      name: 'lastName',
      value: formFields.lastName,
      onChange: handleChange,
      label: FillRecipientConst.LAST_NAME,
      error: formErrors.lastNameError,
      helperText: formErrors.lastNameError ? LoginCardValues.LastNameErrorText : ''
    },
    {
      name: 'ifsc',
      value: formFields.ifsc,
      onChange: handleChange,
      label: FillRecipientConst.IFSC_CODE,
      error: formErrors.ifscError,
      helperText: formErrors.ifscError ? LoginCardValues.IfscErrorText : ''
    }
  ];
  const handleContinue = () => {
    setTransaction((prev) => ({
      ...prev,
      recipientDetails: {
        email: formFields.email,
        accountNo: formFields.accountNo,
        accountType: formFields.accountType,
        firstName: formFields.firstName,
        ifsc: formFields.ifsc,
        lastName: formFields.lastName
      }
    }));
    props.handleContinue?.();
  };
  const handleAccountType = (value: string) => {
    setFormFields({
      ...formFields,
      accountType: value
    });
  };
  return (
    <Stack maxWidth={'516px'}>
      <OverFlowStyles>
        <TypographyComponent
          variant={'h1'}
          children={FillRecipientConst.MAIN_TEXT}
          color={theme.palette.text.highEmphasis}
        />
        <Stack gap={'40px'}>
          <Stack gap={'14px'}>
            <InputField
              name="email"
              value={formFields.email}
              onChange={handleChange}
              placeholder={FillRecipientConst.EMAIL_PLACEHOLDER}
              error={formErrors.emailError}
              helperText={formErrors.emailError ? LoginCardValues.emailHelperText : ''}
            />
            <CheckBoxLabels label={FillRecipientConst.CHECKBOX_LABEL} checked={true} />
          </Stack>
          <Stack gap={'26px'}>
            <TypographyComponent
              variant={'body3'}
              text={FillRecipientConst.SUB_TEXT}
              color={theme.palette.text.highEmphasis}
            />
            {inputFields.map((inputField) => (
              <InputField
                name={inputField.name}
                key={inputField.label}
                value={inputField.value}
                onChange={inputField.onChange}
                label={inputField.label}
                error={inputField.error}
                helperText={inputField.helperText}
              />
            ))}
            <Dropdown
              value={formFields.accountType}
              handleChange={handleAccountType}
              placeholder={FillRecipientConst.DROPDOWN_PLACEHOLDER}
              labelText={FillRecipientConst.DROPDOWN_LABEL}
              menu={FillRecipientConst.DROPDOWN_ITEMS}
            />
          </Stack>
        </Stack>
      </OverFlowStyles>
      <Stack marginLeft={'517px'}>
        <StyledButton
          variant="contained"
          disabled={!isFormValid()}
          children={
            <TypographyComponent
              children={CONTINUE}
              variant={'body2'}
              color={theme.palette.structuralColors.white}
            />
          }
          onClick={handleContinue}
        />
      </Stack>
    </Stack>
  );
};

export default FillRecipientDetails;
