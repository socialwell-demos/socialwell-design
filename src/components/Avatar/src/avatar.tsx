import React from "react";
import { Image } from "./styles/avatarStyles";

export interface AvatarProps {
  src?: string;
  alt?: string;
  size: "sm" | "md" | "lg" | "xl" | "2xl";
  useName?: string;
  background?: string;
  color?: string;
}
const getSize = (size: string): number => {
  if (size === "sm") return 32;
  if (size === "md") return 48;
  if (size === "xl") return 96;
  if (size === "2xl") return 128;

  return 64;
};
export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "",
  size = "lg",
  useName,
  background = "#000",
  color = "#fff",
}) => {
  return (
    <Image
      src={
        src ||
        `https://ui-avatars.com/api/?name=${useName}&size=${getSize(
          size,
        )}&background=${background.slice(1)}&color=${color.slice(1)}`
      }
      alt={alt}
      size={size}
    />
  );
};
