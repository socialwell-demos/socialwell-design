import React from "react";
import { Link } from "./styles/linkStyles";

export interface NextLinkProps {
  linkName: string;
}

export const NextLink = ({ linkName }: NextLinkProps) => {
  return <Link>{linkName}</Link>;
};
