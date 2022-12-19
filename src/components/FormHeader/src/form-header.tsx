import React from "react";
import {
  Header,
  Progress,
  ProgressItem,
  Title,
} from "./styles/formHeaderStyles";

type ProgressDataProps = { isActive: boolean; title: string };

export interface FormHeaderProps {
  title?: string;
  progressData?: ProgressDataProps[];
  backgroundColor?: string;
  textColor?: string;
  offsetTop?: string;
}

export const FormHeader: React.FC<FormHeaderProps> = ({
  title = "title",
  progressData,
  backgroundColor = "#25A7A7",
  textColor = "#fff",
  offsetTop = "118px",
}) => {
  return (
    <Header {...{ backgroundColor, textColor, offsetTop }}>
      <Title>{title}</Title>
      {progressData && progressData.length > 0 && (
        <Progress>
          {progressData.map((item: ProgressDataProps, index: React.Key) => (
            <ProgressItem isActive={item.isActive} key={index}>
              {item.title}
            </ProgressItem>
          ))}
        </Progress>
      )}
    </Header>
  );
};
