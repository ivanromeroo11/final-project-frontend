import React from 'react';


const Navegacion = () => {
  return (
    <header>
      <nav className="navbar">
        <ul>
          <li><a href="/panel">Productos</a></li>
          <li><a href="/">Registarte</a></li>
          <li><a href="/cesta">Cesta</a></li>
          <li><a href='/login'>login</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navegacion;

