import React, { HTMLAttributes } from "react";

interface IContainer extends HTMLAttributes<HTMLDivElement> {
  paddingTop?: boolean;
  paddingBottom?: boolean;
  paddingLeft?: boolean;
  paddingRight?: boolean;
}

export const Container: React.FC<IContainer> = ({
  paddingTop = true,
  paddingBottom = true,
  paddingLeft = true,
  paddingRight = true,
  children,
}) => {
  return (
    <div
      className={`m-auto w-full max-w-[1200px] 
      ${paddingTop ? "pt-10 md:pt-20" : null}
      ${paddingBottom ? "pb-10 md:pb-20" : null}
      ${paddingLeft ? "pl-5 md:pl-5" : null}
      ${paddingRight ? "pr-5 md:pr-5" : null}
      `}
    >
      {children}
    </div>
  );
};
