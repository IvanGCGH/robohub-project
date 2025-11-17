# 🤖 RoboHub - Portal de Robots

## 📋 Descripción del Proyecto

RoboHub es una aplicación web colaborativa para gestionar un catálogo de robots. Este proyecto está diseñado para trabajar en equipos usando Git y GitHub, donde cada grupo se enfoca en diferentes aspectos de la aplicación.

---

## 👥 Estructura de Grupos

### **GRUPO 1: Frontend/Presentación** 📱
**Responsabilidad:** Crear la interfaz visual y de presentación

**Tareas:**
- ✅ **Header** (`header.js` + `header.css`): Logo, navegación, menú
- ✅ **Footer** (`footer.js` + `footer.css`): Copyright, redes sociales, info de contacto
- ✅ **Hero Section** (`hero.js` + `hero.css`): Banner principal con call-to-action
- ✅ **About Section** (`about.js` + `about.css`): Descripción del proyecto y características
- ✅ **Featured Gallery** (`gallery.js` + `gallery.css`): Galería de robots destacados

**Carpeta:** `grupo1-frontend/`

---

### **GRUPO 2: Core Functionality** ⚙️
**Responsabilidad:** Funcionalidad principal de la aplicación

**Tareas:**
- ✅ **Formulario** (`form.js` + `form.css`): Modal para agregar/editar robots
- ✅ **Búsqueda** (`search.js` + `search.css`): Barra de búsqueda en tiempo real
- ✅ **Filtros** (`filters.js` + `filters.css`): Filtrar por tipo de robot
- ✅ **CRUD Operations** (`crud.js` + `crud.css`): Crear, editar, eliminar (opcional, ya está en app.js)
- ✅ **Lista de robots** (`list.js` + `list.css`): Renderizado de cards (opcional, ya está en app.js)

**Carpeta:** `grupo2-core/`

---

### **GRUPO 3: Advanced Features** 🚀
**Responsabilidad:** Características avanzadas y extras

**Tareas:**
- ✅ **Estadísticas** (`stats.js` + `stats.css`): Panel con métricas de robots
- ✅ **Favoritos** (`favorites.js` + `favorites.css`): Toggle para mostrar solo favoritos
- ✅ **Ordenamiento** (`sorting.js` + `sorting.css`): Ordenar por nombre, año, tipo, etc.
- ✅ **Modal de Detalles** (`detailsModal.js` + `modal.css`): Ver información completa del robot
- ✅ **Exportar JSON** (`export.js` + `export.css`): Descargar datos en formato JSON

**Carpeta:** `grupo3-advanced/`

---

## 🛠️ Archivos Compartidos (NO MODIFICAR)

Estos archivos son la base del proyecto y **NO deben ser modificados** por ningún grupo sin consultar al instructor:

- `index.html` - Estructura principal
- `app.js` - Funciones compartidas (renderizar, CRUD, localStorage)
- `styles/global.css` - Estilos globales y del modal
- `init.js` - Inicialización de la app

---

## 🚀 Cómo Empezar

### 1. Clonar el Repositorio

Cada integrante debe clonar el repositorio en su computadora:

```bash
git clone [URL-DEL-REPOSITORIO]
cd robohub-project
```

### 2. Verificar la Rama Principal

Asegúrate de estar en la rama `main`:

```bash
git branch
# Debe mostrar: * main
```

### 3. Crear la rama de grupo

Cada grupo debe crear su propia rama:

```bash
# Formato: grupo-nombre
# Ejemplos:
git checkout -b grupo1
git checkout -b grupo2
git checkout -b grupo3
```

### 4. Trabajar en Tu Código

- Abre solo los archivos de TU GRUPO
- No modifiques archivos de otros grupos
- Guarda tus cambios frecuentemente

### 5. Hacer Commits

```bash
# Ver qué archivos cambiaron
git status

# Agregar tus cambios
git add .

# Hacer commit con mensaje descriptivo
git commit -m "Grupo 1: Implementado header con navegación"
```

### 6. Subir Tus Cambios

```bash
# Primera vez
git push -u origin [nombre-de-tu-rama]

# Siguientes veces
git push
```

---

## 🔄 Workflow de Git

### Regla de Oro: **1 Grupo = 1 Carpeta = 0 Conflictos**

Cada grupo trabaja en su propia carpeta, por lo que **NO deberían tener conflictos**.

