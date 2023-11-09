import React, { ReactNode, useState } from 'react';
import Modal from '../../molecules/Modal';
import Typography from '../../atoms/Typography';
import theme from '../../../theme';
import {
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack
} from '@mui/material';
import {
  ACCOUNT_NUMBER_ENDING_WITH_4242,
  ACCOUNT_NUMBER_ENDING_WITH_4656,
  AN_EXISTING_ACCOUNT,
  CANCEL_THE_TRANSFER,
  CANCEL_TRANSFER,
  CANCEL_TRANSFER_BUTTON,
  CANCEL_TRANSFER_OPTIONS,
  DOWN_ARROW_ALT,
  NEW_ACCOUNT,
  ROSS_GENER,
  SELECT_ACCOUNT,
  SELECT_AN_OPTION,
  WHERE_WOULD_YOU_LIKE_TO_REFUND
} from '../../../utils/constants';
import Icon from '../../atoms/Icon';
import DownArrowImg from '../../../../public/assets/icons/chevron-down.svg';
import {
  StyledCancelButton,
  StyledCancelTheTransferButton,
  StyledModalBox,
  StyledSelectableStack,
  StyledSelectedOptionStack,
  StyledTextField
} from '../../../utils/styledComponents';

interface CancelTransferModalProps {
  handleCancelTransfer: () => void;
}

const CancelTransferModal = (props: CancelTransferModalProps) => {
  const [cancelModalState, setCancelModalState] = useState({
    modal: false,
    selectAccount: false,
    hasButton: false,
    selectedOption: ''
  });

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    setCancelModalState((prevState) => ({
      ...prevState,
      selectedOption: event.target.value,
      hasButton: true
    }));
  };

  const handleSelectAccount = () => {
    setCancelModalState((prevState) => ({
      ...prevState,
      modal: false,
      selectAccount: true
    }));
  };

  const handleModal = () => {
    setCancelModalState((prevState) => ({
      ...prevState,
      modal: true
    }));
  };

  const renderSelectedOptionStack = (accountNumber: string) => {
    return (
      <StyledSelectedOptionStack>
        <Typography variant="body2" color={theme.palette.text.highEmphasis}>
          {ROSS_GENER}
        </Typography>
        <Typography variant="body2" color={theme.palette.text.highEmphasis}>
          {accountNumber}
        </Typography>
      </StyledSelectedOptionStack>
    );
  };

  const renderButtonGrid = () => {
    return (
      <Grid display="flex" justifyContent="center" alignItems="center" marginTop="40px">
        <StyledCancelButton onClick={props.handleCancelTransfer}>
          <Typography variant="body2">{CANCEL_TRANSFER_BUTTON}</Typography>
        </StyledCancelButton>
      </Grid>
    );
  };

  const SelectableOption = ({
    option
  }: {
    option: { id: number; name: string; acctNo: string; value: string };
  }) => {
    return (
      <Stack spacing={1}>
        <Typography variant="body2" color={theme.palette.text.highEmphasis}>
          {option.name}
        </Typography>
        <Typography variant="caption" color={theme.palette.text.lowEmphasis}>
          {option.acctNo}
        </Typography>
      </Stack>
    );
  };

  const renderSelectedOption = (optionValue: string): React.ReactNode => (
    optionValue === 'option1'
      ? <>{ACCOUNT_NUMBER_ENDING_WITH_4656}</>
      : <>{ACCOUNT_NUMBER_ENDING_WITH_4242}</>
  );

  const renderSelectAccountModal = () => {
    return (
      <Modal isModalOpen={cancelModalState.selectAccount}>
        <Grid
          display="flex"
          flexDirection="column"
          sx={{ height: cancelModalState.hasButton ? '357px' : '287px' }}>
          <Typography
            variant="body1"
            color={theme.palette.text.highEmphasis}
            sx={{ marginBottom: '30px' }}>
            {CANCEL_TRANSFER}
          </Typography>
          <Typography variant="caption" color={theme.palette.text.mediumEmphasis}>
            {WHERE_WOULD_YOU_LIKE_TO_REFUND}
          </Typography>
          <StyledTextField
            label={AN_EXISTING_ACCOUNT}
            disabled
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <Icon src={DownArrowImg} alt={DOWN_ARROW_ALT} />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          <FormControl fullWidth variant="outlined" sx={{ marginTop: '40px' }}>
            <InputLabel id="demo-simple-select-label">{SELECT_AN_OPTION}</InputLabel>
            <Select
              value={cancelModalState.selectedOption}
              labelId="demo-simple-select-label"
              onChange={handleSelectChange}
              MenuProps={{
                PaperProps: {
                  sx: {
                    marginTop: '-90px'
                  }
                }
              }}
              renderValue={(option) => renderSelectedOption(option)}>
              {CANCEL_TRANSFER_OPTIONS.map((option) => {
                return (
                  <MenuItem value={option.value} key={option.id}>
                    <SelectableOption option={option} />
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          {cancelModalState.hasButton && renderButtonGrid()}
        </Grid>
      </Modal>
    );
  };

  return (
    <div>
      <StyledCancelTheTransferButton onClick={handleModal}>
        <Typography variant="body2">{CANCEL_THE_TRANSFER}</Typography>
      </StyledCancelTheTransferButton>
      <Modal isModalOpen={cancelModalState.modal}>
        <Grid display="flex" flexDirection="column" sx={{ height: '287px' }}>
          <Typography
            variant="body1"
            color={theme.palette.text.highEmphasis}
            sx={{ marginBottom: '40px' }}>
            {CANCEL_TRANSFER}
          </Typography>
          <Typography variant="caption" color={theme.palette.text.mediumEmphasis}>
            {WHERE_WOULD_YOU_LIKE_TO_REFUND}
          </Typography>
          <StyledModalBox>
            <StyledSelectableStack>
              <Typography variant="body2" color={theme.palette.text.mediumEmphasis}>
                {SELECT_ACCOUNT}
              </Typography>
            </StyledSelectableStack>
            <StyledSelectableStack
              onClick={handleSelectAccount}
              sx={{ ':hover': { cursor: 'pointer' } }}>
              <Typography variant="body2" color={theme.palette.text.highEmphasis}>
                {AN_EXISTING_ACCOUNT}
              </Typography>
            </StyledSelectableStack>
            <StyledSelectableStack>
              <Typography variant="body2" color={theme.palette.text.highEmphasis}>
                {NEW_ACCOUNT}
              </Typography>
            </StyledSelectableStack>
          </StyledModalBox>
        </Grid>
      </Modal>

      {cancelModalState.selectAccount && renderSelectAccountModal()}
    </div>
  );
};

export default CancelTransferModal;
