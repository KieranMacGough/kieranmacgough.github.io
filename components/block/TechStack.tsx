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
    <Container>
      <div
        id="tech"
        className="flex min-h-dvh flex-col items-center justify-center"
      >
        <BlockHeader>Tech Stack</BlockHeader>
        <div className="border-primary flex max-w-3xl flex-row flex-wrap justify-center gap-5 rounded-lg border bg-teal-950 p-5">
          {TechList.map((tech, i) => (
            <Tech key={i} icon={tech.icon} name={tech.name} />
          ))}
        </div>
      </div>
    </Container>
  );
};

interface ITech {
  icon: ReactElement;
  name: string;
}

const Tech: React.FC<ITech> = ({ icon, name }) => {
  return (
    <div className="border-primary text-primary flex flex-row flex-nowrap items-center gap-3 rounded-lg border bg-zinc-900 p-4">
      {icon}
      <span className="text-primary text-xl">{name}</span>
    </div>
  );
};
