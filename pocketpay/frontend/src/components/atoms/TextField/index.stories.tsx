import {  IconButton, InputAdornment } from "@mui/material";
import { InputField, InputFieldProps } from ".";
import { Meta, StoryFn } from "@storybook/react";
import Visbility from "../../../../public/assets/images/visibility.svg";
import VisbilityOff from "../../../../public/assets/images/visibilityOff.svg";
import ImageComponent from "../Image";
const meta: Meta = {
  title: "atoms/InputField",
  component: InputField
};
export default meta;
const Templete: StoryFn<InputFieldProps> = (args) => <InputField {...args} />;
export const Default = Templete.bind({});
Default.args = {
  variant: "outlined",
  label: "First name",
  sx:{width:"516px"}
};
export const PasswordVisibleOff = Templete.bind({});
PasswordVisibleOff.args = {
  variant: "outlined",
  type: "password",
  label: "Password",
  sx:{width:"516px"},
  endAdornment: (
    <InputAdornment position="end">
      <IconButton aria-label="toggle password visibility" edge="end">
        <ImageComponent imgSrc={VisbilityOff} imgAlt="Toggle Password Visibility" />
      </IconButton>
    </InputAdornment>
  )
};
export const PasswordVisible = Templete.bind({});
PasswordVisible.args = {
  variant: "outlined",
  type: "text",
  label: "Password",
  sx:{width:"516px"},
  endAdornment: (
    <InputAdornment position="end">
      <IconButton aria-label="toggle password visibility" edge="end">
        <ImageComponent imgSrc={Visbility} imgAlt="Toggle Password Visibility" />
      </IconButton>
    </InputAdornment>
  )
};