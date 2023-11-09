import { Accordion, AccordionDetails, AccordionSummary, Box, Grid, styled } from '@mui/material';
import React, { useState } from 'react';
import theme from '../../../theme';
import TypographyComponent from '../../atoms/Typography';
import expandIcon from '../../../../public/assets/icons/chevron-up.svg';
import sendIcon from '../../../../public/assets/icons/send-icon.svg';
import chevronDown from '../../../../public/assets/icons/chevron-down.svg';
import MuiIcon from '../../atoms/Icon';
import TabsComponent from '../../molecules/MuiTabs';
import shareIcon from '../../../../public/assets/icons/share.svg';
import { StyledButton } from '../../../utils/styledComponents';
import helpIcon from '../../../../public/assets/icons/helpcircle.svg';
import VerticalStepper from '../../molecules/VerticalStepper';
import Modal from '../../molecules/Modal';
import ShareTrackingModal from '../../molecules/ShareTrackingCard';
import CancelTransferModal from '../CancelTransferModal';
import {
  CANCEL_TRANSFER_HEADER,
  CANCEL_TRANSFER_SUBTEXT,
  HomeTabs
} from '../../../utils/constants';
import { addHoursToDate, addMinutesToDate, formatDate } from '../../../utils/functions';
export interface TransactionDetailsProps {
  recipientCode: string;
  sendCode: string;
  createdAt: Date;
  username: string;
  transferNumber: string;
  accounts: string[];
  isCancel?: boolean;
  handleCancelTransfer?: () => void;
}
interface HomeTransactionProps extends TransactionDetailsProps {
  senderName: string;
  sendAmount: number;
  recipientAmount: number;
}
const StyledAccordion = styled(Accordion)({
  boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.15)',
  [`& .Mui-expanded.MuiAccordionSummary-root`]: {
    borderBottom: `1px solid ${theme.palette.grey[100]}`
  },
  [`& .MuiAccordionSummary-root`]: {
    padding: '20px 36px',
    [`& .MuiAccordionSummary-content`]: {
      margin: 0
    }
  },
  [`& .styleSendIcon`]: {
    background: theme.palette.structuralColors.background,
    borderRadius: '50%',
    height: '40px',
    width: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  [`& .addBorder`]: {
    borderBottom: `1px solid ${theme.palette.grey[100]}`
  },
  [`& .styleDropdown`]: {
    background: theme.palette.structuralColors.background,
    padding: '11px 12px',
    borderRadius: '4px'
  },
  [`&.Mui-expanded`]: {
    margin: 0
  }
});
const StyledAccordionDetails = styled(AccordionDetails)({
  padding: 0,
  paddingTop: '17px'
});

