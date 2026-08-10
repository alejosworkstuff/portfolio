"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function waitForAnimation(el: HTMLElement, fallbackMs: number) {
  return new Promise<void>((resolve) => {
    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      resolve();
    };
    el.addEventListener("animationend", finish, { once: true });
    window.setTimeout(finish, fallbackMs);
  });
}

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const busyRef = useRef(false);

  useEffect(() => setMounted(true), []);

  const toggle = useCallback(async () => {
    if (busyRef.current) return;

    const next = resolvedTheme === "dark" ? "light" : "dark";
    const root = document.documentElement;

    if (!document.startViewTransition || prefersReducedMotion()) {
      setTheme(next);
      return;
    }

    busyRef.current = true;

    const drop = document.createElement("span");
    drop.className = "theme-water-drop";
    drop.dataset.to = next;
    drop.setAttribute("aria-hidden", "true");
    document.body.appendChild(drop);

    void drop.offsetWidth;
    drop.classList.add("is-falling");

    try {
      await waitForAnimation(drop, 780);
      drop.remove();

      root.dataset.themeTransition =
        next === "light" ? "to-light" : "to-dark";

      const transition = document.startViewTransition(() => {
        setTheme(next);
      });

      await transition.finished;
    } finally {
      drop.remove();
      delete root.dataset.themeTransition;
      busyRef.current = false;
    }
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
      onClick={() => {
        void toggle();
      }}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light" : "Dark"}
    >
      {isDark ? "☀" : "☾"}
    </button>
  );
}
