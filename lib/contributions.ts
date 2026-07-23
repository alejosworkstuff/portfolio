export type OssContribution = {
  id: string;
  repoLabel: string;
  repoUrl: string;
  summaryKey: string;
  prLabelKey: string;
  prUrl: string;
};

export const contributions: OssContribution[] = [
  {
    id: "linkinator-846",
    repoLabel: "JustinBeckwith/linkinator",
    repoUrl: "https://github.com/JustinBeckwith/linkinator",
    summaryKey: "ossLinkinatorSummary",
    prLabelKey: "ossLinkinatorPr",
    prUrl: "https://github.com/JustinBeckwith/linkinator/pull/846",
  },
  {
    id: "vercel-ai-16869",
    repoLabel: "vercel/ai",
    repoUrl: "https://github.com/vercel/ai",
    summaryKey: "ossVercelAiSummary",
    prLabelKey: "ossVercelAiPr",
    prUrl: "https://github.com/vercel/ai/pull/16869",
  },
];
