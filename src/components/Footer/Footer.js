import React from 'react'
import '../../css/style.css';
import facebookwhite from './../img/facebook-white.png'
import instagramwhite from './../img/instagram-white.png'
import LetraTBS from './../img/LetraTBS.png'

export default function Footer() {
    return (
        <footer className="main-footer">
            <img className="main-footer__logo" src={LetraTBS} alt="TuBaúlSecreto" />
            <p>Sorprende a esa persona especial con tu baúl secreto, lleno de aquello que más quieres regalarle,
            y ponla a prueba con nuestra ingeniosa cerradura.</p>
            <p className="main-footer__follow-us">Síguenos en nuestras redes sociales:</p>
            <a href="http://facebook.com" target="_blank" rel="noopener noreferrer"><img className="main-footer__social" src={facebookwhite}
                alt="facebook" /></a>
            <a href="http://instagram.com" target="_blank" rel="noopener noreferrer"><img className="main-footer__social" src={instagramwhite}
                alt="instagram" /></a>
            <p className="main-foot__credits">@Copyright TuBaúlSecreto.com. Todos los derechos reservados.</p>
            <p className="main-foot__credits">Designed by Juan Carlos Vidal</p>
        </footer>
    )
}
