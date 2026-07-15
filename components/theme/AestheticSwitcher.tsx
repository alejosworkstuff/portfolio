"use client";

import { aesthetics, type AestheticId } from "@/lib/aesthetics";
import { useAesthetic } from "@/components/theme/AestheticProvider";
import { useI18n } from "@/lib/i18n";

export function AestheticSwitcher() {
  const { aesthetic, setAesthetic } = useAesthetic();
  const { lang } = useI18n();

  return (
    <label className="aesthetic-switcher">
      <span className="sr-only">
        {lang === "es" ? "Estética" : "Aesthetic"}
      </span>
      <select
        value={aesthetic}
        onChange={(e) => setAesthetic(e.target.value as AestheticId)}
        aria-label={lang === "es" ? "Elegir estética" : "Choose aesthetic"}
      >
        {(Object.keys(aesthetics) as AestheticId[]).map((id) => (
          <option key={id} value={id}>
            {lang === "es" ? aesthetics[id].labelEs : aesthetics[id].label}
          </option>
        ))}
      </select>
    </label>
  );
}
