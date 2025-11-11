// Technologies data with icons
const technologies = [
    { 
        name: "JavaScript", 
        icon: "devicon-javascript-plain",
        color: "text-yellow-400"
    },
    { 
        name: "TypeScript", 
        icon: "devicon-typescript-plain",
        color: "text-blue-400"
    },
    { 
        name: "Node.js", 
        icon: "devicon-nodejs-plain",
        color: "text-green-400"
    },
    { 
        name: "HTML5", 
        icon: "devicon-html5-plain",
        color: "text-orange-400"
    },
    { 
        name: "CSS3", 
        icon: "devicon-css3-plain",
        color: "text-blue-400"
    },
    { 
        name: "Figma", 
        icon: "devicon-figma-plain",
        color: "text-purple-400"
    },
    { 
        name: "Python", 
        icon: "devicon-python-plain",
        color: "text-blue-300"
    },
    { 
        name: "MongoDB", 
        icon: "devicon-mongodb-plain",
        color: "text-green-400"
    },
    { 
        name: "Tailwind", 
        icon: "devicon-tailwindcss-plain",
        color: "text-cyan-300"
    },
    { 
        name: "Git", 
        icon: "devicon-git-plain",
        color: "text-orange-400"
    },
    { 
        name: "SASS", 
        icon: "devicon-sass-original",
        color: "text-pink-400"
    },
    { 
        name: "Docker", 
        icon: "devicon-docker-plain",
        color: "text-blue-400"
    },
];

// Initialize tech stack with icons
function initializeTechStack() {
    const techGrid = document.querySelector('.tech-grid');
    
    technologies.forEach(tech => {
        const techCard = document.createElement('div');
        techCard.className = 'tech-card group';
        techCard.setAttribute('data-tech', tech.name);
        
        techCard.innerHTML = `
            <div class="tech-icon-container">
                <i class="${tech.icon} ${tech.color} text-5xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"></i>
            </div>
            <span class="tech-label mt-4">${tech.name}</span>
        `;
        
        techGrid.appendChild(techCard);
    });
}

// Enhanced cursor follower
function createCursorFollower() {
    const cursor = document.createElement('div');
    cursor.className = 'cursor-follower';
    document.body.appendChild(cursor);

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor() {
        // Smooth follow with easing
        cursorX += (mouseX - cursorX) * 0.1;
        cursorY += (mouseY - cursorY) * 0.1;
        
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        
        requestAnimationFrame(animateCursor);
    }

    animateCursor();

    // Hide cursor when not moving
    let timeout;
    document.addEventListener('mousemove', () => {
        cursor.style.opacity = '1';
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            cursor.style.opacity = '0';
        }, 1000);
    });

    // Scale effect on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .tech-card');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
        });
    });
}

// Scroll animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// Smooth scrolling for navigation
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeTechStack();
    createCursorFollower();
    initializeScrollAnimations();
    initializeSmoothScroll();
    
    console.log('Portfolio loaded successfully! 🚀');
});

// Add some interactive effects
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to project cards
    const projectCards = document.querySelectorAll('.bg-gray-900\\/50');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add click effects to tech cards
    const techCards = document.querySelectorAll('.tech-card');
    techCards.forEach(card => {
        card.addEventListener('click', function() {
            const tech = this.getAttribute('data-tech');
            console.log(`Clicked on: ${tech}`);
            // Aquí puedes agregar más interactividad, como modals o navegación
        });ß
    });
});