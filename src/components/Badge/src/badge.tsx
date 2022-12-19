import React from "react";
import { BadgeWrapper } from "./styles/badgeStyles";

export interface BadgeProps {
  variant: "solid" | "outline" | "subtle";
  label?: string;
}

export const Badge: React.FC<BadgeProps> = ({ variant, label = "Default" }) => {
  return <BadgeWrapper variant={variant}>{label}</BadgeWrapper>;
};
