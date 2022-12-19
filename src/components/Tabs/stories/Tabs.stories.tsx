import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { Tabs } from "../src";

export default {
  title: "Components/Tabs",
  component: Tabs,
  argTypes: {
    isSolid: { control: "boolean", default: false },
  },
} as ComponentMeta<typeof Tabs>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Tab = Template.bind({});
Tab.args = {
  data: [
    { name: "tabs", isActive: true },
    { name: "tabs", isActive: false },
    { name: "tabs", isActive: false },
    { name: "tabs", isActive: false },
    { name: "tabs", isActive: false },
    { name: "tabs", isActive: false },
    { name: "tabs", isActive: false },
    { name: "tabs", isActive: false },
  ],
};
