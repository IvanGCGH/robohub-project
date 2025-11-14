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

if (footerContainer) {
    
    const footerHTML = `
      <div class="footer-content">
        
        <!-- Sección 1: Acerca de -->
        <div class="footer-section">
          <!-- Usamos h3 como en el CSS (.footer-section h3) -->
          <h3 style="font-size: 1.5rem; color: white; margin-bottom: 15px;">RoboHub</h3>
          <p>Tu portal definitivo para gestionar robots de forma inteligente y eficiente.</p>
        </div>

        <!-- Sección 2: Enlaces Rápidos -->
        <div class="footer-section">
          <!-- Usamos h4 como en el CSS (.footer-section h4) -->
          <h4>Enlaces Rápidos</h4>
          <ul class="footer-links">
            <li><a href="#hero-section">Inicio</a></li>
            <li><a href="#about-section">Acerca de</a></li>
            <li><a href="#robots-list">Robots</a></li>
            <li><a href="#featured-gallery">Destacados</a></li>
            <li><a href="#stats-panel">Estadisticas</a></li>
          </ul>
        </div>

      </div>
      
      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <p>&copy; ${currentYear} RoboHub - Todos los derechos reservados.</p>
        <!-- Clase .footer-credits definida en el CSS -->
        <p class="footer-credits">Desarrollado con ❤️ por el equipo de Artech Bootcamp.</p>
      </div>
    `;
    
    footerContainer.innerHTML = footerHTML;
    
  } else {
    console.error('Error: No se encontró el elemento con ID "main-footer".');
  }
  
});