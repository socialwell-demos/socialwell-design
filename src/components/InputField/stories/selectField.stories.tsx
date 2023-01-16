import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { useState } from "react";
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
  const [select, setSelect] = useState({ label: "Select", value: "" });
  return (
    <SelectField
      value={select}
      onChange={(o: any) => setSelect(o as never)}
      options={options}
      multiple={false}
    />
  );
};

const SearchTemplate: ComponentStory<typeof SelectField> = (args) => {
  const [select, setSelect] = useState({ label: "Select", value: "" });
  return (
    <SelectField
      value={select}
      onChange={(o: any) => setSelect(o as never)}
      options={options}
      multiple={false}
      searchable={true}
    />
  );
};

const MultiTemplate: ComponentStory<typeof SelectField> = (args) => {
  const [select, setSelect] = useState([options[0]]);
  return (
    <SelectField
      value={select}
      onChange={(o: any) => setSelect(o as never)}
      options={options}
      multiple={true}
      searchable={true}
    />
  );
};

export const SelectInput = Template.bind({});

export const SearchSelectInput = SearchTemplate.bind({});

export const MultiSelectInput = MultiTemplate.bind({});
