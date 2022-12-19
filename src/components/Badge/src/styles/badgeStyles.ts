import styled, { css } from "styled-components";

interface Props {
  variant: "solid" | "outline" | "subtle";
}

export const BadgeWrapper = styled.span<Props>`
  box-sizing: border-box;
  width: fit-content;
  height: 18px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 4px;
  gap: 10px;
  text-transform: uppercase;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  border-radius: 2px;

  ${(props) =>
    props.variant === "solid"
      ? css`
          color: white;
          background: #718096;
          border: 1px solid transparent;
        `
      : ""}

  ${(props) =>
    props.variant === "outline"
      ? css`
          color: #718096;
          background: transparent;
          border: 1px solid #718096;
        `
      : ""}

  ${(props) =>
    props.variant === "subtle"
      ? css`
          color: #1a202c;
          background: #edf2f7;
          border: 1px solid transparent;
        `
      : ""}
`;
