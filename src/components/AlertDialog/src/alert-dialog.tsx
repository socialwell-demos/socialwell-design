import React from "react";
import { CloseIcon } from "../../../assets";
import { Dialogwrapper } from "./styles/alertDialogStyles";

export interface AlertDialogProps {
  title: string;
  text: string;
  onClick: () => void;
  position?: "topLeft" | "bottomLeft" | "topRight" | "bottomRight";
}

export const AlertDialog: React.FC<AlertDialogProps> = ({
  title,
  text,
  position = "bottomLeft",
  onClick,
}) => {
  return (
    <Dialogwrapper position={position}>
      <div className="header">
        <div className="title">{title}</div>
        <span className="icon">
          <CloseIcon />
        </span>
      </div>
      <p>{text}</p>
      <div className="btn">
        <button>close</button>
        <button className="delete" onClick={onClick}>
          delete
        </button>
      </div>
    </Dialogwrapper>
  );
};
