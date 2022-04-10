import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ParticlesMagic from '../../components/Particles/Particles'
import styles from './Experience.module.css'

export default class Experience extends Component {
    render() {
        return (
            <div className={styles.container}>
            <ParticlesMagic />
            <div className={styles.frost}>
             <div className={styles.workContainer}>
            <h1 className={styles.header}>Education</h1>
            <h2 className={styles.work}> Alchemy Code Lab</h2>
            <h3 className={styles.date}> August 2021 - March 2022</h3>
            <h4 className={styles.info}> Certificate: FullStack JavaScript</h4>
            <h2 className={styles.work}> Oklahoma Christian University</h2>
            <h3 className={styles.date}> August 2016 - April 2019</h3>
            <h4 className={styles.info}> Bachelors: Public Communication and Leadership</h4>
            <h4 className={styles.info}> Minor: Management </h4>
            <h1 className={styles.header}>Positions</h1>

            <h2 className={styles.work}>Oklahoma State Department of Rehabilitation Services</h2>
            <h3 className={styles.date}> December 2020-June 2021</h3>
            <h4 className={styles.info}> Disability Determination Specialist 1</h4>

            <h2 className={styles.work}>Hertz Car Rental</h2>
            <h3 className={styles.date}> July 2020-November 2020</h3>
            <h4 className={styles.info}> Title and Registration Processor</h4>


            
            <div className={styles.buttonContainer}>
            <Link to="/"><button>Home</button></Link>
            </div>
            </div>  
            </div>

            </div>
        )
    }
}
