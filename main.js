// Initialize Lucide icons
console.log('Main script loading...');
const initIcons = () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }
};

const translations = {
  "es": {
    "nav.projects": "Proyectos destacados",
    "nav.about": "Sobre mí",
    "nav.contact": "Hablemos",
    "hero.titlePrefix": "Soy",
    "hero.copy": "<span class=\"text-slate-900 font-semibold\">Product Analyst | UX &amp; Customer Experience | Research</span><br><br>Analizo productos y experiencias digitales para entender qué está pasando, dónde aparecen fricciones y qué oportunidades existen para mejorarlas. Combino Product Analysis, UX Research y Customer Experience <strong class=\"text-violet-600 font-semibold\">con un background técnico para conectar necesidades de usuarios, objetivos de negocio</strong> y posibilidades de implementación.",
    "hero.cta": "Ver proyectos",
    "about.title": "Sobre mí",
    "about.p1": "Mi recorrido empezó en Publicidad, con una pregunta que sigue guiando mi trabajo: cómo se comportan las personas en las experiencias digitales. En marketing digital conecté campañas, audiencias, analytics, funnels y conversiones. Después me acerqué al desarrollo web para entender cómo se construyen los productos y trabajar con mayor fluidez con IT.",
    "about.p2": "Ese recorrido me acercó al análisis de producto, UX, research y Customer Experience. Hoy trabajo con productos y experiencias digitales internacionales en Devecoop y soy profesora de UX Research e Investigación Publicitaria. Mi foco está en comprender qué ocurre en una experiencia, por qué ocurre y qué podemos cambiar para mejorarla.",
    "about.years": "Años de recorrido",
    "about.campaigns": "Productos digitales",
    "about.card.behavior": "UX Research",
    "about.card.product": "Product Analysis",
    "about.card.gamified": "Engagement y journeys",
    "about.card.constraints": "Customer Experience",
    "cases.title": "Proyectos destacados",
    "cases.copy": "Productos y experiencias en los que participé, con foco en los desafíos, decisiones y aprendizajes detrás de cada proyecto.",
    "cases.card1.category": "PRODUCT / UX / CX",
    "cases.card1.title": "Diseñar la experiencia",
    "cases.card1.copy": "De un brief a una experiencia concreta: decisiones de producto, UX y negocio para construir journeys simples, medibles y adaptables.",
    "cases.card2.category": "PRODUCT / CX ANALYTICS",
    "cases.card2.title": "Observar, medir, iterar",
    "cases.card2.copy": "Lo que pasa después del lanzamiento también cambia el producto. Datos, consultas reales y comportamiento ayudan a decidir qué mejorar.",
    "cases.details": "VER DETALLES",
    "cv.title": "Mi recorrido profesional",
    "cv.subtitle": "Usuarios, datos y tecnología para analizar productos y experiencias.",
    "cv.now.label": "Actualidad",
    "cv.now.title": "Análisis de producto, UX y CX",
    "cv.now.copy": "En Devecoop participo en Product Analysis, Customer Experience, research y Functional Analysis de experiencias internacionales y multi-idioma. Relevo necesidades de clientes, negocio y usuarios; analizo customer journeys, funnels, comportamiento y métricas en onboarding, registros, promociones y engagement. Colaboro en hipótesis, priorización de mejoras y definición de flujos, reglas de negocio, estados, validaciones y requerimientos funcionales. Trabajo con Producto, UX, Diseño, Frontend, Backend y QA, y acompaño validaciones en QA, preproducción y producción, considerando GDPR y requerimientos regulatorios. En experiencias web y conversacionales, mi experiencia previa en frontend me ayuda a comprender APIs, integraciones, requests, logs y restricciones técnicas.",
    "cv.teacher.label": "Julio 2026 - Actualidad",
    "cv.teacher.title": "Profesora de UX Research",
    "cv.teacher.copy": "En Coderhouse enseño UX Research: formulación del problema, entrevistas, encuestas, usability testing, evaluación heurística y journeys. Trabajo con enfoques cualitativos, cuantitativos y mixtos, síntesis, insights y comunicación de resultados. La docencia me exige explicar decisiones metodológicas y hacer comprensibles problemas complejos.",
    "cv.prev.title": "Estrategia digital, análisis y medición",
    "cv.prev.copy": "En Amapola Digital construí la base de mi perfil analítico: conectar objetivos de negocio, comportamiento, medición, análisis y recomendaciones. Trabajé en estrategia digital, campañas, análisis de audiencias, funnels y conversiones, con Google Analytics, Google Tag Manager y definición de eventos. Combiné research de mercado y benchmarking con sitios y journeys digitales, elaboración de informes y recomendaciones a clientes. Coordiné proyectos end-to-end y la relación con stakeholders.",
    "cv.education.label": "Formación",
    "cv.education.title": "Comportamiento, negocio y comprensión técnica",
    "cv.education.meta": "Publicidad, ciencias sociales, Dirección de PYMES, UX Research y analítica",
    "cv.education.copy": "Me formé en Publicidad y Comunicación, complementé mi recorrido con estudios en Sociología y Ciencia Política y finalicé un Máster en Dirección de PYMES. También enseño Investigación Publicitaria.<br><br>Mi experiencia previa en desarrollo me permite comprender qué ocurre detrás de una interfaz, conversar con equipos técnicos y evaluar restricciones y viabilidad sin perder de vista la experiencia de las personas.<br><br>Trabajé con JavaScript, HTML, CSS/SCSS, Laravel Blade, Django Templates, WordPress, APIs y Git, además de debugging y QA. Esa base técnica acompaña mi trabajo de análisis de productos digitales.",
    "cv.download": "Descargar CV Completo",
    "contact.title": "De las preguntas a la evidencia",
    "contact.copy": "Me interesa trabajar en equipos donde haya preguntas complejas sobre usuarios, productos y experiencias que puedan transformarse en evidencia y mejores decisiones.",
    "footer.text": "Ayelén Campot Ledo · Product Analyst | UX & Customer Experience | Research"
  },
  "en": {
    "nav.projects": "Featured projects",
    "nav.about": "About",
    "nav.contact": "Let's talk",
    "hero.titlePrefix": "I'm",
    "hero.copy": "<span class=\"text-slate-900 font-semibold\">Product Analyst | UX &amp; Customer Experience | Research</span><br><br>I analyze digital products and experiences to understand what is happening, where friction appears and what could improve. I combine Product Analysis, UX Research and Customer Experience <strong class=\"text-violet-600 font-semibold\">with a technical background to connect user needs, business goals</strong> and implementation possibilities.",
    "hero.cta": "View projects",
    "about.title": "About me",
    "about.p1": "My background began in Advertising, with a question that still guides my work: how people behave in digital experiences. In digital marketing, I connected campaigns, audiences, analytics, funnels and conversions. I then moved into web development to understand how products are built and work more effectively with technical teams.",
    "about.p2": "That path brought me closer to product analysis, UX, research and Customer Experience. Today I work on international digital products and experiences at Devecoop and teach UX Research and Advertising Research. My focus is understanding what happens in an experience, why it happens and what we can change to improve it.",
    "about.years": "Years of experience",
    "about.campaigns": "Digital products",
    "about.card.behavior": "UX Research",
    "about.card.product": "Product Analysis",
    "about.card.gamified": "Engagement & journeys",
    "about.card.constraints": "Customer Experience",
    "cases.title": "Featured projects",
    "cases.copy": "Products and experiences I contributed to, with a focus on the challenges, decisions and lessons behind each project.",
    "cases.card1.category": "PRODUCT / UX / CX",
    "cases.card1.title": "Designing the experience",
    "cases.card1.copy": "From a brief to a concrete experience: product, UX and business decisions to build simple, measurable and adaptable journeys.",
    "cases.card2.category": "PRODUCT / CX ANALYTICS",
    "cases.card2.title": "Observe, measure, iterate",
    "cases.card2.copy": "What happens after launch also changes the product. Data, real customer questions and behavior help us decide what to improve.",
    "cases.details": "VIEW DETAILS",
    "cv.title": "My professional journey",
    "cv.subtitle": "Users, data and technology to analyze products and experiences.",
    "cv.now.label": "Current",
    "cv.now.title": "Product analysis, UX & CX",
    "cv.now.copy": "At Devecoop, I contribute to Product Analysis, Customer Experience, research and Functional Analysis for international, multilingual experiences. I gather client, business and user needs, and analyze customer journeys, funnels, behavior and metrics across onboarding, registration, promotions and engagement. I help develop hypotheses, prioritize improvements and define flows, business rules, states, validations and functional requirements. I work with Product, UX, Design, Frontend, Backend and QA, and support validation in QA, staging and production, considering GDPR and regulatory requirements. Across web and conversational experiences, my previous frontend experience helps me understand APIs, integrations, requests, logs and technical constraints.",
    "cv.teacher.label": "July 2026 - Present",
    "cv.teacher.title": "UX Research Instructor",
    "cv.teacher.copy": "At Coderhouse, I teach UX Research: problem framing, interviews, surveys, usability testing, heuristic evaluation and journeys. I cover qualitative, quantitative and mixed methods, synthesis, insights and communicating findings. Teaching requires me to explain methodological decisions and make complex problems understandable.",
    "cv.prev.title": "Digital strategy, analysis & measurement",
    "cv.prev.copy": "At Amapola Digital, I built the foundation of my analytical approach: connecting business goals, behavior, measurement, analysis and recommendations. I worked on digital strategy, campaigns, audience analysis, funnels and conversions, using Google Analytics, Google Tag Manager and event definition. I combined market research and benchmarking with websites and digital journeys, reporting and client recommendations. I coordinated projects end-to-end and managed stakeholder relationships.",
    "cv.education.label": "Education",
    "cv.education.title": "Behavior, business & technical understanding",
    "cv.education.meta": "Advertising, social sciences, SME Management, UX Research and analytics",
    "cv.education.copy": "I studied Advertising and Communication, complemented by Sociology and Political Science studies, and completed a Master in SME Management. I also teach Advertising Research.<br><br>My previous development experience helps me understand what happens behind an interface, work with technical teams and assess constraints and feasibility while keeping people’s experience in focus.<br><br>I have worked with JavaScript, HTML, CSS/SCSS, Laravel Blade, Django Templates, WordPress, APIs and Git, as well as debugging and QA. This technical foundation supports my analysis of digital products.",
    "cv.download": "Download full CV",
    "contact.title": "From questions to evidence",
    "contact.copy": "I want to work with teams asking complex questions about users, products and experiences, turning those questions into evidence and better decisions.",
    "footer.text": "Ayelén Campot Ledo · Product Analyst | UX & Customer Experience | Research"
  }
};

