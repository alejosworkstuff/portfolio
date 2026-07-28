"use client";

import { useMemo } from "react";
import { useI18n } from "@/lib/i18n";
import type { TranslationKey } from "@/lib/translations";
import {
  skillCategories,
  type SkillIconId,
  type SkillItem,
} from "@/lib/skills";
import { EdgeReveal } from "@/components/motion/EdgeReveal";
import LogoLoop, { type LogoItem } from "@/components/effects/LogoLoop";

function SkillMark() {
  return (
    <div className="skills-banner-mark" aria-hidden>
      <span className="skills-banner-square skills-banner-square--amber" />
      <span className="skills-banner-square skills-banner-square--teal" />
      <span className="skills-banner-square skills-banner-square--warm" />
    </div>
  );
}

function LoopAsset({ icon, title }: { icon: SkillIconId; title: string }) {
  return (
    <img
      className="skills-loop-asset"
      src={`/assets/icons/skills/${icon}.svg`}
      alt=""
      title={title}
      width={36}
      height={36}
      loading="lazy"
      decoding="async"
      draggable={false}
    />
  );
}

function toLogoItems(
  items: SkillItem[],
  label: (key: TranslationKey) => string,
): LogoItem[] {
  return items.map((item) => {
    const title = label(item.labelKey as TranslationKey);
    if (item.icon) {
      return {
        node: (
          <span className="skills-loop-item">
            <LoopAsset icon={item.icon} title={title} />
            <span className="skills-loop-label">{title}</span>
          </span>
        ),
        title,
        href: item.href,
      };
    }
    return {
      node: <span className="skills-loop-label">{title}</span>,
      title,
      href: item.href,
    };
  });
}

export function Skills() {
  const { t } = useI18n();

  const categoryLogos = useMemo(
    () =>
      skillCategories.map((category) => ({
        id: category.id,
        logos: toLogoItems(category.items, t),
      })),
    [t],
  );

  return (
    <section id="skills" className="section skills">
      <EdgeReveal edge="left">
        <h2>{t("skillsTitle")}</h2>
      </EdgeReveal>

      <div className="skills-stack">
        {skillCategories.map((category, i) => {
          const logos =
            categoryLogos.find((entry) => entry.id === category.id)?.logos ??
            [];

          return (
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
              <div className="skills-logo-loop-wrap">
                <LogoLoop
                  logos={logos}
                  speed={100}
                  direction={category.direction}
                  logoHeight={48}
                  gap={48}
                  hoverSpeed={0}
                  scaleOnHover
                  fadeOut
                  className="skills-logo-loop"
                  ariaLabel={t(category.titleKey as TranslationKey)}
                />
              </div>
            </EdgeReveal>
          );
        })}
      </div>
    </section>
  );
}
