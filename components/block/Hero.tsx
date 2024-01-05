import React from "react";
import Image from "next/image";
import { HighlightedSpan } from "../ui/HighlightedSpan";
import KMlogo from "../../images/KmLogo.png";
import { Container } from "../ui/Container";

export const Hero = () => {
  return (
    <Container>
      <div
        className={`flex w-full flex-row flex-nowrap items-center md:gap-20`}
      >
        <div
          className={`flex h-dvh w-full flex-col justify-center gap-6 md:w-3/5`}
        >
          <p className="border-primary text-primary text-md w-max rounded-lg border bg-teal-950 p-4 md:text-xl">
            👋 Hi, I'm Kieran MacGough.
          </p>
          <p className={`text-xl text-white md:text-3xl`}>
            I'm a <HighlightedSpan>frontend web developer</HighlightedSpan>,
            specialising in
            <HighlightedSpan>{" { "}</HighlightedSpan>
            React <HighlightedSpan>&&</HighlightedSpan> Typescript
            <HighlightedSpan>{" }"}</HighlightedSpan>.
          </p>
          <p className={`md:text-md text-sm text-white`}>
            Self-taught, with 1+ years industry experience. Keep scrolling for
            my tech stack knowledge, work experience and personal projects.
          </p>
        </div>
        <div className="hidden md:flex md:w-2/5 md:items-center md:justify-center">
          <Image src={KMlogo} alt={"Logo"} width={200} height={200} />;
        </div>
      </div>
    </Container>
  );
};
