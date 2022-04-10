import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ParticlesMagic from '../../components/Particles/Particles'
import styles from './Portfolio.module.css'

export default class Portfolio extends Component {
    render() {
        return (
            <div className={styles.container}>
            <ParticlesMagic />
            <div className={styles.frost}>
             <div className={styles.stackContainer}>
            <h1 className={styles.title}>My Applications</h1>
            <h2 className={styles.header}>Fullstack: </h2>
            <p className={styles.app}> Bop Simon 
            (&nbsp; <a href="https://bop-simon-prod.netlify.app/" target="_blank" rel="noreferrer">Live </a> &nbsp; || &nbsp;
            <a href="https://github.com/bop-simon" target="_blank" rel="noreferrer"> Repo </a> &nbsp;): </p>
            <p className={styles.app}> Pawstrology (&nbsp; <a href="https://paw-star.netlify.app/" target="_blank" rel="noreferrer">Live </a> &nbsp; || &nbsp;
            <a href="https://github.com/EmilyDSarani/paw-star-fe" target="_blank" rel="noreferrer"> Repo </a> &nbsp;) </p>
            <p className={styles.app}> Avatar API (&nbsp; <a href="https://avatarcharacters.netlify.app/" target="_blank" rel="noreferrer">Live </a> &nbsp; || &nbsp;
            <a href="https://github.com/EmilyDSarani/airbende-frontend" target="_blank" rel="noreferrer"> Repo </a> &nbsp;) </p>
            <h2 className={styles.header}>Front-End</h2>
            <p className={styles.app}> Ask Xem (&nbsp; <a href="https://askxem.netlify.app/" target="_blank" rel="noreferrer">Live </a> &nbsp; || &nbsp;
            <a href="https://github.com/askxem" target="_blank" rel="noreferrer"> Repo </a> &nbsp;) </p>
            <p className={styles.app}> Futurama API (&nbsp; <a href="https://futurama-characters-list.netlify.app/" target="_blank" rel="noreferrer">Live </a> &nbsp; || &nbsp;
            <a href="https://github.com/EmilyDSarani/futurama-list" target="_blank" rel="noreferrer"> Repo </a> &nbsp;) </p>
            <p className={styles.app}> Character Builder (&nbsp; <a href="https://character-create-blocka.netlify.app/" target="_blank" rel="noreferrer">Live </a> &nbsp; || &nbsp;
            <a href="https://github.com/EmilyDSarani/character-builder-blockA" target="_blank" rel="noreferrer"> Repo </a> &nbsp;) </p>
            <h2 className={styles.header}>Back-End</h2>
            <p className={styles.app}> Local Bookstore (&nbsp; <a href="https://karls-bookstore.herokuapp.com/" target="_blank" rel="noreferrer">Live </a> &nbsp; || &nbsp;
            <a href="https://github.com/ZackLyon/local-bookstore" target="_blank" rel="noreferrer"> Repo </a> &nbsp;) </p>
            <p className={styles.app}> Hands of Mythology (&nbsp; <a href="https://hands-of-mythology.herokuapp.com/" target="_blank" rel="noreferrer">Live </a> &nbsp; || &nbsp;
            <a href="https://github.com/EmilyDSarani/hands-of-mythology-resources" target="_blank" rel="noreferrer"> Repo </a> &nbsp;) </p>
            <p className={styles.app}> Toxic Catcher (&nbsp;
            <a href="https://github.com/EmilyDSarani/activitybuild-lab07" target="_blank" rel="noreferrer"> Repo </a> &nbsp; || &nbsp; In Progress &nbsp;): </p>
            <div className={styles.buttonContainer}>
            <Link to="/"><button>Home</button></Link>
            </div>
            </div>  
            </div>


            </div>
        )
    }
}
