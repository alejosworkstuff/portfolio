"use client";

import { useTheme } from "next-themes";
import { useAesthetic } from "@/components/theme/AestheticProvider";
import { aesthetics } from "@/lib/aesthetics";
import CursorGrid from "@/components/effects/CursorGrid";

export function CursorGridBackdrop() {
  const { aesthetic } = useAesthetic();
  const { resolvedTheme } = useTheme();
  const mode = resolvedTheme === "dark" ? "dark" : "light";
  const color = aesthetics[aesthetic][mode].accent;

  return (
    <div className="cursor-grid-page" aria-hidden>
      <CursorGrid
        cellSize={70}
        color={color}
        radius={140}
        falloff="smooth"
        holdTime={400}
        fadeDuration={800}
        lineWidth={1.2}
        maxOpacity={0.7}
        fillOpacity={0.06}
        gridOpacity={0.04}
        cellRadius={0}
        clickPulse
        pulseSpeed={600}
        windowEvents
      />
    </div>
  );
}
