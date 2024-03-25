import { createContext, useState } from 'react';

export const CartContext = createContext([]);

function Contexto({ children }) {

    const [carrito, setCarrito] = useState([]);

    function agregarProducto(datos) {
        let buscoProducto = carrito.find(x => x.producto.id === datos.producto.id);
        if (buscoProducto) {
            let nuevaCantidad = buscoProducto.cantidad + datos.cantidad;
            let posicionC = carrito.indexOf(buscoProducto);
            carrito[posicionC].cantidad = nuevaCantidad;

            let nuevoPrecio = buscoProducto.precio + datos.precio;
            let posicionV = carrito.indexOf(buscoProducto);
            carrito[posicionV].precio = nuevoPrecio;
            
        } else {
            setCarrito([...carrito, datos]);
        }


    }

    const eliminarProducto = (idProductoAEliminar) => {
        setCarrito(carrito.filter((x) => x.producto.id !== idProductoAEliminar));
    };

    const vaciarCarrito = () => {
        setCarrito([]);
    };

    return <CartContext.Provider value={{ agregarProducto, eliminarProducto, vaciarCarrito, carrito }}>
        {children}
    </CartContext.Provider>
}

export default Contexto;