const TransactionDetails = (props: TransactionDetailsProps) => {
  const [openShareModal, setopenShareModal] = useState(false);
  const [cancelTransfer, setCancelTransfer] = useState(false);
  const currentDate = props.createdAt;
  const stepperValues = [
    {
      leftLable: formatDate(currentDate),
      rightLable: 'You set up your transfer'
    },
    {
      leftLable: formatDate(addMinutesToDate(currentDate, 1)),
      rightLable: `We received your ${props.sendCode}`
    },
    {
      leftLable: formatDate(addMinutesToDate(currentDate, 2)),
      rightLable: 'Your money’s being processed'
    },
    {
      leftLable: formatDate(addHoursToDate(currentDate, 6)),
      rightLable: `We pay out your ${props.recipientCode}`
    },
    {
      leftLable: formatDate(addHoursToDate(currentDate, 12)),
      rightLable: `George max recieves your ${props.recipientCode}`
    }
  ];

  const handleShareModal = () => {
    setopenShareModal(!openShareModal);
  };
  const handleCancelTransfer = () => {
    setCancelTransfer(!cancelTransfer);
  };
  const handleCancelPopup = () => {
    setCancelTransfer(!cancelTransfer);
    props.handleCancelTransfer?.();
  };

  return (
    <StyledAccordionDetails>
      <Grid container alignItems="flex-end">
        <Grid item flexGrow={1}>
          <TabsComponent tabNames={HomeTabs} selectedTab={HomeTabs[0]} />
        </Grid>
        <Grid item className="addBorder">
          <Grid item container columnGap={5} paddingRight="36px" paddingBottom="16px">
            <div className="styleDropdown">
              <Grid container>
                <TypographyComponent variant="body2" children="General" />
                <MuiIcon src={chevronDown} alt="expandDropDown" />
              </Grid>
            </div>
            <StyledButton
              variant="text"
              startIcon={<MuiIcon src={shareIcon} alt="share" />}
              onClick={handleShareModal}
            />
            <MuiIcon src={helpIcon} alt="help" />
          </Grid>
        </Grid>
      </Grid>
      <Box padding="24px 36px" display="flex" flexDirection="column">
        <Grid container direction="column" rowGap={4} maxWidth="400px">
          <Grid container item justifyContent="space-between">
            <TypographyComponent
              variant="body2"
              children="Set up by:"
              color={theme.palette.text.mediumEmphasis}
            />
            <TypographyComponent variant="body2" children={`${props.username} (YOU)`} />
          </Grid>
          <Grid container item justifyContent="space-between">
            <TypographyComponent
              variant="body2"
              children="Transfer number:"
              color={theme.palette.text.mediumEmphasis}
            />
            <TypographyComponent variant="body2" children={`#${props.transferNumber}`} />
          </Grid>
        </Grid>
        {!props.isCancel ? (
          <Grid container direction="column" rowGap={4}>
            <Grid item container>
              <Grid item maxWidth="420px" paddingTop="40px">
                <VerticalStepper activeStep={3} steps={stepperValues} />
              </Grid>
            </Grid>
            <Grid item container justifyContent="flex-end">
              <StyledButton
                variant="outlined"
                children="Cancel the transfer"
                onClick={handleCancelTransfer}
              />
            </Grid>
          </Grid>
        ) : (
          <Grid container direction="column" rowGap={5} paddingTop="40px" paddingBottom="188px">
            <TypographyComponent variant="body1" children={CANCEL_TRANSFER_HEADER} />
            <TypographyComponent variant="body3" children={CANCEL_TRANSFER_SUBTEXT} />
          </Grid>
        )}
      </Box>
      <Modal
        isModalOpen={openShareModal}
        children={<ShareTrackingModal handleClick={handleShareModal} />}
      />
      <Modal
        isModalOpen={cancelTransfer}
        onClose={handleCancelTransfer}
        children={
          <CancelTransferModal
            accounts={props.accounts}
            transferId={props.transferNumber}
            username={props.username}
            handlecancelTransfer={handleCancelPopup}
          />
        }
      />
    </StyledAccordionDetails>
  );
};
export const HomeTransaction = (props: HomeTransactionProps) => {
  return (
    <StyledAccordion data-testid="homeTransaction">
      <AccordionSummary expandIcon={<img src={expandIcon} alt="expandIcon" />}>
        <Grid container alignItems="center">
          <Grid item flexGrow={1}>
            <Grid container item columnGap={3}>
              <div className="styleSendIcon">
                <MuiIcon src={sendIcon} alt="sendIcon" />
              </div>
              <Grid item>
                <TypographyComponent variant="body2" children={props.senderName} />
                <TypographyComponent
                  variant="caption"
                  children={props.isCancel ? 'Cancelled' : 'Sending'}
                  color={theme.palette.text.mediumEmphasis}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid item container direction="column" paddingRight="16px">
              <TypographyComponent
                variant="caption"
                children={`${props.sendAmount} ${props.sendCode}`}
              />
              <TypographyComponent
                variant="caption"
                children={`${props.recipientAmount.toFixed(2)} ${props.recipientCode}`}
                color={theme.palette.text.mediumEmphasis}
              />
            </Grid>
          </Grid>
        </Grid>
      </AccordionSummary>
      <TransactionDetails {...props} />
    </StyledAccordion>
  );
};
