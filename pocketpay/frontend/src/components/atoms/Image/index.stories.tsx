import ImageComponent from '.';
import type { Meta, StoryObj } from '@storybook/react';
import HOME_IMAGE from '../../../../public/assets/images/HomeImage.svg';
import SHARE_LINK from '../../../../public/assets/images/ShareLink.svg';
import { NOT_FOUND } from '../../../utils/constants';

const meta = {
  title: 'atoms/Image',
  component: ImageComponent
} satisfies Meta<typeof ImageComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HomeInitialImage: Story = {
  args: {
    imgSrc: HOME_IMAGE,
    imgAlt: NOT_FOUND,
    imgWidth: '300px', 
    imgHeight: '300px',
  }
};

export const ShareLinkImage: Story = {
  args: {
    imgSrc: SHARE_LINK,
    imgAlt: NOT_FOUND,
    imgWidth: '258px', 
    imgHeight: '160px'
  }
};
