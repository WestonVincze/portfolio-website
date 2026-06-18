import { ProjectDetailsScene } from "@scenes/ProjectDetailsScene/ProjectDetailsScene";
import { notFound } from "next/navigation";
import { Projects } from "src/data/Projects/Projects";
import type { ProjectDetails } from "src/data/Projects/types";

type Props = { params: { id: string } };

export async function generateStaticParams() {
  return Projects.map((p) => ({ id: p.projectName }));
}

export default function ProjectPage({ params }: Props) {
  const project: ProjectDetails | undefined = Projects.find(
    (p) => p.id === params.id,
  );

  if (!project) {
    notFound();
  }

  return <ProjectDetailsScene {...project} />;
}
