import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { TextAreaField } from "../src";

export default {
  title: "Components/InputField",
  component: TextAreaField,
  argTypes: {
    disabled: { control: "boolean", default: false },
    isInvalid: { control: "boolean", default: false },
  },
} as ComponentMeta<typeof TextAreaField>;

const Template: ComponentStory<typeof TextAreaField> = (args) => (
  <TextAreaField {...args} />
);

export const TextAreaInput = Template.bind({});

TextAreaInput.args = {
  hasError: <small>this is an error</small>,
};
