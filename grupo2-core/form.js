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