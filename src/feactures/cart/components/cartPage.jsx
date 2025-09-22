
// import React from 'react';
// import Footer from '../shared/components/footer.jsx';
// import Header from '../shared/components/header.jsx';
// import './cartPage.css'


// const CartPage = () => {
//   return (
//     <div>
//       <Header />
//         <main className="cart-page-content">
//             <div className="cart-container">
//                 <h2 className="cart-title">Tu Carrito de Compras</h2>
                
//                     <div className="cart-items-list">
//                         {/* Primer producto de ejemplo */}
//                         <div className="cart-item">
//                             <img src="https://i.pinimg.com/736x/4d/21/ac/4d21ac75fcc8f834a498af93fffcbca1.jpg" alt="Anillo de Cuarzo Rosa" className="cart-item-image" />
//                             <div className="item-details">
//                                 <h3 className="item-name">Anillo de Cuarzo Rosa</h3>
//                                 <p className="item-price">65.000 COP</p>
//                                 <p className="item-quantity">Cantidad: 1</p>
//                             </div>
//                         </div>

//                         {/* Segundo producto de ejemplo */}
//                         <div className="cart-item">
//                             <img src="https://i.pinimg.com/736x/25/d2/ac/25d2acd3db50ef90157dac91e6ba914a.jpg" alt="Pendientes de Cobre Orgánico" className="cart-item-image" />
//                             <div className="item-details">
//                                 <h3 className="item-name">Pendientes de Cobre Orgánico</h3>
//                                 <p className="item-price">35.000 COP</p>
//                                 <p className="item-quantity">Cantidad: 1</p>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="cart-summary">
//                         <div className="summary-row">
//                             <span>Subtotal:</span>
//                             <span>100.000 COP</span>
//                         </div>
//                         <div className="summary-row">
//                             <span>Envío:</span>
//                             <span>5.000 COP</span>
//                         </div>
//                         <div className="summary-row total-row">
//                             <span>Total:</span>
//                             <span>105.000 COP</span>
//                         </div>
//                         <button className="checkout-button">Proceder al pago</button>
//                     </div>
//             </div>
//         </main>
//       <Footer />
//     </div>
//   );
// };

// export default CartPage;




import React from 'react';

import '../style/cartPage.css';

const CartPage = ({ cartItems = [], onAdd, onRemove }) => {

    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shipping = cartItems.length > 0 ? 0 : 0; // Se asume un valor de 5000 COP para el envío
    const total = subtotal + shipping;

    return (
        <div>
            <main className="cart-page-content">
                <div className="cart-container">
                    <h2 className="cart-title">Tu Carrito de Compras</h2>
                    {cartItems.length === 0 ? (
                        <p className="empty-cart-message">¡Tu carrito está vacío!</p>
                    ) : (
                        <div className="cart-items-list">
                            {cartItems.map((item) => (
                                <div key={item.id} className="cart-item">
                                    <img src={item.image} alt={item.name} className="cart-item-image" />
                                    <div className="item-details">
                                        <h3 className="item-name">{item.title}</h3>
                                        <p className="item-price">${item.price}</p>
                                        <p className="item-quantity">Cantidad: {item.quantity}</p>
                                        <p className="item-quantity">Categoria: {item.category}</p>

                                        <div className="item-actions">
                                            <button onClick={() => onAdd(item)} className="btn-add">+</button>
                                            <button onClick={() => onRemove(item.id)} className="btn-remove">-</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    <div className="cart-summary">
                        <div className="summary-row">
                            <span>Subtotal:</span>
                            <span>${subtotal.toLocaleString('es-CO')}</span>
                        </div>
                        <div className="summary-row">
                            <span>Envío:</span>
                            <span>${shipping}</span>
                        </div>
                        <div className="summary-row total-row">
                            <span>Total:</span>
                            <span>${total}</span>
                        </div>
                        <button className="checkout-button">Proceder al pago</button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default CartPage;