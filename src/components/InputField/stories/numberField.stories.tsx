import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { TextField } from "../src";

export default {
  title: "Components/InputField",
  component: TextField,
  argTypes: {
    disabled: { control: "boolean", default: false },
    // isInvalid: { control: "boolean", default: false },
  },
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
);

export const NumberInput = Template.bind({});

NumberInput.args = {
  type: "number",
};
