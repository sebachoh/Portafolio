// Stack technologies data
const stackTechnologies = [
    "React", "JavaScript", "TypeScript", "Node.js", 
    "HTML/CSS", "Figma", "Adobe XD", "Python",
    "MongoDB", "Express", "Git", "Webpack",
    "SASS", "Tailwind", "Next.js", "Firebase"
];

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

    let timeout;
    document.addEventListener('mousemove', () => {
        cursor.style.opacity = '1';
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            cursor.style.opacity = '0';
        }, 1000);
    });
}

// Text animation for name - CORREGIDA
function animateName() {
    const nameElement = document.querySelector('.name');
    const originalText = nameElement.textContent;
    nameElement.innerHTML = ''; // Limpiar contenido
    
    // Crear spans para cada carácter
    for (let i = 0; i < originalText.length; i++) {
        const char = originalText[i];
        const span = document.createElement('span');
        span.textContent = char === ' ' ? ' ' : char;
        span.className = 'char-animate';
        span.style.animationDelay = `${i * 0.05}s`; // Más rápido
        nameElement.appendChild(span);
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeStack();
    createCursorFollower();
    
    // Pequeño delay para asegurar que el CSS está cargado
    setTimeout(() => {
        animateName();
    }, 100);
    
    // Email protection
    const emailLink = document.querySelector('.email-link');
    if (emailLink) {
        emailLink.setAttribute('href', 'mailto:b.yusupoff001@gmail.com');
    }
});