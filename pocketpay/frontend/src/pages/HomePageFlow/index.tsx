import {
  Fallback,
  HOME_TRANSACTION_VALUES,
  HP_BUTTON,
  HP_HEADING,
  HP_TEXTLINE_ONE,
  HP_TEXTLINE_TWO,
  ROSS_GENER
} from '../../utils/constants';
import { Header } from '../../components/organisms/Header';
import { HomeTransaction } from '../../components/organisms/HomeTransactionCard';
import SideNavBar from '../../components/organisms/SideNavigation';
import DashBoard from '../../components/templates/Home';
import React, { useEffect, useState } from 'react';
import theme from '../../theme';
import Home from '../../../public/assets/images/Illustration.svg';
import TypographyComponent from '../../components/atoms/Typography';
import IconComponent from '../../components/atoms/Icon';
import { TransactionService } from '../../services/Transaction';
import { BankCardInterface, PaymentInterface, TransactionInterface } from '../../utils/types';
import {
  ContentBoxStyle,
  ImageStyle,
  InnerBox,
  OuterBox,
  SendMoneyButton,
  StackStyle
} from './HomeStyles';
import { useNavigate } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { Box, CircularProgress } from '@mui/material';
import { setToken } from '../../utils/functions';
const HomePageFlow = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [transactions, setTransactions] = useState<TransactionInterface[] | []>([]);
  const [accounts, setAccounts] = useState<string[]>([]);
  const fetchDetails = async () => {
    await TransactionService.getTransactions().then((res) => {
      setTransactions(res.data);
    });
    await TransactionService.getPaymentDetails('CARD').then((res) => {
      const details = res.data as PaymentInterface[];
      setAccounts(details.map((card) => card.debitCardPayment.cardNumber));
    });
    setLoading(false);
  };
  const handleSendMoneyButton = () => {
    navigate('/send-money');
  };

  useEffect(() => {
    setToken(localStorage.getItem('accessToken') as string);
    fetchDetails();
  }, [transactions]);
  const generateHomeContent = () => {
    if (transactions.length === 0) {
      return (
        <div>
          <StackStyle>
            <TypographyComponent
              data-testid="transaction-text"
              variant="h1"
              children={HP_HEADING}
            />
            <SendMoneyButton
              variant={'text'}
              children={<TypographyComponent variant="body2" children={HP_BUTTON} />}
              onClick={handleSendMoneyButton}
            />
          </StackStyle>
          <ContentBoxStyle>
            <ImageStyle>
              <IconComponent src={Home} alt={'home'} />
            </ImageStyle>
            <TypographyComponent
              variant="body1"
              color={theme.palette.text.mediumEmphasis}
              children={HP_TEXTLINE_ONE}
            />
            <TypographyComponent
              variant="body1"
              color={theme.palette.text.mediumEmphasis}
              children={HP_TEXTLINE_TWO}
            />
          </ContentBoxStyle>
        </div>
      );
    } else {
      return (
        <OuterBox>
          <StackStyle>
            <TypographyComponent variant="h1" children={HP_HEADING} />
            <SendMoneyButton
              data-testid="send-money-button"
              variant={'text'}
              children={<TypographyComponent variant="body2" children={HP_BUTTON} />}
              onClick={handleSendMoneyButton}
            />
          </StackStyle>
          <InnerBox>
            {transactions.map((transaction) => (
              <HomeTransaction
                key={transaction.id}
                senderName={`${transaction.recipient.firstName} ${transaction.recipient.lastName}`}
                sendAmount={transaction.senderAmount}
                recipientAmount={transaction.receiverAmount}
                recipientCode={transaction.receiverCurrency}
                sendCode={transaction.senderCurrency}
                createdAt={new Date(transaction.date)}
                username={ROSS_GENER}
                transferNumber={transaction.transferNumber}
                accounts={accounts}
                handleCancelTransfer={async () => {
                  setLoading(true);
                  await TransactionService.updateStatus(transaction.id, 'CANCELLED');
                  setLoading(false);
                }}
                isCancel={transaction.status === 'CANCELLED'}
              />
            ))}
          </InnerBox>
        </OuterBox>
      );
    }
  };
  return loading ? (
    <Box height="100vh" display="flex" alignItems={'center'} justifyContent="center">
      <CircularProgress data-testid="loading" />
    </Box>
  ) : (
    <ErrorBoundary FallbackComponent={Fallback}>
      <DashBoard
        navBar={<SideNavBar newUser={HOME_TRANSACTION_VALUES.length === 0} />}
        header={<Header data-testid="header" username={'Ross Gener'} />}
        body={<OuterBox>{generateHomeContent()}</OuterBox>}
      />
    </ErrorBoundary>
  );
};
export default HomePageFlow;
