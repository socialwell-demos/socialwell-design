import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { NextLink } from "../src";

export default {
  title: "Components/NextLinks",
  component: NextLink,
} as ComponentMeta<typeof NextLink>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NextLink> = (args) => (
  <NextLink {...args} />
);

export const Link = Template.bind({});

Link.args = {
  linkName: "Resources",
};
