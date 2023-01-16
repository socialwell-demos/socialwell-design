import styled from "styled-components";

export const Button = styled.button`
  box-sizing: border-box;

  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  border-radius: 6px;
  transition: all 250ms ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.06);
  }

  &:active {
    background-color: rgba(0, 0, 0, 0.08);
  }

  &:disabled {
    background-color: none;
    opacity: 0.5;
  }
`;
