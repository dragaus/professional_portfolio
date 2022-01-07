import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

const navbar = () => {
  return (
    <div className={styles.navs}>
      <Link to="/" className={styles.link}>
        <p>Francisco Castañeda</p>
      </Link>
      {/* <div className={styles.flex_box}>
        <Link to="/about" className={styles.link}>
          <p>About me</p>
        </Link>
        <Link to="/projects" className={styles.link}>
          <p>My work</p>
        </Link>
        <Link to="/contact" className={styles.link}>
          <p>Conatct</p>
        </Link>
      </div> */}
    </div>
  );
};

export default navbar;
