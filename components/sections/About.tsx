"use client";

import Image from "next/image";
import { useI18n } from "@/lib/i18n";
import { EdgeReveal } from "@/components/motion/EdgeReveal";

export function About() {
  const { t } = useI18n();

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
          <p className="about-location">{t("aboutLocation")}</p>
        </EdgeReveal>

        <EdgeReveal edge="right" className="about-copy">
          <h2>{t("aboutTitle")}</h2>
          <p>{t("aboutBody")}</p>
          <ul className="about-bullets">
            <li>{t("aboutBullet1")}</li>
            <li>{t("aboutBullet2")}</li>
            <li>{t("aboutBullet3")}</li>
          </ul>
          <div className="about-highlight">
            <p>{t("aboutHighlight")}</p>
          </div>
        </EdgeReveal>
      </div>
    </section>
  );
}
