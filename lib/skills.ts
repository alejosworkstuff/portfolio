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
  /** i18n key for the chip label */
  labelKey: string;
  icon?: SkillIconId;
};

export type SkillCategory = {
  id: string;
  titleKey: string;
  items: SkillItem[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    titleKey: "skillsFrontendTitle",
    items: [
      { id: "react", labelKey: "skillReact", icon: "react" },
      { id: "nextjs", labelKey: "skillNextjs", icon: "nextdotjs" },
      { id: "typescript", labelKey: "skillTypescript", icon: "typescript" },
      { id: "tailwind", labelKey: "skillTailwind", icon: "tailwindcss" },
      { id: "ssg", labelKey: "skillSsg" },
      { id: "context", labelKey: "skillContext" },
      { id: "hooks", labelKey: "skillHooks" },
      { id: "boundaries", labelKey: "skillBoundaries" },
      { id: "javascript", labelKey: "skillJavascript", icon: "javascript" },
    ],
  },
  {
    id: "backend",
    titleKey: "skillsBackendTitle",
    items: [
      { id: "nodejs", labelKey: "skillNodejs", icon: "nodedotjs" },
      { id: "rest", labelKey: "skillRest" },
      { id: "graphql", labelKey: "skillGraphql", icon: "graphql" },
      { id: "clerk", labelKey: "skillClerk", icon: "clerk" },
      { id: "serverless", labelKey: "skillServerless" },
      { id: "redis", labelKey: "skillRedis", icon: "redis" },
      { id: "neon", labelKey: "skillNeon", icon: "neon" },
      { id: "ai-sdk", labelKey: "skillAiSdk", icon: "vercel" },
      { id: "websockets", labelKey: "skillWebsockets" },
    ],
  },
  {
    id: "reliability",
    titleKey: "skillsDataTitle",
    items: [
      { id: "http", labelKey: "skillHttp" },
      { id: "state", labelKey: "skillState" },
      { id: "loading", labelKey: "skillLoading" },
      { id: "sentry", labelKey: "skillSentry", icon: "sentry" },
    ],
  },
  {
    id: "delivery",
    titleKey: "skillsDeliveryTitle",
    items: [
      { id: "vitest", labelKey: "skillVitest", icon: "vitest" },
      { id: "testing-library", labelKey: "skillTestingLibrary" },
      { id: "playwright", labelKey: "skillPlaywright", icon: "playwright" },
      { id: "gha", labelKey: "skillGithubActions", icon: "githubactions" },
      { id: "vercel-deploy", labelKey: "skillVercelDeploy", icon: "vercel" },
      { id: "gh-pages", labelKey: "skillGithubPages", icon: "github" },
      { id: "eng-docs", labelKey: "skillEngDocs" },
    ],
  },
];
