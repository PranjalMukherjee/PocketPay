import { ComponentStory } from '@storybook/react'
import MobileVerification from './index'

export default {
  title: 'Organisms/MobileVerification',
  component: MobileVerification,
}

const Template: ComponentStory<typeof MobileVerification> = (args: any) => (
  <MobileVerification {...args} />
)

export const MobileNumberVerification = Template.bind({})
MobileNumberVerification.args = {}
