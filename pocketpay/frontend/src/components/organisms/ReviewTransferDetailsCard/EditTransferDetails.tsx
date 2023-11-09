import { Box, Grid } from '@mui/material';
import React from 'react';
import TypographyComponent from '../../atoms/Typography';
import Theme from '../../../theme';
import { InputField } from '../../atoms/TextField';
import { StyledButton } from '../../../utils/styledComponents';
export interface EditTransferDetailsProp {
  detailHead: string;
  items: {
    name: string;
    label: string;
    value: string;
    disabled?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    helperText?: string;
    error?: boolean;
  }[];
  onClickSave?: () => void;
  onClickCancel?: () => void;
  disableSave?: boolean;
}
export const EditTransferDetails = (props: EditTransferDetailsProp) => (
  <Box
    display="flex"
    flexDirection="column"
    maxWidth="700px"
    rowGap={11}
    justifyContent="space-between"
    data-testid="editDetails">
    <Grid container item direction="column" rowGap={8} maxWidth="516px">
      <TypographyComponent
        variant="caption"
        children={props.detailHead}
        color={Theme.palette.text.lowEmphasis}
      />
      {props.items.map((item) => (
        <InputField {...item} key={item.name} />
      ))}
    </Grid>
    <Grid
      item
      container
      justifyContent="flex-end"
      columnGap={5}
      style={{ paddingRight: '20px', paddingBottom: '20px' }}>
      <StyledButton
        className="addPadding"
        variant="outlined"
        children={
          <TypographyComponent variant="body2" children="Cancel" onClick={props.onClickCancel} />
        }
      />
      <StyledButton
        className="addPadding"
        variant="contained"
        disabled={props.disableSave}
        children={
          <TypographyComponent variant="body2" children="Save" onClick={props.onClickSave} />
        }
      />
    </Grid>
  </Box>
);
