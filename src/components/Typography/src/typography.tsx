import React, { FC } from "react";
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyH5,
  TypographyH6,
  TypographyText,
} from "./styles/typographyStyles";

export interface TypographyProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  content: string;
  className?: string;
  size?: string;
  weight?: string;
  lineHeight?: string;
  color?: string;
}

export const Typography: FC<TypographyProps> = ({
  as = "h1",
  content,
  className = "",
  size = "",
  weight = "700",
  lineHeight = "normal",
  color = "black",
}) => {
  if (as === "h2")
    return (
      <TypographyH2
        size={size}
        fontWeight={weight}
        lineHeight={lineHeight}
        color={color}
        className={className}
      >
        {content}
      </TypographyH2>
    );
  if (as === "h3")
    return (
      <TypographyH3
        size={size}
        fontWeight={weight}
        lineHeight={lineHeight}
        color={color}
        className={className}
      >
        {content}
      </TypographyH3>
    );
  if (as === "h4")
    return (
      <TypographyH4
        size={size}
        fontWeight={weight}
        lineHeight={lineHeight}
        color={color}
        className={className}
      >
        {content}
      </TypographyH4>
    );
  if (as === "h5")
    return (
      <TypographyH5
        size={size}
        fontWeight={weight}
        lineHeight={lineHeight}
        color={color}
        className={className}
      >
        {content}
      </TypographyH5>
    );
  if (as === "h6")
    return (
      <TypographyH6
        size={size}
        fontWeight={weight}
        lineHeight={lineHeight}
        color={color}
        className={className}
      >
        {content}
      </TypographyH6>
    );
  if (as === "p")
    return (
      <TypographyText
        size={size}
        fontWeight={weight}
        lineHeight={lineHeight}
        color={color}
        className={className}
      >
        {content}
      </TypographyText>
    );
  return (
    <TypographyH1
      size={size}
      fontWeight={weight}
      lineHeight={lineHeight}
      color={color}
      className={className}
    >
      {content}
    </TypographyH1>
  );
};
