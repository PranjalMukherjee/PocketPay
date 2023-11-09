import { Box, Stack, styled } from "@mui/material";
import React from "react";
import MyTypography from "../../atoms/Typography";
import theme from "../../../theme";
import MuiButton from "../../atoms/Button";
import { cancelPopUpValues } from "./TransferDetailsUtils";

interface RateConfirmationModalProps {
  cancelTranfer: boolean;
  handleOkButton?: () => void;
  handleNoButton?: () => void;
  handleSendMoneyButton?: () => void;
}

const StyledBox = styled(Box)({
  width: "564px",
  height: "335px",
  padding: "40px",
  paddingBottom: "24px",
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  backgroundColor: theme.palette.structuralColors.white,
  borderRadius: "1rem",
});

const StyledOkButton = styled(MuiButton)({
  padding: "1rem 1.875rem 1rem 1.875rem",
  borderRadius: "3.5rem",
  width: "8.438rem",
  boxShadow: "0px 0.5rem 1.5rem rgba(85, 51, 255, 0.24)",
  "&:hover": {
    boxShadow: "0px 0.5rem 1.5rem rgba(85, 51, 255, 0.24)",
    backgroundColor: theme.palette.primary[300],
  },
});

const StyledNoButton = styled(MuiButton)({
  padding: "1rem 1.875rem 1rem 1.875rem",
  borderRadius: "3.5rem",
  width: "8.438rem",
  boxShadow: "0px 0.125rem 0.5rem rgba(20, 20, 20, 0.12)",
  "&:hover": {
    boxShadow: "0px 0.125rem 0.5rem rgba(20, 20, 20, 0.12)",
  },
});

const StyledButtonStack = styled(Stack)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  gap: "0.75rem",
});

const StyledtypoStack = styled(Stack)({
  display: "flex",
  alignItems: "center",
  gap: "1.625rem",
});

export const RateConfirmationModal = ({
  cancelTranfer,
  handleNoButton,
  handleOkButton,
  handleSendMoneyButton,
}: RateConfirmationModalProps) => {
  return (
    <StyledBox>
      {cancelTranfer ? (
        <>
          <StyledtypoStack>
            <MyTypography
              color={theme.palette.text.highEmphasis}
              children={cancelPopUpValues.text1}
              variant="h1"
            />
            <MyTypography
              color={theme.palette.text.mediumEmphasis}
              children={cancelPopUpValues.text2}
              variant="body1"
            />
          </StyledtypoStack>
          <StyledButtonStack>
            <StyledOkButton
              variant={"contained"}
              onClick={handleOkButton}
              children={
                <MyTypography
                  color={theme.palette.structuralColors.white}
                  children={cancelPopUpValues.ButtonYes}
                  variant="body2"
                />
              }
            />
            <StyledNoButton
              variant={"contained"}
              onClick={handleNoButton}
              children={
                <MyTypography
                  color={theme.palette.primary[500]}
                  children={cancelPopUpValues.ButtonNo}
                  variant="body2"
                />
              }
            />
          </StyledButtonStack>
        </>
      ) : (
        <>
          <Stack width={"23.938rem"}>
            <MyTypography
              color={theme.palette.text.mediumEmphasis}
              children={cancelPopUpValues.sendTransferText}
              variant="body1"
            />
          </Stack>
          <StyledButtonStack>
            <StyledOkButton
              variant={"contained"}
              onClick={handleSendMoneyButton}
              children={
                <MyTypography
                  color={theme.palette.structuralColors.white}
                  children={cancelPopUpValues.ButtonOk}
                  variant="body2"
                />
              }
            />
          </StyledButtonStack>
        </>
      )}
    </StyledBox>
  );
};
