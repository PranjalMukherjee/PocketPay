import React, { useContext, useEffect, useState } from 'react';
import { MainTemplate } from '../../components/templates/MainTemplate';
import { BANK_ACCOUNT_PAYMENT_FLOW_VALUES, STEPPER_LABELS } from '../../utils/constants';
import ChooseBank from '../../components/organisms/ChooseBank';
import { OnlineBankingCard } from '../../components/organisms/OnlineBankingCard';
import { PayFromAccountCard } from '../../components/organisms/PayFromAccount';
import { Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { TransactionContext } from '../../context/TransactionContext';
import { TransactionService } from '../../services/Transaction';
import { createTransaction, setToken } from '../../utils/functions';
import { BankInterface } from '../../utils/types';

export const BankAccountPaymentFlowPage = () => {
  const navigate = useNavigate();
  const { transaction,setTransaction } = useContext(TransactionContext);
  const [businessId, setBusinessId] = useState(0);
  
  const [displayComponent, setDisplayComponent] = useState('chooseBank');
  const [bankDetails, setBankDetails] = useState({} as BankInterface);

  const handleBankOnClick = () => {
    setDisplayComponent('payFromAccount');
  };

  const handlePayFromAccountContinue = () => {
    setDisplayComponent('onlineBanking');
  };

  const handleBackButton = () => {
    if (displayComponent !== 'chooseBank') {
      setDisplayComponent('chooseBank');
    } else {
      navigate('/debit-flow');
    }
  };

  const handleCancelButton = () => {
    navigate('/home-page');
  };

  const handleContinueButton = () => {
    createTransaction(transaction, businessId);
    navigate('/home-page');
  };

  const fetchDetails = async () => {
    await TransactionService.getPaymentDetails('BANK').then((res) => {
      setBankDetails(res.data[0].bankPayment);
      setTransaction((prev) => ({
        ...prev,
        paymentId: res.data[0].id
      }));
    });
    await TransactionService.getBusiness().then((res) => {
      setBusinessId(res.data[0].id);
    });
  };
  useEffect(() => {
    setToken(localStorage.getItem("accessToken") as string);
    fetchDetails();
  }, []);
  const data = {
    name: `${transaction.recipientDetails.firstName} ${transaction.recipientDetails.lastName}`,
    amount: `${transaction.sendAmount} ${transaction.sendCountryCode}`,
    accountNo: bankDetails.accountNo,
    sortCode: bankDetails.code
  };

  const renderComponent = (displayComponent: string) => {
    switch (displayComponent) {
      case 'chooseBank':
        return (
          <ChooseBank onCancelHandler={handleCancelButton} onClickHandler={handleBankOnClick} />
        );
      case 'payFromAccount':
        return (
          <PayFromAccountCard
            accountType={BANK_ACCOUNT_PAYMENT_FLOW_VALUES.accountType}
            amount={`${transaction.sendAmount} ${transaction.sendCountryCode}`}
            handleContinueButton={handlePayFromAccountContinue}
          />
        );
      case 'onlineBanking':
        return (
          <OnlineBankingCard
            data={data}
            handleContinueButton={handleContinueButton}
            handleCancelTransferButton={handleCancelButton}
          />
        );
    }
  };

  return (
    <MainTemplate
      isStepperVisible
      presentValue={6}
      isBackVisible
      isCloseVisible
      onClick={handleBackButton}
      stepperValues={STEPPER_LABELS[2]}
      stepperWidth={'788px'}>
      <Stack marginLeft={'4.2rem'} marginRight={'4.2rem'}>
        {renderComponent(displayComponent)}
      </Stack>
    </MainTemplate>
  );
};
