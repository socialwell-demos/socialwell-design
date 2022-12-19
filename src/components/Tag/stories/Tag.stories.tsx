import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { Tag } from "../src";

export default {
  title: "Components/Tags",
  component: Tag,
} as ComponentMeta<typeof Tag>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const Tags = Template.bind({});

Tags.args = {
  label: "Hello",
};
