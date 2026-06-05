import type { ResumeFormat } from "./types";
import { education } from "./Education";
import { hobbies } from "./Hobbies";
import { technicalSkills } from "./TechnicalSkills";
import { workExperience } from "./WorkExperience";

const intro =
  "I am a Senior Frontend Developer with 8 years of experience designing and building user-focused, scalable web applications. Expertise in React, Next.js, and TypeScript, with a strong focus on performance, accessibility, and developer experience.";

export const Resume: ResumeFormat = {
  intro,
  technicalSkills,
  workExperience,
  education,
  hobbies,
};
