// src/shared/components/layout/MainLayout.jsx

import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx'





const MainLayout = ({ cartItems }) => {
    return (
        <>
            {/* El Header se renderizará en todas las páginas */}
            <Header cartItems={cartItems} />

            {/* El componente <Outlet /> es el espacio donde se renderizarán 
                las rutas hijas (HomePage, ProductsPage, CartPage, etc.).
            */}
            <main className="min-h-screen">
                <Outlet />
            </main>

            {/* El Footer también se renderizará en todas las páginas */}
            <Footer />
        </>
    );
};

export default MainLayout;