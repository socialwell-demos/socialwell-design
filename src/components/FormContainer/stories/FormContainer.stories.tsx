import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { FormContainer } from "../src";

export default {
  title: "Components/Form/FormContainer",
  component: FormContainer,
} as ComponentMeta<typeof FormContainer>;

const Template: ComponentStory<typeof FormContainer> = (args) => (
  <FormContainer {...args}>hello</FormContainer>
);

export const FormContainerPreview = Template.bind({});

FormContainerPreview.args = {
  title: "Form Container",
  rightSideContent: (
    <>
      <button>hello</button>
    </>
  ),
};
