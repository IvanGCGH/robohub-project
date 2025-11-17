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

function setupSearch() {
    const searchContainer = document.getElementById("search-container");

    if (!searchContainer) {
        console.error('El contenedor de búsqueda no fue encontrado.');
        return;
    }

    // Usamos el contenedor existente, no duplicamos el ID
    searchContainer.innerHTML = `
        <div class="search-wrapper">
            <span class="search-icon">🔍</span>
            <input
                type="text"
                class="search-input"
                placeholder="Nombre o descripción..."
                id="search-input"
            />
            <button class="search-clear" id="search-clear" title="Limpiar">✖</button>
        </div>
    `;

    // 2. Obtener los elementos después de la inyección
    const searchInput = document.getElementById("search-input");
    const searchClearButton = document.getElementById("search-clear");
    
    // Si no existen (algo salió mal en la inyección), salimos
    if (!searchInput) return;


    // Usamos 'input' para que filtre mientras el usuario escribe.
    searchInput.addEventListener('input', (e) => {
        // Modificar AppState.searchTerm con el valor del input
        AppState.searchTerm = e.target.value.trim();
        
        // Llamar a renderRobots() para que aplique el filtro
        renderRobots(); 
        
        // Mostrar/Ocultar el botón de limpiar
        searchClearButton.style.display = AppState.searchTerm ? 'flex' : 'none';
        
        console.log('Búsqueda actualizada:', AppState.searchTerm);
    });


    // 4. Event Listener para limpiar la búsqueda
    searchClearButton.addEventListener('click', () => {
        // Resetear el valor del input y el estado global
        searchInput.value = '';
        AppState.searchTerm = '';
        
        // Ocultar el botón de limpiar
        searchClearButton.style.display = 'none';

        // Volver a renderizar para mostrar todos los robots
        renderRobots(); 
        console.log('Búsqueda limpiada.');
    });
    
    // Inicializar el botón de limpiar como oculto
    searchClearButton.style.display = 'none';
    
    // Asegurar que el input refleje el estado inicial
    searchInput.value = AppState.searchTerm;

    console.log("✅ Componente de búsqueda configurado y activo.");
}
