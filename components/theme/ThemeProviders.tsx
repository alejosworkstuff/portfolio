"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ReactNode } from "react";
import { AestheticProvider } from "@/components/theme/AestheticProvider";

export function ThemeProviders({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <AestheticProvider>{children}</AestheticProvider>
    </NextThemesProvider>
  );
}
