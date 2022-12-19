import styled from "styled-components";

interface TypographyProps {
  size: string;
  fontWeight: string;
  lineHeight: string;
  color: string;
}

export const TypographyH1 = styled.h1<TypographyProps>`
  font-size: ${(props) => (props.size === "" ? "32px" : props.size)};
  font-weight: ${(props) => props.fontWeight};
  line-height: ${(props) => props.lineHeight};
  color: ${(props) => props.color};
`;

export const TypographyH2 = styled.h2<TypographyProps>`
  font-size: ${(props) => (props.size === "" ? "24px" : props.size)};
  font-weight: ${(props) => props.fontWeight};
  line-height: ${(props) => props.lineHeight};
  color: ${(props) => props.color};
`;

export const TypographyH3 = styled.h3<TypographyProps>`
  font-size: ${(props) => (props.size === "" ? "20px" : props.size)};
  font-weight: ${(props) => props.fontWeight};
  line-height: ${(props) => props.lineHeight};
  color: ${(props) => props.color};
`;

export const TypographyH4 = styled.h4<TypographyProps>`
  font-size: ${(props) => (props.size === "" ? "18px" : props.size)};
  font-weight: ${(props) => props.fontWeight};
  line-height: ${(props) => props.lineHeight};
  color: ${(props) => props.color};
`;

export const TypographyH5 = styled.h5<TypographyProps>`
  font-size: ${(props) => (props.size === "" ? "16px" : props.size)};
  font-weight: ${(props) => props.fontWeight};
  line-height: ${(props) => props.lineHeight};
  color: ${(props) => props.color};
`;

export const TypographyH6 = styled.h6<TypographyProps>`
  font-size: ${(props) => (props.size === "" ? "14px" : props.size)};
  font-weight: ${(props) => props.fontWeight};
  line-height: ${(props) => props.lineHeight};
  color: ${(props) => props.color};
`;

export const TypographyText = styled.p<TypographyProps>`
  font-size: ${(props) => (props.size === "" ? "16px" : props.size)};
  font-weight: ${(props) => props.fontWeight};
  line-height: ${(props) => props.lineHeight};
  color: ${(props) => props.color};
`;
