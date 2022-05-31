import React, { Component } from "react";
import ParticlesMagic from "../../components/Particles/Particles";
import styles from "./Home.module.css";
import me from "../../assets/me.png";
import { Link } from "react-router-dom";

// import Video from '../../components/Video/Video'

export default class Home extends Component {
  render() {
    return (
      <div className="flex items-center justify-center h-screen w-screen flex-col">
        <ParticlesMagic />
        {/* the brackets in tailwind allows you to use arbitary values */}
        <div className="flex z-[9999] w-4/5 h-4/5 max-w-4xl justify-center bg-gradient-to-r from-sky-800 to-transparent backdrop-blur-sm shadow flex-col items-center">

          <img className={styles.me} src={me} alt="my avatar" />
          <h1 className='text-red-700'>Emily Sarani (She/Her)</h1>
          <p className={styles.bio}>FullStack JavaScript Developer</p>
          <p className={styles.bio}>
            {" "}
            Currently involved with Code for America, Co.Lab and The Collab Lab
          </p>
          <div className={styles.buttonContainer}>
            <Link to="/portfolio">
              <button>My Portfolio</button>
            </Link>
            <Link to="/experience">
              <button>My Experience</button>
            </Link>
            <Link to="/contact">
              <button>Connect With Me</button>
            </Link>
          </div>
          {/* <Name /> */}
        </div>
      </div>
    );
  }
}
