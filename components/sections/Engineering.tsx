"use client";

import { useI18n } from "@/lib/i18n";
import { EdgeReveal } from "@/components/motion/EdgeReveal";

export function Engineering() {
  const { t } = useI18n();

  return (
    <section id="engineering" className="section engineering">
      <EdgeReveal edge="left">
        <h2>{t("engineeringTitle")}</h2>
        <p className="section-lede">{t("engIntro")}</p>
      </EdgeReveal>

      <div className="card-grid">
        {(
          [
            {
              title: "engTestingTitle",
              bullets: ["engTestingBullet1", "engTestingBullet2", "engTestingBullet3"],
            },
            {
              title: "engCiTitle",
              bullets: ["engCiBullet1", "engCiBullet2"],
            },
            {
              title: "engAuthTitle",
              bullets: ["engAuthBullet1", "engAuthBullet2", "engAuthBullet3"],
            },
            {
              title: "engObsTitle",
              bullets: ["engObsBullet1", "engObsBullet2"],
            },
          ] as const
        ).map((card, i) => (
          <EdgeReveal
            key={card.title}
            edge={i % 2 === 0 ? "left" : "right"}
            delay={i * 0.04}
          >
            <div className="panel-card">
              <h3>{t(card.title)}</h3>
              <ul>
                {card.bullets.map((b) => (
                  <li key={b}>{t(b)}</li>
                ))}
              </ul>
            </div>
          </EdgeReveal>
        ))}
      </div>
    </section>
  );
}

