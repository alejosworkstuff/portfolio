const translations = {
  en: {
    logoName: "Alejo Castillo",
    navProjects: "Projects",
    navSkills: "Skills",
    navAbout: "About",
    navContact: "Contact",
    navToggleText: "Menu",
    headerLinkedIn: "LinkedIn",
    headerLinkedInAria: "LinkedIn Profile",
    heroEyebrow: "Full-stack Developer",
    heroValue: "Front-end focused, fast shipping, clean UX.",
    heroTitle: "I build bold, user-first products that ship fast and scale clean.",
    heroLede1: "I design and build full-stack apps with auth, resilient APIs, E2E-tested flows, and UX that holds up in production—not just happy-path demos.",
    heroLede2: "About this portfolio: a simple, hand-coded site focused on clarity, speed, and proof you can ship real product work.",
    heroCtaProjects: "View Projects",
    heroCtaContact: "Contact",
    projectsTitle: "Projects",
    aiStoryAlt: "AI Story Generator main page",
    aiStoryTitle: "AI Story Generator",
    labelProblem: "Problem:",
    labelStack: "Stack:",
    labelOutcome: "Outcome:",
    aiStoryProblem: "Generate coherent short stories from minimal user input without breaking when API credits run out.",
    aiStoryStack: "Node.js, Vercel Serverless Functions, Replicate API, Vanilla JavaScript.",
    aiStoryOutcome: "Built a resilient generation flow with client HTTP timeout/retry, explicit 402 handling, and deterministic local fallback stories.",
    aiStoryImpact: "Impact: Users always get a story—even when API credits run out or the provider returns transient errors.",
    projectLive: "Live",
    projectRepo: "Repo",
    miniEcommerceAlt: "Mini Ecommerce main page",
    miniEcomTitle: "Fake E-commerce",
    miniEcomProblem: "Build a production-grade storefront—not a static catalog—with auth, API resilience, and CI-backed checkout flows.",
    miniEcomStack: "Next.js App Router, React 19, TypeScript, Clerk, Tailwind CSS, Sentry, Playwright, GitHub Actions.",
    miniEcomOutcome: "Production-grade storefront with auth-aware flows, resilient APIs, and CI-backed checkout.",
    miniEcomBulletAuth: "Auth — Clerk sign-in, protected routes, per-user orders, and admin role demo.",
    miniEcomBulletHttp: "HTTP resilience — Typed client with timeout/retry and AppError for user-facing failures.",
    miniEcomBulletRendering: "Rendering — SSG/ISR catalog and PDP for fast loads with fresh product data.",
    miniEcomBulletCi: "CI — GitHub Actions (lint, type-check, tests, build) plus Playwright checkout E2E.",
    miniEcomImpact: "Impact: Recruiters can sign in, browse, and complete a tested checkout—not just click through a mock UI.",
    miniEcomMore: "Engineering decisions spelled out on the card—auth, resilience, rendering, and CI—not just a screenshot and stack list.",
    miniJobBoardAlt: "Mini Job Board main page",
    miniJobTitle: "Mini Job Board",
    miniJobProblem: "Help users find relevant jobs quickly from a JSON dataset with multiple filters.",
    miniJobStack: "HTML, CSS, Vanilla JavaScript, JSON data source.",
    miniJobOutcome: "Shipped client-side search/filter logic with empty-state handling and persisted dark mode.",
    miniJobImpact: "Impact: Fast filtering across multiple job types and levels.",
    saravaAlt: "Saravá Espacio Cultural site",
    saravaTitle: "Saravá — Espacio Cultural",
    saravaProblem: "Give a cultural community a multi-section web presence (radio, podcast, book club, events) with editable content and static hosting.",
    saravaStack: "Next.js App Router, React, TypeScript, Tailwind CSS, static export, GitHub Pages.",
    saravaOutcome: "Shipped a live community site with type-safe JSON content, dynamic hero carousel, and reusable section components.",
    saravaImpact: "Impact: Client-ready cultural hub deployed on GitHub Pages with CI-backed builds.",
    skillsTitle: "Skills",
    skillsFrontendTitle: "Frontend",
    skillsBackendTitle: "Backend & Auth",
    skillsDataTitle: "Reliability & State",
    skillsDeliveryTitle: "Testing & Delivery",
    skillsFrontendList: "React, Next.js App Router, TypeScript, Tailwind CSS, SSG/ISR, Context API, Custom hooks, Error Boundaries, Vanilla JavaScript",
    skillsBackendList: "Node.js, REST & GraphQL, Clerk auth, Serverless, Redis, WebSockets, Replicate AI integration",
    skillsDataList: "HTTP resilience (timeout, retry, typed errors), State management, Loading/error UI, Sentry",
    skillsDeliveryList: "Vitest, Testing Library, Playwright E2E, GitHub Actions CI, Vercel & GitHub Pages deploy, Engineering docs (DoD, PR templates)",
    aboutTitle: "About",
    aboutBody: "I build end-to-end web products with the depth junior portfolios usually skip: authentication, resilient API layers, observability hooks, and automated tests in CI. I ship fast, but I also ship things that survive real usage.",
    aboutHighlight: "Focus: product UI, auth-aware flows, and CI-backed quality—not tutorial-level demos.",
    contactTitle: "Contact",
    contactBody: "Open to full-time roles, contract work, and collaborations.",
    contactEmail: "alejoworkstuff@gmail.com",
    contactCopyEmail: "Copy email",
    contactUseEmailApp: "Use email app",
    contactGithub: "GitHub",
    footerPortfolio: "Portfolio:",
    footerUrl: "https://alejosworkstuff.github.io/portfolio/",
    toggleAria: "Switch language to Spanish",
    toggleText: "ES",
  },
  es: {
    logoName: "Alejo Castillo",
    navProjects: "Proyectos",
    navSkills: "Habilidades",
    navAbout: "Sobre mi",
    navContact: "Contacto",
    navToggleText: "Menú",
    headerLinkedIn: "LinkedIn",
    headerLinkedInAria: "Perfil de LinkedIn",
    heroEyebrow: "Desarrollador Full-stack",
    heroValue: "Frontend enfocado, envíos rápidos, UX limpia.",
    heroTitle: "Construyo productos audaces y centrados en el usuario que se entregan rápido y escalan bien.",
    heroLede1: "Diseño y desarrollo aplicaciones full-stack con auth, APIs resilientes, flujos con pruebas E2E y UX que aguanta producción—no solo demos del camino feliz.",
    heroLede2: "Sobre este portfolio: un sitio simple, hecho a mano, enfocado en claridad, velocidad y prueba de trabajo real de producto.",
    heroCtaProjects: "Ver Proyectos",
    heroCtaContact: "Contacto",
    projectsTitle: "Proyectos",
    aiStoryAlt: "Página principal de AI Story Generator",
    aiStoryTitle: "Generador de Historias IA",
    labelProblem: "Problema:",
    labelStack: "Stack:",
    labelOutcome: "Resultado:",
    aiStoryProblem: "Generar historias cortas coherentes con poca entrada del usuario sin romperse cuando se agotan los créditos de API.",
    aiStoryStack: "Node.js, Vercel Serverless Functions, Replicate API, JavaScript Vanilla.",
    aiStoryOutcome: "Construí un flujo de generación resiliente con timeout/retry HTTP en cliente, manejo explícito de error 402 e historias fallback locales determinísticas.",
    aiStoryImpact: "Impacto: Los usuarios siempre obtienen una historia—aunque se agoten los créditos de API o el proveedor devuelva errores transitorios.",
    projectLive: "Demo",
    projectRepo: "Repositorio",
    miniEcommerceAlt: "Página principal de Mini Ecommerce",
    miniEcomTitle: "E-commerce Demo",
    miniEcomProblem: "Construir una tienda de nivel producción—no un catálogo estático—con auth, resiliencia de API y checkout respaldado por CI.",
    miniEcomStack: "Next.js App Router, React 19, TypeScript, Clerk, Tailwind CSS, Sentry, Playwright, GitHub Actions.",
    miniEcomOutcome: "Tienda de nivel producción con flujos con auth, APIs resilientes y checkout respaldado por CI.",
    miniEcomBulletAuth: "Auth — Sign-in con Clerk, rutas protegidas, pedidos por usuario y demo de rol admin.",
    miniEcomBulletHttp: "Resiliencia HTTP — Cliente tipado con timeout/retry y AppError para fallos visibles al usuario.",
    miniEcomBulletRendering: "Rendering — Catálogo y PDP con SSG/ISR: carga rápida y datos de producto actualizados.",
    miniEcomBulletCi: "CI — GitHub Actions (lint, type-check, tests, build) más E2E de checkout con Playwright.",
    miniEcomImpact: "Impacto: Reclutadores pueden iniciar sesión, explorar y completar un checkout probado—no solo hacer clic en una UI mock.",
    miniEcomMore: "Decisiones de ingeniería en la tarjeta—auth, resiliencia, rendering y CI—no solo captura y stack.",
    miniJobBoardAlt: "Página principal de Mini Job Board",
    miniJobTitle: "Mini Bolsa de Trabajo",
    miniJobProblem: "Ayudar a encontrar empleos relevantes rápido desde un dataset JSON con múltiples filtros.",
    miniJobStack: "HTML, CSS, JavaScript Vanilla, fuente de datos JSON.",
    miniJobOutcome: "Publiqué lógica de búsqueda/filtros en cliente con manejo de estado vacío y modo oscuro persistente.",
    miniJobImpact: "Impacto: Filtrado rápido en múltiples tipos y niveles de empleos.",
    saravaAlt: "Sitio de Saravá Espacio Cultural",
    saravaTitle: "Saravá — Espacio Cultural",
    saravaProblem: "Dar a una comunidad cultural presencia web multi-sección (radio, podcast, club de lectura, eventos) con contenido editable y hosting estático.",
    saravaStack: "Next.js App Router, React, TypeScript, Tailwind CSS, export estático, GitHub Pages.",
    saravaOutcome: "Publiqué un sitio comunitario en vivo con contenido JSON tipado, carrusel hero dinámico y componentes de sección reutilizables.",
    saravaImpact: "Impacto: Hub cultural listo para el cliente, desplegado en GitHub Pages con builds respaldados por CI.",
    skillsTitle: "Habilidades",
    skillsFrontendTitle: "Frontend",
    skillsBackendTitle: "Backend y Auth",
    skillsDataTitle: "Resiliencia y estado",
    skillsDeliveryTitle: "Testing y entrega",
    skillsFrontendList: "React, Next.js App Router, TypeScript, Tailwind CSS, SSG/ISR, Context API, Custom hooks, Error Boundaries, JavaScript Vanilla",
    skillsBackendList: "Node.js, REST y GraphQL, Clerk auth, Serverless, Redis, WebSockets, integración Replicate AI",
    skillsDataList: "Resiliencia HTTP (timeout, retry, errores tipados), Manejo de estado, UI de carga/error, Sentry",
    skillsDeliveryList: "Vitest, Testing Library, Playwright E2E, GitHub Actions CI, deploy en Vercel y GitHub Pages, docs de ingeniería (DoD, PR templates)",
    aboutTitle: "Sobre mi",
    aboutBody: "Construyo productos web end-to-end con la profundidad que suelen omitir los portfolios junior: autenticación, capas de API resilientes, observabilidad y tests automatizados en CI. Entrego rápido, pero también cosas que sobreviven al uso real.",
    aboutHighlight: "Foco: UI de producto, flujos con auth y calidad respaldada por CI—no demos de tutorial.",
    contactTitle: "Contacto",
    contactBody: "Disponible para trabajos full-time, contrato y colaboraciones.",
    contactEmail: "alejoworkstuff@gmail.com",
    contactCopyEmail: "Copiar email",
    contactUseEmailApp: "Usar app de email",
    contactGithub: "GitHub",
    footerPortfolio: "Portfolio:",
    footerUrl: "https://alejosworkstuff.github.io/portfolio/",
    toggleAria: "Switch language to English",
    toggleText: "EN",
  },
};

