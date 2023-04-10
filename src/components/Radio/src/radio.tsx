import React, { useMemo } from "react";
import { Label, RadioInput, Span } from "./styles/radioStyles";

export interface RadioProps {
  disabled?: boolean;
  label?: string;
  value?: string;
  className?: string;
  name?: string;
  radioColor?: string;
  size?: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export const Radio: React.FC<RadioProps> = ({
  onChange,
  disabled = false,
  label = "default",
  value,
  className = "",
  radioColor = "#3182ce",
  size = 20,
  name = "",
}) => {
  const randomLabel = useMemo(
    () => `${label}-${Math.round(Math.random() * 9999)}`,
    [label],
  );

  return (
    <Label htmlFor={randomLabel} title={label}>
      <RadioInput
        type="radio"
        id={randomLabel}
        onChange={onChange}
        disabled={disabled}
        className={className}
        value={value}
        name={name}
        radioColor={radioColor}
      />
      <Span
        size={size}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        style={{ cursor: "pointer" }}
      >
        <circle cx="12" cy="12" r="5" fill="#fff" />
      </Span>
      {label}
    </Label>
  );
};
