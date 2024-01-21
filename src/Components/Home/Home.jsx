import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Home.module.css";

const Home = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className={styles.container} id="home">
      <a href="#" onClick={scrollToTop} className={styles.scrollToTop}>
        <img src={getImageUrl("scroll/scroll.gif")} alt="" />
      </a>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Shivansh Bhatia</h1>
        <p className={styles.description}>
          I'm a full-stack developer experience using React and
          NodeJS.<br/> Reach out if you'd like to learn more!
        </p>
        <a href="#contact " className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Home;
