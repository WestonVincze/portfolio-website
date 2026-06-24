import { IconName } from "@assets/Icons";
import type { MermaidConfig } from "mermaid";

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

export type MermaidChart = {
  title: string;
  chart: string;
  config?: Partial<MermaidConfig>;
  fallbackUrl?: string;
};

export type ProjectDetails = {
  projectName: string;
  category: ProjectCategory;
  order?: number;
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
  flowCharts?: MermaidChart[];
};
