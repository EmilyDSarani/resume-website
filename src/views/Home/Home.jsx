import React, { Component } from 'react'
import Name from '../../components/Name/Name'
import ParticlesMagic from '../../components/Particles/Particles'
import styles from './Home.module.css'
import me from '../../assets/me.png'
import { Link } from 'react-router-dom'

// import Video from '../../components/Video/Video'

export default class Home extends Component {
    render() {
        return (
            <div>
                <ParticlesMagic />
                <div className={styles.frost}>
                    <h1 className={styles.name}>Emily Sarani</h1>

                    <img className={styles.me}src={me} alt='my avatar'/>

                    <Link to="/portfolio"><button>Portfolio</button></Link>
                {/* <Name /> */}
                </div>
            </div>
        )
    }
}