const storageKey = "portfolio-language";

function getInitialLanguage() {
  const stored = window.localStorage.getItem(storageKey);
  if (stored === "en" || stored === "es") return stored;
  return navigator.language.toLowerCase().startsWith("es") ? "es" : "en";
}

function applyLanguage(lang) {
  const dict = translations[lang] || translations.en;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (key && dict[key]) node.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((node) => {
    const pairs = node.getAttribute("data-i18n-attr");
    if (!pairs) return;
    pairs.split(";").forEach((pair) => {
      const [attr, key] = pair.split(":");
      if (attr && key && dict[key]) {
        node.setAttribute(attr.trim(), dict[key]);
      }
    });
  });

  const toggle = document.getElementById("langToggle");
  if (toggle) {
    toggle.textContent = dict.toggleText;
    toggle.setAttribute("aria-label", dict.toggleAria);
  }
}

function initI18n() {
  let currentLanguage = getInitialLanguage();
  applyLanguage(currentLanguage);

  const toggle = document.getElementById("langToggle");
  if (!toggle) return;

  toggle.addEventListener("click", () => {
    currentLanguage = currentLanguage === "en" ? "es" : "en";
    window.localStorage.setItem(storageKey, currentLanguage);
    applyLanguage(currentLanguage);
  });
}

document.addEventListener("DOMContentLoaded", initI18n);
