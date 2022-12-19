/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
  forwardRef,
  HTMLInputTypeAttribute,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  InputWrapper,
  TextInput,
  SelectInputField,
  TextAreaInputField,
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

export type SelectOption = {
  label: string;
  value: string | number;
  thumbnail?: string;
  designation?: string;
};

export type SelectOptionWithUser = {
  label: string;
  value: string | number;
  thumbnail?: string;
  designation?: string;
};

type MultipleSelectProps = {
  multiple: true;
  value: SelectOption[];
  onChange: (value: SelectOption[]) => void;
};

type SingleSelectProps = {
  multiple?: false;
  value?: SelectOption;
  onChange: (value: SelectOption | undefined) => void;
};

export type SelectProps = {
  options: SelectOption[];
  disabled?: boolean;
  imageSize?: string;
  themeHsl?: number;
  themeHslSaturation?: string;
} & (SingleSelectProps | MultipleSelectProps);

export const SelectField: React.FC<SelectProps> = ({
  multiple,
  value,
  onChange,
  options,
  disabled = false,
  imageSize = "20px",
  themeHsl = 200,
  themeHslSaturation = "100%",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  function clearOptions() {
    if (disabled) return;
    multiple ? onChange([]) : onChange(undefined);
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function selectOption(option: SelectOption) {
    if (disabled) return;

    if (multiple) {
      if (value.includes(option)) {
        onChange(value.filter((o) => o !== option));
      } else {
        onChange([...value, option]);
      }
    } else {
      if (option !== value) onChange(option);
    }
  }

  function isOptionSelected(option: SelectOption) {
    if (disabled) return;
    return multiple ? value.includes(option) : option === value;
  }

  useEffect(() => {
    if (isOpen) setHighlightedIndex(0);
  }, [isOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (disabled) return;
      if (e.target !== containerRef.current) return;
      switch (e.code) {
        case "Enter":
        case "Space":
          setIsOpen((prev) => !prev);
          if (isOpen) selectOption(options[highlightedIndex]);
          break;
        case "ArrowUp":
        case "ArrowDown": {
          if (!isOpen) {
            setIsOpen(true);
            break;
          }

          const newValue = highlightedIndex + (e.code === "ArrowDown" ? 1 : -1);
          if (newValue >= 0 && newValue < options.length) {
            setHighlightedIndex(newValue);
          }
          break;
        }
        case "Escape":
          setIsOpen(false);
          break;
      }
    };
    containerRef.current?.addEventListener("keydown", handler);

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      containerRef.current?.removeEventListener("keydown", handler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, highlightedIndex, options]);
  return (
    <SelectInputField
      ref={containerRef}
      onBlur={() => setIsOpen(false)}
      onClick={() => setIsOpen((prev) => !prev)}
      tabIndex={0}
      disabled={disabled}
      imageSize={imageSize}
      saturation={themeHslSaturation}
      themeHsl={themeHsl}
    >
      <span className="value">
        {multiple
          ? value.map((v) => (
              <button
                type="button"
                key={v.value}
                onClick={(e) => {
                  e.stopPropagation();
                  selectOption(v);
                }}
                className="option-badge"
              >
                {v.label}
                <span className="remove-btn">&times;</span>
              </button>
            ))
          : value?.label}
      </span>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          clearOptions();
        }}
        className="clear-btn"
      >
        &times;
      </button>
      <div className="divider"></div>
      <div className="caret"></div>
      {!disabled && (
        <ul className={`options ${isOpen ? "show" : ""}`}>
          {options.map((option, index) => (
            <li
              onClick={(e) => {
                e.stopPropagation();
                selectOption(option);
                setIsOpen(false);
              }}
              onMouseEnter={() => setHighlightedIndex(index)}
              key={option.value}
              className={`option ${
                isOptionSelected(option) ? "selected" : ""
              } ${index === highlightedIndex ? "highlighted" : ""}`}
            >
              {option.thumbnail && (
                <img
                  className="thumbnail"
                  src={option.thumbnail}
                  alt={option.label}
                  aria-hidden="true"
                />
              )}
              {option.label}
              {option.designation && (
                <span className="designation">{option.designation}</span>
              )}
            </li>
          ))}
        </ul>
      )}
    </SelectInputField>
  );
};

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
