import { ComponentStory } from '@storybook/react'
import DropdownData from './index'
import andorra from '../../../../public/assets/icons/andorra.svg'

export default {
  title: 'Molecules/DropdownData',
  component: DropdownData,
}

const Template: ComponentStory<typeof DropdownData> = (args) => (
  <DropdownData {...args} />
)
export const DropdownDetails = Template.bind({})
DropdownDetails.args = {
  icon: { image: andorra, name: 'Andorra', currency: 'EUR' },
}

export const DropdownDetailsValue = Template.bind({})
DropdownDetailsValue.args = {
  icon: { name: 'Ross Gener', value: 'Ending in 4656' },
}
