/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { HTMLInputTypeAttribute, ReactNode, forwardRef } from "react";
import {
  InputWrapper,
  TextAreaInputField,
  TextInput,
  WithError,
} from "./styles/inputFieldStyles";

export interface InputTextProps {
  size?: "md" | "lg";
  icon?: ReactNode;
  isInvalid?: boolean;
  value: string;
  name?: string;
  placeholder?: string;
  hasError?: ReactNode;
  type: HTMLInputTypeAttribute;
  min?: number;
  max?: number;
  readonly?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

// export interface SelectProps {
//   children: React.ReactNode;
//   size?: "md" | "lg";
//   isInvalid?: boolean;
//   value: string;
//   name?: string;
//   onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
// }

export const TextField = forwardRef<HTMLInputElement, InputTextProps>(
  (props, ref) => {
    const {
      icon,
      size = "md",
      isInvalid = false,
      value,
      onChange,
      onBlur,
      onFocus,
      name = "",
      type = "text",
      placeholder,
      min,
      max,
      hasError,
      readonly = false,
      ...restProps
    } = props as any;
    return (
      <WithError>
        <InputWrapper inputSize={size} isInvalid={isInvalid}>
          {icon}
          <TextInput
            ref={ref}
            readOnly={readonly}
            value={value}
            name={name}
            type={type}
            min={min}
            max={max}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
            placeholder={placeholder}
            {...restProps}
          />
        </InputWrapper>
        {hasError}
      </WithError>
    );
  },
);

export interface TextareaProps {
  isInvalid?: boolean;
  value: string;
  name?: string;
  placeholder?: string;
  hasError?: ReactNode;
  readonly?: boolean;
  ref?: any;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export const TextAreaField = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => {
    const {
      isInvalid = false,
      value,
      name = "",
      placeholder,
      hasError,
      onChange,
      onBlur,
      onFocus,
      readonly = false,
      ...restProps
    } = props as any;
    return (
      <WithError>
        <TextAreaInputField
          {...restProps}
          ref={ref}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          isInvalid={isInvalid}
          name={name}
          placeholder={placeholder}
          readOnly={readonly}
        ></TextAreaInputField>
        {hasError}
      </WithError>
    );
  },
);
