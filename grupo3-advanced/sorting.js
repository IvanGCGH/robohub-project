// ============================================
// GRUPO 3: SORTING.JS
// ============================================
//
// TAREA: Implementar ordenamiento de robots
//
// REQUISITOS:
// 1. Select dropdown con opciones de ordenamiento
// 2. Opciones: Por nombre, por año, por tipo, más recientes
// 3. Ordenar automáticamente al cambiar
//
// TIPS:
// - Usá document.getElementById('sorting-controls')
// - La función sortRobots(robots, criteria) ya existe en app.js
// - Modificá AppState.sortBy
// - Llamá a renderRobots() después de cada cambio
// - Los estilos van en sorting.css
//
// EJEMPLO:
// <select id="sort-select">
//   <option value="name">Por Nombre</option>
//   <option value="year">Por Año</option>
//   <option value="type">Por Tipo</option>
//   <option value="newest">Más Recientes</option>
// </select>
//
// sortSelect.addEventListener('change', (e) => {
//   AppState.sortBy = e.target.value;
//   renderRobots();
// });
// ============================================

// Tu código acá...


document.addEventListener('DOMContentLoaded', () => {
    const boxHtml = document.getElementById('sorting-controls');
    boxHtml.innerHTML = `
        <div class="sorting-wrapper">
            <i class="sort-icon">⬆️</i>
            <i class="sort-icon">⬇️</i>
            <p class="sort-label">Ordenar por</p>
            <select id="sort-select" class="sort-select">
                <option value="name" class="sort-select">Nombre(A-Z)</option>
                <option value="year" class="sort-select">Año(Más reciente)</option>
                <option value="type" class="sort-select">Tipo(A-Z)</option>
                <option value="newest" class="sort-select">Agregados recientemente</option>
            </select>
        </div>
    `;
  
    const sortSelect = document.getElementById('sort-select');
  
    sortSelect.addEventListener('change', (e) => {
      const criteria = e.target.value;
      AppState.sortBy = criteria;
      AppState.robots = sortRobots(AppState.robots, criteria);
      renderRobots();
    });
});




