// ============================================
// GRUPO 3: DETAILS_MODAL.JS
// ============================================
//
// TAREA: Crear modal con detalles completos del robot
//
// REQUISITOS:
// 1. Modal que muestra todos los datos del robot
// 2. Imagen grande del robot
// 3. Botón para cerrar
// 4. Diseño atractivo
//
// TIPS:
// - El contenedor está en index.html (id="details-modal")
// - Usá getRobotById(id) para obtener los datos
// - Copiá la estructura del robot-modal
// - Los estilos van en modal.css
//
// EJEMPLO:
// function openDetailsModal(id) {
//   const robot = getRobotById(id);
//   const modal = document.getElementById('details-modal');
//   
//   modal.innerHTML = `
//     <div class="modal-content">
//       <span class="modal-close">&times;</span>
//       <img src="${getRobotImage(robot.name)}" alt="${robot.name}">
//       <h2>${robot.name}</h2>
//       <p><strong>Tipo:</strong> ${robot.type}</p>
//       <p><strong>Año:</strong> ${robot.year}</p>
//       <p><strong>Descripción:</strong> ${robot.description}</p>
//       <p><strong>Favorito:</strong> ${robot.favorite ? '❤️ Sí' : '🤍 No'}</p>
//     </div>
//   `;
//   
//   modal.classList.add('active');
//   
//   // Cerrar modal
//   modal.querySelector('.modal-close').addEventListener('click', () => {
//     modal.classList.remove('active');
//   });
// }
// ============================================

// Tu código acá...