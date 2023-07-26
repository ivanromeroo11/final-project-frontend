import React from 'react';
import './style.css'


const Navegacion = () => {
  return (
    <header>
      <nav className="navbar">
        <ul>
          <li><a href="/">Registarte</a></li>
          <li><a href='/login'>login</a></li>
          <li><a href="/panel">Productos</a></li>
          <li><a href="/cesta">Cesta</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navegacion;

