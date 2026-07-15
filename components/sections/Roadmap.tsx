"use client";

import {
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
  type MouseEvent,
} from "react";
import gsap from "gsap";
import { useI18n } from "@/lib/i18n";
import { EdgeReveal } from "@/components/motion/EdgeReveal";
import { scheduleScrollTriggerRefresh } from "@/lib/scrollTriggerRefresh";
import roadmapData from "@/lib/roadmap.json";
import { roadmapStrings } from "@/lib/translations";

type Task = {
  label: string;
  labelEs?: string;
  status: string;
  repo?: string;
  proofUrl?: string;
};

type Group = {
  label: string;
  labelEs?: string;
  tasks: Task[];
};

type Phase = {
  id: string;
  label: string;
  labelEs?: string;
  status: string;
  completedDate?: string;
  collapsed?: boolean;
  groups: Group[];
};

type RoadmapStrings = (typeof roadmapStrings)["en"];

const EXPAND_DURATION = 0.85;
const COLLAPSE_DURATION = 0.75;

function RoadmapPhase({
  phase,
  lang,
  strings,
}: {
  phase: Phase;
  lang: "en" | "es";
  strings: RoadmapStrings;
}) {
  const [open, setOpen] = useState(!phase.collapsed);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const animatingRef = useRef(false);

  useLayoutEffect(() => {
    const el = panelRef.current;
    if (!el) return;
    gsap.set(el, {
      height: open ? "auto" : 0,
      overflow: "hidden",
    });
    // Initial paint only — open state after that is driven by the click handler.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useLayoutEffect(() => {
    return () => {
      tweenRef.current?.kill();
    };
  }, []);

  const handleSummaryClick = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      event.preventDefault();
      if (animatingRef.current) return;

      const el = panelRef.current;
      if (!el) return;

      tweenRef.current?.kill();

      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const duration = reduced
        ? 0
        : open
          ? COLLAPSE_DURATION
          : EXPAND_DURATION;

      // Keep ScrollTrigger markers in sync with live height so scrubbed
      // reveals below don't jump to progress 0 when the page shortens.
      const syncLayout = () => scheduleScrollTriggerRefresh(32);

      if (open) {
        animatingRef.current = true;
        tweenRef.current = gsap.fromTo(
          el,
          { height: el.scrollHeight },
          {
            height: 0,
            duration,
            ease: "power2.inOut",
            onUpdate: syncLayout,
            onComplete: () => {
              setOpen(false);
              animatingRef.current = false;
              syncLayout();
            },
          },
        );
        return;
      }

      setOpen(true);
      animatingRef.current = true;

      // Wait for <details open> to paint — closed content is display:none and
      // scrollHeight is 0 until then.
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const target = panelRef.current;
          if (!target) {
            animatingRef.current = false;
            return;
          }

          gsap.set(target, { height: "auto" });
          const fullHeight = target.scrollHeight;
          gsap.set(target, { height: 0 });

          tweenRef.current = gsap.to(target, {
            height: fullHeight,
            duration,
            ease: "power2.out",
            onUpdate: syncLayout,
            onComplete: () => {
              gsap.set(target, { height: "auto" });
              animatingRef.current = false;
              syncLayout();
            },
          });
        });
      });
    },
    [open],
  );

  return (
    <details className="roadmap-phase" open={open}>
      <summary onClick={handleSummaryClick}>
        <span>
          {lang === "es" && phase.labelEs ? phase.labelEs : phase.label}
        </span>
        <span className={`badge badge-${phase.status}`}>
          {phase.status === "done"
            ? strings.statusDone
            : strings.statusInProgress}
        </span>
      </summary>
      <div ref={panelRef} className="roadmap-phase__panel">
        {phase.groups.map((group) => (
          <div key={group.label} className="roadmap-group">
            <h4>
              {lang === "es" && group.labelEs ? group.labelEs : group.label}
            </h4>
            <ul>
              {group.tasks.map((task) => (
                <li key={task.label}>
                  <span>
                    {lang === "es" && task.labelEs
                      ? task.labelEs
                      : task.label}
                  </span>
                  {task.proofUrl ? (
                    <a
                      href={task.proofUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={strings.proofAria}
                    >
                      ↗
                    </a>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </details>
  );
}

export function Roadmap() {
  const { t, lang } = useI18n();
  const phases = (roadmapData as { phases: Phase[] }).phases;
  const strings = roadmapStrings[lang];

  return (
    <section id="roadmap" className="section roadmap">
      <EdgeReveal edge="left">
        <h2>{t("roadmapTitle")}</h2>
        <p className="section-lede">{t("roadmapIntro")}</p>
      </EdgeReveal>

      <div className="roadmap-list">
        {phases.map((phase) => (
          <RoadmapPhase
            key={phase.id}
            phase={phase}
            lang={lang}
            strings={strings}
          />
        ))}
      </div>
    </section>
  );
}
