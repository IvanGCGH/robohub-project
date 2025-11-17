// ============================================
// GRUPO 2: FILTERS.JS
// ============================================
//
// TAREA: Implementar filtros por tipo de robot

// REQUISITOS:
// 1. Select dropdown con tipos de robots
// 2. Opción "Todos" para ver todos
// 3. Filtrar al cambiar la selección

// TIPS:
// - Usa document.getElementById('filters-container')
// - Modifica AppState.currentFilter
// - Llama a renderRobots() después de cada cambio
// - Los estilos van en filters.css

// EJEMPLO:
// <select id="filter-select">
//   <option value="all">Todos</option>
//   <option value="Humanoide">Humanoide</option>
//   <option value="Industrial">Industrial</option>
//   ...
// </select>

// filterSelect.addEventListener('change', (e) => {
//   AppState.currentFilter = e.target.value;
//   renderRobots();
// });
// ============================================

// ============================================
// GRUPO 2: FILTERS.JS
// ============================================
// TAREA: Implementar filtros por tipo de robot

function robotFilters() {
    
    const filtersContainer = document.getElementById('filters-container');

    if (!filtersContainer) {
        console.error('El contenedor de filtros no fue encontrado.');
        return;
    }

    // Lista estática de tipos de robot conocidos
    const staticRobotTypes = [
        'Humanoide',
        'Doméstico',
        'Militar',
        'Industrial',
        'Médico',
        'Exploración' 
    ];
    
    // Generar las <option> dinámicamente a partir de la lista estática
    const optionsHtml = staticRobotTypes.map(type => 
        `<option value="${type}">${type}</option>`
    ).join(''); // Unir todas las opciones en un solo string

    const filterHtml = `
        <div class="filters-wrapper">
            <p class="filter-label">🏷️ Tipo de robot:</p>
            <select id="filter-select" class="filter-select">
                <option value="all">Todos</option>
                ${optionsHtml}
            </select>
        </div>
    `;

    // Inyectar el HTML en el contenedor
    filtersContainer.innerHTML = filterHtml;

    // Obtener el select recién inyectado para añadir el Event Listener
    const filterSelect = document.getElementById('filter-select');
    
    // Verificar que el elemento existe antes de adjuntar el listener
    if (filterSelect) {
        // Event Listener: Actualiza el estado y vuelve a renderizar
        filterSelect.addEventListener('change', (e) => {
            AppState.currentFilter = e.target.value; 
            renderRobots(); 
            console.log('Filtro cambiado a:', AppState.currentFilter);
        });

        // Asegurar que el select refleje el estado inicial
        filterSelect.value = AppState.currentFilter;
    }

    console.log('✅ Filtros de tipo montados');
}