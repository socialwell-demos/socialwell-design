import styled, { css } from "styled-components";

interface Props {
  inline: boolean;
  state: string;
}

export const AlertWrapper = styled.div<Props>`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 12px 16px;
  gap: 12px;
  border-radius: 6px;

  /* error state */
  ${(props) =>
    props.state === "error" &&
    css`
      background: #fed7d7;
    `}

  /* success state */
  ${(props) =>
    props.state === "success" &&
    css`
      background: #c6f6d5;
    `}

 /* warning state */
  ${(props) =>
    props.state === "warning" &&
    css`
      background: #feebcb;
    `}

    /* info state */
  ${(props) =>
    props.state === "info" &&
    css`
      background: #bee3f8;
    `}

  .content {
    display: flex;
    gap: 12px;
    align-items: center;
  }

  ${(props) =>
    props.inline &&
    css`
      .content-details {
        display: flex;
        gap: 12px;
      }
    `}

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;
export const Title = styled.div`
  font-weight: 700;
  font-size: 16px;
  color: #2d3748;
  box-sizing: border-box;
`;
export const Text = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: #2d3748;
  box-sizing: border-box;
`;
