import styled, { css } from "styled-components";

export const Dialogwrapper = styled.div<{ position: string }>`
  box-sizing: border-box;
  position: fixed;
  width: 448px;
  height: 172px;
  background: #ffffff;
  padding: 16px 24px;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1),
    0px 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: 6px;

  top: auto;
  right: auto;
  bottom: 10px;
  left: 10px;

  ${(props) =>
    props.position === "topLeft" &&
    css`
      top: 10px;
      right: auto;
      bottom: auto;
      left: 10px;
    `}

  ${(props) =>
    props.position === "topRight" &&
    css`
      top: 10px;
      right: 10px;
      bottom: auto;
      left: auto;
    `}

  ${(props) =>
    props.position === "bottomRight" &&
    css`
      top: auto;
      right: 10px;
      bottom: 10px;
      left: auto;
    `}

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .title {
    font-weight: 700;
    font-size: 18px;
  }

  .icon {
    cursor: pointer;
  }

  p {
    margin-block: 16px;
    color: #2d3748;
  }

  .btn {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 12px;
  }

  button {
    border: none;
    padding: 10px 16px;
    width: fit-content;
    height: 40px;
    background: #e2e8f0;
    border-radius: 6px;
    text-transform: capitalize;
    cursor: pointer;

    &.delete {
      background-color: #e53e3e;
      color: white;
    }
  }
`;
