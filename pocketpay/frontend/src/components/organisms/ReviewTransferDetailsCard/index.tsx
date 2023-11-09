import { Box, Grid, styled } from '@mui/material';
import React, { useContext, useState } from 'react';
import TypographyComponent from '../../atoms/Typography';
import theme from '../../../theme';
import { StyledButton } from '../../../utils/styledComponents';
import {
  FORM_LABLES,
  FORM_NAMES,
  FORM_VALUES,
  accountNoHelperText,
  accountNoRegex,
  emailRegex,
  invalidEmail,
  reviewTransferDetails
} from '../../../utils/constants';
import { DetailBlock, DetailBlockProp } from './DetailBlock';
import { EditTransferDetails, EditTransferDetailsProp } from './EditTransferDetails';
import { addHoursToDate, formatDate } from '../../../utils/functions';
import { TransactionContext } from '../../../context/TransactionContext';
interface ReviewTransferDetailsProps {
  sendAmount: number;
  sendCountryCode: string;
  reciepientCountryCode: string;
  rate: number;
  fee: string;
  amount: number;
  name: string;
  email: string;
  accountNo: string;
  accountType: string;
  onClickContinueButton?: () => void;
}
export const StyledBox = styled(Box)({
  maxHeight: '35.625rem',
  overflow: 'hidden',
  overflowY: 'auto',
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
  ['&::-webkit-scrollbar']: {
    display: 'none'
  }
});
export const ReviewTransferDetails = (props: ReviewTransferDetailsProps) => {
  const sendAmount = `${props.sendAmount.toFixed(2)} ${props.sendCountryCode}`;
  const [transferAmount, setTransferAmount] = useState(sendAmount);
  const recipientAmount = `${(Number(transferAmount.split(' ')[0]) * props.rate).toFixed(2)} ${
    props.reciepientCountryCode
  }`;
  const [editTransfer, setEditTransfer] = useState(false);
  const { setTransaction } = useContext(TransactionContext);
  const handleTransferAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTransferAmount(e.target.value);
  };
  const [tempTransferAmount, setTempTransferAmount] = useState(sendAmount);
  const editTransferDetails: EditTransferDetailsProp = {
    detailHead: 'Transfer details',
    items: [
      {
        label: FORM_LABLES[0],
        name: FORM_NAMES[0],
        value: transferAmount,
        onChange: handleTransferAmount
      },
      {
        label: FORM_LABLES[1],
        name: FORM_NAMES[1],
        value: FORM_VALUES[0],
        disabled: true
      },
      {
        label: FORM_LABLES[2],
        name: FORM_NAMES[2],
        value: FORM_VALUES[1],
        disabled: true
      },
      {
        label: FORM_LABLES[3],
        name: FORM_NAMES[3],
        value: FORM_VALUES[2],
        disabled: true
      }
    ],
    onClickCancel: () => {
      setEditTransfer(!editTransfer);
      setTransferAmount(tempTransferAmount);
    },
    onClickSave: () => {
      setTempTransferAmount(transferAmount);
      setEditTransfer(!editTransfer);
    }
  };
  const transferDetailsProps: DetailBlockProp = {
    detailHead: 'Transfer details',
    detailLink: 'Edit',
    sendAmount: transferAmount,
    recepientAmount: recipientAmount,
    items: [
      {
        name: 'Fee',
        value: `${props.fee} ${props.sendCountryCode}`
      },
      {
        name: 'Amount we’ll convert',
        value: `${props.amount} ${props.sendCountryCode}`
      },
      {
        name: 'Guaranteed rate',
        value: `1 ${props.sendCountryCode} = ${props.rate} ${props.reciepientCountryCode}`
      }
    ],
    onClickLink: () => setEditTransfer(!editTransfer)
  };
  const { name, email, accountNo, accountType } = props;

  const [recipientDetails, setRecipientDetails] = useState({
    name,
    email,
    accountNo,
    accountType
  });
  const { onClickContinueButton } = props;

  const onClickContinue = () => {
    setTransaction((prev) => ({
      ...prev,
      sendAmount: Number(transferAmount.split(' ')[0]),
      recipientDetails: {
        ...prev.recipientDetails,
        ...recipientDetails
      }
    }));
    onClickContinueButton?.();
  };
  const [tempRecipientDetails, setTempRecipientDetails] = useState(recipientDetails);
  const handleRecipientDetails = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRecipientDetails((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  const [editRecipient, setEditRecipient] = useState(false);
  const isValidEmail = () => {
    return emailRegex.test(recipientDetails.email);
  };
  const isAccountNoValid = accountNoRegex.test(recipientDetails.accountNo);
  const editRecipentDetails: EditTransferDetailsProp = {
    detailHead: 'Buisness details',
    items: [
      {
        name: 'name',
        label: 'Name',
        value: recipientDetails.name,
        onChange: handleRecipientDetails
      },
      {
        name: 'email',
        label: 'Email',
        value: recipientDetails.email,
        onChange: handleRecipientDetails,
        helperText: isValidEmail() ? '' : invalidEmail,
        error: !isValidEmail()
      },
      {
        name: 'accountNo',
        label: 'Account Number',
        value: recipientDetails.accountNo,
        onChange: handleRecipientDetails,
        helperText: isAccountNoValid ? '' : accountNoHelperText,
        error: !isAccountNoValid
      },
      {
        name: 'accountType',
        label: 'Account Type',
        value: recipientDetails.accountType,
        onChange: handleRecipientDetails
      }
    ],
    onClickCancel: () => {
      setEditRecipient(!editRecipient);
      setRecipientDetails(tempRecipientDetails);
    },
    onClickSave: () => {
      setEditRecipient(!editRecipient);
      setTempRecipientDetails(recipientDetails);
    },
    disableSave: !(isValidEmail() && isAccountNoValid)
  };
  const reciepientDetailProps: DetailBlockProp = {
    detailHead: 'Recipeint details',
    detailLink: 'Change',
    onClickLink: () => setEditRecipient(!editRecipient),
    items: [
      {
        name: 'Name',
        value: recipientDetails.name
      },
      {
        name: 'Email',
        value: recipientDetails.email
      },
      {
        name: 'Account number',
        value: recipientDetails.accountNo
      },
      {
        name: 'Account type',
        value: recipientDetails.accountType
      }
    ]
  };
  const scheduleDetailProps: DetailBlockProp = {
    detailHead: 'Schedule details',
    detailLink: 'Edit',
    items: [
      {
        name: 'Sending',
        value: 'Now'
      },
      {
        name: 'Should arrive',
        value: `by ${formatDate(addHoursToDate(new Date(), 12))}`
      },
      {
        name: 'Repeats',
        value: 'Never'
      }
    ]
  };
  const editDetailsValue = editTransfer ? editTransferDetails : editRecipentDetails;
  const enableEdit = editTransfer || editRecipient;
  return (
    <StyledBox data-testid="reviewTransferDetails" width="516px">
      <TypographyComponent
        variant="h1"
        children={reviewTransferDetails}
        sx={{ paddingBottom: '32px' }}
      />
      {!editTransfer && !editRecipient && (
        <Grid container direction="column" rowGap={8}>
          <Grid container item direction="column" rowGap={10}>
            <DetailBlock {...transferDetailsProps} />
            <DetailBlock {...reciepientDetailProps} />
            <DetailBlock {...scheduleDetailProps} />
          </Grid>
          <Grid
            container
            item
            direction="column"
            alignItems="center"
            rowGap={8}
            paddingBottom={'20px'}>
            <TypographyComponent
              variant="caption"
              sx={{
                textAlign: 'center',
                color: theme.palette.text.mediumEmphasis,
                width: '244px'
              }}
              children="When you press “Confirm” you agree with Wise Terms & Conditions"
            />
            <StyledButton
              variant="contained"
              onClick={onClickContinue}
              children={<TypographyComponent variant="body2" children="Confirm and continue" />}
            />
          </Grid>
        </Grid>
      )}
      {enableEdit && <EditTransferDetails {...editDetailsValue} />}
    </StyledBox>
  );
};
