import React from "react";
import styles from "./footer.module.css";
import { BsMailbox } from "react-icons/bs";
import { FaItchIo, FaGithubAlt, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.foots}>
      <div className={styles.foots_icon_div}>
        <a
          className={styles.link}
          href="https://github.com/dragaus"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithubAlt size="3rem" />
        </a>
        |
        <a
          className={styles.link}
          href="https://www.linkedin.com/in/francisco-rovira/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin size="3rem" />
        </a>
        |
        <a
          className={styles.link}
          href="mailto:fracucasrov@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <BsMailbox size="3rem" />
        </a>
        |
        <a
          className={styles.link}
          href="https://barricagames.itch.io/"
          target="_blank"
          rel="noreferrer"
        >
          <FaItchIo size="3rem" />
        </a>
      </div>
      <p>© 2021 Francisco Castañeda.</p>
      <p>All rights reserved</p>
    </div>
  );
};

export default Footer;
