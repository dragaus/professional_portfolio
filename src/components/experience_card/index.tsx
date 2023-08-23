import React from "react";
import { Experience } from "../../utils/types";
import styles from "./styles.module.css";

interface ExperienceCardInterface {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardInterface> = ({ experience }) => {
  return (
    <div className={styles.experience_card}>
      <h4 className={styles.company_name}>
        <a href={experience.website} target="_blank" rel="noreferrer">
          {experience.companyName}
        </a>
      </h4>
      <h5>{experience.workPeriod}</h5>
      <div className={styles.experiences}>
        {experience.positions.map((position) => {
          return (
            <div className={styles.experience}>
              <p className={styles.title}>{position.positionName}</p>
              <p className={styles.subtitle}>{position.projectName}</p>
              <p>{position.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExperienceCard;
