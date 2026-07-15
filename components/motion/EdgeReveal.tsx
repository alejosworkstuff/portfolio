"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scheduleScrollTriggerRefresh } from "@/lib/scrollTriggerRefresh";

gsap.registerPlugin(ScrollTrigger);

type Edge = "left" | "right" | "bottom" | "top";

type EdgeRevealProps = {
  children: ReactNode;
  edge?: Edge;
  /** Stagger as a fraction of the scrub window (0–0.3), not time */
  delay?: number;
  className?: string;
};

const offsets: Record<Edge, { x: number; y: number }> = {
  left: { x: -80, y: 28 },
  right: { x: 80, y: 28 },
  bottom: { x: 0, y: 72 },
  top: { x: 0, y: -56 },
};

/**
 * Progress is bound to scroll position (scrub).
 * Scrolling up unwinds the same tween in the same proportion.
 * Native window scroll only — no Lenis proxy (that broke reverse sync).
 */
export function EdgeReveal({
  children,
  edge = "bottom",
  delay = 0,
  className,
}: EdgeRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(el, { autoAlpha: 1, x: 0, y: 0, clearProps: "transform" });
      return;
    }

    const { x, y } = offsets[edge];
    // Short scrub: finish while the block is still mid/lower viewport
    // so a centered section is already fully revealed (not half-done).
    const startY = 92 - Math.min(10, delay * 40);
    const endY = 58 - Math.min(6, delay * 25);

    const syncVisibility = (self: ScrollTrigger) => {
      const p = self.progress;
      gsap.set(el, {
        autoAlpha: p,
        x: x * (1 - p),
        y: y * (1 - p),
      });
    };

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          autoAlpha: 0,
          x,
          y,
        },
        {
          autoAlpha: 1,
          x: 0,
          y: 0,
          ease: "none",
          immediateRender: true,
          scrollTrigger: {
            trigger: el,
            start: `top ${startY}%`,
            end: `top ${endY}%`,
            scrub: true,
            // false: refresh must not re-apply the fromTo "from" state
            // (that flash is what made nearby sections blink on accordion).
            invalidateOnRefresh: false,
            onRefresh: syncVisibility,
          },
        },
      );
    }, el);

    scheduleScrollTriggerRefresh(60);

    return () => ctx.revert();
  }, [edge, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
