// ============================================
// GRUPO 1: FOOTER.JS
// ============================================
//
// TAREA: Crear el footer de la página
//
// REQUISITOS:
// 1. Copyright con el año actual
// 2. Links a redes sociales (pueden ser falsos)
// 3. Información de contacto
//
// TIPS:
// - Usa document.getElementById('main-footer')
// - Para obtener el año actual: new Date().getFullYear()
// - Podes usar íconos de texto como: © 📧 📱
// - Los estilos van en footer.css
//
// EJEMPLO DE ESTRUCTURA:
// <div class="footer-content">
//   <p>&copy; 2024 RoboHub - Todos los derechos reservados</p>
//   <div class="social-links">...</div>
// </div>
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  
  const footerContainer = document.getElementById('main-footer');
  const currentYear = new Date().getFullYear();
    
    const footerHTML = `
      <div class="footer-content">
        
        <!-- Sección 1: Acerca de -->
        <div class="footer-section">
          <h3 style="font-size: 1.5rem; color: white; margin-bottom: 15px;">RoboHub</h3>
          <p>Tu portal definitivo para gestionar robots de forma inteligente y eficiente.</p>
        </div>

        <!-- Sección 2: Enlaces Rápidos -->
        <div class="footer-section">
          <h4>Enlaces Rápidos</h4>
          <ul class="footer-links">
            <li><a href="#hero-section">Inicio</a></li>
            <li><a href="#about-section">Acerca de</a></li>
            <li><a href="#robots-list">Robots</a></li>
            <li><a href="#featured-gallery">Destacados</a></li>
            <li><a href="#stats-panel">Estadisticas</a></li>
          </ul>
        </div>

        <!-- Sección 3: Contacto -->
        <div class="footer-section">
          <h4>Contacto</h4>
          <ul class="footer-contact">
            <li>📧 <a href="mailto:info@robohub.com" style="color:white; text-decoration:none;">info@robohub.com</a></li>
            <li>📱 <a href="tel:+541112345678" style="color:white; text-decoration:none;">+54 11 1234-5678</a></li>
            <li>📍 Buenos Aires, Argentina</li>
          </ul>
        </div>

        <!-- Sección 4: Redes Sociales -->
        <div class="footer-section">
          <h4>Síguenos</h4>
          <div class="social-links">
            <a href="https://www.facebook.com/" target="_blank" class="social-link" title="Facebook">📘</a>
            <a href="https://www.twitter.com/" target="_blank" class="social-link" title="Twitter">🐦</a>
            <a href="https://www.instagram.com/" target="_blank" class="social-link" title="Instagram">📸</a>
            <a href="https://www.linkedin.com/" target="_blank" class="social-link" title="LinkedIn">💼</a>
            <a href="https://www.artech-consulting.com.ar/" target="_blank" class="social-link" title="Artech Consulting">💻</a>
            <a href="https://www.pescar.org.ar/" target="_blank" class="social-link" title="Pescar">🎣</a>
          </div>
        </div>

      </div>
      
      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <p>&copy; ${currentYear} RoboHub - Todos los derechos reservados.</p>
        <p class="footer-credits">Desarrollado con ❤️ por el equipo de Artech Bootcamp.</p>
      </div>
    `;
    
    footerContainer.innerHTML = footerHTML;

});