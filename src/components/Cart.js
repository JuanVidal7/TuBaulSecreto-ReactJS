import React, { useContext } from 'react'
import '../css/style.css';
import { CartContext } from './CartContext';
import Eliminar from './eliminar.png'

export default function Cart() {

    const { carrito } = useContext(CartContext)
    const { eliminarProducto } = useContext(CartContext)
    const { vaciarCarrito } = useContext(CartContext)

    const itemsPrice = carrito.reduce((a,c) => a + c.precio, 0);
    const itemsQty = carrito.reduce((a,c) => a + c.cantidad, 0);

    return (
        <div>
            {carrito.length === 0 && <h4 style={{ marginTop: '40px', marginBottom: '-30px', fontFamily: 'Poppins' }}>El Carrito está vacío</h4>}
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
                                <td style={{ borderBottomLeftRadius: '25px'}}></td>
                                <td style={{fontWeight: 'bold'}}>Total</td>
                                <td style={{fontWeight: 'bold'}}>{itemsQty}</td>
                                <td style={{fontWeight: 'bold'}}>{itemsPrice}</td>
                                <td style={{ borderBottomRightRadius: '25px'}}></td>
                            </tr>
                        </tbody>
                    </table>
                    {carrito.length !== 0 && <button onClick={() => vaciarCarrito()} className="botonAgregarCarrito">Vaciar Carrito</button>}
                </div>
            </div>
        </div>
    )
}
