// ============================================
// GRUPO 2: FORM.JS
// ============================================
//
// TAREA: Manejar el formulario de agregar/editar robots
//
// REQUISITOS:
// 1. Botón que abre el modal
// 2. Manejar el submit del formulario
// 3. Validar los datos
// 4. Agregar o actualizar robot según corresponda
//
// TIPS:
// - El modal ya está en index.html (id="robot-modal")
// - Usá las funciones: addRobot(data) y updateRobot(id, data)
// - Para abrir: modal.classList.add('active')
// - Para cerrar: modal.classList.remove('active')
//
// EJEMPLO:
// const openAddModal = () => {
//   const modal = document.getElementById('robot-modal');
//   document.getElementById('modal-title').textContent = 'Agregar Robot';
//   modal.classList.add('active');
// };
//
// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const formData = new FormData(form);
//   const data = Object.fromEntries(formData);
//   addRobot(data);
//   closeModal();
// });
// ============================================

// Tu código acá...

// ===============================
// CREAR Y MOSTRAR EL BOTÓN "AGREGAR ROBOT"
// ===============================

// Buscar el contenedor donde debe ir el botón
const addRobotContainer = document.getElementById("add-robot-container");

// Crear el botón con su estructura e ícono
const addButton = document.createElement("button");
addButton.id = "abrir-modal-btn";
addButton.classList.add("btn-add-robot");
addButton.innerHTML = `<span class="btn-icon">➕</span>Agregar Robot`;

// Insertar el botón en el contenedor
addRobotContainer.appendChild(addButton);

// MANEJO DEL MODAL DE ROBOTS
const modal = document.getElementById("robot-modal");
const cerrarBtn = document.querySelector(".modal-close");
const cancelarBtn = document.getElementById("modal-cancel");
const form = document.getElementById("robot-form");

// Abrir modal
addButton.addEventListener("click", () => {
  form.reset(); // limpia el formulario al abrir
  modal.classList.add("active"); // muestra modal centrado
});

// Cerrar con la X
cerrarBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

// Cerrar con Cancelar
cancelarBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

// Cerrar al hacer clic fuera del modal
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.remove("active");
  }
});

// ===============================
// MANEJO DEL SUBMIT DEL FORMULARIO
// ===============================

// Deshabilitar la validación nativa
form.setAttribute("novalidate", true);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  // Validación manual
  if (!data.name || !data.type || !data.year) {
    alert("Por favor completa todos los campos obligatorios."); // mensaje propio
    return;
  }

  addRobot(data);
  alert("Robot creado con éxito.");
  closeModal();
});