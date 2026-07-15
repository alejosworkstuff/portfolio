import type { ProjectSlug } from "@/lib/projects";

export type GallerySlide = {
  src: string;
  altKey: string;
  capKey: string;
};

export type CaseSection = {
  titleKey: string;
  introKey?: string;
  paragraphs?: string[];
  bullets?: string[];
  noteKey?: string;
};

export type CaseLink = {
  labelKey: string;
  href: string;
  external?: boolean;
};

export type CaseStudyContent = {
  slug: ProjectSlug;
  eyebrowKey: string;
  titleKey: string;
  ledeKey: string;
  backKey: string;
  gallery: GallerySlide[];
  sections: CaseSection[];
  outcomesTitleKey: string;
  outcomes: string[];
  linksTitleKey: string;
  links: CaseLink[];
};

export const caseStudies: Record<string, CaseStudyContent> = {
  "ia-stories": {
    slug: "ia-stories",
    eyebrowKey: "iasCaseEyebrow",
    titleKey: "iasCaseTitle",
    ledeKey: "iasCaseLede",
    backKey: "iasCaseBack",
    gallery: [
      {
        src: "/assets/projects/_gallery/ia-stories-main.webp",
        altKey: "aiStoryAlt",
        capKey: "aiStoryCapMain",
      },
      {
        src: "/assets/projects/_gallery/ia-stories-dark.webp",
        altKey: "aiStoryAltDark",
        capKey: "aiStoryCapDark",
      },
      {
        src: "/assets/projects/_gallery/ia-stories-fallback.webp",
        altKey: "aiStoryAltFallback",
        capKey: "aiStoryCapFallback",
      },
    ],
    sections: [
      {
        titleKey: "iasCaseProblemTitle",
        paragraphs: ["iasCaseProblemP1", "iasCaseProblemP2"],
      },
      {
        titleKey: "iasCaseArchTitle",
        introKey: "iasCaseArchIntro",
        bullets: [
          "iasCaseArchBullet1",
          "iasCaseArchBullet2",
          "iasCaseArchBullet3",
          "iasCaseArchBullet4",
        ],
      },
      {
        titleKey: "iasCaseStreamTitle",
        introKey: "iasCaseStreamIntro",
        bullets: [
          "iasCaseStreamB1",
          "iasCaseStreamB2",
          "iasCaseStreamB3",
          "iasCaseStreamB4",
        ],
      },
      {
        titleKey: "iasCaseRagTitle",
        introKey: "iasCaseRagIntro",
        bullets: [
          "iasCaseRagB1",
          "iasCaseRagB2",
          "iasCaseRagB3",
          "iasCaseRagB4",
        ],
      },
      {
        titleKey: "iasCaseGuardTitle",
        introKey: "iasCaseGuardIntro",
        bullets: [
          "iasCaseGuardB1",
          "iasCaseGuardB2",
          "iasCaseGuardB3",
          "iasCaseGuardB4",
        ],
      },
      {
        titleKey: "iasCaseEvalTitle",
        introKey: "iasCaseEvalIntro",
        bullets: [
          "iasCaseEvalB1",
          "iasCaseEvalB2",
          "iasCaseEvalB3",
          "iasCaseEvalB4",
        ],
      },
      {
        titleKey: "iasCaseResilienceTitle",
        introKey: "iasCaseResilienceIntro",
        bullets: [
          "iasCaseResilienceB1",
          "iasCaseResilienceB2",
          "iasCaseResilienceB3",
          "iasCaseResilienceB4",
          "iasCaseResilienceB5",
        ],
        noteKey: "iasCaseResilienceNote",
      },
    ],
    outcomesTitleKey: "iasCaseOutcomesTitle",
    outcomes: [
      "iasCaseOutcome1",
      "iasCaseOutcome2",
      "iasCaseOutcome3",
      "iasCaseOutcome4",
      "iasCaseOutcome5",
    ],
    linksTitleKey: "iasCaseLinksTitle",
    links: [
      {
        labelKey: "iasCaseLinkLive",
        href: "https://ai-stories-ashy.vercel.app/",
        external: true,
      },
      {
        labelKey: "iasCaseLinkRepo",
        href: "https://github.com/alejosworkstuff/ai-stories",
        external: true,
      },
    ],
  },
  "mini-ecommerce": {
    slug: "mini-ecommerce",
    eyebrowKey: "mecCaseEyebrow",
    titleKey: "mecCaseTitle",
    ledeKey: "mecCaseLede",
    backKey: "mecCaseBack",
    gallery: [
      {
        src: "/assets/projects/_gallery/mini-ecommerce-main.webp",
        altKey: "miniEcommerceAlt",
        capKey: "mecCapMain",
      },
      {
        src: "/assets/projects/_gallery/mini-ecommerce-products.webp",
        altKey: "miniEcommerceAltProducts",
        capKey: "mecCapProducts",
      },
      {
        src: "/assets/projects/_gallery/mini-ecommerce-cart.webp",
        altKey: "miniEcommerceAltCart",
        capKey: "mecCapCart",
      },
      {
        src: "/assets/projects/_gallery/mini-ecommerce-sign-in.webp",
        altKey: "miniEcommerceAltSignIn",
        capKey: "mecCapSignIn",
      },
    ],
    sections: [
      {
        titleKey: "mecCaseProblemTitle",
        paragraphs: ["mecCaseProblemP1", "mecCaseProblemP2"],
      },
      {
        titleKey: "mecCaseArchTitle",
        introKey: "mecCaseArchIntro",
        bullets: [
          "mecCaseArchBullet1",
          "mecCaseArchBullet2",
          "mecCaseArchBullet3",
        ],
      },
      {
        titleKey: "mecCaseMigrationTitle",
        introKey: "mecCaseMigrationIntro",
        bullets: [
          "mecCaseCommit1",
          "mecCaseCommit2",
          "mecCaseCommit3",
          "mecCaseCommit4",
        ],
        noteKey: "mecCaseMigrationNote",
      },
      {
        titleKey: "mecCaseRaceTitle",
        introKey: "mecCaseRaceIntro",
        bullets: [
          "mecCaseRaceCause1",
          "mecCaseRaceCause2",
          "mecCaseRaceCause3",
          "mecCaseRaceFix1",
          "mecCaseRaceFix2",
          "mecCaseRaceFix3",
          "mecCaseRaceFix4",
        ],
      },
    ],
    outcomesTitleKey: "mecCaseOutcomesTitle",
    outcomes: [
      "mecCaseOutcome1",
      "mecCaseOutcome2",
      "mecCaseOutcome3",
      "mecCaseOutcome4",
    ],
    linksTitleKey: "mecCaseLinksTitle",
    links: [
      {
        labelKey: "mecCaseLinkLive",
        href: "https://mini-ecommerce-nextjs-psi.vercel.app/",
        external: true,
      },
      {
        labelKey: "mecCaseLinkRepo",
        href: "https://github.com/alejosworkstuff/mini-ecommerce-nextjs",
        external: true,
      },
    ],
  },
  "mini-job-board": {
    slug: "mini-job-board",
    eyebrowKey: "mjbCaseEyebrow",
    titleKey: "mjbCaseTitle",
    ledeKey: "mjbCaseLede",
    backKey: "mjbCaseBack",
    gallery: [
      {
        src: "/assets/projects/_gallery/mini-job-board-main.webp",
        altKey: "miniJobBoardAlt",
        capKey: "mjbCapMain",
      },
      {
        src: "/assets/projects/_gallery/mini-job-board-job-details.webp",
        altKey: "miniJobBoardAltDetails",
        capKey: "mjbCapDetails",
      },
      {
        src: "/assets/projects/_gallery/mini-job-board-saved-jobs.webp",
        altKey: "miniJobBoardAltSaved",
        capKey: "mjbCapSaved",
      },
      {
        src: "/assets/projects/_gallery/mini-job-board-dark.webp",
        altKey: "miniJobBoardAltDark",
        capKey: "mjbCapDark",
      },
    ],
    sections: [
      {
        titleKey: "mjbCaseProblemTitle",
        paragraphs: ["mjbCaseProblemP1", "mjbCaseProblemP2"],
      },
      {
        titleKey: "mjbCaseArchTitle",
        introKey: "mjbCaseArchIntro",
        bullets: [
          "mjbCaseArchBullet1",
          "mjbCaseArchBullet2",
          "mjbCaseArchBullet3",
        ],
      },
      {
        titleKey: "mjbCaseFilterTitle",
        introKey: "mjbCaseFilterIntro",
        bullets: [
          "mjbCaseFilterCompose1",
          "mjbCaseFilterCompose2",
          "mjbCaseFilterCompose3",
        ],
      },
      {
        titleKey: "mjbCaseUrlTitle",
        introKey: "mjbCaseUrlIntro",
        bullets: [
          "mjbCaseUrlRead1",
          "mjbCaseUrlRead2",
          "mjbCaseUrlWrite1",
          "mjbCaseUrlWrite2",
          "mjbCaseUrlWrite3",
        ],
      },
      {
        titleKey: "mjbCaseVanillaTitle",
        introKey: "mjbCaseVanillaIntro",
        bullets: [
          "mjbCaseVanilla1",
          "mjbCaseVanilla2",
          "mjbCaseVanilla3",
          "mjbCaseVanilla4",
        ],
        noteKey: "mjbCaseVanillaNote",
      },
    ],
    outcomesTitleKey: "mjbCaseOutcomesTitle",
    outcomes: [
      "mjbCaseOutcome1",
      "mjbCaseOutcome2",
      "mjbCaseOutcome3",
      "mjbCaseOutcome4",
    ],
    linksTitleKey: "mjbCaseLinksTitle",
    links: [
      {
        labelKey: "mjbCaseLinkLive",
        href: "https://alejosworkstuff.github.io/mini-job-board/",
        external: true,
      },
      {
        labelKey: "mjbCaseLinkRepo",
        href: "https://github.com/alejosworkstuff/mini-job-board",
        external: true,
      },
    ],
  },
  sarava: {
    slug: "sarava",
    eyebrowKey: "srvCaseEyebrow",
    titleKey: "srvCaseTitle",
    ledeKey: "srvCaseLede",
    backKey: "srvCaseBack",
    gallery: [
      {
        src: "/assets/projects/_gallery/sarava-main.webp",
        altKey: "saravaAlt",
        capKey: "srvCapMain",
      },
      {
        src: "/assets/projects/_gallery/sarava-radio.webp",
        altKey: "saravaAltRadio",
        capKey: "srvCapRadio",
      },
      {
        src: "/assets/projects/_gallery/sarava-espacio-cultural.webp",
        altKey: "saravaAltEspacio",
        capKey: "srvCapEspacio",
      },
      {
        src: "/assets/projects/_gallery/sarava-club-de-lectura.webp",
        altKey: "saravaAltClub",
        capKey: "srvCapClub",
      },
    ],
    sections: [
      {
        titleKey: "srvCaseProblemTitle",
        paragraphs: ["srvCaseProblemP1", "srvCaseProblemP2"],
      },
      {
        titleKey: "srvCaseArchTitle",
        introKey: "srvCaseArchIntro",
        bullets: [
          "srvCaseArchBullet1",
          "srvCaseArchBullet2",
          "srvCaseArchBullet3",
          "srvCaseArchBullet4",
        ],
      },
      {
        titleKey: "srvCaseRoutesTitle",
        introKey: "srvCaseRoutesIntro",
        bullets: [
          "srvCaseRoutes1",
          "srvCaseRoutes2",
          "srvCaseRoutes3",
          "srvCaseRoutes4",
        ],
      },
      {
        titleKey: "srvCaseContentTitle",
        introKey: "srvCaseContentIntro",
        bullets: [
          "srvCaseContent1",
          "srvCaseContent2",
          "srvCaseContent3",
          "srvCaseContent4",
        ],
        noteKey: "srvCaseContentNote",
      },
      {
        titleKey: "srvCaseExportTitle",
        introKey: "srvCaseExportIntro",
        bullets: [
          "srvCaseExport1",
          "srvCaseExport2",
          "srvCaseExport3",
          "srvCaseExport4",
        ],
        noteKey: "srvCaseExportNote",
      },
    ],
    outcomesTitleKey: "srvCaseOutcomesTitle",
    outcomes: [
      "srvCaseOutcome1",
      "srvCaseOutcome2",
      "srvCaseOutcome3",
      "srvCaseOutcome4",
    ],
    linksTitleKey: "srvCaseLinksTitle",
    links: [
      {
        labelKey: "srvCaseLinkLive",
        href: "https://alejosworkstuff.github.io/sarava-radio-streaming/",
        external: true,
      },
      {
        labelKey: "srvCaseLinkRepo",
        href: "https://github.com/alejosworkstuff/sarava-radio-streaming",
        external: true,
      },
    ],
  },
};
