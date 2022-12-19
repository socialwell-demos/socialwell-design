import React from "react";
import { TabContainerButton } from "./styles/tabsStyles";

export interface TabsProps {
  isSolid?: boolean;
  data: {
    name: string;
    isActive: boolean;
    onClick?: () => void;
  }[];
  as: "link" | "button";
}

export const Tabs: React.FC<TabsProps> = ({
  isSolid = false,
  data,
  as = "link",
}) => {
  // if (as === "button") {
  //   return (
  //     <TabContainerButton isSolid={isSolid}>
  //       {data.map(({ name, isActive }, index) => (
  //         <li key={index} className={`${isActive && "active"}`}>
  //           <button type="button">{name}</button>
  //         </li>
  //       ))}
  //     </TabContainerButton>
  //   );
  // }

  return (
    <TabContainerButton isSolid={isSolid}>
      {data.map(({ name, isActive }, index) => (
        <li key={index} className={`${isActive && "active"}`}>
          <button type="button">{name}</button>
        </li>
      ))}
    </TabContainerButton>
  );
};