let currentLanguage = localStorage.getItem('aye-language') || 'es';
let currentTheme = localStorage.getItem('aye-theme') || (document.documentElement.classList.contains('dark') ? 'dark' : 'light');

const getBasePath = () => {
  if (!window.location.hostname.endsWith('github.io')) return '';

  const [repoName] = window.location.pathname.split('/').filter(Boolean);
  return repoName ? `/${repoName}` : '';
};

const getAssetPath = (path) => {
  const normalizedPath = path.replace(/^\/+/, '');
  return `${getBasePath()}/${normalizedPath}`;
};

const applyLanguage = (language) => {
  currentLanguage = translations[language] ? language : 'es';
  localStorage.setItem('aye-language', currentLanguage);
  document.documentElement.lang = currentLanguage;

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.getAttribute('data-i18n');
    if (key && translations[currentLanguage][key]) {
      element.textContent = translations[currentLanguage][key];
    }
  });

  document.querySelectorAll('[data-i18n-html]').forEach((element) => {
    const key = element.getAttribute('data-i18n-html');
    if (key && translations[currentLanguage][key]) {
      element.innerHTML = translations[currentLanguage][key];
    }
  });

  document.querySelectorAll('.language-option').forEach((button) => {
    const isActive = button.getAttribute('data-lang') === currentLanguage;
    button.classList.toggle('bg-white', isActive);
    button.classList.toggle('text-violet-600', isActive);
    button.classList.toggle('shadow-sm', isActive);
  });

  document.querySelectorAll('[data-cv-link]').forEach((link) => {
    const href = link.getAttribute(`data-cv-${currentLanguage}`);

    if (href) link.setAttribute('href', getAssetPath(href));
  });

  initIcons();
};

