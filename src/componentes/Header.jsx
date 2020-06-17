// Este es un componente de React
import React from 'react';

// props son datos enviados desde App.js
function Header ({ titulo }) {
    // Dentro de este espacio se puede colocar mas codigo de javascript
    return (
        <h1 className="encabezado" >{ titulo }</h1>
    );
}
export default Header;