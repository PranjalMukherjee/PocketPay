import React from 'react';
import { Box, styled } from '@mui/material';

export interface IconComponentProps {
  width?: string;
  height?: string;
  padding?: string;
  src: string;
  alt: string;
  onclick?: (event: any) => void;
  style?: React.CSSProperties
}

const StyledIcon = styled('img')((props: IconComponentProps) => ({
  height: props.height,
  width: props.width,
  padding: props.padding
}));

const IconComponent: React.FC<IconComponentProps> = ({
  src,
  alt,
  width,
  height,
  padding,
  onclick,
  style,
  ...props
}) => {
  return (
    <Box onClick={onclick}>
      <StyledIcon
        data-testid="iconComponent"
        src={src}
        height={height}
        width={width}
        padding={padding}
        alt={alt}
        style={style}
        {...props}
      />
    </Box>
  );
};

export default IconComponent;
