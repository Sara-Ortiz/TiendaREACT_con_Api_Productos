import React, { useState, useRef } from 'react';
import '../style/contacto.css';
import emailjs from '@emailjs/browser';

const Contacto = () => {
  // Estado para controlar la visibilidad de la notificación
  const [showNotification, setShowNotification] = useState(false);
  // Referencia para acceder a los elementos del formulario
  const form = useRef();

  const handleSubmit = (event) => {
    // Evita que la página se recargue al enviar el formulario
    event.preventDefault();

    // Reemplaza con tus propias credenciales de EmailJS
    const serviceID = 'service_91ipowr';
    const templateID = 'template_usomnp8';
    const publicKey = 'EFXqBVIAi_UjsUnqu';

    emailjs
      .sendForm(serviceID, templateID, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log('¡Correo enviado con éxito!');
          // Muestra la notificación de éxito
          setShowNotification(true);
          // Oculta la notificación después de 3 segundos y recarga la página
          setTimeout(() => {
            setShowNotification(false);
            window.location.reload(); // Esta línea recarga la página
          }, 3000);
          // Limpia los campos del formulario
          event.target.reset();
        },
        (error) => {
          console.log('El envío del correo falló...', error.text);
          // Aquí puedes manejar un error, por ejemplo, mostrando otra notificación
        },
      );
  };

  return (
    <div className="contact-container">
      <h2>Contáctanos</h2>
      <p>Estamos aquí para ayudarte. Si tienes alguna pregunta sobre nuestros productos o necesitas asistencia, no dudes en escribirnos.</p>

      {/* Se enlaza la referencia al formulario */}
      <form className="contact-form" onSubmit={handleSubmit} ref={form}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input 
            type="text" 
            id="nombre" 
            name="user_name" 
            placeholder="Tu nombre completo"
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input 
            type="email" 
            id="email" 
            name="user_email" 
            placeholder="ejemplo@correo.com"
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea 
            id="mensaje" 
            name="message" 
            rows="5"
            placeholder="Escribe tu mensaje aquí..."
            required 
          />
        </div>

        <button type="submit" className="submit-button">Enviar Mensaje</button>
      </form>

      {/* Renderiza la notificación si el estado es verdadero */}
      {showNotification && (
        <div className="notification-container">
          <p className="notification-message">¡Mensaje enviado con éxito!</p>
        </div>
      )}
    </div>
  );
};

export default Contacto;