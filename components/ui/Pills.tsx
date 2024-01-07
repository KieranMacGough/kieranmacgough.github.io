import React, { HTMLAttributes } from "react";
import { Pill } from "./Pill";

interface IPills extends HTMLAttributes<HTMLDivElement> {
  data: string[];
}

export const Pills: React.FC<IPills> = ({ data, className }) => {
  return (
    <div className={`flex flex-wrap gap-1 ${className}`}>
      {data.map((item, i) => (
        <Pill key={i}>{item}</Pill>
      ))}
    </div>
  );
};
