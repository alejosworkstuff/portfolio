import { ScrollTrigger } from "gsap/ScrollTrigger";

let timer: number | undefined;
let layoutMotionDepth = 0;

export function isLayoutMotionActive() {
  return layoutMotionDepth > 0;
}

export function scheduleScrollTriggerRefresh(delayMs = 80) {
  if (typeof window === "undefined") return;
  if (timer !== undefined) window.clearTimeout(timer);
  timer = window.setTimeout(() => {
    timer = undefined;
    ScrollTrigger.refresh();
  }, delayMs) as unknown as number;
}

export function beginLayoutMotion() {
  layoutMotionDepth += 1;
  if (timer !== undefined) {
    window.clearTimeout(timer);
    timer = undefined;
  }
}

export function tickLayoutMotion() {
  if (layoutMotionDepth <= 0) return;
  ScrollTrigger.refresh();
}

export function endLayoutMotion() {
  layoutMotionDepth = Math.max(0, layoutMotionDepth - 1);
  if (layoutMotionDepth === 0) {
    scheduleScrollTriggerRefresh(16);
  }
}
