import React, { useState } from "react";
import {  STEPPER_LABELS } from "../../utils/constants";
import { MainTemplate } from "../../components/templates/MainTemplate";
import ConfirmBusinessDirectors from "../../components/organisms/ConfirmBusinessDirector";
import { VerificationCard } from "./Purposecard";
import { useNavigate } from "react-router-dom";

export const VerificationDetailsPage = () => {

  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(0);
  const onClickBack = () => {
    if (currentStep !== 0) {
      setCurrentStep(currentStep - 1);
    }
    else{
      navigate("/recipient-details")
    }
  };
  const onClickContinue = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleVerificationCardContinueButton = () => {
    navigate("/transfer-details");
  }
  const verificationComponents: React.ReactNode[] = [
    <VerificationCard key={1} handleContinueButton={onClickContinue} />,
    <ConfirmBusinessDirectors
      isDirectors
      key={2}
      handleContinue={onClickContinue}
    />,
    <ConfirmBusinessDirectors isDirectors={false} key={3} handleContinue={handleVerificationCardContinueButton} />,
  ];
  return (
      <MainTemplate
        isStepperVisible
        presentValue={4}
        isBackVisible
        isCloseVisible
        stepperValues={STEPPER_LABELS[2]}
        stepperWidth={"788px"}
        onClick={onClickBack}
      >
          {verificationComponents[currentStep]}
      </MainTemplate>
  );
};
