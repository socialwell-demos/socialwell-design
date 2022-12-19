import styled, { css } from "styled-components";

export const Header = styled.div<{
  backgroundColor: string;
  textColor: string;
  offsetTop: string;
}>`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor};
  padding: 24px;
  top: ${(props) => props.offsetTop};
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 100px;

  position: -webkit-sticky;
  position: sticky;
  isolation: isolate;
  z-index: 9;

  ${(props) =>
    props.offsetTop === "118px" &&
    css`
      @media screen and (max-width: 1100px) {
        top: 90px;
      }

      @media screen and (max-width: 850px) {
        display: none;
      }
    `}
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 1.563rem;
  line-height: 24px;
  color: ${(props) => props.theme.white};
  text-transform: capitalize;
`;

export const Progress = styled.ul`
  display: flex;
  align-items: center;
  gap: 16px;
  list-style-type: none;
`;
export const ProgressItem = styled.li<{ isActive?: boolean }>`
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  line-height: 16px;
  letter-spacing: 0.025em;
  color: ${(props) => (props.isActive ? "white" : "#BDBDBD")};
  position: relative;
  min-width: 130px;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 4px;
    top: -10px;
    background-color: ${(props) => (props.isActive ? "white" : "#BDBDBD")};
    border-radius: 10px;
  }
`;
