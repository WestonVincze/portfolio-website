import styles from "./ResumeScene.module.css";
import utilStyles from "@styles/utils.module.css";
import { Container } from "@components/Container";
import { Resume } from "@data/Resume";
import { LinedPaper } from "@components/LinedPaper";
import { SkillStickers } from "@components/SkillStickers";
import { StickyNote } from "@components/StickyNote";
import { HighlightedHeading } from "@components/HighlightedHeading";
import { useInViewAnimation } from "@hooks/useInViewAnimation";
import { trackEvent } from "src/utils/analytics";

export const ResumeScene = () => {
  const [ref, animatedStyles, AnimatedHeader] = useInViewAnimation(
    "header",
    "shrink",
  );

  const handleDownloadClick = (filename: string) => {
    trackEvent({
      event_category: "conversion",
      event_action: "download",
      event_label: filename,
    });
  };

  return (
    <Container>
      <article className={styles.resume}>
        <AnimatedHeader
          ref={ref}
          style={animatedStyles}
          className={styles.stickyNotes}
        >
          <a
            href="/resumes/WestonVinczeResume-Concise.pdf"
            onClick={() => handleDownloadClick("single-page-resume")}
            target="_blank"
          >
            <StickyNote icon="PDF" text="Single-Page" />
          </a>
          <a
            href="/resumes/WestonVinczeResume-Detailed.pdf"
            onClick={() => handleDownloadClick("multi-page-resume")}
            target="_blank"
          >
            <StickyNote icon="PDF" text="Multi-Page" />
          </a>
        </AnimatedHeader>

        <section>
          <HighlightedHeading id="summary" text="Summary." />
          <LinedPaper>
            <p>{Resume.intro}</p>
          </LinedPaper>
        </section>

        <section>
          <HighlightedHeading id="skills" text="Skills." />
          {Resume.technicalSkills.map((skillType, i) => (
            <LinedPaper key={i} title={skillType.title}>
              <ul className={styles.skills}>
                {skillType.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </LinedPaper>
          ))}
        </section>

        <section className={styles.experience}>
          <HighlightedHeading id="experience" text="Experience." />
          {Resume.workExperience.map((role, i) => (
            <LinedPaper key={i} title={role.title}>
              <header>
                <h4>{role.company}</h4>
                <p>{`${role.startDate} - ${role.endDate}`}</p>
              </header>

              <section>
                <SkillStickers skills={role.skills} />
              </section>

              <section>
                <p>{role.description}</p>
              </section>

              {role.highlights && (
                <section>
                  <ul>
                    {role.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </section>
              )}
            </LinedPaper>
          ))}
        </section>

        <section className={styles.education}>
          <HighlightedHeading id="education" text="Education." />
          <LinedPaper
            title={`${Resume.education.program} (${Resume.education.degree})`}
          >
            <header>
              <h4>{Resume.education.school}</h4>
              <p>{`${Resume.education.startDate} - ${Resume.education.endDate}`}</p>
            </header>

            <section>
              <p>{Resume.education.description}</p>
            </section>

            <section>
              <ul>
                {Resume.education.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
            </section>
          </LinedPaper>
        </section>

        <section>
          <HighlightedHeading id="hobbies" text="Hobbies." />
          <LinedPaper>
            <ul className={styles.hobbies}>
              {Resume.hobbies.map((hobby, i) => (
                <li key={i}>
                  {hobby.url ? (
                    <a
                      href={hobby.url}
                      className={utilStyles.link}
                      target="_blank"
                    >
                      {hobby.name}
                    </a>
                  ) : (
                    hobby.name
                  )}
                </li>
              ))}
            </ul>
          </LinedPaper>
        </section>
      </article>
    </Container>
  );
};
