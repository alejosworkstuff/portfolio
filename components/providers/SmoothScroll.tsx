"use client";

import { useLayoutEffect, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scheduleScrollTriggerRefresh } from "@/lib/scrollTriggerRefresh";

gsap.registerPlugin(ScrollTrigger);

export function SmoothScroll({ children }: { children: ReactNode }) {
  useLayoutEffect(() => {
    const refresh = () => scheduleScrollTriggerRefresh(100);

    window.addEventListener("resize", refresh);
    window.addEventListener("orientationchange", refresh);
    window.addEventListener("load", refresh);

    const ro = new ResizeObserver(refresh);
    ro.observe(document.documentElement);

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
