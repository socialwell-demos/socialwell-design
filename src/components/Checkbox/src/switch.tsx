import React from "react";
import { SwitchButton, SwitchInput, SwitchLabel } from "./styles/switchStyles";

export interface SwitchProps {
  size: "md" | "lg";
  isChecked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Switch: React.FC<SwitchProps> = ({
  size = "md",
  isChecked,
  onChange,
  ...restProps
}) => {
  return (
    <>
      <SwitchInput
        checked={isChecked}
        onChange={onChange}
        id={"react-switch-new"}
        type="checkbox"
        {...restProps}
      />
      <SwitchLabel htmlFor={"react-switch-new"} labelSize={size}>
        <SwitchButton btnSize={size} />
      </SwitchLabel>
    </>
  );
};
