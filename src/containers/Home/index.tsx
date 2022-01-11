import React from "react";
import styles from "./home.module.css";
import { motion } from "framer-motion";
import me from "../../assets/images/me_mega.png";

const Home = () => {
  return (
    <div>
      <div className={styles.main}>
        <motion.div
          animate={{ scale: [10, 1] }}
          transition={{ duration: 1 }}
          className={styles.circle}
        >
          <motion.img
            className={styles.me_mega}
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 3, times: [0, 1] }}
            src={me}
            alt="francisco castañeda"
          />
        </motion.div>
        <motion.div className={styles.text}>
          <h1 className={styles.name}>FRANCISCO C. CASTAÑEDA R.</h1>
          <p>GAME DEVELOPER, PROGRAMMER AND PROFESSOR</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
