import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'

const Hero = () => {
    return (
        <div className='hero'>
            <img src={profile_img} alt="" />
            <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus excepturi explicabo minima reiciendis mollitia, dolor modi officia rem aperiam illo quibusdam, quos magnam asperiores totam ullam fugiat impedit eius maiores.</p>
            <div className="hero-action">
                <div className="hero-connect">Conecte-se comigo</div>
                <div className="hero-resume">Sobre mim</div>
            </div>
        </div>
    )
}

export default Hero