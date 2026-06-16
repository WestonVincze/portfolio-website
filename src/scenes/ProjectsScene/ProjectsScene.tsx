import styles from "./ProjectsScene.module.css";
import { useState } from "react";
import { ProjectCard } from "@components/ProjectCard";
import { Container } from "@components/Container";
import { Projects, ProjectDetails } from "@data/Projects";
import { FilterCriteria, ProjectFilter } from "@components/ProjectFilter";

const projects = Projects;

const filterProjects = (
  projects: ProjectDetails[],
  criteria: FilterCriteria,
): ProjectDetails[] => {
  return projects.filter((project) => {
    const matchesSkills =
      !criteria.selectedSkills ||
      criteria.selectedSkills.every((skill) => project.skills.includes(skill));
    const matchedCategory =
      !criteria.selectedCategory ||
      criteria.selectedCategory === project.category;

    return matchesSkills && matchedCategory;
  });
};

export const ProjectsScene = (): JSX.Element => {
  const [filteredProjects, setFilteredProjects] =
    useState<ProjectDetails[]>(projects);

  const handleFilterChange = (criteria: FilterCriteria) => {
    setFilteredProjects(filterProjects(projects, criteria));
  };

  return (
    <Container>
      <ProjectFilter onFilterChange={handleFilterChange} />
      {filteredProjects.length > 0 ? (
        filteredProjects
          .sort((a, b) => parseInt(b.year) - parseInt(a.year))
          .map((project, i) => (
            <section key={i}>
              <ProjectCard {...project} id={`challenges-${project.id}`} />
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
