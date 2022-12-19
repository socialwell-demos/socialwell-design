import styled from "styled-components";

const getImageSize = function (size: string) {
  if (size === "sm") return "32px";
  if (size === "md") return "48px";
  if (size === "xl") return "96px";
  if (size === "2xl") return "128px";

  return "64px";
};

export const Image = styled.img<{ size: string }>`
  box-sizing: border-box;
  width: ${(props) => getImageSize(props.size)};
  height: ${(props) => getImageSize(props.size)};

  border-radius: 50%;
  object-fit: cover;
`;
