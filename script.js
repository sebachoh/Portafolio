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