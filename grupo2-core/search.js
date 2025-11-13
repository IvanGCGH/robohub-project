// ============================================
// GRUPO 2: SEARCH.JS
// ============================================
//
// TAREA: Implementar la búsqueda de robots
//
// REQUISITOS:
// 1. Input de búsqueda
// 2. Buscar en tiempo real (mientras escribes)
// 3. Buscar por nombre y descripción
//
// TIPS:
// - Usá document.getElementById('search-container')
// - Modificá AppState.searchTerm
// - Llamá a renderRobots() después de cada cambio
// - Los estilos van en search.css
//
// EJEMPLO:
// <input 
//   type="text" 
//   id="search-input" 
//   placeholder="🔍 Buscar robots..."
// >
//
// searchInput.addEventListener('input', (e) => {
//   AppState.searchTerm = e.target.value;
//   renderRobots();
// });
// ============================================

// Tu código acá...

const barraDeBusqueda = document.getElementById("search-container");

barraDeBusqueda.innerHTML = `<div id="search-container">
  <div class="search-wrapper">
    <!-- Ícono de lupa -->
    <span class="search-icon">
      🔍
      <!-- O con un ícono de librería como Font Awesome:
      <i class="fa fa-search"></i>
      -->
    </span>

    <!-- Campo de búsqueda -->
    <input
      type="text"
      class="search-input"
      placeholder="Buscar robot por nombre."
      id="search-input"
    />

    <!-- Botón para limpiar el campo -->
    <button class="search-clear" id="search-clear" title="Limpiar">
      ✖
      <!-- o <i class="fa fa-times"></i> si usas íconos -->
    </button>
  </div>
</div>
`; 


function buscarRobots(criterioBusqueda){
    AppState.filteredRobots = AppState.robots.filter(
      (r) => r.name.includes(criterioBusqueda) || r.description.includes(criterioBusqueda));

      AppState.searchTerm = criterioBusqueda;
      
      console.log(AppState.filteredRobots);
}


const input = document.getElementById("search-input");

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    const textoIngresado = input.value.trim();
    buscarRobots(textoIngresado);
  }
});

console.log("Agrego barra de busqueda")
