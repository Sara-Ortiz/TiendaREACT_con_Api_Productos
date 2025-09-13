// En Header.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/header.css'; 

const Header = ({ cartItems = [] }) => {
    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <header>
            <nav className="main-header">
                <div className="logo">
                    <NavLink to="/">
                        Piedra Viva ☽ 
                    </NavLink>
                </div>
                
                <ul className="main-nav">
                    <li><NavLink to="/">Inicio</NavLink></li>
                    <li><NavLink to="/coleccion">Colección</NavLink></li>
                </ul>
                
                {/* ➡️ NUEVOS ÍCONOS Y CLASES PARA EL CONTENEDOR */}
                <div className="header-icons">
                    {/* Icono de búsqueda */}
                    <NavLink to="/buscar" className="icon-link">
                        🔍 
                    </NavLink>
                    
                    {/* Icono del carrito */}
                    <NavLink to="/carrito" className="icon-link">
                        🛒
                        {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
                    </NavLink>
                    
                    {/* Icono de usuario */}
                    <NavLink to="/perfil" className="icon-link">
                        👤 
                    </NavLink>
                </div>
            </nav>
        </header>
    );
};

export default Header;