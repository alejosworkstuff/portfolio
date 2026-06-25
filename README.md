# Portfolio — Alejo Castillo

Personal portfolio site for a full-stack developer. Hand-coded static site focused on clarity, speed, and proof of real product work—not tutorial demos.

**Live site:** [alejosworkstuff.github.io/portfolio](https://alejosworkstuff.github.io/portfolio/)

## Overview

The site showcases selected projects with problem/stack/outcome case-study cards, a skills breakdown, an “How I use AI in development” section, and contact links. Copy is available in **English** and **Spanish** via a client-side language toggle.

## Features

- **Bilingual UI** — EN/ES strings in `i18n.js`; language preference persisted in `localStorage`
- **Project case studies** — Expandable cards with live demos and GitHub repos
- **Responsive layout** — Mobile nav, project grid, and accessible controls
- **Zero build step** — Plain HTML, CSS, and JavaScript; deploys directly to GitHub Pages

## Tech stack

| Layer | Technologies |
|-------|--------------|
| Markup & style | HTML5, CSS3 (custom properties, responsive grid) |
| Behavior | Vanilla JavaScript |
| i18n | Client-side translation map (`i18n.js`) |
| Hosting | GitHub Pages |

## Project structure

```
portfolio/
├── index.html              # Main portfolio page
├── portfolio.css           # Site styles
├── i18n.js                 # EN/ES translations and language toggle
├── assets/
│   ├── icons/              # LinkedIn, GitHub SVG icons
│   └── projects/           # Project screenshot previews
└── README.md
```

## Featured projects

| Project | Stack highlights |
|---------|------------------|
| [AI Story Generator](https://ai-stories-ashy.vercel.app/) | Node.js, Vercel Serverless, Replicate API |
| [Fake E-commerce](https://mini-ecommerce-nextjs-psi.vercel.app/) | Next.js, React 19, Clerk, Playwright, GitHub Actions |
| [Mini Job Board](https://alejosworkstuff.github.io/mini-job-board/) | HTML, CSS, Vanilla JS, JSON |
| [Saravá — Espacio Cultural](https://alejosworkstuff.github.io/sarava-radio-streaming/) | Next.js static export, GitHub Pages |

## Local development

No install or build required.

1. Clone the repository:

   ```bash
   git clone https://github.com/alejosworkstuff/portfolio.git
   cd portfolio
   ```

2. Serve the folder with any static file server, for example:

   ```bash
   npx serve .
   ```

   Or open `index.html` directly in a browser.

3. Edit `index.html`, `portfolio.css`, or `i18n.js` and refresh to preview changes.

## Deployment

The site is deployed on **GitHub Pages** from the `main` branch. Push to `main` to update the live site at the URL above.

## Contact

- **Email:** alejoworkstuff@gmail.com
- **LinkedIn:** [alejo-castillo-0b02b73b0](https://www.linkedin.com/in/alejo-castillo-0b02b73b0/)
- **GitHub:** [alejosworkstuff](https://github.com/alejosworkstuff)

## License

All rights reserved unless otherwise noted. Project screenshots and copy are personal portfolio materials.
