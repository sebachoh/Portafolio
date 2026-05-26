// 7 Projects rich data for the portfolio (Infra, Cloud, Cyber focused)
// 7 Real Projects data for the portfolio (aligned with your experiences)
const projectsData = [
    {
        id: "metaverse-5g",
        title: "Visualisation Flux Métavers 5G",
        subtitle: "Visualisation de flux métavers portés par un réseau 5G (04/26 - 08/26)",
        shortDescription: "Conception et développement d'une application innovante pour le rendu 3D et la visualisation en temps réel de flux métavers complexes, hautement optimisée pour les réseaux 5G à ultra-faible latence.",
        fullDescription: "Ce projet explore les limites du rendu 3D et de la transmission de données massives en temps réel. Il s'agit de développer des applications capables de décoder, de traiter et d'afficher des flux volumétriques complexes issus d'environnements métavers distribués, en tirant pleinement parti de la bande passante élevée et de la faible latence des infrastructures 5G.",
        image: "/assets/img/project-items/cloud_migration_iac.png",
        stack: ["5G", "Three.js", "WebRTC", "C++", "Réseau"],
        demoUrl: "",
        githubUrl: "",
        whatILearned: "J'ai acquis une solide maîtrise de la gestion des flux de données réseau en temps réel, de la mise en place de protocoles à faible latence (WebRTC), de l'optimisation des performances de rendu 3D avec Three.js, et de l'adaptation dynamique de la qualité en fonction des conditions réseau 5G."
    },
    {
        id: "drones-cpp",
        title: "Plateforme CPP pour Drones (PDR)",
        subtitle: "Coverage Path Planning & Drones (01/26 - 04/26)",
        shortDescription: "Développement d’une plateforme de planification de trajectoires de couverture (Coverage Path Planning - CPP) pour flottes de drones aériens et aquatiques, structurée sous une architecture microservices.",
        fullDescription: "Mise en place d'un système intelligent et distribué de calcul de trajectoires optimales de couverture spatiale pour des missions de surveillance environnementale. Développé sous forme de microservices autonomes pour traiter de manière asynchrone les calculs géométriques et algorithmiques lourds pour des flottes mixtes de drones aériens et aquatiques.",
        image: "/assets/img/project-items/ids_snort_elk.png",
        stack: ["Microservices", "Python", "Docker", "ROS", "Algorithmique"],
        demoUrl: "",
        githubUrl: "",
        whatILearned: "Ce projet m'a permis d'approfondir la conception d'algorithmes géométriques complexes (CPP), la communication asynchrone inter-microservices en temps réel, la modélisation de robots physiques avec ROS, et le déploiement industrialisé sous Docker."
    },
    {
        id: "chatbot-rag",
        title: "Chatbot IA avec RAG",
        subtitle: "Intelligence Artificielle & LLM (09/24 - 03/25)",
        shortDescription: "Développement et intégration d’un chatbot IA utilisant l'architecture RAG (Retrieval-Augmented Generation) pour assister le département administratif du programme mécatronique.",
        fullDescription: "Implémentation complète d'une solution de questions-réponses basée sur la documentation interne. Le système utilise des embeddings vectoriels pour retrouver avec exactitude les sections de documents pertinents afin d'enrichir le prompt envoyé au LLM, éliminant ainsi les hallucinations et garantissant des réponses 100% vérifiables.",
        image: "/assets/img/project-items/Mecani.png",
        stack: ["HTML", "CSS", "JavaScript", "SASS", "LLM", "Vector DB"],
        demoUrl: "",
        githubUrl: "https://github.com/sebachoh/ChatbotUI_V2.0",
        whatILearned: "J'ai appris à concevoir des architectures RAG fiables, à gérer le traitement sémantique de documents (chunking), à manipuler des bases de données vectorielles pour des recherches de similarité ultra-rapides, et à designer une UI réactive de grade entreprise."
    },
    {
        id: "amazon-rage",
        title: "Jeu Vidéo : Amazon Rage",
        subtitle: "Moteur Unity & C# (11/23)",
        shortDescription: "Développement complet d’un jeu vidéo 3D de qualité commerciale avec le moteur de jeu Unity, intégrant programmation de scripts en C#, level design et optimisation.",
        fullDescription: "Conception et programmation de A à Z d'un jeu vidéo d'action-aventure sous Unity. Intègre des mécaniques de combat sophistiquées, une gestion physique robuste des objets 3D, une intelligence artificielle ennemie par états (FSM), et un travail minutieux sur l'audio et l'optimisation des scènes.",
        image: "/assets/img/project-items/AmazonRagePrueba.jpg",
        stack: ["C#", "Unity", "Game programming", "3D Physics"],
        demoUrl: "",
        githubUrl: "https://github.com/SeasterBlue/Amazon-Rage",
        whatILearned: "Ce projet m'a apporté une maîtrise approfondie du langage C# orienté objet, de l'architecture d'Unity (Entity Component), du profilage de ressources matérielles pour le maintien du taux de rafraîchissement (FPS), et de la gestion de projets de divertissement numérique interactifs."
    },
    {
        id: "ecommerce-java",
        title: "E-Commerce de Nourriture Java",
        subtitle: "Boutique en Ligne & Backend Java (10/25)",
        shortDescription: "Conception et déploiement d’une plateforme e-commerce de distribution alimentaire, architecturée de manière robuste en Java/Spring Boot et entièrement dockerisée.",
        fullDescription: "Développement complet d'une solution de boutique en ligne intégrant des modules avancés : gestion de catalogue de nourriture, panier d'achat dynamique, système de paiement sécurisé, et gestion des comptes utilisateurs, le tout reposant sur un backend Spring Boot performant et conteneurisé sous Docker.",
        image: "/assets/img/project-items/Projet-MicroServices.png",
        stack: ["Java", "Spring Boot", "React", "Docker", "PostgreSQL"],
        demoUrl: "",
        githubUrl: "https://github.com/sebachoh/ArchitectureMicroServices",
        whatILearned: "J'ai consolidé ma maîtrise du framework Spring (Spring MVC, JPA, Data, Security), le stockage relationnel optimisé avec PostgreSQL/Hibernate, la conteneurisation isolée de services applicatifs multiples, et le développement React SPA fluide."
    },
    {
        id: "boat-motors",
        title: "Visualisation Moteurs de Bateaux",
        subtitle: "IoT & Visualisation de Données (10/25)",
        shortDescription: "Création d'une plateforme web interactive de centralisation et de télémétrie IoT pour visualiser en temps réel les performances des moteurs électriques de bateaux.",
        fullDescription: "Conception d'une application IoT maritime de pointe pour ingérer, stocker et afficher les flux continus de métriques provenant des capteurs intégrés aux moteurs électriques (température, régime RPM, voltage, niveau de charge batterie, consommation électrique instantanée) permettant de planifier la maintenance prédictive.",
        image: "/assets/img/project-items/kubernetes_prometheus.png",
        stack: ["IoT", "Node.js", "Grafana", "TimescaleDB", "MQTT"],
        demoUrl: "",
        githubUrl: "",
        whatILearned: "J'ai développé une solide compréhension des protocoles de transport IoT légers (MQTT), de la gestion efficace de bases de données de séries temporelles (TimescaleDB) et de la conception de dashboards d'ingénierie maritime de haute technicité."
    },
    {
        id: "axion-brain",
        title: "Axion : Second Brain SaaS",
        subtitle: "Productivité Personnelle SaaS (05/26 - still working)",
        shortDescription: "Conception et développement d'une plateforme SaaS robuste de type 'Second Brain' similaire à Notion, permettant la centralisation et l'organisation des connaissances.",
        fullDescription: "Développement d'une application moderne d'organisation personnelle. Intègre un éditeur de texte en blocs ultra-rapide en temps réel, une gestion de tâches avancée avec planificateur récurrent, des connexions sémantiques entre notes, une base de données flexible personnalisable par l'utilisateur et une synchronisation sécurisée.",
        image: "/assets/img/project-items/devsecops_pipeline.png",
        stack: ["TypeScript", "Next.js", "Tailwind CSS", "Prisma", "PostgreSQL"],
        demoUrl: "",
        githubUrl: "",
        whatILearned: "J'ai renforcé mes compétences sur le framework Next.js et son architecture d'optimisation (Server Components, incremental static regeneration), la gestion d'états réactifs complexes au niveau du client web, et la modélisation de relations sémantiques dynamiques en base de données."
    }
];

