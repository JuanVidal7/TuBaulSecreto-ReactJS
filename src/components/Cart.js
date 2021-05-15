import React, { useContext, useState } from 'react'
import '../css/style.css';
import { CartContext } from './CartContext';
import Eliminar from './eliminar.png'
import db from './Firebase';

export default function Cart() {

    const { carrito } = useContext(CartContext)
    const { eliminarProducto } = useContext(CartContext)
    const { vaciarCarrito } = useContext(CartContext)
    const [orderId, setOrderId] = useState('')
    const [usuario, setUsuario] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const { name, email, phone } = usuario;
    const orderCollection = db.collection('orders');

    const itemsPrice = carrito.reduce((a, c) => a + c.precio, 0);
    const itemsQty = carrito.reduce((a, c) => a + c.cantidad, 0);

    const orden = {
        buyer: usuario,
        items: carrito,
        total: itemsPrice
    }

    function handleForm(e) {
        setUsuario({
            ...usuario, [e.target.name]: e.target.value
        });
    }

    function validarForm(e) {
        e.preventDefault();
        if ((name === '') || (email === '') || (phone === '')) {
            return alert('Debes diligenciar todos los campos')
        }
        orderCollection.add(orden).then(({ id }) => setOrderId(id));
        document.getElementById('termCompra').style.display = 'none';
        document.getElementById('verOrden').style.display = 'block';
        vaciarCarrito();
    }

    console.log(orderId)

    return (
        <div>
            {carrito.length === 0 && orderId === '' && <h4 style={{ marginTop: '40px', marginBottom: '-30px', fontFamily: 'Poppins' }}>El Carrito está vacío</h4>}
            {orderId === '' &&
                <div className="container-fluid cartTable">
                    <div className="table-responsive" style={{ marginTop: '50px' }}>
                        <table className="table table-hover" style={{ width: '100%' }}>
                            <thead className="thead-dark">
                                <tr><th style={{ borderTopLeftRadius: '25px', borderTopRightRadius: '25px', border: 'none' }} colSpan="5">CARRITO DE COMPRAS</th></tr>
                                <tr>
                                    <th scope="col">IdProducto</th>
                                    <th scope="col">Producto</th>
                                    <th scope="col">Cantidad</th>
                                    <th scope="col">Precio</th>
                                    <th scope="col">Eliminar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {carrito.map((item) => (
                                    <tr className="table-warning" key={item.producto.id}>
                                        <th scope="row">{item.producto.id}</th>
                                        <td>{item.producto.title}</td>
                                        <td>{item.cantidad}</td>
                                        <td>{item.precio}</td>
                                        <td><img style={{ width: '25px', cursor: 'pointer' }} src={Eliminar} onClick={() => eliminarProducto(item.producto.id)} alt="Eliminar" /></td>
                                    </tr>
                                ))}
                                <tr className="table-secondary">
                                    <td style={{ borderBottomLeftRadius: '25px' }}></td>
                                    <td style={{ fontWeight: 'bold' }}>Total</td>
                                    <td style={{ fontWeight: 'bold' }}>{itemsQty}</td>
                                    <td style={{ fontWeight: 'bold' }}>{itemsPrice}</td>
                                    <td style={{ borderBottomRightRadius: '25px' }}></td>
                                </tr>
                            </tbody>
                        </table>
                        {carrito.length !== 0 && <button onClick={() => vaciarCarrito()} className="botonAgregarCarrito">Vaciar Carrito</button>}
                        <hr style={{ marginTop: '40px' }} />
                        {carrito.length !== 0 &&
                            <div className="container" style={{ marginTop: '30px', marginBottom: '200px' }}>
                                <h5 style={{ fontFamily: 'Poppins', marginBottom: '20px' }}>Diligencia los siguientes datos para terminar la compra y generar la órden</h5>
                                <form onSubmit={validarForm}>
                                    <input className="main-form__input" type="text" placeholder="Nombre" onChange={handleForm} name="name" value={name} /><br />
                                    <input className="main-form__input" type="text" placeholder="Email" onChange={handleForm} name="email" value={email} /><br />
                                    <input className="main-form__input" type="text" placeholder="Teléfono" onChange={handleForm} name="phone" value={phone} /><br />
                                    <button type="submit" style={{ marginTop: '20px' }} className="botonAgregarCarrito" id="termCompra">Terminar Compra</button>
                                </form>
                            </div>
                        }
                    </div>
                </div>
            }
            <div className="container" style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
                <button data-toggle="modal" data-target="#staticBackdrop" style={{ marginTop: '20px', display: 'none' }} className="botonAgregarCarrito" id="verOrden">Ver Orden</button>
            </div>

            {/* Modal */}
            {orderId !== '' &&
                <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">Orden de Compra</h5>
                                {/* <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button> */}
                            </div>
                            <div className="modal-body" id="modalBody">
                                Su orden es {orderId}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" style={{ border: 'none' }} data-dismiss="modal">Cerrar</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
