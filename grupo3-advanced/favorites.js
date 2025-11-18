// ============================================
// GRUPO 3: FAVORITES.JS
// ============================================
//
// TAREA: Toggle para mostrar solo favoritos
//
// REQUISITOS:
// 1. Botón/checkbox para activar/desactivar
// 2. Filtrar lista para mostrar solo favoritos
// 3. Indicador visual del estado activo
//
// TIPS:
// - Usá document.getElementById('favorites-toggle')
// - La función toggleFavorite(id) ya existe en app.js
// - Modificá AppState.showOnlyFavorites
// - Llamá a renderRobots() después de cada cambio
// - Los estilos van en favorites.css
//
// EJEMPLO:
// <button id="show-favorites-btn" class="toggle-btn">
//   ❤️ Solo Favoritos
// </button>
//
// showFavoritesBtn.addEventListener('click', () => {
//   AppState.showOnlyFavorites = !AppState.showOnlyFavorites;
//   showFavoritesBtn.classList.toggle('active');
//   renderRobots();
// });
// ============================================

// Tu código acá...

// ============================================
// GRUPO 3: FAVORITES.JS
// ============================================
//
// Toggle para mostrar solo favoritos
// ============================================

function initFavoritesToggle() {
  const btn = document.getElementById("favorites-toggle");
  if (!btn) return;

  // Estado inicial visual
  if (AppState.showOnlyFavorites) {
    btn.classList.add("active");
  }

  btn.addEventListener("click", () => {
    // Cambiar estado global
    AppState.showOnlyFavorites = !AppState.showOnlyFavorites;

    // Toggle visual
    btn.classList.toggle("active");

    // Filtrado dinámico
    if (AppState.showOnlyFavorites) {
      AppState.filteredRobots = AppState.robots.filter(r => r.favorite);
    } else {
      AppState.filteredRobots = [];
    }

    // Renderizar cambios
    renderRobots();
    updateStats(); // Para que el panel muestre stats correctos
  });
}

// Hacer accesible desde app.js
window.initFavoritesToggle = initFavoritesToggle;
