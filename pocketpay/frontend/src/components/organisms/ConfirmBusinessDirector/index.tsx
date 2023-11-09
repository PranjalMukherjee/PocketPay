import React, { useContext, useState } from 'react';
import { Box, Stack, TextField } from '@mui/material';
import TypographyComponent from '../../atoms/Typography';
import theme from '../../../theme';
import DatePickerComponent from '../../atoms/DatePicker';
import { Dropdown } from '../../atoms/DropDown';
import styled from '@emotion/styled';
import MuiButton from '../../atoms/Button';
import PlusIcon from '../../../../public/assets/icons/plus.svg';
import CloseIcon from '../../../../public/assets/icons/close.svg';
import MuiIcon from '../../atoms/Icon';
import { CONTINUE, ConfirmDirectors, COUNTRY_LIST } from '../../../utils/constants';
import { TransactionContext } from '../../../context/TransactionContext';
import { NAME_REGEX } from '../../../utils/regex';

interface ConfirmBusinessProps {
  isDirectors?: boolean;
  handleContinue?: () => void;
}

const StyledButton = styled(MuiButton)({
  width: '135px',
  height: '56px',
  padding: '16px 30px',
  borderRadius: '56px'
});

const OverFlowStyles = styled(Stack)({
  gap: '32px',
  maxHeight: '521px',
  overflowY: 'auto',
  ['&::-webkit-scrollbar']: {
    display: 'none'
  }
});
export const TextFieldStyled = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '&:hover fieldset': {
      border: `1px solid ${theme.palette.Greys.stroke}`
    },
    '&.Mui-focused fieldset': {
      border: `1px solid ${theme.palette.Greys.stroke}`,
      borderBottomColor: theme.palette.primary[500]
    },
    color: theme.palette.text.highEmphasis,
    fontSize: theme.typography.body2.fontSize,
    borderRadius: '8px'
  },

  '.MuiInputLabel-root': {
    fontSize: theme.typography.body2.fontSize,
    color: theme.palette.text.lowEmphasis
  },
  '& .Mui-focused.MuiInputLabel-root': {
    color: theme.palette.primary[500]
  },
  '& fieldset': {
    border: `1px solid ${theme.palette.Greys.stroke}`
  },
  '& .Mui-error .MuiOutlinedInput-notchedOutline': {
    borderColor: `red !important`
  },
  '& .Mui-error .MuiInputLabel-root': {
    color: 'red !important'
  }
});
export type BusinessFields = {
  firstName: string;
  lastName: string;
  dateOfBirth: null | string;
  countryOfResidence: string;
}[];

