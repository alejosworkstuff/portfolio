"use client";

import { useCallback, useEffect, useState } from "react";
import { useTheme } from "next-themes";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const toggle = useCallback(() => {
    const next = resolvedTheme === "dark" ? "light" : "dark";
    const root = document.documentElement;

    if (
      !document.startViewTransition ||
      prefersReducedMotion()
    ) {
      setTheme(next);
      return;
    }

    root.dataset.themeTransition =
      next === "light" ? "to-light" : "to-dark";

    const transition = document.startViewTransition(() => {
      setTheme(next);
    });

    transition.finished.finally(() => {
      delete root.dataset.themeTransition;
    });
  }, [resolvedTheme, setTheme]);

  if (!mounted) {
    return (
      <button type="button" className="icon-btn" aria-hidden tabIndex={-1}>
        ·
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      className="icon-btn theme-toggle"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light" : "Dark"}
    >
      {isDark ? "☀" : "☾"}
    </button>
  );
}
