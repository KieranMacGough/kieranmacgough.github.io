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

    startDate: "October 2022",
    endDate: "Current",
    logo: FatjoeLogo,
    tech: ["NextJs", "Typescript", "GraphQL", "Styled-Components", "Storybook"],
    title: "Junior frontend developer",
  },
];
