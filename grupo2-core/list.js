// ============================================
// GRUPO 2: LIST.JS
// ============================================
//
// TAREA: Ya está implementado en app.js
//
// La función renderRobots() ya maneja el renderizado de la lista.
//
// Este archivo es OPCIONAL para funcionalidad extra como:
// - Animaciones al agregar/eliminar
// - Vista en lista vs grid
// - Paginación
// - Etc.
//
// De lo contrario, pueden dejarlo vacío o eliminar este archivo.
// ============================================

// Funcionalidad extra acá...

const ROBOTS_PER_PAGE = 9; // Define el número máximo de cards visibles por página.
let currentPage = 1;        // Página actualmente mostrada al usuario.
let isListView = false;     // Estado de la vista: false=Grid, true=Lista.

let container = null;           // Contenedor principal de las cards (#robots-list).
let viewToggleButton = null;    // Botón para alternar la vista (Grid/Lista).
let paginationContainer = null; // Contenedor para los botones de paginación.

// ===========================================
// Funcionalidad de la Vista (Grid/Lista)
// ===========================================

/* Alterna la clase CSS 'list-view' en el contenedor principal de cards. */
function toggleView() {
    container = document.getElementById('robots-list');
    viewToggleButton = document.getElementById('toggle-view-btn');

    if (container && viewToggleButton) {
        // Agrega o quita la clase 'list-view'. El CSS se encarga del cambio visual.
        const isListView = container.classList.toggle('list-view');
        // Actualiza el texto del botón para reflejar la vista opuesta.
        viewToggleButton.textContent = isListView ? 'Vista Grid' : 'Vista Lista';
    }
}

// ===========================================
// Funcionalidad de Paginación
// ===========================================

/* Crea un elemento botón de paginación con su evento de clic. */
function createPaginationButton(text, isEnabled, onClick) {
    const button = document.createElement('button');
    button.textContent = text;
    // Deshabilita el botón si no es navegable (ej: "Anterior" en la página 1).
    button.disabled = !isEnabled;
    if (isEnabled) {
        button.addEventListener('click', onClick);
    }
    return button;
}

