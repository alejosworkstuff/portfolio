const translations = {
  en: {
    navProjects: "Projects",
    navSkills: "Skills",
    navAbout: "About",
    navContact: "Contact",
    headerLinkedIn: "LinkedIn",
    headerLinkedInAria: "LinkedIn Profile",
    heroEyebrow: "Full-stack Developer",
    heroTitle: "I build bold, user-first products that ship fast and scale clean.",
    heroLede1: "I design and build full-stack apps with strong UX, clear architecture, and a focus on real outcomes.",
    heroLede2: "About this portfolio: a simple, hand-coded site focused on clarity and speed.",
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
    projectLive: "Live",
    projectRepo: "Repo",
    miniEcommerceAlt: "Mini Ecommerce main page",
    miniEcomTitle: "Fake E-commerce",
    miniEcomProblem: "Build a realistic storefront flow with browsing, cart updates, and checkout states.",
    miniEcomStack: "Next.js App Router, React, TypeScript, Context API, Tailwind CSS.",
    miniEcomOutcome: "Delivered a complete fake checkout journey with reliable cart behavior and success/error pages.",
    miniJobBoardAlt: "Mini Job Board main page",
    miniJobTitle: "Mini Job Board",
    miniJobProblem: "Help users find relevant jobs quickly from a JSON dataset with multiple filters.",
    miniJobStack: "HTML, CSS, Vanilla JavaScript, JSON data source.",
    miniJobOutcome: "Shipped client-side search/filter logic with empty-state handling and persisted dark mode.",
    skillsTitle: "Skills",
    skillsFrontendTitle: "Frontend",
    skillsBackendTitle: "Backend",
    skillsDataTitle: "Data",
    skillsDeliveryTitle: "Delivery",
    aboutTitle: "About",
    aboutBody:
      "I build end-to-end web products with clean, maintainable code and strong UX. I care about speed, clarity, and shipping things people actually want to use.",
    contactTitle: "Contact",
    contactBody: "Open to full-time roles, contract work, and collaborations.",
    footerPortfolio: "Portfolio:",
    toggleAria: "Switch language to Spanish",
    toggleText: "ES",
  },
  es: {
    navProjects: "Proyectos",
    navSkills: "Habilidades",
    navAbout: "Sobre mi",
    navContact: "Contacto",
    headerLinkedIn: "LinkedIn",
    headerLinkedInAria: "Perfil de LinkedIn",
    heroEyebrow: "Desarrollador Full-stack",
    heroTitle: "Construyo productos audaces y centrados en el usuario que se entregan rapido y escalan bien.",
    heroLede1: "Diseno y desarrollo aplicaciones full-stack con UX solida, arquitectura clara y foco en resultados reales.",
    heroLede2: "Sobre este portfolio: un sitio simple, hecho a mano, enfocado en claridad y velocidad.",
    heroCtaProjects: "Ver Proyectos",
    heroCtaContact: "Contacto",
    projectsTitle: "Proyectos",
    aiStoryAlt: "Pagina principal de AI Story Generator",
    aiStoryTitle: "Generador de Historias IA",
    labelProblem: "Problema:",
    labelStack: "Stack:",
    labelOutcome: "Resultado:",
    aiStoryProblem:
      "Generar historias cortas coherentes con poca entrada del usuario sin romperse cuando se agotan los creditos de API.",
    aiStoryStack: "Node.js, Vercel Serverless Functions, Replicate API, JavaScript Vanilla.",
    aiStoryOutcome: "Construi un flujo de generacion resiliente con manejo explicito de error 402 y mensajes claros de fallback.",
    projectLive: "Demo",
    projectRepo: "Repositorio",
    miniEcommerceAlt: "Pagina principal de Mini Ecommerce",
    miniEcomTitle: "E-commerce Demo",
    miniEcomProblem: "Construir un flujo realista de tienda con exploracion, carrito y estados de checkout.",
    miniEcomStack: "Next.js App Router, React, TypeScript, Context API, Tailwind CSS.",
    miniEcomOutcome: "Entregue una experiencia completa de checkout simulado con comportamiento de carrito confiable.",
    miniJobBoardAlt: "Pagina principal de Mini Job Board",
    miniJobTitle: "Mini Bolsa de Trabajo",
    miniJobProblem: "Ayudar a encontrar empleos relevantes rapido desde un dataset JSON con multiples filtros.",
    miniJobStack: "HTML, CSS, JavaScript Vanilla, fuente de datos JSON.",
    miniJobOutcome: "Publique logica de busqueda y filtros en cliente con manejo de estado vacio y modo oscuro persistente.",
    skillsTitle: "Habilidades",
    skillsFrontendTitle: "Frontend",
    skillsBackendTitle: "Backend",
    skillsDataTitle: "Datos",
    skillsDeliveryTitle: "Entrega",
    aboutTitle: "Sobre mi",
    aboutBody:
      "Construyo productos web end-to-end con codigo limpio, mantenible y UX fuerte. Me importa la velocidad, la claridad y entregar cosas que la gente quiera usar.",
    contactTitle: "Contacto",
    contactBody: "Disponible para trabajos full-time, trabajo por contrato y colaboraciones.",
    footerPortfolio: "Portfolio:",
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
