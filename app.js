// ============================================
// APP.JS - FUNCIONES COMPARTIDAS
// ============================================
// Este archivo contiene funciones que TODOS los grupos pueden usar
// No hace falta realizar modficaciones

// ============================================
// ESTADO GLOBAL DE LA APLICACIÓN
// ============================================

const AppState = {
  robots: [],
  filteredRobots: [],
  currentFilter: 'all',
  searchTerm: '',
  sortBy: 'name',
  showOnlyFavorites: false
};

// ============================================
// CONSTANTES
// ============================================

const STORAGE_KEY = 'robohub_robots';
const ROBOASH_API = 'https://robohash.org/';

// ============================================
// FUNCIONES DE LOCALSTORAGE
// ============================================

/**
 * Guardar robots en localStorage
 * @param {Array} robots - Array de robots a guardar
 */
function saveToLocalStorage(robots) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(robots));
    console.log('✅ Datos guardados en localStorage');
  } catch (error) {
    console.error('❌ Error al guardar en localStorage:', error);
  }
}

/**
 * Cargar robots desde localStorage
 * @returns {Array} - Array de robots guardados
 */
function loadFromLocalStorage() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      console.log('✅ Datos cargados desde localStorage');
      return JSON.parse(data);
    }
    console.log('No hay datos en localStorage, usando datos por defecto');
    return getDefaultRobots();
  } catch (error) {
    console.error('❌ Error al cargar desde localStorage:', error);
    return getDefaultRobots();
  }
}

/**
 * Obtener robots por defecto (para la primera vez)
 * @returns {Array} - Array de robots iniciales
 */
function getDefaultRobots() {
  return [
    {
      id: generateId(),
      name: 'R2-D2',
      type: 'Humanoide',
      year: 1977,
      description: 'Droide astromecánico de la saga Star Wars',
      favorite: false,
      created: new Date().toISOString()
    },
    {
      id: generateId(),
      name: 'Wall-E',
      type: 'Doméstico',
      year: 2008,
      description: 'Robot compactador de basura con gran corazón',
      favorite: false,
      created: new Date().toISOString()
    },
    {
      id: generateId(),
      name: 'Terminator T-800',
      type: 'Militar',
      year: 1984,
      description: 'Cyborg asesino del futuro',
      favorite: false,
      created: new Date().toISOString()
    },
    {
      id: generateId(),
      name: 'Atlas',
      type: 'Industrial',
      year: 2013,
      description: 'Robot humanoide de Boston Dynamics',
      favorite: false,
      created: new Date().toISOString()
    },
    {
      id: generateId(),
      name: 'Da Vinci',
      type: 'Médico',
      year: 2000,
      description: 'Robot quirúrgico para cirugías mínimamente invasivas',
      favorite: false,
      created: new Date().toISOString()
    }
  ];
}

// ============================================
// FUNCIONES DE RENDERIZADO
// ============================================

/**
 * Renderizar la lista completa de robots
 * Esta función la llamará el GRUPO 2 desde list.js
 */
