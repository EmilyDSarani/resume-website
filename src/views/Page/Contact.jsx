import React from 'react'
import ParticlesMagic from '../../components/Particles/Particles'
import styles from './Contact.module.css'
import { Link } from 'react-router-dom'
import twitter from '../../assets/twitterlogo.png'
import linkedIn from '../../assets/linkedinlogo.png'
import github from '../../assets/githublogo.png'


export default function Contact() {
  return (
    <div className={styles.container}>
        <ParticlesMagic />
        <div className={styles.frost}>
        {/* <Emailjs /> */}
        <h1 className={styles.connect} >Connect with Me!</h1>

        <div className={styles.logoContainer}>
        <a href="https://twitter.com/emilysarani" target="_blank" rel="noreferrer" >
        <img className={styles.logo}src={twitter} alt='icon created by Pixel Perfect'/>
        </a>

        <a href="https://www.linkedin.com/in/emily-sarani/" target="_blank" rel="noreferrer" ><img className={styles.logo}src={linkedIn} alt='icon created by Pixel Perfect'/> </a>

        <a href="https://github.com/EmilyDSarani" target="_blank" rel="noreferrer" >
        <img className={styles.logo}src={github} alt='icon created by Pixel Perfect'/>
        </a>

        </div>

        <div className={styles.buttonContainer}>
            <Link to="/"><button>Home</button></Link>
        </div>

        </div>

    </div>
  )
}

