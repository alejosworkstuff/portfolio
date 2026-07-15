"use client";

import { useI18n } from "@/lib/i18n";
import { EdgeReveal } from "@/components/motion/EdgeReveal";

export function Hero() {
  const { t } = useI18n();

  return (
    <section id="hero" className="hero">
      <div className="hero-atmosphere" aria-hidden />
      <EdgeReveal edge="bottom" className="hero-inner">
        <p className="brand-mark">{t("logoName")}</p>
        <p className="eyebrow">{t("heroEyebrow")}</p>
        <h1>{t("heroValue")}</h1>
        <p className="lede">{t("heroLede1")}</p>
        <div className="hero-cta">
          <a className="btn" href="#projects">
            {t("heroCtaProjects")}
          </a>
          <a className="btn btn-ghost" href="#contact">
            {t("heroCtaContact")}
          </a>
        </div>
      </EdgeReveal>
    </section>
  );
}
