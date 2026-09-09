// 7 Projects rich data for the portfolio (Infra, Cloud, Cyber focused)
// 7 Real Projects data for the portfolio (aligned with your experiences)
const projectsData = [
    {
        id: "metaverse-5g",
        title: "Développement d’applications de visualisation de flux Métavers portés par un réseau 5G",
        subtitle: "Visualisation Flux Métavers 5G",
        date: "04/26 - 08/26",
        shortDescription: "Conception et simulation d’un cœur de réseau 5G privé avec slicing, tests de performance réseau et développement d'une plateforme de visualisation métavers avec documentation technique.",
        fullDescription: "Projet réalisé dans le cadre d’un stage de 4 mois visant le déploiement et la configuration de serveurs pour le montage de services multi-slices (URLLC, eMBB, mIoT, V2X). Il comprend la modélisation et le test de l'infrastructure via le framework OpenAirInterface (OAI), la réalisation de tests de performance approfondis (débit, latence, gigue) et la rédaction de la documentation technique. Une plateforme de visualisation a ensuite été développée pour suivre les flux métavers sur ce réseau 5G privé, avec l'ambition finale de permettre une interaction en temps réel par casques VR connectés à distance entre l'école et l'usine.",
        image: "/assets/img/project-items/Projet5G.webp",
        stack: ["Réseaux", "5G", "OpenAirInterface", "Python", "Docker", "Slicing", "Git"],
        demoUrl: "",
        githubUrl: "",
        whatILearned: "J'ai appris à déployer et orchestrer un cœur de réseau 5G (Core Network) émulé via OpenAirInterface. Ce projet m'a permis de maîtriser la configuration et la priorisation de tranches réseau (Network Slicing) selon les contraintes de services (faible latence URLLC, haut débit eMBB, IoT massif), la réalisation de tests de performance, ainsi que la rédaction de la documentation technique. J'ai également renforcé mes compétences sur la conteneurisation des services avec Docker."
    },
    {
        id: "drones-cpp",
        title: "Projet de Recherche (PDR) — Plateforme de Coverage Path Planning pour drones",
        subtitle: "Path Planning C++/Qt & ROS2",
        date: "01/26 - 04/26",
        shortDescription: "Création d'une application desktop avec Qt (C++) pour le calcul de trajectoires optimales de couverture (CPP) et simulation 3D de drones aquatiques sous ROS2.",
        fullDescription: "Projet de Recherche (PDR) réalisé en 4ème année. Il s'agit d'une plateforme développée en C++ avec Qt permettant de planifier des trajectoires optimales de couverture (Coverage Path Planning - CPP). L'application évalue et compare plusieurs algorithmes de calcul de routes en fonction des zones définies par l'utilisateur pour renvoyer le chemin le plus efficace. Le système intègre un module de simulation locale et permet d'exporter les trajectoires calculées vers le simulateur robotique ROS2 pour la visualisation 3D en temps réel d'un drone dans un espace aquatique.",
        image: "/assets/img/project-items/PDRPhoto.webp",
        stack: ["C++", "Qt", "ROS2", "Algorithmique", "Python", "Git"],
        demoUrl: "",
        githubUrl: "https://github.com/jmvilla12/projet_de_recherche",
        whatILearned: "Ce projet m'a permis d'approfondir la programmation orientée objet en C++ et le développement d'interfaces graphiques interactives avec Qt. J'ai appris à concevoir, évaluer et optimiser des algorithmes de planification de trajectoires complexes (CPP). J'ai également acquis de solides compétences en intégration robotique, notamment pour l'exportation et la simulation de modèles physiques de drones aquatiques en environnement 3D sous ROS2."
    },
    {
        id: "axion-brain",
        title: "Axion : plateforme personnelle d’organisation d’un “second brain” (similaire à Notion)",
        subtitle: "Second Brain SaaS",
        date: "05/26 - En cours",
        shortDescription: "Conception et développement d'une plateforme personnelle de type 'Second Brain' pour centraliser et organiser mes connaissances (tâches, finances, projets, routines).",
        fullDescription: "Ce projet est né du besoin personnel d'organiser ma propre vie face au manque de fonctionnalités gratuites dans Notion. J'ai conçu et développé mon propre 'Second Brain' sur mesure et à mon goût. La plateforme intègre tous les modules dont j'ai besoin au quotidien : gestion des tâches et de projets, suivi des finances et du budget, planification de routines quotidiennes, suivi des candidatures de travail, organisation des tâches ménagères, et même un espace dédié à l'apprentissage de langues. Ce projet est en constante évolution, avec l'ambition finale de le publier sur l'App Store.",
        image: "/assets/img/project-items/AxionPort.webp",
        stack: ["React", "TypeScript", "Vercel", "CSS"],
        demoUrl: "https://axion-chi-sandy.vercel.app/",
        githubUrl: "https://github.com/sebachoh/Axion",
        whatILearned: "Ce projet m'a permis de perfectionner mes compétences en développement React de niveau avancé (notamment le design pattern de polymorphisme de composants). J'ai renforcé ma maîtrise de TypeScript pour assurer la robustesse du typage et l'utilisation de feuilles de style CSS personnalisées pour un design soigné. J'ai également appris à automatiser et optimiser les flux de déploiement continu via la plateforme Vercel."
    },
    {
        id: "boat-motors",
        title: "Plateforme de gestion et de télémétrie pour moteurs électriques de bateaux",
        subtitle: "Démonstrateur IoT Maritime",
        date: "10/25",
        shortDescription: "Développement d'une plateforme démo de gestion et de télémétrie en temps réel pour une entreprise française de moteurs électriques maritimes.",
        fullDescription: "Projet créé en tant que démonstrateur (DEMO) pour une entreprise française spécialisée dans la fabrication de moteurs électriques pour bateaux. La plateforme permet la gestion, la maintenance prédictive et la visualisation en temps réel des données télémétriques reçues des moteurs. Le backend repose sur une architecture robuste en microservices avec plusieurs API endpoints développés en JavaScript et une base de données PostgreSQL pour stocker efficacement les flux de métriques.",
        image: "/assets/img/project-items/BateauxPort.webp",
        stack: ["JavaScript", "Microservices", "API", "PostgreSQL", "Node.js"],
        demoUrl: "",
        githubUrl: "https://github.com/sebachoh/WeenavPL",
        whatILearned: "Ce projet m'a permis d'apprendre à concevoir une architecture en microservices en JavaScript et à structurer des API REST robustes. J'ai renforcé mes connaissances sur la modélisation et l'optimisation de requêtes sur PostgreSQL pour gérer de grands volumes de données télémétriques. J'ai également compris les enjeux industriels de la maintenance et du suivi de flottes de moteurs en temps réel."
    },
    {
        id: "chatbot-rag",
        title: "Développement d’un chatbot IA avec RAG pour le programme de Mécatronique",
        subtitle: "Chatbot IA RAG (Projet de Fin d'Études)",
        date: "09/24 - 03/25",
        shortDescription: "Conception et développement d'un chatbot IA avec RAG pour automatiser le support administratif et répondre aux questions des étudiants en Mécatronique.",
        fullDescription: "Projet de fin d'études d'ingénierie mécatronique réalisé en Colombie. Il consiste en la création d'un chatbot IA doté d'une architecture RAG (Retrieval-Augmented Generation) pour le département de mécatronique, conçu pour remplacer et automatiser les tâches administratives répétitives du secrétariat du programme. Le chatbot répond avec précision aux requêtes des étudiants sur les cours, les règlements et les informations universitaires. Le système s'appuie sur l'API d'OpenAI pour le traitement du langage naturel et utilise AnythingLLM pour la connexion à la base de données vectorielle.",
        image: "/assets/img/project-items/MecaniPort.webp",
        stack: ["AnythingLLM", "HTML", "CSS", "JavaScript", "SASS", "LLM", "Vector DB"],
        demoUrl: "",
        githubUrl: "https://github.com/sebachoh/ChatbotUI_V2.0",
        whatILearned: "Ce projet de fin d'études m'a permis de maîtriser l'intégration d'architectures RAG et le fonctionnement des bases de données vectorielles pour des recherches sémantiques précises. J'ai appris à connecter et paramétrer des APIs de grands modèles de langage (OpenAI LLM) tout en développant une interface web ergonomique et réactive en JavaScript, HTML et SCSS adaptée aux besoins des étudiants."
    },
    {
        id: "ecommerce-java",
        title: "Développement d’une plateforme e-commerce de nourriture en Java",
        subtitle: "E-Commerce Java/Spring",
        date: "10/25",
        shortDescription: "Conception et déploiement d’une plateforme e-commerce de distribution alimentaire, architecturée de manière robuste en Java/Spring Boot et entièrement dockerisée.",
        fullDescription: "Développement complet d'une solution de boutique en ligne intégrant des modules avancés : gestion de catalogue de nourriture, panier d'achat dynamique, système de paiement sécurisé, et gestion des comptes utilisateurs, le tout reposant sur un backend Spring Boot performant et conteneurisé sous Docker.",
        image: "/assets/img/project-items/Projet-MicroServices.webp",
        stack: ["Java", "Spring Boot", "React", "Docker", "PostgreSQL"],
        demoUrl: "",
        githubUrl: "https://github.com/sebachoh/ArchitectureMicroServices",
        whatILearned: "J'ai consolidé ma maîtrise du framework Spring (Spring MVC, JPA, Data, Security), le stockage relationnel optimisé avec PostgreSQL/Hibernate, la conteneurisation isolée de services applicatifs multiples, et le développement React SPA fluide."
    },
    {
        id: "amazon-rage",
        title: "Développement d’un jeu vidéo avec le moteur Unity : Amazon Rage",
        subtitle: "Jeu Vidéo Action 3D",
        date: "11/23",
        shortDescription: "Développement complet d’un jeu vidéo 3D de qualité commerciale avec le moteur de jeu Unity, intégrant programmation de scripts en C#, level design et optimisation.",
        fullDescription: "Conception et programmation de A à Z d'un jeu vidéo d'action-aventure sous Unity. Intègre des mécaniques de combat sophistiquées, une gestion physique robuste des objets 3D, une intelligence artificielle ennemie par états (FSM), et un travail minutieux sur l'audio et l'optimisation des scènes.",
        image: "/assets/img/project-items/AmazonRagePrueba.webp",
        stack: ["C#", "Unity", "Game programming", "3D Physics"],
        demoUrl: "https://seaster-blue.itch.io/amazon-rage",
        githubUrl: "https://github.com/SeasterBlue/Amazon-Rage",
        whatILearned: "Ce projet m'a apporté une maîtrise approfondie du langage C# orienté objet, de l'architecture d'Unity (Entity Component), du profilage de ressources matérielles pour le maintien du taux de rafraîchissement (FPS), et de la gestion de projets de divertissement numérique interactifs."
    }
];

