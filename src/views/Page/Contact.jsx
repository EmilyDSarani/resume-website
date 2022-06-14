import React from 'react'
import ParticlesMagic from '../../components/Particles/Particles'
import { Link } from 'react-router-dom'
import twitter from '../../assets/twitterlogo.png'
import linkedIn from '../../assets/linkedinlogo.png'
import github from '../../assets/githublogo.png'
import { buttonContainerStyles, buttonStyles, containerStyles, frostStyles } from '../../utils/stylesContainer'
import { headerOneStyles } from '../../utils/stylesGeneral'


export default function Contact() {
  return (
    <div className={containerStyles}>
        <ParticlesMagic />
        <div className={frostStyles}>
        {/* <Emailjs /> */}
        <h1 className={headerOneStyles} >Connect with Me!</h1>
        {/* display: flex;
    justify-content: space-between;
    width: 600px; */}
        <div className='flex flex-col sm:flex-row justify-center sm:justify-between items-center w-[400px] pt-4'>
        <div className='hover:border-2 border-double rounded-2xl border-emerald-300'>
        <a href="https://twitter.com/emilysarani" target="_blank" rel="noreferrer" >
        <img className='h-[100px] w-[100px] p-1.5'src={twitter} alt='icon created by Pixel Perfect'/>
        <span className='sr-only'>twitter link</span>
        </a>
        </div>

        <div className='hover:border-2 border-double rounded-2xl border-emerald-300'>
        <a href="https://www.linkedin.com/in/emily-sarani/" target="_blank" rel="noreferrer" ><img className='h-[100px] w-[100px] p-2.5"'src={linkedIn} alt='icon created by Pixel Perfect'/> 
        <span className='sr-only'>linkedin link</span>
        </a>
        </div>

        <div className='hover:border-2 border-double rounded-2xl border-emerald-300'>
        <a href="https://github.com/EmilyDSarani" target="_blank" rel="noreferrer" >
        <img className='h-[100px] w-[100px] p-2.5"'src={github} alt='icon created by Pixel Perfect'/>
        <span className='sr-only'>github link</span>
        </a>
        </div>

        </div>

        <div className={buttonContainerStyles}>
            <Link to="/"><button className={buttonStyles}>Home</button></Link>
        </div>

        </div>

    </div>
  )
}

