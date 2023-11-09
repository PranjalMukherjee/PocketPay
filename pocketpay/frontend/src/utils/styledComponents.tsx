import { Box, Divider, FormControl, Grid, Stack, Stepper, TextField, styled } from '@mui/material';
import theme from '../theme/index';
import Button from '../components/atoms/Button';
import Icon from '../components/atoms/Icon';
import Typography from '../components/atoms/Typography';
import { InputField } from '../components/atoms/TextField';
export const StyledStepperLabel = styled(Box)(`
  display:flex;
  flex-direction: column;
  align-items: center;
  text-align:center;
`);
export const StepperStyled = styled(Stepper)(`
    width:500px;
    & .MuiTypography-root{
      line-height:0;
    }
    & .MuiStepConnector-line.MuiStepConnector-lineVertical{
        width:2px;
        background:${theme.palette.primary[500]};
        height:16px;
        border-left:none;
        height:31px;
    } 
    & .MuiStepLabel-iconContainer.Mui-disabled{
        & .dot{
        background:${theme.palette.Greys.stroke};
        }
    } 
    & .MuiStepConnector-root.MuiStepConnector-vertical.Mui-disabled{
        & span{
            background:${theme.palette.Greys.stroke};
        }
    }
    & .MuiStepConnector-root.MuiStepConnector-vertical{
        display:flex;
        justify-content:center;
        margin-left:0;
        width:100%;
        margin:0 auto;
    }
    & .MuiStepLabel-root.MuiStepLabel-vertical{
        padding:0;
    }
    & .MuiStepLabel-iconContainer{
        padding:0;
    }
    & .MuiTypography-root{
        width:210px;
        text-align:right;
        color:${theme.palette.text.lowEmphasis};
    }
    & .MuiTypography-root.right-typo{
        text-align:left;
    }
    & .dot{
        border-radius:100%;
        background:${theme.palette.primary[500]};
        width:8px;
        height:8px;
    }
    & .MuiStep-root.MuiStep-vertical.Mui-completed{
       & .MuiTypography-root{
        color:${theme.palette.text.highEmphasis};
        }
    }
    & .active-step .MuiTypography-root {
      color: ${theme.palette.primary[500]};
    }

  `);
export const StyledStepperContainer = styled(Box)(`
  display:flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`);

export const datePropsStyles = {
  '.MuiPickersCalendarHeader-root': {
    display: 'flex',
    alignItems: 'center',
    justifyItems: 'center',
    color: theme.palette.text.mediumEmphasis
  },
  '.MuiPickersCalendarHeader-root:first-of-type': {
    order: 0,
    paddingRight: '20px',
    paddingLeft: '20px'
  },
  '.MuiPickersArrowSwitcher-root': {
    display: 'inline-flex',
    color: theme.palette.text.mediumEmphasis
  },
  '.MuiPickersCalendarHeader-label': {
    textAlign: 'center'
  },
  '.MuiPickersArrowSwitcher-spacer': {
    width: '220px'
  },
  '.css-31ca4x-MuiPickersFadeTransitionGroup-root': {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    position: 'absolute',
    marginLeft: 'auto',
    marginRight: 'auto',
    left: 0,
    right: 0,
    textAlign: 'center'
  },
  '.css-9reuh9-MuiPickersArrowSwitcher-root': {
    marginLeft: '-2px'
  },
  '.MuiPickersArrowSwitcher-button': {
    paddingRight: '7px'
  },
  '& .MuiDayPicker-weekDayLabel:nth-of-type(1)': {
    color: theme.palette.text.mediumEmphasis
  },
  '& .Mui-selected.css-okjqcy-MuiButtonBase-root-MuiPickersDay-root': {
    backgroundColor: theme.palette.primary.main
  },
  '& .Mui-selected.css-1q3vjbc-MuiTypography-root-PrivatePickersMonth-root': {
    backgroundColor: theme.palette.primary.main
  },
  '& .Mui-selected.css-5g6jt1-PrivatePickersYear-button': {
    backgroundColor: theme.palette.primary.main
  }
};
export const StyledButton = styled(Button)({
  textTransform: 'none',
  cursor: 'pointer',
  padding: '16px 30px',
  borderRadius: '56px',
  [`&.MuiButton-contained`]: {
    boxShadow: '0px 8px 24px 0px rgba(85, 51, 255, 0.24)',
    [`&:hover`]: {
      background: theme.palette.primary[300]
    }
  },
  [`&.MuiButton-contained.Mui-disabled`]: {
    background: theme.palette.primary[100],
    boxShadow: 'none'
  },
  [`&.MuiButton-outlined`]: {
    boxShadow: `0px 0px 1px 0px rgba(20, 20, 20, 0.12), 0px 0px 8px 0px rgba(20, 20, 20, 0.04), 0px 8px 8px 0px rgba(20, 20, 20, 0.04)`,
    border: 'none',
    [`&:hover`]: {
      background: '#F4EFFF',
      color: theme.palette.primary[300]
    }
  },
  [`&.MuiButton-text`]: {
    padding: 0,
    minWidth: 0,
    ['&:hover']: {
      background: 'white'
    }
  },
  [`&.MuiButton-sizeLarge`]: {
    padding: '16px 47px'
  },
  [`& .addPadding`]: {
    padding: '0px 19.5px'
  }
});

