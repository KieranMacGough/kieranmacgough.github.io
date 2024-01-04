"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import KMlogo from "../../images/KmLogo.png";

const links = [
  { href: "#aboutme", label: "About Me" },
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <header
      className={`${
        visible ? "top-0" : "top-[-56px]"
      } fixed flex h-14 w-full flex-row items-center justify-between border-b border-b-zinc-500 bg-zinc-800 bg-opacity-65 p-4 backdrop-blur-sm backdrop-saturate-150 backdrop-filter transition-[top_ease-in-out] duration-500`}
    >
      <Logo />
      <Links />
    </header>
  );
};

const Logo = () => {
  return <Image src={KMlogo} alt={"Logo"} width={40} height={40} />;
};

const Links = () => {
  return (
    <div className="flex items-center gap-6">
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
    <a
      href={href}
      className="h-auto cursor-pointer text-xs text-orange-400 hover:text-white"
    >
      <span className="text-white">//</span>
      {" " + label}
    </a>
  );
};

const ResumeButton = () => {
  return (
    <button className="me-2 rounded border border-orange-400 bg-gray-700 px-2.5 py-0.5 text-xs  font-medium text-orange-400 hover:bg-orange-400 hover:text-gray-700">
      Resume
    </button>
  );
};
