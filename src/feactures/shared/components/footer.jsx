import React from 'react';
import '../style/footer.css'; 



function Footer() {
  return (
   
    <footer className="main-footer">
      <div className="footer-content">
        
        <div className="footer-column brand-info">
          <h3 className="footer-logo">Piedra Viva ☽</h3>
          <p className="footer-slogan"> ˚ ⋆ Hecho con el alma, la tierra y el tiempo ⋆ ˚ </p>
          <div className="social-links">
            <a href="https://www.instagram.com/">Instagram</a>
            <a href="https://www.facebook.com/?locale=es_LA">Facebook</a>
            <a href="https://co.pinterest.com/">Pinterest</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Piedra Viva. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;