"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  isLayoutMotionActive,
  scheduleScrollTriggerRefresh,
} from "@/lib/pageMotion";

gsap.registerPlugin(ScrollTrigger);

type Edge = "left" | "right" | "bottom" | "top";

type EdgeRevealProps = {
  children: ReactNode;
  edge?: Edge;
  /** Stagger as a fraction of the scrub window (0–0.3), not time */
  delay?: number;
  className?: string;
};

/**
 * Horizontal-only offsets. Vertical motion is owned by document layout so
 * accordion height tweens and scroll scrub share one vertical model.
 */
const offsets: Record<Edge, number> = {
  left: -80,
  right: 80,
  bottom: 0,
  top: 0,
};

/**
 * Scroll-driven reveal: autoAlpha + x only.
 * - Scroll updates progress while the user scrolls.
 * - Layout motion (accordion) refreshes markers each frame; settled nodes
 *   stay fully visible so a height change cannot “unreveal” them.
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
      gsap.set(el, { autoAlpha: 1, x: 0, clearProps: "transform" });
      return;
    }

    const x = offsets[edge];
    const startY = 92 - Math.min(10, delay * 40);
    const endY = 58 - Math.min(6, delay * 25);

    let settled = el.dataset.edgeSettled === "1";

    const paint = (p: number) => {
      gsap.set(el, {
        autoAlpha: p,
        x: x * (1 - p),
        y: 0,
      });
    };

    const apply = (self: ScrollTrigger) => {
      if (settled || el.dataset.edgeSettled === "1") {
        settled = true;
        el.dataset.edgeSettled = "1";
        paint(1);
        return;
      }

      if (self.progress >= 1) {
        settled = true;
        el.dataset.edgeSettled = "1";
        paint(1);
        return;
      }

      // During layout motion, never drop a mid-reveal below its current paint
      // if progress collapses from geometry shifting — keep at least visible.
      if (isLayoutMotionActive() && self.progress < 0.05) {
        const opacity = Number(gsap.getProperty(el, "opacity"));
        if (opacity > 0.2) {
          settled = true;
          el.dataset.edgeSettled = "1";
          paint(1);
          return;
        }
      }

      paint(self.progress);
    };

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, x, y: 0 },
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
            invalidateOnRefresh: false,
            onUpdate(self) {
              if (self.progress >= 1) {
                settled = true;
                el.dataset.edgeSettled = "1";
                paint(1);
                return;
              }

              if (
                (settled || el.dataset.edgeSettled === "1") &&
                self.direction === -1 &&
                !isLayoutMotionActive()
              ) {
                settled = false;
                delete el.dataset.edgeSettled;
                paint(self.progress);
                return;
              }

              if (settled || el.dataset.edgeSettled === "1") {
                paint(1);
                return;
              }

              apply(self);
            },
            onRefresh: apply,
          },
        },
      );
    }, el);

    scheduleScrollTriggerRefresh(60);

    return () => ctx.revert();
  }, [edge, delay]);

  return (
    <div ref={ref} className={className} data-edge-reveal>
      {children}
    </div>
  );
}
