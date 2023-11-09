import { Grid, styled } from "@mui/material";
import theme from "../../../theme";

export const StyledContainer = styled(Grid)({
    all: 'unset',
    display: 'flex',
    flexWrap: 'wrap',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: theme?.palette?.structuralColors?.white,
    bordercolor: theme?.palette?.structuralColors?.white,
    borderRadius: '1rem',
    padding: '1.5rem'
  });