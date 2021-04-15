import React from 'react';
import '../css/style.css';
import facebook from './facebook.png';
import instagram from './instagram.png';
import carrito from './carrito.png';

export default function CardWidget() {
    return (
        <header className="main-header">
            <a href="http://facebook.com" target="_blank"><img className="main-header__social" src={facebook}   
                alt="facebook" /></a>
            <a href="http://instagram.com" target="_blank"><img className="main-header__social" src={instagram}
                alt="instagram" /></a>
            <a href="" data-toggle="modal" data-target="#staticBackdrop" onclick="verCarrito()"><img
                className="main-header__social" src={carrito} alt="Carrito" /></a>
        </header>
    )
}