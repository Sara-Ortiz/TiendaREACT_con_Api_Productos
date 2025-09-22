import React from 'react';

import '../style/homePage.css'

const HomePage = ( {cartItems} ) => {
  return (
    <>
      <div>


        <main className="homepage">
          <section className="hero-section">
            <div className="hero-content">
              <h1 className="hero-title">Joyería que nace de la Tierra</h1>
              <p className="hero-subtitle">Diseños únicos forjados con la esencia de lo natural</p>
              <button onClick={() => window.location.href = '/coleccion'} className="cta-button">Explora la colección</button>
            </div>
          </section>

          <section className="our-story-section">
            <div className="story-content">
              <h2 className="section-title">Hecho a mano, con el corazón</h2>
              <p>En Piedra Viva, cada pieza es una obra de arte. Utilizamos técnicas artesanales y materiales de alta calidad para crear joyas que celebran la belleza de la naturaleza y la esencia de lo auténtico. Cada diseño cuenta una historia, esperando ser parte de la tuya.</p>
            </div>
          </section>
        </main>


      </div>
    </>
    
  );
};

export default HomePage;