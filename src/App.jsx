// // // import React from 'react';
// // // import './App.css'; 
// // // import HomePage from './feactures/dashboard/pages/homePage';


// // // function App() {
// // //   return (
// // //     <>
// // //       <div className="App">
// // //         <HomePage />
// // //       </div>
// // //     </>
// // //   );
// // // }

// // // export default App;

// // import React from 'react';
// // import { Routes, Route } from 'react-router-dom';
// // import './App.css'; 

// // // Importa tus componentes de página
// // import HomePage from './feactures/dashboard/pages/homePage.jsx';
// // import ProductsPage from './feactures/products/productsPage.jsx';
// // import CartPage from './feactures/cart/cartPage.jsx'; 


// // function App() {
// //   return (
    
// //     <div className="App">
// //       <Routes>
// //         <Route path="/" element={<HomePage />} />
// //         <Route path="/coleccion" element={<ProductsPage />} />
// //         <Route path="/carrito" element={<CartPage />} />

// //       </Routes>
// //     </div>

// //   );
// // };


// // export default App;

// // import MainLayout from  './feactures/shared/layouts/mainLayouts.jsx'







// // En App.jsx
// import React, { useState } from 'react';
// import { Routes, Route } from 'react-router-dom';

// // Importa tus componentes de página y el Layout Component
// import MainLayout from  './feactures/shared/layouts/mainLayouts.jsx'
// import HomePage from './feactures/dashboard/pages/homePage.jsx';
// import ProductsPage from './feactures/products/productsPage.jsx';
// import CartPage from './feactures/cart/cartPage.jsx';

// function App() {
//     const [cart, setCart] = useState([]);

//     // ➕ Agrega un producto al carrito
//     const handleAddToCart = (product) => {
//         const existing = cart.find((item) => item.id === product.id);
//         if (existing) {
//             setCart(
//                 cart.map((item) =>
//                     item.id === product.id
//                         ? { ...item, quantity: item.quantity + 1 }
//                         : item
//                 )
//             );
//         } else {
//             setCart([...cart, { ...product, quantity: 1 }]);
//         }
//     };

//     // ➖ Remueve o decrementa un producto del carrito
//     const handleRemoveFromCart = (id) => {
//         setCart(
//             cart
//                 .map((item) =>
//                     item.id === id ? { ...item, quantity: item.quantity - 1 } : item
//                 )
//                 .filter((item) => item.quantity > 0)
//         );
//     };

//     return (
//         <div className="App">
//             <Routes>
//                 {/* La ruta padre que usa MainLayout y le pasa las props */}
//                 <Route path="/" element={<MainLayout cartItems={cart} />}>
//                     <Route index element={<HomePage />} />
//                     <Route 
//                       path="coleccion" 
//                       element={<ProductsPage onAddToCart={handleAddToCart} />} 
//                     />
//                     <Route 
//                       path="carrito" 
//                       element={
//                         <CartPage
//                           cartItems={cart} // Asegúrate de que esta línea esté presente
//                           onAdd={handleAddToCart}
//                           onRemove={handleRemoveFromCart}
//                         />
//                       } 
//                     />
//                 </Route>
//             </Routes>
//         </div>
//     );
// }

// export default App;


import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './features/shared/layouts/mainLayouts.jsx';
import HomePage from './features/dashboard/components/homePage.jsx';
import ProductsPage from './features/products/components/productsPage.jsx';
import CartPage from './features/cart/components/cartPage.jsx';
import Contacto from './features/contacto/components/contacto.jsx';


function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainLayout cartItems={cart} />}>
          <Route index element={<HomePage />} />
          <Route 
            path="coleccion" 
            element={<ProductsPage onAddToCart={handleAddToCart} />} 
          />
          <Route 
            path="carrito" 
            element={
              <CartPage
                cartItems={cart}
                onAdd={handleAddToCart}
                onRemove={handleRemoveFromCart}
              />
            } 
          />
          <Route path="contactenos" element={<Contacto />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
