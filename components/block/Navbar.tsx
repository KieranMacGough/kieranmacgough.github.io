"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import KMlogo from "../../images/KmLogo.png";
import { Container } from "../ui/Container";
import { Anchor } from "../ui/Anchor";

const links = [
  { href: "#tech", label: "Tech Stack" },
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
        visible ? "top-0" : "top-[-80px]"
      } fixed z-50 w-full border-b border-b-zinc-500 bg-zinc-800 bg-opacity-65 backdrop-blur-sm backdrop-saturate-150 backdrop-filter transition-[top_ease-in-out] duration-500`}
    >
      <Container paddingTop={false} paddingBottom={false}>
        <div className="flex h-20 w-full flex-row items-center justify-between py-4 max-[1200px]:px-4 ">
          <Logo />
          <Links />
        </div>
      </Container>
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
        <Link key={i} num={i} label={link.label} href={link.href} />
      ))}
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
      className="h-auto cursor-pointer text-base text-primary hover:text-white"
    >
      <span className="text-white">//</span>
      {" " + label}
    </a>
  );
};
