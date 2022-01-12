import React from "react";
import { ProjectData } from "../../utils/types";
import { getRoleString } from "../../utils/getRoles";
import { getLinkIcon } from "../../utils/getLinkIcon";
import styles from "./project.module.css";

interface ProjectCardType {
  project: ProjectData;
}

const ProjectCard: React.FC<ProjectCardType> = ({ project }) => {
  return (
    <div className={styles.card}>
      <p className={styles.card_title}>{project.projectName}</p>
      <img
        className={styles.card_image}
        alt={project.projectName}
        src={project.img}
      />
      <div className={["flex_column", styles.card_roles].join(" ")}>
        <p className={styles.card_subtitle}>Role(s)</p>
        <div className={styles.card_link_box}>
          {project.roles.map((role) => (
            <p>{getRoleString(role)}</p>
          ))}
        </div>
      </div>
      <div className={styles.card_description}>
        <strong>Description</strong>
        <p>{project.description}</p>
      </div>
      <div className={styles.card_link_box}>
        {project.links.map((link) => {
          return (
            <div className={styles.card_link}>
              <a
                href={link.uri}
                className={styles.link}
                target="_blank"
                rel="noreferrer"
              >
                {getLinkIcon(link.kind, "2rem")}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectCard;
