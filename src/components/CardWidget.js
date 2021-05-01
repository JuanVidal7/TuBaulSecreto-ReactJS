import React from 'react';
import '../css/style.css';
import facebook from './facebook.png';
import instagram from './instagram.png';
import carrito from './carrito.png';
import {useHistory} from 'react-router-dom';


export default function CardWidget() {
    let history = useHistory();
    return (
        <header className="main-header">
            <a href="http://facebook.com" target="_blank" rel="noopener noreferrer" ><img className="main-header__social" src={facebook}   
                alt="facebook" /></a>
            <a href="http://instagram.com" target="_blank" rel="noopener noreferrer"><img className="main-header__social" src={instagram}
                alt="instagram" /></a>
            <a href="#/" data-toggle="modal" data-target="#staticBackdrop" onClick={() => history.push("/cart")}><img
                className="main-header__social" src={carrito} alt="Carrito" /></a>
        </header>
    )
}