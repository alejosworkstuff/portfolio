#!/usr/bin/env node
// Shared layout builder for the portfolio.
//
// The site ships as plain static HTML (no runtime build, no templating engine),
// but the <head> SEO block, the site header/nav, and the footer were copy-pasted
// across index.html and every projects/*.html page. This script makes that shared
// markup live in ONE place: edit the config + renderers below, then run
// `npm run build:layout` to rewrite those three regions in every page.
//
// Usage:
//   node scripts/build-layout.mjs          # rewrite the shared regions in place
//   node scripts/build-layout.mjs --check  # CI guard: fail if any page is stale
//
// Regions are located by structural anchors (<head>…</head>, the
// <header class="site-header">…</header> block, and the
// <footer class="site-footer">…</footer> block), so no marker comments are
// needed in the HTML and the output stays valid, directly-servable static files.

import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const SITE = {
  origin: "https://alejosworkstuff.github.io/portfolio",
  ogSiteName: "Alejo Castillo Portfolio",
  ogLocale: "en_US",
  linkedin: "https://www.linkedin.com/in/alejo-castillo-0b02b73b0/",
  fontsHref:
    "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap",
};

const PORTFOLIO_DESCRIPTION =
  "Full-stack developer portfolio by Alejo Castillo. Front-end focused apps with auth, resilient APIs, E2E-tested flows, and live demos\u2014including AI story generation, Next.js e-commerce, and more.";

