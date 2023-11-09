import React, { useState } from 'react';
import { RECIPEINT_TYPE_VALUES_DATA, STEPPER_LABELS } from '../../utils/constants';
import FillRecipientDetails from '../../components/organisms/RecipientDetailsForm';
import { Box, styled } from '@mui/material';
import { MainTemplate } from '../../components/templates/MainTemplate';
import { useNavigate } from 'react-router-dom';
import RecipientCard from './RecipientCard';

const OuterBox = styled(Box)({
  marginLeft: '4rem',
  marginRight: '4rem'
});

export const RecipientDetailsPage = () => {
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(0);
  const onClickBack = () => {
    setCurrentStep((prevStep) => {
      if (prevStep !== 0) {
        return prevStep - 1;
      } else {
        navigate('/payment');
        return prevStep;
      }
    });
  };
  const onClickSendingMoneyCard = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleContinueButton = () => {
    navigate('/verification-details');
  };
  const verificationComponents: React.ReactNode[] = [
    <RecipientCard
      labels={RECIPEINT_TYPE_VALUES_DATA}
      cardId={3}
      key={1}
      handleClick={onClickSendingMoneyCard}
    />,
    <OuterBox key={2}>
      <FillRecipientDetails handleContinue={handleContinueButton} />
    </OuterBox>
  ];
  return (
    <MainTemplate
      isStepperVisible
      presentValue={3}
      isBackVisible
      isCloseVisible
      stepperValues={STEPPER_LABELS[2]}
      stepperWidth={'788px'}
      onClick={onClickBack}>
      {verificationComponents[currentStep]}
    </MainTemplate>
  );
};
