import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { MainTemplate } from '.';
import UserDetails from '../../organisms/UserDetails';
import { Stack } from '@mui/material';
import SignIn from '../../organisms/SigninForm';
import { STEPPER_LABELS } from '../../../utils/constants';

export default {
  title: 'templates/MainTemplate',
  component: MainTemplate
} as Meta<typeof MainTemplate>;

const template: StoryFn<typeof MainTemplate> = (args) => <MainTemplate {...args} />;

export const FillUser = template.bind({});
FillUser.args = {
  isCloseVisible: true,
  isStepperVisible: true,
  stepperValues: STEPPER_LABELS[2],
  presentValue: 2,
  isBackVisible: true,
  stepperWidth: '788px',
  children: (
    <div>
      <UserDetails />
    </div>
  )
};
export const SignInCard = template.bind({});
SignInCard.args = {
  children: (
    <Stack width={'1000px'}>
      <SignIn />
    </Stack>
  )
};
