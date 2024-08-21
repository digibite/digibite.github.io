import styles from "./Social.module.css";

const SocialBar = () => {
  return (
    <>
      <ul className={`${styles.wrapper} animateSec`}>
        <li className={`${styles.icon} ${styles.linkedin}`}>
          <span className={styles.tooltip}>linkedin</span>
          <a
            href="https://www.linkedin.com/in/irwinggameros/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className={`fa fa-linkedin-square`}
              style={{ color: "#fff", fontSize: "48px" }}
            ></i>
          </a>
        </li>
        <li className={`${styles.icon} ${styles.github}`}>
          <span className={`${styles.tooltip}`}>Github</span>
          <a
            href="https://github.com/digibite"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i
              className="fa fa-github"
              style={{ color: "#fff", fontSize: "54px" }}
            ></i>
          </a>
        </li>
      </ul>
    </>
  );
};

export default SocialBar;
