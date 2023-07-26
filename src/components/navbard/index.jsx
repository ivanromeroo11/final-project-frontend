import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Productos</a></li>
          <li><a href="#">Contacto</a></li>
          <li><a href="#">Ayuda</a></li>
          <li className="nav-right"><a href="registro.html">Registro</a></li>
          <li className="nav-right"><a href="cesta.html">Cesta</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

