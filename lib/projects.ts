export type ProjectSlug =
  | "ia-stories"
  | "mini-ecommerce"
  | "mini-job-board"
  | "sarava"
  | "code-quest";

export type ProjectMeta = {
  slug: ProjectSlug;
  id: string;
  poster: string;
  videoSrc?: string;
  liveUrl: string;
  repoUrl: string;
  hasCaseStudy: boolean;
  titleKey: string;
  problemKey?: string;
  purposeKey?: string;
  stackKey: string;
  altKey: string;
  eyebrowKey?: string;
  ctaPrimaryKey: "projectLive" | "projectPlay";
};

export const projects: ProjectMeta[] = [
  {
    slug: "ia-stories",
    id: "ai-story",
    poster: "/assets/projects/ia-stories-main.webp",
    liveUrl: "https://ai-stories-ashy.vercel.app/",
    repoUrl: "https://github.com/alejosworkstuff/ai-stories",
    hasCaseStudy: true,
    titleKey: "aiStoryTitle",
    problemKey: "aiStoryProblem",
    stackKey: "aiStoryStack",
    altKey: "aiStoryAlt",
    ctaPrimaryKey: "projectLive",
  },
  {
    slug: "mini-ecommerce",
    id: "mini-ecommerce",
    poster: "/assets/projects/mini-ecommerce-main.webp",
    liveUrl: "https://mini-ecommerce-nextjs-psi.vercel.app/",
    repoUrl: "https://github.com/alejosworkstuff/mini-ecommerce-nextjs",
    hasCaseStudy: true,
    titleKey: "miniEcomTitle",
    problemKey: "miniEcomProblem",
    stackKey: "miniEcomStack",
    altKey: "miniEcommerceAlt",
    ctaPrimaryKey: "projectLive",
  },
  {
    slug: "mini-job-board",
    id: "mini-job-board",
    poster: "/assets/projects/mini-job-board-main.webp",
    liveUrl: "https://alejosworkstuff.github.io/mini-job-board/",
    repoUrl: "https://github.com/alejosworkstuff/mini-job-board",
    hasCaseStudy: true,
    titleKey: "miniJobTitle",
    problemKey: "miniJobProblem",
    stackKey: "miniJobStack",
    altKey: "miniJobBoardAlt",
    ctaPrimaryKey: "projectLive",
  },
  {
    slug: "sarava",
    id: "sarava-radio-streaming",
    poster: "/assets/projects/sarava-main.webp",
    liveUrl: "https://alejosworkstuff.github.io/sarava-radio-streaming/",
    repoUrl: "https://github.com/alejosworkstuff/sarava-radio-streaming",
    hasCaseStudy: true,
    titleKey: "saravaTitle",
    problemKey: "saravaProblem",
    stackKey: "saravaStack",
    altKey: "saravaAlt",
    ctaPrimaryKey: "projectLive",
  },
  {
    slug: "code-quest",
    id: "code-quest",
    poster: "/assets/projects/code-quest-main.webp",
    liveUrl: "https://alejosworkstuff.github.io/code-quest/",
    repoUrl: "https://github.com/alejosworkstuff/code-quest",
    hasCaseStudy: false,
    titleKey: "codeQuestTitle",
    purposeKey: "codeQuestPurpose",
    stackKey: "codeQuestStack",
    altKey: "codeQuestAlt",
    eyebrowKey: "codeQuestEyebrow",
    ctaPrimaryKey: "projectPlay",
  },
];

export function getProject(slug: string): ProjectMeta | undefined {
  return projects.find((p) => p.slug === slug);
}

export const caseStudySlugs = projects
  .filter((p) => p.hasCaseStudy)
  .map((p) => p.slug);
