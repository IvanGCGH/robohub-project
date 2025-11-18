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
// 4. Tipo de robot más recurrente.
// 5. Actualizar en tiempo real
//
// TIPS:
// - Usá document.getElementById('stats-panel')
// - Podés usar AppState.robots y AppState.filteredRobots
// - Creá una función updateStats() que se llama desde app.js
// - Los estilos van en stats.css
// - Emojis: 🤖, ❤️, 👁️, 🏆, 📅, 💾
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
// Implementación mínima requerida (GRUPO 3): updateStats

// ============================================
// GRUPO 3: STATS.JS
// ============================================

// Esta función debe llamarse desde app.js cada vez que cambia el estado.
// EJ: después de agregar, editar, eliminar, filtrar o hacer favorito.

// ============================================
// GRUPO 3: STATS.JS
// ============================================

function updateStats() {
  const panel = document.getElementById("stats-panel");
  if (!panel) return;

  const robots = AppState.filteredRobots.length > 0
    ? AppState.filteredRobots
    : AppState.robots;

  const total = robots.length;

  // === Favoritos ===
  const favorites = robots.filter(r => r.favorite).length;

  // === Conteo por tipo ===
  const types = {};
  robots.forEach(r => {
    types[r.type] = (types[r.type] || 0) + 1;
  });

  // === Tipo más común ===
  let mostCommonType = "N/A";
  let maxCount = 0;

  Object.entries(types).forEach(([type, count]) => {
    if (count > maxCount) {
      mostCommonType = type;
      maxCount = count;
    }
  });

  // === Año promedio (como antes) ===
  const avgYear = robots.length > 0
    ? Math.round(robots.reduce((acc, r) => acc + (r.year || 0), 0) / robots.length)
    : "N/A";

  // === Última actualización (igual a antes) ===
  const now = new Date();
  const formattedDate =
    `${now.getDate().toString().padStart(2,'0')}/` +
    `${(now.getMonth()+1).toString().padStart(2,'0')}/` +
    `${now.getFullYear()}, ` +
    `${now.getHours().toString().padStart(2,'0')}:` +
    `${now.getMinutes().toString().padStart(2,'0')}:` +
    `${now.getSeconds().toString().padStart(2,'0')}`;

  // === HTML ===
  const statsHTML = `
    <div class="stats-container">

      <div class="stats-header">
        <h3>📊 Estadísticas de Robots</h3>
      </div>

      <div class="stats-grid">

        <div class="stat-card stat-primary">
          <div class="stat-icon">🤖</div>
          <div class="stat-content">
            <div class="stat-value">${total}</div>
            <div class="stat-label">Total de Robots</div>
          </div>
        </div>

        <div class="stat-card stat-success">
          <div class="stat-icon">❤️</div>
          <div class="stat-content">
            <div class="stat-value">${favorites}</div>
            <div class="stat-label">Favoritos</div>
          </div>
        </div>

        <div class="stat-card stat-info">
          <div class="stat-icon">👁️</div>
          <div class="stat-content">
            <div class="stat-value">${Object.keys(types).length}</div>
            <div class="stat-label">Tipos Detectados</div>
          </div>
        </div>

        <div class="stat-card stat-warning">
          <div class="stat-icon">🏆</div>
          <div class="stat-content">
            <div class="stat-value">${mostCommonType}</div>
            <div class="stat-label">Tipo Más Recurrente</div>
          </div>
        </div>

      </div>

      <!-- ============================= -->
      <!-- Breakdowns -->
      <!-- ============================= -->
      <div class="stats-details">

        <h4>📅 Robots por Tipo</h4>

        <div class="type-breakdown">
          ${Object.entries(types).map(([type, count]) => {
            const percent = total > 0 ? Math.round((count / total) * 100) : 0;
            return `
              <div class="type-bar">
                <span class="type-name">${type}</span>
                <div class="type-progress">
                  <div class="type-fill" style="width: ${percent}%">${count}</div>
                </div>
              </div>
            `;
          }).join("")}
        </div>

        <div class="stats-footer">
          <p>📅 Año Promedio: <strong>${avgYear}</strong></p>
          <p>💾 Última actualización: <strong>${formattedDate}</strong></p>
        </div>

      </div>

    </div>
  `;

  panel.innerHTML = statsHTML;
}

window.updateStats = updateStats;