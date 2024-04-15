import React from 'react';
import './Hero.css';
import resumePDF from '../../assets/Currículo_atualizado.pdf';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import perfil from '../../assets/anthony_profile.jpg'

const downloadResume = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Currículo_atualizado.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

const Hero = () => {
    return (
        <div id='home' className='hero'>
            <img id='eu' src={perfil} alt="" />
            <h1><span> Me chamo Islan Anthony</span> sou desenvolvedor web.</h1>
            <p>Estou disponível para novas oportunidades. Faça o download do meu currículo e explore esta página web e descubra como posso ajudar no seu projeto.</p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contato'>Conecte-se comigo</AnchorLink></div>
                <div className="hero-resume" onClick={downloadResume}>Meu Currículo</div>
            </div>
        </div>
    );
};

export default Hero;
