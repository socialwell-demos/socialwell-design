import styled, { css } from "styled-components";

export const Label = styled.label``;
export const CheckboxInput = styled.input`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  width: 1px;
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
`;

interface CheckboxProps {
  isActive: boolean;
  disabled: boolean;
  checkboxColor: string;
  size: number;
}

export const Span = styled.svg<CheckboxProps>`
  display: inline-block;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background-color: #fff;
  border: 2px solid #ddd;
  margin-right: 4px;
  border-radius: 2px;

  ${(props) =>
    props.isActive &&
    css<CheckboxProps>`
      border-color: ${(props) => props.checkboxColor};
      background-color: ${(props) => props.checkboxColor};
    `}

  ${(props) =>
    props.disabled &&
    css`
      border-color: #e2e8f0;
      background-color: #e2e8f0;
    `}
`;
