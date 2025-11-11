// Inicializar el stack panel
function initializeStackPanel() {
    // Los puntos ya están implementados en CSS con gradientes radiales
    // No se necesita JavaScript adicional para el efecto visual básico
    
    // Puedes agregar interacciones adicionales aquí si lo deseas
    const techCards = document.querySelectorAll('.tech-card');
    
    techCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const tech = this.getAttribute('data-tech');
            console.log(`Hovered over: ${tech}`);
            // Aquí puedes agregar más interacciones
        });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeStackPanel();
    createCursorFollower();
    
    // Email protection
    const emailLink = document.querySelector('.email-link');
    if (emailLink) {
        emailLink.setAttribute('href', 'mailto:b.yusupoff001@gmail.com');
    }
});



// Stack technologies data - ACTUALIZADO
const stackTechnologies = [
    "React", "JavaScript", "TypeScript", "Node.js", 
    "HTML/CSS", "Figma", "Python", "MongoDB"
];

// Initialize dot matrix
function initializeDotMatrix() {
    const techItems = document.querySelectorAll('.tech-item');
    
    techItems.forEach(item => {
        const dotMatrix = item.querySelector('.dot-matrix');
        // Limpiar cualquier contenido existente
        dotMatrix.innerHTML = '';
        
        // Crear 16 puntos (4x4 grid)
        for (let i = 0; i < 16; i++) {
            const dot = document.createElement('div');
            dot.className = 'dot';
            dotMatrix.appendChild(dot);
        }
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeDotMatrix();
    createCursorFollower();
    
    // Email protection
    const emailLink = document.querySelector('.email-link');
    if (emailLink) {
        emailLink.setAttribute('href', 'mailto:b.yusupoff001@gmail.com');
    }
});



// Initialize stack items
function initializeStack() {
    const stackContainer = document.querySelector('.stack-items');
    
    stackTechnologies.forEach(tech => {
        const stackItem = document.createElement('div');
        stackItem.className = 'stack-item';
        stackItem.textContent = tech;
        stackContainer.appendChild(stackItem);
    });
}

// Cursor follower effect
function createCursorFollower() {
    const cursor = document.createElement('div');
    cursor.className = 'cursor-follower';
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Hide cursor when not moving
    let timeout;
    document.addEventListener('mousemove', () => {
        cursor.style.opacity = '1';
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            cursor.style.opacity = '0';
        }, 1000);
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeStack();
    createCursorFollower();
    
    // Email protection
    const emailLink = document.querySelector('.email-link');
    if (emailLink) {
        emailLink.setAttribute('href', 'mailto:b.yusupoff001@gmail.com');
    }
});