import React from 'react';
interface ImageProps {
  imgSrc: string;
  imgAlt: string;
  testId?: string;
  imgHeight?: string;
  imgWidth?: string;
  style?: React.CSSProperties;
}

const ImageComponent = ({ imgSrc, imgAlt, testId, imgHeight, imgWidth, style }: ImageProps) => {
  return (
    <img
      src={imgSrc}
      alt={imgAlt}
      height={imgHeight}
      width={imgWidth}
      data-testid={testId}
      style={style}
    />
  );
};
export default ImageComponent;