// Dynamically Render Projects Carousel Cards
function renderProjects() {
    const track = document.getElementById('projects-track');
    if (!track) return;

    track.innerHTML = projectsData.map(proj => {
        const stackBadges = proj.stack.map(tech => {
            let iconClass = "";
            if (tech.toLowerCase() === "html") iconClass = '<i class="fa-brands fa-html5 text-white"></i>';
            else if (tech.toLowerCase() === "css") iconClass = '<i class="fa-brands fa-css3-alt text-white"></i>';
            else if (tech.toLowerCase() === "javascript") iconClass = '<i class="fa-brands fa-js text-white"></i>';
            else if (tech.toLowerCase() === "sass") iconClass = '<i class="fa-brands fa-sass" style="font-size:18px"></i>';
            else if (tech.toLowerCase() === "c#") iconClass = '<i class="fab fa-microsoft text-white"></i>';
            else if (tech.toLowerCase() === "unity") iconClass = '<i class="fab fa-unity text-white"></i>';
            else if (tech.toLowerCase() === "java") iconClass = '<i class="fa-brands fa-java text-white"></i>';
            else if (tech.toLowerCase() === "react") iconClass = '<i class="fa-brands fa-react text-white"></i>';
            else if (tech.toLowerCase() === "docker") iconClass = '<i class="fa-brands fa-docker text-white"></i>';
            else if (tech.toLowerCase() === "tailwind css") iconClass = '<i class="fa-brands fa-uikit text-white"></i>';
            else if (tech.toLowerCase() === "aws") iconClass = '<i class="fab fa-aws text-white"></i>';
            else if (tech.toLowerCase() === "terraform") iconClass = '<i class="fa-solid fa-cloud text-white"></i>';
            else if (tech.toLowerCase() === "security" || tech.toLowerCase() === "cybersecurity") iconClass = '<i class="fa-solid fa-shield-halved text-white"></i>';
            else iconClass = '<i class="fa-solid fa-code text-white"></i>';

            return `
                <span class="px-3 py-1.5 bg-white/10 text-white rounded-full text-xs font-medium flex items-center gap-1.5 border border-white/20 transition-all hover:bg-white/20">
                    ${iconClass} ${tech}
                </span>
            `;
        }).join('');

        return `
            <div class="bg-gray-900/50 card-spotlight p-6 transition-all duration-300 hover:bg-gray-900/70 group flex flex-col justify-between select-none" data-id="${proj.id}">
                <div>
                    <div class="mb-4 h-48 bg-white rounded-xl flex items-center justify-center transition-all duration-300 overflow-hidden relative">
                        <img src="${proj.image}" alt="${proj.title}" class="h-full w-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500" />
                        <div class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
                    </div>
                    <span class="text-teal-400 text-[11px] uppercase tracking-wider font-semibold">${proj.subtitle}</span>
                    <h3 class="text-xl font-bold text-white mt-1 mb-3 text-center">${proj.title}</h3>
                    <p class="text-gray-300 mb-4 leading-relaxed text-sm tracking-[-0.03em] custom-font-medium text-left">
                        ${proj.shortDescription}
                    </p>
                </div>
                <div class="flex flex-col gap-4 mt-auto">
                    <div class="flex flex-wrap gap-1.5">
                        ${stackBadges}
                    </div>
                    <div class="flex items-center justify-between border-t border-gray-800/80 pt-3 mt-1">
                        <span class="text-xs font-bold text-gray-500 uppercase tracking-wide">Click pour détails</span>
                        <div class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors duration-300">
                            <i class="fas fa-arrow-right text-xs"></i>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Carousel Functionality (Responsive, infinite sliding loop indicators)
function initializeCarousel() {
    const track = document.getElementById('projects-track');
    const prevBtn = document.getElementById('carousel-prev-btn');
    const nextBtn = document.getElementById('carousel-next-btn');
    const dotsContainer = document.getElementById('carousel-dots');
    
    if (!track || !prevBtn || !nextBtn || !dotsContainer) return;

    let currentIndex = 0;
    const totalProjects = projectsData.length;

    // Get number of visible cards based on screen size
    function getVisibleCards() {
        if (window.innerWidth >= 1024) return 3;
        if (window.innerWidth >= 640) return 2;
        return 1;
    }

    // Render Dots Indicators dynamically
    function renderDots() {
        const visible = getVisibleCards();
        const maxIndex = totalProjects - visible;
        
        let dotsHTML = '';
        for (let i = 0; i <= maxIndex; i++) {
            dotsHTML += `
                <button class="carousel-dot w-3 h-3 rounded-full bg-gray-600 transition-all duration-300 ${i === currentIndex ? 'active w-6 bg-white' : 'hover:bg-gray-400'}" data-index="${i}" aria-label="Slide ${i + 1}">
                </button>
            `;
        }
        dotsContainer.innerHTML = dotsHTML;

        // Add dot click handlers
        document.querySelectorAll('.carousel-dot').forEach(dot => {
            dot.addEventListener('click', (e) => {
                const targetIdx = parseInt(e.currentTarget.getAttribute('data-index'));
                slideTo(targetIdx);
            });
        });
    }

    // Slide to target index
    function slideTo(index) {
        const visible = getVisibleCards();
        const maxIndex = totalProjects - visible;
        
        // Boundaries checks
        if (index < 0) index = 0;
        if (index > maxIndex) index = maxIndex;

        currentIndex = index;

        // Calculate card width dynamically including CSS gap (24px gap between cards)
        const cardElement = track.firstElementChild;
        if (!cardElement) return;
        
        const cardWidth = cardElement.getBoundingClientRect().width;
        const gap = 24; // flex gap value

        // Translate the track
        track.style.transform = `translateX(-${currentIndex * (cardWidth + gap)}px)`;

        // Update navigation button states
        prevBtn.style.opacity = currentIndex === 0 ? '0.3' : '1';
        prevBtn.style.pointerEvents = currentIndex === 0 ? 'none' : 'auto';
        nextBtn.style.opacity = currentIndex === maxIndex ? '0.3' : '1';
        nextBtn.style.pointerEvents = currentIndex === maxIndex ? 'none' : 'auto';

        // Update dot states
        document.querySelectorAll('.carousel-dot').forEach((dot, idx) => {
            if (idx === currentIndex) {
                dot.classList.add('active', 'w-6', 'bg-white');
                dot.classList.remove('bg-gray-600');
            } else {
                dot.classList.remove('active', 'w-6', 'bg-white');
                dot.classList.add('bg-gray-600');
            }
        });
    }

    // Controls Event Listeners
    prevBtn.addEventListener('click', () => {
        slideTo(currentIndex - 1);
    });

    nextBtn.addEventListener('click', () => {
        slideTo(currentIndex + 1);
    });

    // Touch Support / Drag and Swipe
    let isDragging = false;
    let startX = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let animationID = 0;

    track.addEventListener('mousedown', dragStart);
    track.addEventListener('touchstart', dragStart);
    track.addEventListener('mouseup', dragEnd);
    track.addEventListener('touchend', dragEnd);
    track.addEventListener('mousemove', dragAction);
    track.addEventListener('touchmove', dragAction);
    track.addEventListener('mouseleave', dragEnd);

    function dragStart(e) {
        isDragging = true;
        startX = getPositionX(e);
        track.style.transition = 'none'; // temporary disable transition for drag responsiveness
        track.classList.add('cursor-grabbing');
    }

    function dragAction(e) {
        if (!isDragging) return;
        const currentX = getPositionX(e);
        const diffX = currentX - startX;
        
        // Calculate dynamic card offset translate
        const cardElement = track.firstElementChild;
        if (!cardElement) return;
        const cardWidth = cardElement.getBoundingClientRect().width;
        const gap = 24;

        const currentOffset = -currentIndex * (cardWidth + gap);
        track.style.transform = `translateX(${currentOffset + diffX}px)`;
    }

    function dragEnd(e) {
        if (!isDragging) return;
        isDragging = false;
        track.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
        track.classList.remove('cursor-grabbing');

        // Determine direction by checking current drag offset compared to original start
        const endX = getPositionX(e);
        const diffX = endX - startX;

        // If swiped a meaningful amount (more than 50px)
        if (diffX < -50) {
            slideTo(currentIndex + 1);
        } else if (diffX > 50) {
            slideTo(currentIndex - 1);
        } else {
            slideTo(currentIndex); // return to current
        }
    }

    function getPositionX(e) {
        return e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
    }

    // Initialize layout rendering
    renderDots();
    slideTo(0);

    // Re-verify on resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            renderDots();
            slideTo(currentIndex);
        }, 150);
    });
}

// Detailed Overlay Modal Mechanics
function initializeModal() {
    const modal = document.getElementById('project-modal');
    const closeBtn = document.getElementById('modal-close-btn');
    const track = document.getElementById('projects-track');

    if (!modal || !closeBtn || !track) return;

    // Attach click events on each project card
    track.addEventListener('click', (e) => {
        const card = e.target.closest('[data-id]');
        if (!card) return;

        const projId = card.getAttribute('data-id');
        const project = projectsData.find(p => p.id === projId);
        
        if (project) {
            openModal(project);
        }
    });

    function openModal(project) {
        // Populate modal text fields
        document.getElementById('modal-image').src = project.image;
        document.getElementById('modal-image').alt = project.title;
        document.getElementById('modal-title').textContent = project.title;
        document.getElementById('modal-subtitle').textContent = project.subtitle;
        document.getElementById('modal-description').textContent = project.fullDescription;
        document.getElementById('modal-learned').textContent = project.whatILearned;

        // Populate stack badges in modal
        const stackContainer = document.getElementById('modal-stack');
        stackContainer.innerHTML = project.stack.map(tech => `
            <span class="px-3 py-1.5 bg-white/10 text-white rounded-full text-xs font-semibold border border-white/20">
                ${tech}
            </span>
        `).join('');

        // Github Link Handling
        const githubBtn = document.getElementById('modal-github-link');
        if (project.githubUrl) {
            githubBtn.href = project.githubUrl;
            githubBtn.style.display = 'flex';
        } else {
            githubBtn.style.display = 'none';
        }

        // Live Demo Link Handling
        const demoBtn = document.getElementById('modal-demo-link');
        if (project.demoUrl) {
            demoBtn.href = project.demoUrl;
            demoBtn.style.display = 'flex';
        } else {
            demoBtn.style.display = 'none';
        }

        // Active classes for animated fade-in / zoom transitions
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // prevent background scrolling
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // restore scrolling
    }

    // Close button click
    closeBtn.addEventListener('click', closeModal);

    // Close modal on overlay click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close on ESC keypress
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

// Initialize tech stack marquee by cloning items for seamless loop
function initializeTechStack() {
    const marqueeContent = document.querySelector('.marquee-content');
    if (!marqueeContent) return;

    // Clone the items to ensure the marquee is long enough to loop seamlessly
    const cards = Array.from(marqueeContent.children);

    // Duplicate the cards twice to ensure there's enough content to fill the screen and loop
    cards.forEach(card => {
        const clone = card.cloneNode(true);
        marqueeContent.appendChild(clone);
    });
}

// Enhanced cursor follower
function createCursorFollower() {
    // Don't create the custom cursor on touch / coarse-pointer devices
    if (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) return;

    const cursor = document.createElement('div');
    cursor.className = 'cursor-follower';
    // Use an inline letter so the follower becomes an 'S'
    cursor.innerHTML = '<span class="cursor-letter">S</span>';
    document.body.appendChild(cursor);

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateCursor() {
        // Smooth follow with easing
        cursorX += (mouseX - cursorX) * 0.45;
        cursorY += (mouseY - cursorY) * 0.45;

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
    function updateInteractiveElements() {
        const interactiveElements = document.querySelectorAll('a, button, .tech-card, #projects-track > div');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            });
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            });
        });
    }

    updateInteractiveElements();
    
    // Periodically rebind for dynamically loaded elements
    setInterval(updateInteractiveElements, 1000);
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

// Interactive Card Spotlight logic
function initCardSpotlight() {
    const handleOnMouseMove = e => {
        const { currentTarget: target } = e;
        const rect = target.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;

        target.style.setProperty("--mouse-x", `${x}px`);
        target.style.setProperty("--mouse-y", `${y}px`);
    };

    const cards = document.querySelectorAll(".card-spotlight, .tech-card, .rounded-2xl.border, #projects-track > div");
    cards.forEach(card => {
        card.onmousemove = e => handleOnMouseMove(e);
    });
}

// Mobile menu functionality
function initializeMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuLinks = document.querySelectorAll('.mobile-menu-link');

    if (!menuBtn || !mobileMenu) return;

    // Toggle menu
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        menuBtn.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking a link
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            menuBtn.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

// Insert an SVG overlay on each project card that animates a small bright segment around the border
function addPerimeterBeams() {
    const cards = document.querySelectorAll('#projects-track > div');
    if (!cards || !cards.length) return;

    cards.forEach(card => {
        const existing = card.querySelector('.project-beam');
        if (existing) existing.remove();
        if (!card.style.position) card.style.position = 'relative';
        card.style.borderRadius = card.style.borderRadius || '12px';
        card.style.overflow = 'visible';
    });

    cards.forEach((card, idx) => {
        const rect = card.getBoundingClientRect();
        const w = Math.max(60, Math.round(rect.width + 8));
        const h = Math.max(40, Math.round(rect.height + 8));

        const svgns = 'http://www.w3.org/2000/svg';
        const svg = document.createElementNS(svgns, 'svg');
        svg.setAttribute('class', 'project-beam');
        svg.setAttribute('width', '100%');
        svg.setAttribute('height', '100%');
        svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
        svg.setAttribute('preserveAspectRatio', 'none');

        const base = document.createElementNS(svgns, 'rect');
        base.setAttribute('x', '4');
        base.setAttribute('y', '4');
        base.setAttribute('width', String(w - 8));
        base.setAttribute('height', String(h - 8));
        base.setAttribute('rx', '12');
        base.setAttribute('ry', '12');
        base.setAttribute('fill', 'none');
        base.setAttribute('stroke', 'rgba(255,255,255,0.06)');
        base.setAttribute('stroke-width', '1');
        svg.appendChild(base);

        const defs = document.createElementNS(svgns, 'defs');
        const filt = document.createElementNS(svgns, 'filter');
        const fid = `blur${idx}`;
        filt.setAttribute('id', fid);
        const fe = document.createElementNS(svgns, 'feGaussianBlur');
        fe.setAttribute('stdDeviation', '10');
        fe.setAttribute('result', 'blurOut');
        filt.appendChild(fe);
        defs.appendChild(filt);
        svg.appendChild(defs);

        const aura = document.createElementNS(svgns, 'rect');
        aura.setAttribute('x', '4');
        aura.setAttribute('y', '4');
        aura.setAttribute('width', String(w - 8));
        aura.setAttribute('height', String(h - 8));
        aura.setAttribute('rx', '12');
        aura.setAttribute('ry', '12');
        aura.setAttribute('fill', 'none');
        aura.setAttribute('stroke', '#ffffff');
        aura.setAttribute('stroke-width', '10');
        aura.setAttribute('stroke-linecap', 'round');
        aura.setAttribute('opacity', '0.22');
        aura.setAttribute('filter', `url(#${fid})`);
        svg.appendChild(aura);

        const beam = document.createElementNS(svgns, 'rect');
        beam.setAttribute('x', '4');
        beam.setAttribute('y', '4');
        beam.setAttribute('width', String(w - 8));
        beam.setAttribute('height', String(h - 8));
        beam.setAttribute('rx', '12');
        beam.setAttribute('ry', '12');
        beam.setAttribute('fill', 'none');
        beam.setAttribute('stroke', '#ffffff');
        beam.setAttribute('stroke-width', '1.5');
        beam.setAttribute('stroke-linecap', 'round');

        svg.appendChild(beam);
        card.appendChild(svg);

        let length = 0;
        try {
            length = beam.getTotalLength();
        } catch (err) {
            length = 2 * ((w - 8) + (h - 8));
        }

        const segment = Math.max(60, Math.round(length * 0.14));
        beam.setAttribute('stroke-dasharray', `${segment} ${Math.max(1, length - segment)}`);
        beam.setAttribute('stroke-dashoffset', '0');

        const dur = (5 + (idx % 3) * 0.8) + 's';
        const animate = document.createElementNS(svgns, 'animate');
        animate.setAttribute('attributeName', 'stroke-dashoffset');
        animate.setAttribute('from', '0');
        animate.setAttribute('to', String(-length));
        animate.setAttribute('dur', dur);
        animate.setAttribute('repeatCount', 'indefinite');
        animate.setAttribute('calcMode', 'linear');
        beam.appendChild(animate);
    });

    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => addPerimeterBeams(), 220);
    });
}

