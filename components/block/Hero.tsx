import React from "react";
import Image from "next/image";
import { HighlightedSpan } from "../ui/HighlightedSpan";
import KMlogo from "../../images/KmLogo.png";
import { Container } from "../ui/Container";

export const Hero = () => {
  return (
    <Container paddingTop={false}>
      <div
        className={`flex min-h-dvh w-full flex-col flex-nowrap items-center justify-center gap-6 md:flex-row md:gap-12`}
      >
        <div
          className={`flex  w-full flex-col justify-center gap-2 md:w-3/5 md:gap-6`}
        >
          <p className="text-md w-max rounded-lg border border-primary bg-teal-950 p-4 text-primary md:text-xl">
            👋 Hi, I'm Kieran MacGough.
          </p>
          <p className={`text-xl text-white md:text-3xl`}>
            I'm a <HighlightedSpan>frontend web developer</HighlightedSpan>,
            specialising in{" "}
            <span className={`inline-block`}>
              <HighlightedSpan>{"{ "}</HighlightedSpan>
              React <HighlightedSpan>&&</HighlightedSpan> Typescript
              <HighlightedSpan>{" }"}</HighlightedSpan>
            </span>
            .
          </p>
          <p className={`md:text-md text-sm text-white`}>
            Self-taught, with 1+ years industry experience. Keep scrolling for
            my tech stack knowledge, work experience and personal projects.
          </p>
        </div>
        <div className="flex md:w-2/5 md:items-center md:justify-center">
          <Image src={KMlogo} alt={"Logo"} width={200} height={200} />;
        </div>
      </div>
    </Container>
  );
};