export const TextFieldStyled = styled(TextField)(`
  & .MuiOutlinedInput-root {
    padding-right:20px;
    &:hover fieldset {
      border: 1px solid ${theme.palette.Greys.stroke};
    }
    &.Mui-focused fieldset {
      border: 1px solid ${theme.palette.Greys.stroke};
      border-bottom:2px solid ${theme.palette.primary[500]};
    }
    color:${theme.palette.text.highEmphasis};
    font-size:${theme.typography.body2.fontSize};
    border-radius:8px;
  }
 
  .MuiInputLabel-root{
    font-size:${theme.typography.body2.fontSize};
    color:${theme.palette.text.lowEmphasis};   
  }
  & .Mui-focused.MuiInputLabel-root {
    color: ${theme.palette.primary[500]};
  }
`);

export const StyledGrid2 = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center'
});

export const RootBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '665px'
});

export const RootBox2 = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2)
}));

export const IconBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  height: theme.spacing(6),
  width: theme.spacing(6),
  paddingRight: '8px'
}));

export const StyledBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '516px'
});

export const InputBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(7)
}));

export const TextBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4)
}));

export const LabelBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(10),
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  maxWidth: '515px'
}));

export const BtnBox = styled(Box)({
  display: 'flex',
  alignItems: 'flex-end',
  flexDirection: 'column',
  minWidth: '651px'
});

export const ContinueBtn = styled(Button)(({ theme }) => ({
  minWidth: '135px',
  minHeight: '56px',
  boxShadow: `0px 8px 24px 0px #5533FF3D`,
  '& .MuiTypography-root': {
    variant: 'body2'
  },
  ':disabled': {
    backgroundColor: theme.palette.primary[100]
  }
}));

export const DropdownBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(6),
  '& .MuiInputLabel-root': {
    color: theme.palette.text.lowEmphasis
  }
}));

export const StyledDatePicker = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(7),
  '& .MuiOutlinedInput-notchedOutline': {
    border: `1px solid ${theme?.palette?.Greys?.stroke} !important`
  },
  '& .MuiIconButton-root': {
    color: theme.palette.text.lowEmphasis
  }
}));

export const StyledDivider = styled(Divider)(({ theme }) => ({
  height: theme.spacing(6),
  m: theme.spacing(0.125),
  marginLeft: theme.spacing(2),
  color: theme.palette.Greys.stroke
}));
export const OuterBox = styled(Stack)({
  width: '29.625rem',
  gap: '4vh'
});

