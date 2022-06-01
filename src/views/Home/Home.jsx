import React, { Component } from "react";
import ParticlesMagic from "../../components/Particles/Particles";
import styles from "./Home.module.css";
import me from "../../assets/me.png";
import { Link } from "react-router-dom";

// import Video from '../../components/Video/Video'

export default class Home extends Component {
  render() {
    return (
      <main className="flex items-center justify-center h-screen w-screen flex-col">
        <ParticlesMagic />
        {/* the brackets in tailwind allows you to use arbitary values */}
        <body className="flex z-[9999] w-5/6 sm:w-4/5 h-5/6 sm:h-4/5 max-w-4xl justify-center bg-gradient-to-r from-sky-800 to-transparent backdrop-blur-sm shadow flex-col items-center">

          <img className='h-[200px] w-[200px] p-2.5' src={me} alt="my avatar" />
          

          <h1 className='text-slate-300 text-3xl text-center pb-3 font-mono'>Emily Sarani (She/Her)</h1>
       
          <p className='text-emerald-500 font-mono text-xl pb-2 text-center'>FullStack JavaScript Developer</p>
          <p className='text-emerald-500 font-mono text-xl pb-2 text-center'>
            {" "}
            Currently involved with Code for America, Co.Lab and The Collab Lab
          </p>
         
          <span className='flex flex-col sm:flex-row justify-center sm:justify-between items-center w-[400px] pt-4'>

            <Link to="/portfolio">
              <button className='flex items-center justify-center border-2 border-sky-400 rounded-full p-2 bg-slate-700 text-slate-300 hover:border-slate-500 hover:bg-slate-900 hover:text-emerald-400'>My Portfolio</button>
            </Link>
            <Link to="/experience">
              <button className='flex items-center justify-center border-2 border-sky-400 rounded-full p-2 bg-slate-700 text-slate-300 hover:border-slate-500 hover:bg-slate-900 hover:text-emerald-400'>My Experience</button>
            </Link>
            <Link to="/contact">
              <button className='flex items-center justify-center border-2 border-sky-400 rounded-full p-2 bg-slate-700 text-slate-300 hover:border-slate-500 hover:bg-slate-900 hover:text-emerald-400'>Connect With Me</button>
            </Link>
          </span>
          {/* <Name /> */}
        </body>
      </main>
    );
  }
}
