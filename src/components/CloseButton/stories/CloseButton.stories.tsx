import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { CloseButton } from "../src";
import InfoIcon from "./info";

export default {
  title: "Components/CloseButton",
  component: CloseButton,
  argTypes: { disabled: { control: "boolean", default: false } },
} as ComponentMeta<typeof CloseButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CloseButton> = (args) => (
  <CloseButton {...args} />
);

export const CloseIconButton = Template.bind({});
export const DifferentIconButton = Template.bind({});

DifferentIconButton.args = {
  icon: <InfoIcon />,
};
