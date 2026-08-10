"use client";

import Image from "next/image";
import { useI18n } from "@/lib/i18n";
import { EdgeReveal } from "@/components/motion/EdgeReveal";

const LINKEDIN_URL = "https://www.linkedin.com/in/alejo-castillo-gonzalez/";
const GITHUB_URL = "https://github.com/alejosworkstuff";

function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" width="22" height="22">
      <path
        fill="currentColor"
        d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.8 0 0 .77 0 1.73v20.54C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"
      />
    </svg>
  );
}

function IconGitHub() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" width="22" height="22">
      <path
        fill="currentColor"
        d="M12 .3a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58A12 12 0 0 0 12 .3z"
      />
    </svg>
  );
}

export function About() {
  const { t, lang } = useI18n();
  const resumeHref = lang === "es" ? "/resume/es.html" : "/resume/en.html";

  return (
    <section id="about" className="section about">
      <div className="about-grid">
        <EdgeReveal edge="left" className="about-profile">
          <Image
            className="about-photo"
            src="/assets/me.webp"
            alt={t("aboutPhotoAlt")}
            width={220}
            height={220}
            priority={false}
          />
        </EdgeReveal>

        <EdgeReveal edge="right" className="about-copy">
          <h2>{t("aboutTitle")}</h2>
          <p>{t("aboutBody")}</p>
          <p className="about-projects-label">{t("aboutProLabel")}</p>
          <p className="about-pro">{t("aboutPro")}</p>
          <p className="about-projects-label">{t("aboutProjectsLabel")}</p>
          <ul className="about-bullets">
            <li>{t("aboutBullet2")}</li>
            <li>{t("aboutBullet3")}</li>
          </ul>
          <p className="about-highlight">{t("aboutHighlight")}</p>
        </EdgeReveal>
      </div>

      <EdgeReveal edge="bottom" className="about-links">
        <a
          className="about-link"
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t("headerLinkedInAria")}
        >
          <IconLinkedIn />
        </a>
        <a
          className="about-link"
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t("contactGithub")}
        >
          <IconGitHub />
        </a>
        <a
          className="about-link about-link--resume"
          href={resumeHref}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("contactResumeLabel")}
        </a>
      </EdgeReveal>
    </section>
  );
}
