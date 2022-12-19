import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { Avatar } from "../src";

export default {
  title: "Components/Avatar",
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const AvatarImage = Template.bind({});

AvatarImage.args = {
  useName: "john doe",
};

export const AvatarProfileImage = Template.bind({});

AvatarProfileImage.args = {
  src: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
};
