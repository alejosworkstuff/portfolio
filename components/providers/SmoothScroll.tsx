"use client";

import { useLayoutEffect, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scheduleScrollTriggerRefresh } from "@/lib/scrollTriggerRefresh";

gsap.registerPlugin(ScrollTrigger);

/**
 * Native window scroll + ScrollTrigger refresh on real layout changes.
 * Lenis was removed: its scrollerProxy desynced scrub on scroll-up.
 *
 * Roadmap (and other EdgeReveal blocks) used to stay at autoAlpha:0 until a
 * window resize (e.g. fullscreen) because ST metrics went stale when page
 * height changed from images / open <details> without a refresh.
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  useLayoutEffect(() => {
    const refresh = () => scheduleScrollTriggerRefresh(100);

    window.addEventListener("resize", refresh);
    window.addEventListener("orientationchange", refresh);
    window.addEventListener("load", refresh);

    // Page height grows when project posters / gallery webps decode.
    const ro = new ResizeObserver(refresh);
    ro.observe(document.documentElement);

    // Accordion open/close in Roadmap shifts all triggers below.
    const onToggle = (event: Event) => {
      if (event.target instanceof HTMLDetailsElement) refresh();
    };
    document.addEventListener("toggle", onToggle, true);

    const boot = window.setTimeout(refresh, 120);
    const late = window.setTimeout(refresh, 600);

    return () => {
      window.clearTimeout(boot);
      window.clearTimeout(late);
      window.removeEventListener("resize", refresh);
      window.removeEventListener("orientationchange", refresh);
      window.removeEventListener("load", refresh);
      document.removeEventListener("toggle", onToggle, true);
      ro.disconnect();
    };
  }, []);

  return <>{children}</>;
}
