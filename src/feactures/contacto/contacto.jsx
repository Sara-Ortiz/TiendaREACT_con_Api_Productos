
import React, { useState } from 'react'; // Importa useState
import './contacto.css';

const Contacto = () => {
  // 1. Define el estado para controlar la visibilidad de la notificación
  const [showNotification, setShowNotification] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); 

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    console.log('Datos del formulario:', data);

    // 2. Muestra la notificación al enviar el formulario
    setShowNotification(true);

    // 3. Oculta la notificación después de 3 segundos (el tiempo de tu animación)
    setTimeout(() => {
      setShowNotification(false);
    }, 3000); 

    // Opcional: limpiar el formulario
    event.target.reset();
  };

  return (
    <div className="contact-container">
      <h2>Contáctanos</h2>
      <p>Estamos aquí para ayudarte. Si tienes alguna pregunta sobre nuestros productos o necesitas asistencia, no dudes en escribirnos.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input 
            type="text" 
            id="nombre" 
            name="nombre" 
            placeholder="Tu nombre completo"
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="ejemplo@correo.com"
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea 
            id="mensaje" 
            name="mensaje" 
            rows="5"
            placeholder="Escribe tu mensaje aquí..."
            required 
          />
        </div>

        <button type="submit" className="submit-button">Enviar Mensaje</button>
      </form>

      {/* 4. Renderiza la notificación si el estado es true */}
      {showNotification && (
        <div className="notification-container">
          <p className="notification-message">¡Mensaje enviado con éxito!</p>
        </div>
      )}
    </div>
  );
};

export default Contacto;