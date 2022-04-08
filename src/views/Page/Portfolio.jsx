import React, { Component } from 'react'
import ParticlesMagic from '../../components/Particles/Particles'
import styles from './Portfolio.module.css'

export default class Portfolio extends Component {
    render() {
        return (
            <div className={styles.container}>
            <ParticlesMagic />
            <div className={styles.frost}>
             <div className={styles.stackContainer}>
            <h1>My Applications</h1>
            <h2>Fullstack: </h2>
            <p> Bop Simon ( Live || Repo ): </p>
            <p> Pawstrology( Live || Repo ): </p>
            <p> Avatar API ( Live || Repo ): </p>
            <h2>Front-End</h2>
            <p> Ask Xem ( Live || Repo ): </p>
            <p> Futurama API ( Live || Repo ): </p>
            <p> Character Builder (Live || Repo): </p>
            <h2>Back-End</h2>
            <p> Local Bookstore (Live || Repo): </p>
            <p> Hands of Mythology (Live || Repo || In Progress): </p>
            <p> Toxic Catcher (Repo || In Progress): </p>
            </div>  
            </div>


            </div>
        )
    }
}
