# animationattemps

Log of attempts to make content **below** the roadmap accordion move fluidly while a phase expands/collapses (instead of freezing, then teleporting).

Goal confirmed with Alejo (2026-07-15):
- Expand/collapse should reflow the page.
- Sections under the roadmap (e.g. “How I use AI in development”) must **slide with** the height change.
- Bad UX: they stay visually frozen, then jump when the accordion finishes.

---

## Attempt 1 — Refresh ScrollTrigger on every height frame

**Where:** `Roadmap.tsx` accordion tween `onUpdate` → `scheduleScrollTriggerRefresh(32)`.

**Idea:** Keep ST markers in sync while height animates.

**Result:** Sibling / below `EdgeReveal` scrub rewound or flashed (opacity/transform jump). Teleport still felt at end.

---

## Attempt 2 — Pause ScrollTrigger.refresh during accordion

**Where:** `pauseScrollTriggerRefresh` / `resumeScrollTriggerRefresh` in `lib/scrollTriggerRefresh.ts`.

**Idea:** Stop mid-animation invalidation flash.

**Result:** Markers went stale while the document shortened/grew; scrub progress jumped on resume → freeze then teleport. Worse for scroll-clamp cases.

---

## Attempt 3 — Remove EdgeReveal wrappers from each roadmap phase

**Where:** `Roadmap.tsx` list items.

**Idea:** Accordion siblings were flashing because each card was scrubbed.

**Result:** Fixed **sibling card** flash. Did **not** fix content **below** the roadmap section (still EdgeReveal-driven).

---

## Attempt 4 — `invalidateOnRefresh: false` + sync progress on refresh

**Where:** `EdgeReveal.tsx`.

**Idea:** Stop fromTo “from” state flash (`autoAlpha: 0`) when `ScrollTrigger.refresh()` runs.

**Result:** Less blink on refresh; freeze→teleport below accordion remained.

---

## Attempt 5 — `beginLayoutFlow` / `endLayoutFlow` (CURRENT before Attempt 6)

**Where:**
- `lib/scrollTriggerRefresh.ts` — `beginLayoutFlow`, `endLayoutFlow`
- `EdgeReveal.tsx` — `data-edge-reveal` attribute
- `Roadmap.tsx` — call begin on accordion start, end on complete; **no** per-frame refresh

**What it does now:**
1. On expand/collapse start: increment `layoutFlowDepth`, clear pending refresh timer.
2. `ScrollTrigger.getAll().forEach(st => st.disable(false))`.
3. `gsap.set("[data-edge-reveal]", { x: 0, y: 0 })`.
4. Animate panel `height` with GSAP only (layout reflow expected).
5. On complete: re-`enable` triggers, `scheduleScrollTriggerRefresh(40)`.

**Hypothesis:** Scrub transforms fight document reflow / scroll anchoring; zeroing `x/y` + disabling ST lets pure layout move siblings.

**Result (Alejo, 2026-07-15):** Still the same — freeze, then teleport. (Also hit a transient `ChunkLoadError` / HMR blip while testing.)

---

## Attempt 6 — Scroll lock + clearProps + overflow-anchor (IN PROGRESS)

**Where:** `lib/scrollTriggerRefresh.ts` (`beginLayoutFlow` / `endLayoutFlow`).

**What it does:**
1. Same ST disable + edge-reveal transform clear as Attempt 5.
2. Also `clearProps: "transform"` (not only `x`/`y`).
3. Lock `scrollY` for the tween duration (re-apply on any scroll event).
4. Set `overflow-anchor: none` on `html` + `#roadmap` during the anim.
5. On end: unlock scroll, restore overflow-anchor, enable ST, refresh once.

**Hypothesis:** Browser scroll-anchoring adjusts `scrollY` while height grows; scrub/residual transform cancels the push → freeze; final refresh → teleport.

**Result (Alejo, 2026-07-15):** Still broken — content below goes **invisible** (empty band under the mustard stripe). Root cause: scrub/`autoAlpha` driven to 0 after layout shift + refresh, not only a transform fight.

---

## Attempt 7 — Force autoAlpha:1 + “settled” latch (IN PROGRESS)

**Where:** `EdgeReveal.tsx` + `lib/scrollTriggerRefresh.ts`.

**What it does:**
1. During accordion: mark any partially/fully visible reveal as `data-edge-settled="1"`, then `gsap.set(..., { autoAlpha: 1, x: 0, y: 0 })`.
2. `EdgeReveal` latches at progress 1: layout refresh must not rewind to opacity 0. Rewind only on real scroll-up (`direction === -1`).
3. After `endLayoutFlow` refresh, call `freezeRevealsVisible()` again so settled sections stay opaque.

**Hypothesis:** “Invisible” = `autoAlpha: 0` from scrub progress collapsing when the block is pushed down with scroll locked. Keep settled reveals forced visible through accordion + refresh.

**Result (Alejo, 2026-07-15):** Visibility fixed (no longer blank), but **did not fix the real bug** — expansion still does not fluidly drive the scroll-linked motion. Fighting two systems (layout height vs scrub transforms / disable-ST) is the wrong model.

---

## Attempt 8 — Shared `pageMotion` bus (layout + scroll) — IN PROGRESS

**Where:**
- NEW `lib/pageMotion.ts` — `beginLayoutMotion` / `tickLayoutMotion` / `endLayoutMotion`
- `EdgeReveal.tsx` — **no GSAP `y`**; scrub = `autoAlpha` + `x` only; settled latch; during layout motion refuse opacity collapse
- `Roadmap.tsx` — height tween calls `tickLayoutMotion()` every frame (live `ScrollTrigger.refresh`), no scroll-lock / no ST disable
- `scrollTriggerRefresh.ts` — thin re-export for old import paths

**Model:**
1. **Vertical** = document layout only (accordion height pushes siblings naturally).
2. **Scroll** = horizontal + fade scrub only.
3. While accordion animates, refresh ST each frame so scrub geometry tracks layout; settled reveals stay painted at 1.

**Result:** pending Alejo check.

---

## Notes

- Do **not** push until Alejo OK’s a fix.
- Local server: `http://localhost:3010`.
