import React, { useContext, useState } from 'react';
import { MainTemplate } from '../../components/templates/MainTemplate';
import { Fallback, STEPPER_LABELS } from '../../utils/constants';
import BusinessSearch from '../../components/organisms/SearchBussiness';
import { Stack } from '@mui/material';
import BusinessConfirmation from '../../components/organisms/BusinessConfirmation';
import TradeAddress from '../../components/organisms/TradeAddress';
import { UserBusinessDetailsContext } from '../../context/UserBusinessDetailsContext';
import { ErrorBoundary } from 'react-error-boundary';
import { useNavigate } from 'react-router-dom';
const YourBuisness = () => {
  const navigate = useNavigate();
  const [backVisible, setBackVisible] = useState<boolean>(false);
  const { userBusinessDetails } = useContext(UserBusinessDetailsContext);
  const [displayComponent, setDisplayComponent] = useState<string>('BusinessSearch');
  const handleBackClick = () => {
    setDisplayComponent('BusinessSearch');
    setBackVisible(false);
  };

  const handleSearch = () => {
    setDisplayComponent('ConfirmBusiness');
    setBackVisible(true);
  };
  const handleConfirmBusinessDetails = () => {
    setDisplayComponent('TradeAddress');
    setBackVisible(false);
  };
  const handleOnClickConfirmButton = () => {
    navigate('/business-activity');
  };
  const render = () => {
    switch (displayComponent) {
      case 'BusinessSearch':
        return (
          <Stack marginLeft={'3.75rem'}>
            <BusinessSearch handleDropdownClick={handleSearch} />
          </Stack>
        );
      case 'ConfirmBusiness':
        return (
         
            <BusinessConfirmation
              businessSelectedName={userBusinessDetails?.businessName}
              onClick={handleConfirmBusinessDetails}
            />
         
        );
      case 'TradeAddress':
        return (
          <Stack marginLeft={'3.75rem'} marginTop={'1.25rem'}>
            <TradeAddress data-testid="test-confirm" handleConfirm={handleOnClickConfirmButton} />
          </Stack>
        );
    }
  };

  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <MainTemplate
        isCloseVisible={true}
        isBackVisible={backVisible}
        isStepperVisible={true}
        stepperValues={STEPPER_LABELS[1]}
        presentValue={1}
        stepperWidth="788px"
        onClick={handleBackClick}
        children={render()}
      />
    </ErrorBoundary>
  );
};

export default YourBuisness;
