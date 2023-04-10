import React, { forwardRef } from "react";
import {
  CustomButton,
  OutlineButton,
  SolidButton,
} from "./styles/buttonStyles";
import LoadingIcon from "./loading-icon";

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
  loading?: boolean;
  disabled?: boolean;
  loadingIconColor?: string;
  loadingIconSize?: string;
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
      disabled = false,
      loading = false,
      loadingIconColor = "#fff",
      loadingIconSize = "36",
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
          disabled={disabled || loading}
          onClick={onClick}
          {...restProps}
        >
          {loading ? (
            <>
              <LoadingIcon size={loadingIconSize} color={loadingIconColor} />
            </>
          ) : (
            <>
              {leftIcon}
              {name}
              {rightIcon}
            </>
          )}
        </SolidButton>
      );
    }
    if (variant === "outline") {
      return (
        <OutlineButton
          size={size}
          type={type}
          ref={ref}
          disabled={disabled || loading}
          onClick={onClick}
          {...restProps}
        >
          {loading ? (
            <>
              <LoadingIcon size={loadingIconSize} color={loadingIconColor} />
            </>
          ) : (
            <>
              {leftIcon}
              {name}
              {rightIcon}
            </>
          )}
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
        disabled={disabled || loading}
        backgroundColor={backgroundColor}
        color={color}
        borderWidth={borderWidth}
        paddingInline={paddingInline}
        paddingBlock={paddingBlock}
        {...restProps}
      >
        {loading ? (
          <>
            <LoadingIcon size={loadingIconSize} color={loadingIconColor} />
          </>
        ) : (
          <>
            {leftIcon}
            {name}
            {rightIcon}
          </>
        )}
      </CustomButton>
    );
  },
);
