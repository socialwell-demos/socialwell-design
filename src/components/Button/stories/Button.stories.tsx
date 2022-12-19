import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { Button } from "../src";

import { BtnLeftIcon } from "../../../assets";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    disabled: { control: "boolean", default: false },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const SolidButton = Template.bind({});

SolidButton.args = {
  variant: "solid",
  name: "Button",
};

export const SolidButtonWithIcon = Template.bind({});

SolidButtonWithIcon.args = {
  variant: "solid",
  name: "Button",
  leftIcon: <BtnLeftIcon />,
};

export const OutlineButton = Template.bind({});

OutlineButton.args = {
  variant: "outline",
  name: "Button",
};

export const CustomButton = Template.bind({});

CustomButton.args = {
  variant: "custom",
  name: "Button",
};
