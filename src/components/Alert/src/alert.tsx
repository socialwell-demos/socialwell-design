import React from "react";
import {
  CloseIcon,
  ErrorIcon,
  InfoIcon,
  SuccessIcon,
  WarningIcon,
} from "../../../assets";
import { AlertWrapper, Text, Title } from "./styles/alertStyles";
export interface AlertProps {
  state: "error" | "success" | "warning" | "info";
  title: string;
  description: string;
  inline?: boolean;
  onClose: () => void;
}
export const Alert: React.FC<AlertProps> = ({
  state,
  title,
  description,
  inline = false,
  onClose,
}) => {
  return (
    <AlertWrapper inline={inline} state={state}>
      <div className="content">
        <div className="icon">
          {state === "error" && (
            <span>
              <ErrorIcon />
            </span>
          )}
          {state === "success" && (
            <span>
              <SuccessIcon />
            </span>
          )}
          {state === "warning" && (
            <span>
              <WarningIcon />
            </span>
          )}
          {state === "info" && (
            <span>
              <InfoIcon />
            </span>
          )}
        </div>
        <div className="content-details">
          <Title>{title}</Title>
          <Text>{description}</Text>
        </div>
      </div>
      <button onClick={onClose}>
        <CloseIcon />
      </button>
    </AlertWrapper>
  );
};
