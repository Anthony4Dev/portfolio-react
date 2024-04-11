import React from 'react'
import '../Footer/Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src-={footer_logo} alt="" />
                <p>Obrigado por dedicar seu tempo para explorar meu portfólio. Sua análise e interesse significam muito para mim. Espero que você encontre as informações que procura e que tenha uma experiência agradável enquanto navega pelo meu trabalho. Se precisar de mais alguma coisa ou tiver alguma dúvida, estou à disposição para ajudar.</p>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">Feito por Anthony<span className="number-highlight">4</span>Dev</p>
            <div className="footer-bottom-right">
            </div>
        </div>
    </div>
  )
}

export default Footer