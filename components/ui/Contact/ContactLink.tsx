import React from "react";
import Image from "next/image";
import { IContactData } from "./ContactData";

export const ContactLink: React.FC<IContactData> = ({
  href,
  alt,
  src,
  text,
}) => {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      href={href}
      className={"flex flex-row items-center gap-2"}
    >
      <Image
        width={40}
        height={40}
        alt={alt}
        src={src}
        className="rounded-lg border border-white"
      />
      <span className="text-primary underline">{text}</span>
    </a>
  );
};
