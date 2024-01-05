import React, { HTMLAttributes } from "react";

export const Container: React.FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  return <div className="m-auto w-full max-w-[1200px]">{props.children}</div>;
};
