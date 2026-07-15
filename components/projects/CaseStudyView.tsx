"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import type { CaseStudyContent } from "@/lib/caseStudies";
import { CaseGallery } from "@/components/projects/CaseGallery";
import { EdgeReveal } from "@/components/motion/EdgeReveal";

function CaseSectionBanner({
  title,
  side,
}: {
  title: string;
  side: "left" | "right";
}) {
  return (
    <header className={`case-banner case-banner--${side}`}>
      <div className="case-banner-mark" aria-hidden>
        <span className="case-banner-square case-banner-square--amber" />
        <span className="case-banner-square case-banner-square--teal" />
        <span className="case-banner-square case-banner-square--warm" />
      </div>
      <h2>{title}</h2>
    </header>
  );
}

export function CaseStudyView({ study }: { study: CaseStudyContent }) {
  const { t } = useI18n();

  return (
    <article className="case-study">
      <EdgeReveal edge="bottom">
        <p className="eyebrow">{t(study.eyebrowKey)}</p>
        <h1>{t(study.titleKey)}</h1>
        <p className="lede">{t(study.ledeKey)}</p>
        <Link href="/#projects" className="back-link">
          {t(study.backKey)}
        </Link>
      </EdgeReveal>

      <EdgeReveal edge="right">
        <CaseGallery slides={study.gallery} />
      </EdgeReveal>

      {study.sections.map((section, i) => {
        const side = i % 2 === 0 ? "left" : "right";
        return (
          <EdgeReveal
            key={section.titleKey}
            edge={side}
            className={`case-block case-block--${side}`}
          >
            <CaseSectionBanner title={t(section.titleKey)} side={side} />
            {section.introKey ? <p>{t(section.introKey)}</p> : null}
            {section.paragraphs?.map((key) => (
              <p key={key}>{t(key)}</p>
            ))}
            {section.bullets ? (
              <ul>
                {section.bullets.map((key) => (
                  <li key={key}>{t(key)}</li>
                ))}
              </ul>
            ) : null}
            {section.noteKey ? <p className="note">{t(section.noteKey)}</p> : null}
          </EdgeReveal>
        );
      })}

      <EdgeReveal
        edge={study.sections.length % 2 === 0 ? "left" : "right"}
        className={`case-block case-block--${study.sections.length % 2 === 0 ? "left" : "right"}`}
      >
        <CaseSectionBanner
          title={t(study.outcomesTitleKey)}
          side={study.sections.length % 2 === 0 ? "left" : "right"}
        />
        <ul>
          {study.outcomes.map((key) => (
            <li key={key}>{t(key)}</li>
          ))}
        </ul>
      </EdgeReveal>

      <EdgeReveal
        edge={(study.sections.length + 1) % 2 === 0 ? "left" : "right"}
        className={`case-block case-block--${(study.sections.length + 1) % 2 === 0 ? "left" : "right"}`}
      >
        <CaseSectionBanner
          title={t(study.linksTitleKey)}
          side={(study.sections.length + 1) % 2 === 0 ? "left" : "right"}
        />
        <div className="project-links">
          {study.links.map((link) => (
            <a
              key={link.href}
              className="btn btn-small"
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
            >
              {t(link.labelKey)}
            </a>
          ))}
        </div>
      </EdgeReveal>
    </article>
  );
}
