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
                </div>
                <div className="sobre-right">
                    <div className="sobre-para">
                        <p>Habilidades em diversas linguagens e frameworks. Minha experiência inclui proficiência em linguagens como <span className='number-highlight'>JavaScript</span>, <span className='number-highlight'>TypeScript</span>, <span className='number-highlight'>PHP</span> e <span className='number-highlight'>Java</span>, domínio de frameworks como <span className='number-highlight'>ReactJS</span>, <span className='number-highlight'>React Native</span>, <span className='number-highlight'>BootStrap</span> e <span className='number-highlight'>Spring Boot</span>, além da utilização eficaz de ferramentas como <span className='number-highlight'>Node.js</span>, <span className='number-highlight'>Figma</span>, <span className='number-highlight'>JQuery</span>, <span className='number-highlight'>Git</span>, <span className='number-highlight'>TestCafe</span> e <span className='number-highlight'>PHPUnit</span>. Também possuo competência em bancos de dados como <span className='number-highlight'>MySQL</span> e <span className='number-highlight'>PostgreSQL</span>, e habilidade em linguagens de consulta, com foco em <span className='number-highlight'>SQL</span>.</p>
                        <p>Além disso, tenho experiência freelance em Design de Interface de Usuário (<span className='number-highlight'>UI</span>) / Design de Experiência do Usuário (<span className='number-highlight'>UX</span>), incluindo um projeto acadêmico para um grupo de estudantes de fisioterapia.</p>
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