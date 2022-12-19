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
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse" | "unset";
}

export const Flex: React.FC<FlexProps> = ({
  children,
  width = "100%",
  height = "100%",
  padding = "0",
  margin = "0",
  alignContent = "unset",
  alignItems = "unset",
  flex = "unset",
  flexWrap = "unset",
  flexDirection = "unset",
  gap = "1rem",
  justifyContent = "unset",
  justifyItems = "unset",
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
        flexDirection,
        flexWrap,
        gap,
        justifyContent,
        justifyItems,
      }}
    >
      {children}
    </FlexWrapper>
  );
};
