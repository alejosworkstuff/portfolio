"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { EdgeReveal } from "@/components/motion/EdgeReveal";

const EMAIL = "alejoworkstuff@gmail.com";

export function Contact() {
  const { t, lang } = useI18n();
  const [copied, setCopied] = useState(false);

  const resumeHref =
    lang === "es" ? "/resume/es.html" : "/resume/en.html";
  const coverHref =
    lang === "es"
      ? "/resume/cover-letter-es.html"
      : "/resume/cover-letter-en.html";

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section id="contact" className="section contact">
      <EdgeReveal edge="bottom">
        <h2>{t("contactTitle")}</h2>
        <p className="section-lede">{t("contactBody")}</p>
        <p className="contact-email">{t("contactEmail")}</p>
        <div className="contact-links">
          <button type="button" className="btn btn-small" onClick={copyEmail}>
            {copied ? (lang === "es" ? "Copiado" : "Copied") : t("contactCopyEmail")}
          </button>
          <a className="btn btn-ghost btn-small" href={`mailto:${EMAIL}`}>
            {t("contactUseEmailApp")}
          </a>
        </div>
        <div className="contact-social">
          <a
            href="https://github.com/alejosworkstuff"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/alejo-castillo-5bb3a01bb/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href={resumeHref} target="_blank" rel="noopener noreferrer">
            {lang === "es" ? "CV" : "Resume"}
          </a>
          <a href={coverHref} target="_blank" rel="noopener noreferrer">
            {lang === "es" ? "Carta" : "Cover letter"}
          </a>
        </div>
      </EdgeReveal>
    </section>
  );
}
