/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
  forwardRef,
  HTMLInputTypeAttribute,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  FormControlWrapper,
  Input,
  Label,
  SelectInputField,
  SelectWrapper,
  Textarea,
  WithError,
} from "./styles/formControlStyles";

export interface FormControlProps {
  inputType: "text" | "select" | "textarea";
  size?: "sm" | "md";
  label: string;
  type?: HTMLInputTypeAttribute;
  value: string;
  name: string;
  min?: number;
  max?: number;
  placeholder?: string;
  hasError?: ReactNode;
  readonly?: boolean;
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => void;
  onBlur?: (
    e:
      | React.FocusEvent<HTMLInputElement>
      | React.FocusEvent<HTMLTextAreaElement>,
  ) => void;
  onFocus?: (
    e:
      | React.FocusEvent<HTMLInputElement>
      | React.FocusEvent<HTMLTextAreaElement>,
  ) => void;
}

export const FormControl = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  FormControlProps
>((props, ref): JSX.Element => {
  const {
    inputType = "text",
    size = "md",
    label,
    name,
    value,
    type = "text",
    placeholder,
    min,
    max,
    hasError,
    readonly = false,
    onChange,
    onBlur,
    onFocus,
  } = props;
  const labelId = useMemo(() => `${label}-${Math.random() * 9999}`, [label]);
  if (inputType === "textarea") {
    return (
      <WithError>
        <FormControlWrapper>
          <Label htmlFor={labelId}>{label}</Label>
          <Textarea
            readOnly={readonly}
            id={labelId}
            value={value}
            name={name}
            max={max}
            ref={ref}
            min={min}
            placeholder={placeholder}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
          />
        </FormControlWrapper>
        {hasError}
      </WithError>
    );
  }
  return (
    <WithError>
      <FormControlWrapper>
        <Label htmlFor={labelId}>{label}</Label>
        <Input
          readOnly={readonly}
          inputSize={size}
          type={type}
          id={labelId}
          name={name}
          value={value}
          max={max}
          ref={ref}
          min={min}
          placeholder={placeholder}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </FormControlWrapper>
      {hasError}
    </WithError>
  );
});

export type SelectOption = {
  label: string;
  value: string | number;
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

export type SelectFormControlProps = {
  options: SelectOption[];
  disabled?: boolean;
  label: string;
} & (SingleSelectProps | MultipleSelectProps);

export const SelectFormControl: React.FC<SelectFormControlProps> = ({
  multiple,
  value,
  onChange,
  options,
  disabled = false,
  label,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  function clearOptions() {
    multiple ? onChange([]) : onChange(undefined);
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function selectOption(option: SelectOption) {
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
    return multiple ? value.includes(option) : option === value;
  }

  useEffect(() => {
    if (isOpen) setHighlightedIndex(0);
  }, [isOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
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
    <SelectWrapper>
      <div className="label">{label}</div>
      <SelectInputField
        ref={containerRef}
        onBlur={() => setIsOpen(false)}
        onClick={() => setIsOpen((prev) => !prev)}
        tabIndex={0}
        disabled={disabled}
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
              {option.label}
            </li>
          ))}
        </ul>
      </SelectInputField>
    </SelectWrapper>
  );
};
