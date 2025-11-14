// ============================================
// INIT.JS - Inicialización de la aplicación
// ============================================
// Este archivo se ejecuta al final y coordina el inicio de la app

document.addEventListener('DOMContentLoaded', function() {
  console.log('🚀 Inicializando RoboHub...');

  // 1. Cargar datos desde localStorage
  AppState.robots = loadFromLocalStorage();
  console.log(`📦 ${AppState.robots.length} robots cargados`);

  // 2. Renderizar la lista inicial de robots
  renderRobots();
  console.log('✅ Robots renderizados');

  // 3. Inicializar el modal del formulario
  initModal();
  console.log('✅ Modal inicializado');

  // 4. Mensaje de bienvenida
  console.log('✨ RoboHub está listo!');
  console.log('👥 Proyecto colaborativo - Grupos:');
  console.log('   📱 Grupo 1: Frontend/Presentación');
  console.log('   ⚙️  Grupo 2: Core Functionality');
  console.log('   🚀 Grupo 3: Advanced Features');
});

/**
 * Inicializar el modal del formulario
 */
function initModal() {
  const modal = document.getElementById('robot-modal');
  const closeBtn = modal.querySelector('.modal-close');
  const cancelBtn = document.getElementById('modal-cancel');
  const form = document.getElementById('robot-form');

  // Cerrar modal al hacer click en la X
  closeBtn.addEventListener('click', closeModal);

  // Cerrar modal al hacer click en Cancelar
  cancelBtn.addEventListener('click', closeModal);

  // Cerrar modal al hacer click fuera del contenido
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Cerrar modal con la tecla ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  console.log('✅ Event listeners del modal configurados');
}

/**
 * Cerrar el modal
 */
function closeModal() {
  const modal = document.getElementById('robot-modal');
  modal.classList.remove('active');
  
  // Limpiar formulario
  const form = document.getElementById('robot-form');
  form.reset();
  
  // Resetear título
  document.getElementById('modal-title').textContent = 'Agregar Robot';
}


//INICIALIZADOR FILTROS (setupRobotFilters();)
 
document.addEventListener('DOMContentLoaded', () => {
    // cargar datos 
    if (AppState.robots.length === 0) {
        AppState.robots = loadFromLocalStorage();
    }
    
    // ejecutar la función para montar el filtro
    robotFilters();
    
    // renderizar la vista inicial completa 
    renderRobots(); 

    console.log('🗃️ Funcion de filtro operativa');
    
});