export const InnerBox = styled(Stack)({
  gap: '2vh'
});
export const DownBox = styled(Stack)({
  gap: '3vh',
  marginTop: '20px'
});
export const UpBox = styled(Stack)({
  gap: '5vh'
});

export const FormControlStyled = styled(FormControl)(`
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
    border-bottom:3px solid ${theme.palette.primary[500]};
  }
  color:${theme.palette.text.highEmphasis};
  font-size:${theme.typography.body2.fontSize};
  
}
.MuiInputLabel-root{
  font-size:${theme.typography.body2.fontSize};
  color:${theme.palette.text.lowEmphasis};
}

& .Mui-focused.MuiInputLabel-root {
  color: ${theme.palette.primary[500]};
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

export const StyledStack = styled(Box)({
  maxWidth: '29.625rem',
  width: '100%',
  height: '40.625rem',
  padding: '3rem 2rem',
  border: `1px solid ${theme.palette.Greys.stroke}`,
  borderRadius: '1rem'
});

export const StyledContinueToPayButton = styled(Button)({
  width: '15.625rem',
  height: '3.5rem',
  boxShadow: '0px 0.5rem 1.5rem rgba(85, 51, 255, 0.24)',
  '&:hover': {
    boxShadow: '0px 0.5rem 1.5rem rgba(85, 51, 255, 0.24)'
  },
  padding: '1rem 2.688rem 1rem 2.688rem',
  borderRadius: '3.5rem'
});

export const StyledMuiIcon = styled(Icon)({
  width: '1.5rem',
  height: '1.5rem'
});
export const StyledCancelTransferButton = styled(Button)({
  padding: '1rem 2.688rem 1rem 2.688rem',
  borderRadius: '3.5rem',
  width: '15.625rem',
  height: '3.5rem',
  boxShadow: '0px 0.125rem 0.5rem 0px #1414141F',
  '&:hover': {
    boxShadow: '0px 0.125rem 0.5rem 0px #1414141F'
  },
  '&:disabled': {
    backgroundColor: "white",
    boxShadow: '0px 0.125rem 0.5rem 0px #1414141F'
  }
});

export const IconTypoStack = styled(Stack)({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  gap: '0.5rem',
  marginTop: '0.25rem'
});
export const StyledButtonStack = styled(Stack)({
  marginTop: '1.5rem',
  alignItems: 'center',
  gap: '1.25rem'
});

export const TypoStack = styled(Stack)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'row',
  marginBottom: '0.625rem'
});
export const StyledOuterBox = styled(Stack)({
  width: '32.188rem',
  height: '65vh',
  gap: '10px'
});
export const StyledInnerBox = styled(Stack)({
  marginTop: '30px'
});

export const GridStyle47 = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '40.688rem',
  justifyContent: 'space-between',
});

export const StyledGrid47 = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '516px',
});

export const ParentGrid47 = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(13),
  maxWidth: '516px'
}));

export const ButtonGrid47 = styled(Grid)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  marginTop: '380px',
  width: '651px',
});

export const ParentGrid11 = styled(Grid)(({ theme }) => ({
  paddingTop: theme.spacing(10)
}));

export const ChildGrid11 = styled(Grid)(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.spacing(2),
  marginBottom: theme.spacing(5),
  '&:hover': {
    backgroundColor: theme.palette.structuralColors.hoverColor,
    cursor: 'pointer'
  }
}));

export const StyledBox11 = styled(Box)({
  display: 'flex',
  textTransform: 'none',
  paddingTop: theme.spacing(4),
  paddingLeft: theme.spacing(4),
  paddingBottom: theme.spacing(4)
});

export const IconBox11 = styled(Box)(({ theme }) => ({
  marginRight: theme.spacing(3)
}));

export const TypoBox11 = styled(Box)({
  display: 'flex',
  flexDirection: 'column'
});

export const StyledTypo11 = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2)
}));

export const CustomTextField48 = styled(TextField)((props: { open?: boolean }) => ({
  maxWidth: '516px',
  '& label.Mui-focused': {
    color: theme.palette.text.lowEmphasis
  },
  '& .MuiOutlinedInput-root': {
    paddingRight: '17px !important',
    ...theme.typography.body2,
    color: theme.palette.text.highEmphasis,
    '&.Mui-focused fieldset': {
      border: `${theme.spacing(0.25)} solid ${theme.palette.Greys.stroke}`,
      borderBottom: props.open ? 'none' : `${theme.spacing(0.25)} solid ${theme.palette.Greys.stroke}`,
      borderBottomRightRadius: '0',
      borderBottomLeftRadius: '0'
    },
    '&.Mui-focused .search': {
      display: 'none'
    },
    '& fieldset': {
      border: `1px solid ${theme.palette.Greys.stroke}`,
      borderRadius: `${theme.spacing(2)} !important`
    }
  }
}));

export const ParentGrid48 = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(9),
  maxWidth: '516px'
}));

export const StyledInputFieldTextArea = styled(TextField)(({ theme }) => ({
  fontVariant: 'body2',
  borderRadius: theme.spacing(2),

  '& .MuiOutlinedInput-notchedOutline': {
    border: `1px solid ${theme?.palette?.Greys?.stroke} !important`,
    borderRadius: theme.spacing(2),
  },
  '& .MuiInputBase-input': {
    ...theme.typography.body2,
    color: theme.palette.text.highEmphasis,
  },
  '& .MuiOutlinedInput-root': {
    padding: '20px 21px 16px 18px',
    ...theme.typography.body2,
  },
  '& .MuiFormLabel-root': {
    ...theme.typography.body2,
    marginTop: theme.spacing(1),
    color: `${theme.palette.text.lowEmphasis} !important`,
    
  },
  maxWidth:'516px',
}));

export const StyledGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '516px',
  marginLeft: theme.spacing(40),
}))

export const StyledHeaderGrid = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(10),
  marginBottom: theme.spacing(6),
}))

export const StyledButtonGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: theme.spacing(10),
}))

export const StyledAddingTradeAddressButton = styled(Button)(({ theme }) => ({
  minWidth: '218px',
  minHeight: '56px',
  border: 'none',
  boxShadow: `0px 8px 24px 0px #1414141F`,
  '& .MuiTypography-root': {
    variant: 'body2',
  },
  '&:hover': {
    backgroundColor:  theme?.palette?.structuralColors?.buttonHover,
    color: theme.palette.primary[500],
    border: 'none',
  },
  color: theme.palette.primary[500],
  marginBottom: theme.spacing(5),
}))

