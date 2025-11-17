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

// ============================================
// GRUPO 3: DETAILS_MODAL.JS
// ============================================
// Modal para ver los detalles de un robot, incluye:
// - Imagen, info detallada, favorito, botones
// - Cerrar modal
// - Linkeo con las funciones globales de favoritos/editar (con comentarios)

// Función principal que se llama desde app.js -> showRobotDetails(id)
function openDetailsModal(id) {
  const robot = getRobotById(id);
  const modal = document.getElementById("details-modal");

  if (!robot || !modal) {
    console.error("❌ Error al cargar el modal de detalles");
    return;
  }

  modal.innerHTML = `
    <div class="details-modal-content">
      <button class="details-modal-close">&times;</button>

      <div class="details-modal-body">

        <!-- SECCIÓN IZQUIERDA (Imagen + favorito) -->
        <div class="details-image-section">
          <img src="${getRobotImage(robot.name)}" alt="${robot.name}" class="details-image">

          <button class="details-favorite-btn ${robot.favorite ? 'active' : ''}" data-id="${robot.id}">
            ${robot.favorite ? "❤️ Favorito" : "🤍 Marcar como favorito"}
          </button>
        </div>

        <!-- SECCIÓN DERECHA (Info, descripción, acciones) -->
        <div class="details-info-section">

          <h2 class="details-title">${robot.name}</h2>
          <span class="details-type">${robot.type}</span>

          <div class="details-info-grid">
            <div class="details-info-item">
              <span class="info-label">Año</span>
              <span class="info-value">${robot.year}</span>
            </div>
            <div class="details-info-item">
              <span class="info-label">Favorito</span>
              <span class="info-value">${robot.favorite ? "Sí ❤️" : "No"}</span>
            </div>
            <div class="details-info-item">
              <span class="info-label">Fecha creación</span>
              <span class="info-value">${new Date(robot.created).toLocaleDateString()}</span>
            </div>
            <div class="details-info-item">
              <span class="info-label">ID</span>
              <span class="info-value">${robot.id}</span>
            </div>
          </div>

          <div class="details-description">
            <h3>Descripción</h3>
            <p>${robot.description || "No hay descripción disponible."}</p>
          </div>

          <div class="details-actions">
            <button class="btn-secondary" id="edit-btn">Editar Robot</button>
            <button class="btn-danger" id="delete-btn">Eliminar Robot</button>
          </div>

        </div>
      </div>
    </div>
  `;

  // Mostrar modal
  modal.classList.add("active");

  // Cerrar modal
  modal.querySelector(".details-modal-close").addEventListener("click", closeDetailsModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeDetailsModal();
  });

  // Botón favorito
  const favoriteBtn = modal.querySelector(".details-favorite-btn");
  favoriteBtn.addEventListener("click", () => {
    // PASAR LINK A FUNCIÓN DE FAVORITOS DEL GRUPO 2
    toggleFavorite(robot.id);
    closeDetailsModal();
  });

  // Botón editar
  modal.querySelector("#edit-btn").addEventListener("click", () => {
    // PASAR LINK A FUNCIÓN DE EDITAR DEL GRUPO 2
    editRobot(robot.id); // ya implementado en app.js
    closeDetailsModal();
  });

  // Botón eliminar
  modal.querySelector("#delete-btn").addEventListener("click", () => {
    // PASAR LINK A FUNCIÓN DE ELIMINAR DEL GRUPO 2
    deleteRobot(robot.id);
    closeDetailsModal();
  });
}

function closeDetailsModal() {
  const modal = document.getElementById("details-modal");
  modal.classList.remove("active");
  modal.innerHTML = ""; // Limpia contenido
}

console.log("📌 detailsModal.js cargado correctamente");








