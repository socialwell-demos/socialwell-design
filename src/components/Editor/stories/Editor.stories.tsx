import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { Editor } from "../src";

export default {
  title: "Components/Editor",
  component: Editor,
} as ComponentMeta<typeof Editor>;

const Template: ComponentStory<typeof Editor> = (args) => (
  <Editor handleChange={() => console.log("editor")} />
);

export const RichTextEditor = Template.bind({});
