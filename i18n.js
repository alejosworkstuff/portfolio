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
    aiStoryOutcome: "Built a resilient generation flow with explicit 402 handling and clear fallback messaging.",
    aiStoryImpact: "Impact: Fallback keeps the demo usable even when credits are exhausted.",
    projectLive: "Live",
    projectRepo: "Repo",
    miniEcommerceAlt: "Mini Ecommerce main page",
    miniEcomTitle: "Fake E-commerce",
    miniEcomProblem: "Build a production-grade storefront—not a static catalog—with auth, API resilience, and CI-backed checkout flows.",
    miniEcomStack: "Next.js App Router, React 19, TypeScript, Clerk, Tailwind CSS, Sentry, Playwright, GitHub Actions.",
    miniEcomOutcome: "Shipped Clerk auth with protected routes, a typed HTTP client with timeout/retry, SSG/ISR catalog, and Playwright checkout E2E in CI.",
    miniEcomImpact: "Impact: Recruiters can sign in, browse, and complete a tested checkout—not just click through a mock UI.",
    miniJobBoardAlt: "Mini Job Board main page",
    miniJobTitle: "Mini Job Board",
    miniJobProblem: "Help users find relevant jobs quickly from a JSON dataset with multiple filters.",
    miniJobStack: "HTML, CSS, Vanilla JavaScript, JSON data source.",
    miniJobOutcome: "Shipped client-side search/filter logic with empty-state handling and persisted dark mode.",
    miniJobImpact: "Impact: Fast filtering across multiple job types and levels.",
    saravaAlt: "Saravá Radio Streaming mockup",
    saravaTitle: "Saravá Radio Streaming",
    saravaProblem: "Create a commission-ready community hub mockup with clear sections and navigation.",
    saravaStack: "Next.js App Router, React, TypeScript, CSS.",
    saravaOutcome: "Shipped a polished static mockup with multiple pages and a feed-style homepage.",
    saravaImpact: "Impact: Clear presentation for client review and future WordPress build.",
    skillsTitle: "Skills",
    skillsFrontendTitle: "Frontend",
    skillsBackendTitle: "Backend & Auth",
    skillsDataTitle: "Reliability & State",
    skillsDeliveryTitle: "Testing & Delivery",
    skillsFrontendList: "React, Next.js App Router, TypeScript, Tailwind CSS, SSG/ISR, Context API, Error Boundaries",
    skillsBackendList: "Node.js, REST & GraphQL, Clerk auth, Serverless, Redis, WebSockets",
    skillsDataList: "HTTP resilience (timeout, retry, typed errors), State management, Loading/error UI, Sentry",
    skillsDeliveryList: "Vitest, Playwright E2E, GitHub Actions CI, Vercel deploy, Engineering docs (DoD, PR templates)",
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
    aiStoryOutcome: "Construí un flujo de generación resiliente con manejo explícito de error 402 y mensajes claros de fallback.",
    aiStoryImpact: "Impacto: Fallback mantiene la demo usable incluso cuando se agotan los créditos.",
    projectLive: "Demo",
    projectRepo: "Repositorio",
    miniEcommerceAlt: "Página principal de Mini Ecommerce",
    miniEcomTitle: "E-commerce Demo",
    miniEcomProblem: "Construir una tienda de nivel producción—no un catálogo estático—con auth, resiliencia de API y checkout respaldado por CI.",
    miniEcomStack: "Next.js App Router, React 19, TypeScript, Clerk, Tailwind CSS, Sentry, Playwright, GitHub Actions.",
    miniEcomOutcome: "Publiqué auth con Clerk y rutas protegidas, cliente HTTP tipado con timeout/retry, catálogo SSG/ISR y E2E de checkout con Playwright en CI.",
    miniEcomImpact: "Impacto: Reclutadores pueden iniciar sesión, explorar y completar un checkout probado—no solo hacer clic en una UI mock.",
    miniJobBoardAlt: "Página principal de Mini Job Board",
    miniJobTitle: "Mini Bolsa de Trabajo",
    miniJobProblem: "Ayudar a encontrar empleos relevantes rápido desde un dataset JSON con múltiples filtros.",
    miniJobStack: "HTML, CSS, JavaScript Vanilla, fuente de datos JSON.",
    miniJobOutcome: "Publiqué lógica de búsqueda/filtros en cliente con manejo de estado vacío y modo oscuro persistente.",
    miniJobImpact: "Impacto: Filtrado rápido en múltiples tipos y niveles de empleos.",
    saravaAlt: "Mockup de Saravá Radio Streaming",
    saravaTitle: "Saravá Radio Streaming",
    saravaProblem: "Crear un mockup listo para comisión con secciones claras y navegación simple.",
    saravaStack: "Next.js App Router, React, TypeScript, CSS.",
    saravaOutcome: "Entregué un mockup estático pulido con múltiples páginas y homepage tipo feed.",
    saravaImpact: "Impacto: Presentación clara para revisión del cliente y futura construcción en WordPress.",
    skillsTitle: "Habilidades",
    skillsFrontendTitle: "Frontend",
    skillsBackendTitle: "Backend y Auth",
    skillsDataTitle: "Resiliencia y estado",
    skillsDeliveryTitle: "Testing y entrega",
    skillsFrontendList: "React, Next.js App Router, TypeScript, Tailwind CSS, SSG/ISR, Context API, Error Boundaries",
    skillsBackendList: "Node.js, REST y GraphQL, Clerk auth, Serverless, Redis, WebSockets",
    skillsDataList: "Resiliencia HTTP (timeout, retry, errores tipados), Manejo de estado, UI de carga/error, Sentry",
    skillsDeliveryList: "Vitest, Playwright E2E, GitHub Actions CI, deploy en Vercel, docs de ingeniería (DoD, PR templates)",
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
