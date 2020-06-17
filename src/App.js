import React , { Fragment, useState } from 'react';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Producto from './componentes/producto';
import Carrito from './componentes/carrito';

function App() {

  // state Es todo lo que va a reaccionar a acciones de los usuarios, como los fomularios que esten leyendo los datos del formulario

  // Crear listado de productos
  // el segundo paramatro es la funcion que modifica el state 
  const [ productos, setProductos ] = useState([
    { id: 1, nombre: 'Camisa React' , precio: 50 },
    { id: 2, nombre: 'Camisa Vuejs' , precio: 20 },
    { id: 3, nombre: 'Camisa Node.js' , precio: 30 },
    { id: 4, nombre: 'Camisa Angular.js' , precio: 40 }
  ]);

  // Listado del carrito 
  const [ carrito, agregarCarrrito ] = useState([]);

  // Obtener fecha 
  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header 
        titulo = "Tienda Virtual"
      />
      <h1>Lista de productos</h1>
      {productos.map( producto => (
        <Producto
        // estos son prosp que se le estan pasando al componete Producto
          key = {producto.id}
          producto = {producto}
          productos = {productos}
          carrito = {carrito}
          agregarCarrrito = {agregarCarrrito}
        />
      ))}
      <Carrito 
        carrito={carrito}
        agregarCarrrito={agregarCarrrito}
      />
      <Footer 
        fecha = { fecha }
      /> 
    </Fragment>
  );
}

export default App;
