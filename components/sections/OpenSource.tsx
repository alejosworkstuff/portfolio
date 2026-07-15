"use client";

import { useI18n } from "@/lib/i18n";
import { EdgeReveal } from "@/components/motion/EdgeReveal";

export function OpenSource() {
  const { t } = useI18n();

  return (
    <section id="open-source" className="section">
      <EdgeReveal edge="right">
        <h2>{t("openSourceTitle")}</h2>
        <div className="panel-card">
          <p>
            {t("openSourcePrefix")}{" "}
            <a
              href="https://github.com/vercel/ai"
              target="_blank"
              rel="noopener noreferrer"
            >
              vercel/ai
            </a>
            {t("openSourceSuffix")}
            <a
              href="https://github.com/vercel/ai/pull/16869"
              target="_blank"
              rel="noopener noreferrer"
            >
              draft PR #16869
            </a>
            {t("openSourceClose")}
          </p>
        </div>
      </EdgeReveal>
    </section>
  );
}
