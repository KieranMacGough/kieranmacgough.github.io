import React, { ReactElement } from "react";
import {
  SiStyledcomponents,
  SiGraphql,
  SiPrisma,
  SiTrpc,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiReact,
  SiPlanetscale,
  SiGithub,
  SiStorybook,
} from "react-icons/si";

import { Container } from "../ui/Container";
import { BlockHeader } from "../ui/BlockHeader";

const TechList = [
  {
    icon: <SiReact size={24} />,
    name: "React",
  },
  {
    icon: <SiNextdotjs size={24} />,
    name: "NextJs",
  },
  {
    icon: <SiTypescript size={24} />,
    name: "Typescript",
  },
  {
    icon: <SiTailwindcss size={24} />,
    name: "Tailwind",
  },
  {
    icon: <SiStyledcomponents size={24} />,
    name: "Styled Components",
  },
  {
    icon: <SiGraphql size={24} />,
    name: "GraphQL",
  },
  {
    icon: <SiTrpc size={24} />,
    name: "tRPC",
  },
  {
    icon: <SiPrisma size={24} />,
    name: "Prisma",
  },
  {
    icon: <SiPlanetscale size={24} />,
    name: "Planetscale",
  },
  {
    icon: <SiGithub size={24} />,
    name: "Github",
  },
  {
    icon: <SiStorybook size={24} />,
    name: "Storybook",
  },
];

export const TechStack = () => {
  return (
    <div className="w-full bg-zinc-700">
      <Container>
        <div
          id="tech"
          className="flex min-h-screen flex-col items-center justify-center"
        >
          <BlockHeader>Tech Stack</BlockHeader>
          <div className="flex w-full max-w-3xl flex-1 flex-col flex-wrap justify-center gap-5 rounded-lg border border-primary bg-teal-950 p-5 sm:flex-initial sm:flex-row">
            {TechList.map((tech, i) => (
              <Tech key={i} icon={tech.icon} name={tech.name} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

interface ITech {
  icon: ReactElement;
  name: string;
}

const Tech: React.FC<ITech> = ({ icon, name }) => {
  return (
    <div className="flex flex-row flex-nowrap items-center gap-3 rounded-lg border border-primary bg-zinc-900 p-4 text-primary">
      {icon}
      <span className="text-xl text-primary">{name}</span>
    </div>
  );
};
