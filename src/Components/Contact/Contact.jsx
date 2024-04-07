import React from 'react'
import '../Contact/Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import location_icon from '../../assets/location_icon.svg'


const Contact = () => {
    return (
        <div id='contato' className='contact'>
            <div className="contact-title">
                <h1>Entre em contato</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Vamos conversar!</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente numquam id earum hic laboriosam nostrum alias. Error tenetur a delectus, fugiat eligendi, blanditiis aperiam dignissimos provident, corrupti sint sit totam.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" /> <p>anthony.islan2005@gmail.com</p>
                        </div>

                        <div className="contact-detail">
                            <img src={call_icon} alt="" /> <p>+55 (81) 991395701</p>
                        </div>

                        <div className="contact-detail">
                            <img src={location_icon} alt="" /> <p>Caruaru, PE, Brasil</p>
                        </div>
                    </div>
                </div>
                <form className="contact-right">
                    <label htmlFor="">Seu nome / Sua empresa</label>
                    <input type="text" placeholder='Digite seu nome' name='name' />
                    <label htmlFor="">Seu E-mail</label>
                    <input type="email" placeholder='Digite seu E-mail' name="e-mail" id="e-mail" />
                    <label htmlFor="">Escreva sua mensagem aqui!</label>
                    <textarea name="message" id="" rows="8" placeholder='Escreva aqui'></textarea>
                    <button type='submit' className="contact-submit">Envie agora</button>
                </form>
            </div>
        </div>
    )
}

export default Contact