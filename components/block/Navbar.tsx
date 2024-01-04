import React from "react";
import Image from "next/image";
import KMlogo from "../../images/KmLogo.png";

const links = [
  { href: "aboutme", label: "About Me" },
  { href: "work", label: "Work" },
  { href: "projects", label: "Projects" },
  { href: "contact", label: "Contact" },
];

export const Navbar = () => {
  return (
    <div className="flex w-full flex-row items-center justify-between bg-zinc-800 p-2">
      <Logo />
      <Links />
    </div>
  );
};

const Logo = () => {
  return <Image src={KMlogo} alt={"Logo"} width={48} height={48} />;
};

const Links = () => {
  return (
    <div className="flex items-center gap-4">
      {links.map((link, i) => (
        <Link num={i} label={link.label} href={link.href} />
      ))}
      <ResumeButton />
    </div>
  );
};

interface LinkProps {
  num: number;
  label: string;
  href: string;
}

const Link: React.FC<LinkProps> = ({ num, label, href }) => {
  return (
    <a href={href} className="h-auto cursor-pointer text-orange-400 ">
      <span className="text-white">{num}.</span>
      {" " + label}
    </a>
  );
};

const ResumeButton = () => {
  return (
    <button className="rounded-lg border border-orange-400 p-1 text-orange-400 ease-in-out  hover:bg-orange-400 hover:text-zinc-900">
      Resume
    </button>
  );
};
