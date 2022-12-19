import styled, { css } from "styled-components";

export const SwitchInput = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
`;

export const SwitchLabel = styled.label<{ labelSize: string }>`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 34px;
  height: 20px;

  ${(props) =>
    props.labelSize === "lg" &&
    css`
      width: 50px;
      height: 28px;
    `}

  background: #cbd5e0;
  ${SwitchInput}:checked + & {
    background: #3182ce;
  }
  border-radius: 100px;
  position: relative;
  transition: background-color 0.2s;

  ${SwitchInput}:disabled + & {
    opacity: 0.5;
  }

  ${SwitchInput}:disabled:checked + & {
    opacity: 0.5;
  }
`;

export const SwitchButton = styled.span<{ btnSize: string }>`
  content: "";
  position: absolute;
  top: 2px;
  left: 2px;
  width: 16px;
  height: 16px;

  ${(props) =>
    props.btnSize === "lg" &&
    css`
      width: 24px;
      height: 24px;
    `}

  border-radius: 45px;
  transition: 0.2s;
  background: #fff;
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);

  ${SwitchInput}:checked + ${SwitchLabel} & {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }

  ${SwitchLabel}:active & {
    width: 19px;

    ${(props) =>
      props.btnSize === "lg" &&
      css`
        width: 30px;
      `}
  }
`;
