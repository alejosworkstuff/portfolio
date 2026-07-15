"use client";

import { useI18n } from "@/lib/i18n";
import { EdgeReveal } from "@/components/motion/EdgeReveal";

export function AiDev() {
  const { t } = useI18n();

  return (
    <section id="ai-dev" className="section">
      <EdgeReveal edge="right">
        <h2>{t("aiDevTitle")}</h2>
        <div className="panel-card">
          <p>{t("aiDevIntro")}</p>
          <ul>
            <li>{t("aiDevBulletWorkflow")}</li>
            <li>{t("aiDevBulletProduct")}</li>
            <li>{t("aiDevBulletQuality")}</li>
            <li>{t("aiDevBulletOwnership")}</li>
          </ul>
        </div>
      </EdgeReveal>
    </section>
  );
}
