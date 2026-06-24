"use client";

import { Container } from "@components/Container";
import { LinedPaper } from "@components/LinedPaper";
import { ProjectScreenshotCarousel } from "@components/ProjectScreenshotCarousel";
import { SkillStickers } from "@components/SkillStickers";
import { StickyNote } from "@components/StickyNote";
import { useInViewAnimation } from "@hooks/useInViewAnimation";
import { notFound } from "next/navigation";
import { Projects } from "src/data/Projects/Projects";
import type { ProjectDetails } from "src/data/Projects/types";
import styles from "./ProjectDetailsScene.module.css";
import Link from "next/link";
import { Icons } from "@assets/Icons";
import { MermaidChart } from "@components/MermaidChart";
import { HighlightedHeading } from "@components/HighlightedHeading";

export const ProjectDetailsScene = ({
  id,
  projectName,
  year,
  skills,
  subheading,
  description,
  flowCharts,
  contributions,
  highlights,
  screenshots,
  links,
}: ProjectDetails) => {
  const project: ProjectDetails | undefined = Projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  const [ref, animatedStyles, AnimatedNav] = useInViewAnimation(
    "nav",
    "shrink",
  );

  return (
    <Container>
      {links && (
        <AnimatedNav ref={ref} style={animatedStyles} className={styles.topNav}>
          <div className={styles.stickyNotes}>
            {links.map((link) => (
              <a
                href={link.url}
                target="_blank"
                rel="noreferrer"
                key={link.text}
                aria-label={`${link.text} for ${projectName}`}
              >
                <StickyNote text={link.text} icon={link.icon} />
              </a>
            ))}
          </div>
          <Link className={styles.back} href="/projects">
            {Icons["ArrowLeft"].icon()}
            All Projects
          </Link>
        </AnimatedNav>
      )}

      <LinedPaper id={id} title={`${projectName} (${year})`}>
        <p role="doc-subtitle" className={styles.subheading}>
          {subheading}
        </p>

        {screenshots && (
          <section>
            <ProjectScreenshotCarousel screenshots={screenshots} />
          </section>
        )}

        <section>
          <SkillStickers skills={skills} />
        </section>

        <section>
          <h4>Description</h4>
          <p>{description}</p>
        </section>

        {contributions && (
          <section>
            <h4>My Contributions</h4>
            <p>{contributions}</p>
          </section>
        )}

        {highlights && (
          <section>
            <h4>Highlights</h4>
            <ul>
              {highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </section>
        )}
      </LinedPaper>

      {flowCharts && (
        <section>
          <HighlightedHeading id="diagrams" text="Flow Charts & Diagrams" />
          {flowCharts.map((flowChart) => (
            <MermaidChart key={flowChart.title} {...flowChart} />
          ))}
        </section>
      )}
    </Container>
  );
};
