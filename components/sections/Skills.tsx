"use client";

import { useI18n } from "@/lib/i18n";
import type { TranslationKey } from "@/lib/translations";
import { skillCategories, type SkillIconId } from "@/lib/skills";
import { EdgeReveal } from "@/components/motion/EdgeReveal";

function SkillMark() {
  return (
    <div className="case-banner-mark" aria-hidden>
      <span className="case-banner-square case-banner-square--amber" />
      <span className="case-banner-square case-banner-square--teal" />
      <span className="case-banner-square case-banner-square--warm" />
    </div>
  );
}

function SkillIcon({ icon, title }: { icon: SkillIconId; title: string }) {
  return (
    
    <img
      className="skill-chip-img"
      src={`/assets/icons/skills/${icon}.svg`}
      alt=""
      title={title}
      width={18}
      height={18}
      loading="lazy"
      decoding="async"
      draggable={false}
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
        {skillCategories.map((category) => (
          <div key={category.id} className="skills-category">
            <EdgeReveal edge="left">
            <header className="case-banner case-banner--left"> 
                <SkillMark />
             <h3>{t(category.titleKey as TranslationKey)}</h3>
            </header>
            <ul className="skill-chips">
              {category.items.map((item) => {
                const label = t(item.labelKey as TranslationKey);
                const content = (
                  <>
                    {item.icon ? (
                      <SkillIcon icon={item.icon} title={label} />
                    ) : null}
                    <span>{label}</span>
                  </>
                );

                return (
                  <li key={item.id}>
                    {item.href ? (
                      <a
                        className="skill-chip"
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {content}
                      </a>
                    ) : (
                      <span className="skill-chip">{content}</span>
                    )}
                  </li>
                );
              })}
            </ul>
            </EdgeReveal>
          </div>
         
        ))}
      </div> 
      
    </section>
  );
}
