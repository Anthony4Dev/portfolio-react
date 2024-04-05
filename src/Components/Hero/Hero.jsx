import React from 'react'
import './Hero.css'

const Hero = () => {
    return (
        <div className='hero'>
            <img id='eu' src='src\assets\img_curriculo.jpg' alt="" />
            <h1><span> Me chamo Islan Anthony</span> sou desenvolvedor web.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus excepturi explicabo minima reiciendis mollitia</p>
            <div className="hero-action">
                <div className="hero-connect">Conecte-se comigo</div>
                <div className="hero-resume">Meu Currículo</div>
            </div>
        </div>
    )
}

export default Hero