import styled, { css } from "styled-components";

export const TabContainerLink = styled.ul<{ isSolid: boolean }>`
  width: 100%;
  box-sizing: border-box;

  display: flex;
  gap: 20px;
  list-style: none;

  li {
    padding: 8px;
    text-transform: capitalize;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    color: #4a5568;

    &.active,
    &:hover {
      border-bottom: 2px solid #2b6cb0;
      color: #2b6cb0;
    }

    ${(props) =>
      props.isSolid &&
      css`
        width: fit-content;
        border-radius: 9999px;
        border-bottom: none;

        &.active,
        &:hover {
          background: #2b6cb0;
          color: white;
          border-bottom: none;
        }
      `}
  }
`;

export const TabContainerButton = styled.ul<{ isSolid: boolean }>`
  width: 100%;
  box-sizing: border-box;

  display: flex;
  gap: 20px;
  list-style: none;

  li {
    padding: 8px;
    text-transform: capitalize;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    color: #4a5568;

    &.active,
    &:hover {
      border-bottom: 2px solid #2b6cb0;
      color: #2b6cb0;
    }

    button {
      background: none;
      border: none;
      cursor: pointer;
    }

    ${(props) =>
      props.isSolid &&
      css`
        width: fit-content;
        border-radius: 9999px;
        border-bottom: none;

        &.active,
        &:hover {
          background: #2b6cb0;
          border-bottom: none;

          button {
            color: white;
          }
        }
      `}
  }
`;
