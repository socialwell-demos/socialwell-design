import React from "react";
import {
  CloseIcon,
  ErrorIcon,
  InfoIcon,
  SuccessIcon,
  WarningIcon,
} from "../../../assets";
import { ToastWrapper, Text, Title } from "./styles/toastStyles";
export interface ToastProps {
  state: "error" | "success" | "warning" | "info";
  title: string;
  description?: string;
  onClose: () => void;
}
export const Toast: React.FC<ToastProps> = ({
  state,
  title,
  description,
  onClose,
}) => {
  return (
    <ToastWrapper state={state}>
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
          {description && <Text>{description}</Text>}
        </div>
      </div>
      <button onClick={onClose}>
        <CloseIcon />
      </button>
    </ToastWrapper>
  );
};
