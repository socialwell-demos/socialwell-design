import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { SelectFormControl } from "../src";
export default {
  title: "Components/SelectFormControl",
  component: SelectFormControl,
  argTypes: {
    disabled: { control: "boolean", default: false },
  },
} as ComponentMeta<typeof SelectFormControl>;

const options = [
  { label: "First", value: 1 },
  { label: "Second", value: 2 },
  { label: "Third", value: 3 },
  { label: "Fourth", value: 4 },
  { label: "Fifth", value: 5 },
];

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SelectFormControl> = (args) => (
  <SelectFormControl {...args} />
);

export const SelectFormWithLabel = Template.bind({});

SelectFormWithLabel.args = {
  label: "form label",
  multiple: false,
  value: { label: "First", value: 1 },
  onChange: () => console.log("log"),
  options: options,
};

export const MultiSelectFormWithLabel = Template.bind({});

MultiSelectFormWithLabel.args = {
  label: "form label",
  multiple: true,
  options: options,
  value: [
    { label: "First", value: 1 },
    { label: "Third", value: 3 },
  ],
  onChange: () => console.log("log"),
};
