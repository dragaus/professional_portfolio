import React from "react";
import ProjectCard from "../../components/project_card";
import { projects } from "../../constants/projects";
import styles from "./projects.module.css";

const Projects = () => {
  return (
    <div className="page">
      <h2>Projects</h2>
      <div className={styles.card_div}>
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
