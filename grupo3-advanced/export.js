// ============================================
// GRUPO 3: EXPORT.JS
// ============================================
//
// TAREA: Exportar datos a JSON
//
// REQUISITOS:
// 1. Botón para exportar
// 2. Descargar archivo JSON con todos los robots
// 3. Incluir fecha de exportación
//
// TIPS:
// - Usá document.getElementById('export-container')
// - Usá AppState.robots para obtener los datos
// - Creá un Blob y usa URL.createObjectURL()
// - Los estilos van en export.css
//
// EJEMPLO:
// <button id="export-btn" class="btn-primary">
//   📥 Exportar JSON
// </button>
//
// exportBtn.addEventListener('click', () => {
//   const data = {
//     exportDate: new Date().toISOString(),
//     totalRobots: AppState.robots.length,
//     robots: AppState.robots
//   };
//   
//   const json = JSON.stringify(data, null, 2);
//   const blob = new Blob([json], { type: 'application/json' });
//   const url = URL.createObjectURL(blob);
//   
//   const a = document.createElement('a');
//   a.href = url;
//   a.download = `robohub-export-${Date.now()}.json`;
//   a.click();
//   
//   URL.revokeObjectURL(url);
// });
// ============================================

// Tu código acá...

const exportBtn = document.getElementById("export-btn");


exportBtn.addEventListener('click', () => {
  const data = {
    exportDate: new Date().toISOString(),
    totalRobots: AppState.robots.length,
    robots: AppState.robots
  };
  
  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement('a');
  a.href = url;
  a.download = `robohub-export-${Date.now()}.json`;
  a.click();
  
  URL.revokeObjectURL(url);
});