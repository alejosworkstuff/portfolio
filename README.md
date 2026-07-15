# Portfolio 2.0 — Alejo Castillo

Personal portfolio rebuilt on **Next.js App Router** with GSAP + Lenis scroll choreography, pigmented cream/orange brand tokens, day/night wipe transition, and swappable aesthetic packs.

**Live (Vercel):** [portfolio-sooty-nu-bjae97llpm.vercel.app](https://portfolio-sooty-nu-bjae97llpm.vercel.app/)

The previous GitHub Pages URL (`alejosworkstuff.github.io/portfolio`) is configured to redirect to Vercel via `.github/workflows/gh-pages-redirect.yml`.

## Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 15 (App Router), TypeScript, React 19 |
| Motion | GSAP + ScrollTrigger, Lenis |
| Theme | `next-themes` + View Transitions wipe + aesthetic packs |
| Fonts | Fraunces (display) + Outfit (sans) via `next/font` |
| Hosting | Vercel |

## Features

- Bilingual EN/ES UI (persisted)
- Edge-cascade scroll reveals for sections and project cards
- Video-ready project cards (WebP posters now; drop `.webm` later)
- Case studies at `/projects/[slug]`
- Aesthetic switcher: Cream Amber (default), Sky Cream, Space Violet
- Day/night horizontal wipe (`prefers-reduced-motion` respected)

## Develop

```bash
npm install
npm run dev
```

```bash
npm run build
npm start
```

## Project structure

```
app/                 # App Router pages + globals.css
components/          # sections, motion, theme, layout
lib/                 # translations, projects, aesthetics, case studies
public/assets/       # images (and future videos)
public/resume/       # static resume / cover letter HTML
_legacy/             # archived static site (reference only)
```

## Videos

When you record project loops, place files under `public/assets/projects/` and set `videoSrc` on the matching entry in `lib/projects.ts`. Until then, posters are used.

## Aesthetic packs

Token packs live in `lib/aesthetics/`. Day/night is independent of the selected pack.

## License

See [LICENSE](./LICENSE).
