import React from "react";
import { TagWrapper } from "./styles/tagStyles";

export interface TagProps {
  label: string;
}

export const Tag: React.FC<TagProps> = ({ label }) => {
  return <TagWrapper>{label}</TagWrapper>;
};
