import Image from "next/image";
import me from "../../images/me.jpg";
import { Container } from "../ui/Container";
import { HighlightedSpan } from "../ui/HighlightedSpan";

export const Hero = () => {
  return (
    <Container>
      <div
        id="home"
        className={`flex min-h-screen w-full flex-col flex-nowrap items-center justify-center gap-6 md:flex-row md:gap-12`}
      >
        <div
          className={`flex w-full flex-col justify-center gap-2 md:w-3/5 md:gap-6`}
        >
          <p className="w-max rounded-lg border border-primary bg-teal-950 p-4 text-primary md:text-xl">
            👋 Hi, I&apos;m Kieran MacGough.
          </p>
          <p className={`text-2xl text-white md:text-3xl`}>
            I&apos;m a{" "}
            <HighlightedSpan>
              mid-level full stack web developer
            </HighlightedSpan>
            , specialising in{" "}
            <span className={`inline-block`}>
              <HighlightedSpan>{"{ "}</HighlightedSpan>
              React <HighlightedSpan>&&</HighlightedSpan> Typescript
              <HighlightedSpan>{" }"}</HighlightedSpan>
            </span>
            .
          </p>
          <p className={` text-white`}>
            Self-taught, with{" "}
            {Math.floor(
              (+new Date() - +new Date(2022, 9, 1)) /
                (1000 * 60 * 60 * 24 * 365.25),
            )}
            + years industry experience. Keep scrolling for my tech stack
            knowledge, work experience, personal projects and how to get in
            touch.
          </p>
        </div>
        <div className="flex w-auto p-4 md:items-center md:justify-center md:p-20">
          <Image
            src={me}
            alt={"Logo"}
            width={300}
            height={300}
            className="rounded-lg border-2 border-primary/50 shadow-heroimagesm md:rotate-12 md:shadow-heroimagemd"
          />
          ;
        </div>
      </div>
    </Container>
  );
};
