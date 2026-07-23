"use client";

import { useI18n } from "@/lib/i18n";
import { EdgeReveal } from "@/components/motion/EdgeReveal";
import { contributions } from "@/lib/contributions";

export function OpenSource() {
  const { t } = useI18n();

  return (
    <section id="open-source" className="section">
      <EdgeReveal edge="right">
        <h2>{t("openSourceTitle")}</h2>
        <div className="panel-card">
          <ul>
            {contributions.map((item) => (
              <li key={item.id}>
                {t("openSourcePrefix")}{" "}
                <a
                  href={item.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.repoLabel}
                </a>
                {t(item.summaryKey)}
                <a
                  href={item.prUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t(item.prLabelKey)}
                </a>
                {t("openSourceClose")}
              </li>
            ))}
          </ul>
        </div>
      </EdgeReveal>
    </section>
  );
}
