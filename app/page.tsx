import { Hero } from "@/components/block/Hero";
import { Navbar } from "@/components/block/Navbar";
import { Projects } from "@/components/block/Projects";
import { TechStack } from "@/components/block/TechStack";
import { Work } from "@/components/block/Work";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between bg-zinc-900 ">
        <Navbar />
        <Hero />
        <TechStack />
        <Work />
        <Projects />
      </main>
    </>
  );
}
