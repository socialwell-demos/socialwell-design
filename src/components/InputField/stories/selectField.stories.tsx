import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { SelectField } from "../src";
export default {
  title: "Components/InputField",
  component: SelectField,
  argTypes: {
    disabled: { control: "boolean", default: false },
    // isInvalid: { control: "boolean", default: false },
  },
} as ComponentMeta<typeof SelectField>;

const options = [
  {
    label: "First",
    value: 1,
    thumbnail: "https://picsum.photos/200",
    designation: "First University",
  },
  { label: "Second", value: 2 },
  { label: "Third", value: 3 },
  { label: "Fourth", value: 4 },
  { label: "Fifth", value: 5 },
];

const Template: ComponentStory<typeof SelectField> = (args) => {
  return <SelectField {...args} />;
};

export const SelectInput = Template.bind({});

SelectInput.args = {
  multiple: false,
  value: { label: "First", value: 1 },
  onChange: () => console.log("log"),
  options: options,
};

export const MultiSelectInput = Template.bind({});

MultiSelectInput.args = {
  multiple: true,
  options: options,
  value: [
    { label: "First", value: 1 },
    { label: "Third", value: 3 },
  ],
  onChange: () => console.log("log"),
};
