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

      <EdgeReveal edge="bottom" className="eng-local eng-local--crt">
        <div className="eng-local__bezel">
          <div className="eng-local__screen">
            <h3>{t("engLocalCiTitle")}</h3>
            <p>{t("engLocalCiIntro")}</p>
            <ol>
              <li>
                {t("engLocalCiStep1a")} <code>npm ci</code>.
              </li>
              <li>
                {t("engLocalCiStep2a")} <code>npm run ci</code>{" "}
                {t("engLocalCiStep2b")}
              </li>
              <li>
                {t("engLocalCiStep3a")}{" "}
                <code>npx playwright install chromium</code>{" "}
                {t("engLocalCiStep3b")} <code>npm run ci:full</code>{" "}
                {t("engLocalCiStep3c")} <code>npm run test:e2e</code>{" "}
                {t("engLocalCiStep3d")} <code>npm run ci</code>.
              </li>
            </ol>
            <ul>
              <li>
                <strong>mini-ecommerce</strong> — {t("engLocalCiEcom")}
              </li>
              <li>
                <strong>mini-job-board</strong> — {t("engLocalCiJob")}
              </li>
              <li>
                <strong>ia-stories</strong> — {t("engLocalCiAi")}
              </li>
            </ul>
            <p className="note">
              {t("engLocalCiNoteA")} <code>.github/workflows/ci.yml</code>{" "}
              {t("engLocalCiNoteB")}
              <span className="crt-cursor" aria-hidden="true" />
            </p>
          </div>
        </div>
      </EdgeReveal>
    </section>
  );
}
