import React from "react";
import { CheckboxInput, Label, Span } from "./styles/checkboxStyles";

export interface CheckboxProps {
  isChecked: boolean;
  disabled?: boolean;
  label?: string;
  checkboxColor?: string;
  size?: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export const Checkbox: React.FC<CheckboxProps> = ({
  isChecked,
  onChange,
  disabled = false,
  label = "default",
  checkboxColor = "#3182ce",
  size = 20,
}) => {
  const randomLabel = Math.random() * 99999;

  return (
    <Label htmlFor={`${label}-${randomLabel}`}>
      <CheckboxInput
        type="checkbox"
        id={`${label}-${randomLabel}`}
        onChange={onChange}
        disabled={disabled}
      />
      <Span
        isActive={isChecked}
        disabled={disabled}
        checkboxColor={checkboxColor}
        size={size}
        aria-hidden="true"
        viewBox="0 0 15 11"
        fill="none"
      >
        <path
          d="M3 5.8L7 9L12 1"
          strokeWidth="2"
          stroke={isChecked ? "#fff" : "none"}
        />
      </Span>
      {label}
    </Label>
  );
};
