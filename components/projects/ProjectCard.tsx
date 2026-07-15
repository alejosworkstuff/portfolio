"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import type { ProjectMeta } from "@/lib/projects";
import { useI18n } from "@/lib/i18n";
import { EdgeReveal } from "@/components/motion/EdgeReveal";

type Props = {
  project: ProjectMeta;
  index: number;
};

export function ProjectCard({ project, index }: Props) {
  const { t } = useI18n();
  const videoRef = useRef<HTMLVideoElement>(null);
  const edge = index % 2 === 0 ? "left" : "right";

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !project.videoSrc) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      },
      { threshold: 0.45 },
    );
    io.observe(video);
    return () => io.disconnect();
  }, [project.videoSrc]);

  return (
    <EdgeReveal edge={edge} delay={index * 0.06} className="project-card-wrap">
      <article className="project-card" id={project.id}>
        <div className="project-media">
          {project.videoSrc ? (
            <video
              ref={videoRef}
              className="project-video"
              poster={project.poster}
              muted
              playsInline
              loop
              preload="metadata"
              aria-label={t(project.altKey)}
            >
              <source src={project.videoSrc} type="video/webm" />
            </video>
          ) : (
            <Image
              src={project.poster}
              alt={t(project.altKey)}
              width={960}
              height={600}
              className="project-poster"
            />
          )}
        </div>

        {project.eyebrowKey ? (
          <p className="card-eyebrow">{t(project.eyebrowKey)}</p>
        ) : null}

        <h3>{t(project.titleKey)}</h3>

        <div className="card-text">
          {project.problemKey ? (
            <p>
              <strong>{t("labelProblem")}</strong> {t(project.problemKey)}
            </p>
          ) : null}
          {project.purposeKey ? (
            <p>
              <strong>{t("labelPurpose")}</strong> {t(project.purposeKey)}
            </p>
          ) : null}
          <p>
            <strong>{t("labelStack")}</strong> {t(project.stackKey)}
          </p>
        </div>

        {project.hasCaseStudy ? (
          <Link className="card-link" href={`/projects/${project.slug}`}>
            {t("read-more")}
          </Link>
        ) : null}

        <div className="project-links">
          <a
            className="btn btn-small"
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t(project.ctaPrimaryKey)}
          </a>
          <a
            className="btn btn-ghost btn-small"
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("projectRepo")}
          </a>
        </div>
      </article>
    </EdgeReveal>
  );
}
