import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { Alert } from "../src";

export default {
  title: "Components/Alert",
  component: Alert,
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

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
