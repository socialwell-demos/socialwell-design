import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { Typography } from "../src";

export default {
  title: "Components/Typography",
  component: Typography,
} as ComponentMeta<typeof Typography>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
);

export const Heading1 = Template.bind({});
Heading1.args = {
  as: "h1",
  content: "this is heading",
};
