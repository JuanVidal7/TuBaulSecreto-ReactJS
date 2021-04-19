import React, { useState } from 'react';
import '../css/style.css';
import hersheyblanca from './hersheyblanca.png';

function Counter({ increment, decrement, valor }) {
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-3" >
                <div className="col mb-4" style={{ marginTop: '50px' }}>
                    <div className="card h-100 shadow p-3 mb-5 bg-white rounded" style={{marginBottom: '0'}}>
                        <img src={hersheyblanca} alt="Hershey's Blanca" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Chocolatina Hershey's Blanca</h5>
                            <p className="card-text">Cookies 'n' creme es una barrita de chocolate blanco con bits de galleta similares en sabor y textura a las Oreo.</p>
                            <br />
                            <div className="container-fluid">
                                <button onClick={decrement} id="decre" name="decrement" type="button">-</button>
                                <input value={valor} name="valores" type="text" className="inputValor" />
                                <button onClick={increment} id="incre" name="increment" type="button">+</button>
                                <br />
                                <br />
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <button className="botonAgregarCarrito">Agregar al Carrito</button>
                                </div>
                                <p className="noStock" id="mensajeStock" style={{display: 'none'}}>No hay Stock suficiente!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function ItemCount() {

    const [number, setNumber] = useState(1);
    // const [botonActivo, setBotonActivo] = useState(false);
    const stock = 5;

    function onIncrement() {
        setNumber(number + 1);

        if (number === stock) {
            document.getElementById('incre').setAttribute('disabled', true)
            document.getElementById('mensajeStock').style.display='block'
        } else if (number < stock) {
            document.getElementById('decre').removeAttribute('disabled')
        }
    }

    function onDecrement() {
        setNumber(number - 1);

        if (number < stock + 2) {
            document.getElementById('incre').removeAttribute('disabled');
            document.getElementById('mensajeStock').style.display='none'

        }

        if (number <= 1) {
            document.getElementById('decre').setAttribute('disabled', true)
        } else {
            document.getElementById('decre').removeAttribute('disabled');
        }
    }

    return (
        <div>
            <Counter increment={onIncrement} decrement={onDecrement} valor={number} />
        </div>
    )
}