function renderRobots() {
  const container = document.getElementById('robots-list');
  
  if (!container) {
    console.error('No se encontró el contenedor robots-list');
    return;
  }

  // Aplicar filtros y búsqueda
  let robotsToRender = AppState.robots;

  // Filtro por favoritos (GRUPO 3)
  if (AppState.showOnlyFavorites) {
    robotsToRender = robotsToRender.filter(robot => robot.favorite);
  }

  // Filtro por tipo (GRUPO 2)
  if (AppState.currentFilter !== 'all') {
    robotsToRender = robotsToRender.filter(robot => robot.type === AppState.currentFilter);
  }

  // Búsqueda (GRUPO 2)
  if (AppState.searchTerm) {
    robotsToRender = robotsToRender.filter(robot => 
      robot.name.toLowerCase().includes(AppState.searchTerm.toLowerCase()) ||
      robot.description.toLowerCase().includes(AppState.searchTerm.toLowerCase())
    );
  }

  // Ordenamiento (GRUPO 3)
  robotsToRender = sortRobots(robotsToRender, AppState.sortBy);

  // Guardar robots filtrados para que otros grupos los usen
  AppState.filteredRobots = robotsToRender;

  // Limpiar contenedor
  container.innerHTML = '';

  // Si no hay robots
  if (robotsToRender.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <p>No se encontraron robots</p>
        <button onclick="resetFilters()" class="btn-secondary">Limpiar filtros</button>
      </div>
    `;
    return;
  }

  // Renderizar cada robot
  robotsToRender.forEach(robot => {
    const card = createRobotCard(robot);
    container.appendChild(card);
  });

  // Actualizar estadísticas (GRUPO 3)
  if (typeof updateStats === 'function') {
    updateStats();
  }
}

/**
 * Crear una card de robot (elemento del DOM)
 * @param {Object} robot - Datos del robot
 * @returns {HTMLElement} - Elemento de la card
 */
function createRobotCard(robot) {
  const card = document.createElement('div');
  card.className = 'robot-card';
  card.dataset.robotId = robot.id;

  const favoriteClass = robot.favorite ? 'favorite' : '';
  const favoriteIcon = robot.favorite ? '❤️' : '🤍';

  card.innerHTML = `
    <div class="robot-image">
      <img src="${getRobotImage(robot.name)}" alt="${robot.name}">
      <button class="favorite-btn ${favoriteClass}" data-id="${robot.id}">
        ${favoriteIcon}
      </button>
    </div>
    <div class="robot-info">
      <h3>${robot.name}</h3>
      <span class="robot-type">${robot.type}</span>
      <p class="robot-year">Año: ${robot.year}</p>
      <p class="robot-description">${robot.description || 'Sin descripción'}</p>
    </div>
    <div class="robot-actions">
      <button class="btn-details" data-id="${robot.id}">Ver detalles</button>
      <button class="btn-edit" data-id="${robot.id}">Editar</button>
      <button class="btn-delete" data-id="${robot.id}">Eliminar</button>
    </div>
  `;

  // Event listeners para los botones (GRUPO 2 y GRUPO 3)
  card.querySelector('.btn-delete').addEventListener('click', () => deleteRobot(robot.id));
  card.querySelector('.btn-edit').addEventListener('click', () => editRobot(robot.id));
  card.querySelector('.btn-details').addEventListener('click', () => showRobotDetails(robot.id));
  card.querySelector('.favorite-btn').addEventListener('click', () => toggleFavorite(robot.id));

  return card;
}

// ============================================
// FUNCIONES CRUD (Create, Read, Update, Delete)
// ============================================

/**
 * Agregar un nuevo robot
 * @param {Object} robotData - Datos del robot
 */
function addRobot(robotData) {
  const newRobot = {
    id: generateId(),
    name: robotData.name,
    type: robotData.type,
    year: parseInt(robotData.year),
    description: robotData.description || '',
    favorite: false,
    created: new Date().toISOString()
  };

  AppState.robots.push(newRobot);
  saveToLocalStorage(AppState.robots);
  renderRobots();
  
  console.log('✅ Robot agregado:', newRobot);
}

/**
 * Editar un robot existente
 * @param {string} id - ID del robot
 */
function editRobot(id) {
  const robot = AppState.robots.find(r => r.id === id);
  
  if (!robot) {
    console.error('❌ Robot no encontrado');
    return;
  }

  // El GRUPO 2 implementará esta función en form.js
  if (typeof openEditModal === 'function') {
    openEditModal(robot);
  } else {
    console.log('ℹ️ Función openEditModal no implementada todavía');
  }
}

/**
 * Actualizar un robot existente
 * @param {string} id - ID del robot
 * @param {Object} newData - Nuevos datos
 */
function updateRobot(id, newData) {
  const index = AppState.robots.findIndex(r => r.id === id);
  
  if (index === -1) {
    console.error('❌ Robot no encontrado');
    return;
  }

  AppState.robots[index] = {
    ...AppState.robots[index],
    name: newData.name,
    type: newData.type,
    year: parseInt(newData.year),
    description: newData.description || ''
  };

  saveToLocalStorage(AppState.robots);
  renderRobots();
  
  console.log('✅ Robot actualizado:', AppState.robots[index]);
}

/**
 * Eliminar un robot
 * @param {string} id - ID del robot
 */
function deleteRobot(id) {
  const robot = AppState.robots.find(r => r.id === id);
  
  if (!robot) {
    console.error('❌ Robot no encontrado');
    return;
  }

  if (confirm(`¿Estás seguro de eliminar a ${robot.name}?`)) {
    AppState.robots = AppState.robots.filter(r => r.id !== id);
    saveToLocalStorage(AppState.robots);
    renderRobots();
    console.log('✅ Robot eliminado:', robot.name);
  }
}

/**
 * Obtener un robot por ID
 * @param {string} id - ID del robot
 * @returns {Object|undefined} - Robot encontrado
 */
function getRobotById(id) {
  return AppState.robots.find(r => r.id === id);
}

// ============================================
// FUNCIONES DE FAVORITOS (GRUPO 3)
// ============================================

/**
 * Toggle favorito de un robot
 * @param {string} id - ID del robot
 */
function toggleFavorite(id) {
  const robot = AppState.robots.find(r => r.id === id);
  
  if (!robot) {
    console.error('❌ Robot no encontrado');
    return;
  }

  robot.favorite = !robot.favorite;
  saveToLocalStorage(AppState.robots);
  renderRobots();
  
  console.log(`${robot.favorite ? '❤️' : '🤍'} Favorito actualizado:`, robot.name);
}

// ============================================
// FUNCIONES DE ORDENAMIENTO (GRUPO 3)
// ============================================

/**
 * Ordenar robots según criterio
 * @param {Array} robots - Array de robots
 * @param {string} criteria - Criterio de ordenamiento
 * @returns {Array} - Array ordenado
 */
function sortRobots(robots, criteria) {
  const sorted = [...robots];

  switch(criteria) {
    case 'name':
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case 'year':
      return sorted.sort((a, b) => b.year - a.year);
    case 'type':
      return sorted.sort((a, b) => a.type.localeCompare(b.type));
    case 'newest':
      return sorted.sort((a, b) => new Date(b.created) - new Date(a.created));
    default:
      return sorted;
  }
}

// ============================================
// FUNCIONES AUXILIARES
// ============================================

/**
 * Generar un ID único
 * @returns {string} - ID único
 */
function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

/**
 * Obtener URL de imagen del robot (RoboHash API)
 * @param {string} name - Nombre del robot
 * @returns {string} - URL de la imagen
 */
function getRobotImage(name) {
  return `${ROBOASH_API}${encodeURIComponent(name)}?set=set1&size=200x200`;
}

/**
 * Resetear todos los filtros
 */
function resetFilters() {
  AppState.currentFilter = 'all';
  AppState.searchTerm = '';
  AppState.showOnlyFavorites = false;
  AppState.sortBy = 'name';
  
  // Limpiar inputs si existen
  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.value = '';
  
  const filterSelect = document.getElementById('filter-select');
  if (filterSelect) filterSelect.value = 'all';
  
  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) sortSelect.value = 'name';
  
  renderRobots();
}

/**
 * Mostrar detalles de un robot (GRUPO 3)
 * @param {string} id - ID del robot
 */
function showRobotDetails(id) {
  // El GRUPO 3 implementará esta función en detailsModal.js
  if (typeof openDetailsModal === 'function') {
    openDetailsModal(id);
  } else {
    const robot = getRobotById(id);
    alert(`Detalles de ${robot.name}\n\nTipo: ${robot.type}\nAño: ${robot.year}\nDescripción: ${robot.description}`);
  }
}

// ============================================
// LOG DE INICIO
// ============================================

console.log('✅ app.js cargado correctamente');
console.log('📦 Funciones disponibles:', {
  localStorage: 'saveToLocalStorage, loadFromLocalStorage',
  crud: 'addRobot, updateRobot, deleteRobot, editRobot',
  render: 'renderRobots, createRobotCard',
  utils: 'generateId, getRobotImage, resetFilters',
  state: 'AppState'
});