# Portfolio 2.0: Alejo Castillo

[![Vercel](https://img.shields.io/badge/live-Vercel-000000?logo=vercel&logoColor=white)](https://portfolio-sooty-nu-bjae97llpm.vercel.app/)

Personal site and project hub for an **AI-adjacent fullstack** engineer. Case studies, bilingual EN/ES UI, and motion built with Next.js + GSAP/Lenis.

**Live:** [portfolio-sooty-nu-bjae97llpm.vercel.app](https://portfolio-sooty-nu-bjae97llpm.vercel.app/)

![Portfolio home](./docs/screenshots/main.webp)

## Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 15 (App Router), TypeScript, React 19 |
| Motion | GSAP + ScrollTrigger, Lenis |
| Theme | `next-themes` + View Transitions wipe + aesthetic packs |
| Fonts | Fraunces (display) + Outfit (sans) via `next/font` |
| Hosting | Vercel |

## Features

- Bilingual EN/ES UI
- Scroll reveals for sections and project cards
- Case studies at `/projects/[slug]`
- Aesthetic switcher: Cream Amber, Sky Cream, Space Violet
- Day/night wipe (`prefers-reduced-motion` respected)

## Run locally

```bash
npm install
npm run dev
```

```bash
npm run build
npm start
```

## License

See [LICENSE](./LICENSE).
