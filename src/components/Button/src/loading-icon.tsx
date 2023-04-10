import React from "react";
import styled from "styled-components";

const LoadingIcon = ({ size, color }: { size: string; color: string }) => {
  return (
    <Svg
      width={size}
      height={size}
      stroke={color}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="spinner_QPB9">
        <circle cx="12" cy="12" r="9.5" fill="none" strokeWidth="3"></circle>
      </g>
    </Svg>
  );
};

const Svg = styled.svg`
  .spinner_QPB9 {
    transform-origin: center;
    animation: spinner_4N1C 2s linear infinite;
  }

  .spinner_QPB9 circle {
    stroke-linecap: round;
    animation: spinner_MX3P 1.5s ease-in-out infinite;
  }

  @keyframes spinner_4N1C {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes spinner_MX3P {
    0% {
      stroke-dasharray: 0 150;
      stroke-dashoffset: 0;
    }

    47.5% {
      stroke-dasharray: 42 150;
      stroke-dashoffset: -16;
    }

    95%,
    100% {
      stroke-dasharray: 42 150;
      stroke-dashoffset: -59;
    }
  }
`;

export default LoadingIcon;
