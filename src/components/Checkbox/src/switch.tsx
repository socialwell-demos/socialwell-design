import React, { useMemo } from "react";
import { SwitchButton, SwitchInput, SwitchLabel } from "./styles/switchStyles";

export interface SwitchProps {
  label?: string;
  size: "md" | "lg";
  isChecked: boolean;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Switch: React.FC<SwitchProps> = ({
  label = "default",
  size = "md",
  isChecked,
  value,
  onChange,
}) => {
  const randomLabel = useMemo(
    () => `${label}-${Math.round(Math.random() * 9999)}`,
    [label],
  );

  return (
    <>
      <SwitchInput
        checked={isChecked}
        value={value}
        onChange={onChange}
        id={randomLabel}
        type="checkbox"
      />
      <SwitchLabel htmlFor={randomLabel} labelSize={size}>
        <SwitchButton btnSize={size} />
      </SwitchLabel>
    </>
  );
};