const applyTheme = (theme) => {
  currentTheme = theme === 'dark' ? 'dark' : 'light';
  localStorage.setItem('aye-theme', currentTheme);
  document.documentElement.classList.toggle('dark', currentTheme === 'dark');

  document.querySelectorAll('.theme-toggle').forEach((button) => {
    const isDark = currentTheme === 'dark';
    button.setAttribute('aria-pressed', String(isDark));
    button.setAttribute('aria-label', isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
    button.innerHTML = `<i data-lucide="${isDark ? 'sun' : 'moon'}" class="theme-toggle-icon h-5 w-5"></i>`;
  });

  initIcons();
};

document.addEventListener('DOMContentLoaded', () => {
  initIcons();
  applyLanguage(currentLanguage);
  applyTheme(currentTheme);

  const yearSpan = document.getElementById('current-year');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear().toString();

  document.querySelectorAll('[data-gh-fallback-href]').forEach((link) => {
    if (link.hasAttribute('data-cv-link')) return;

    const fallbackHref = link.getAttribute('data-gh-fallback-href');
    if (fallbackHref && window.location.hostname.endsWith('github.io')) {
      link.setAttribute('href', fallbackHref);
    }
  });

  const menuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');

  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', () => {
      const isOpen = !mobileMenu.classList.contains('hidden');

      mobileMenu.classList.toggle('hidden', isOpen);
      menuButton.setAttribute('aria-expanded', String(!isOpen));
      menuButton.innerHTML = `<i data-lucide="${isOpen ? 'menu' : 'x'}" class="w-5 h-5"></i>`;
      initIcons();
    });

    mobileMenuLinks.forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.innerHTML = '<i data-lucide="menu" class="w-5 h-5"></i>';
        initIcons();
      });
    });
  }

  document.querySelectorAll('.language-option').forEach((button) => {
    button.addEventListener('click', () => {
      const language = button.getAttribute('data-lang');
      if (language) applyLanguage(language);
    });
  });

  document.querySelectorAll('.theme-toggle').forEach((button) => {
    button.addEventListener('click', () => {
      applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });
  });

  const revealElements = document.querySelectorAll('.scroll-reveal');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealElements.forEach((element) => element.classList.add('is-visible'));
  } else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, {
      rootMargin: '0px 0px -12% 0px',
      threshold: 0.15
    });

    revealElements.forEach((element) => revealObserver.observe(element));
  }
});

