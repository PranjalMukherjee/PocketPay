import React from 'react'; 
import {
  FormControlLabelProps,
  FormControlLabel as MuiFormControlLabel,
  Radio,
  styled
} from '@mui/material';

export interface RadioButtonProps extends Partial<FormControlLabelProps> {
  value: unknown;
  label: React.ReactNode;
  checked?: boolean
  handleChange?: (event: any) => void
}

const StyledFormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
  display: 'inline-flex',
  margin: 0,
  padding: theme.spacing(4),
  alignItems: 'center',
  backgroundColor: theme.palette.structuralColors.white,
  '&:hover': {
    backgroundColor: theme.palette.structuralColors.hoverColor
  }
}));

const RadioButton: React.FC<RadioButtonProps> = (props) => {
  return (
    <StyledFormControlLabel data-testid="RadioButton" checked={props.checked} onChange={props.handleChange} {...props} control={<Radio size="small" />} />
  );
};

RadioButton.defaultProps = {
  labelPlacement: 'end'
};

export default RadioButton;
