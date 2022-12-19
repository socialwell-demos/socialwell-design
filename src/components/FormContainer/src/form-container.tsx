import React from "react";
import ArrowLg from "./ArrowLg";
import { Form, FormHeaderWrapper, Header } from "./styles/formContainerStyles";

export interface FormContainerProps {
  children: React.ReactNode;
  isActive?: boolean;
  title?: string;
  headerPaddingInline?: string;
  headerPaddingBlock?: string;
  rightSideContent?: React.ReactNode;
  handleClick?: () => void;
}

export const FormContainer: React.FC<FormContainerProps> = ({
  children,
  isActive = true,
  title,
  headerPaddingInline = "24px",
  headerPaddingBlock = "16px",
  rightSideContent,
  handleClick,
}) => {
  return (
    <FormHeaderWrapper>
      <Header
        paddingInline={headerPaddingInline}
        paddingBlock={headerPaddingBlock}
        isActive={isActive}
        onClick={handleClick}
      >
        <div className="title">{title}</div>
        <div className="header__wrapper">
          {rightSideContent}
          <ArrowLg reverse={isActive} />
        </div>
      </Header>
      <Form isActive={isActive}>{children}</Form>
    </FormHeaderWrapper>
  );
};
