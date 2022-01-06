import React from "react";
import styles from "./home.module.css";
import Navbar from '../../components/navbar';

const home = () => {
  return (
    <div>
      <div className={styles.main}>
        <div className={styles.circle}></div>
        <h1>Francisco Cuauhtemoc Castañeda Rovira</h1>
      </div>
      <Navbar/>
    </div>
  );
};

export default home;
