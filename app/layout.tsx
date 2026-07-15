import { Fraunces, Outfit, Share_Tech_Mono } from "next/font/google";
import type { Metadata } from "next";
import { I18nProvider } from "@/lib/i18n";
import { ThemeProviders } from "@/components/theme/ThemeProviders";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { SiteHeader } from "@/components/layout/SiteHeader";
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
  title: "Alejo Castillo — Portfolio",
  description:
    "Full-stack developer portfolio. Next.js, TypeScript, AI engineering, and production-minded product work.",
  openGraph: {
    title: "Alejo Castillo — Portfolio",
    description:
      "Full-stack developer portfolio. Next.js, TypeScript, AI engineering, and production-minded product work.",
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
                <SiteHeader />
                <main>{children}</main>
                <footer className="site-footer">
                  <p>Alejo Castillo · Portfolio 2.0</p>
                </footer>
              </div>
            </SmoothScroll>
          </I18nProvider>
        </ThemeProviders>
      </body>
    </html>
  );
}
