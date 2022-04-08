import React, { Component } from 'react'
import ParticlesMagic from '../../components/Particles/Particles'
import styles from './Experience.module.css'

export default class Experience extends Component {
    render() {
        return (
            <div className={styles.container}>
            <ParticlesMagic />
            <div className={styles.frost}>
             <div className={styles.workContainer}>
            <h1>Education</h1>
            <h2> Alchemy Code Lab</h2>
            <h3> August 2021 - March 2022</h3>
            <h4> Certificate: FullStack JavaScript</h4>
            <h2> Oklahoma Christian University</h2>
            <h3> August 2016 - April 2019</h3>
            <h4> Bachelors: Public Communication and Leadership</h4>
            <h4> Minor: Management </h4>
            <h1>Positions</h1>
            <h2>Oklahoma State Department of Rehabilitation Services</h2>
            <h3> December 2020-June 2021</h3>
            <h4> Disability Determination Specialist 1</h4>

            <h2>Hertz Car Rental</h2>
            <h3> July 2020-November 2020</h3>
            <h4> Title and Registration Processor</h4>
            </div>  
            </div>


            </div>
        )
    }
}
