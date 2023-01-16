import React from "react";
import { Image } from "./styles/avatarStyles";

export interface AvatarProps {
  src?: string;
  alt?: string;
  size: "sm" | "md" | "lg" | "xl" | "2xl";
  useName?: string;
  background?: string;
  color?: string;
  radius?: string;
}

export interface DiceAvatarProps {
  src?: string;
  alt?: string;
  size: "sm" | "md" | "lg" | "xl" | "2xl";
  radius?: string;
  useName?: string;
  variations?:
    | "adventurer-neutral"
    | "avataaars"
    | "big-ears-neutral"
    | "bottts"
    | "croodles-neutral"
    | "identicon"
    | "initials"
    | "micah"
    | "miniavs"
    | "personas";
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
  radius = "50%",
  background = "#000",
  color = "#fff",
}) => {
  return (
    <Image
      {...{ radius, size, alt }}
      src={
        src ||
        `https://ui-avatars.com/api/?name=${useName}&size=${getSize(
          size,
        )}&background=${background.slice(1)}&color=${color.slice(1)}`
      }
    />
  );
};

export const DiceAvatar: React.FC<DiceAvatarProps> = ({
  src,
  alt = "",
  size = "lg",
  useName,
  variations = "initials",
  radius = "50%",
}) => {
  return (
    <Image
      {...{ radius, size, alt }}
      src={
        src ||
        `https://avatars.dicebear.com/api/${variations}/${useName}.svg?size=${getSize(
          size,
        )}`
      }
    />
  );
};