// Case Studies Data
const CASE_STUDIES = {
  "case-1": {
    "title": "Diseñar la experiencia",
    "subtitle": "Del brief al journey",
    "category": "PRODUCT / UX / CX",
    "color": "from-purple-500 to-indigo-600",
    "icon": "gamepad-2",
    "note": "Las métricas de campaña corresponden al trabajo global de equipos multidisciplinarios. No se incluyen materiales visuales por confidencialidad.",
    "sections": [
      {
        "title": "Desde el brief",
        "paragraphs": [
          "Cada experiencia empieza con una pregunta: cómo conectar lo que necesita hacer la persona con lo que busca el negocio, dentro de las posibilidades del proyecto."
        ]
      },
      {
        "title": "MIND",
        "paragraphs": [
          "Después de más de 22 campañas vimos que se repetían registros, puntos, trivias, premios, QR, referidos, validaciones y métricas. Aun así, cada webapp llevaba cerca de tres meses de desarrollo, aunque muchas promociones duraran poco.",
          "MIND nació como una plataforma white label configurable, con feature flags y módulos reutilizables. Los tiempos de desarrollo podían pasar de unos tres meses a uno.",
          "Transformo briefs comerciales y creativos en flows concretos. Trabajo con Diseño, detecto posibles problemas de UX y defino con Marketing qué necesita medir cada negocio.",
          "Propongo métricas que pueden salir de GA4/GTM, logs y base de datos, y colaboro en dashboards custom según las preguntas del cliente.",
          "Una de las ideas que propuse fue que cada campaña dejara información útil para futuras decisiones de Marketing y Producto, además de reducir tiempos de desarrollo."
        ],
        "items": [
          "<strong class=\"block text-2xl font-display text-violet-600\">+22 campañas</strong>como aprendizaje previo",
          "<strong class=\"block text-2xl font-display text-violet-600\">≈3 → 1 mes</strong>de desarrollo, aproximadamente, según la campaña",
          "<strong class=\"block text-2xl font-display text-violet-600\">Analytics configurable</strong>según las preguntas de cada negocio"
        ],
        "takeaway": "No se trataba solo de reutilizar código, sino de convertir campañas aisladas en un producto que aprendiera con cada implementación."
      },
      {
        "title": "Kimberly-Clark",
        "paragraphs": [
          "Era una promoción postcompra por WhatsApp para madres y padres con niños pequeños. Para participar por premios de pañales debían completar algunos datos y subir el ticket de compra.",
          "Desde el brief pensé que el flow debía ser lo más corto posible. Redujimos la información inicial a lo indispensable y enviamos los términos y condiciones en un PDF para no cargar la conversación. Menos pasos también significaban menos mensajes y menor costo de WhatsApp.",
          "Anticipé que la mayor fricción estaría en la carga del ticket. Lo validé con el cliente, pero la marca necesitaba ese comprobante para verificar la compra si la persona ganaba.",
          "La mayor caída proporcional apareció en ese paso. Como el ticket era necesario, la decisión fue simplificar el resto del recorrido."
        ],
        "items": [
          "<strong class=\"block text-2xl font-display text-violet-600\">48.632</strong>iniciaron el journey",
          "<strong class=\"block text-2xl font-display text-violet-600\">32.677</strong>completaron el registro · ≈67% del inicio",
          "<strong class=\"block text-2xl font-display text-violet-600\">19.931</strong>completaron la participación · ≈41% del total y 61% de registrados"
        ],
        "takeaway": "No toda fricción puede eliminarse. A veces hay que entender por qué existe y simplificar todo lo demás alrededor."
      },
      {
        "title": "Privacidad y experiencia",
        "paragraphs": [
          "También incorporo privacidad, consentimiento, términos de participación y tratamiento responsable de datos en campañas de LATAM y Europa, incluyendo requisitos del GDPR en España y la UE. Pedir solo lo necesario y explicar su uso forma parte de cuidar la experiencia."
        ]
      },
      {
        "title": "Dercos / Vichy + Dadatina",
        "paragraphs": [
          "Trabajé sobre la experiencia digital de una campaña realizada junto con la marca y Dadatina.",
          "Traduje necesidades de campaña y contenido a una web concreta, conectando comunicación, navegación, requerimientos funcionales y posibilidades técnicas con Diseño y Desarrollo."
        ],
        "takeaway": "La idea era que la web se sintiera como una continuación de lo que la persona ya había visto en la campaña."
      },
      {
        "title": "Actimel / Gaming",
        "paragraphs": [
          "En las campañas de Actimel trabajamos con QR, gaming, progresión, coleccionabilidad y engagement. Mi participación estuvo en journeys, reglas, validaciones y adaptación de la experiencia a distintos mercados y contextos.",
          "Super Mario Bros combinó QR, interacción y participación. En Pokémon, la experiencia sumó coleccionabilidad y contenidos de salud e inmunidad."
        ],
        "items": [
          "<strong class=\"block text-2xl font-display text-violet-600\">345.326</strong>usuarios únicos · Super Mario Bros",
          "<strong class=\"block text-2xl font-display text-violet-600\">1.622.094</strong>interacciones mediante QR · Super Mario Bros",
          "<strong class=\"block text-2xl font-display text-violet-600\">+1,4 millones</strong>de escaneos únicos en Iberia durante los primeros 3 meses · Pokémon"
        ],
        "takeaway": "Las métricas corresponden al desempeño global de productos desarrollados por equipos multidisciplinarios."
      }
    ]
  },
  "case-2": {
    "title": "Observar, medir, iterar",
    "subtitle": "De la evidencia a la mejora",
    "category": "PRODUCT / CX ANALYTICS",
    "color": "from-violet-500 to-purple-700",
    "icon": "search",
    "note": "Las métricas de campaña corresponden al trabajo global de equipos multidisciplinarios. No se incluyen materiales visuales por confidencialidad.",
    "sections": [
      {
        "title": "Después del lanzamiento",
        "paragraphs": [
          "Una primera observación puede señalar un riesgo. Lo que pasa después del lanzamiento ayuda a entender si ese problema existe y qué conviene cambiar."
        ]
      },
      {
        "title": "Danacol: puntos y progresión",
        "paragraphs": [
          "En Danacol había puntos acumulados y puntos disponibles. Al revisar el diseño detecté que el naming y la jerarquía podían generar confusión. La experiencia salió igualmente a producción.",
          "Después, Customer Experience empezó a recibir consultas sobre esa parte del journey. Hablé con CX, revisé los casos y usé esa evidencia para fundamentar un cambio de diseño.",
          "Se modificaron naming y jerarquía y se agregó una card de progreso. Mostraba cuánto faltaba para participar del sorteo y cambiaba de estado al alcanzar el objetivo.",
          "Después del cambio dejaron de aparecer consultas o quejas relacionadas con esa confusión."
        ],
        "items": [
          "<strong class=\"block text-2xl font-display text-violet-600\">33.312</strong>usuarios únicos · escala de la campaña",
          "<strong class=\"block text-2xl font-display text-violet-600\">910.781</strong>interacciones mediante QR · escala de la campaña"
        ],
        "takeaway": "Primero hubo una intuición de UX. La evidencia real de CX permitió justificar el cambio."
      },
      {
        "title": "Danacol: medición y ventas",
        "paragraphs": [
          "Marketing quería entender cómo se relacionaba la participación en la promoción con las ventas. Un mismo código podía usarse hasta tres veces, por lo que cada participación no podía contarse como una nueva compra.",
          "Trabajamos sobre tracking de usuarios, códigos y participaciones para construir una lectura más responsable. Ayudé a convertir la pregunta de negocio en una necesidad concreta de medición y trabajé con Marketing y Tecnología sobre qué datos necesitábamos.",
          "Esa lectura permitía una estimación, sin demostrar que la promoción hubiera causado ventas."
        ],
        "items": [
          "La pregunta de Marketing definió qué necesitábamos medir y cómo leer los datos."
        ],
        "takeaway": "Medir más no siempre significa entender mejor. Primero hay que saber qué representa realmente cada dato."
      },
      {
        "title": "WhatsApp: del funnel al punto de fricción",
        "paragraphs": [
          "Analizamos el recorrido desde el inicio del journey hasta completar la participación. La mayor pérdida proporcional apareció después del registro, en la carga del ticket: cerca del 39%, frente al 33% en el paso anterior.",
          "Eso permitió concentrar la mejora en la activación y simplificar lo que rodeaba al ticket, en lugar de intentar optimizar todo el journey sin foco. El funnel no medía la adquisición previa al inicio."
        ],
        "items": [
          "<strong class=\"block text-2xl font-display text-violet-600\">48.632</strong>iniciaron el journey",
          "<strong class=\"block text-2xl font-display text-violet-600\">32.677</strong>completaron el registro · ≈67% del inicio",
          "<strong class=\"block text-2xl font-display text-violet-600\">19.931</strong>completaron la participación · ≈41% del total y 61% de registrados"
        ],
        "takeaway": "Dato, diagnóstico, oportunidad."
      }
    ]
  }
};

