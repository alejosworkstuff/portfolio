export type SkillIconId =
  | "react"
  | "nextdotjs"
  | "typescript"
  | "tailwindcss"
  | "javascript"
  | "nodedotjs"
  | "graphql"
  | "clerk"
  | "redis"
  | "neon"
  | "vercel"
  | "sentry"
  | "vitest"
  | "playwright"
  | "githubactions"
  | "github";

export type SkillItem = {
  id: string;
  /** i18n key for the label */
  labelKey: string;
  icon?: SkillIconId;
  href?: string;
};

export type SkillCategory = {
  id: string;
  titleKey: string;
  /** left = clockwise / a reloj; right = counter-clockwise / a contrarreloj */
  direction: "left" | "right";
  items: SkillItem[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    titleKey: "skillsFrontendTitle",
    direction: "left",
    items: [
      { id: "react", labelKey: "skillReact", icon: "react", href: "https://react.dev" },
      {
        id: "nextjs",
        labelKey: "skillNextjs",
        icon: "nextdotjs",
        href: "https://nextjs.org",
      },
      {
        id: "typescript",
        labelKey: "skillTypescript",
        icon: "typescript",
        href: "https://www.typescriptlang.org",
      },
      {
        id: "tailwind",
        labelKey: "skillTailwind",
        icon: "tailwindcss",
        href: "https://tailwindcss.com",
      },
      {
        id: "javascript",
        labelKey: "skillJavascript",
        icon: "javascript",
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
    ],
  },
  {
    id: "backend",
    titleKey: "skillsBackendTitle",
    direction: "right",
    items: [
      {
        id: "nodejs",
        labelKey: "skillNodejs",
        icon: "nodedotjs",
        href: "https://nodejs.org",
      },
      {
        id: "graphql",
        labelKey: "skillGraphql",
        icon: "graphql",
        href: "https://graphql.org",
      },
      {
        id: "clerk",
        labelKey: "skillClerk",
        icon: "clerk",
        href: "https://clerk.com",
      },
      {
        id: "redis",
        labelKey: "skillRedis",
        icon: "redis",
        href: "https://redis.io",
      },
      {
        id: "neon",
        labelKey: "skillNeon",
        icon: "neon",
        href: "https://neon.tech",
      },
      {
        id: "ai-sdk",
        labelKey: "skillAiSdk",
        icon: "vercel",
        href: "https://sdk.vercel.ai",
      },
    ],
  },
  {
    id: "reliability",
    titleKey: "skillsDataTitle",
    direction: "left",
    items: [
      {
        id: "sentry",
        labelKey: "skillSentry",
        icon: "sentry",
        href: "https://sentry.io",
      },
      { id: "http", labelKey: "skillHttp" },
      { id: "state", labelKey: "skillState" },
      { id: "loading", labelKey: "skillLoading" },
    ],
  },
  {
    id: "delivery",
    titleKey: "skillsDeliveryTitle",
    direction: "right",
    items: [
      {
        id: "vitest",
        labelKey: "skillVitest",
        icon: "vitest",
        href: "https://vitest.dev",
      },
      {
        id: "playwright",
        labelKey: "skillPlaywright",
        icon: "playwright",
        href: "https://playwright.dev",
      },
      {
        id: "gha",
        labelKey: "skillGithubActions",
        icon: "githubactions",
        href: "https://github.com/features/actions",
      },
      {
        id: "vercel-deploy",
        labelKey: "skillVercelDeploy",
        icon: "vercel",
        href: "https://vercel.com",
      },
      {
        id: "gh-pages",
        labelKey: "skillGithubPages",
        icon: "github",
        href: "https://pages.github.com",
      },
    ],
  },
];
