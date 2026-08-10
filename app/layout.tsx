import { Fraunces, Outfit, Share_Tech_Mono } from "next/font/google";
import type { Metadata } from "next";
import { I18nProvider } from "@/lib/i18n";
import { ThemeProviders } from "@/components/theme/ThemeProviders";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ScrollProgressBar } from "@/components/motion/ScrollProgressBar";
import { CursorGridBackdrop } from "@/components/effects/CursorGridBackdrop";
import { BackToTop } from "@/components/motion/BackToTop";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = Share_Tech_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-sooty-nu-bjae97llpm.vercel.app"),
  title: "Alejo Castillo: Frontend-focused Fullstack",
  description:
    "Frontend-focused fullstack developer (Next.js, TypeScript, Vercel). AI Story Generator, Saravá client CMS, ExportOps, and mini-ecommerce with CI.",
  openGraph: {
    title: "Alejo Castillo: Frontend-focused Fullstack",
    description:
      "Next.js / TypeScript frontend-focused fullstack work: AI Stories, Saravá CMS, ExportOps. Remote-friendly from La Plata, Argentina.",
    images: ["/assets/me.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProviders>
          <I18nProvider>
            <SmoothScroll>
              <div className="page-shell">
                <div className="bg-atmosphere" aria-hidden />
                <div className="bg-grain" aria-hidden />
                <CursorGridBackdrop />
                <ScrollProgressBar />
                <SiteHeader />
                <main>{children}</main>
                <footer className="site-footer">
                  <p>Alejo Castillo</p>
                </footer>
                <BackToTop />
              </div>
            </SmoothScroll>
          </I18nProvider>
        </ThemeProviders>
      </body>
    </html>
  );
}
