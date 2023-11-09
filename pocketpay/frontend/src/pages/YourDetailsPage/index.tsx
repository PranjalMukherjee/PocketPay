import React, { useContext } from 'react';
import { MainTemplate } from '../../components/templates/MainTemplate';

import { UserBusinessDetailsContext } from '../../context/UserBusinessDetailsContext';
import { useNavigate } from 'react-router-dom';
import { BANK_ACCOUNT_PAYMENT_FLOW_VALUES, STEPPER_LABELS } from '../../utils/constants';
import UserDetails from '../../components/organisms/UserDetails';
import { Stack } from '@mui/material';
import { SignUpDetailsContext } from '../../context/CountryContext';
import { createSignUpDetails } from '../../services/User';
import { addBusinessDetails, addTradingAddress } from '../../services/Business';

export const UserDetailsPage = () => {
  const { SignUpDetails } = useContext(SignUpDetailsContext);
  const { userBusinessDetails } = useContext(UserBusinessDetailsContext);
  const navigate = useNavigate();

  const handleContinue = async () => {
    const userData = {
      firstName: userBusinessDetails.firstName,
      lastName: userBusinessDetails.lastName,
      dateOfBirth: userBusinessDetails.dob,
      address: {
        homeAddress: userBusinessDetails.address,
        city: userBusinessDetails.city,
        postalCode: userBusinessDetails.postalCode
      },
      email: SignUpDetails.email,
      password: SignUpDetails.password,
      accountType: BANK_ACCOUNT_PAYMENT_FLOW_VALUES.accountType,
      country: userBusinessDetails.country,
      phoneNumber: SignUpDetails.phoneNumber
    };
    await createSignUpDetails(userData).then(async (response) => {
      const data = {
        name: userBusinessDetails.businessName,
        registrationNo: userBusinessDetails.registrationNumber,
        address: userBusinessDetails.businessAddress,
        businessCategory: userBusinessDetails.category,
        subCategory: userBusinessDetails.subCategory,
        businessSize: userBusinessDetails.sizeOfBusiness,
        userId: response.data.id
      };
      await addBusinessDetails(data).then(async (response) => {
        const tradeAddresses = userBusinessDetails.tradeAddress;
        await Promise.all(
          tradeAddresses.map(async (address) => {
            await addTradingAddress({
              address,
              businessId: response.data.id
            });
          })
        );
      });
    });
    navigate('/login');
  };

  return (
    <MainTemplate
      isCloseVisible={true}
      isStepperVisible={true}
      stepperValues={STEPPER_LABELS[1]}
      presentValue={3}
      isBackVisible={false}>
      <Stack marginLeft={'12rem'}>
        <UserDetails handleUserDetail={handleContinue} />
      </Stack>
    </MainTemplate>
  );
};
