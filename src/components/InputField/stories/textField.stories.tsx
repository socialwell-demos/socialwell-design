import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { TextField } from "../src";
import { BtnLeftIcon } from "../../../assets";

export default {
  title: "Components/InputField",
  component: TextField,
  argTypes: {
    disabled: { control: "boolean", default: false },
    isInvalid: { control: "boolean", default: false },
  },
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
);

export const TextInput = Template.bind({});
export const TextInputWithIcon = Template.bind({});

TextInputWithIcon.args = {
  icon: <BtnLeftIcon />,
};
