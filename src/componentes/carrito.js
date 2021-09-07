import React from 'react';
import './carrito.css';
import Producto from './producto';

const Carrito = ({ carrito, agregarCarrrito }) => (
    <div className="carrito">
        <h2>
            Tu carro de compras
        </h2>
        {
            carrito.length === 0
                ? <p> No hay elementos en el carrito </p>
                :
                carrito.map(producto => (
                    <Producto
                        key={producto.id}
                        producto={producto}
                        carrito={carrito}
                        agregarCarrrito={agregarCarrrito}
                    />
                ))
        }
    </div>

)

export default Carrito;