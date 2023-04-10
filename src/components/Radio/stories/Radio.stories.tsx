import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { Radio } from "../src";

export default {
  title: "Components/Radio",
  component: Radio,
  argTypes: {
    disabled: { control: "boolean", default: false },
    // isInvalid: { control: "boolean", default: false },
  },
} as ComponentMeta<typeof Radio>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Radio> = (args) => {
  return (
    <>
      <Radio {...args} label="radio 1" value="1" />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <Radio {...args} label="radio 2" value="2" />
    </>
  );
};

export const RadioField = Template.bind({});

RadioField.args = {
  name: "default",
  // onChange: (e) => {
  //   console.log(e.target.value);
  // },
};
