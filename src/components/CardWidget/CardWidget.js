import React, { useContext } from 'react';
import '../../css/style.css';
import { useHistory } from 'react-router-dom';
import { CartContext } from './../CartContext/CartContext';
import logocarrito from './../img/carrito.png';


export default function CardWidget() {
    const { carrito } = useContext(CartContext)
    const itemsQtyCart = carrito.length;

    let history = useHistory();
    return (
        <header className="main-header">
            <a href="#/" data-toggle="modal" data-target="#staticBackdrop" onClick={() => history.push("/cart")}><img
                className="main-header__social" src={logocarrito} alt="Carrito" style={{marginRight: '-10px'}} />{carrito.length !== 0 && <span className="red">{itemsQtyCart}</span>}</a>
        </header>
    )
}