"use client";

import { useI18n } from "@/lib/i18n";
import type { TranslationKey } from "@/lib/translations";
import { skillCategories, type SkillIconId } from "@/lib/skills";
import { EdgeReveal } from "@/components/motion/EdgeReveal";

function SkillMark() {
  return (
    <div className="skills-banner-mark" aria-hidden>
      <span className="skills-banner-square skills-banner-square--amber" />
      <span className="skills-banner-square skills-banner-square--teal" />
      <span className="skills-banner-square skills-banner-square--warm" />
    </div>
  );
}

function SkillChipIcon({ icon }: { icon: SkillIconId }) {
  return (
    <span
      className="skill-chip-icon"
      style={{
        WebkitMaskImage: `url(/assets/icons/skills/${icon}.svg)`,
        maskImage: `url(/assets/icons/skills/${icon}.svg)`,
      }}
      aria-hidden
    />
  );
}

export function Skills() {
  const { t } = useI18n();

  return (
    <section id="skills" className="section skills">
      <EdgeReveal edge="left">
        <h2>{t("skillsTitle")}</h2>
      </EdgeReveal>

      <div className="skills-stack">
        {skillCategories.map((category, i) => (
          <EdgeReveal
            key={category.id}
            edge="left"
            delay={i * 0.04}
            className="skills-category"
          >
            <header className="skills-banner">
              <SkillMark />
              <h3>{t(category.titleKey as TranslationKey)}</h3>
            </header>
            <ul className="skill-chips">
              {category.items.map((item) => (
                <li key={item.id} className="skill-chip">
                  {item.icon ? <SkillChipIcon icon={item.icon} /> : null}
                  <span>{t(item.labelKey as TranslationKey)}</span>
                </li>
              ))}
            </ul>
          </EdgeReveal>
        ))}
      </div>
    </section>
  );
}
