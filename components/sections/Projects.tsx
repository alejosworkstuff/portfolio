"use client";

import { projects } from "@/lib/projects";
import { useI18n } from "@/lib/i18n";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { EdgeReveal } from "@/components/motion/EdgeReveal";

export function Projects() {
  const { t } = useI18n();

  return (
    <section id="projects" className="section projects">
      <EdgeReveal edge="left">
        <h2>{t("projectsTitle")}</h2>
      </EdgeReveal>
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
