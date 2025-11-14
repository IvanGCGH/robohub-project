// ============================================
// GRUPO 1: HEADER.JS
// ============================================
//
// TAREA: Crear el header de la página
//
// REQUISITOS:
// 1. Logo o título "RoboHub"
// 2. Menú de navegación con links
// 3. Debe ser responsive (se adapta a móvil)
//
// TIPS:
// - Usa document.getElementById('main-header')
// - Usa innerHTML para agregar el contenido
// - Puedes usar Flexbox para el layout
// - Los estilos van en header.css
//
// EJEMPLO DE ESTRUCTURA:
// <nav>
//   <div class="logo">RoboHub</div>
//   <ul class="nav-links">
//     <li><a href="#hero-section">Inicio</a></li>
//     <li><a href="#about-section">Acerca de</a></li>
//     ...
//   </ul>
// </nav>
// ============================================

// Tu código acá...

//Selección del header
const header = document.getElementById('main-header')

//Agregar el contenido HTML al header
  header.innerHTML = `
  <nav class="navbar">
    <div class="logo">
      <span class="logo-icon">🤖</span>
      <span class="logo-text">RoboHub</span>
    </div>

    <ul class="nav-links">
      <li><a href="#hero-section" class="nav-link">Inicio</a></li>
      <li><a href="#about-section" class="nav-link">Acerca de</a></li>
      <li><a href="#robots-list" class="nav-link">Robots</a></li>
      <li><a href="#featured-gallery" class="nav-link">Destacados</a></li>
      <li><a href="#stats-panel" class="nav-link">Estadisticas</a></li>
    </ul>
    <div class="menu-toggle" id="menu-toggle">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </nav>
`;
