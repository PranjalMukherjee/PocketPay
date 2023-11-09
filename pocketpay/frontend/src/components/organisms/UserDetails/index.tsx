import React, { useContext, useEffect, useState } from 'react';
import { useTheme } from '@mui/material';
import {
  CONTINUE_BTN,
  USER_DETAILS_LABEL,
  USER_DETAILS_HEADING,
  COUNTRY_DROPDOWN_LABEL,
  COUNTRY_DATA
} from '../../../utils/constants';
import { InputField } from '../../atoms/TextField';
import DatePickerComponent from '../../atoms/DatePicker';
import Dropdown from '../../molecules/DropdownWithIconAndInputfield';
import {
  StyledInputBox,
  BtnBox,
  ContinueBtn,
  DropdownBox,
  RootBox,
  StyledBox,
  StyledDatePicker,
  StyledGrid2
} from '../../../utils/styledComponents';
import Typography from '../../atoms/Typography';
import { IUserDetailsProps, UserDetailsType } from '../../../utils/types';
import { UserBusinessDetailsContext } from '../../../context/UserBusinessDetailsContext';

const UserDetails = ({ handleUserDetail }: IUserDetailsProps) => {
  const theme = useTheme();
  const [isFormValid, setIsFormValid] = useState(false);
  const { userBusinessDetails, setUserBusinessDetails } = useContext(UserBusinessDetailsContext);
  const [userDetails, setUserDetails] = useState<UserDetailsType>({
    firstName: userBusinessDetails?.firstName,
    lastName: userBusinessDetails?.lastName,
    dob: userBusinessDetails?.dob,
    country: userBusinessDetails?.country,
    address: userBusinessDetails?.address,
    city: userBusinessDetails?.city,
    postalCode: userBusinessDetails?.postalCode
  });
  const isEmpty = (value: string) => {
    return value?.length === 0;
  };

  const validateFields = React.useCallback(() => {
    const { firstName, lastName, address, country, city, postalCode } = userDetails;
    return (
      !isEmpty(firstName) &&
      !isEmpty(lastName) &&
      userBusinessDetails?.dob?.format('DD-MM-YYYY') !== null &&
      !isEmpty(country) &&
      !isEmpty(address) &&
      !isEmpty(city) &&
      !isEmpty(postalCode)
    );
  }, [userDetails]);
  useEffect(() => {
    setIsFormValid(!validateFields());
    setUserBusinessDetails((prev) => ({
      ...prev,
      ...userDetails,
      dob: prev.dob
    }));
  }, [userDetails, validateFields]);

  const handleCountryChange = (e: any) => {
    setUserDetails((prev) => ({
      ...prev,
      country: e?.name
    }));
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({
      ...prev,
      [name]: value
    }));
  };
 
  return (
    <RootBox data-testid="user-details">
      <StyledBox>
        <StyledGrid2>
          <Typography variant="h1" color={theme.palette.text.highEmphasis}>
            {USER_DETAILS_HEADING}
          </Typography>
          <Typography variant="body3" color={theme.palette.text.mediumEmphasis}>
            {USER_DETAILS_LABEL}
          </Typography>
        </StyledGrid2>
      </StyledBox>

      <StyledBox>
        <StyledInputBox>
          <InputField
            placeholder={'First Name'}
            label={'First Name'}
            name="firstName"
            onChange={handleChange}
          />
        </StyledInputBox>

        <StyledInputBox>
          <InputField
            placeholder={'Last Name'}
            name="lastName"
            label={'Last Name'}
            onChange={handleChange}
          />
        </StyledInputBox>
        <StyledDatePicker>
          <DatePickerComponent
            label={
               'Date of Birth'
            }
          />
        </StyledDatePicker>

        <DropdownBox>
          <Dropdown
            placeholder={COUNTRY_DROPDOWN_LABEL}
            data={COUNTRY_DATA}
            isCurrency={false}
            label={COUNTRY_DROPDOWN_LABEL}
            isLabelText={true}
            onChange={handleCountryChange}
          />
        </DropdownBox>

        <StyledInputBox>
          <InputField
            placeholder={'Home address'}
            label={'Home address'}
            onChange={handleChange}
            name="address"
          />
        </StyledInputBox>
        <StyledInputBox>
          <InputField
            placeholder={'City'}
            label={'City'}
            onChange={handleChange}
            name="city"
          />
        </StyledInputBox>
        <StyledInputBox>
          <InputField
            placeholder={'Postal code'}
            label={'Postal code'}
            onChange={handleChange}
            name="postalCode"
          />
        </StyledInputBox>
      </StyledBox>

      <BtnBox>
        <ContinueBtn
          variant="contained"
          children={CONTINUE_BTN}
          onClick={handleUserDetail}
          disabled={isFormValid}
        />
      </BtnBox>
    </RootBox>
  );
};
export default UserDetails;
