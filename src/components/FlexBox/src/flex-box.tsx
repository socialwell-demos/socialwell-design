import React from "react";
import { FlexWrapper } from "./styles/flexBoxStyles";

export interface FlexProps {
  children: React.ReactNode;
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
  gap?: string;
  justifyContent?:
    | "normal"
    | "center"
    | "start"
    | "end"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "stretch"
    | "unset";
  justifyItems?:
    | "normal"
    | "stretch"
    | "center"
    | "start"
    | "end"
    | "flex-start"
    | "flex-end"
    | "unset";
  alignItems?:
    | "normal"
    | "stretch"
    | "center"
    | "start"
    | "end"
    | "flex-start"
    | "flex-end"
    | "unset";
  alignContent?:
    | "normal"
    | "center"
    | "start"
    | "end"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "stretch"
    | "unset";
  flex?: string;
  flexWrap?: "nowrap" | "wrap" | "wrap-reverse" | "unset";
  direction?: "row" | "row-reverse" | "column" | "column-reverse" | "unset";
  className?: string;
}

export const Flex: React.FC<FlexProps> = ({
  children,
  width = "auto",
  height = "auto",
  padding = "0",
  margin = "0",
  alignContent = "unset",
  alignItems = "unset",
  flex = "unset",
  flexWrap = "unset",
  direction = "unset",
  gap = "1rem",
  justifyContent = "unset",
  justifyItems = "unset",
  className = "",
}) => {
  return (
    <FlexWrapper
      {...{
        width,
        height,
        padding,
        margin,
        alignContent,
        alignItems,
        flex,
        direction,
        flexWrap,
        gap,
        justifyContent,
        justifyItems,
      }}
      className={className}
    >
      {children}
    </FlexWrapper>
  );
};
