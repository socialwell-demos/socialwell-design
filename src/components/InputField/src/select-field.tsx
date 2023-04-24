import React, { useEffect, useRef, useCallback, useState } from "react";
import { SelectInputField, WithError } from "./styles/inputFieldStyles";

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
  searchable?: boolean;
  addFeature?: boolean;
  addFeatureClick?: () => void;
  disabled?: boolean;
  imageSize?: string;
  themeHsl?: number;
  hasError?: React.ReactNode;
  themeHslSaturation?: string;
  hideClearButton?: boolean;
  onClear?: () => void;
  onClick?: () => void;
} & (SingleSelectProps | MultipleSelectProps);

export const SelectField: React.FC<SelectProps> = ({
  searchable = false,
  addFeature = false,
  multiple,
  value,
  onChange,
  onClear,
  onClick,
  addFeatureClick = () => console.log("add feature"),
  options,
  disabled = false,
  imageSize = "20px",
  themeHsl = 200,
  hasError,
  themeHslSaturation = "100%",
  hideClearButton = false,
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
            {addFeature && query.length > 0 && (
              <li
                className="option add-feature-btn"
                onClick={() => {
                  addFeatureClick();
                }}
              >
                <span className="add-feature-icon">&times;</span> add {query}
              </li>
            )}
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
      {hasError}
    </WithError>
  );
};
