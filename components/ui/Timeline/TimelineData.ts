import { StaticImageData } from "next/image";
import FatjoeLogo from "../../../images/FatjoeLogo.jpg";

export interface ITimelineData {
  name: string;
  startDate: string;
  endDate: string;
  logo: StaticImageData;
  tech: string[];
  title: string;
}

export const timelineData = [
  {
    name: "Fatjoe",

    startDate: "September 2024",
    endDate: "Current",
    logo: FatjoeLogo,
    tech: [
      "NextJs",
      "Typescript",
      "Laravel",
      "PHP",
      "GraphQL",
      "Tailwind",
      "Styled-Components",
      "Storybook",
    ],
    title: "Mid-level full stack web developer",
  },
  {
    name: "Fatjoe",

    startDate: "October 2022",
    endDate: "September 2024",
    logo: FatjoeLogo,
    tech: ["NextJs", "Typescript", "GraphQL", "Styled-Components", "Storybook"],
    title: "Junior frontend developer",
  },
];
