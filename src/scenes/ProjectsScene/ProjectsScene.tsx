import styles from "./ProjectsScene.module.css";
import { useState } from "react";
import { ProjectCard } from "@components/ProjectCard";
import { Container } from "@components/Container";
import { Projects, ProjectDetails } from "@data/Projects";
import { FilterCriteria, ProjectFilter, SortBy } from "@components/ProjectFilter";

const projects = Projects;

const sortProjects = (projects: ProjectDetails[], sortBy?: SortBy): ProjectDetails[] => {
  const sorted = [...projects];
  switch (sortBy) {
    case "year-asc":
      return sorted.sort((a, b) => parseInt(a.year) - parseInt(b.year));
    case "year-desc":
      return sorted.sort((a, b) => parseInt(b.year) - parseInt(a.year));
    case "name-asc":
      return sorted.sort((a, b) => {
        const textA = a.projectName.toLocaleUpperCase();
        const textB = b.projectName.toLocaleUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0
      });
    case "name-desc":
      return sorted.sort((a, b) => {
        const textA = a.projectName.toLocaleUpperCase();
        const textB = b.projectName.toLocaleUpperCase();
        return (textB < textA) ? -1 : (textB > textA) ? 1 : 0
      });
    case "default":
    default:
      return sorted.sort((a, b) => {
        const orderA = a.order ?? Infinity;
        const orderB = b.order ?? Infinity;
        if (orderA !== orderB) return orderA - orderB;
        return parseInt(b.year) - parseInt(a.year);
      });
  }
};

const filterProjects = (
  projects: ProjectDetails[],
  criteria: FilterCriteria,
): ProjectDetails[] => {
  const filtered = projects.filter((project) => {
    const matchesSkills =
      !criteria.selectedSkills ||
      criteria.selectedSkills.every((skill) => project.skills.includes(skill));
    const matchedCategory =
      !criteria.selectedCategory ||
      criteria.selectedCategory === project.category;

    return matchesSkills && matchedCategory;
  });
  return sortProjects(filtered, criteria.sortBy);
};

export const ProjectsScene = (): JSX.Element => {
  const [filteredProjects, setFilteredProjects] =
    useState<ProjectDetails[]>(sortProjects(projects));

  const handleFilterChange = (criteria: FilterCriteria) => {
    setFilteredProjects(filterProjects(projects, criteria));
  };

  return (
    <Container>
      <ProjectFilter onFilterChange={handleFilterChange} />
      {filteredProjects.length > 0 ? (
        filteredProjects.map((project, i) => (
            <section key={i}>
              <ProjectCard {...project} />
            </section>
          ))
      ) : (
        <div className={styles.noResults}>
          <p>No results found. Try changing or clearing the filters.</p>
        </div>
      )}
    </Container>
  );
};
