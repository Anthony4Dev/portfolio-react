import React, { useState } from 'react';
import '../Contact/Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Contact = () => {
    const [emailError, setEmailError] = useState('');
    const [nameError, setNameError] = useState('');
    const [messageError, setMessageError] = useState('');

    const validateEmail = (email) => {
        // Expressão regular para validar o formato do e-mail
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const name = formData.get('name');
        const email = formData.get('e-mail');
        const message = formData.get('message');

        if (!name) {
            setNameError('Por favor, digite seu nome.');
            return;
        } else {
            setNameError('');
        }

        if (!email) {
            setEmailError('Por favor, digite seu email.');
            return;
        } else {
            setEmailError('');
        }

        if (!message) {
            setMessageError('Por favor, digite sua mensagem.');
            return;
        } else {
            setMessageError('');
        }

        const isValidEmail = validateEmail(email);

        if (!isValidEmail) {
            setEmailError('Endereço de e-mail inválido.');
            return;
        } else {
            setEmailError('');
        }

        formData.append("access_key", "1851d938-7932-4c27-a803-13e85d9544e2");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            });

            if (!res.ok) {
                throw new Error("Erro ao enviar a mensagem. Por favor, tente novamente mais tarde.");
            }

            const data = await res.json();

            if (data.success) {
                alert("Sua mensagem foi enviada com sucesso! Obrigado por entrar em contato.");
            } else {
                throw new Error("Erro ao enviar a mensagem. Por favor, tente novamente mais tarde.");
            }
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div id='contato' className='contact'>
            <div className="contact-title">
                <h1>Entre em contato</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Vamos conversar!</h1>
                    <p> <h2 className='contact-left-h2'>É um prazer receber sua mensagem!</h2> Estou ansioso para saber mais sobre suas ideias, projetos e como posso ajudar a torná-los realidade. Não hesite em entrar em contato para discutirmos oportunidades de colaboração ou qualquer outra questão que você tenha em mente.

                        Estou pronto para ouvir suas necessidades e encontrar soluções sob medida para você ou sua empresa. Vamos iniciar essa jornada juntos! <br />

                    <h3 className='contact-left-h3'><strong>Anthony<span className="number-highlight">4</span>Dev</strong></h3></p>
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
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Seu nome / Sua empresa</label>
                    <input type="text" placeholder='Digite seu nome' name='name' />
                    {nameError && <span className="error">{nameError}</span>}
                    <label htmlFor="">Seu E-mail</label>
                    <input type="email" placeholder='Digite seu E-mail' name="e-mail" id="e-mail" />
                    {emailError && <span className="error">{emailError}</span>}
                    <label htmlFor="">Escreva sua mensagem aqui!</label>
                    <textarea name="message" id="" rows="8" placeholder='Escreva aqui'></textarea>
                    {messageError && <span className="error">{messageError}</span>}
                    <button type='submit' className="contact-submit">Envie agora</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;
