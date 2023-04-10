import styled from "styled-components";

interface Props {
  size: string;
}

export const MainButton = styled.button<Props>`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-width: 80px;
  gap: 8px;
  width: fit-content;
  padding: 10px ${(props) => (props.size === "md" ? "16px" : "24px")};
  border-radius: 6px;
  font-weight: 600;
  background: none;
  border: none;
  cursor: pointer;
`;

export const CustomButton = styled(MainButton)<{
  backgroundColor: string;
  color: string;
  borderWidth: number;
  paddingInline: number;
  paddingBlock: number;
}>`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  border: ${(props) => props.borderWidth}px solid;
  padding-inline: ${(props) => props.paddingInline}px;
  padding-block: ${(props) => props.paddingBlock}px;
  &:hover {
    opacity: 0.8;
  }

  &:active {
    scale: 1.05;
  }

  &:disabled {
    background: #ffffff;
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const SolidButton = styled(MainButton)`
  background: #319795;
  color: #ffffff;
  height: 40px;

  &:hover {
    background: #2c7a7b;
  }

  &:active {
    background: #285e61;
  }

  &:disabled {
    background: #319795;
    opacity: 0.5;
  }
`;

export const OutlineButton = styled(MainButton)`
  border: 1px solid #e2e8f0;
  color: #2d3748;
  height: 40px;

  &:hover {
    background: #edf2f7;
  }

  &:active {
    background: #e2e8f0;
  }

  &:disabled {
    background: #ffffff;
    opacity: 0.5;
  }
`;
