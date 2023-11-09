import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ProfileMenu from './index'
import { USER_MENU } from '../../../utils/constants'

export default {
  title: 'Organisms/ProfileMenu',
  component: ProfileMenu,
} as ComponentMeta<typeof ProfileMenu>

const Template: ComponentStory<typeof ProfileMenu> = (args) => (
  <ProfileMenu {...args} />
)

export const Menu = Template.bind({})
Menu.args = {
  userName:  USER_MENU,
  isOpen: true,
}
