import React, { useState, useRef } from 'react'
import '../Navbar/Navbar.css'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {

    const [menu, setMenu] = useState("home");
    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.right = "0";
    }

    const closeMenu = () => {
        menuRef.current.style.right = "-350px";
    }
    return (
        <div className='navbar'>
            <div className='logo'>
                <h2>Anthony
                    <span className="number-highlight">4</span>
                    Dev
                </h2>
            </div>
            <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
            <ul ref={menuRef} className="nav-menu">
                <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
                <li><AnchorLink className='anchor-link' href='#home'><p onClick={() => setMenu("home")}>Home</p></AnchorLink>{menu === "home" ? <img src={underline} alt='' /> : <></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#sobre'><p onClick={() => setMenu("sobre")}>Sobre mim</p></AnchorLink>{menu === "sobre" ? <img src={underline} alt='' /> : <></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#serviços'><p onClick={() => setMenu("serviços")}>Serviços</p></AnchorLink>{menu === "serviços" ? <img src={underline} alt='' /> : <></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#portfolio'><p onClick={() => setMenu("portfolio")}>Portfolio</p></AnchorLink>{menu === "portfolio" ? <img src={underline} alt='' /> : <></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#contato'><p onClick={() => setMenu("contato")}>Contato</p></AnchorLink>{menu === "contato" ? <img src={underline} alt='' /> : <></>}</li>
            </ul>
            <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contato'>Conecte-se comigo </AnchorLink></div>
        </div>

    );
};

export default Navbar;