// Per-page config. `base` is the relative prefix back to the site root used for
// local assets (favicon, CSS, i18n.js) and home-relative nav links.
const PAGES = [
  {
    file: "index.html",
    isHome: true,
    base: "",
    scripts: ["roadmap.js"],
    title: "Alejo Castillo | Full-stack Developer",
    description: PORTFOLIO_DESCRIPTION,
    canonical: `${SITE.origin}/`,
    ogType: "website",
    ogUrl: `${SITE.origin}/`,
    ogTitle: "Alejo Castillo | Full-stack Developer",
    ogDescription: PORTFOLIO_DESCRIPTION,
    ogImage: `${SITE.origin}/assets/me.webp`,
    ogImageAlt: "Alejo Castillo profile photo",
    twitterTitle: "Alejo Castillo | Full-stack Developer",
    twitterDescription: PORTFOLIO_DESCRIPTION,
    twitterImage: `${SITE.origin}/assets/me.webp`,
  },
  {
    file: "projects/ia-stories.html",
    isHome: false,
    base: "../",
    title: "AI Story Generator Case Study | Alejo Castillo",
    description:
      "Case study: a serverless LLM story generator with prompt orchestration on Replicate (Llama 3), a deterministic local fallback when credits fail, per-IP rate limiting, and multi-turn conversation memory\u2014built vanilla and AI-native.",
    canonical: `${SITE.origin}/projects/ia-stories.html`,
    ogType: "article",
    ogUrl: `${SITE.origin}/projects/ia-stories.html`,
    ogTitle: "AI Story Generator \u2014 Orchestration, Fallback & Rate Limiting",
    ogDescription:
      "A production-minded LLM feature: serverless Replicate orchestration, a deterministic fallback when credits run out, per-IP rate limiting, and multi-turn story memory.",
    ogImage: `${SITE.origin}/assets/projects/ia-stories-main.webp`,
    ogImageAlt: "AI Story Generator main form with seed, tone, and length controls",
    twitterTitle: "AI Story Generator \u2014 Orchestration, Fallback & Rate Limiting",
    twitterDescription:
      "Serverless LLM orchestration with a deterministic fallback, per-IP rate limiting, and multi-turn conversation memory\u2014vanilla and AI-native.",
    twitterImage: `${SITE.origin}/assets/projects/ia-stories-main.webp`,
  },
  {
    file: "projects/mini-ecommerce.html",
    isHome: false,
    base: "../",
    title: "Mini E-commerce Case Study | Alejo Castillo",
    description:
      "Case study: Redis cart sessions, Postgres orders via Prisma on Neon, and fixing a checkout race condition in a Next.js storefront with Clerk auth and CI-backed tests.",
    canonical: `${SITE.origin}/projects/mini-ecommerce.html`,
    ogType: "article",
    ogUrl: `${SITE.origin}/projects/mini-ecommerce.html`,
    ogTitle: "Mini E-commerce \u2014 Redis to Postgres Migration",
    ogDescription:
      "How I migrated orders from Redis JSON blobs to Postgres + Prisma without breaking the API\u2014and fixed a duplicate-order race on checkout success.",
    ogImage: `${SITE.origin}/assets/projects/mini-ecommerce-neon-og.webp`,
    ogImageAlt:
      "Neon SQL Editor showing live Order rows from mini-ecommerce production Postgres",
    twitterTitle: "Mini E-commerce \u2014 Redis to Postgres Migration",
    twitterDescription:
      "Redis cart, Postgres orders, Prisma adapter swap, and a checkout useEffect race condition fix.",
    twitterImage: `${SITE.origin}/assets/projects/mini-ecommerce-neon-og.webp`,
  },
  {
    file: "projects/mini-job-board.html",
    isHome: false,
    base: "../",
    title: "Mini Job Board Case Study | Alejo Castillo",
    description:
      "Case study: a DOM-decoupled filter/sort module, URL as the single source of truth for shareable filtered views, and why vanilla JS depth is the point\u2014built with unit tests and Playwright E2E.",
    canonical: `${SITE.origin}/projects/mini-job-board.html`,
    ogType: "article",
    ogUrl: `${SITE.origin}/projects/mini-job-board.html`,
    ogTitle: "Mini Job Board \u2014 Testable Filters & Shareable URL State",
    ogDescription:
      "A pure filter/sort module decoupled from the DOM, URL query params as the source of truth for filters, and vanilla JS depth\u2014proven with unit tests and 11 Playwright scenarios.",
    ogImage: `${SITE.origin}/assets/projects/mini-job-board-main.webp`,
    ogImageAlt: "Mini Job Board listing with search, multi-filter controls, and job cards",
    twitterTitle: "Mini Job Board \u2014 Testable Filters & Shareable URL State",
    twitterDescription:
      "DOM-decoupled filter module, URL-as-state for deep links, and vanilla depth as a feature\u2014not a limitation.",
    twitterImage: `${SITE.origin}/assets/projects/mini-job-board-main.webp`,
  },
  {
    file: "projects/sarava.html",
    isHome: false,
    base: "../",
    title: "Sarav\u00e1 Cultural Hub Case Study | Alejo Castillo",
    description:
      "Case study: a community cultural center site (Espacio Cultural Sarav\u00e1) built on Next.js static export for zero-cost GitHub Pages hosting\u2014with dynamic per-post routes, real per-entry SEO, and a Zod-validated JSON content pipeline gated in CI.",
    canonical: `${SITE.origin}/projects/sarava.html`,
    ogType: "article",
    ogUrl: `${SITE.origin}/projects/sarava.html`,
    ogTitle: "Sarav\u00e1 \u2014 a zero-cost cultural hub with real per-post SEO",
    ogDescription:
      "A real community cultural product: Next.js static export to GitHub Pages, dynamic [slug] post routes with per-entry OG metadata, and a Zod content schema that gates every deploy in CI.",
    ogImage: `${SITE.origin}/assets/projects/sarava-main.webp`,
    ogImageAlt: "Sarav\u00e1 Espacio Cultural site",
    twitterTitle: "Sarav\u00e1 \u2014 a zero-cost cultural hub with real per-post SEO",
    twitterDescription:
      "Next.js static export to GitHub Pages, dynamic per-post routes with real SEO, and a Zod-validated JSON content pipeline gated in CI.",
    twitterImage: `${SITE.origin}/assets/projects/sarava-main.webp`,
  },
];

const NAV_LINKS = [
  { anchor: "projects", key: "navProjects", label: "Projects" },
  { anchor: "skills", key: "navSkills", label: "Skills" },
  { anchor: "engineering", key: "navEngineering", label: "Engineering" },
  { anchor: "roadmap", key: "navRoadmap", label: "Roadmap" },
  { anchor: "ai-dev", key: "navAiDev", label: "AI in Dev", homeOnly: true },
  { anchor: "about", key: "navAbout", label: "About" },
  { anchor: "contact", key: "navContact", label: "Contact" },
];

const I4 = "    ";
const I6 = "      ";
const I8 = "        ";

