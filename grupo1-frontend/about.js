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


// ----------------------------------------------------------------------
// Lista de características de RoboHub.
// Cada objeto representa una card que se mostrará en pantalla.
// ----------------------------------------------------------------------

const robots = [
  {
    icon: "🤖",
    nombre: "Gestión Completa",
    descripcion:
      "Crea, edita y elimina robots de manera sencilla. Todo tu catálogo en un solo lugar.",
  },
  {
    icon: "🔍",
    nombre: "Búsqueda Inteligente",
    descripcion:
      "Encuentra robots rápidamente con nuestra búsqueda en tiempo real y filtros avanzados.",
  },
  {
    icon: "❤️",
    nombre: "Sistema de Favoritos",
    descripcion:
      "Marca tus robots preferidos y accede a ellos instantáneamente cuando los necesites.",
  },
  {
    icon: "💾",
    nombre: "Guardado Automático",
    descripcion:
      "Tus datos se guardan automáticamente en tu navegador. No pierdas nunca tu información.",
  },
  {
    icon: "📊",
    nombre: "Estadísticas en Vivo",
    descripcion:
      "Visualiza métricas en tiempo real sobre tu colección de robots y categorías.",
  },
  {
    icon: "📤",
    nombre: "Exportar Datos",
    descripcion:
      "Descarga tu catálogo completo en formato JSON para respaldos o análisis externos.",
  },
];

// ----------------------------------------------------------------------
// Esta función inserta en el DOM el contenido de la sección "Acerca de".
// ----------------------------------------------------------------------

function renderAboutSection() {
  const aboutSection = document.getElementById("about-section");

  aboutSection.innerHTML = `
    <div class="about-container">
      <div class="about-content">
        <h2>Acerca de RoboHub</h2>
        <p>
        RoboHub es tu plataforma integral para gestionar, organizar y explorar el fascinante mundo de la robótica.
        Diseñada pensando en eficiencia y simplicidad.
        </p>
      </div>

      <div class="features">
        ${crearCards()}
      </div>

      <div class="about-cta">
        <h3>¿Listo para comenzar?</h3>
        <p>Empieza a gestionar tu colección de robots ahora mismo.</p>
        <button class="btn-primary">Ver Robots 🚀</button>
      </div>
    </div>
`;
}

// --------------------------------------------------------------------------------------
// Esta funcion recorre la lista de robots y genera una card HTML por cada elemento.
// Por último, une todas las cards en un único bloque de texto para insertar en el DOM.
// --------------------------------------------------------------------------------------

function crearCards() {
  const cards = robots.map(r => {
    return `<div class="feature">
        <span>${r.icon}</span>
        <h3>${r.nombre}</h3>
        <p>${r.descripcion}</p>
      </div>`
  })

  return cards.join("");
}

renderAboutSection();