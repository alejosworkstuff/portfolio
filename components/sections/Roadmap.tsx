"use client";

import { useI18n } from "@/lib/i18n";
import { EdgeReveal } from "@/components/motion/EdgeReveal";

const MILESTONES = [
  { titleKey: "milestone1Title", bodyKey: "milestone1Body" },
  { titleKey: "milestone2Title", bodyKey: "milestone2Body" },
  { titleKey: "milestone3Title", bodyKey: "milestone3Body" },
] as const;

export function Roadmap() {
  const { t } = useI18n();

  return (
    <section id="recent-work" className="section recent-work">
      <EdgeReveal edge="left">
        <h2>{t("roadmapTitle")}</h2>
      </EdgeReveal>

      <EdgeReveal edge="right">
        <ul className="milestone-list">
          {MILESTONES.map((item) => (
            <li key={item.titleKey} className="milestone-card">
              <strong className="milestone-card__title">{t(item.titleKey)}</strong>
              <p className="milestone-card__body">{t(item.bodyKey)}</p>
            </li>
          ))}
        </ul>
      </EdgeReveal>
    </section>
  );
}
