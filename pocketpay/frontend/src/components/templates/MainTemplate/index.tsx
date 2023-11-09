import { Grid } from '@mui/material';
import React from 'react';
import logo from '../../../../public/assets/icons/logo.svg';
import MuiIcon from '../../atoms/Icon';
import { Stepper } from '../../molecules/HorizontalStepper';
import closeIcon from '../../../../public/assets/icons/close.svg';
import arrowRight from '../../../../public/assets/icons/arrow-right.svg';
import { StyledButton } from '../../../utils/styledComponents';
interface MainTemplateProps {
  isStepperVisible?: boolean;
  isCloseVisible?: boolean;
  onClick?: () => void;
  stepperValues?: string[];
  presentValue?: number;
  children: React.ReactNode;
  isBackVisible?: boolean;
  stepperWidth?: string;
}
export const MainTemplate = (props: MainTemplateProps) => {
  return (
    <div data-testid="mainTemplate" style={{ height: '85vh' }}>
      <Grid
        container
        justifyContent="space-between"
        alignItems="flex-start"
        padding="24px 80px"
        wrap="nowrap">
        <MuiIcon src={logo} alt="logo" />
        <div>
          {props.isStepperVisible && (
            <Stepper
              labels={props.stepperValues!}
              defaultValue={props.presentValue ?? 0}
              width={props.stepperWidth}
              value={props.presentValue ?? 0}
            />
          )}
        </div>
        <div>{props.isCloseVisible && <MuiIcon src={closeIcon} alt="closeIcon" />}</div>
      </Grid>
      <Grid container justifyContent="center" alignItems="center" columnGap={10}>
        {props.isBackVisible && (
          <Grid item alignSelf="flex-start">
            <StyledButton
              data-testid="back-button"
              variant="text"
              startIcon={<MuiIcon src={arrowRight} alt="arrowRight" />}
              onClick={props.onClick}
            />
          </Grid>
        )}
        <Grid item marginTop={'70px'}>
          <Grid container item direction="column">
            {props.children}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
