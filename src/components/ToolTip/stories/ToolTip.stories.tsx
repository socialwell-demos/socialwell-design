import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { ToolTips } from "../src";
import "react-tippy/dist/tippy.css";
export default {
  title: "Components/Tooltips",
  component: ToolTips,
} as ComponentMeta<typeof ToolTips>;

const Template: ComponentStory<typeof ToolTips> = (args) => (
  <div style={{ display: "grid", placeItems: "center", height: "100vh" }}>
    <ToolTips {...args}>
      <h1>Here’s a regular</h1>
    </ToolTips>
  </div>
);

export const BottomToolTip = Template.bind({});

BottomToolTip.args = {
  text: "Here’s a regular tooltip with some text inside of it that’s supposed to be substantially large.",
  position: "bottom",
};
