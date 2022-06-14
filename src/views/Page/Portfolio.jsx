import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ParticlesMagic from '../../components/Particles/Particles'
import { buttonContainerStyles, buttonStyles, containerStyles, frostStyles } from '../../utils/stylesContainer'
import { repoStyles, liveStyles, headerOneStyles, headerTwoStyles, headerThreeStyles } from '../../utils/stylesGeneral'
// import styles from './Portfolio.module.css'

export default class Portfolio extends Component {
    render() {
        return (

            <div className={containerStyles}>
            <ParticlesMagic />
            <div className={frostStyles}>
             <div>
            <h1 className={headerOneStyles}>My Applications</h1>
            <h2 className={headerTwoStyles}>Fullstack: </h2>
        
            <p className='text-stone-300 font-mono text-l pb-2 text-left'> Bop Simon 
            (&nbsp; <a href="https://bop-simon-prod.netlify.app/" target="_blank" rel="noreferrer" className={liveStyles}>Live </a> &nbsp; || &nbsp;
            
            <a href="https://github.com/bop-simon" target="_blank" rel="noreferrer" className={repoStyles}> Repo </a> &nbsp;): </p>
            <p className={headerThreeStyles}> Pawstrology (&nbsp; <a href="https://paw-star.netlify.app/" target="_blank" rel="noreferrer" className={liveStyles}>Live </a> &nbsp; || &nbsp;
            <a href="https://github.com/EmilyDSarani/paw-star-fe" target="_blank" rel="noreferrer" className={repoStyles}> Repo </a> &nbsp;) </p>
            <p className={headerThreeStyles}> Avatar API (&nbsp; <a href="https://avatarcharacters.netlify.app/" target="_blank" rel="noreferrer" className={liveStyles}>Live </a> &nbsp; || &nbsp;
            <a href="https://github.com/EmilyDSarani/airbende-frontend" target="_blank" rel="noreferrer" className={repoStyles}> Repo </a> &nbsp;) </p>
            <h2 className={headerTwoStyles}>Front-End:</h2>
            <p className={headerThreeStyles}> Ask Xem (&nbsp; <a href="https://askxem.netlify.app/" target="_blank" rel="noreferrer" className={liveStyles}>Live </a> &nbsp; || &nbsp;
            <a href="https://github.com/askxem" target="_blank" rel="noreferrer" className={repoStyles}> Repo </a> &nbsp;) </p>
            <p className={headerThreeStyles}> Futurama API (&nbsp; <a href="https://futurama-characters-list.netlify.app/" target="_blank" rel="noreferrer" className={liveStyles}>Live </a> &nbsp; || &nbsp;
            <a href="https://github.com/EmilyDSarani/futurama-list" target="_blank" rel="noreferrer" className={repoStyles}> Repo </a> &nbsp;) </p>
            <p className={headerThreeStyles}> Character Builder (&nbsp; <a href="https://character-create-blocka.netlify.app/" target="_blank" rel="noreferrer" className={liveStyles}>Live </a> &nbsp; || &nbsp;
            <a href="https://github.com/EmilyDSarani/character-builder-blockA" target="_blank" rel="noreferrer" className={repoStyles}> Repo </a> &nbsp;) </p>
            <h2 className={headerTwoStyles}>Back-End:</h2>
            <p className={headerThreeStyles}> Local Bookstore (&nbsp; <a href="https://karls-bookstore.herokuapp.com/" target="_blank" rel="noreferrer" className={liveStyles}>Live </a> &nbsp; || &nbsp;
            <a href="https://github.com/ZackLyon/local-bookstore" target="_blank" rel="noreferrer" className={repoStyles}> Repo </a> &nbsp;) </p>
            <p className={headerThreeStyles}> Hands of Mythology (&nbsp; <a href="https://hands-of-mythology.herokuapp.com/" target="_blank" rel="noreferrer" className={liveStyles}>Live </a> &nbsp; || &nbsp;
            <a href="https://github.com/EmilyDSarani/hands-of-mythology-resources" target="_blank" rel="noreferrer" className={repoStyles}> Repo </a> &nbsp;) </p>
            <p className={headerThreeStyles}> Toxic Catcher (&nbsp;
            <a href="https://github.com/EmilyDSarani/activitybuild-lab07" target="_blank" rel="noreferrer" className={repoStyles}> Repo </a> &nbsp; ) </p>

            <div className={buttonContainerStyles}>
            <Link to="/"><button className={buttonStyles}>Home</button></Link>
            </div>
            </div>  
            </div>


            </div>
        )
    }
}
