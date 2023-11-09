import React, { useCallback, useContext, useState } from 'react'
import { Box, Link, useTheme } from '@mui/material'
import TypographyComponent from '../../atoms/Typography'
import {
  BUSINESS_DETAIL,
  BUSINESS_DETAIL_SUB,
  BUZ_DETAIL,
  BUZ_NAME,
  CANCEL_BTN,
  CONFIRM_BTN,
  EDIT_BTN_TEXT,
  REG_ADDR,
  REG_NUM,
  SAVE_BTN,
  TRADE_ADDRESS_DATA,
  ZENTECH_BUSINESS,
  ZENTECH_REGISTRATION_NUMBER,
} from '../../../utils/constants'
import { 
  AddressBox,
  ButtonBox,
  BuzDetailBox,
  CancelButton,
  DetailTypography,
  EditBox,
  HeadingBox,
  SaveButton,
  StyledBox, 
  StyledBox1, 
  StyledGrid2, 
  StyledInputBox, 
  StyledInputFieldTextArea, 
  StyledTypographyComponent 
} from '../../../utils/styledComponents'
import { InputField } from '../../atoms/TextField'
import { IBusinessConfirmationProps } from '../../../utils/types'
import { UserBusinessDetailsContext } from '../../../context/UserBusinessDetailsContext'

const BusinessConfirmation = ({
  businessSelectedName,
  onClick,
}: IBusinessConfirmationProps) => {
  const [isEdit, setIsEdit] = useState(true)
  const theme = useTheme()

  const [regNumber, setRegNumber] = useState(ZENTECH_REGISTRATION_NUMBER)
  const [regAddress, setRegAddress] = useState(TRADE_ADDRESS_DATA[0])
  const {setUserBusinessDetails} = useContext(UserBusinessDetailsContext);
  const handleRegistration = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) =>{
      const { value } = event.target;
      setRegNumber(event.target.value);
      setUserBusinessDetails((prev) => ({
        ...prev,
        registrationNumber: value
      }));
    }
      ,
    []
  )
  const handleAddress = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setRegAddress(value);
      setUserBusinessDetails((prev) => ({
        ...prev,
        businessAddress: value
      }));
    },
    []
  );
  

  const handleEdit = useCallback(() => {
    setIsEdit((prevEdit) => !prevEdit)
  }, [])

  const handleCancel = useCallback(() => {
    setIsEdit(true)
   
    setRegNumber(ZENTECH_REGISTRATION_NUMBER)
    setRegAddress(TRADE_ADDRESS_DATA[0])
    setUserBusinessDetails((prev) => ({
      ...prev,
      registrationNumber: ZENTECH_REGISTRATION_NUMBER,
      businessAddress:TRADE_ADDRESS_DATA[0]
    }));
  }, [businessSelectedName])

  return (
    <StyledBox1 data-testid="business-confirmation">
      <HeadingBox>
         <StyledBox>
             <StyledGrid2>
                <TypographyComponent variant="h1" color={theme.palette.text.highEmphasis}>
                   {BUSINESS_DETAIL}
                </TypographyComponent>
                <TypographyComponent variant="body3" color={theme.palette.text.mediumEmphasis}>
                   {BUSINESS_DETAIL_SUB}
                </TypographyComponent>
              </StyledGrid2>
        </StyledBox>
      </HeadingBox>

      <EditBox>
        <TypographyComponent variant="caption" color={theme.palette.text.lowEmphasis}>
          {BUZ_DETAIL}
        </TypographyComponent>
        {isEdit && (
          <Link data-testid="hyperlink-data">
            <StyledTypographyComponent
              onClick={handleEdit}
              variant="caption"
              color={theme.palette.primary.main}
            >
              {EDIT_BTN_TEXT}
            </StyledTypographyComponent>
          </Link>
        )}
      </EditBox>

      {isEdit ? (
        <>
          <BuzDetailBox>
            <TypographyComponent
              variant="body2"
              color={theme.palette.text.mediumEmphasis}
            >
              {BUZ_NAME}:
            </TypographyComponent>
            <DetailTypography
              variant="body2"
              color={theme.palette.text.primary}
            >
              {businessSelectedName}
            </DetailTypography>
          </BuzDetailBox>
          <BuzDetailBox>
            <TypographyComponent
              variant="body2"
              color={theme.palette.text.mediumEmphasis}
            >
              {REG_NUM}:
            </TypographyComponent>
            <DetailTypography
              variant="body2"
              color={theme.palette.text.highEmphasis}
            >
              {regNumber}
            </DetailTypography>
          </BuzDetailBox>
          <BuzDetailBox>
            <TypographyComponent
              variant="body2"
              color={theme.palette.text.mediumEmphasis}
            >
              {REG_ADDR}:
            </TypographyComponent>
            <DetailTypography
              variant="body2"
              color={theme.palette.text.highEmphasis}
            >
              {regAddress}
            </DetailTypography>
          </BuzDetailBox>
          <ButtonBox>
            <SaveButton
              data-testid="save-button"
              variant="contained"
              children={CONFIRM_BTN}
              sx={{color:"white"}}
              onClick={onClick}
            />
          </ButtonBox>
        </>
      ) : (
        <Box data-testid="business-confirmation-edit">
          <StyledInputBox>
            <InputField
              placeholder={ZENTECH_BUSINESS}
              label={BUZ_NAME}
              value={businessSelectedName}
              disabled={true}
            />
          </StyledInputBox>

          <StyledInputBox>
            <InputField
              placeholder={ZENTECH_REGISTRATION_NUMBER}
              label={REG_NUM}
              value={regNumber}
              onChange={handleRegistration}
            />
          </StyledInputBox>

          <AddressBox>
            <StyledInputFieldTextArea
                data-testid="textArea"
                label={REG_ADDR}
                multiline
                minRows={3}
                maxRows={4}
                placeholder={TRADE_ADDRESS_DATA[0]}
                defaultValue={regAddress}
                onChange={handleAddress}
              />
          </AddressBox>

          <ButtonBox>
            <CancelButton
              data-testid="cancel-btn"
              children={CANCEL_BTN}
              sx={{color:theme.palette.primary.main}}
              variant="outlined"
              onClick={handleCancel}
            ></CancelButton>

            <SaveButton
              data-testid="save-btn"
              variant="contained"
              children={SAVE_BTN}
              sx={{color:"white"}}
              onClick={handleEdit}
            />
          </ButtonBox>
        </Box>
      )}
    </StyledBox1>
  )
}
export default BusinessConfirmation
