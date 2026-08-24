"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import {
  translations,
  type Lang,
  type TranslationKey,
} from "@/lib/translations";

type I18nContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  t: (key: TranslationKey | string) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);
const STORAGE_KEY = "portfolio-language";
const subscribeToNothing = () => () => {};

function resolveInitialLang(): Lang {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "en" || stored === "es") return stored;
  return navigator.language.toLowerCase().startsWith("es") ? "es" : "en";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const storedLang = useSyncExternalStore(
    subscribeToNothing,
    resolveInitialLang,
    () => "en" as Lang,
  );
  const ready = useSyncExternalStore(
    subscribeToNothing,
    () => true,
    () => false,
  );
  const [selectedLang, setLangState] = useState<Lang | null>(null);
  const lang = selectedLang ?? storedLang;

  useEffect(() => {
    if (!ready) return;
    document.documentElement.lang = lang;
    window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang, ready]);

  const setLang = useCallback((next: Lang) => setLangState(next), []);
  const toggleLang = useCallback(
    () => setLangState(lang === "en" ? "es" : "en"),
    [lang],
  );

  const t = useCallback(
    (key: TranslationKey | string) => {
      const dict = translations[lang] ?? translations.en;
      return (dict as Record<string, string>)[key] ?? key;
    },
    [lang],
  );

  const value = useMemo(
    () => ({ lang, setLang, toggleLang, t }),
    [lang, setLang, toggleLang, t],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
