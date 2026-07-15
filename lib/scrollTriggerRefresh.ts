import { ScrollTrigger } from "gsap/ScrollTrigger";

let timer: number | undefined;

/** Coalesce layout thrash so N EdgeReveals / details toggles don't race refresh. */
export function scheduleScrollTriggerRefresh(delayMs = 80) {
  if (typeof window === "undefined") return;
  if (timer !== undefined) window.clearTimeout(timer);
  timer = window.setTimeout(() => {
    timer = undefined;
    ScrollTrigger.refresh();
  }, delayMs) as unknown as number;
}
