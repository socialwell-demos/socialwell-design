import React, { forwardRef } from "react";
import {
  CustomButton,
  OutlineButton,
  SolidButton,
} from "./styles/buttonStyles";

export interface CustomButtonProps {
  variant?: "custom";
  backgroundColor: string;
  color: string;
  borderWidth: number;
  paddingInline: number;
  paddingBlock: number;
}

export interface ColorButtonProps {
  variant?: "solid" | "outline";
  backgroundColor?: string;
  color?: string;
  borderWidth?: number;
  paddingInline?: number;
  paddingBlock?: number;
}

export type ButtonProps = {
  size?: "md" | "lg";
  name: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  type: "submit" | "button" | "reset";
  onClick?: () => void;
} & (ColorButtonProps | CustomButtonProps);

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "custom",
      name,
      size = "md",
      leftIcon,
      rightIcon,
      type = "submit",
      onClick,
      backgroundColor = "transparent",
      color = "black",
      borderWidth = 0,
      paddingInline = 0,
      paddingBlock = 0,
      ...restProps
    },
    ref,
  ): JSX.Element => {
    if (variant === "solid") {
      return (
        <SolidButton
          size={size}
          type={type}
          ref={ref}
          onClick={onClick}
          {...restProps}
        >
          {leftIcon}
          {name}
          {rightIcon}
        </SolidButton>
      );
    }
    if (variant === "outline") {
      return (
        <OutlineButton
          size={size}
          type={type}
          ref={ref}
          onClick={onClick}
          {...restProps}
        >
          {leftIcon}
          {name}
          {rightIcon}
        </OutlineButton>
      );
    }

    return (
      <CustomButton
        ref={ref}
        size={size}
        type={type}
        onClick={(e) => {
          e.stopPropagation();
          onClick?.call(e);
        }}
        backgroundColor={backgroundColor}
        color={color}
        borderWidth={borderWidth}
        paddingInline={paddingInline}
        paddingBlock={paddingBlock}
        {...restProps}
      >
        {leftIcon}
        {name}
        {rightIcon}
      </CustomButton>
    );
  },
);
