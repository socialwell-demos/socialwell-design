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
const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const RadioField = Template.bind({});

RadioField.args = {};
