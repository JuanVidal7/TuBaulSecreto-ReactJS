import React, { useContext, useState } from 'react'
import '../../css/style.css';
import { CartContext } from '../CartContext/CartContext';
import Eliminar from './../img/eliminar.png'
import db from '../Firebase/Firebase';
import { useHistory } from 'react-router-dom';


export default function Cart() {
    let history = useHistory();


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
            return document.getElementById('alertCompra').style.display = 'block';
        }
        orderCollection.add(orden).then(({ id }) => setOrderId(id));
        document.getElementById('termCompra').style.display = 'none';
        document.getElementById('alertCompra').style.display = 'none';       
    }

    function finalizarCompra(){
        window.print();
        vaciarCarrito();
        history.push("/llenatubaul");
    }

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
                        <div className="alert alert-danger" role="alert" id="alertCompra" style={{ display: 'none' }}>
                            Debes diligenciar todos los campos.
                        </div>
                        {carrito.length !== 0 &&
                            <div className="container" style={{ marginTop: '30px'}}>
                                <h5 style={{ fontFamily: 'Poppins', marginBottom: '20px' }}>Diligencia los siguientes datos para terminar la compra y generar la órden</h5>
                                <form onSubmit={validarForm}>
                                    <input className="main-form__input" type="text" placeholder="Nombre" onChange={handleForm} name="name" value={name} /><br />
                                    <input className="main-form__input" type="text" placeholder="Email" onChange={handleForm} name="email" value={email} /><br />
                                    <input className="main-form__input" type="text" placeholder="Teléfono" onChange={handleForm} name="phone" value={phone} /><br />
                                    <button type="submit" style={{ marginTop: '20px' }} className="botonAgregarCarrito" id="termCompra">Generar Órden de Compra</button>
                                </form>
                            </div>
                        }
                    </div>
                </div>
            }
            {orderId !== '' &&
                <div className="container-fluid cartTable" style={{ marginBottom: '100px' }}>
                    <div className="table-responsive" style={{ marginTop: '50px' }}>
                        <table className="table table-hover" style={{ width: '100%' }}>
                            <thead className="thead-dark">
                                <tr><th style={{ borderTopLeftRadius: '25px', borderTopRightRadius: '25px', border: 'none' }} colSpan="5">ORDEN DE COMPRA</th></tr>
                                <tr>
                                    <th scope="col">Producto</th>
                                    <th scope="col">Cantidad</th>
                                    <th scope="col">Precio</th>
                                    <th scope="col" colSpan="2">Datos Comprador</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="table-secondary">
                                    <td style={{ fontWeight: 'bold' }}></td>
                                    <td style={{ fontWeight: 'bold' }}></td>
                                    <td style={{ fontWeight: 'bold' }}></td>
                                    <td style={{ fontWeight: 'bold' }} colSpan="2">Nombre: {name}</td>
                                </tr>
                                <tr className="table-secondary">
                                    <td style={{ fontWeight: 'bold' }}></td>
                                    <td style={{ fontWeight: 'bold' }}></td>
                                    <td style={{ fontWeight: 'bold' }}></td>
                                    <td style={{ fontWeight: 'bold' }} colSpan="2">Email: {email}</td>
                                </tr>
                                <tr className="table-secondary">
                                    <td style={{ fontWeight: 'bold' }}></td>
                                    <td style={{ fontWeight: 'bold' }}></td>
                                    <td style={{ fontWeight: 'bold' }}></td>
                                    <td style={{ fontWeight: 'bold' }} colSpan="2">Teléfono: {phone}</td>
                                </tr>
                                {carrito.map((item) => (
                                    <tr className="table-warning" key={item.producto.id}>
                                        <td>{item.producto.title}</td>
                                        <td>{item.cantidad}</td>
                                        <td>{item.precio}</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                ))}
                                <tr className="table-secondary">
                                    <td style={{ fontWeight: 'bold', borderBottomLeftRadius: '25px' }}>Total</td>
                                    <td style={{ fontWeight: 'bold' }}>{itemsQty}</td>
                                    <td style={{ fontWeight: 'bold' }}>{itemsPrice}</td>
                                    <td style={{ fontWeight: 'bold' }}></td>
                                    <td style={{ fontWeight: 'bold', borderBottomRightRadius: '25px', backgroundColor: '#ffeeba' }}>Órden de Compra: {orderId}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <button style={{ marginTop: '20px' }} className="botonAgregarCarrito" onClick={() => finalizarCompra()} id="termCompra">Finalizar Compra</button>
                </div>
            }
        </div>
    )
}