const ABOUT_CARDS = {
  "about-research": {
    "title": "UX Research",
    "subtitle": "From questions to insights",
    "category": "User Behavior",
    "color": "from-violet-500 to-fuchsia-600",
    "icon": "target",
    "sections": [
      {
        "title": "Focus",
        "content": "I work with problem framing, interviews, surveys, usability testing, heuristic evaluation and customer journeys. I combine qualitative, quantitative and mixed research methods according to the question and context."
      },
      {
        "title": "From evidence to communication",
        "content": "I organize findings, synthesize insights and communicate results so teams can discuss decisions. Teaching UX Research and Advertising Research reinforces my methodological practice and ability to explain complex problems."
      }
    ]
  },
  "about-frontend": {
    "title": "Product Analysis",
    "subtitle": "Connecting evidence, needs and decisions",
    "category": "Product Strategy",
    "color": "from-indigo-500 to-blue-600",
    "icon": "brain",
    "sections": [
      {
        "title": "Focus",
        "content": "In Product Discovery, I help frame problems, gather needs and formulate hypotheses. Analysis connects business goals, behavior and constraints to inform Product Strategy."
      },
      {
        "title": "How I contribute",
        "items": [
          "Functional Analysis: flows, rules, states, validations and requirements.",
          "Prioritizing improvements by available evidence, value and effort.",
          "Stakeholder Management: aligning needs and criteria with clients and teams.",
          "Working with Cross-functional Teams and following through to implementation validation."
        ]
      }
    ]
  },
  "about-gamification": {
    "title": "Engagement & journeys",
    "subtitle": "Understanding what encourages participation and what gets in the way",
    "category": "Digital Products",
    "color": "from-purple-500 to-indigo-700",
    "icon": "gamepad-2",
    "sections": [
      {
        "title": "Focus",
        "content": "I analyze onboarding, registration, QR codes, points, prizes and conversational experiences. I review how a campaign’s promise connects with understanding its mechanics and the effort required to participate."
      },
      {
        "title": "What I review",
        "items": [
          "Understandable rules, instructions and rewards.",
          "Messages and microcopy within flows: a contribution to UX Content.",
          "States, feedback and validations at each step.",
          "Funnels, activation and engagement signals when data is available."
        ]
      }
    ]
  },
  "about-ux": {
    "title": "Customer Experience",
    "subtitle": "Analyzing the experience from start to finish",
    "category": "CX / Continuous Improvement",
    "color": "from-indigo-500 to-violet-600",
    "icon": "sliders-horizontal",
    "sections": [
      {
        "title": "Focus",
        "content": "I analyze the end-to-end Customer Journey: expectations, interaction, friction, behavior, resolution and perception. I connect what people need with what the product enables them to do."
      },
      {
        "title": "How I approach it",
        "content": "I combine customer insights, Metrics and Research to identify Continuous Improvement opportunities. I consider clear messages, consistency across channels and campaigns, regulatory requirements and technical feasibility. Experience measurement helps assess what changes after an improvement."
      }
    ]
  }
};

