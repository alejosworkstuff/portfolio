"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scheduleScrollTriggerRefresh } from "@/lib/pageMotion";

gsap.registerPlugin(ScrollTrigger);

/** Home page sections in document order (9). */
const SECTIONS = [
  "hero",
  "projects",
  "about",
  "skills",
  "engineering",
  "open-source",
  "roadmap",
  "ai-dev",
  "contact",
] as const;

/**
 * Unique bright pastel per section — hue-shifted from `--accent`
 * so the palette tracks the active aesthetic and never repeats.
 */
function uniquePastel(index: number, total: number) {
  const hueShift = (index * 360) / total;
  return `oklch(from var(--accent) 0.78 0.14 calc(h + ${hueShift}))`;
}

/**
 * Contiguous scroll progress: full-width rainbow of section blocks,
 * clipped from the left by overall scroll width. Prior colors stay;
 * the next block appears at the tip — no color transitions.
 */
export function ScrollProgressBar() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const revealRef = useRef<HTMLDivElement | null>(null);
  const segmentsRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const track = trackRef.current;
    const reveal = revealRef.current;
    const root = segmentsRef.current;
    if (!track || !reveal || !root) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const entries = SECTIONS.flatMap((id, index) => {
      const el = document.getElementById(id);
      return el ? [{ id, index, el }] : [];
    });

    if (entries.length === 0) {
      track.style.display = "none";
      return;
    }
    track.style.display = "";

    const total = entries.length;
    root.replaceChildren();

    for (const { index, el } of entries) {
      const segment = document.createElement("div");
      segment.className = "scroll-progress__segment";
      segment.style.flexGrow = String(Math.max(el.offsetHeight, 1));
      segment.style.background = uniquePastel(index, total);
      root.appendChild(segment);
    }

    const syncLayout = () => {
      root.style.width = `${track.clientWidth}px`;
      entries.forEach(({ el }, i) => {
        const segment = root.children[i] as HTMLElement | undefined;
        if (segment) {
          segment.style.flexGrow = String(Math.max(el.offsetHeight, 1));
        }
      });
    };

    syncLayout();

    const ctx = gsap.context(() => {
      gsap.fromTo(
        reveal,
        { width: "0%" },
        {
          width: "100%",
          ease: "none",
          scrollTrigger: {
            start: 0,
            end: "max",
            scrub: reduced ? true : 0.12,
            invalidateOnRefresh: true,
          },
        },
      );

      ScrollTrigger.addEventListener("refreshInit", syncLayout);
    });

    scheduleScrollTriggerRefresh(60);

    return () => {
      ScrollTrigger.removeEventListener("refreshInit", syncLayout);
      ctx.revert();
      root.replaceChildren();
    };
  }, []);

  return (
    <div ref={trackRef} className="scroll-progress" aria-hidden="true">
      <div ref={revealRef} className="scroll-progress__reveal">
        <div ref={segmentsRef} className="scroll-progress__segments" />
      </div>
    </div>
  );
}
