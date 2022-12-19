import React from "react";
import { RadioField } from "./styles/radioStyles";

export interface RadioProps {
  isChecked: boolean;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const Radio: React.FC<RadioProps> = ({
  isChecked,
  onChange,
  disabled = false,
  ...restProps
}) => {
  return (
    <>
      <RadioField
        type="radio"
        checked={isChecked}
        onChange={onChange}
        disabled={disabled}
        {...restProps}
      />
    </>
  );
};
