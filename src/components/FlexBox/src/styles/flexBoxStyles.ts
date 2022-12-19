import styled from "styled-components";

export interface Props {
  width: string;
  height: string;
  padding: string;
  margin: string;
  gap: string;
  justifyContent:
    | "normal"
    | "center"
    | "start"
    | "end"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "stretch"
    | "unset";
  justifyItems:
    | "normal"
    | "stretch"
    | "center"
    | "start"
    | "end"
    | "flex-start"
    | "flex-end"
    | "unset";
  alignItems:
    | "normal"
    | "stretch"
    | "center"
    | "start"
    | "end"
    | "flex-start"
    | "flex-end"
    | "unset";
  alignContent:
    | "normal"
    | "center"
    | "start"
    | "end"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "stretch"
    | "unset";
  flex: string;
  flexWrap: "nowrap" | "wrap" | "wrap-reverse" | "unset";
  flexDirection: "row" | "row-reverse" | "column" | "column-reverse" | "unset";
}

export const FlexWrapper = styled.div<Props>`
  display: flex;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  gap: ${(props) => props.gap};
  justify-content: ${(props) => props.justifyContent};
  justify-items: ${(props) => props.justifyItems};
  align-items: ${(props) => props.alignItems};
  align-content: ${(props) => props.alignContent};
  flex: ${(props) => props.flex};
  flex-direction: ${(props) => props.flexDirection};
  flex-wrap: ${(props) => props.flexWrap};
`;
