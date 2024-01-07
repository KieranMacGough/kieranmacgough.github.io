import { StaticImport } from "next/dist/shared/lib/get-img-props";
import GitHubSVG from "../../../images/github.svg";
import LinkedInSVG from "../../../images/linkedin.svg";
import EmailSvg from "../../../images/email.svg";

export interface IContactData {
  href: string;
  alt: string;
  src: string | StaticImport;
  text: string;
}

export const contactData: IContactData[] = [
  {
    href: "https://github.com/KieranMacGough",
    alt: "Github",
    src: GitHubSVG,
    text: "/KieranMacGough",
  },
  {
    href: "https://www.linkedin.com/in/kieran-macgough/",
    alt: "LinkedIn",
    src: LinkedInSVG,
    text: "/kieran-macgough",
  },
  {
    href: "mailto:kieran.macgough@gmail.com",
    alt: "Email",
    src: EmailSvg,
    text: "kieran.macgough@gmail.com",
  },
];
