import React, { useEffect, useState } from 'react'
import '../css/style.css';
import { useParams } from 'react-router-dom';

const { getPostById } = require('./postService');

export default function ItemDetail() {

    const [number, setNumber] = useState(1);
    const stock = 5;
    const { productID } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        getPostById(productID)
            .then(res => setProduct(res))
    }, [productID])


    function onIncrement() {
        setNumber(number + 1);

        if (number === stock) {
            document.getElementById('incre' + product.id).setAttribute('disabled', true)
            document.getElementById('mensajeStock' + product.id).style.display = 'block'
        } else if (number < stock) {
            document.getElementById('decre' + product.id).removeAttribute('disabled')
        }
    }

    function onDecrement() {
        if (number > 1) {
            setNumber(number - 1);
        }

        if (number < stock + 2) {
            document.getElementById('incre' + product.id).removeAttribute('disabled');
            document.getElementById('mensajeStock' + product.id).style.display = 'none'

        }

        if (number <= 1) {
            document.getElementById('decre' + product.id).setAttribute('disabled', true)
        } else {
            document.getElementById('decre' + product.id).removeAttribute('disabled');
        }
    }
    return (
        <div className="col mb-4" style={{ marginTop: '50px', display: 'flex', justifyContent: 'center'}}>
            <div className="card h-100 shadow p-3 mb-5 bg-white rounded" style={{ marginBottom: '0', width: '30%'  }}>
                <img src={product.picture} alt={product.title} className="card-img-top" style={product.estilo} />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <br />
                    <div className="container-fluid">
                        <button onClick={onDecrement} className="decre" id={"decre" + product.id} name="decrement" type="button" style={{ outline: 'transparent' }}>-</button>
                        <input value={number} name="valores" type="text" className="inputValor" />
                        <button onClick={onIncrement} className="incre" id={"incre" + product.id} name="increment" type="button" style={{ outline: 'transparent' }}>+</button>
                        <br />
                        <br />
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <button className="botonAgregarCarrito">Agregar al Carrito</button>
                        </div>
                        <p className="noStock" id={"mensajeStock" + product.id} style={{ display: 'none' }}>No hay Stock suficiente!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
