import styled from "styled-components";

export const Label = styled.label`
  user-select: none;
  display: flex;
  align-items: center;
`;

export const Span = styled.svg<{ size: number }>`
  display: inline-block;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background-color: #fff;
  border: 2px solid #ddd;
  margin-right: 4px;
  border-radius: 2px;
`;

export const CheckboxInput = styled.input<{ checkboxColor: string }>`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  width: 1px;
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;

  &:checked + ${Span} {
    border-color: ${(props) => props.checkboxColor};
    background-color: ${(props) => props.checkboxColor};
  }

  & + ${Span} path {
    stroke: none;
  }

  &:checked + ${Span} path {
    stroke: #fff;
  }

  &:disabled + ${Span} {
    border-color: #e2e8f0;
    background-color: #e2e8f0;
  }
`;
