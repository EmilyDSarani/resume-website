import React from 'react'
import ParticlesMagic from '../../components/Particles/Particles'
import styles from './Contact.module.css'
import { Link } from 'react-router-dom'
import Emailjs from '../../components/Contact/Emailjs'

export default function Contact() {
  return (
    <div className={styles.container}>
        <ParticlesMagic />
        <div className={styles.frost}>
        <h1 className={styles.contact}>Contact Me!</h1>
        <Emailjs />
        <h1 className={styles.connect} >Connect with Me!</h1>
        <div className={styles.buttonContainer}>
            <Link to="/"><button>Home</button></Link>
        </div>

        </div>

    </div>
  )
}

