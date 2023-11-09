import React from 'react';
import { MainTemplate } from '../../components/templates/MainTemplate';
import AccountType from '../../components/organisms/AccountTypeCard';
import { SENDING_MONEY, SEND_MONEY_TITLE } from '../../utils/constants';
import { Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const InitiateTransactionPage = () => {
  const navigate = useNavigate();

  const handleClickSend = () => {
    navigate('/payment');
  };
  const handleClickAccount = () => {
    navigate('/sign-up');
  };

  const handleBackButton = () => {
    navigate('/home-page');
  };
  return (
    <MainTemplate isCloseVisible isBackVisible onClick={handleBackButton}>
      <Stack marginTop={'40px'} marginLeft={'50px'}>
        <AccountType
          data={SENDING_MONEY}
          title={SEND_MONEY_TITLE}
          handleSendMoney={handleClickSend}
          handleAccountSetup={handleClickAccount}
        />
      </Stack>
    </MainTemplate>
  );
};

export default InitiateTransactionPage;
