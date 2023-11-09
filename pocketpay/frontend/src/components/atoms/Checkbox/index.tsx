import React from 'react';
import { Checkbox, CheckboxProps } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import theme from '../../../theme';

export interface CheckboxLabelsProps extends CheckboxProps {
  label?: string;
  checked?: boolean;
  labelColor?: string;
}

const CheckboxLabels = ({
  label,
  checked = false,
  labelColor = theme.palette.text.primary, 
  ...restProps
}: CheckboxLabelsProps) => {
  return (
    <FormControlLabel
      label={label}
      labelPlacement="end"
      style={{ color: labelColor }}
      control={
        <Checkbox
          checked={checked}
          style={{ color: theme.palette.primary.main }}
          {...restProps}
        />
      }
    />
  );
};

export default CheckboxLabels;