// --- Three.js Globe (polished) -------------------------------------------------
function initThreeGlobe() {
    if (typeof THREE === 'undefined') {
        console.warn('Three.js not loaded');
        return;
    }

    const container = document.getElementById('globe');
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(0, 0, 3);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.filter = 'grayscale(100%) contrast(95%)';
    renderer.outputEncoding = THREE.sRGBEncoding;
    container.appendChild(renderer.domElement);

    const ambient = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambient);
    const dir = new THREE.DirectionalLight(0xffffff, 0.8);
    dir.position.set(5, 3, 5);
    scene.add(dir);

    const loader = new THREE.TextureLoader();
    function loadTexture(url) {
        return new Promise((resolve, reject) => {
            loader.load(url, (tex) => resolve(tex), undefined, () => reject(new Error('Failed to load ' + url)));
        });
    }

    const texBase = 'https://threejs.org/examples/textures/';
    Promise.allSettled([
        loadTexture(texBase + 'land_ocean_ice_cloud_2048.jpg'),
        loadTexture(texBase + 'earth_specular_2048.jpg'),
        loadTexture(texBase + 'earth_normal_2048.jpg'),
        loadTexture(texBase + 'earth_clouds_2048.png')
    ]).then(results => {
        const [rMap, rSpec, rNorm, rCloud] = results;

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
            earthMaterial = new THREE.MeshPhongMaterial({
                color: 0x2A6F97,
                specular: 0x222222,
                shininess: 5
            });
        }

        const earth = new THREE.Mesh(geometry, earthMaterial);
        scene.add(earth);

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

        startAnimationLoop(earth, scene, camera, renderer, container);
    }).catch(err => {
        console.warn('Texture loading failed for globe, using fallback material:', err);
        const geometry = new THREE.SphereGeometry(1, 64, 64);
        const material = new THREE.MeshPhongMaterial({ color: 0x2A6F97, shininess: 5 });
        const earth = new THREE.Mesh(geometry, material);
        scene.add(earth);
        startAnimationLoop(earth, scene, camera, renderer, container);
    });

    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.rotateSpeed = 0.4;
    controls.minDistance = 1.6;
    controls.maxDistance = 6;
}

