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

function robotFilters() {
    // asegurarse de que AppState.robots contenga los datos cargados
    const robotsData = AppState.robots; 
    const filtersContainer = document.getElementById('filters-container');

    if (!filtersContainer) {
        console.error('El contenedor de filtros no fue encontrado. Asegúrate de que exista un elemento con id="filters-container" en tu HTML.');
        return;
    }

    // obtener los tipos de robot únicos
    const robotTypes = [...new Set(robotsData.map(robot => robot.type))];  // Set para garantizar que cada 'type' aparezca solo una vez.
    //console.log(robotTypes);
    
    // crear el elemento <select>
    const filterSelect = document.createElement('select');
    filterSelect.id = 'filter-select';
    filterSelect.className = 'filter-select'; // Clase para estilos CSS

    // crear y añadir la opción "Todos"
    const allOption = document.createElement('option');
    allOption.value = 'all';
    allOption.textContent = 'Todos';
    filterSelect.appendChild(allOption);

    // crear y añadir opciones para cada tipo de robot
    robotTypes.forEach(type => {
        const option = document.createElement('option');
        option.value = type; // El valor (value) y el texto visible (textContent) son el mismo tipo de robot
        option.textContent = type;
        filterSelect.appendChild(option);
    });

    // Opcional: crear una etiqueta de título
    const label = document.createElement('p');
    label.className = 'filter-label';
    label.textContent = '🏷️ Filtrar por:';

    // wrapper del filtro
    const filtersWrapper = document.createElement('div');
    filtersWrapper.className = 'filters-wrapper';
    filtersWrapper.appendChild(label);
    filtersWrapper.appendChild(filterSelect);
    filtersContainer.innerHTML = ''; // Limpiar cualquier contenido existente
    filtersContainer.appendChild(filtersWrapper);

    // Event Listener
    filterSelect.addEventListener('change', (e) => {
        AppState.currentFilter = e.target.value; 
        renderRobots(); 
        console.log('Filtro cambiado a:', AppState.currentFilter);
    });

    // Opcional: Asegurar que el select refleje el estado inicial
    filterSelect.value = AppState.currentFilter;
}