import React from "react";
import { Container } from "../ui/Container";
import { BlockHeader } from "../ui/BlockHeader";
import { Contacts } from "../ui/Contact/Contacts";

export const Contact = () => {
  return (
    <Container>
      <div
        id="contact"
        className="flex w-full flex-col items-center justify-center"
      >
        <BlockHeader>Contact</BlockHeader>
        <Contacts />
      </div>
    </Container>
  );
};
