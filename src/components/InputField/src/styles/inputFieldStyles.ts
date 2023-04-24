import styled, { css } from "styled-components";

interface Props {
  inputSize: string;
  isInvalid: boolean;
}

// interface TextareaProps {
//   isInvalid: boolean;
// }

export const TextInput = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
`;

const getSize = (size: string) => {
  if (size === "sm") return "32px";
  if (size === "lg") return "48px";

  return "40px";
};

export const InputWrapper = styled.div<Props>`
  box-sizing: border-box;

  width: 100%;
  height: ${(props) => getSize(props.inputSize)};

  padding: 0px 16px;
  display: flex;
  align-items: center;
  gap: 16px;
  background: #ffffff;
  border: 2px solid #666;
  border-radius: 6px;

  color: #a0aec0;

  &:hover {
    border: 2px solid #777;
  }

  &:has(${TextInput}:focus) {
    border: 2px solid #777;
  }

  &:has(${TextInput}:disabled) {
    opacity: 0.5;
  }

  ${(props) =>
    props.isInvalid &&
    css`
      border: 2px solid #e53e3e;
    `}
`;

export const WithError = styled.div`
  width: 100%;
  small {
    color: red;
  }
`;

export const SelectInputField = styled.div<{
  disabled: boolean;
  imageSize?: string;
  themeHsl: number;
  saturation?: string;
}>`
  position: relative;
  width: 100%;
  min-height: 1.5em;
  /* border: 0.1em solid #e2e8f0; */
  border: 2px solid #777;
  display: flex;
  align-items: center;
  gap: 0.5em;
  padding: 0.5em;
  border-radius: 0.25em;
  outline: none;

  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;
    `}

  &:focus {
    border-color: #3182ce;

    ${(props) =>
      props.disabled &&
      css`
        border-color: #e2e8f0;
      `}
  }

  .value {
    flex-grow: 1;
    display: flex;
    gap: 0.5em;
    flex-wrap: wrap;
    align-items: center;

    .query-input {
      flex: 1;
      border: none;
      outline: none;

      &:disabled {
        background-color: transparent;
      }
    }

    ${(props) =>
      props.disabled &&
      css`
        color: #e2e8f0;
      `}
  }

  .clear-btn {
    background: none;
    color: #777;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 0;
    font-size: 1.25em;
  }

  .clear-btn:focus,
  .clear-btn:hover {
    color: #333;
  }

  .divider {
    background-color: #777;
    align-self: stretch;
    width: 0.05em;
  }

  .caret {
    translate: 0 25%;
    border: 0.25em solid transparent;
    border-top-color: #777;
  }

  .options {
    position: absolute;
    margin: 0;
    padding: 0;
    list-style: none;
    display: none;
    max-height: 15em;
    overflow-y: auto;
    border: 0.05em solid #777;
    border-radius: 0.25em;
    width: 100%;
    left: 0;
    top: calc(100% + 0.25em);
    background-color: white;
    z-index: 100;
  }

  .options.show {
    display: block;
  }

  .thumbnail {
    width: ${(props) => props.imageSize};
    height: ${(props) => props.imageSize};
    border-radius: 100%;
  }

  .designation {
    font-size: 0.8em;
    color: #777;
    font-weight: 200;
  }

  .option {
    padding: 0.25em 0.5em;
    cursor: pointer;
    display: flex;
    gap: 0.5em;
    align-items: center;
    font-weight: 500;
  }

  .option.selected {
    background-color: hsl(
      ${(props) => props.themeHsl},
      ${(props) => props.saturation},
      70%
    );
  }

  .option.highlighted {
    background-color: hsl(
      ${(props) => props.themeHsl},
      ${(props) => props.saturation},
      50%
    );
    color: white;
  }

  .option.selected .designation,
  .option.highlighted .designation {
    color: #fff;
  }

  .option-badge {
    display: flex;
    align-items: center;
    border: 0.05em solid #e2e8f0;
    background-color: #e2e8f0;
    border-radius: 0.25em;
    padding: 0.15em 0.25em;
    gap: 0.25em;
    cursor: pointer;
    background: none;
    outline: none;

    ${(props) =>
      props.disabled &&
      css`
        color: #e2e8f0;
      `}
  }

  .option-badge:hover,
  .option-badge:focus {
    background-color: hsl(0, 100%, 90%);
    border-color: hsl(0, 100%, 50%);

    ${(props) =>
      props.disabled &&
      css`
        background-color: transparent;
        border-color: #e2e8f0;
      `}
  }

  .option-badge:hover > .remove-btn,
  .option-badge:focus > .remove-btn {
    color: hsl(0, 100%, 50%);

    ${(props) =>
      props.disabled &&
      css`
        color: #e2e8f0;
      `}
  }

  .option-badge > .remove-btn {
    font-size: 1.25em;
    color: #777;

    ${(props) =>
      props.disabled &&
      css`
        color: #e2e8f0;
      `}
  }

  .add-feature-btn {
    text-transform: capitalize;
    background-color: hsl(
      ${(props) => props.themeHsl},
      ${(props) => props.saturation},
      40%
    );
    color: white;
    padding: 0.5em;

    .add-feature-icon {
      font-size: 1.3em;
      rotate: 45deg;
      color: hsl(
        ${(props) => props.themeHsl},
        ${(props) => props.saturation},
        40%
      );
      line-height: 0;
      background-color: white;
      border-radius: 100%;
      width: 1.5em;
      height: 1.5em;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const TextAreaInputField = styled.textarea<any>`
  width: 100%;
  box-sizing: border-box;

  padding: 8px 16px;
  outline: none;

  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 6px;

  &:hover {
    border: 1px solid #cbd5e0;
  }

  &:focus {
    border: 2px solid #3182ce;
  }

  &:disabled {
    opacity: 0.5;
  }

  ${(props) =>
    props.isInvalid &&
    css`
      border: 2px solid #e53e3e;
    `}
`;
