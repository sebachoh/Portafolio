// Technologies data with icons
const technologies = [
    { 
        name: "JavaScript", 
        icon: "devicon-javascript-plain",
        color: "text-yellow-400",
        hex: "#F7DF1E"
    },
    { 
        name: "TypeScript", 
        icon: "devicon-typescript-plain",
        color: "text-blue-400",
        hex: "#3178C6"
    },
    { 
        name: "Node.js", 
        icon: "devicon-nodejs-plain",
        color: "text-green-400",
        hex: "#83CD29"
    },
    { 
        name: "HTML5", 
        icon: "devicon-html5-plain",
        color: "text-orange-400",
        hex: "#E34F26"
    },
    { 
        name: "CSS3", 
        icon: "devicon-css3-plain",
        color: "text-blue-400",
        hex: "#1572B6"
    },
    { 
        name: "Figma", 
        icon: "devicon-figma-plain",
        color: "text-purple-400",
        hex: "#F24E1E"
    },
    { 
        name: "Python", 
        icon: "devicon-python-plain",
        color: "text-blue-300",
        hex: "#3776AB"
    },
    { 
        name: "MongoDB", 
        icon: "devicon-mongodb-plain",
        color: "text-green-400",
        hex: "#47A248"
    },
    { 
        name: "Tailwind", 
        icon: "devicon-tailwindcss-plain",
        color: "text-cyan-300",
        hex: "#06B6D4"
    },
    { 
        name: "Git", 
        icon: "devicon-git-plain",
        color: "text-orange-400",
        hex: "#F05032"
    },
    { 
        name: "SASS", 
        icon: "devicon-sass-original",
        color: "text-pink-400",
        hex: "#CC6699"
    },
    { 
        name: "Docker", 
        icon: "devicon-docker-plain",
        color: "text-blue-400",
        hex: "#2496ED"
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
                <i class="${tech.icon} ${tech.color} text-6xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"></i>
            </div>
        `;

        // Apply per-card hover behavior using the hex color (if provided)
        const iconEl = techCard.querySelector('i');
        if (tech.hex) {
            // set initial icon color to the hex (keeps Tailwind class as fallback)
            iconEl.style.color = tech.hex;

            // On hover, light up the card with a subtle gradient and border using the tech color
            techCard.addEventListener('mouseenter', () => {
                techCard.style.borderColor = tech.hex + '55';
                techCard.style.background = `linear-gradient(135deg, ${tech.hex}22, rgba(255,255,255,0.02))`;
                iconEl.style.filter = 'drop-shadow(0 6px 14px ' + tech.hex + '44)';
            });
            techCard.addEventListener('mouseleave', () => {
                techCard.style.borderColor = '';
                techCard.style.background = '';
                iconEl.style.filter = '';
            });
        }

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

// --- Three.js Globe (polished) -------------------------------------------------
function initThreeGlobe() {
    if (typeof THREE === 'undefined') {
        console.warn('Three.js not loaded');
        return;
    }

    const container = document.getElementById('globe');
    if (!container) return;

    // Scene, camera, renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(0, 0, 3);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    // ensure the canvas scales responsively inside the container
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    // apply grayscale to canvas for a black-and-white globe
    renderer.domElement.style.filter = 'grayscale(100%) contrast(95%)';
    renderer.outputEncoding = THREE.sRGBEncoding;
    container.appendChild(renderer.domElement);

    // Lights
    const ambient = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambient);
    const dir = new THREE.DirectionalLight(0xffffff, 0.8);
    dir.position.set(5, 3, 5);
    scene.add(dir);

    // Loaders with graceful fallback (handles CORS / network failures)
    const loader = new THREE.TextureLoader();
    function loadTexture(url) {
        return new Promise((resolve, reject) => {
            loader.load(url, (tex) => resolve(tex), undefined, () => reject(new Error('Failed to load ' + url)));
        });
    }

    // Attempt to load remote textures; if they fail (e.g., when opened via file:// or blocked), fall back to colored materials
    const texBase = 'https://threejs.org/examples/textures/';
    Promise.allSettled([
        loadTexture(texBase + 'land_ocean_ice_cloud_2048.jpg'),
        loadTexture(texBase + 'earth_specular_2048.jpg'),
        loadTexture(texBase + 'earth_normal_2048.jpg'),
        loadTexture(texBase + 'earth_clouds_2048.png')
    ]).then(results => {
        const [rMap, rSpec, rNorm, rCloud] = results;

        // Earth geometry
        const geometry = new THREE.SphereGeometry(1, 64, 64);

        let earthMaterial;
        if (rMap.status === 'fulfilled') {
            earthMaterial = new THREE.MeshStandardMaterial({
                map: rMap.value,
                normalMap: (rNorm.status === 'fulfilled') ? rNorm.value : null,
                metalness: 0.0,
                roughness: 1.0,
            });
        } else {
            // fallback simple material when textures fail
            earthMaterial = new THREE.MeshPhongMaterial({
                color: 0x2A6F97,
                specular: 0x222222,
                shininess: 5
            });
        }

        const earth = new THREE.Mesh(geometry, earthMaterial);
        scene.add(earth);

        // Clouds (optional)
        if (rCloud.status === 'fulfilled') {
            const cloudGeo = new THREE.SphereGeometry(1.01, 64, 64);
            const cloudMat = new THREE.MeshLambertMaterial({
                map: rCloud.value,
                transparent: true,
                opacity: 0.7,
                depthWrite: false
            });
            const clouds = new THREE.Mesh(cloudGeo, cloudMat);
            scene.add(clouds);
        }

        // Start the animation loop once resources (or fallbacks) are ready
        startAnimationLoop(earth, scene, camera, renderer, container);
    }).catch(err => {
        // If the promise itself fails unexpectedly, create a simple globe so user still sees something
        console.warn('Texture loading failed for globe, using fallback material:', err);
        const geometry = new THREE.SphereGeometry(1, 64, 64);
        const material = new THREE.MeshPhongMaterial({ color: 0x2A6F97, shininess: 5 });
        const earth = new THREE.Mesh(geometry, material);
        scene.add(earth);
        startAnimationLoop(earth, scene, camera, renderer, container);
    });

    // Controls
    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.rotateSpeed = 0.4;
    controls.minDistance = 1.6;
    controls.maxDistance = 6;

    // Animation
    const clock = new THREE.Clock();
    function animate() {
        const delta = clock.getDelta();
        earth.rotation.y += 0.02 * delta * 60 * 0.01; // slow rotation
        clouds.rotation.y += 0.03 * delta * 60 * 0.01;
        controls.update();
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }
    animate();

    // Resize handling
    function onWindowResize() {
        const w = container.clientWidth;
        const h = container.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
    }
    window.addEventListener('resize', onWindowResize);
}

// Separated animation loop so it can be started after textures/fallbacks are ready
function startAnimationLoop(earth, scene, camera, renderer, container) {
    // If clouds were added to scene, animate them by name
    const clouds = scene.children.find(c => c.material && c.material.opacity && c.geometry && c.geometry.type === 'SphereGeometry' && c.scale && c.scale.x > 0);
    const clock = new THREE.Clock();
    function animate() {
        const delta = clock.getDelta();
        if (earth) earth.rotation.y += 0.1 * delta; // gentle rotation
        if (clouds) clouds.rotation.y += 0.12 * delta;
        if (renderer && camera) renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }
    animate();
}

// Initialize globe after DOM content loaded
document.addEventListener('DOMContentLoaded', function() {
    try {
        initThreeGlobe();
    } catch (err) {
        console.error('Globe init failed', err);
    }
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
        });
    });
});