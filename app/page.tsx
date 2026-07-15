import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Engineering } from "@/components/sections/Engineering";
import { OpenSource } from "@/components/sections/OpenSource";
import { Roadmap } from "@/components/sections/Roadmap";
import { AiDev } from "@/components/sections/AiDev";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Engineering />
      <OpenSource />
      <Roadmap />
      <AiDev />
      <Contact />
    </>
  );
}
