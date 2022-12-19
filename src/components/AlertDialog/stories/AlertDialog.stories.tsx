import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { AlertDialog } from "../src";

export default {
  title: "Components/AlertDialog",
  component: AlertDialog,
} as ComponentMeta<typeof AlertDialog>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AlertDialog> = (args) => (
  <AlertDialog {...args} />
);

export const AlertDialogBottomLeft = Template.bind({});

AlertDialogBottomLeft.args = {
  title: "Delete user",
  text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error corporis omnis, facere aliquid vitae dolore.",
};
