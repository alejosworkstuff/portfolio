"use client";

import { useState } from "react";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { AestheticSwitcher } from "@/components/theme/AestheticSwitcher";

const NAV = [
  { href: "/#projects", key: "navProjects" },
  { href: "/#about", key: "navAbout" },
  { href: "/#skills", key: "navSkills" },
  { href: "/#engineering", key: "navEngineering" },
  { href: "/#contact", key: "navContact" },
] as const;

export function SiteHeader() {
  const { t, lang, toggleLang } = useI18n();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <Link href="/" className="logo">
        {t("logoName")}
      </Link>

      <button
        type="button"
        className="nav-toggle"
        aria-expanded={open}
        aria-controls="site-nav"
        onClick={() => setOpen((v) => !v)}
      >
        {t("navToggleText")}
      </button>

      <nav
        id="site-nav"
        className={`site-nav${open ? " is-open" : ""}`}
        aria-label="Primary"
      >
        {NAV.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
          >
            {t(item.key)}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <AestheticSwitcher />
        <ThemeToggle />
        <a
          className="header-linkedin"
          href="https://www.linkedin.com/in/alejo-castillo-5bb3a01bb/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t("headerLinkedInAria")}
        >
          {t("headerLinkedIn")}
        </a>
        <button
          type="button"
          className="lang-toggle"
          onClick={toggleLang}
          aria-label={lang === "en" ? "Switch language to Spanish" : "Cambiar idioma a inglés"}
        >
          {lang === "en" ? "ES" : "EN"}
        </button>
      </div>
    </header>
  );
}
