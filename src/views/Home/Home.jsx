import React, { Component } from "react";
import ParticlesMagic from "../../components/Particles/Particles";
// import styles from "./Home.module.css";
import me from "../../assets/me.png";
import { Link } from "react-router-dom";
import { buttonContainerStyles, buttonStyles, containerStyles, frostStyles } from "../../utils/stylesContainer";

// import Video from '../../components/Video/Video'

export default class Home extends Component {
  render() {
    return (
      <main className={containerStyles}>
        <ParticlesMagic />
        {/* the brackets in tailwind allows you to use arbitary values */}
        <body className={frostStyles}>

          <img className='h-[200px] w-[200px] p-2.5' src={me} alt="my avatar" />
          
          <h1 className='text-slate-300 text-3xl text-center pb-3 font-mono'>Emily Sarani (She/Her)</h1>
          <p className='text-emerald-500 font-mono text-xl pb-2 text-center'>FullStack JavaScript Developer</p>
          <p className='text-emerald-500 font-mono text-xl pb-2 text-center'>
            {" "}
            Currently involved with Code for America, Co.Lab and The Collab Lab
          </p>
         
          <span className={buttonContainerStyles}>

            <Link to="/portfolio">
                
              <button className={buttonStyles}>My Portfolio</button>
            </Link>
            <Link to="/experience">
              <button className={buttonStyles}>My Experience</button>
            </Link>
            <Link to="/contact">
              <button className={buttonStyles}>Connect With Me</button>
            </Link>
          </span>
          {/* <Name /> */}
        </body>
      </main>
    );
  }
}