function startAnimationLoop(earth, scene, camera, renderer, container) {
    const clouds = scene.children.find(c => c.material && c.material.opacity && c.geometry && c.geometry.type === 'SphereGeometry');
    const clock = new THREE.Clock();
    function animate() {
        const delta = clock.getDelta();
        if (earth) earth.rotation.y += 0.1 * delta;
        if (clouds) clouds.rotation.y += 0.12 * delta;
        if (renderer && camera) renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }
    animate();
}

// Global DOM Loaded Initiator
document.addEventListener('DOMContentLoaded', function () {
    // 1. First render dynamic projects
    renderProjects();

    // 2. Initialize carousel, dots and controllers
    initializeCarousel();

    // 3. Initialize modal details mechanics
    initializeModal();

    // 4. Run existing effects
    initializeTechStack();
    createCursorFollower();
    initializeScrollAnimations();
    initializeSmoothScroll();
    initializeMobileMenu();
    initCardSpotlight();

    // 5. Add dynamic neon perimeter beams
    try { addPerimeterBeams(); } catch (e) { console.warn('addPerimeterBeams failed', e); }

    // 6. Globe
    try { initThreeGlobe(); } catch (err) { console.error('Globe init failed', err); }

    console.log('Portfolio loaded successfully with 7 projects, responsive carousel, and premium details modal! 🚀');
});
