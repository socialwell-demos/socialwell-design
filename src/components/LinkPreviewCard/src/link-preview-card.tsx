/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import { CloseIcon } from "../../../assets";
import { LinkGroup, LinkWrapper } from "./styles/linkCardStyles";

export interface LinkPreviewCardProps {
  link?: string;
  title?: string;
  onClose?: () => void;
}

export const LinkPreviewCard = ({
  link = "",
  title = "",
  onClose = () => {},
}: LinkPreviewCardProps) => {
  return (
    <LinkWrapper>
      <span onClick={onClose}>
        <CloseIcon />
      </span>
      <LinkGroup>
        <div className="image">
          <img
            src={`https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${
              link?.startsWith("http") ? link : `https://${link}`
            }&size=48`}
            alt="favicon"
            loading="lazy"
          />
        </div>
        <div className="name">{title}</div>
      </LinkGroup>
      <div className="link">
        <a
          href={link?.startsWith("http") ? link : `https://${link}`}
          target="_blank"
          rel="noreferrer"
        >
          {link}
        </a>
      </div>
    </LinkWrapper>
  );
};
