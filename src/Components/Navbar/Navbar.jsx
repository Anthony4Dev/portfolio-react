import React from 'react'
import '../Navbar/Navbar.css'
import logo from '../../assets/logo.svg'
const Navbar = () => {
    return (
        <div className='navbar'>
            <img src={logo} alt="" />
            <ul className="nav-menu">
                <li>Home</li>
                <li>Sobre mim</li>
                <li>Serviços</li>
                <li>Portfolio</li>
                <li>Contato</li>
            </ul>

            <div className="nav-connect">Conecte-se comigo</div>
        </div>
    )
}

export default Navbar