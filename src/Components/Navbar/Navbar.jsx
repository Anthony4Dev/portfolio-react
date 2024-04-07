import React, {useState} from 'react'
import '../Navbar/Navbar.css'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {

    const [menu,setMenu] = useState("home");

    return (
        <div className='navbar'>
            <div className='logo'>
                <h2>Anthony
                    <span className="number-highlight">4</span>
                    Dev
                </h2>
            </div>
            <ul className="nav-menu">
                <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"? <img src={underline} alt='' />:<></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#sobre'><p onClick={()=>setMenu("sobre")}>Sobre mim</p></AnchorLink>{menu==="sobre"? <img src={underline} alt='' />:<></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#serviços'><p onClick={()=>setMenu("serviços")}>Serviços</p></AnchorLink>{menu==="serviços"? <img src={underline} alt='' />:<></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#portfolio'><p onClick={()=>setMenu("portfolio")}>Portfolio</p></AnchorLink>{menu==="portfolio"? <img src={underline} alt='' />:<></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#contato'><p onClick={()=>setMenu("contato")}>Contato</p></AnchorLink>{menu==="contato"? <img src={underline} alt='' />:<></>}</li>
            </ul>
            <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contato'>Conecte-se comigo </AnchorLink></div>
        </div>
        
    );
};

export default Navbar;
