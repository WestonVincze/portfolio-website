"use client";

import styles from "./ProjectFilter.module.css";
import React, {
  useId,
  useCallback,
  useMemo,
  useEffect,
  useRef,
  useState,
} from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Select, {
  components,
  MultiValue,
  SingleValue,
  StylesConfig,
} from "react-select";
import { IconName } from "@assets/Icons";
import { ProjectCategory } from "@data/Projects/types";
import { StickyNote } from "@components/StickyNote";
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

const sortOptions = [
  { value: "default", label: "Default" },
  { value: "year-desc", label: "Year (Newest)" },
  { value: "year-asc", label: "Year (Oldest)" },
  { value: "name-asc", label: "Name (Asc)" },
  { value: "name-desc", label: "Name (Desc)" },
];

export type SortBy =
  | "year-desc"
  | "year-asc"
  | "name-desc"
  | "name-asc"
  | "default";

export type FilterCriteria = {
  selectedSkills?: IconName[];
  selectedCategory?: ProjectCategory;
  sortBy?: SortBy;
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
  placeholder: (styles) => ({ ...styles, fontStyle: "italic", color: "#333" }),
};

const categoryFilterStyles: StylesConfig<Option, false> = {
  placeholder: (styles) => ({ ...styles, fontStyle: "italic", color: "#333" }),
};

const sortFilterStyles: StylesConfig<Option, false> = {
  placeholder: (styles) => ({ ...styles, fontStyle: "italic", color: "#333" }),
};

export const ProjectFilter: React.FC<{
  onFilterChange: (criteria: FilterCriteria) => void;
}> = ({ onFilterChange }) => {
  const skillsId = useId();
  const categoriesId = useId();
  const searchParams = useSearchParams();
  const router = useRouter();
  const prevFilterRef = useRef<FilterCriteria | null>(null);

  const [collapsed, setCollapsed] = useState(true);
  const sortId = useId();

  const [ref, animatedStyle, AnimatedDiv] = useInViewAnimation("div", "grow");

  const selectedCategory = useMemo(
    () => (searchParams.get("category") as ProjectCategory) || undefined,
    [searchParams],
  );

  const selectedSkills = useMemo(() => {
    const skillsParam = searchParams.get("skills");
    return skillsParam
      ? (skillsParam.split(",").filter(Boolean) as IconName[])
      : [];
  }, [searchParams]);

  const selectedSort = useMemo(
    () => (searchParams.get("sort") as SortBy) || undefined,
    [searchParams],
  );

  useEffect(() => {
    const currentFilter = {
      selectedSkills,
      selectedCategory,
      sortBy: selectedSort,
    };
    const prevFilter = prevFilterRef.current;

    if (JSON.stringify(currentFilter) !== JSON.stringify(prevFilter)) {
      prevFilterRef.current = currentFilter;
      onFilterChange(currentFilter);
    }
  }, [
    searchParams,
    onFilterChange,
    selectedSkills,
    selectedCategory,
    selectedSort,
  ]);

  const updateQueryParams = useCallback(
    (
      newSkills: IconName[],
      newCategory: ProjectCategory | undefined,
      newSort?: SortBy,
    ) => {
      const params = new URLSearchParams(searchParams.toString());

      if (newCategory) {
        params.set("category", newCategory);
      } else {
        params.delete("category");
      }

      if (newSkills.length > 0) {
        params.set("skills", newSkills.join(","));
      } else {
        params.delete("skills");
      }

      if (newSort && newSort !== "default") {
        params.set("sort", newSort);
      } else {
        params.delete("sort");
      }

      router.push(`?${params.toString()}`, { scroll: false });
    },
    [router, searchParams],
  );

  const handleSkillChange = (options: MultiValue<Option>) => {
    const newSkills = options.map((option) => option.value as IconName);
    updateQueryParams(newSkills, selectedCategory, selectedSort);
  };

  const handleCategoryChange = (option: SingleValue<Option>) => {
    const newCategory = (option?.value as ProjectCategory) || undefined;
    updateQueryParams(selectedSkills, newCategory, selectedSort);
  };

  const handleSortChange = (option: SingleValue<Option>) => {
    const newSort = (option?.value as SortBy) || undefined;
    updateQueryParams(selectedSkills, selectedCategory, newSort);
  };

  const selectedSkillsOptions = useMemo(
    () =>
      selectedSkills
        .map((skill) => skills.find((s) => s.value === skill))
        .filter(Boolean) as Option[],
    [selectedSkills],
  );

  const selectedCategoryOption = useMemo(
    () => categories.find((cat) => cat.value === selectedCategory),
    [selectedCategory],
  );

  const selectedSortOption = useMemo(
    () => sortOptions.find((opt) => opt.value === selectedSort),
    [selectedSort],
  );

  return (
    <AnimatedDiv
      id="filter-container"
      ref={ref}
      style={{ ...animatedStyle }}
      className={styles.filterContainer}
    >
      <button
        className={styles.toggleHeader}
        onClick={() => setCollapsed(!collapsed)}
        aria-expanded={!collapsed}
        aria-controls="filter-controls"
      >
        <span>Filter / Sort</span>
        <span className={`${styles.arrow} ${!collapsed ? styles.arrowUp : ""}`}>
          &#9660;
        </span>
      </button>
      <div
        className={`${styles.collapsible} ${collapsed ? styles.collapsed : ""}`}
      >
        <div id="filter-controls" className={styles.filterControls}>
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
              value={selectedCategoryOption}
              styles={categoryFilterStyles}
              aria-label="Filter by project category"
              aria-labelledby="category-label"
              isClearable
              tabIndex={collapsed ? -1 : undefined}
            />
          </div>
          <div className={styles.inputGroup}>
            <label id="skills-label" aria-label="skills" htmlFor={skillsId}>
              Skills
            </label>
            <Select
              id={skillsId}
              instanceId={skillsId}
              className={styles.select}
              placeholder="Any"
              onChange={handleSkillChange}
              isMulti
              options={skills}
              value={selectedSkillsOptions}
              components={{ Option: CustomOption }}
              styles={skillsFilterStyles}
              aria-label="Filter by specific skills"
              aria-labelledby="skills-label"
              tabIndex={collapsed ? -1 : undefined}
              isClearable
            />
          </div>
          <div className={styles.inputGroup}>
            <label id="sort-label" aria-label="sort" htmlFor={sortId}>
              Sort By
            </label>
            <Select
              id={sortId}
              instanceId={sortId}
              className={styles.select}
              placeholder="Default"
              onChange={handleSortChange}
              options={sortOptions}
              value={selectedSortOption}
              styles={sortFilterStyles}
              aria-label="Sort projects"
              aria-labelledby="sort-label"
              tabIndex={collapsed ? -1 : undefined}
              isClearable={false}
            />
          </div>
        </div>
      </div>
    </AnimatedDiv>
  );
};
