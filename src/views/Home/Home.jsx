import React, { Component } from 'react'
import ParticlesMagic from '../../components/Particles/Particles'
import styles from './Home.module.css'
import me from '../../assets/me.png'
import { Link } from 'react-router-dom'

// import Video from '../../components/Video/Video'

export default class Home extends Component {
    render() {
        return (
            <div className={styles.container}>
                <ParticlesMagic />
                <div className={styles.frost}>
                    <img className={styles.me}src={me} alt='my avatar'/>
                    <h1 className={styles.name}>Emily Sarani (She/Her)</h1>
                    <p className={styles.bio}>FullStack JavaScript Developer</p>
                    <p className={styles.bio}> Currently involved with Code for America, Co.Lab and The Collab Lab</p>
                    <div className={styles.buttonContainer}>
                    <Link to="/portfolio"><button>My Portfolio</button></Link>
                    <Link to="/experience"><button>My Experience</button></Link>
                    <Link to="/contact"><button>Connect With Me</button></Link>
                    </div>
                {/* <Name /> */}
                </div>
            </div>
            
        )
    }
}
