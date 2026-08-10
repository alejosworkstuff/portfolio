import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Engineering } from "@/components/sections/Engineering";
import { Roadmap } from "@/components/sections/Roadmap";
import { OpenSource } from "@/components/sections/OpenSource";
import { About } from "@/components/sections/About";
import { AiDev } from "@/components/sections/AiDev";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Roadmap />
      <Engineering />
      <OpenSource />
      <AiDev />
      <Contact />
    </>
  );
}