const ABOUT_CARDS_ES = {
  "about-research": {
    "title": "UX Research",
    "subtitle": "De la pregunta a los insights",
    "category": "User Behavior",
    "color": "from-violet-500 to-fuchsia-600",
    "icon": "target",
    "sections": [
      {
        "title": "Foco",
        "content": "Trabajo con problem framing, entrevistas, encuestas, usability testing, evaluación heurística y customer journeys. Combino investigación cualitativa, cuantitativa y mixta según la pregunta y el contexto."
      },
      {
        "title": "De la evidencia a la comunicación",
        "content": "Organizo hallazgos, sintetizo insights y comunico resultados para que el equipo pueda discutir decisiones. Mi docencia en UX Research e Investigación Publicitaria refuerza ese trabajo metodológico y la capacidad de explicar problemas complejos."
      }
    ]
  },
  "about-frontend": {
    "title": "Product Analysis",
    "subtitle": "Conectar evidencia, necesidades y decisiones",
    "category": "Product Strategy",
    "color": "from-indigo-500 to-blue-600",
    "icon": "brain",
    "sections": [
      {
        "title": "Foco",
        "content": "En Product Discovery ayudo a delimitar el problema, relevar necesidades y formular hipótesis. El análisis conecta objetivos de negocio, comportamiento y restricciones para aportar a Product Strategy."
      },
      {
        "title": "Cómo aporto",
        "items": [
          "Functional Analysis: flujos, reglas, estados, validaciones y requerimientos.",
          "Priorización de mejoras según evidencia disponible, valor y esfuerzo.",
          "Stakeholder Management: acordar necesidades y criterios con clientes y equipos.",
          "Trabajo con Cross-functional Teams y seguimiento hasta la validación de la implementación."
        ]
      }
    ]
  },
  "about-gamification": {
    "title": "Engagement y journeys",
    "subtitle": "Comprender qué invita a participar y qué dificulta avanzar",
    "category": "Digital Products",
    "color": "from-purple-500 to-indigo-700",
    "icon": "gamepad-2",
    "sections": [
      {
        "title": "Foco",
        "content": "Analizo onboarding, registros, QR, puntos, premios y experiencias conversacionales. Reviso cómo se conectan la promesa de una campaña, la comprensión de la mecánica y el esfuerzo de participar."
      },
      {
        "title": "Qué reviso",
        "items": [
          "Reglas, instrucciones y recompensas comprensibles.",
          "Mensajes y microcopy dentro del flujo: un aporte al UX Content.",
          "Estados, feedback y validaciones en cada paso.",
          "Funnels y señales de activación y engagement, cuando hay datos disponibles."
        ]
      }
    ]
  },
  "about-ux": {
    "title": "Customer Experience",
    "subtitle": "Analizar la experiencia de principio a fin",
    "category": "CX / Continuous Improvement",
    "color": "from-indigo-500 to-violet-600",
    "icon": "sliders-horizontal",
    "sections": [
      {
        "title": "Foco",
        "content": "Analizo el Customer Journey end-to-end: expectativas, interacción, fricciones, comportamiento, resolución y percepción. Busco conectar lo que necesita la persona con lo que el producto permite hacer."
      },
      {
        "title": "Cómo lo abordo",
        "content": "Combino customer insights, métricas y research para formular oportunidades de mejora continua. Considero claridad de mensajes, consistencia entre canales y campaña, requerimientos regulatorios y viabilidad técnica. Experience measurement ayuda a evaluar qué cambia después de una mejora."
      }
    ]
  }
};

