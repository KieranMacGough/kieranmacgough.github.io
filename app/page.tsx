import { Hero } from "@/components/block/Hero";
import { Navbar } from "@/components/block/Navbar";
import { TechStack } from "@/components/block/TechStack";
import { Work } from "@/components/block/Work";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between bg-zinc-900 px-5 md:px-20">
        <Navbar />
        <Hero />
        <TechStack />
        <Work />
        <p className="min-h-dvh">
          Text TextText TextText TextText TextText TextText TextText TextText
          TextText TextText TextText TextText TextText TextText TextText
          TextText TextText TextText TextText TextText TextText Text
        </p>
        <p className="min-h-dvh">
          Text TextText TextText TextText TextText TextText TextText TextText
          TextText TextText TextText TextText TextText TextText TextText
          TextText TextText TextText TextText TextText TextText Text
        </p>
        <p className="min-h-dvh">
          Text TextText TextText TextText TextText TextText TextText TextText
          TextText TextText TextText TextText TextText TextText TextText
          TextText TextText TextText TextText TextText TextText Text
        </p>
      </main>
    </>
  );
}