const ConfirmBusinessDirectors = ({ isDirectors, ...props }: ConfirmBusinessProps) => {
  const { transaction, setTransaction } = useContext(TransactionContext);
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false
  });
  const [owners, setOwners] = useState<BusinessFields>(transaction.stackholders);

  const [directors, setDirectors] = useState<BusinessFields>(transaction.directors);
  const [disable, setDisable] = useState<boolean>(true);

  const handleAddDirector = () => {
    setDirectors((prevDirectors) => [
      ...prevDirectors,
      {
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        countryOfResidence: ''
      }
    ]);
  };
  const handleAddOwner = () => {
    setOwners((prevOwners) => [
      ...prevOwners,
      {
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        countryOfResidence: ''
      }
    ]);
  };
  const handleRemoveDirector = (index: number) => {
    const updatedDirectors = [...directors];
    updatedDirectors.splice(index, 1);
    setDirectors(updatedDirectors);
  };
  const handleRemoveOwner = (index: number) => {
    const updatedOwners = [...owners];
    updatedOwners.splice(index, 1);
    setOwners(updatedOwners);
  };
  const handleFieldChange = (
    index: number,
    field: keyof (typeof directors)[0] | keyof (typeof owners)[0],
    value: string
  ) => {
    if (isDirectors) {
      const updatedDirectors = [...directors];
      updatedDirectors[index][field] = value;
      setDirectors(updatedDirectors);
    } else {
      const updatedOwners = [...owners];
      updatedOwners[index][field] = value;
      setOwners(updatedOwners);
    }
    if (field === 'firstName') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        firstName: value.trim() === '' || !NAME_REGEX.test(value.trim())
      }));

      if (value) setDisable(false);
      else setDisable(true);
    }
    if (field === 'lastName') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        lastName: value.trim() === '' || !NAME_REGEX.test(value.trim())
      }));
    }
  };
  const People = isDirectors ? directors : owners;
  const handleContinue = () => {
    if (isDirectors) {
      setTransaction((prev) => ({
        ...prev,
        directors: directors
      }));
    } else {
      setTransaction((prev) => ({
        ...prev,
        stackholders: owners
      }));
    }
    props.handleContinue?.();
  };
  return (
    <Stack>
      <OverFlowStyles>
        <Stack gap={'32px'} maxWidth={'516px'}>
          <Stack gap={'12px'}>
            <TypographyComponent
              children={isDirectors ? ConfirmDirectors.MAINTEXT1 : ConfirmDirectors.MAINTEXT2}
              variant={'h1'}
              color={theme.palette.text.highEmphasis}
            />
            <TypographyComponent
              children={isDirectors ? ConfirmDirectors.SUBTEXT1 : ConfirmDirectors.SUBTEXT2}
              variant={'body3'}
              color={theme.palette.text.mediumEmphasis}
            />
          </Stack>
          {People.map((person, index) => (
            <Stack gap={'16px'} key={person.countryOfResidence}>
              <Stack
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexDirection: 'row'
                }}>
                <TypographyComponent
                  variant={'body3'}
                  children={`${
                    isDirectors ? ConfirmDirectors.DIRECTOR : ConfirmDirectors.SHAREHOLDER
                  } ${index + 1}`}
                  color={theme.palette.text.highEmphasis}
                />
                {index > 0 && (
                  <Box
                    data-testid="close-icon"
                    onClick={() =>
                      isDirectors ? handleRemoveDirector(index) : handleRemoveOwner(index)
                    }>
                    <MuiIcon src={CloseIcon} alt="Close Icon" style={{ cursor: 'pointer' }} />
                  </Box>
                )}
              </Stack>
              <TextFieldStyled
                label={ConfirmDirectors.FIRSTNAME}
                value={person.firstName}
                onChange={(e) => handleFieldChange(index, 'firstName', e.target.value)}
                helperText={errors.firstName ? ConfirmDirectors.FIRSTNAMEERR : ''}
                error={errors.firstName}
              />
              <TextFieldStyled
                label={ConfirmDirectors.LASTNAME}
                value={person.lastName}
                onChange={(e) => handleFieldChange(index, 'lastName', e.target.value)}
                helperText={errors.lastName ? ConfirmDirectors.LASTNAMEERR : ''}
                error={errors.lastName}
              />
              <DatePickerComponent label={ConfirmDirectors.DATE_OF_BIRTH} />
              <Dropdown
                value={person.countryOfResidence}
                handleChange={(value) => handleFieldChange(index, 'countryOfResidence', value)}
                labelText={ConfirmDirectors.DROPDOWN}
                menu={COUNTRY_LIST}
                placeholder={ConfirmDirectors.DROPDOWN}
              />
            </Stack>
          ))}
          <MuiButton
            variant="text"
            data-testid="add-button"
            children={
              <TypographyComponent
                children={`${ConfirmDirectors.ADD_ANOTHER} ${
                  isDirectors ? ConfirmDirectors.Director : ConfirmDirectors.Owner
                }`}
                variant={'body3'}
                color={theme.palette.primary[500]}
              />
            }
            style={{ width: '207px' }}
            startIcon={<MuiIcon src={PlusIcon} alt="Plus Icon" />}
            onClick={isDirectors ? handleAddDirector : handleAddOwner}
          />
        </Stack>
      </OverFlowStyles>
      <Stack marginLeft={'517px'}>
        <StyledButton
          variant="contained"
          children={
            <TypographyComponent
              children={CONTINUE}
              variant={'body2'}
              color={theme.palette.structuralColors.white}
            />
          }
          onClick={handleContinue}
          disabled={disable}
        />
      </Stack>
    </Stack>
  );
};
export default ConfirmBusinessDirectors;
