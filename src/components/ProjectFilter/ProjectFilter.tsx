import styles from "./ProjectFilter.module.css";
import React, { useState, useId } from "react";
import Select, {
  components,
  MultiValue,
  SingleValue,
  StylesConfig,
} from "react-select";
import { IconName } from "@assets/Icons";
import { ProjectCategory } from "@data/Projects/types";
import { StickyNote } from "@components/StickyNote";
import { HighlightedHeading } from "@components/HighlightedHeading";
import { useInViewAnimation } from "@hooks/useInViewAnimation";

type Option = { value: string; label: string };

const skills = [
  { value: "AJAX", label: "AJAX" },
  { value: "Aseprite", label: "Aseprite" },
  { value: "BitECS", label: "BitECS" },
  { value: "Blender", label: "Blender" },
  { value: "CodeSandbox", label: "CodeSandbox" },
  { value: "Colyseus", label: "Colyseus" },
  { value: "Csharp", label: "C#" },
  { value: "CSS", label: "CSS" },
  { value: "Figma", label: "Figma" },
  { value: "HTML", label: "HTML" },
  { value: "JavaScript", label: "JavaScript" },
  { value: "Jest", label: "Jest" },
  { value: "NextJS", label: "Next.js" },
  { value: "Phaser", label: "Phaser" },
  { value: "PixiJS", label: "Pixi.js" },
  { value: "React", label: "React" },
  { value: "ReactSpring", label: "React Spring" },
  { value: "RxJS", label: "RxJS" },
  { value: "Svelte", label: "Svelte" },
  { value: "TypeScript", label: "TypeScript" },
  { value: "Unity", label: "Unity" },
  { value: "Vercel", label: "Vercel" },
  { value: "Vitest", label: "Vitest" },
  { value: "VueJS", label: "Vue.js" },
  { value: "XState", label: "XState" },
  { value: "Tailwind", label: "Tailwind CSS" },
];

const categories = [
  { value: "", label: "All" },
  { value: "website", label: "Websites" },
  { value: "game", label: "Games" },
  { value: "demo", label: "Demos" },
];

export type FilterCriteria = {
  selectedSkills?: IconName[];
  selectedCategory?: ProjectCategory;
};

const CustomOption = (props: any) => {
  return (
    <components.Option {...props}>
      <div className={styles.optionContainer}>
        <div className={styles.optionIcon}>
          <StickyNote
            variant="sticker"
            icon={props.data.value}
            size="small"
            showText={false}
          />
        </div>
        <>{props.data.label}</>
      </div>
    </components.Option>
  );
};

const skillsFilterStyles: StylesConfig<Option, true> = {
  // control: (styles, { isFocused }) => ({ ...styles }),
  // menu: (styles) => ({ ...styles }),
  placeholder: (styles) => ({ ...styles, fontStyle: "italic", color: "#333" }),
};

const categoryFilterStyles: StylesConfig<Option, false> = {
  // control: (styles) => ({ ...styles }),
  // menu: (styles) => ({ ...styles }),
  placeholder: (styles) => ({ ...styles, fontStyle: "italic", color: "#333" }),
};

export const ProjectFilter: React.FC<{
  onFilterChange: (criteria: FilterCriteria) => void;
}> = ({ onFilterChange }) => {
  const skillsId = useId();
  const categoriesId = useId();

  const [selectedSkills, setSelectedSkills] = useState<IconName[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<
    ProjectCategory | undefined
  >(undefined);

  const [ref, animatedStyle, AnimatedDiv] = useInViewAnimation("div", "grow");

  const handleSkillChange = (options: MultiValue<Option>) => {
    const skills = [...options.map((option) => option.value)];
    setSelectedSkills(skills);
    onFilterChange({
      selectedSkills: skills,
      selectedCategory,
    });
  };

  const handleCategoryChange = (option: SingleValue<Option>) => {
    const category = option?.value as ProjectCategory;
    setSelectedCategory(category);
    onFilterChange({ selectedSkills, selectedCategory: category });
  };

  return (
    <>
      <HighlightedHeading text="Filter Projects" id={"filter"} />
      <AnimatedDiv
        id="filter-container"
        ref={ref}
        style={{ ...animatedStyle }}
        className={styles.filterContainer}
      >
        <div className={styles.filterControls}>
          <div className={styles.inputGroup}>
            <label id="category-label" aria-label="category" htmlFor="category">
              Category
            </label>
            <Select
              id="category"
              instanceId={categoriesId}
              className={styles.select}
              placeholder="All"
              onChange={handleCategoryChange}
              options={categories}
              styles={categoryFilterStyles}
              aria-label="Filter by project category"
              aria-labelledby="category-label"
            />
          </div>
          <div className={styles.inputGroup}>
            <label id="skills-label" aria-label="skills" htmlFor={skillsId}>Skills</label>
            <Select
              id={skillsId}
              instanceId={skillsId}
              className={styles.select}
              placeholder="Any"
              onChange={handleSkillChange}
              isMulti
              options={skills}
              components={{ Option: CustomOption }}
              styles={skillsFilterStyles}
              aria-label="Filter by specific skills"
              aria-labelledby="skills-label"
            />
          </div>
        </div>
      </AnimatedDiv>
    </>
  );
};
