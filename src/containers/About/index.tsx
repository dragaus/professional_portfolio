import React from "react";
import styles from "./about.module.css";
import me from "../../assets/images/me.jpg";

const About = () => {
  return (
    <div className="page">
      <h2>About me</h2>
      <img alt="Francisco Castañeda" src={me} className={styles.me_image}/>
      <p>I'm Francisco Castañeda, I'm from Mexico, I'm a Game developer.</p>
      <p>
        Right now I'm a Unity Lead programmer in Pixframe Studios and professor
        in Coco School Mexico.
      </p>
      <p>I'm particulary passionate about mobile games, ar and gameplay.</p>
      <p>I love to program and learn new programming languages.</p>
      <p>
        Also I've been teaching Unity, Flutter, and another technologies to
        students from all ages, and find a new passion in sharing knowdlege with
        other people.
      </p>
      <p>I love new challenges and I find very gratifyng solving problems.</p>
      <p>
        My hobbies are playing games, reading books, programing arduinos, teach
        my dogs new tricks, modeling in blender, running, cooking, homebrewing,
        and when I have the time, joining game jams.
      </p>
    </div>
  );
};

export default About;
