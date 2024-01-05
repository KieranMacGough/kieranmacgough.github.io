import React, { HTMLAttributes } from "react";

export const HighlightedSpan: React.FC<HTMLAttributes<HTMLSpanElement>> = (
  props,
) => {
  return (
    <span className={`text-primary font-bold`} {...props}>
      {props.children}
    </span>
  );
};
