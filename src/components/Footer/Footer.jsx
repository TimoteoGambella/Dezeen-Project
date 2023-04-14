import React from 'react'
import { BsYoutube, BsPinterest, BsTwitter, BsInstagram, BsFacebook } from "react-icons/bs";
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/dezeen-logo2.png'
const Footer = () => {

    const location = useLocation()
    const scrollingElement = (document.scrollingElement || document.body);

    const footerActive = () => {
        if(location.pathname!=="/login" && location.pathname!=="/sigin"){
            return "Footer d-flex-column font-roboto-cond black"
        } else {
            return "Footer-none"
        }
    }

    const handleNavigate = () => {
        scrollingElement.scrollTop = scrollingElement.scrollHeight;
    }

  return (
    <div className={footerActive()}>
        <hr className='Separator'/>
        <div className='MenuFooter'>
            <ul className='d-flex-row black'>
                <li><Link onClick={handleNavigate} to='/'>Trabaja en Dezeen</Link></li>
                <li><Link onClick={handleNavigate} to='/'>Guía de eventos</Link></li>
                <li><Link onClick={handleNavigate} to='/'>Aviso de privacidad</Link></li>
                <li><Link onClick={handleNavigate} to='/'>Contáctanos</Link></li>
                <li className=''>
                    <Link onClick={handleNavigate} to='/'><BsYoutube className='IconFooter'/></Link>
                    <Link onClick={handleNavigate} to='/'><BsPinterest className='IconFooter'/></Link>
                    <Link onClick={handleNavigate} to='/'><BsTwitter className='IconFooter'/></Link>
                    <Link onClick={handleNavigate} to='/'><BsInstagram className='IconFooter'/></Link>
                    <Link onClick={handleNavigate} to='/'><BsFacebook className='IconFooter'/></Link>
                </li>
            </ul>
        </div>
        <div className='InfoFooter d-flex-row font-w-400'>
            <img src={logo} alt="" />
            <p>Todos los derechos reservados. Dezeen UK  2006 - 2022. <br />
                ISNN 0823-4365 <br />
                Todas las imágenes son propiedad de cada fotógrafo/oficina mencionada.
            </p>
        </div>
    </div>
  )
}

export default Footer