function renderHead(page) {
  const b = page.base;
  const lines = [
    `<meta charset="UTF-8" />`,
    `<meta name="viewport" content="width=device-width, initial-scale=1" />`,
    `<title>${page.title}</title>`,
    `<meta name="description" content="${page.description}" />`,
    `<link rel="canonical" href="${page.canonical}" />`,
    `<link rel="icon" href="${b}assets/favicon.svg" type="image/svg+xml" />`,
    `<meta property="og:type" content="${page.ogType}" />`,
    `<meta property="og:site_name" content="${SITE.ogSiteName}" />`,
    `<meta property="og:locale" content="${SITE.ogLocale}" />`,
    `<meta property="og:url" content="${page.ogUrl}" />`,
    `<meta property="og:title" content="${page.ogTitle}" />`,
    `<meta property="og:description" content="${page.ogDescription}" />`,
    `<meta property="og:image" content="${page.ogImage}" />`,
    `<meta property="og:image:alt" content="${page.ogImageAlt}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${page.twitterTitle}" />`,
    `<meta name="twitter:description" content="${page.twitterDescription}" />`,
    `<meta name="twitter:image" content="${page.twitterImage}" />`,
    `<link rel="stylesheet" href="${b}portfolio.css" />`,
    `<script src="${b}i18n.js" defer></script>`,
    ...(page.scripts || []).map((s) => `<script src="${b}${s}" defer></script>`),
    `<link href="${SITE.fontsHref}" rel="stylesheet">`,
  ];
  return lines.map((l) => I4 + l).join("\n");
}

function renderHeader(page) {
  const b = page.base;
  const logo = page.isHome
    ? `<div class="logo" data-i18n="logoName">Alejo Castillo</div>`
    : `<a class="logo logo-link" href="${b}index.html" data-i18n="logoName">Alejo Castillo</a>`;
  const navPrefix = page.isHome ? "" : `${b}index.html`;
  const navLinks = NAV_LINKS.filter((l) => page.isHome || !l.homeOnly)
    .map(
      (l) => `${I8}<a href="${navPrefix}#${l.anchor}" data-i18n="${l.key}">${l.label}</a>`
    )
    .join("\n");

  return `${I4}<header class="site-header">
${I6}${logo}
${I6}<button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav" data-i18n="navToggleText">
${I8}Menu
${I6}</button>
${I6}<nav id="site-nav" class="site-nav">
${navLinks}
${I6}</nav>
${I6}<div class="header-actions">
${I8}<a
${I8}  class="btn btn-ghost"
${I8}  href="${SITE.linkedin}"
${I8}  aria-label="LinkedIn Profile"
${I8}  data-i18n="headerLinkedIn"
${I8}  data-i18n-attr="aria-label:headerLinkedInAria"
${I8}>LinkedIn</a>
${I8}<button id="langToggle" class="lang-toggle" type="button" aria-label="Switch language to Spanish">ES</button>
${I6}</div>
${I4}</header>`;
}

function renderFooter() {
  return `${I4}<footer class="site-footer">
${I6}<p><span data-i18n="footerPortfolio">Portfolio:</span> <a href="${SITE.origin}/" data-i18n="footerUrl">${SITE.origin}/</a></p>
${I4}</footer>`;
}

function applyRegions(html, page) {
  let out = html.replace(
    /(<head>\n)[\s\S]*?(\n {2}<\/head>)/,
    (_m, open, close) => open + renderHead(page) + close
  );
  out = out.replace(
    /[^\S\n]*<header class="site-header">[\s\S]*?<\/header>/,
    () => renderHeader(page)
  );
  out = out.replace(
    /[^\S\n]*<footer class="site-footer">[\s\S]*?<\/footer>/,
    () => renderFooter()
  );
  return out;
}

async function run() {
  const check = process.argv.includes("--check");
  const stale = [];
  let written = 0;

  for (const page of PAGES) {
    const filePath = path.join(ROOT, page.file);
    const raw = await readFile(filePath, "utf8");
    const hadCRLF = raw.includes("\r\n");
    const norm = raw.replace(/\r\n/g, "\n");

    let next = applyRegions(norm, page);
    next = hadCRLF ? next.replace(/\n/g, "\r\n") : next;

    if (next === raw) continue;

    if (check) {
      stale.push(page.file);
    } else {
      await writeFile(filePath, next, "utf8");
      written += 1;
      console.log(`updated ${page.file}`);
    }
  }

  if (check) {
    if (stale.length) {
      console.error(
        `Shared layout is out of date in:\n  - ${stale.join(
          "\n  - "
        )}\nRun \`npm run build:layout\` and commit the result.`
      );
      process.exit(1);
    }
    console.log(`Shared layout up to date across ${PAGES.length} pages.`);
  } else {
    console.log(
      written
        ? `Done. Rewrote shared layout in ${written} page(s).`
        : `Done. All ${PAGES.length} pages already up to date.`
    );
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