export const StyledConfirmButton = styled(Button)(({ theme }) => ({
  minWidth: '218px',
  minHeight: '56px',
  marginBottom: theme.spacing(6),
  boxShadow: `0px 8px 24px 0px #D7D7D7`,
  '& .MuiTypography-root': {
    variant: 'body2',
  },
  '&:hover': {
    backgroundColor: theme.palette.primary[300],
    color: 'white',
  },
}))

export const StyledGridLink = styled(Grid)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
})

export const StyledTypographyComponent = styled(Typography)({
  textTransform: 'none',
  cursor: 'pointer',

})

export const StyledGridMain = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  marginBottom: theme.spacing(10),
}))

export const StyledTypographyComponent2 = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}))

export const ParentGrid = styled(Grid)(({ theme }) => ({
  minWidth: theme.spacing(104),
  minHeight: theme.spacing(18),
  marginLeft: theme.spacing(8),
}))

export const StyledBoxPopUp = styled(Box)(({ theme }) => ({
  minWidth: '564px',
  minHeight: '306px',
  borderRadius: theme.spacing(4),
  backgroundColor: "white",
}))

export const StyledTypographyAddress = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(6),
  marginLeft: theme.spacing(6),
}))

export const StyledTextArea = styled(StyledInputFieldTextArea)(({ theme }) => ({
  marginTop: theme.spacing(5),
  marginLeft: theme.spacing(6),
  minWidth: '516px',
  minHeight: '98px',
}))

