import React, { useContext, useEffect, useState } from 'react'
import '../../css/style.css';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { CartContext } from '../CartContext/CartContext';
import db from '../Firebase/Firebase';

const productsCollection = db.collection('productos');

export function getProductsById(idProduct) {
    return productsCollection.where('id', '==', parseInt(idProduct)).get()
        .then(snapshot => {
            return snapshot.docs.map(doc => doc.data())
        })
}

export default function ItemDetail() {
    let history = useHistory();
    const [number, setNumber] = useState(1);
    const { productID } = useParams();
    const [product, setProduct] = useState([]);
    const {agregarProducto} = useContext(CartContext)

    useEffect(() => {
        const productsCollection = db.collection('productos');
        const producto = productsCollection.doc(productID);
        producto.get().then((doc) => {
            if (!doc) {
                console.log('el item no existe');
            }
            setProduct({ id: doc.id, ...doc.data() })
        });
    },[productID]);

    let valorIni = product.price;

    function onIncrement() {
        setNumber(number + 1);

        valorIni = valorIni * (number + 1);
        document.getElementById('valorPRD').innerHTML = '$ ' + valorIni;
    }

    function onDecrement() {
        if (number > 1) {
            setNumber(number - 1);
            valorIni = valorIni * (number - 1);
            document.getElementById('valorPRD').innerHTML = '$ ' + valorIni;
        }
    }

    function onAdd(number) {
        let valor = 0;
        valor = number * product.price;

        let modalBody = document.getElementById("modalBody");
        modalBody.innerHTML = ('Se agregó al carrito ' + number + ' ' + product.title + ' por un valor de ' + valor);

        agregarProducto({producto: product, cantidad: number, precio: valor})
    }

    return (
        <div className="col mb-4" style={{ marginTop: '50px', display: 'flex', justifyContent: 'center' }}>
            <div className="card h-100 shadow p-3 mb-5 bg-white rounded cardNew">
                <img src={product.picture} alt={product.title} className="card-img-top" style={product.estilo} />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <p className="card-text" style={{ display: 'flex', fontSize: '20px', marginBottom: '-5px', fontWeight: 'bold' }} id="valorPRD">$ {valorIni}</p>
                    <br />
                    <div className="container-fluid">
                        <button onClick={onDecrement} className="decre" id={"decre" + product.id} name="decrement" type="button" style={{ outline: 'transparent' }}>-</button>
                        <input value={number} name="valores" type="text" className="inputValor" readOnly/>
                        <button onClick={onIncrement} className="incre" id={"incre" + product.id} name="increment" type="button" style={{ outline: 'transparent' }}>+</button>
                        <br />
                        <br />
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <button data-toggle="modal" data-target="#staticBackdrop" className="botonAgregarCarrito" onClick={() => onAdd(number)} id="addCarrito">Agregar al Carrito</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Confirmación</h5>
                        </div>
                        <div className="modal-body" id="modalBody">

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" style={{ border: 'none' }} data-dismiss="modal" onClick={() => history.push("/")}>Seguir comprando</button>
                            <button type="button" className="btn btn-secondary" style={{ border: 'none' }} data-dismiss="modal" onClick={() => history.push("/cart")}>Ir al Carrito</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
