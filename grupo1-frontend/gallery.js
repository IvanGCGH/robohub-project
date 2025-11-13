// ============================================
// GRUPO 1: GALLERY.JS
// ============================================
//
// TAREA: Crear una galería de robots destacados
//
// REQUISITOS:
// 1. Mostrar los primeros 3 robots destacados
// 2. Diseño tipo grid o carrusel
// 3. Título de la sección
//
// TIPS:
// - Usa document.getElementById('featured-gallery')
// - Podés obtener los robots desde: AppState.robots.slice(0, 3)
// - Usá la función getRobotImage(name) para las imágenes
// - Los estilos van en gallery.css
// - Probablemente haya que aplicar un pequeño setTimeout para esperar a que AppState.robots esté cargado
//
// EJEMPLO:
// const featuredRobots = AppState.robots.slice(0, 3);
// const html = featuredRobots.map(robot => `
//   <div class="featured-card">
//     <img src="${getRobotImage(robot.name)}" alt="${robot.name}">
//     <h4>${robot.name}</h4>
//   </div>
// `).join('');
// ============================================

const featuredGallery = document.getElementById("featured-gallery");

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    console.log(AppState);

    renderFeaturedGallery();
  }, 100);
});

function renderFeaturedGallery() {
  // Obtengo los 3 primeros robots del array de robots
  const featuredRobots = AppState.robots.slice(0, 3);

  // Creo un div que va a ser el contenedor general de la galeria
  const galleryContainer = document.createElement("div");
  galleryContainer.classList.add("gallery-container");

  // Agrego la siguiente estructura HTMl al container de la galeria
  galleryContainer.innerHTML = `
        <div class="gallery-header">
          <h1 class="gallery-title">🌟Robots destacados</h1>
          <h4 class="gallery-subtitle">Los primeros robots de nuestra colleción</h4>
        </div>
        <div class="gallery-grid">
        </div>
        <div class="gallery-footer">
          <button class="btn-primary">Ver todos los robots -></button>
        </div>
     `;

  // El div clase "gallery-grid" lo inicializo vacio ya que allí voy a
  // insertar las cards de robots
  // Lo añado al index.HTML
  featuredGallery.appendChild(galleryContainer);

  // Agrego el listener al boton de ver todos los robots para scrollear al view de la lista de robots
  galleryContainer
    .querySelector(".btn-primary")
    .addEventListener("click", () => {
      document
        .getElementById("robots-list")
        .scrollIntoView({ behavior: "smooth" });
    });

  // Traigo el "ancla" del HTML, o sea "gallery-grid"
  const galleryGrid = featuredGallery.querySelector(".gallery-grid");
  featuredRobots.forEach((robot) => {
    // Creo el div de la card del robot
    let robotGalleryCard = document.createElement("div");
    robotGalleryCard.classList.add("gallery-card");

    // La genero dinamicamente con la informacion de cada robot
    robotGalleryCard.innerHTML = `
    <div class="gallery-card-image">
      <img src="${getRobotImage(robot.name)}" alt="${
      robot.name
    }" class="gallery-card-image">
      <div class="gallery-overlay">
        <button class="gallery-btn">Ver más detalles</button>
      </div>
    </div>
    <div class="gallery-card-info">
      <h3>${robot.name}</h3>
      <span class="gallery-type">${robot.type}</span>
      <p class="gallery-year">Año ${robot.year}</p>
      <p class="gallery-favorite">${
        robot.favorite === true ? "💓Favorito" : ""
      }</p>
    </div>`;

    // Los inserto al HTML, mas especificamente al gallery-grid
    galleryGrid.appendChild(robotGalleryCard);

    // Ahora agrego los listeners al boton del overlay
    const galleryOverlayBtn = robotGalleryCard
      .querySelector(".gallery-btn")
      .addEventListener("click", () => {
        // TODO -> Debería abrir un modal con toda la información del robot
      });
  });

  // 1. Traigo los primeros 3 robots guardados
  // 2. Debería renderizar la galeria con esos robots
  // 3. Para renderizarla tendría que inyectar el HTML que necesito para la estructura general
}