### Pasos para Integrar Cambios

1. **Cada integrante trabaja en su rama personal**
2. **Hace commits y push regularmente**
3. **El líder del grupo integra los cambios:**

```bash
# Volver a main
git checkout main

# Actualizar main
git pull origin main

# Subir a GitHub
git push origin main
```

4. **Los demás actualizan su rama main:**

```bash
git checkout main
git pull origin main
git checkout [tu-rama]
```

---

## 📝 Convenciones de Commits

Usa mensajes claros y descriptivos:

```bash
# ✅ Buenos commits
git commit -m "Grupo 1: Header completado con logo y navegación"
git commit -m "Grupo 2: Búsqueda en tiempo real funcionando"
git commit -m "Grupo 3: Estadísticas mostrando total y favoritos"

# ❌ Malos commits
git commit -m "cambios"
git commit -m "fix"
git commit -m "update"
```

---

## 🎯 Checklist de Tareas

### GRUPO 1: Frontend/Presentación
- [ ] Header con logo y navegación
- [ ] Footer con copyright y redes sociales
- [ ] Hero section con título y call-to-action
- [ ] About section con descripción y características
- [ ] Galería de robots destacados

### GRUPO 2: Core Functionality
- [ ] Botón para abrir modal de agregar robot
- [ ] Formulario de agregar/editar funcionando
- [ ] Barra de búsqueda en tiempo real
- [ ] Filtros por tipo de robot
- [ ] Integración con localStorage

### GRUPO 3: Advanced Features
- [ ] Panel de estadísticas actualizado
- [ ] Toggle de favoritos funcionando
- [ ] Ordenamiento por diferentes criterios
- [ ] Modal de detalles completo
- [ ] Exportar a JSON funcionando

---

## 📚 Recursos Útiles

### Funciones Disponibles en `app.js`

```javascript
// CRUD
addRobot(data)           // Agregar nuevo robot
updateRobot(id, data)    // Actualizar robot existente
deleteRobot(id)          // Eliminar robot
getRobotById(id)         // Obtener robot por ID

// Renderizado
renderRobots()           // Re-renderizar toda la lista
createRobotCard(robot)   // Crear una card de robot

// Utilidades
generateId()             // Generar ID único
getRobotImage(name)      // Obtener URL de imagen del robot
resetFilters()           // Limpiar todos los filtros
toggleFavorite(id)       // Marcar/desmarcar favorito
sortRobots(robots, criteria) // Ordenar robots

// LocalStorage
saveToLocalStorage(robots)   // Guardar en localStorage
loadFromLocalStorage()       // Cargar desde localStorage

// Estado Global
AppState.robots          // Array de todos los robots
AppState.filteredRobots  // Robots después de filtros
AppState.currentFilter   // Filtro actual ('all', 'Humanoide', etc.)
AppState.searchTerm      // Término de búsqueda actual
AppState.sortBy          // Criterio de ordenamiento
AppState.showOnlyFavorites // Boolean para filtro de favoritos
```

### Colores del Proyecto (Variables CSS)

```css
--primary-color: #001E60;   /* Azul oscuro */
--secondary-color: #0066CC; /* Azul medio */
--accent-color: #00A3E0;    /* Azul claro */
--text-dark: #1a1a1a;       /* Negro */
--text-light: #ffffff;      /* Blanco */
--success: #28a745;         /* Verde */
--danger: #dc3545;          /* Rojo */
--warning: #ffc107;         /* Amarillo */
```

---

## 🎓 Tips para el Éxito

1. **Comuniquen:** Hablen con su grupo constantemente
2. **Commits frecuentes:** No esperen al final para hacer commit
3. **Prueben seguido:** Abran `index.html` en el navegador regularmente
4. **Respeten las carpetas:** Solamente trabajen en la carpeta de su grupo
5. **Consulten dudas:** No se queden atascados, pregunten al instructor

---

## 🏆 Criterios de Evaluación

- ✅ Código limpio y bien comentado
- ✅ Uso correcto de Git (commits, branches, merges)
- ✅ Funcionalidad completa de las tareas asignadas
- ✅ Diseño responsive y atractivo
- ✅ Colaboración efectiva en equipo
- ✅ Integración exitosa con otros grupos

---



https://github.com/user-attachments/assets/470ed159-7cc7-4810-a3f7-367182b00892
