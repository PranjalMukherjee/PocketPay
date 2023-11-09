import React, { useContext, useEffect, useState } from 'react';
import { Stack, styled } from '@mui/material';
import { MainTemplate } from '../../components/templates/MainTemplate';
import { DEBIT_CARD_FLOW, Fallback, STEPPER_LABELS } from '../../utils/constants';
import { TransferDetailsCard } from '../../components/organisms/SummaryCard';
import CardType from './Cardtype';
import { PurchaseconfirmCard } from '../../components/organisms/ConfirmPayWithCard';
import TransferType from '../../components/organisms/TrasferType';
import { useNavigate } from 'react-router-dom';
import { TransactionContext } from '../../context/TransactionContext';
import TypographyComponent from '../../components/atoms/Typography';
import theme from '../../theme';
import { TransactionService } from '../../services/Transaction';
import { createTransaction, setToken } from '../../utils/functions';
import { BankCardInterface, PaymentInterface } from '../../utils/types';
import { ErrorBoundary } from 'react-error-boundary';

const OuterBox = styled(Stack)({
  display: 'flex',
  flexDirection: 'row',
  gap: '24px',
  height: '36rem',
  overflowY: 'auto',
  ['&::-webkit-scrollbar']: {
    display: 'none'
  }
});

const DebitCardFlow = () => {
  const navigate = useNavigate();
  const { transaction, setTransaction } = useContext(TransactionContext);
  const [cards, setCards] = useState<BankCardInterface[]>([]);

  const [enableButton, setEnableButton] = useState<boolean>(true);
   const [businessId, setBusinessId] = useState(0);
  const fetchDetails = async () => {
    await TransactionService.getPaymentDetails('CARD').then((res) => {
      const details = res.data as PaymentInterface[];
      setTransaction((prev) => ({
        ...prev,
        paymentId: 1
      }));
      setCards(
        details.map((card) => {
          return {
            ...card.debitCardPayment,
            id: card.id
          };
        })
      );
    });
    await TransactionService.getBusiness().then((res) => {
      setBusinessId(res.data[0].id);
    });
  };

  useEffect(() => {
    setToken(localStorage.getItem("accessToken") as string);
    fetchDetails();
  }, []);
  const [debitCardState, setDebitCard] = useState({
    selectedRadio: '',
    showDebitCard: true,
    showConfirmPurchase: false
  });
  const handleRadioChange = (value: string) => {
    setDebitCard({ ...debitCardState, selectedRadio: value });
    setEnableButton(false);
  };
  const [cardDigits, setCardDigits] = useState('');
  const handleContinueToPay = () => {
    if (debitCardState.selectedRadio === 'debit') {
      setDebitCard({
        ...debitCardState,
        showDebitCard: false,
        showConfirmPurchase: !debitCardState.showConfirmPurchase
      });

      setEnableButton(true);

    } else {
      navigate('/bank-flow');
    }
  };
  useEffect(() => {
    TransactionService.getPaymentById(transaction.paymentId).then((res) => {
      setCardDigits(res.data.debitCardPayment.cardNumber);
    });
  }, [transaction.paymentId]);
  const onClickCompleteButton = async () => {
    createTransaction(transaction, businessId);
    navigate('/home-page');
  };
  const handleCancelTransferButton = () => {
    navigate('/home-page');
  };
  const handleBackButton = () => {
    navigate('/transfer-details');
  };
  const shouldShowDebitCard = debitCardState.showDebitCard;
  const shouldShowConfirmPurchase = debitCardState.showConfirmPurchase;

  const handleEnable = (value: boolean) => {
    setEnableButton(value);
  };

  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <MainTemplate
        isCloseVisible
        isStepperVisible
        isBackVisible
        stepperWidth="800px"
        stepperValues={STEPPER_LABELS[2]}
        presentValue={6}
        onClick={handleBackButton}>
        <Stack>
          <OuterBox>
            {shouldShowDebitCard && <TransferType onRadioChange={handleRadioChange} />}
            {shouldShowConfirmPurchase && <CardType cards={cards} onContinue={handleEnable}/>}
            {!shouldShowDebitCard && !shouldShowConfirmPurchase && (
              <Stack gap={'1.25rem'}>
                <TypographyComponent
                  variant={'h1'}
                  color={theme.palette.text.highEmphasis}
                  children="Pay with your card"
                />
                <PurchaseconfirmCard
                  cardDigits={Number(cardDigits)}
                  currencytype={transaction.sendCountryCode}
                  amount={transaction.sendAmount}
                  handleCompleteClick={onClickCompleteButton}
                />
              </Stack>
            )}
            <Stack width={'474px'}>
              <TransferDetailsCard
                payState={shouldShowDebitCard || shouldShowConfirmPurchase}
                receiverCurrencyType={transaction.recieveCountryCode}
                senderCurrencyType={transaction.sendCountryCode}
                currencyExchangeRate={transaction.rate}
                receiverData={transaction.recipientDetails}
                fee={DEBIT_CARD_FLOW.FEE}
                totalAmount={transaction.sendAmount}
                amount_to_convert={DEBIT_CARD_FLOW.AMOUNT}
                handleContinueButton={handleContinueToPay}
                handleCancelButton={handleCancelTransferButton}
                enableContinueButton={enableButton}
              />
            </Stack>
          </OuterBox>
        </Stack>
      </MainTemplate>
    </ErrorBoundary>

  );
};
export default DebitCardFlow;
