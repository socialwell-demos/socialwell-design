import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { DiceAvatar } from "../src";

export default {
  title: "Components/DiceAvatar",
  component: DiceAvatar,
} as ComponentMeta<typeof DiceAvatar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DiceAvatar> = (args) => (
  <DiceAvatar {...args} />
);

export const DiceAvatarImage = Template.bind({});

DiceAvatarImage.args = {
  useName: "john doe",
};

export const DiceAvatarProfileImage = Template.bind({});

DiceAvatarProfileImage.args = {
  src: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
};