/* Renderiza los botones de paginación inferiores según el número total de páginas. */
function renderPaginationControls(totalRobots) {
    if (!paginationContainer) return;
    paginationContainer.innerHTML = '';

    const totalPages = Math.ceil(totalRobots / ROBOTS_PER_PAGE);

    // Oculta los controles si solo hay una página o menos.
    if (totalPages <= 1) return;

    // Ajusta la página actual si el número total de robots cambió (ej: por filtro o eliminación).
    if (currentPage > totalPages) {
        currentPage = totalPages;
    }

    // 1. Botón "Anterior"
    paginationContainer.appendChild(createPaginationButton('← Anterior', currentPage > 1, () => {
        currentPage--;
        window.renderRobots();
    }));

    // 2. Botones Numéricos (Muestra hasta 7 botones para no saturar)
    const maxButtons = 7;
    let startPage = Math.max(1, currentPage - Math.floor(maxButtons / 2));
    let endPage = Math.min(totalPages, startPage + maxButtons - 1);

    if (endPage - startPage + 1 < maxButtons) {
        startPage = Math.max(1, endPage - maxButtons + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
        const pageButton = createPaginationButton(i, i !== currentPage, () => {
            currentPage = i;
            window.renderRobots();
        });
        if (i === currentPage) {
            pageButton.classList.add('active-page'); // Estilo para resaltar la página actual
        }
        paginationContainer.appendChild(pageButton);
    }

    // 3. Botón "Siguiente"
    paginationContainer.appendChild(createPaginationButton('Siguiente →', currentPage < totalPages, () => {
        currentPage++;
        window.renderRobots();
    }));
}


// ===========================================
// SOBRESCRITURA DE renderRobots (Core de la Paginación)
// ===========================================

/**
 * @name renderRobots
 * @description Sobrescribe la función global renderRobots para aplicar paginación y renderizar
 * solo el subconjunto de robots de la página actual.
 */
window.renderRobots = function () {
    if (
        typeof AppState === "undefined" ||
        !document.getElementById("robots-list")
    ) {
        return;
    }

    const currentContainer = document.getElementById("robots-list");

    // Aplicar filtros y búsqueda
    let robotsToRender = AppState.robots;

    // Filtro por favoritos (GRUPO 3)
    if (AppState.showOnlyFavorites) {
        robotsToRender = robotsToRender.filter((robot) => robot.favorite);
    }

    // Filtro por tipo (GRUPO 2)
    if (AppState.currentFilter !== "all") {
        robotsToRender = robotsToRender.filter(
            (robot) => robot.type === AppState.currentFilter
        );
    }

    // Búsqueda (GRUPO 2)
    if (AppState.searchTerm) {
        robotsToRender = robotsToRender.filter(
            (robot) =>
                robot.name.toLowerCase().includes(AppState.searchTerm.toLowerCase()) ||
                robot.description
                    .toLowerCase()
                    .includes(AppState.searchTerm.toLowerCase())
        );
    }

    // Ordenamiento (GRUPO 3)
    robotsToRender = sortRobots(robotsToRender, AppState.sortBy);

    // Guardar robots filtrados para que otros grupos los usen
    AppState.filteredRobots = robotsToRender;

    // Si la lista filtrada está vacía pero el estado principal no lo está (error de timing),
    // usamos la lista principal para forzar el primer renderizado de datos.
    if (robotsToRender.length === 0 && AppState.robots.length > 0) {
        robotsToRender = AppState.robots;
    }

    const totalPages = Math.ceil(robotsToRender.length / ROBOTS_PER_PAGE);

    // Ajuste de la página actual
    if (currentPage > totalPages && totalPages > 0) {
        currentPage = totalPages;
    } else if (totalPages === 0) {
        currentPage = 1;
    }

    // Lógica de paginación: Calcular índices para "cortar" el array.
    const startIndex = (currentPage - 1) * ROBOTS_PER_PAGE;
    const endIndex = startIndex + ROBOTS_PER_PAGE;
    const robotsToShow = robotsToRender.slice(startIndex, endIndex); // Array de robots a mostrar.

    currentContainer.innerHTML = "";

    // Manejo de estado vacío
    if (robotsToRender.length === 0) {
        currentContainer.innerHTML = `
          <div class="empty-state">
            <p>No se encontraron robots</p>
            <button onclick="resetFilters()" class="btn-secondary">Limpiar filtros</button>
          </div>
        `;
        renderPaginationControls(0);
        if (typeof updateStats === "function") updateStats();
        return;
    }

    // Renderizar las cards de la página actual
    robotsToShow.forEach((robot) => {
        // createRobotCard es una función global de app.js, usamos su salida.
        const cardElement = createRobotCard(robot);
        currentContainer.appendChild(cardElement);
    });

    // Actualizar controles de paginación inferiores.
    renderPaginationControls(robotsToRender.length);

    // Llamar a updateStats si el Grupo 3 lo ha implementado.
    if (typeof updateStats === "function") {
        updateStats();
    }
};

// ===========================================
// Inyección de Controles
// ===========================================

/**
 * Inyecta el botón de cambio de vista y el contenedor de paginación en el DOM.
 */
function setupControls() {
    const controlsSection = document.querySelector('.controls-section');
    container = document.getElementById('robots-list');

    if (!controlsSection || !container) {
        return;
    }

    // 1. INYECTAR BOTÓN DE VISTA
    const viewControlsDiv = document.createElement('div');
    viewControlsDiv.id = 'view-controls';
    viewControlsDiv.innerHTML = `<button id="toggle-view-btn">Vista Lista</button>`;
    controlsSection.appendChild(viewControlsDiv);

    viewToggleButton = document.getElementById('toggle-view-btn');
    if (viewToggleButton) {
        viewToggleButton.addEventListener('click', toggleView);
    }

    // 2. INYECTAR CONTENEDOR DE PAGINACIÓN
    paginationContainer = document.createElement('div');
    paginationContainer.id = 'pagination-controls';
    // Se inserta justo después de la lista de cards en el DOM.
    container.insertAdjacentElement('afterend', paginationContainer);
}

// ===========================================
// Inicialización
// ===========================================

document.addEventListener('DOMContentLoaded', () => {
    // Usamos un pequeño retraso (50ms) para garantizar que los elementos del DOM
    // de app.js y otros grupos estén presentes antes de inyectar nuestros controles.
    setTimeout(() => {
        setupControls();
        // app.js o init.js llamará a window.renderRobots() cuando los datos estén listos.
    }, 50);
});