import styled, { css } from "styled-components";

interface Props {
  variant: string;
  btnSize: string;
}

export const Button = styled.button<Props>`
  box-sizing: border-box;

  width: ${(props) => (props.btnSize === "md" ? "40px" : "48px")};
  height: ${(props) => (props.btnSize === "md" ? "40px" : "48px")};
  background: none;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #e2e8f0;

  ${(props) =>
    props.variant === "ghost" &&
    css`
      border: none;
    `}

  &:hover {
    background: #edf2f7;
  }

  &:active {
    background: #e2e8f0;
  }

  &:disabled {
    opacity: 0.5;
  }
`;
