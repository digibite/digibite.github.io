import React from "react";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <h2>Projects</h2>
      <div className="project">
        <h3>Project Title</h3>
        <p>Project description.</p>
      </div>
      {/* Add more projects as needed */}
    </section>
  );
};

export default Projects;
