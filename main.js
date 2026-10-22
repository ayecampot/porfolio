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
    "hero.copy": "<span class=\"text-slate-900 font-semibold\">Product Manager | Product Analytics &amp; UX Research</span><br><br>Lidero el desarrollo y evolución de productos digitales, conectando necesidades de negocio, comportamiento de usuarios y tecnología. Combino <strong class=\"text-violet-600 font-semibold\">estrategia de producto, análisis de datos y UX Research</strong> para transformar oportunidades en experiencias concretas, medibles y centradas en las personas.",
    "hero.cta": "Ver proyectos",
    "about.title": "Sobre mí",
    "about.p1": "Mi recorrido conecta Marketing y Analytics, Desarrollo Web, UX y Research y Product Management. La formación en Publicidad me dio una base para comprender consumidores, mercados y negocios. El desarrollo web me permitió entender cómo se implementan los productos y evaluar su viabilidad técnica.",
    "about.p2": "Hoy lidero la definición y ejecución de productos digitales para marcas internacionales en Devecoop, articulando las necesidades de clientes con Diseño, Ingeniería y QA. Uso datos e investigación para orientar su evolución. Soy profesora de UX Research e Investigación Publicitaria y tengo un Máster en Dirección de PYMES.",
    "about.years": "Años de recorrido",
    "about.campaigns": "Productos digitales",
    "about.card.behavior": "UX Research",
    "about.card.product": "Product Management",
    "about.card.gamified": "Engagement y journeys",
    "about.card.constraints": "Customer Experience",
    "cases.title": "Proyectos destacados",
    "cases.copy": "Del discovery al lanzamiento y la evolución: mi aporte en la definición de productos, la coordinación de su ejecución y las decisiones basadas en datos.",
    "cases.card1.category": "PRODUCT MANAGEMENT / DELIVERY",
    "cases.card1.title": "Diseñar la experiencia",
    "cases.card1.copy": "MIND / MINDbot, Danone Europa, Kimberly-Clark y Dercos: del objetivo de negocio a la definición de flujos, reglas y experiencias con Diseño e Ingeniería.",
    "cases.card2.category": "PRODUCT ANALYTICS / UX",
    "cases.card2.title": "Observar, medir, iterar",
    "cases.card2.copy": "Danacol y experiencias por WhatsApp: cómo conecté preguntas de negocio, funnels y evidencia de Customer Experience con decisiones de mejora.",
    "cases.details": "VER DETALLES",
    "cv.title": "Mi recorrido profesional",
    "cv.subtitle": "Estrategia, ejecución y aprendizaje continuo en productos digitales.",
    "cv.now.label": "Actualidad",
    "cv.now.title": "Product Management | Product Analytics & Digital Experiences",
    "cv.now.copy": "Lidero productos y roadmaps de campañas digitales internacionales de loyalty, gamificación, promociones y engagement. Trabajo directamente con clientes para comprender objetivos y oportunidades, y definir alcance, funcionalidades, flujos y prioridades.",
    "cv.teacher.label": "2021 - Actualidad",
    "cv.teacher.title": "Docencia",
    "cv.teacher.coderhouse": "Profesora de UX Research en Coderhouse",
    "cv.teacher.isec": "Profesora de Investigación Publicitaria en la Tecnicatura Superior en Publicidad del ISEC",
    "cv.teacher.copy": "La docencia fortalece mi práctica de investigación, pensamiento analítico y comunicación de decisiones.",
    "cv.prev.title": "Estrategia digital y gestión de proyectos",
    "cv.prev.copy": "En Amapola Digital gestioné proyectos de principio a fin y la relación con clientes. Conecté objetivos de negocio con estrategia digital, research de mercado y benchmarking. Trabajé con audiencias, funnels, conversiones, Google Analytics y Google Tag Manager para comunicar hallazgos y orientar decisiones.",
    "cv.education.label": "Formación",
    "cv.education.title": "Comportamiento, negocio y comprensión técnica",
    "cv.education.meta": "Publicidad, ciencias sociales, Dirección de PYMES, UX Research y analítica",
    "cv.education.copy": "Me formé en Publicidad y Comunicación, complementé mi recorrido con estudios en Sociología y Ciencia Política y finalicé un Máster en Dirección de PYMES. También enseño Investigación Publicitaria.<br><br>Mi experiencia en desarrollo web es un diferencial para decidir sobre producto: me permite evaluar viabilidad, comprender integraciones y conversar con equipos técnicos, manteniendo el foco en las personas y el negocio.",
    "cv.download": "Descargar CV Completo",
    "contact.title": "De la oportunidad al producto",
    "contact.copy": "Me interesa trabajar en productos donde pueda conectar estrategia, ejecución, datos e investigación para mejorar la experiencia y los resultados del negocio.",
    "footer.text": "Ayelén Campot Ledo · Product Manager | Product Analytics & UX Research",
    "cases.card3.category": "PRODUCT ANALYTICS / AI",
    "cases.card3.title": "De datos a decisiones",
    "cases.card3.copy": "Dashboards de campañas e insights semanales: una propuesta para centralizar datos y comunicar resultados a Marketing y clientes con apoyo de IA.",
    "cv.now.delivery": "Coordino con Diseño, Ingeniería y QA desde discovery hasta lanzamiento y evolución. Mi participación previa en frontend me permite evaluar restricciones técnicas y acompañar la implementación.",
    "cv.now.analytics": "Analizo KPIs, funnels, comportamiento y fricciones para orientar mejoras. Creo dashboards y analizo datos con SQL, Tableau y Power BI para conectar el seguimiento del producto con las decisiones de negocio."
  },
  "en": {
    "nav.projects": "Featured projects",
    "nav.about": "About",
    "nav.contact": "Let's talk",
    "hero.titlePrefix": "I'm",
    "hero.copy": "<span class=\"text-slate-900 font-semibold\">Product Manager | Product Analytics &amp; UX Research</span><br><br>I lead the development and evolution of digital products, connecting business needs, user behavior and technology. I combine <strong class=\"text-violet-600 font-semibold\">product strategy, data analysis and UX Research</strong> to turn opportunities into tangible, measurable, people-centered experiences.",
    "hero.cta": "View projects",
    "about.title": "About me",
    "about.p1": "My path connects Marketing and Analytics, Web Development, UX and Research, and Product Management. Studying Advertising gave me a foundation for understanding consumers, markets and business. Web development helped me understand product implementation and assess technical feasibility.",
    "about.p2": "Today I lead the definition and delivery of digital products for international brands at Devecoop, aligning client needs with Design, Engineering and QA. I use data and research to guide product evolution. I also teach UX Research and Advertising Research and hold a Master in SME Management.",
    "about.years": "Years of experience",
    "about.campaigns": "Digital products",
    "about.card.behavior": "UX Research",
    "about.card.product": "Product Management",
    "about.card.gamified": "Engagement & journeys",
    "about.card.constraints": "Customer Experience",
    "cases.title": "Featured projects",
    "cases.copy": "From discovery to launch and iteration: my contribution to product definition, delivery coordination and decisions informed by data.",
    "cases.card1.category": "PRODUCT MANAGEMENT / DELIVERY",
    "cases.card1.title": "Designing the experience",
    "cases.card1.copy": "MIND / MINDbot, Danone Europe, Kimberly-Clark and Dercos: turning business goals into flows, rules and experiences with Design and Engineering.",
    "cases.card2.category": "PRODUCT ANALYTICS / UX",
    "cases.card2.title": "Observe, measure, iterate",
    "cases.card2.copy": "Danacol and WhatsApp experiences: how I connected business questions, funnels and Customer Experience evidence with product improvements.",
    "cases.details": "VIEW DETAILS",
    "cv.title": "My professional journey",
    "cv.subtitle": "Strategy, delivery and continuous learning in digital products.",
    "cv.now.label": "Current",
    "cv.now.title": "Product Management | Product Analytics & Digital Experiences",
    "cv.now.copy": "I lead products and roadmaps for international digital campaigns across loyalty, gamification, promotions and engagement. I work directly with clients to understand goals and opportunities, and define scope, features, flows and priorities.",
    "cv.teacher.label": "2021 - Present",
    "cv.teacher.title": "Teaching",
    "cv.teacher.coderhouse": "UX Research Instructor at Coderhouse",
    "cv.teacher.isec": "Advertising Research Instructor in the Tecnicatura Superior en Publicidad program at ISEC",
    "cv.teacher.copy": "Teaching strengthens my research practice, analytical thinking and ability to communicate decisions.",
    "cv.prev.title": "Digital strategy and project management",
    "cv.prev.copy": "At Amapola Digital, I managed projects end to end and client relationships. I connected business goals with digital strategy, market research and benchmarking. I worked with audiences, funnels, conversions, Google Analytics and Google Tag Manager to communicate findings and inform decisions.",
    "cv.education.label": "Education",
    "cv.education.title": "Behavior, business & technical understanding",
    "cv.education.meta": "Advertising, social sciences, SME Management, UX Research and analytics",
    "cv.education.copy": "I studied Advertising and Communication, complemented my background with Sociology and Political Science studies, and completed a Master in SME Management. I also teach Advertising Research.<br><br>My web development experience strengthens my product decisions: it helps me assess feasibility, understand integrations and work with technical teams while keeping people and business goals in focus.",
    "cv.download": "Download full CV",
    "contact.title": "From opportunity to product",
    "contact.copy": "I want to work on products where I can connect strategy, delivery, data and research to improve the experience and business outcomes.",
    "footer.text": "Ayelén Campot Ledo · Product Manager | Product Analytics & UX Research",
    "cases.card3.category": "PRODUCT ANALYTICS / AI",
    "cases.card3.title": "From data to decisions",
    "cases.card3.copy": "Campaign dashboards and weekly insights: a proposal to centralize data and communicate results to Marketing and clients with AI assistance.",
    "cv.now.delivery": "I coordinate with Design, Engineering and QA from discovery through launch and iteration. My previous frontend contributions help me assess technical constraints and support implementation.",
    "cv.now.analytics": "I analyze KPIs, funnels, behavior and friction to guide improvements. I create dashboards and analyze data with SQL, Tableau and Power BI to connect product monitoring with business decisions."
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
    "subtitle": "Definir, coordinar y lanzar",
    "category": "PRODUCT MANAGEMENT / DELIVERY",
    "color": "from-purple-500 to-indigo-600",
    "icon": "gamepad-2",
    "note": "Las métricas de campaña corresponden al trabajo global de equipos multidisciplinarios. No se incluyen materiales visuales por confidencialidad.",
    "sections": [
      {
        "title": "Desde el brief",
        "paragraphs": [
          "Parto de los objetivos del cliente para definir alcance, funcionalidades, flujos y prioridades. Coordino con Diseño, Ingeniería y QA desde discovery hasta lanzamiento y evolución. Los siguientes casos muestran cómo se concreta ese trabajo."
        ]
      },
      {
        "title": "MIND / MINDbot",
        "paragraphs": [
          "Contexto y oportunidad: después de más de 22 campañas promocionales, identificamos registros, puntos, trivias, premios, QR, referidos y validaciones que se repetían. Cada nueva webapp exigía volver a resolver necesidades similares.",
          "Decisión de producto: convertir esos aprendizajes en MIND / MINDbot, una plataforma modular y configurable de loyalty y engagement. Los módulos reutilizables, feature flags y reglas configurables permiten adaptar experiencias sin definir cada campaña desde cero.",
          "Mi aporte: traduzco briefs y objetivos de clientes en flujos y requerimientos, trabajo con Diseño sobre el journey y coordino con Ingeniería y QA la implementación y validación.",
          "Defino con Marketing las preguntas de negocio y propongo medición con GA4/GTM, logs y datos de base de datos. La reutilización, la escalabilidad y la medición orientan la evolución de la plataforma."
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
        "title": "Danone Europa · Actimel / Gaming",
        "paragraphs": [
          "Contexto: productos digitales de promociones y gamificación para distintos países, con QR, premios y mecánicas de engagement. El desafío era adaptar cada experiencia a su mercado y sus reglas de participación.",
          "En las campañas de Actimel trabajamos con QR, gaming, progresión, coleccionabilidad y engagement. Mi participación estuvo en journeys, reglas, validaciones y adaptación de la experiencia a distintos mercados y contextos.",
          "Super Mario Bros combinó QR, interacción y participación. En Pokémon, la experiencia sumó coleccionabilidad y contenidos de salud e inmunidad.",
          "Mi aporte se centró en definir journeys, reglas y validaciones, y articular esos requerimientos con Diseño, Ingeniería y QA. El aprendizaje fue considerar las diferencias entre mercados desde la definición del producto."
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
    "category": "PRODUCT ANALYTICS / UX",
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
          "Después del cambio dejaron de aparecer consultas o quejas sobre esa confusión en el seguimiento con CX. Es una señal cualitativa; las métricas de escala de la campaña no miden el impacto de esta mejora."
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
  },
  "case-3": {
    "title": "De datos a decisiones",
    "subtitle": "Dashboards de campañas e insights semanales",
    "category": "PRODUCT ANALYTICS / AI",
    "color": "from-indigo-500 to-violet-700",
    "icon": "chart-no-axes-combined",
    "sections": [
      {
        "title": "Contexto y oportunidad",
        "paragraphs": [
          "Los datos de campañas se consultaban mediante archivos exportados. Identifiqué la necesidad de centralizarlos para facilitar el seguimiento y responder preguntas de Marketing y los clientes.",
          "El valor agregado estaba en aprovechar esos datos más allá de la performance de las campañas en las webapps: generar aprendizajes para mejorar campañas posteriores y aportar información al área de Marketing de Danone para orientar sus decisiones."
        ]
      },
      {
        "title": "Mi rol y decisión de producto",
        "paragraphs": [
          "Propuse e implementé dashboards de seguimiento de campañas. Partí de las preguntas de negocio para decidir qué información mostrar y cómo presentarla de forma comprensible."
        ]
      },
      {
        "title": "Implementación",
        "paragraphs": [
          "Utilicé desarrollo asistido por IA, incluyendo Codex y entornos con skills. Incorporé un agente al proceso de elaboración de insights semanales para comunicar los resultados en un lenguaje comprensible para Marketing y los clientes."
        ]
      },
      {
        "title": "Aprendizaje",
        "paragraphs": [
          "El aprendizaje fue que centralizar datos necesita ir acompañado de una interpretación clara: los dashboards permiten consultar la información y los insights semanales la conectan con las preguntas del negocio."
        ]
      }
    ],
    "note": "No se incluyen datos ni capturas de clientes por confidencialidad."
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
    "title": "Product Management",
    "subtitle": "From opportunity to delivery",
    "category": "Product Strategy",
    "color": "from-indigo-500 to-blue-600",
    "icon": "brain",
    "sections": [
      {
        "title": "Product definition",
        "content": "I lead product definition and roadmaps for digital campaigns. I work with clients to understand goals and opportunities, define scope and prioritize features."
      },
      {
        "title": "Delivery and iteration",
        "items": [
          "Flows, business rules, states, validations and functional requirements.",
          "Coordination with Design, Engineering and QA from discovery through launch.",
          "Prioritizing improvements using data, research and feasibility.",
          "A web development background to support implementation decisions."
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
    "title": "Product Management",
    "subtitle": "De la oportunidad a la ejecución",
    "category": "Product Strategy",
    "color": "from-indigo-500 to-blue-600",
    "icon": "brain",
    "sections": [
      {
        "title": "Definición de producto",
        "content": "Lidero la definición de productos y roadmaps de campañas digitales. Trabajo con clientes para comprender objetivos y oportunidades, definir alcance y priorizar funcionalidades."
      },
      {
        "title": "Ejecución y evolución",
        "items": [
          "Flujos, reglas de negocio, estados, validaciones y requerimientos funcionales.",
          "Coordinación con Diseño, Ingeniería y QA desde discovery hasta lanzamiento.",
          "Priorización de mejoras con datos, investigación y criterios de viabilidad.",
          "Base técnica en desarrollo web para acompañar decisiones de implementación."
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
    "subtitle": "Define, coordinate and launch",
    "category": "PRODUCT MANAGEMENT / DELIVERY",
    "color": "from-purple-500 to-indigo-600",
    "icon": "gamepad-2",
    "note": "Campaign metrics reflect the collective work of multidisciplinary teams. Visual materials are omitted for confidentiality.",
    "sections": [
      {
        "title": "From the brief",
        "paragraphs": [
          "I start with client goals to define scope, features, flows and priorities. I coordinate with Design, Engineering and QA from discovery through launch and iteration. The following cases show how that work takes shape."
        ]
      },
      {
        "title": "MIND / MINDbot",
        "paragraphs": [
          "Context and opportunity: after more than 22 promotional campaigns, we identified recurring registration, points, quizzes, prizes, QR codes, referrals and validation needs. Each new webapp meant addressing similar needs again.",
          "Product decision: turn those lessons into MIND / MINDbot, a modular, configurable loyalty and engagement platform. Reusable modules, feature flags and configurable rules allow experiences to be adapted without defining every campaign from scratch.",
          "My contribution: I translate client briefs and goals into flows and requirements, work with Design on the journey and coordinate implementation and validation with Engineering and QA.",
          "I define business questions with Marketing and propose measurement using GA4/GTM, logs and database data. Reuse, scalability and measurement guide the platform’s evolution."
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
        "title": "Danone Europe · Actimel / Gaming",
        "paragraphs": [
          "Context: digital promotion and gamification products for different countries, with QR codes, prizes and engagement mechanics. The challenge was adapting each experience to its market and participation rules.",
          "Across Actimel campaigns, we worked with QR codes, gaming, progression, collectibles and engagement. I contributed to journeys, rules, validations and adapting the experience to different markets and contexts.",
          "Super Mario Bros combined QR codes, interaction and participation. Pokémon added collectibles and health and immunity content.",
          "My contribution focused on defining journeys, rules and validations, and coordinating those requirements with Design, Engineering and QA. The learning was to account for differences between markets during product definition."
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
    "category": "PRODUCT ANALYTICS / UX",
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
          "After the change, questions or complaints about that confusion stopped appearing in CX follow-up. This is a qualitative signal; campaign-scale metrics do not measure the impact of this improvement."
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
  },
  "case-3": {
    "title": "From data to decisions",
    "subtitle": "Campaign dashboards and weekly insights",
    "category": "PRODUCT ANALYTICS / AI",
    "color": "from-indigo-500 to-violet-700",
    "icon": "chart-no-axes-combined",
    "sections": [
      {
        "title": "Context and opportunity",
        "paragraphs": [
          "Campaign data was consulted through exported files. I identified a need to centralize it to support monitoring and answer questions from Marketing and clients.",
          "The added value was in using this data beyond webapp campaign performance: generating insights to improve future campaigns and providing Danone’s Marketing team with information to guide its decisions."
        ]
      },
      {
        "title": "My role and product decision",
        "paragraphs": [
          "I proposed and implemented campaign monitoring dashboards. I started with business questions to decide what information to show and how to make it understandable."
        ]
      },
      {
        "title": "Implementation",
        "paragraphs": [
          "I used AI-assisted development, including Codex and environments with skills. I incorporated an agent into the weekly insights process to communicate results in language that Marketing and clients could understand."
        ]
      },
      {
        "title": "Learning",
        "paragraphs": [
          "The learning was that centralizing data needs to be accompanied by clear interpretation: dashboards make information available, while weekly insights connect it with business questions."
        ]
      }
    ],
    "note": "Client data and screenshots are omitted for confidentiality."
  }
};

const getModalData = (id) => {
  if (currentLanguage === 'en') return CASE_STUDIES_EN[id] || ABOUT_CARDS[id];
  return CASE_STUDIES[id] || ABOUT_CARDS_ES[id];
};

// Modal Logic
let modalTrigger = null;

window.openModal = (id) => {
  const study = getModalData(id);
  if (!study) return;

  const modalContainer = document.getElementById('modal-container');
  const modalContent = document.getElementById('modal-content');

  if (!modalContainer || !modalContent) return;

  modalTrigger = document.activeElement;

  // Build the modal HTML
  modalContent.innerHTML = `
    <button type="button" aria-label="${currentLanguage === 'es' ? 'Cerrar detalle' : 'Close details'}" onclick="closeModal()" class="absolute top-6 right-6 z-10 p-2 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white transition-colors">
      <i data-lucide="x" class="w-6 h-6"></i>
    </button>

    <div class="h-64 bg-gradient-to-br ${study.color} p-10 flex flex-col justify-end text-white shrink-0">
      <div class="flex items-center gap-2 text-white/80 font-bold text-xs uppercase tracking-widest mb-2">
        <i data-lucide="${study.icon}" class="w-4 h-4"></i> ${study.category}
      </div>
      <h2 id="modal-title" class="font-display text-4xl md:text-5xl font-bold">${study.title}</h2>
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
  modalContent.querySelector('button').focus({ preventScroll: true });
};

window.closeModal = () => {
  const modalContainer = document.getElementById('modal-container');
  if (modalContainer && !modalContainer.classList.contains('hidden')) {
    modalContainer.classList.add('hidden');
    document.body.style.overflow = ''; // Restore scroll
    modalTrigger?.focus({ preventScroll: true });
  }
};

// Close on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') window.closeModal();
  // Detail views have a single interactive control: keep keyboard focus on Close.
  if (e.key === 'Tab' && !document.getElementById('modal-container').classList.contains('hidden')) {
    e.preventDefault();
    document.querySelector('#modal-content button').focus();
  }
});
