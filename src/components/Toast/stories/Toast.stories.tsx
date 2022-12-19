import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { Toast } from "../src";

export default {
  title: "Components/Toast",
  component: Toast,
} as ComponentMeta<typeof Toast>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Toast> = (args) => <Toast {...args} />;

export const SuccessAlert = Template.bind({});
SuccessAlert.args = {
  state: "success",
  title: "Title",
  description: "This is a description",
};

export const ErrorAlert = Template.bind({});
ErrorAlert.args = {
  state: "error",
  title: "Title",
  description: "This is a description",
};

export const WarningAlert = Template.bind({});
WarningAlert.args = {
  state: "warning",
  title: "Title",
  description: "This is a description",
};

export const InfoAlert = Template.bind({});
InfoAlert.args = {
  state: "info",
  title: "Title",
  description: "This is a description",
};
