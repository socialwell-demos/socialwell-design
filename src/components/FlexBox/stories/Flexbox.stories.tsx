import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { Flex } from "../src";

export default {
  title: "Components/Flex",
  component: Flex,
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => (
  <Flex {...args}>
    <div style={{ backgroundColor: "red", padding: "16px", color: "white" }}>
      box 1
    </div>
    <div style={{ backgroundColor: "blue", padding: "16px", color: "white" }}>
      box 2
    </div>
  </Flex>
);

export const Flexbox = Template.bind({});
