export type AestheticId = "cream-amber" | "sky-blue" | "space-violet";

export type ThemeTokens = {
  bg: string;
  bgDeep: string;
  text: string;
  muted: string;
  accent: string;
  accentSoft: string;
  accentAlt: string;
  panel: string;
  stroke: string;
  glowWarm: string;
  glowAmber: string;
  grainOpacity: string;
};

export type AestheticPack = {
  id: AestheticId;
  label: string;
  labelEs: string;
  light: ThemeTokens;
  dark: ThemeTokens;
};

/** Harvest cream + terracotta — retro 60/70s default */
export const creamAmber: AestheticPack = {
  id: "cream-amber",
  label: "Harvest Retro",
  labelEs: "Cosecha Retro",
  light: {
    bg: "#ECE6C2",
    bgDeep: "#E0D8B0",
    text: "#3D2E24",
    muted: "#6F5643",
    accent: "#CC6B49",
    accentSoft: "#D2A24C",
    accentAlt: "#73BDA8",
    panel: "#E0D8B0",
    stroke: "#6F5643",
    glowWarm: "#CC6B49",
    glowAmber: "#D2A24C",
    grainOpacity: "0.1",
  },
  dark: {
    bg: "#2A211A",
    bgDeep: "#3D2E24",
    text: "#ECE6C2",
    muted: "#C4B89A",
    accent: "#CC6B49",
    accentSoft: "#D2A24C",
    accentAlt: "#73BDA8",
    panel: "#3D2E24",
    stroke: "#D2A24C",
    glowWarm: "#CC6B49",
    glowAmber: "#D2A24C",
    grainOpacity: "0.06",
  },
};

export const skyBlue: AestheticPack = {
  id: "sky-blue",
  label: "Sky Block",
  labelEs: "Bloque Cielo",
  light: {
    bg: "#E8E4D6",
    bgDeep: "#D8D4C4",
    text: "#142028",
    muted: "#4A5A68",
    accent: "#3A7CA5",
    accentSoft: "#D2A24C",
    accentAlt: "#73BDA8",
    panel: "#D8D4C4",
    stroke: "#142028",
    glowWarm: "#3A7CA5",
    glowAmber: "#73BDA8",
    grainOpacity: "0.09",
  },
  dark: {
    bg: "#0E161C",
    bgDeep: "#162028",
    text: "#E8E4D6",
    muted: "#9AABBA",
    accent: "#5B9FC4",
    accentSoft: "#D2A24C",
    accentAlt: "#73BDA8",
    panel: "#162028",
    stroke: "#5B9FC4",
    glowWarm: "#5B9FC4",
    glowAmber: "#73BDA8",
    grainOpacity: "0.05",
  },
};

export const spaceViolet: AestheticPack = {
  id: "space-violet",
  label: "Mod Violet",
  labelEs: "Violeta Mod",
  light: {
    bg: "#E8E2EC",
    bgDeep: "#D8D0E0",
    text: "#1A1422",
    muted: "#5C5468",
    accent: "#6B3FA0",
    accentSoft: "#D2A24C",
    accentAlt: "#73BDA8",
    panel: "#D8D0E0",
    stroke: "#1A1422",
    glowWarm: "#6B3FA0",
    glowAmber: "#D2A24C",
    grainOpacity: "0.09",
  },
  dark: {
    bg: "#12101A",
    bgDeep: "#1C1826",
    text: "#EDE8F5",
    muted: "#A89CBC",
    accent: "#A78BFA",
    accentSoft: "#D2A24C",
    accentAlt: "#73BDA8",
    panel: "#1C1826",
    stroke: "#A78BFA",
    glowWarm: "#A78BFA",
    glowAmber: "#D2A24C",
    grainOpacity: "0.05",
  },
};

export const aesthetics: Record<AestheticId, AestheticPack> = {
  "cream-amber": creamAmber,
  "sky-blue": skyBlue,
  "space-violet": spaceViolet,
};

export const DEFAULT_AESTHETIC: AestheticId = "cream-amber";
export const AESTHETIC_STORAGE_KEY = "portfolio-aesthetic";

export function tokensToCssVars(tokens: ThemeTokens): Record<string, string> {
  return {
    "--bg": tokens.bg,
    "--bg-deep": tokens.bgDeep,
    "--text": tokens.text,
    "--muted": tokens.muted,
    "--accent": tokens.accent,
    "--accent-soft": tokens.accentSoft,
    "--accent-alt": tokens.accentAlt,
    "--panel": tokens.panel,
    "--stroke": tokens.stroke,
    "--glow-warm": tokens.glowWarm,
    "--glow-amber": tokens.glowAmber,
    "--grain-opacity": tokens.grainOpacity,
  };
}
