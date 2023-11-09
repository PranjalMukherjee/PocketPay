import React, { useContext, useEffect, useState } from 'react';
import { Dialog, Link, useTheme } from '@mui/material';
import {
  TRADE_ADDRESS_BUTTONS,
  TRADE_ADDRESS_HEADER,
  TRADE_ADDRESS_VALUE
} from '../../../utils/constants';
import {
  ParentGrid,
  StyledAddButton,
  StyledAddButtonBox,
  StyledAddingTradeAddressButton,
  StyledBox,
  StyledBoxPopUp,
  StyledButtonGrid,
  StyledConfirmButton,
  StyledGrid,
  StyledGrid2,
  StyledGridLink,
  StyledGridMain,
  StyledHeaderGrid,
  StyledInputFieldTextArea,
  StyledTextArea,
  StyledTypographyAddress,
  StyledTypographyComponent,
  StyledTypographyComponent2
} from '../../../utils/styledComponents';
import Typography from '../../atoms/Typography';
import RadioButton from '../../atoms/RadioButton';
import { ITradeAddressProps } from '../../../utils/types';
import {
  handleTradeAddress,
  handleClickTradeAddress,
  handleEdit,
  handleRadio,
  handleAddTradeAddress,
  handleText,
  handleCancelTradeAddress,
  handleSaveTradeAddress
} from '../../../utils/functions';
import { UserBusinessDetailsContext } from '../../../context/UserBusinessDetailsContext';

const TradeAddress = ({ handleConfirm }: ITradeAddressProps) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [addressPopUp, setAddressPopUp] = useState<boolean>(false);
  const [popAddress, setPopAddress] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [selectedValue, setSelectedValue] = useState<string>('0');

  const { userBusinessDetails, setUserBusinessDetails } = useContext(UserBusinessDetailsContext);
  const theme = useTheme();
  useEffect(() => {
    setUserBusinessDetails((prev) => ({
      ...prev,
      tradeAddress: [userBusinessDetails.businessAddress]
    }));
  }, []);
  return (
    <StyledGrid container data-testid="trade-address">
      <StyledBox>
        <StyledGrid2>
          <Typography variant="h1" color={theme.palette.text.highEmphasis}>
            {TRADE_ADDRESS_HEADER[0]}
          </Typography>
          <Typography variant="body3" color={theme.palette.text.mediumEmphasis}>
            {TRADE_ADDRESS_HEADER[1]}
          </Typography>
        </StyledGrid2>
      </StyledBox>

      {addressPopUp && (
        <Dialog open={addressPopUp} onClose={handleTradeAddress} data-testid="addressPopup">
          <StyledBoxPopUp>
            <StyledTypographyAddress variant="body1" color={theme.palette.text.highEmphasis}>
              {TRADE_ADDRESS_BUTTONS[0]}
            </StyledTypographyAddress>
            <StyledTextArea
              data-testid="textArea"
              label={`${TRADE_ADDRESS_VALUE[2]} ${parseInt(selectedValue) + 2}`}
              multiline
              minRows={3}
              maxRows={4}
              defaultValue={popAddress}
              onChange={handleTradeAddress(setPopAddress)}
            />
            <StyledAddButtonBox>
              <StyledAddButton
                children="Add"
                sx={{ color: "white"}}
                onClick={handleClickTradeAddress(userBusinessDetails.tradeAddress, popAddress, setAddressPopUp)}
              />
            </StyledAddButtonBox>
          </StyledBoxPopUp>
        </Dialog>
      )}

      {!isEdit ? (
        <>
          <StyledHeaderGrid>
            <StyledGridLink>
              <Typography variant="body2" color={theme.palette.text.lowEmphasis}>
                {TRADE_ADDRESS_VALUE[0]}
              </Typography>
              <Link data-testid="hyperlink-data">
                <StyledTypographyComponent
                  onClick={handleEdit(setIsEdit)}
                  variant="caption"
                  color={theme.palette.primary.main}>
                  {TRADE_ADDRESS_VALUE[1]}
                </StyledTypographyComponent>
              </Link>
            </StyledGridLink>
          </StyledHeaderGrid>

          {userBusinessDetails?.tradeAddress.map((data, key) => (
            <StyledGridMain data-testid="typography-selection" key={data}>
              <RadioButton
                checked={key.toString() === selectedValue}
                handleChange={handleRadio(setSelectedValue)}
                value={key}
                label={undefined}
              />
              <ParentGrid>
                <StyledTypographyComponent2
                  variant="body2"
                  color={theme.palette.text.mediumEmphasis}>
                  {`${TRADE_ADDRESS_VALUE[3]} ${key + 1}`}
                </StyledTypographyComponent2>
                <Typography variant="body2" color={theme.palette.text.highEmphasis}>
                  {data}
                </Typography>
              </ParentGrid>
            </StyledGridMain>
          ))}

          <StyledButtonGrid>
            <StyledAddingTradeAddressButton
              children={TRADE_ADDRESS_BUTTONS[0]}
              sx={{ color: theme.palette.primary.main }}
              variant="outlined"
              onClick={handleAddTradeAddress(setAddressPopUp)}
            />
            <StyledConfirmButton
              children={TRADE_ADDRESS_BUTTONS[1]}
              sx={{ color: "white" }}
              variant="contained"
              onClick={handleConfirm}
            />
          </StyledButtonGrid>
        </>
      ) : (
        <>
          <StyledHeaderGrid>
            <Typography variant="caption" color={theme.palette.text.lowEmphasis}>
              {TRADE_ADDRESS_VALUE[0]}
            </Typography>
          </StyledHeaderGrid>
          <StyledInputFieldTextArea
            data-testid="textArea"
            label={`${TRADE_ADDRESS_VALUE[2]} ${parseInt(selectedValue) + 1}`}
            multiline
            minRows={3}
            maxRows={4}
            placeholder="Enter Address"
            defaultValue={userBusinessDetails.tradeAddress[parseInt(selectedValue)]}
            onChange={handleText(setAddress)}
          />
          <StyledButtonGrid>
            <StyledAddingTradeAddressButton
              children={TRADE_ADDRESS_BUTTONS[2]}
              sx={{ color: theme.palette.primary.main }}
              variant="outlined"
              onClick={handleCancelTradeAddress(setIsEdit)}
            />
            <StyledConfirmButton
              children={TRADE_ADDRESS_BUTTONS[3]}
              sx={{ color: "white" }}
              variant="contained"
              onClick={handleSaveTradeAddress(
                setIsEdit,
                address,
                selectedValue,
                userBusinessDetails.tradeAddress
              )}
            />
          </StyledButtonGrid>
        </>
      )}
    </StyledGrid>
  );
};

export default TradeAddress;
