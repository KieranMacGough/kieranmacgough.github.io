import React, { ReactNode } from "react";

interface IAnchor {
  href: string;
  children: ReactNode;
}

export const Anchor: React.FC<IAnchor> = ({ href, children }) => {
  return (
    <a
      className="me-2 h-min cursor-pointer rounded border border-primary bg-gray-900 px-2.5  py-0.5 text-base font-medium text-primary hover:bg-primary hover:text-gray-900"
      href={href}
      target="_blank"
    >
      {children}
    </a>
  );
};