export const StyledAddButton = styled(Button)(({ theme }) => ({
  boxShadow: `0px 8px 24px 0px #D7D7D7`,
  '& .MuiTypography-root': {
    variant: 'body2',
  },
  '&:hover': {
    backgroundColor: theme.palette.primary[300],
    color: 'white',
  },
  minWidth: '135px',
  minHeight: '56px',
  backgroundColor: theme.palette.primary.main,
}))

export const StyledAddButtonBox = styled(Box)(({ theme }) => ({
  marginLeft: theme.spacing(53.5),
  marginTop: theme.spacing(10),
  marginBottom: theme.spacing(6),
}))

export const StyledTextField = styled(InputField)`
  width: 516px;
  height: 60px;
  @media (max-width: 600px) {
    width: 100%;
  }
  margin: 10px 0 0;
`
export  const StyledCancelButton = styled(Button)`
  width: 218px;
  height: 56px;
  @media (max-width: 600px) {
    width: 100%;
  }
  background-color: ${theme.palette.primary.main};
  :hover {
    background-color: ${theme.palette.primary.main};
  }
  box-sizing: border-box;
`
export const StyledModalBox = styled(Box)`
  width: 516px;
  @media (max-width: 700px) {
    width: 100%;
  }
  height: 191px;
  border-radius: 8px;
  margin: 10px 0 0;
  border: 1px solid ${theme.palette.Greys.stroke};
`
export const StyledSelectedOptionStack = styled(Stack)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 30px 0 10px;
`
export const StyledSelectableStack = styled(Stack)`
  height: 56px;
  display: grid;
  align-items: center;
  :hover {
    background-color: ${theme.palette.structuralColors.hoverColor};
  }
  margin: 10px 0;
  padding: 0 20px;
`
export const StyledCancelTheTransferButton = styled(Button)`
  color: ${theme.palette.primary.main};
  background-color: "white";
  :hover {
    background-color: ${theme?.palette?.structuralColors?.buttonHover};
  }
  width: 216px;
  height: 56px;
`


export const StyledBox1 = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginLeft: theme.spacing(13),
}))

export const HeadingBox = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(10),
  '& .MuiGrid-root': {
    maxWidth: '380px',
  },
}))

export const EditBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: theme.spacing(5),
  maxWidth: '516px',
}))

export const BuzDetailBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginBottom: theme.spacing(10),
  maxWidth: '516px',
  maxHeight: '60px',
}))

export const StyledInputBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(8),
  '& .MuiInputBase-input': {
    minWidth: '468px',
    paddingTop: theme.spacing(5),
  },
}))

export const AddressBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(8),
  '& .MuiInputBase-input': {
    minWidth: '516px',
  },
}))

export const DetailTypography = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(3),
}))

export const ButtonBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: theme.spacing(15),
  maxWidth: '100%',
}))

export const SaveButton = styled(Button)(({ theme }) => ({
  minWidth: '135px',
  minHeight: '56px',
  marginBottom: theme.spacing(6),
  boxShadow: `0px 8px 24px 0px #5533FF3D`,
  '& .MuiTypography-root': {
    variant: 'body2',
  },
}))

export const CancelButton = styled(Button)(({ theme }) => ({
  minWidth: '135px',
  minHeight: '56px',
  marginRight: theme.spacing(5),
  marginBottom: theme.spacing(6),
  boxShadow: `0px 8px 24px 0px #1414141F`,
  '& .MuiTypography-root': {
    variant: 'body2',
  },
  '&:hover': {
    border: 'none',
  },
  border: 'none',
}))
export const StyledDropdownBox = styled(Box)(({ theme }) => ({
  maxWidth: '516px',
  marginBottom: theme.spacing(7),
}))
export const TypoBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '448px',
  marginBottom: theme.spacing(13),
}))
export const MainContainer = styled(Box) ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
})

