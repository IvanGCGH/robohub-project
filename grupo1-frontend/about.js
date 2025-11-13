// ============================================
// GRUPO 1: ABOUT.JS
// ============================================
//
// TAREA: Crear la sección "Acerca de"
//
// REQUISITOS:
// 1. Explicar qué es RoboHub
// 2. Listar características principales (mínimo 3)
// 3. Diseño atractivo con íconos o imágenes
//
// ============================================

function renderAboutSection(){
  const aboutSection = document.getElementById("about-section");

  aboutSection.innerHTML = `
<div class="about-content">
    <h2>Acerca de RoboHub</h2>
    <p>
      RoboHub es tu plataforma para gestionar, organizar y explorar el mundo de la robótica.
      Diseñada pensando en eficiencia y simplicidad.
    </p>

    <div class="features">
      <div class="feature">
        <span class="icon">🤖</span>
        <h3>Gestión Completa</h3>
        <p>Crea, edita y elimina robots de manera sencilla. Todo tu catálogo en un solo lugar.</p>
      </div>

      <div class="feature">
        <span class="icon">🔍</span>
        <h3>Búsqueda Inteligente</h3>
        <p>Encuentra robots rápidamente con nuestra búsqueda en tiempo real y filtros avanzados.</p>
      </div>

      <div class="feature">
        <span class="icon">❤️</span>
        <h3>Sistema de Favoritos</h3>
        <p>Marca tus robots preferidos y accede a ellos instantáneamente cuando los necesites.</p>
      </div>

      <div class="feature">
        <span class="icon">💾</span>
        <h3>Guardado Automático</h3>
        <p>Tus datos se guardan automáticamente en tu navegador. No pierdas nunca tu información.</p>
      </div>

      <div class="feature">
        <span class="icon">📊</span>
        <h3>Estadísticas en Vivo</h3>
        <p>Visualiza métricas en tiempo real sobre tu colección de robots y categorías.</p>
      </div>

      <div class="feature">
        <span class="icon">📤</span>
        <h3>Exportar Datos</h3>
        <p>Descarga tu catálogo completo en formato JSON para respaldos o análisis externos.</p>
      </div>
    </div>

    <div class="about-cta">
      <h3>¿Listo para comenzar?</h3>
      <p>Empieza a gestionar tu colección de robots : )</p>
      <button class="btn-primary">Ver Robots 🚀</button>
    </div>
  </div>
`;
}

renderAboutSection();