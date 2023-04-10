/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
  forwardRef,
  HTMLInputTypeAttribute,
  ReactNode,
  useCallback,
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
  disabled?: boolean;
  required?: boolean;
  onChange?: (
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
    disabled = false,
    onChange,
    onBlur,
    onFocus,
    required = false,
  } = props;
  const labelId = useMemo(() => `${label}-${Math.random() * 9999}`, [label]);
  if (inputType === "textarea") {
    return (
      <WithError>
        <FormControlWrapper>
          <div>
            <Label htmlFor={labelId}>{label}</Label>
            {required && (
              <span
                style={{
                  color: "red",
                }}
              >
                *
              </span>
            )}
          </div>
          <Textarea
            required={required}
            readOnly={readonly}
            disabled={disabled}
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
        <div>
          <Label htmlFor={labelId}>{label}</Label>
          {required && (
            <span
              style={{
                color: "red",
              }}
            >
              *
            </span>
          )}
        </div>
        <Input
          required={required}
          readOnly={readonly}
          disabled={disabled}
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

export type SelectFormControlProps = {
  label: string;
  options: SelectOption[];
  searchable?: boolean;
  disabled?: boolean;
  required?: boolean;
  hasError?: ReactNode;
  imageSize?: string;
  themeHsl?: number;
  themeHslSaturation?: string;
  hideClearButton?: boolean;
  onClear?: () => void;
  onClick?: () => void;
} & (SingleSelectProps | MultipleSelectProps);

export const SelectFormControl: React.FC<SelectFormControlProps> = ({
  searchable = false,
  multiple,
  value,
  onChange,
  onClear,
  onClick,
  options,
  hasError,
  disabled = false,
  required = false,
  imageSize = "20px",
  themeHsl = 200,
  themeHslSaturation = "100%",
  hideClearButton = false,
  label,
}) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  function clearOptions() {
    if (disabled) return;
    multiple ? onChange([]) : onChange(undefined);
  }

  function clearSearchOptions() {
    if (disabled) return;
    multiple === false && onChange(undefined);
  }

  const selectOptionCallback = useCallback(
    (option: SelectOption) => {
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
    },
    [disabled, multiple, value, onChange],
  );

  function isOptionSelected(option: SelectOption) {
    if (disabled) return;
    return multiple ? value.includes(option) : option === value;
  }

  useEffect(() => {
    if (isOpen) setHighlightedIndex(0);
  }, [isOpen]);

  useEffect(() => {
    const containerRefValue = containerRef.current;
    const inputRefValue = inputRef.current;
    const handler = (e: KeyboardEvent) => {
      if (disabled) return;
      if (e.target !== containerRefValue) return;
      switch (e.code) {
        case "Enter":
        case "Space":
          setIsOpen((prev) => !prev);
          if (isOpen) selectOptionCallback(options[highlightedIndex]);
          break;
        case "ArrowUp":
        case "ArrowDown": {
          e.preventDefault();
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

    const inputHandler = (e: KeyboardEvent) => {
      if (disabled) return;
      if (e.target !== inputRefValue) return;
      switch (e.code) {
        case "ArrowUp":
        case "ArrowDown": {
          e.preventDefault();
          containerRefValue?.focus();
          break;
        }
      }
    };

    containerRefValue?.addEventListener("keydown", handler);
    inputRefValue?.addEventListener("keydown", inputHandler);

    return () => {
      containerRefValue?.removeEventListener("keydown", handler);
      inputRefValue?.removeEventListener("keydown", inputHandler);
    };
  }, [isOpen, highlightedIndex, options, disabled, selectOptionCallback]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const containerRefValue = containerRef.current;
      if (
        containerRefValue &&
        !containerRefValue.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [containerRef, setIsOpen]);

  return (
    <WithError>
      <SelectWrapper>
        <div>
          <div className="label">{label}</div>
          {required && (
            <span
              style={{
                color: "red",
              }}
            >
              *
            </span>
          )}
        </div>
        <SelectInputField
          ref={containerRef}
          //   onBlur={() => setIsOpen(false)}
          onClick={() => {
            onClick && onClick();
            setIsOpen((prev) => !prev);
          }}
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
                      selectOptionCallback(v);
                    }}
                    className="option-badge"
                  >
                    {v.label}
                    <span className="remove-btn">&times;</span>
                  </button>
                ))
              : value?.label}
            {searchable && (
              <input
                type="text"
                className="query-input"
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={clearSearchOptions}
                disabled={disabled}
              />
            )}
          </span>
          {!hideClearButton && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  clearOptions();
                  setQuery("");
                  onClear && onClear();
                }}
                className="clear-btn"
              >
                &times;
              </button>
              <div className="divider"></div>
            </>
          )}
          <div className="caret"></div>
          {!disabled && (
            <ul className={`options ${isOpen ? "show" : ""}`}>
              {options
                .filter((value) =>
                  value.label.toLowerCase().includes(query.toLowerCase()),
                )
                .map((option, index) => (
                  <li
                    onClick={(e) => {
                      e.stopPropagation();
                      selectOptionCallback(option);
                      setIsOpen(false);
                      setQuery("");
                    }}
                    onMouseEnter={() => {
                      setHighlightedIndex(index);
                      inputRef.current?.blur();
                      //   setIsOpen(true);
                    }}
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
      </SelectWrapper>
      {hasError}
    </WithError>
  );
};
