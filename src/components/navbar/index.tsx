import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import styles from "./navbar.module.css";

const Navbar = () => {
  const { width } = useWindowDimensions();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  const links = [
    <Link to="/about" className={styles.link} onClick={closeMenu}>
      About Me
    </Link>,
    <Link to="/projects" className={styles.link} onClick={closeMenu}>
      Projects
    </Link>,
    <Link to="/contact" className={styles.link} onClick={closeMenu}>
      Contact
    </Link>,
  ];

  const variants = {
    open: {
      opacity: 1,
      scale: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
    closed: {
      opacity: 0,
      scale: 0,
      y: "-100%",
      x: "100%",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className={styles.navs}>
      <Link to="/" className={styles.name} onClick={closeMenu}>
        <p>Francisco Castañeda</p>
      </Link>
      {width <= 820 ? (
        <div>
          <GiHamburgerMenu size="2rem" onClick={() => setIsOpen(!isOpen)} />
          <motion.div
            initial={"closed"}
            className={styles.nav_box}
            variants={variants}
            animate={isOpen ? "open" : "closed"}
          >
            <GrClose
              className={styles.close}
              size="2rem"
              onClick={() => setIsOpen(!isOpen)}
            />
            <div className={styles.nav_list}>{links}</div>
          </motion.div>
        </div>
      ) : (
        <div className={styles.link_box}>{links}</div>
      )}
    </div>
  );
};

export default Navbar;
