import React, { HTMLAttributes } from "react";

interface IPill extends HTMLAttributes<HTMLSpanElement> {
  color: "red" | "yellow";
}
export const Pill: React.FC<IPill> = (props) => {
  return (
    <span
      className={`m-0 inline-block w-max rounded-2xl border px-3 py-0.5 text-xs`}
    >
      {props.children}
    </span>
  );
};
