import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { Switch } from "../src";

export default {
  title: "Components/Switch",
  component: Switch,
  argTypes: { disabled: { control: "boolean", default: false } },
} as ComponentMeta<typeof Switch>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const SwitchField = Template.bind({});
