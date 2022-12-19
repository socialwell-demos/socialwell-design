import styled from "styled-components";

export const Button = styled.button`
  box-sizing: border-box;

  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: none;
  border-radius: 6px;

  &:hover {
    background: rgba(0, 0, 0, 0.06);
  }

  &:active {
    background: rgba(0, 0, 0, 0.08);
  }

  &:disabled {
    background: none;
    opacity: 0.5;
  }
`;
