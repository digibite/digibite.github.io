import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <section id="projects" className={`${styles.projects} animateSec`}>
      <h2>Projects</h2>
      <div className="project">
        <h3>Project Title</h3>
        <p>Project description.</p>
      </div>
    </section>
  );
};

export default Projects;
