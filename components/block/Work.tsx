import React from "react";
import { Container } from "../ui/Container";
import { BlockHeader } from "../ui/BlockHeader";
import { Timeline } from "../ui/Timeline/Timeline";

export const Work = () => {
  return (
    <Container>
      <div
        id="work"
        className="flex min-h-dvh w-full flex-col items-center justify-center"
      >
        <BlockHeader>Work</BlockHeader>
        <Timeline />
      </div>
    </Container>
  );
};
