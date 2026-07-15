import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Shared motion bus for the portfolio page.
 *
 * Two drivers must agree on the same model:
 * 1) **Scroll** — EdgeReveal scrub (opacity + horizontal only).
 * 2) **Layout** — in-flow height changes (roadmap accordion, etc.).
 *
 * Vertical position is ALWAYS owned by document layout (no GSAP `y` on reveals).
 * During layout tweens we refresh ScrollTrigger every frame so scrub markers
 * track live geometry; settled reveals refuse to rewind to opacity 0.
 */

let timer: number | undefined;
let layoutMotionDepth = 0;

export function isLayoutMotionActive() {
  return layoutMotionDepth > 0;
}

/** Coalesce idle refreshes (resize, image load, accordion end). */
export function scheduleScrollTriggerRefresh(delayMs = 80) {
  if (typeof window === "undefined") return;
  if (timer !== undefined) window.clearTimeout(timer);
  timer = window.setTimeout(() => {
    timer = undefined;
    ScrollTrigger.refresh();
  }, delayMs) as unknown as number;
}

/** Start a document-height animation that other motion must track. */
export function beginLayoutMotion() {
  layoutMotionDepth += 1;
  if (timer !== undefined) {
    window.clearTimeout(timer);
    timer = undefined;
  }
}

/** Call on every layout tween frame so scroll scrub sees live positions. */
export function tickLayoutMotion() {
  if (layoutMotionDepth <= 0) return;
  ScrollTrigger.refresh();
}

/** Layout tween finished — one final sync. */
export function endLayoutMotion() {
  layoutMotionDepth = Math.max(0, layoutMotionDepth - 1);
  if (layoutMotionDepth === 0) {
    scheduleScrollTriggerRefresh(16);
  }
}