const CASE_STUDIES_EN = {
  "case-1": {
    "title": "Designing the experience",
    "subtitle": "From brief to journey",
    "category": "PRODUCT / UX / CX",
    "color": "from-purple-500 to-indigo-600",
    "icon": "gamepad-2",
    "note": "Campaign metrics reflect the collective work of multidisciplinary teams. Visual materials are omitted for confidentiality.",
    "sections": [
      {
        "title": "From the brief",
        "paragraphs": [
          "Each experience starts with a question: how to connect what people need to do with what the business wants to achieve, within the project’s constraints."
        ]
      },
      {
        "title": "MIND",
        "paragraphs": [
          "After more than 22 campaigns, we saw the same elements repeating: registration, points, quizzes, prizes, QR codes, referrals, validations and metrics. Yet each webapp still took around three months to develop, even when the promotion was short-lived.",
          "MIND became a configurable white-label platform with feature flags and reusable modules. Development could go from roughly three months to one.",
          "I turn commercial and creative briefs into concrete flows. I work with Design, identify potential UX issues and define with Marketing what each business needs to measure.",
          "I propose metrics using GA4/GTM, logs and database information, and help shape custom dashboards around each client’s questions.",
          "One idea I proposed was for each campaign to leave useful information for future Marketing and Product decisions, alongside reducing development time."
        ],
        "items": [
          "<strong class=\"block text-2xl font-display text-violet-600\">22+ campaigns</strong>as prior learning",
          "<strong class=\"block text-2xl font-display text-violet-600\">≈3 → 1 month</strong>of development, approximately, depending on the campaign",
          "<strong class=\"block text-2xl font-display text-violet-600\">Configurable analytics</strong>based on each business’s questions"
        ],
        "takeaway": "It was more than reusing code: turning isolated campaigns into a product that could learn from each implementation."
      },
      {
        "title": "Kimberly-Clark",
        "paragraphs": [
          "This was a post-purchase WhatsApp promotion for parents of young children. To enter for diaper prizes, participants provided some information and uploaded their purchase receipt.",
          "From the brief, I felt the flow needed to be as short as possible. We kept initial information to the essentials and sent terms and conditions as a PDF to avoid overloading the conversation. Fewer steps also meant fewer messages and lower WhatsApp costs.",
          "I anticipated that receipt upload would be the main friction point. I validated this with the client, but the brand needed that proof to verify a winner’s purchase.",
          "The largest proportional drop-off appeared at that step. Since the receipt was necessary, we decided to simplify the rest of the journey."
        ],
        "items": [
          "<strong class=\"block text-2xl font-display text-violet-600\">48,632</strong>started the journey",
          "<strong class=\"block text-2xl font-display text-violet-600\">32,677</strong>completed registration · ≈67% of starters",
          "<strong class=\"block text-2xl font-display text-violet-600\">19,931</strong>completed participation · ≈41% of starters and 61% of registered users"
        ],
        "takeaway": "Not every friction point can be removed. Sometimes we need to understand why it exists and simplify everything around it."
      },
      {
        "title": "Privacy and experience",
        "paragraphs": [
          "I also incorporate privacy, consent, participation terms and responsible data handling into campaigns across LATAM and Europe, including GDPR requirements in Spain and the EU. Requesting only necessary data and explaining its use is part of caring for the experience."
        ]
      },
      {
        "title": "Dercos / Vichy + Dadatina",
        "paragraphs": [
          "I worked on the digital experience for a campaign developed with the brand and Dadatina.",
          "I translated campaign and content needs into a web experience, connecting communication, navigation, functional requirements and technical possibilities with Design and Development."
        ],
        "takeaway": "The idea was for the website to feel like a continuation of what people had already seen in the campaign."
      },
      {
        "title": "Actimel / Gaming",
        "paragraphs": [
          "Across Actimel campaigns, we worked with QR codes, gaming, progression, collectibles and engagement. I contributed to journeys, rules, validations and adapting the experience to different markets and contexts.",
          "Super Mario Bros combined QR codes, interaction and participation. Pokémon added collectibles and health and immunity content."
        ],
        "items": [
          "<strong class=\"block text-2xl font-display text-violet-600\">345,326</strong>unique users · Super Mario Bros",
          "<strong class=\"block text-2xl font-display text-violet-600\">1,622,094</strong>QR interactions · Super Mario Bros",
          "<strong class=\"block text-2xl font-display text-violet-600\">1.4M+</strong>unique scans in Iberia during the first 3 months · Pokémon"
        ],
        "takeaway": "These metrics reflect the overall performance of products built by multidisciplinary teams."
      }
    ]
  },
  "case-2": {
    "title": "Observe, measure, iterate",
    "subtitle": "From evidence to improvement",
    "category": "PRODUCT / CX ANALYTICS",
    "color": "from-violet-500 to-purple-700",
    "icon": "search",
    "note": "Campaign metrics reflect the collective work of multidisciplinary teams. Visual materials are omitted for confidentiality.",
    "sections": [
      {
        "title": "After launch",
        "paragraphs": [
          "An initial observation can flag a risk. What happens after launch helps us understand whether the problem exists and what to change."
        ]
      },
      {
        "title": "Danacol: points and progression",
        "paragraphs": [
          "Danacol had accumulated points and available points. During design review, I noticed the naming and hierarchy could cause confusion. The experience still launched with that structure.",
          "Customer Experience then started receiving questions about this part of the journey. I spoke with CX, reviewed the cases and used that evidence to support a design change.",
          "Naming and hierarchy were revised, and a progress card was added. It showed what was needed to enter the prize draw and changed state when the goal was reached.",
          "After the change, questions or complaints about that confusion stopped appearing."
        ],
        "items": [
          "<strong class=\"block text-2xl font-display text-violet-600\">33,312</strong>unique users · campaign scale",
          "<strong class=\"block text-2xl font-display text-violet-600\">910,781</strong>QR interactions · campaign scale"
        ],
        "takeaway": "UX intuition came first. Real CX evidence helped justify the change."
      },
      {
        "title": "Danacol: measurement and sales",
        "paragraphs": [
          "Marketing wanted to understand how promotional participation related to sales. A code could be used up to three times, so every participation could not be counted as a new purchase.",
          "We worked on tracking users, codes and participations to build a more responsible reading. I helped turn the business question into a concrete measurement need and worked with Marketing and Technology on the data required.",
          "That supported an estimate, without demonstrating that the promotion had caused sales."
        ],
        "items": [
          "Marketing’s question guided what we needed to measure and how to read the data."
        ],
        "takeaway": "Measuring more does not always mean understanding more. First, know what each data point really represents."
      },
      {
        "title": "WhatsApp: from funnel to friction point",
        "paragraphs": [
          "We analyzed the journey from starting the flow to completing participation. The largest proportional drop-off came after registration, at receipt upload: around 39%, versus 33% in the previous step.",
          "That helped focus improvements on activation and simplifying the steps around the receipt, rather than optimizing the entire journey without direction. The funnel did not measure acquisition before the journey started."
        ],
        "items": [
          "<strong class=\"block text-2xl font-display text-violet-600\">48,632</strong>started the journey",
          "<strong class=\"block text-2xl font-display text-violet-600\">32,677</strong>completed registration · ≈67% of starters",
          "<strong class=\"block text-2xl font-display text-violet-600\">19,931</strong>completed participation · ≈41% of starters and 61% of registered users"
        ],
        "takeaway": "Data, diagnosis, opportunity."
      }
    ]
  }
};

