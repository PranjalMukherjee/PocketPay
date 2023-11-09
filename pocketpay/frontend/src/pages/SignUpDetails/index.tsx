import React, { useContext, useEffect, useState } from "react";
import { MainTemplate } from "../../components/templates/MainTemplate";
import AccountTypeCard  from "../../components/organisms/AccountTypeCard";
import {
  ACCOUNT_SELECT_TITLE,
  ACCOUNT_SELECT_VALUE,
  ACCOUNT_SELECT_DATA,
  STEPPER_LABELS,
  NAVIGATE_SIGUP,
} from "../../utils/constants";
import SelectCountry from "../../components/organisms/SelectCountry";
import MobileVerification from "../../components/organisms/MobileVerfication";
import VerifyOTP from "../../components/organisms/VerifyOtp";
import CreatePassword from "../../components/organisms/CreatePassword";
import { SignUpDetailsContext } from "../../context/CountryContext";
import { useNavigate } from "react-router-dom";
import { Stack, styled } from "@mui/material";

const OuterBox = styled(Stack)({
  width: "600px",
});

const SignUpDetailsPage = () => {
  const navigate = useNavigate();
  const { SignUpDetails } = useContext(SignUpDetailsContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [presentValue, setPresentValue] = useState(currentIndex + 2);

  useEffect(() => {
    setPresentValue(currentIndex === 3 ? 4 : currentIndex + 2);
  }, [currentIndex]);


  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
    else{
      navigate(NAVIGATE_SIGUP)
    }
  };

  return (
      <MainTemplate
        isStepperVisible={true}
        isBackVisible={true}
        stepperWidth={'788px'}
        stepperValues={STEPPER_LABELS[0]}
        presentValue={presentValue}
        onClick={handleBack}
      >
        <OuterBox>
        {currentIndex === 0 && (
          <AccountTypeCard 
            key={"accountType"}
            title={ACCOUNT_SELECT_TITLE}
            subtitle={ACCOUNT_SELECT_VALUE}
            data={ACCOUNT_SELECT_DATA}
            handleAccountSetup={() => setCurrentIndex(1)}
          />
        )}
        {currentIndex === 1 && (
          <SelectCountry key={"selectCountry"} handleSelectCountry={() => setCurrentIndex(2)} />
        )}
        {currentIndex === 2 && (
          <MobileVerification
            key={"verifyPhoneNumber"}
            handleChange={() => setCurrentIndex(3)}
          />
        )}
        {currentIndex === 3 && (
          <VerifyOTP
            key={"verifyOTP"}
            phoneNumber={SignUpDetails.phoneNumber}
            handleVerifySubmit={() => setCurrentIndex(4)}
            handleDifferentNumber={() => setCurrentIndex(2)}
          />
        )}
        {currentIndex === 4 && (
          <CreatePassword key={"createPassword"} handleContinuePassword={() => {navigate("/business-details")}} />
        )}
        </OuterBox>
      </MainTemplate>
  );
};

export default SignUpDetailsPage;
