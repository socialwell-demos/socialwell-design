import React, { forwardRef, useMemo } from "react";
import { CheckboxInput, Label, Span } from "./styles/checkboxStyles";

export interface CheckboxProps {
  disabled?: boolean;
  label?: string;
  value?: string;
  className?: string;
  checkboxColor?: string;
  size?: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox: React.ForwardRefExoticComponent<
  CheckboxProps & React.RefAttributes<HTMLInputElement>
> = forwardRef((props: CheckboxProps, ref) => {
  const {
    onChange,
    disabled = false,
    label = "default",
    value,
    className = "",
    checkboxColor = "#3182ce",
    size = 20,
  } = props;

  const randomLabel = useMemo(
    () => `${label}-${Math.random() * 9999}`,
    [label],
  );

  return (
    <Label htmlFor={`${randomLabel}`}>
      <CheckboxInput
        type="checkbox"
        id={`${randomLabel}`}
        onChange={onChange}
        disabled={disabled}
        className={className}
        value={value}
        checkboxColor={checkboxColor}
        ref={ref}
      />
      <Span size={size} aria-hidden="true" viewBox="0 0 15 11" fill="none">
        <path d="M3 5.8L7 9L12 1" strokeWidth="2" />
      </Span>
      {label}
    </Label>
  );
});
