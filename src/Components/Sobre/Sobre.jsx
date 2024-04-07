import React from 'react'
import "../Sobre/Sobre.css"
import theme_pattern from '../../assets/theme_pattern.svg'


const Sobre = () => {
    return (
        <div id='sobre' className='sobre'>
            <div className="sobre-title">
                <h1>Sobre mim</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="sobre-section">
                <div className="sobre-left">
                    <img id='eu-sobre' src='src\assets\img_curriculo.jpg' alt="" />
                </div>
                <div className="sobre-right">
                    <div className="sobre-para">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis saepe ab, quam recusandae nostrum voluptatum possimus ducimus iste eos voluptate distinctio id veritatis aliquam libero explicabo iusto nemo aspernatur beatae.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, quam ad mollitia placeat vero sunt quasi dignissimos nam blanditiis saepe quae numquam ut nisi? Esse ullam aut veniam eos quae?</p>
                    </div>
                    <div className="sobre-skills">
                        <div className="sobre-skill"><p>HTML & CSS</p><hr style={{ width: "80%" }} /></div>
                        <div className="sobre-skill"><p>React JS</p><hr style={{ width: "70%" }} /></div>
                        <div className="sobre-skill"><p>Javascript</p><hr style={{ width: "60%" }} /></div>
                        <div className="sobre-skill"><p>Java</p><hr style={{ width: "50%" }} /></div>
                    </div>
                </div>
            </div>
            <div className="sobre-achievements">
                <div className="sobre-achievement">
                    <h1>2</h1>
                    <p>ANOS DE EXPERIÊNCIA</p>
                </div>
                <hr />
                <div className="sobre-achievement">
                    <h1>Xs</h1>
                    <p>PROJETOS FEITOS</p>
                </div>
                <hr />
                <div className="sobre-achievement">
                    <h1>1</h1>
                    <p>PROTÓTIPO(S) NO FIGMA</p>
                </div>
            </div>
        </div>
    )
}

export default Sobre