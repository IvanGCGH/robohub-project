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

// funcion invocada en init.js
function setupSearch() {
    // Obtener el contenedor de búsqueda de index.html
    const searchContainer = document.getElementById("search-container");

    // Crear el wrapper del input de búsqueda
    const searchWrapper = document.createElement("div");
    searchWrapper.className = "search-wrapper";

    // Crear el ícono de búsqueda
    const searchIcon = document.createElement("span");
    searchIcon.className = "search-icon";
    searchIcon.textContent = "🔍";

    // Crear el input de búsqueda con atributos y eventos
    const searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.className = "search-input";
    searchInput.id = "search-input";
    searchInput.placeholder = "Nombre o descripción...";
    searchInput.addEventListener("input", (e) => {
        AppState.searchTerm = e.target.value.trim();
        renderRobots();
        searchClear.style.display = AppState.searchTerm ? "flex" : "none";
    });

    // Crear el botón para limpiar la búsqueda
    const searchClear = document.createElement("button");
    searchClear.className = "search-clear";
    searchClear.id = "search-clear";
    searchClear.textContent = "✖";
    searchClear.addEventListener("click", () => {
        searchInput.value = "";
        AppState.searchTerm = "";
        renderRobots();
        searchClear.style.display = "none";
    });

    // Agregar los elementos al wrapper y luego al contenedor principal
    searchWrapper.appendChild(searchIcon);
    searchWrapper.appendChild(searchInput);
    searchWrapper.appendChild(searchClear);

    searchContainer.appendChild(searchWrapper);

    console.log("✅ Componente de búsqueda configurado y activo.");
}
