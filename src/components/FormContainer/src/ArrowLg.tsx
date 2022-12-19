import React from "react";

type Props = {
  size?: string;
  reverse?: boolean;
};

const ArrowLg = ({ size = "50", reverse }: Props) => {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 50 50"
      fill="none"
      style={{ transform: reverse ? "" : "rotate(180deg)" }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.0533 32.6952C11.9025 33.5452 13.2792 33.5452 14.1283 32.6952L24.9998 21.8116L35.8713 32.6952C36.7205 33.5452 38.0971 33.5452 38.9463 32.6952C39.7955 31.8452 39.7955 30.4669 38.9463 29.6169L26.6465 17.3036C26.1942 16.8507 25.5921 16.6391 24.9998 16.6688C24.4076 16.6391 23.8055 16.8507 23.3532 17.3036L11.0533 29.6169C10.2042 30.4669 10.2042 31.8452 11.0533 32.6952Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ArrowLg;
