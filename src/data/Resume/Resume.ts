import type { ResumeFormat } from "./types";
import { education } from "./Education";
import { hobbies } from "./Hobbies";
import { technicalSkills } from "./TechnicalSkills";
import { workExperience } from "./WorkExperience";

const intro =
  "Self-driven Frontend Developer with 8 years of experience building user-focused, high-performance web applications. JavaScript expert specializing in NextJS, React, and TypeScript, dedicated to delivering scalable, maintainable solutions.";

export const Resume: ResumeFormat = {
  intro,
  technicalSkills,
  workExperience,
  education,
  hobbies,
};
