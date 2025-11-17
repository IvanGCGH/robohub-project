// ============================================
// GRUPO 3: STATS.JS
// ============================================
//
// TAREA: Mostrar estadísticas de los robots
//
// REQUISITOS:
// 1. Total de robots
// 2. Cantidad por tipo
// 3. Cantidad de favoritos
// 4. Actualizar en tiempo real
//
// TIPS:
// - Usá document.getElementById('stats-panel')
// - Podés usar AppState.robots y AppState.filteredRobots
// - Creá una función updateStats() que se llama desde app.js
// - Los estilos van en stats.css
//
// EJEMPLO:
// function updateStats() {
//   const total = AppState.robots.length;
//   const favorites = AppState.robots.filter(r => r.favorite).length;
//   const tipos = {};
//   AppState.robots.forEach(r => {
//     tipos[r.type] = (tipos[r.type] || 0) + 1;
//   });
//
//   const html = `
//     <div class="stat-card">
//       <h3>${total}</h3>
//       <p>Total Robots</p>
//     </div>
//     <div class="stat-card">
//       <h3>${favorites}</h3>
//       <p>❤️ Favoritos</p>
//     </div>
//     ...
//   `;
//   document.getElementById('stats-panel').innerHTML = html;
// }
// ============================================

// Tu código acá...
// Actualizar estadísticas (GRUPO 3)
  if (typeof updateStats === 'function') {
    updateStats();
  }


function updateStats() {
  const total = AppState.robots.length;
  const favorites = AppState.robots.filter(r => r.favorite).length;
  const tipos = {};
  AppState.robots.forEach(r => {
    tipos[r.type] = (tipos[r.type] || 0) + 1;
  });
    let tiposHtml = '';
    const html = `
      <div class="stat-card">
        <h3>${total}</h3>
        <p>Total Robots</p>
      </div>
      <div class="stat-card">
        <h3>${favorites}</h3>
        <p>❤️ Favoritos</p>
      </div>
      <div class="stat-card stat-types">
        <h4>Cantidad por tipo</h4>
        ${tiposHtml}
      </div>
    `;
const panel = document.getElementById('stats-panel');
    if (panel) panel.innerHTML = html;
  document.getElementById('stats-panel').innerHTML = html;
}

  // Exponer función para que app.js la llame y registrar listener para actualizaciones en tiempo real
  window.updateStats = updateStats;
  document.addEventListener('appstate:updated', updateStats);

  // Ejecutar al cargar el script / DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateStats);
  } else {
    updateStats();
  }
