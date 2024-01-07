import React from "react";

interface IHLine {
  margin: "none" | "xs" | "sm" | "md" | "lg";
}
export const HLine: React.FC<IHLine> = ({ margin }) => {
  const margins = {
    none: "",
    xs: "my-2",
    sm: "my-4",
    md: "my-5",
    lg: "my-6",
  };
  return <hr className={`${margins[margin]} h-px border-0 bg-zinc-400`} />;
};
