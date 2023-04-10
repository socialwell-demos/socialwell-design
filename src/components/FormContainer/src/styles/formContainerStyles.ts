import styled from "styled-components";

export const FormHeaderWrapper = styled.div`
  width: 100%;
  margin-block: 24px;
  display: flex;
  flex-direction: column;

  .line {
    width: 100%;
    height: 1px;
    background: ${(props) => props.theme.gray200};
  }
`;

export const Header = styled.div<{
  isActive?: boolean;
  paddingBlock: string;
  paddingInline: string;
}>`
  width: 100%;
  min-height: 80px;
  padding: ${(props) => props.paddingBlock} ${(props) => props.paddingInline};
  background-color: #d9d9d9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-style: normal;
  font-weight: 800;
  font-size: 1.563rem;
  line-height: 100%;
  text-transform: capitalize;
  color: ${(props) => props.theme.textColor};
  border-radius: ${(props) => (props.isActive ? "10px 10px 0 0" : "10px")};
  cursor: pointer;

  .header__wrapper {
    display: flex;
    gap: 8px;
    align-items: center;
  }
`;

export const Form = styled.div<{ isActive?: boolean }>`
  display: ${(props) => (props.isActive ? "block" : "none")};
  min-height: 80px;
  background-color: #fff;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;
