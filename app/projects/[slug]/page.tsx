import { notFound } from "next/navigation";
import { caseStudies } from "@/lib/caseStudies";
import { caseStudySlugs } from "@/lib/projects";
import { CaseStudyView } from "@/components/projects/CaseStudyView";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudySlugs.map((slug) => ({ slug }));
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = caseStudies[slug];
  if (!study) notFound();
  return <CaseStudyView study={study} />;
}
