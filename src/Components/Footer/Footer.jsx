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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ducimus at iusto. Beatae, impedit? Eos in reiciendis, magni quaerat explicabo ad consectetur doloremque esse tenetur soluta. Illo soluta laborum delectus?</p>
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