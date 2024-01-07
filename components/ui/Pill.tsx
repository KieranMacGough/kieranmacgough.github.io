import React, { HTMLAttributes } from "react";

export const Pill: React.FC<HTMLAttributes<HTMLSpanElement>> = (props) => {
  return (
    <span
      className={`m-0 block h-min w-max rounded-2xl border px-3 py-0.5 text-sm text-white`}
      {...props}
    >
      {props.children}
    </span>
  );
};
