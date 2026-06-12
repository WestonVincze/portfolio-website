import styles from "./ProjectCard.module.css";
import { LinedPaper } from "../LinedPaper";
import { StickyNote } from "../StickyNote";
import { ProjectDetails } from "@data/Projects/types";
import { SkillStickers } from "../SkillStickers";

type ProjectCardProps = React.HTMLAttributes<HTMLDivElement> & {
  onSelectScreenshot: (url: string) => void;
} & ProjectDetails;

export const ProjectCard = ({
  id,
  onSelectScreenshot,
  projectName,
  year,
  skills,
  subheading,
  description,
  contributions,
  highlights,
  screenshots,
  links,
}: ProjectCardProps) => {
  return (
    <LinedPaper
      id={id}
      title={`${projectName} (${year})`}
      style={links && { marginBottom: "80px" }}
    >
      <p role="doc-subtitle" className={styles.subheading}>
        {subheading}
      </p>

      <section>
        <SkillStickers skills={skills} />
      </section>

      {screenshots && (
        <section className={styles.screenshotContainer}>
          {screenshots?.length > 0 &&
            screenshots?.map((screenshot) => (
              <img
                key={screenshot.url}
                src={`images/screenshots/${screenshot.url}`}
                alt={screenshot.alt}
                onClick={() => onSelectScreenshot(screenshot.url)}
              />
            ))}
        </section>
      )}

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

      {links && (
        <nav className={styles.footer}>
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
        </nav>
      )}
    </LinedPaper>
  );
};
