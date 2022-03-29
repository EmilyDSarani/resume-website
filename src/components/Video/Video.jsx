import React from 'react'
import ReactPLayer from 'react-player'
import style from './Video.css';

export default function Video() {
    const videoSource="https://www.youtube.com/embed/OI3gGmJzhVM"
    console.log(videoSource)
    return (
        <div className="container">

            <ReactPLayer url={videoSource} />


            {/* <video autoPlay="autoplay" muted loop="loop" id="video" className={style.video}>
                <source src={videoSource} type="video/mp4" />
            </video> */}

            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/OI3gGmJzhVM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
        </div>
    )
}
