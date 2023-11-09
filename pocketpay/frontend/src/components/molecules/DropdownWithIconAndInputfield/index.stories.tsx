import { ComponentStory } from '@storybook/react'
import {
  COUNTRYREGISTRATION,
  PURPOSEOFPOCKETPAY,
  SELECTACCOUNTOPTION,
  SELECT_COUNTRY,
  SELECT_CURRENCY,
  SELECT_OPTION,
  SELECT_UR_COUNTRY,
  TELL_US,
} from '../../../utils/constants'
import DropdownWithIconAndInputfield from './index'

export default {
  title: 'Molecules/DropdownWithIconAndInputfield',
  component: DropdownWithIconAndInputfield,
}

const Template: ComponentStory<typeof DropdownWithIconAndInputfield> = (args) => (
  <DropdownWithIconAndInputfield {...args} />
)

export const SelectCountry = Template.bind({})
SelectCountry.args = {
  placeholder: SELECT_UR_COUNTRY,
  data: COUNTRYREGISTRATION,
  label: SELECT_UR_COUNTRY,
  isCurrency: false,
  isLabelText: true,
}

export const CountryDropdownCountryIcon = Template.bind({})
CountryDropdownCountryIcon.args = {
  placeholder: SELECT_COUNTRY,
  data: [],
  label: SELECT_COUNTRY,
  currencyData: COUNTRYREGISTRATION,
  isCurrency: false,
  isLabelText: false,
}

export const CountryDropdownCurrencyIcon = Template.bind({})
CountryDropdownCurrencyIcon.args = {
  placeholder: SELECT_CURRENCY,
  data: [],
  label: SELECT_CURRENCY,
  currencyData: COUNTRYREGISTRATION,
  isCurrency: true,
  isLabelText: false,
}

export const SelectPurpose = Template.bind({})
SelectPurpose.args = {
  placeholder: TELL_US,
  data: PURPOSEOFPOCKETPAY,
  label: TELL_US,
  isCurrency: false,
  isLabelText: true,
}

export const SelectPurposeValue = Template.bind({})
SelectPurposeValue.args = {
  placeholder: SELECT_OPTION,
  data: SELECTACCOUNTOPTION,
  label: SELECT_OPTION,
  isCurrency: false,
  isLabelText: true,
  isCard:true
}
