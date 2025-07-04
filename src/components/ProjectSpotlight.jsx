import React from 'react';
import styles from '../style/ProjectSpotlight.module.css';
import projectData from '../data/projectData';

const ProjectSpotlight = () => {
  return (
    <div className={styles.projectSpotlight}>
      <h3>🚀 Projects to Try</h3>
      {projectData.map((proj, index) => (
        <div key={index} className={styles.projectCard}>
          <p><strong>{proj.name}</strong></p>
          <small>{proj.tech}</small>
        </div>
      ))}
    </div>
  );
};

export default ProjectSpotlight;
