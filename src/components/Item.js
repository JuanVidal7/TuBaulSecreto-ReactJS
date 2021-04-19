import React, { useState }  from 'react'
import '../css/style.css';

export default function Item({ data }) {
    
    const [number, setNumber] = useState(1);
    // const [botonActivo, setBotonActivo] = useState(false);
    const stock = 5;

    function onIncrement() {
        setNumber(number + 1);

        if (number === stock) {
            document.getElementById('incre'+data.id).setAttribute('disabled', true)
            document.getElementById('mensajeStock'+data.id).style.display='block'
        } else if (number < stock) {
            document.getElementById('decre'+data.id).removeAttribute('disabled')
        }
    }

    function onDecrement() {
        setNumber(number - 1);

        if (number < stock + 2) {
            document.getElementById('incre'+data.id).removeAttribute('disabled');
            document.getElementById('mensajeStock'+data.id).style.display='none'

        }

        if (number <= 1) {
            document.getElementById('decre'+data.id).setAttribute('disabled', true)
        } else {
            document.getElementById('decre'+data.id).removeAttribute('disabled');
        }
    }
    return (
        <div className="col mb-4" style={{ marginTop: '50px' }}>
            <div className="card h-100 shadow p-3 mb-5 bg-white rounded" style={{ marginBottom: '0' }}>
                <img src={data.picture} alt={data.title} className="card-img-top" style={data.estilo} />
                <div className="card-body">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text">{data.description}</p>
                    <br />
                    <div className="container-fluid">
                        <button onClick={onDecrement} className="decre" id={"decre"+data.id} name="decrement" type="button">-</button>
                        <input value={number} name="valores" type="text" className="inputValor" />
                        <button onClick={onIncrement} className="incre" id={"incre"+data.id} name="increment" type="button">+</button>
                        <br />
                        <br />
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <button className="botonAgregarCarrito">Agregar al Carrito</button>
                        </div>
                        <p className="noStock" id={"mensajeStock"+data.id} style={{ display: 'none' }}>No hay Stock suficiente!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

