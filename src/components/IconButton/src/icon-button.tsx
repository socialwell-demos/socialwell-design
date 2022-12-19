import React from "react";
import { Button } from "./styles/iconBtnStyles";

export interface IconButtonProps {
  variant?: "outline" | "ghost";
  size?: "md" | "lg";
  onClick?: () => void;
  icon: React.ReactNode;
}

export const IconButton: React.FC<IconButtonProps> = ({
  variant = "outline",
  icon,
  size = "md",
  onClick,
  ...restProps
}) => {
  return (
    <Button variant={variant} btnSize={size} onClick={onClick} {...restProps}>
      {icon}
    </Button>
  );
};
