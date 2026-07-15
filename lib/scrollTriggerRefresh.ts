import {
  scheduleScrollTriggerRefresh,
  beginLayoutMotion,
  tickLayoutMotion,
  endLayoutMotion,
  isLayoutMotionActive,
} from "@/lib/pageMotion";

/** @deprecated Prefer `@/lib/pageMotion` — kept so old imports keep working. */
export {
  scheduleScrollTriggerRefresh,
  beginLayoutMotion as beginLayoutFlow,
  endLayoutMotion as endLayoutFlow,
  tickLayoutMotion,
  isLayoutMotionActive,
};
