import { Slider, SliderProps, styled } from '@mui/material';
import React from 'react';
import theme from '../../../theme/index';

export interface StepperCompProps extends SliderProps {
  labels: string[];
  value?: number;
}

const SliderStyled = styled(Slider)(`
    pointer-events:none;
    width: 766px;
    color: ${theme.palette.primary.main};
    & .MuiSlider-mark{
      display:none !important;
    }
    & .MuiSlider-markLabel{
      font-size:${theme.typography.link.fontSize};
      color:${theme.palette.text.mediumEmphasis};
  }
  & .MuiSlider-markLabel.MuiSlider-markLabelActive{
    color:${theme.palette.primary[300]};
  }
  &	.MuiSlider-rail{
    background:${theme.palette.structuralColors.background};
    opacity:1;
    border:none;
    height:4px;
  }
  &	.MuiSlider-track{
    background:${theme.palette.primary[100]};
    opacity:1;
    border:none;
    height:4px;
  }
  & .MuiSlider-thumb{
    background:${theme.palette.primary[300]};
    width:8px;
    height:8px;
  }
  & .MuiSlider-valueLabelLabel{
    font-size:40px;
  }
`);

const getMarks = (labels: string[]) => {
  const labelsStrings: string[] = [...labels];
  const marks = labelsStrings.map((label, index) => ({
    value: index + 1,
    label
  }));
  return marks;
};

export const Stepper = ({ labels, ...props }: StepperCompProps) => {
  return (
    <SliderStyled {...props} marks={getMarks(labels)} min={1} max={getMarks(labels).length} value={props.value} valueLabelDisplay="auto" />
  );
};
