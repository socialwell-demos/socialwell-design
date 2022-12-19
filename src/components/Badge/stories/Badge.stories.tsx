import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { Badge } from "../src";

export default {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    // backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Badge>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Solid = Template.bind({});

Solid.args = {
  variant: "solid",
  label: "default",
};

export const Outline = Template.bind({});
Outline.args = {
  variant: "outline",
  label: "default",
};

export const Suptle = Template.bind({});
Suptle.args = {
  variant: "subtle",
  label: "default",
};