const getModalData = (id) => {
  if (currentLanguage === 'en') return CASE_STUDIES_EN[id] || ABOUT_CARDS[id];
  return CASE_STUDIES[id] || ABOUT_CARDS_ES[id];
};

// Modal Logic
window.openModal = (id) => {
  const study = getModalData(id);
  if (!study) return;

  const modalContainer = document.getElementById('modal-container');
  const modalContent = document.getElementById('modal-content');

  if (!modalContainer || !modalContent) return;

  // Build the modal HTML
  modalContent.innerHTML = `
    <button onclick="closeModal()" class="absolute top-6 right-6 z-10 p-2 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white transition-colors">
      <i data-lucide="x" class="w-6 h-6"></i>
    </button>

    <div class="h-64 bg-gradient-to-br ${study.color} p-10 flex flex-col justify-end text-white shrink-0">
      <div class="flex items-center gap-2 text-white/80 font-bold text-xs uppercase tracking-widest mb-2">
        <i data-lucide="${study.icon}" class="w-4 h-4"></i> ${study.category}
      </div>
      <h2 class="font-display text-4xl md:text-5xl font-bold">${study.title}</h2>
      <p class="text-lg text-white/90 mt-2 max-w-2xl">${study.subtitle}</p>
    </div>

    <div class="overflow-y-auto p-8 md:p-12 space-y-12 text-left">
      ${study.sections.map((section) => `
        <div class="space-y-4">
          <h4 class="font-display text-xl font-bold text-slate-800 flex items-center gap-2">
            ${section.title}
          </h4>
          ${section.content ? `<p class="text-slate-600 leading-relaxed text-lg">${section.content}</p>` : ''}
          ${section.paragraphs ? section.paragraphs.map((paragraph) => `<p class="text-slate-600 leading-relaxed text-lg">${paragraph}</p>`).join('') : ''}
          ${section.items ? `
            <ul class="grid md:grid-cols-2 gap-3 mt-4">
              ${section.items.map((item) => `
                <li class="flex items-start gap-3 text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-100 text-base">
                  <i data-lucide="chevron-right" class="w-5 h-5 text-violet-500 shrink-0 mt-0.5"></i>
                  <span>${item}</span>
                </li>
              `).join('')}
            </ul>
          ` : ''}
          ${section.takeaway ? `<blockquote class="border-l-2 border-violet-500 pl-4 text-lg font-semibold text-slate-800">${section.takeaway}</blockquote>` : ''}
        </div>
      `).join('')}

      ${study.note ? `
      <div class="pt-8 border-t border-slate-100">
        <div class="flex items-center justify-between text-sm text-slate-400 italic">
          <span>${study.note}</span>
        </div>
      </div>
      ` : ''}
    </div>
  `;

  // Initialize icons inside the modal
  initIcons();

  modalContainer.classList.remove('hidden');
  document.body.style.overflow = 'hidden'; // Prevent scroll
};

window.closeModal = () => {
  const modalContainer = document.getElementById('modal-container');
  if (modalContainer) {
    modalContainer.classList.add('hidden');
    document.body.style.overflow = ''; // Restore scroll
  }
};

// Close on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') window.closeModal();
});
