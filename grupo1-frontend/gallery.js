// ============================================
// GRUPO 1: GALLERY.JS
// ============================================
//
// TAREA: Crear una galería de robots destacados
//
// REQUISITOS:
// 1. Mostrar los primeros 3 robots destacados
// 2. Diseño tipo grid o carrusel
// 3. Título de la sección
//
// TIPS:
// - Usa document.getElementById('featured-gallery')
// - Podés obtener los robots desde: AppState.robots.slice(0, 3)
// - Usá la función getRobotImage(name) para las imágenes
// - Los estilos van en gallery.css
// - Probablemente haya que aplicar un pequeño setTimeout para esperar a que AppState.robots esté cargado
//
// EJEMPLO:
// const featuredRobots = AppState.robots.slice(0, 3);
// const html = featuredRobots.map(robot => `
//   <div class="featured-card">
//     <img src="${getRobotImage(robot.name)}" alt="${robot.name}">
//     <h4>${robot.name}</h4>
//   </div>
// `).join('');
// ============================================

// Tu código acá...