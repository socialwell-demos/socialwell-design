import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { LinkPreviewCard } from "../src";

export default {
  title: "Components/LinkPreviewCard",
  component: LinkPreviewCard,
} as ComponentMeta<typeof LinkPreviewCard>;

const Template: ComponentStory<typeof LinkPreviewCard> = (args) => (
  <LinkPreviewCard {...args} />
);

export const LinkCardPreview = Template.bind({});

LinkCardPreview.args = {
  link: "www.socialwell.net",
  title: "SocialWell",
};
