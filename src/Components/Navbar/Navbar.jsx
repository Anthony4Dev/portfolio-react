import React from 'react';
import '../Navbar/Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='logo'>
                <h2>Anthony
                    <span className="number-highlight">4</span>
                    Dev
                </h2>
            </div>
            <ul className="nav-menu">
                <li>Home</li>
                <li>Sobre mim</li>
                <li>Serviços</li>
                <li>Portfolio</li>
                <li>Contato</li>
            </ul>
            <div className="nav-connect">Conecte-se comigo</div>
        </div>
        
    );
};

export default Navbar;
