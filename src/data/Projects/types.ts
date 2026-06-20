import { IconName } from "@assets/Icons";

export type SocialLink = {
  icon: IconName;
  text: string;
  url: string;
};

export type ProjectCategory = "game" | "website" | "demo";

export type ScreenshotMeta = {
  url: string;
  alt: string;
  description?: string;
};

export type ProjectDetails = {
  projectName: string;
  category: ProjectCategory;
  id?: string;
  screenshots?: ScreenshotMeta[];
  year: string;
  status?: "in progress" | "complete";
  skills: IconName[];
  subheading?: string;
  description: string;
  contributions?: string;
  highlights?: string[];
  links?: SocialLink[];
  flowCharts?: {
    title: string;
    chart: string;
  }[];
};
