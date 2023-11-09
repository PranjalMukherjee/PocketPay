import React, { useState } from 'react';
import { Theme, SxProps, MenuItem, FormControl, InputLabel, ListItemIcon } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Select, { SelectProps } from '@mui/material/Select';
import ImageComponent from '../Image';
import Typography from '../Typography';
import theme from '../../../theme';
import styled from '@emotion/styled';

interface Props extends SelectProps {
  menu: string[];
  formControlsx?: SxProps<Theme>;
  labelText?: string;
  displayIcon?: boolean;
  icons?: { flag: string; code?: string }[];
  handleChange?: (value: any) => void;
  value?: string;
  dataId?: string;
}
export const Dropdown = (props: Props) => {
  const [selectedValue, setSelectedValue] = useState<string>(props.value ?? '');

  const handleSelectChange = (event: { target: { value: any } }) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
    props.handleChange?.(newValue);
  };
  const FormControlStyled = styled(FormControl)(`
    & .MuiSelect-select.MuiSelect-outlined{
      display:flex;
      align-items:center;
      & img{
        position:static !important;
      }
      & .code{
        color:${theme.palette.text.highEmphasis};
        font-size:${theme.typography.body1.fontSize};
      }
      
    }
   
    & .MuiOutlinedInput-root {
      &:hover fieldset {
        border: 1px solid ${theme.palette.Greys.stroke};
      }
      &.Mui-focused fieldset {
        border: 1px solid ${theme.palette.Greys.stroke};
        border-bottom:3px solid ${theme.palette.structuralColors.backdrop};
      }
      color:${theme.palette.text.highEmphasis};
      font-size:${theme.typography.body2.fontSize};
      
   }
    .MuiInputLabel-root{
      font-size:${theme.typography.body2.fontSize};
      color:${theme.palette.text.lowEmphasis};
    }

    & .Mui-focused.MuiInputLabel-root {
      color: ${theme.palette.structuralColors.backdrop}};
    }
    & .MuiSelect-icon{
      padding-right:12px;
      height:20px;
      width:20px;
      padding-bottom:6px;
    }
    & 	.MuiSelect-select{
      align-content:center;
    }
    & .MuiSelect-iconOpen{
      padding-top:10px;
      padding-left:12px;
      height:20px;
      width:20px;
    }

  `);
  return (
    <FormControlStyled sx={props.formControlsx}>
      <InputLabel htmlFor="grouped-native-select">{props.labelText}</InputLabel>
      <Select
        data-testid={props.dataId}
        value={selectedValue}
        onChange={handleSelectChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Without label' }}
        IconComponent={ExpandMoreIcon}
        id="grouped-native-select"
        label={props.labelText}
        MenuProps={{
          PaperProps: {
            style: {
              maxHeight: '235px',
              overflowY: 'auto'
            }
          }
        }}
        className="select-comp"
        {...props}>
        {props.menu.map((item, idx) => (
          <MenuItem
            key={item}
            value={item}
            sx={{
              color: 'text.disabled',
              position: 'relative',
              paddingLeft: props.displayIcon ? '66px' : '',
              height: '56px'
            }}
            data-testid={idx + '-menu'}>
            <Typography variant="body2" color={theme.palette.text.highEmphasis}>
              {item}
            </Typography>
            {props.displayIcon && (
              <ListItemIcon sx={{ marginLeft: 'auto' }} data-testid="country-code">
                <ImageComponent
                  imgSrc={props.icons?.[idx]?.flag ?? ''}
                  imgAlt="Flag"
                  style={{ position: 'absolute', left: '18px', top: '10px' }}
                />
                <Typography
                  variant="body2"
                  color={theme.palette.text.lowEmphasis}
                  sx={{ marginLeft: '10px' }}
                  className="code">
                  {props.icons?.[idx]?.code ?? ''}
                </Typography>
              </ListItemIcon>
            )}
          </MenuItem>
        ))}
      </Select>
    </FormControlStyled>
  );
};
