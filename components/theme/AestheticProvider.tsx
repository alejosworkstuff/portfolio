"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { useTheme } from "next-themes";
import {
  AESTHETIC_STORAGE_KEY,
  DEFAULT_AESTHETIC,
  aesthetics,
  tokensToCssVars,
  type AestheticId,
} from "@/lib/aesthetics";

type AestheticContextValue = {
  aesthetic: AestheticId;
  setAesthetic: (id: AestheticId) => void;
};

const AestheticContext = createContext<AestheticContextValue | null>(null);

function applyTokens(id: AestheticId, resolvedTheme: string | undefined) {
  const pack = aesthetics[id];
  const mode = resolvedTheme === "dark" ? "dark" : "light";
  const vars = tokensToCssVars(pack[mode]);
  const root = document.documentElement;
  root.setAttribute("data-aesthetic", id);
  Object.entries(vars).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
}

export function AestheticProvider({ children }: { children: ReactNode }) {
  const { resolvedTheme } = useTheme();
  const [aesthetic, setAestheticState] =
    useState<AestheticId>(DEFAULT_AESTHETIC);

  useEffect(() => {
    const stored = window.localStorage.getItem(AESTHETIC_STORAGE_KEY);
    if (stored === "cream-amber" || stored === "sky-blue" || stored === "space-violet") {
      setAestheticState(stored);
    }
  }, []);

  useEffect(() => {
    applyTokens(aesthetic, resolvedTheme);
    window.localStorage.setItem(AESTHETIC_STORAGE_KEY, aesthetic);
  }, [aesthetic, resolvedTheme]);

  const setAesthetic = useCallback((id: AestheticId) => {
    setAestheticState(id);
  }, []);

  const value = useMemo(
    () => ({ aesthetic, setAesthetic }),
    [aesthetic, setAesthetic],
  );

  return (
    <AestheticContext.Provider value={value}>{children}</AestheticContext.Provider>
  );
}

export function useAesthetic() {
  const ctx = useContext(AestheticContext);
  if (!ctx) throw new Error("useAesthetic must be used within AestheticProvider");
  return ctx;
}
