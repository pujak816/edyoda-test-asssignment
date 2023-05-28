import React from "react";
import styles from "../styles.module.css";
import { FaRupeeSign } from "react-icons/fa";

const MainComponent = () => {
  return (
    <div className={styles.content_container}>
      <div className={styles.Main}>
        <header>
          <h1>
            Access curated courses worth <br></br>
            <FaRupeeSign />
            <span className={styles.main_line_span}>18500 </span>
            at just{" "}
            <span>
              <FaRupeeSign />
              99
            </span>{" "}
            per year!
          </h1>
        </header>
        <div className={styles.pointer}>
          <img src={require("../assets/Icon (1).png")} alt="img" />

          <p className={styles.pointer__text}>
            <span>100+ </span>Job relevant courses
          </p>
        </div>
        <div className={styles.pointer}>
          <img src={require("../assets/Icon (3).png")} alt="img" />

          <p className={styles.pointer__text}>
            <span>20,000+ </span>Hours of content
          </p>
        </div>
        <div className={styles.pointer}>
          <img src={require("../assets/Icon.png")} alt="img" />

          <p className={styles.pointer__text}>
            <span>Exclusive </span>Webinar access
          </p>
        </div>
        <div className={styles.pointer}>
          <img src={require("../assets/Icon (2).png")} alt="img" />

          <p className={styles.pointer__text}>
            Scholarship worth
            <span>
              {" "}
              <FaRupeeSign className={styles.pointer_rupee} />
              94,500
            </span>
          </p>
        </div>
        <div className={styles.pointer}>
          <img src={require("../assets/Icon (4).png")} alt="img" />

          <p className={styles.pointer__text}>
            <span>Ad Free</span> learning experience
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
