import styled from "styled-components";

export const LinkWrapper = styled.div`
  user-select: none;
  cursor: pointer;
  display: inline-block;
  min-width: 250px;
  width: max-content;
  min-height: 100px;
  background-color: ${(props) => props.theme.white};
  gap: 10px;
  border-radius: 10px;
  color: ${(props) => props.theme.textColor};
  text-transform: capitalize;
  border: 1px solid;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;

  span {
    display: flex;
    justify-content: flex-end;
  }

  a {
    font-size: 1.25rem;
    text-transform: lowercase;
    color: #2b6cb0;
  }
`;

export const LinkGroup = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;

  img {
    width: 30px;
    height: 30px;
  }

  .name {
    font-style: normal;
    font-weight: 400;
    font-size: 1.563rem;
    line-height: 28px;
  }
`;
