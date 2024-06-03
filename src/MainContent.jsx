import React from 'react'
import './MainContent.css'
import me from './assets/My-Profile.jpg'
import facebook from './assets/facebook.svg'
import linkedin from './assets/linkedin.svg'
import github from './assets/github.svg'
import mail from './assets/Mail.svg'
import youtube from './assets/youtube.svg'

export default function MainContent(){
    return (
        <>
            <div className='container'>
                <div className='img-container'>
                <img className='main-img' src={me} alt="me" />
                </div>
                <div className='sub-container'>
                    <h2 className='name'>Hudson Wayne Benhura</h2>
                    <h4 className='role'>Full-Stack Developer</h4>
                    <h5 className='web'>hudsonwayne.tech</h5>
                    <div className='connect'>
                        <a className='mail' href="mailto:hudsonnbenhuraa@gmail.com"><img src={mail} alt="mail" /> Email</a>
                        <a className='linkedin' href="https://www.linkedin.com/in/HudsonWayneBenhura/" target='_blank'><img src={linkedin} alt="" />LinkedIn</a>
                    </div>
                    <div className='about'>
                        <h3>About</h3>
                        <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                    </div>
                    <div className='interest'>
                        <h3>Interests</h3>
                        <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
                    </div>
                </div>
                <div className='footer'>
                    <a href="https://www.facebook.com/Hudson Wayne/"><img className='facebook' src={facebook} alt="facebook" /></a>
                    <a href="https://www.facebook.com/Hudson Wayne/"><img className='facebook' src={facebook} alt="facebook" /></a>
                    <a href="https://www.youtube.com/channel/UC6kYs1bW0j273GneHxFyPFQ"><img className='youtube' src={youtube} alt="youtube" /></a>
                    <a href="https://github.com/HudsonWayne"><img src={github} alt="github" /></a>
                </div>
            </div>
        </>
    )
}
