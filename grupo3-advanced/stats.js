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