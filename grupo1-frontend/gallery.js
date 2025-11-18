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
let currentIndex = 0;

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    renderFeaturedGalleryGrid();
  }, 100);
});

function renderFeaturedGalleryCarousel() {
  // Primero renderizo el carousel para acceder a los elementos
  renderCarousel();

  // Traigo el riel, el array de items y los botones
  const carouselTrack = document.querySelector(".carousel-track");
  const items = document.querySelectorAll(".carousel-item");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  const totalItems = items.length;

  // Esta función permite mover el riel de item a item
  const updateCarousel = () => {
    // Hago un translateX para mover el track al siguiente item en el carousel, en este caso multiplico el indice por 100 para moverlo, -200% y -300% en el eje X y mostrar los items "ocultos"
    carouselTrack.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Esto permite deshabilitar el boton si se llegó al extremo
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === totalItems - 1;
  };

  // Agrego los listeners a los botones
  prevBtn.addEventListener("click", () => {
    // Si el indice es mayor a 0, entonces significa que todavía hay ítems a la izquierda
    if (currentIndex > 0) {
      // Resto el indice y llamo a "updateCarousel" que utilizará el indice actual para calcular el translateX
      currentIndex--;
      updateCarousel();
    }
  });

  nextBtn.addEventListener("click", () => {
    // Si el indice es menor a la cantidad de items, entonces...
    if (currentIndex < totalItems - 1) {
      // Aumento el indice y llamo a "updateCarousel" para que utilice el indice actual para calcular el translateX
      currentIndex++;
      updateCarousel();
    }
  });
}

// Cree esta función para para modularizar un poco el trabajo, además, me permite cambiar de una forma de renderizado a otra rápidamente.
function renderCarousel() {
  // Obtengo los 3 primeros robots
  const featuredRobots = AppState.robots.slice(0, 3);

  const galleryContainer = document.createElement("div");
  galleryContainer.classList.add("carousel-wrapper");

  // Estructura base para generar el carousel
  galleryContainer.innerHTML = `
    <div class="gallery-header">
      <h1 class="gallery-title">🌟Robots destacados</h1>
      <h4 class="gallery-subtitle">Los primeros robots de nuestra colleción</h4>
    </div>
    <button class="carousel-arrow prev-btn">❮</button>
    <div class="carousel-window">
        <div class="carousel-track">
            </div>
    </div>
    <button class="carousel-arrow next-btn">❯</button>
  `;

  featuredGallery.appendChild(galleryContainer);

  // Seleccionamos el track RECIÉN creado para inyectarle las cards
  const carouselTrack = galleryContainer.querySelector(".carousel-track");

  featuredRobots.forEach((robot) => {
    // Renderizo cada card y la guardo en una variable
    let robotGalleryCardItem = renderGalleryCard(robot);

    // Le agregamos la clase carousel-item
    robotGalleryCardItem.classList.add("carousel-item");

    carouselTrack.appendChild(robotGalleryCardItem);

    // Genero el modal para cada card
    let robotGalleryModal = renderGalleryModal(robot);

    featuredGallery.appendChild(robotGalleryModal);

    // Añado el click event a cada boton del overlay de las cartas
    robotGalleryCardItem
      .querySelector(".gallery-btn")
      .addEventListener("click", () => {
        robotGalleryModal.classList.add("active"); // O la clase que uses para mostrar
        robotGalleryModal.style.opacity = "1"; // Asegurando visibilidad si usas CSS puro
        robotGalleryModal.style.pointerEvents = "all";
      });

    // Ahora agrego los listeners al boton del overlay
    robotGalleryCardItem
      .querySelector(".gallery-btn")
      .addEventListener("click", () => {
        robotGalleryModal.classList.add("active");
      });

    // Agrego el listener al boton "close" del modal
    robotGalleryModal
      .querySelector(".details-modal-close")
      .addEventListener("click", () => {
        robotGalleryModal.classList.remove("active");
      });
  });
}

function renderFeaturedGalleryGrid() {
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
      </div>`;

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
    // Renderizo cada card
    let robotGalleryCard = renderGalleryCard(robot);

    // Las inserto al HTML, mas especificamente al gallery-grid
    galleryGrid.appendChild(robotGalleryCard);

    // Creo que en lugar de renderizar 3 modales, se podría renderizar uno
    // y cambiar los valores de forma dinámica según el botón que se clickee
    let robotGalleryModal = renderGalleryModal(robot);

    // Ahora agrego los listeners al boton del overlay
    robotGalleryCard
      .querySelector(".gallery-btn")
      .addEventListener("click", () => {
        robotGalleryModal.classList.add("active");
      });

    // Agrego el listener al boton "close" del modal
    robotGalleryModal
      .querySelector(".details-modal-close")
      .addEventListener("click", () => {
        robotGalleryModal.classList.remove("active");
      });
  });
}

function renderGalleryCard(robot) {
  // Creo el div de la card del robot
  let card = document.createElement("div");
  card.classList.add("gallery-card");

  // La genero dinamicamente con la informacion de cada robot
  card.innerHTML = `
    <div class="gallery-card-image">
      <img src="${getRobotImage(robot.name)}" alt="${robot.name}">
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

  return card;
}

function renderGalleryModal(robot) {
  let modal = document.createElement("div");
  modal.classList.add("details-modal", "modal");

  modal.innerHTML = `<div class="details-modal-content">

          <button class="details-modal-close">X</button>

          <div class="details-modal-body">
            <div class="details-image-section">
                <img src=${getRobotImage(robot.name)} alt="${
    robot.name
  }" class="details-image">
              <button class="details-favorite-btn">${
                robot.favorite === true ? "💓Favorito" : "🤍Marcar Favorito"
              }</button>
            </div>
            <div class="details-info-section">

              <h1 class="details-title">${robot.name}</h1>
              <span class="details-type">${robot.type}</span>

              <div class="details-info-grid">

                <div class="details-info-item">
                  <label for="info-value" class="info-label">📆AÑO DE CREACIÓN</label>
                  <p class="info-value">${robot.year}</p>
                </div>
                <div class="details-info-item">
                  <label for="info-value" class="info-label">🆔ID ÚNICO</label>
                  <p class="info-value">${robot.id}</p>
                </div>
                <div class="details-info-item">
                  <label for="info-value" class="info-label">⏰FECHA DE CREACIÓN</label>
                  <p class="info-value">${robot.created
                    .substring(0, 9)
                    .split("-")
                    .reverse()
                    .join("/")}</p>
                </div>
                <div class="details-info-item">
                  <label for="info-value" class="info-label">❤️ESTADO FAVORITO</label>
                  <p class="info-value">${
                    robot.favorite === true ? "Sí💓" : "No❌"
                  }</p>
                </div>
              </div>

              <div class="details-description">
                <h3>📚Descripción</h3>
                <p>${robot.description}</p>
              </div>

              <div class="details-actions">
                <button class="btn-primary">✏️Editar</button>
                <button class="btn-delete btn-danger">🗑️Eliminar</button>
              </div>

            </div>


          </div>

        </div>`;

  return featuredGallery.appendChild(modal);
}
