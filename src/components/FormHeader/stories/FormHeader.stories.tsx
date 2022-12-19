import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { FormHeader } from "../src";

export default {
  title: "Components/Form/FormHeader",
  component: FormHeader,
} as ComponentMeta<typeof FormHeader>;

const Template: ComponentStory<typeof FormHeader> = (args) => (
  <FormHeader {...args} />
);

export const FormHeaderPreview = Template.bind({});

FormHeaderPreview.args = {
  title: "add something",
  progressData: [
    { title: "progress 1", isActive: true },
    { title: "progress 2", isActive: false },
    { title: "progress 3", isActive: false },
    { title: "progress 4", isActive: false },
    { title: "progress 5", isActive: false },
  ],
};
