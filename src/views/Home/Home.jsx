import React, { Component } from 'react'
import Name from '../../components/Name/Name'
import ParticlesMagic from '../../components/Particles/Particles'
import styles from './Home.css'

// import Video from '../../components/Video/Video'

export default class Home extends Component {
    render() {
        return (
            <div>
                <ParticlesMagic />
                <div className={styles.frost} >
                <Name />
                </div>
            </div>
        )
    }
}
