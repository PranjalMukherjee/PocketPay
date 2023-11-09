import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Fallback, STEPPER_LABELS } from '../../utils/constants';
import { MainTemplate } from '../../components/templates/MainTemplate';
import VerifyAccountCard from '../../components/organisms/VerifyAccount';
import { Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const BusinessActivity = () => {
    const navigate = useNavigate();
  const handleActivity = () => {
    navigate("/user-details")
  };
  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <MainTemplate
        isBackVisible={false}
        isCloseVisible={true}
        isStepperVisible={true}
        stepperValues={STEPPER_LABELS[1]}
        presentValue={2}>
        <Stack marginLeft={'12rem'}>
          <VerifyAccountCard onClick={handleActivity} />
        </Stack>
      </MainTemplate>
    </ErrorBoundary>
  );
};

export default BusinessActivity;