// Dynamically Render Projects Carousel Cards
function renderProjects() {
    const track = document.getElementById('projects-track');
    if (!track) return;

    track.innerHTML = projectsData.map(proj => {
        const stackBadges = proj.stack.map(tech => {
            let iconClass = "";
            const t = tech.toLowerCase();
            if (t === "html") iconClass = '<i class="fa-brands fa-html5 text-white"></i>';
            else if (t === "css" || t === "tailwind css" || t === "tailwind") iconClass = '<i class="fa-brands fa-css3-alt text-white"></i>';
            else if (t === "javascript" || t === "typescript" || t === "js" || t === "ts") iconClass = '<i class="fa-brands fa-js text-white"></i>';
            else if (t === "sass") iconClass = '<i class="fa-brands fa-sass" style="font-size:14px"></i>';
            else if (t === "c#") iconClass = '<i class="fab fa-microsoft text-white"></i>';
            else if (t === "unity") iconClass = '<i class="fab fa-unity text-white"></i>';
            else if (t === "java" || t === "spring boot" || t === "spring") iconClass = '<i class="fa-brands fa-java text-white"></i>';
            else if (t === "react" || t === "next.js" || t === "nextjs") iconClass = '<i class="fa-brands fa-react text-white"></i>';
            else if (t === "docker") iconClass = '<i class="fa-brands fa-docker text-white"></i>';
            else if (t === "aws") iconClass = '<i class="fab fa-aws text-white"></i>';
            else if (t === "gcp" || t === "cloud" || t === "vercel") iconClass = '<i class="fa-solid fa-cloud text-white"></i>';
            else if (t === "terraform") iconClass = '<i class="fa-solid fa-network-wired text-white"></i>';
            else if (t === "security" || t === "cybersecurity") iconClass = '<i class="fa-solid fa-shield-halved text-white"></i>';
            else if (t === "api" || t === "apis" || t === "rest api") iconClass = '<i class="fa-solid fa-gears text-white"></i>';
            else if (t === "réseaux" || t === "réseau" || t === "network" || t === "networks") iconClass = '<i class="fa-solid fa-network-wired text-white"></i>';
            else if (t === "5g") iconClass = '<i class="fa-solid fa-signal text-white"></i>';
            else if (t === "openairinterface") iconClass = '<i class="fa-solid fa-ethernet text-white"></i>';
            else if (t === "slicing" || t === "network slicing") iconClass = '<i class="fa-solid fa-layer-group text-white"></i>';
            else if (t === "git" || t === "git-alt") iconClass = '<i class="fa-brands fa-git-alt text-white"></i>';
            else if (t === "python") iconClass = '<i class="fa-brands fa-python text-white"></i>';
            else if (t === "microservices") iconClass = '<i class="fa-solid fa-cubes text-white"></i>';
            else if (t === "c++") iconClass = '<i class="fa-solid fa-terminal text-white"></i>';
            else if (t === "qt") iconClass = '<i class="fa-solid fa-window-maximize text-white"></i>';
            else if (t === "ros" || t === "ros2") iconClass = '<i class="fa-solid fa-robot text-white"></i>';
            else if (t === "algorithmique") iconClass = '<i class="fa-solid fa-calculator text-white"></i>';
            else if (t === "iot") iconClass = '<i class="fa-solid fa-microchip text-white"></i>';
            else if (t === "node.js" || t === "node") iconClass = '<i class="fa-brands fa-node-js text-white"></i>';
            else if (t === "grafana") iconClass = '<i class="fa-solid fa-chart-line text-white"></i>';
            else if (t === "timescaledb" || t === "postgresql" || t === "prisma" || t === "vector db" || t === "database" || t === "db") iconClass = '<i class="fa-solid fa-database text-white"></i>';
            else if (t === "mqtt") iconClass = '<i class="fa-solid fa-satellite-dish text-white"></i>';
            else if (t === "llm" || t === "ai" || t === "ia" || t === "anythingllm") iconClass = '<i class="fa-solid fa-brain text-white"></i>';
            else if (t === "game programming") iconClass = '<i class="fa-solid fa-gamepad text-white"></i>';
            else if (t === "3d physics") iconClass = '<i class="fa-solid fa-cube text-white"></i>';
            else iconClass = '<i class="fa-solid fa-code text-white"></i>';

            return `
                <span class="px-2.5 py-1 bg-white/5 text-gray-300 rounded-full text-[11px] font-medium flex items-center gap-1.5 border border-white/10 transition-all hover:bg-white/10 hover:text-white" style="font-family: system-ui, -apple-system, sans-serif;">
                    ${iconClass} ${tech}
                </span>
            `;
        }).join('');

        return `
            <div class="bg-[#0d0d0d]/80 border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-all duration-300 group flex flex-col justify-between select-none" data-id="${proj.id}">
                <div>
                    <div class="mb-4 h-48 bg-black/40 border border-white/5 rounded-xl flex items-center justify-center transition-all duration-300 overflow-hidden relative">
                        <img src="${proj.image}" alt="${proj.title}" loading="lazy" decoding="async" width="900" height="675" class="h-full w-full object-cover rounded-lg filter grayscale contrast-[1.15] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" />
                        <div class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
                    </div>
                    <div class="text-base font-bold text-white mb-2 leading-snug tracking-[-0.06em] custom-font-medium text-left min-h-[48px] flex items-center" style="font-family: system-ui, -apple-system, sans-serif;">${proj.title}</div>
                    <div class="text-[11px] text-gray-400 mb-4 tracking-normal font-medium flex items-center gap-1.5 custom-font-medium">
                        <i class="fa-regular fa-calendar text-[10px]"></i> ${proj.date}
                    </div>
                </div>
                <div class="flex flex-col gap-4 mt-auto">
                    <div class="flex flex-wrap gap-1.5">
                        ${stackBadges}
                    </div>
                    <div class="flex items-center justify-between border-t border-white/5 pt-3 mt-1 gap-2">
                        <div class="flex items-center gap-1.5">
                            ${proj.githubUrl ? `
                                <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="w-8 h-8 bg-white/5 text-gray-300 rounded-full border border-white/10 transition-all hover:bg-white hover:text-black flex items-center justify-center" onclick="event.stopPropagation();" title="GitHub">
                                    <i class="fa-brands fa-github text-sm"></i>
                                </a>
                            ` : ''}
                            ${proj.demoUrl ? `
                                <a href="${proj.demoUrl}" target="_blank" rel="noopener noreferrer" class="h-8 px-3 bg-white/5 text-gray-300 rounded-full text-[11px] font-bold border border-white/10 transition-all hover:bg-white hover:text-black flex items-center gap-1.5" onclick="event.stopPropagation();">
                                    <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i> Demo
                                </a>
                            ` : ''}
                        </div>
                        <div class="flex items-center gap-1.5 group-hover:translate-x-0.5 transition-transform duration-300">
                            <span class="text-[10px] font-bold text-gray-400 tracking-[-0.06em] custom-font-medium">Détails</span>
                            <div class="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-colors duration-300">
                                <i class="fas fa-arrow-right text-[10px]"></i>
                            </div>
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
    track.addEventListener('touchstart', dragStart, { passive: true });
    track.addEventListener('mouseup', dragEnd);
    track.addEventListener('touchend', dragEnd, { passive: true });
    track.addEventListener('mousemove', dragAction);
    track.addEventListener('touchmove', dragAction, { passive: true });
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

    // Trackpad horizontal scroll support
    let wheelTimeout;
    let accumulatedDelta = 0;
    track.addEventListener('wheel', (e) => {
        if (Math.abs(e.deltaX) > 4 || Math.abs(e.deltaY) > 4) {
            if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
                e.preventDefault();
                accumulatedDelta += e.deltaX;
                clearTimeout(wheelTimeout);
                wheelTimeout = setTimeout(() => {
                    if (accumulatedDelta > 30) {
                        slideTo(currentIndex + 1);
                    } else if (accumulatedDelta < -30) {
                        slideTo(currentIndex - 1);
                    }
                    accumulatedDelta = 0;
                }, 50);
            }
        }
    }, { passive: false });

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

        const modalDate = document.getElementById('modal-date');
        if (modalDate) {
            modalDate.querySelector('span').textContent = project.date;
        }

        document.getElementById('modal-description').textContent = project.fullDescription;
        document.getElementById('modal-learned').textContent = project.whatILearned;

        // Populate stack badges in modal
        const stackContainer = document.getElementById('modal-stack');
        stackContainer.innerHTML = project.stack.map(tech => `
            <span class="px-3 py-1.5 bg-white/10 text-white rounded-full text-xs font-semibold border border-white/20" style="font-family: system-ui, -apple-system, sans-serif;">
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

        // Container display toggle
        const linksContainer = document.getElementById('modal-links-container');
        if (linksContainer) {
            if (project.githubUrl || project.demoUrl) {
                linksContainer.style.display = 'flex';
            } else {
                linksContainer.style.display = 'none';
            }
        }

        // Active classes for animated fade-in / zoom transitions
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // prevent background scrolling
        document.documentElement.style.overflow = 'hidden'; // prevent iOS scroll bleed
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // restore scrolling
        document.documentElement.style.overflow = ''; 
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

    // iOS Touchmove Scroll Bleed Prevention
    document.addEventListener('touchmove', function(e) {
        if (modal.classList.contains('active')) {
            const isScrollableModal = e.target.closest('.project-modal-content');
            if (!isScrollableModal) {
                e.preventDefault();
            }
        }
    }, { passive: false });
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

// Cursor personalizado con la letra 'S'
function createCursorFollower() {
    // No se crea en dispositivos táctiles ni si el usuario pidió menos movimiento
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const cursor = document.createElement('div');
    cursor.className = 'cursor-follower';
    cursor.setAttribute('aria-hidden', 'true');
    cursor.innerHTML = '<span class="cursor-letter">S</span>';
    document.body.appendChild(cursor);

    const INTERACTIVE = 'a, button, .tech-card, #projects-track > div';
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let hideTimer;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.opacity = '1';
        clearTimeout(hideTimer);
        hideTimer = setTimeout(() => { cursor.style.opacity = '0'; }, 1000);
    }, { passive: true });

    // Delegación: dos listeners fijos en lugar de rebindear cada elemento cada segundo.
    // La versión anterior usaba setInterval(…, 1000) y acumulaba ~136 listeners por
    // segundo sin liberarlos nunca, lo que degradaba la página durante la visita.
    document.addEventListener('mouseover', (e) => {
        if (e.target.closest(INTERACTIVE)) {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
        }
    }, { passive: true });

    document.addEventListener('mouseout', (e) => {
        if (e.target.closest(INTERACTIVE)) {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        }
    }, { passive: true });

    (function animateCursor() {
        cursorX += (mouseX - cursorX) * 0.45;
        cursorY += (mouseY - cursorY) * 0.45;
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        requestAnimationFrame(animateCursor);
    })();
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

function initGlobe() {
    const container = document.getElementById('globe');
    if (!container) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const canvas = document.createElement('canvas');
    canvas.setAttribute('role', 'img');
    canvas.setAttribute('aria-label', 'Globe terrestre marquant Lille, France');
    canvas.style.cssText = 'width:100%;height:100%;display:block;cursor:grab;touch-action:pan-y';
    container.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let W = 0, H = 0, R = 0, cx = 0, cy = 0;

    // Malla de puntos repartida por latitud/longitud
    const points = [];
    for (let lat = -80; lat <= 80; lat += 10) {
        const circumference = Math.cos(lat * Math.PI / 180);
        const count = Math.max(6, Math.round(36 * circumference));
        for (let i = 0; i < count; i++) {
            points.push({ lat, lon: (360 / count) * i });
        }
    }

    // Lille, France
    const LILLE = { lat: 50.63, lon: 3.06 };

    let rotation = 0;          // rotación acumulada en grados
    let tilt = -18;            // inclinación del eje, en grados
    let dragging = false;
    let lastX = 0, lastY = 0;
    let velocity = 0.12;       // grados por frame en reposo
    let visible = true;
    let rafId = null;

    function resize() {
        const rect = container.getBoundingClientRect();
        // clientWidth puede ser 0 si el contenedor aún no tiene layout: en ese
        // caso no dibujamos y esperamos al siguiente aviso del ResizeObserver.
        if (rect.width < 1 || rect.height < 1) return false;

        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        W = rect.width;
        H = rect.height;
        canvas.width = Math.round(W * dpr);
        canvas.height = Math.round(H * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        R = Math.min(W, H) * 0.42;
        cx = W / 2;
        cy = H / 2;
        return true;
    }

    // Proyecta lat/lon a coordenadas de pantalla. z > 0 = cara visible.
    function project(lat, lon) {
        const la = lat * Math.PI / 180;
        const lo = (lon + rotation) * Math.PI / 180;
        const ti = tilt * Math.PI / 180;

        let x = Math.cos(la) * Math.sin(lo);
        let y = Math.sin(la);
        let z = Math.cos(la) * Math.cos(lo);

        // inclinación sobre el eje X
        const y2 = y * Math.cos(ti) - z * Math.sin(ti);
        const z2 = y * Math.sin(ti) + z * Math.cos(ti);

        return { x: cx + x * R, y: cy - y2 * R, z: z2 };
    }

    function draw() {
        ctx.clearRect(0, 0, W, H);

        // halo suave
        const halo = ctx.createRadialGradient(cx, cy, R * 0.75, cx, cy, R * 1.25);
        halo.addColorStop(0, 'rgba(255,255,255,0.05)');
        halo.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.fillStyle = halo;
        ctx.beginPath();
        ctx.arc(cx, cy, R * 1.25, 0, Math.PI * 2);
        ctx.fill();

        // círculo exterior
        ctx.strokeStyle = 'rgba(255,255,255,0.18)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(cx, cy, R, 0, Math.PI * 2);
        ctx.stroke();

        // meridianos y paralelos
        ctx.strokeStyle = 'rgba(255,255,255,0.10)';
        for (let lon = 0; lon < 180; lon += 30) {
            ctx.beginPath();
            let started = false;
            for (let lat = -90; lat <= 90; lat += 4) {
                const p = project(lat, lon);
                if (p.z < 0) { started = false; continue; }
                if (!started) { ctx.moveTo(p.x, p.y); started = true; }
                else ctx.lineTo(p.x, p.y);
            }
            ctx.stroke();
        }
        for (let lat = -60; lat <= 60; lat += 30) {
            ctx.beginPath();
            let started = false;
            for (let lon = 0; lon <= 360; lon += 4) {
                const p = project(lat, lon);
                if (p.z < 0) { started = false; continue; }
                if (!started) { ctx.moveTo(p.x, p.y); started = true; }
                else ctx.lineTo(p.x, p.y);
            }
            ctx.stroke();
        }

        // puntos: los del hemisferio visible más brillantes y grandes
        for (const pt of points) {
            const p = project(pt.lat, pt.lon);
            if (p.z < 0) continue;
            const depth = p.z;
            ctx.fillStyle = `rgba(255,255,255,${0.12 + depth * 0.55})`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, 0.6 + depth * 1.1, 0, Math.PI * 2);
            ctx.fill();
        }

        // marcador de Lille
        const l = project(LILLE.lat, LILLE.lon);
        if (l.z > 0) {
            const pulse = reduceMotion ? 0.6 : (Math.sin(Date.now() / 500) + 1) / 2;
            ctx.fillStyle = `rgba(255,255,255,${0.25 + pulse * 0.35})`;
            ctx.beginPath();
            ctx.arc(l.x, l.y, 5 + pulse * 4, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.arc(l.x, l.y, 2.6, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function frame() {
        if (!dragging) rotation += velocity;
        draw();
        rafId = requestAnimationFrame(frame);
    }

    function start() {
        if (rafId === null) rafId = requestAnimationFrame(frame);
    }

    function stop() {
        if (rafId !== null) { cancelAnimationFrame(rafId); rafId = null; }
    }

    // --- arrastre para rotar (sustituye a OrbitControls) ---
    function pointerDown(e) {
        dragging = true;
        canvas.style.cursor = 'grabbing';
        lastX = e.touches ? e.touches[0].clientX : e.clientX;
        lastY = e.touches ? e.touches[0].clientY : e.clientY;
    }

    function pointerMove(e) {
        if (!dragging) return;
        const x = e.touches ? e.touches[0].clientX : e.clientX;
        const y = e.touches ? e.touches[0].clientY : e.clientY;
        rotation += (x - lastX) * 0.5;
        tilt = Math.max(-70, Math.min(70, tilt - (y - lastY) * 0.3));
        lastX = x;
        lastY = y;
        if (e.cancelable) e.preventDefault();
    }

    function pointerUp() {
        dragging = false;
        canvas.style.cursor = 'grab';
    }

    canvas.addEventListener('mousedown', pointerDown);
    window.addEventListener('mousemove', pointerMove);
    window.addEventListener('mouseup', pointerUp);
    canvas.addEventListener('touchstart', pointerDown, { passive: true });
    canvas.addEventListener('touchmove', pointerMove, { passive: false });
    canvas.addEventListener('touchend', pointerUp);

    // El ResizeObserver resuelve el bug de origen: el contenedor puede medir 0
    // cuando arranca el script, así que dibujamos en cuanto tenga tamaño real.
    new ResizeObserver(() => { if (resize()) draw(); }).observe(container);

    // No gastar CPU ni batería mientras el globo está fuera de pantalla
    new IntersectionObserver((entries) => {
        visible = entries[0].isIntersecting;
        if (visible) start(); else stop();
    }, { threshold: 0 }).observe(container);

    document.addEventListener('visibilitychange', () => {
        if (document.hidden) stop();
        else if (visible) start();
    });

    if (reduceMotion) velocity = 0;
    resize();
    draw();
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

    // 5. Globo interactivo
    try { initGlobe(); } catch (err) { console.error('Globe init failed', err); }
});
