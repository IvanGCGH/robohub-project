// ============================================
// GRUPO 1: HERO.JS
// ============================================
//
// TAREA: Crear la sección hero (banner principal)
//
// REQUISITOS:
// 1. Título principal llamativo
// 2. Subtítulo o descripción breve
// 3. Botón de call-to-action
// 4. Fondo atractivo o imagen
//
// TIPS:
// - Usá document.getElementById('hero-section')
// - El hero debe ser lo primero que vean los usuarios
// - Usa colores del proyecto: var(--primary-color)
// - Los estilos van en hero.css
//
// EJEMPLO DE ESTRUCTURA:
// <div class="hero-content">
//   <h1>Bienvenido a RoboHub</h1>
//   <p>El portal definitivo de robots</p>
//   <button onclick="scrollToRobots()">Ver Robots</button>
// </div>
// ============================================

// seleccionamos el elemento hero-section
const hero = document.getElementById('hero-section')

// creamos el contenido del hero
hero.innerHTML = `
    <div class="hero-content">
        
        <div class="hero-text">
            <h1 class="hero-title">
                Bienvenido a <span class="highlight">RoboHub</span>
            </h1>

            <h2 class="hero-subtitle">El portal definitivo para gestionar tu colección de robots</h2>
        
            <p class="hero-description">
                Explora, crea y administra robots de diferentes tipos. Desde humanoides hasta robots industriales, todo en un solo lugar.
            </p>

            <div class="hero-buttons">
                <a href="#robots-list"><button class="btn-hero-primary">🤖 Ver Robots</button> </a>
                <a href="#about-section"><button class="btn-hero-secondary">📖 Más Información</button></a>   
            </div>

            <div class="hero-stats">
                <div class="hero-stat">
                    <div class="stat-number">0</div>
                    <div class="stat-label">ROBOTS</div>
                </div>

                <div class="hero-stat">
                    <div class="stat-number">5</div>
                    <div class="stat-label">CATEGORÍAS</div>
                </div>

                <div class="hero-stat">
                    <div class="stat-number">0</div>
                    <div class="stat-label">FAVORITOS</div>
                </div>
            </div>
        </div>

        <div class="hero-image">
            <div class="robot-showcase">
                <img scr="https://robohash.org/R2-D2?set=set1&size=200x200" alt="Robo Hub" class="showcase-robot"/>

                <div class="floating-icons">
                    <div class="float-icon" :nth-child(1)>🤖</div>
                    <div class="float-icon" :nth-child(2)>⚙️</div>
                    <div class="float-icon" :nth-child(3)>🚀</div>
                    <div class="float-icon" :nth-child(4)>💡</div>
                </div>
            </div>
        </div>




    </div>


`;


