import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={`animateSec ${styles.animateNav}`}>
      <ul className={styles.navLinks}>
        <li>
          <Link to="/" className={styles.textBase}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className={styles.textBase}>
            About
          </Link>
        </li>
        <li>
          <Link to="/projects" className={styles.textBase}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact" className={styles.textBase}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
