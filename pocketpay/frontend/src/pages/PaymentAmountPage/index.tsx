import React from 'react';
import { STEPPER_LABELS } from '../../utils/constants';
import { MainTemplate } from '../../components/templates/MainTemplate';
import { TransferDetailsCard } from '../../components/organisms/TransferDetailsCard';
import { useNavigate } from 'react-router-dom';
import { amountCardProps } from '../../components/organisms/TransferDetailsCard/TransferDetailsUtils';
export const PaymentAmountPage = () => {
  const navigate = useNavigate();
  const handleClickContinueButton = () => {
    navigate('/recipient-details');
  };
  const handleBackButton = () => {
    navigate('/send-money');
  };
  return (
    <MainTemplate
      isStepperVisible
      presentValue={1}
      isBackVisible
      isCloseVisible
      stepperValues={STEPPER_LABELS[2]}
      stepperWidth={'788px'}
      onClick={handleBackButton}>
      <TransferDetailsCard {...amountCardProps} onClickContinue={handleClickContinueButton} />
    </MainTemplate>
  );
};
