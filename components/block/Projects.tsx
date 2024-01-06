import React from "react";
import { projectData } from "../ui/Projects/ProjectData";
import { Container } from "../ui/Container";
import { BlockHeader } from "../ui/BlockHeader";
import { ProjectsBlock } from "../ui/Projects/ProjectsBlock";

export const Projects = () => {
  return (
    <div className="w-full bg-zinc-700">
      <Container>
        <div
          id="projects"
          className="flex min-h-dvh flex-col items-center justify-center "
        >
          <BlockHeader>Projects</BlockHeader>
          <ProjectsBlock bgColor="bg-zinc-700" />
        </div>
      </Container>
    </div>
  );
};
