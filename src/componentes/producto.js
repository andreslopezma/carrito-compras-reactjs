import React from 'react';

const Producto = ({ producto, carrito, agregarCarrrito, productos }) => {
    const { nombre, precio, id } = producto;

    // Funcion para agregar al carrito de compras
    const agregarCompras = id => {
        const producto = productos.filter(producto => producto.id === id)[0];
        agregarCarrrito([
            // ... sirve para hacer una copia del objeto o del arreglo
            ...carrito,
            producto
        ])
    }

    // Eliminar producto del carrito
    const elimnarProducto = id => {
        const productos = carrito.filter(producto => producto.id !== id);

        // colocar los productos en el state
        agregarCarrrito(productos);
    }

    return (
        <div>
            <h2> {nombre} </h2>
            <p> {precio} </p>

            {
                productos
                    ?
                    (
                        <button
                            type="button"
                            onClick={() => agregarCompras(id)}
                        >Comprar</button>
                    )
                    :
                    (
                        <button
                            type="button"
                            onClick={() => elimnarProducto(id)}
                        >Eliminar</button>

                    )
            }
        </div>
    )
}
export default Producto;
