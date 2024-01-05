import React, { HTMLAttributes } from "react";

export const BlockHeader: React.FC<HTMLAttributes<HTMLHeadingElement>> = (
  props,
) => {
  return (
    <h2 className=" pb-10 text-5xl text-white">
      <span className="text-primary text-6xl">{"// "}</span>
      {props.children}
    </h2>
  );
};
