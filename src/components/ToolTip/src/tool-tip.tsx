// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from "react";
import { Position, Tooltip } from "react-tippy";

export interface ToolTipsProps {
  children: React.ReactNode;
  text: string;
  position?: Position;
}
export const ToolTips: React.FC<ToolTipsProps> = ({
  children,
  text,
  position = "bottom",
}) => {
  return (
    <Tooltip title={`${text}`} arrow={true} position={`${position}`}>
      <span>{children}</span>
    </Tooltip>
  );
};
