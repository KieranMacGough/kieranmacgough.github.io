import { StaticImageData } from "next/image";
import FatjoeLogo from "../../../images/FatjoeLogo.jpg";

export interface IProjectData {
  type: string;
  name: string;
  logo: StaticImageData;
  tech: string[];
  description: string;
  githubLink: string;
  seeMoreLink: string;
}

export const projectData: IProjectData[] = [
  {
    type: "Website",
    name: "iRacing Buyers Guide",
    logo: FatjoeLogo,
    tech: ["NextJs", "Typescript", "Tailwind", "tRPC", "Prisma", "Planetscale"],
    description:
      "A full-stack website to help iRacing users find out which tracks and cars to purchase on the service. Includes a series comparision feature, to see which tracks or cars are used over multiple series that the user is interested in.",
    githubLink: "Github",
    seeMoreLink: "See More",
  },
  {
    type: "Mobile App",
    name: "Pokedex App",
    logo: FatjoeLogo,
    tech: ["React Native", "Javascript", "Expo", "PokeAPI"],
    description:
      "A Pokedex app for Android, using PokeAPI and a public Figma design. Search and fitler through all 905 Pokemon. See more details, such as locations and type weaknesses.",
    githubLink: "https://github.com/KieranMacGough/Pokedex--React-Native-",
    seeMoreLink: "https://www.youtube.com/watch?v=0UgxlwFYOOc",
  },
  {
    type: "Game Mod",
    name: "The Four Horsemen",
    logo: FatjoeLogo,
    tech: ["AngelScript", "HPL2 Map Editor"],
    description:
      "The Four Horsemen is a custom story mod for Amnesia: The Dark Descent. Developed in 2013, it is still one of the highest rated Amnesia mods on ModDB (93%)",
    githubLink: "https://github.com/KieranMacGough/Pokedex--React-Native-",
    seeMoreLink: "https://www.moddb.com/mods/the-four-horsemen",
  },
];
