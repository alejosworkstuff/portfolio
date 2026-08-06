"use client";

import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";

const SHOW_AFTER_PX = 480;

export function BackToTop() {
  const { t } = useI18n();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > SHOW_AFTER_PX);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTop = () => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      className={`back-to-top${visible ? " is-visible" : ""}`}
      onClick={goTop}
      aria-label={t("backToTopAria")}
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
    >
      <span className="back-to-top__icon" aria-hidden>
        ↑
      </span>
      <span className="back-to-top__label">{t("backToTop")}</span>
    </button>
  );
}
