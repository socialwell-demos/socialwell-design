/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentStory, ComponentMeta } from "@storybook/react";
import React, { useState } from "react";

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

const Template: ComponentStory<typeof SelectFormControl> = (args) => {
  const [select, setSelect] = useState({ label: "Select", value: "" });
  return (
    <SelectFormControl
      {...args}
      label="form label"
      value={select}
      onChange={(o: any) => setSelect(o as never)}
      options={options}
      multiple={false}
    />
  );
};

const MultiTemplate: ComponentStory<typeof SelectFormControl> = (args) => {
  const [select, setSelect] = useState([options[0]]);
  return (
    <SelectFormControl
      {...args}
      label="form label"
      value={select}
      onChange={(o: any) => setSelect(o as never)}
      options={options}
      multiple={true}
      searchable={true}
    />
  );
};

export const SelectFormWithLabel = Template.bind({});

export const MultiSelectFormWithLabel = MultiTemplate.bind({});
