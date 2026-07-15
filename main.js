// Initialize Lucide icons
console.log('Main script loading...');
const initIcons = () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }
};

const translations = {
  es: {
    'nav.projects': 'Casos',
    'nav.about': 'Sobre mí',
    'nav.contact': 'Hablemos',
    'hero.titlePrefix': 'Soy',
    'hero.copy': 'Desarrollo <span class="hero-underline text-slate-900 underline decoration-violet-500">productos digitales</span> desde una mirada interdisciplinaria que integra UX Research, estrategia de producto y desarrollo frontend. Analizo el comportamiento de usuario, colaboro en la definición de funcionalidades y transformo necesidades de negocio en experiencias digitales de valor.',
    'hero.cta': 'Ver casos',
    'about.title': 'Sobre mí',
    'about.p1': 'Soy profesional de producto digital con base técnica en desarrollo frontend y experiencia en la definición de funcionalidades, optimización de recorridos de usuario y trabajo colaborativo con equipos de <span class="text-violet-600 font-semibold">Producto</span>, <span class="text-violet-600 font-semibold">UX</span>, <span class="text-violet-600 font-semibold">Diseño</span> y <span class="text-violet-600 font-semibold">Desarrollo</span>. En Devecoop participo en experiencias digitales para marcas internacionales como Danone, Vichy y Clorox, conectando requerimientos de negocio con soluciones claras y viables.',
    'about.p2': 'Mi recorrido combina comunicación, ciencias sociales, estrategia digital, analítica y tecnología. Esa mirada me permite analizar problemas desde el usuario, el negocio y la viabilidad técnica, priorizando mejoras según impacto, esfuerzo de implementación y valor para la experiencia.',
    'about.years': 'Años de Exp.',
    'about.campaigns': 'Campañas Pro',
    'about.card.behavior': 'Comportamiento de Usuario',
    'about.card.product': 'Product Thinking',
    'about.card.gamified': 'Experiencias Gamificadas',
    'about.card.constraints': 'UX bajo restricciones',
    'cases.title': 'Casos de Estudio',
    'cases.copy': 'Casos centrados en definición de funcionalidades, optimización de recorridos, análisis de fricciones y priorización de mejoras en productos digitales reales.',
    'cases.card1.category': 'UX / Frontend Strategy',
    'cases.card1.title': 'Experiencias Gamificadas',
    'cases.card1.copy': 'Diseño e implementación de flujos promocionales y gamificados para marcas internacionales, equilibrando claridad para el usuario, objetivos de negocio y alcance técnico.',
    'cases.card2.category': 'User Research',
    'cases.card2.title': 'Oportunidades de Mejora',
    'cases.card2.copy': 'Identificación de fricciones en recorridos digitales y definición de oportunidades de mejora a partir de evaluación heurística, métricas y análisis de comportamiento.',
    'cases.details': 'VER DETALLES',
    'cv.title': 'Mi Career Path',
    'cv.subtitle': 'Producto digital, research, analítica y desarrollo frontend.',
    'cv.now.label': 'Actualidad',
    'cv.now.title': 'Digital Product & Frontend Developer (SSR)',
    'cv.now.copy': 'Trabajo en productos y experiencias digitales para marcas internacionales como Danone, Vichy y Clorox. Participo en la definición de funcionalidades, reuniones con clientes, análisis de requerimientos y evaluación de soluciones junto a equipos de Producto, UX, Diseño y Desarrollo. Mi aporte conecta recorrido de usuario, objetivos de negocio y viabilidad técnica para priorizar mejoras con impacto real.',
    'cv.teacher.label': 'Julio 2026 - Actualidad',
    'cv.teacher.title': 'Profesora de UX Research',
    'cv.teacher.copy': 'Dicto contenidos de UX Research aplicados a productos digitales, incluyendo entrevistas, tests de usabilidad, evaluación heurística y comunicación de insights. Este rol conecta mi experiencia en producto con la formación y mentoría de estudiantes.',
    'cv.prev.title': 'Estrategia Digital & Desarrollo Web',
    'cv.prev.copy': 'Lideré estrategia digital y desarrollo web para clientes, conectando necesidades comerciales con acciones digitales concretas. Trabajé con SEO, SEM, Paid Media, métricas y funnels de conversión para optimizar campañas y detectar oportunidades de mejora. Esta etapa consolidó mi mirada de negocio, análisis de resultados y comunicación directa con stakeholders.',
    'cv.education.label': 'Formación',
    'cv.education.title': 'Base interdisciplinaria en comportamiento, tecnología y negocio',
    'cv.education.meta': 'Comunicación, Sociología, Dirección de PYMES, UX Research y Data Analytics',
    'cv.education.copy': 'Formación en Publicidad y Comunicación, complementada con estudios en Sociología y Ciencia Política, y Máster en Dirección de PYMES finalizado.<br><br>Este recorrido combina comprensión del comportamiento humano, mirada de negocio, experiencia docente y base técnica en desarrollo frontend (JavaScript, React, Laravel Blade, SASS, Git), además de conocimientos en SQL, Google Analytics, funnels y KPIs.<br><br>Esta integración me permite investigar y analizar experiencias digitales considerando usuario, objetivos de negocio, stakeholders y viabilidad técnica.',
    'cv.download': 'Descargar CV Completo',
    'contact.title': '¿Trabajamos juntos?',
    'contact.copy': 'Si buscás a alguien que conecte research, producto, negocio y desarrollo, me encantaría charlar sobre tu próximo desafío.',
    'footer.text': 'Aye Portfolio. Construido con ❤️ y enfoque UX.'
  },
  en: {
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.contact': "Let's talk",
    'hero.titlePrefix': "I'm",
    'hero.copy': 'I develop <span class="hero-underline text-slate-900 underline decoration-violet-500">digital products</span> from an interdisciplinary perspective that integrates UX Research, product strategy and frontend development. I analyze user behavior, collaborate on feature definition and translate business needs into valuable digital experiences.',
    'hero.cta': 'View cases',
    'about.title': 'About me',
    'about.p1': 'I am a digital product professional with a technical foundation in frontend development and experience defining features, optimizing user journeys and collaborating with <span class="text-violet-600 font-semibold">Product</span>, <span class="text-violet-600 font-semibold">UX</span>, <span class="text-violet-600 font-semibold">Design</span> and <span class="text-violet-600 font-semibold">Engineering</span> teams. At Devecoop, I work on digital experiences for international brands including Danone, Vichy and Clorox, connecting business requirements with clear and feasible solutions.',
    'about.p2': 'My background combines communication, social sciences, digital strategy, analytics and technology. This perspective helps me analyze problems through user needs, business goals and technical feasibility, prioritizing improvements by impact, implementation effort and experience value.',
    'about.years': 'Years Exp.',
    'about.campaigns': 'Pro Campaigns',
    'about.card.behavior': 'User Behavior',
    'about.card.product': 'Product Thinking',
    'about.card.gamified': 'Gamified Experiences',
    'about.card.constraints': 'UX under constraints',
    'cases.title': 'Case Studies',
    'cases.copy': 'Case studies focused on feature definition, user journey optimization, friction analysis and improvement prioritization in real digital products.',
    'cases.card1.category': 'UX / Frontend Strategy',
    'cases.card1.title': 'Gamified Experiences',
    'cases.card1.copy': 'Designing and implementing promotional and gamified flows for international brands while balancing user clarity, business goals and technical scope.',
    'cases.card2.category': 'User Research',
    'cases.card2.title': 'Improvement Opportunities',
    'cases.card2.copy': 'Identifying friction in digital journeys and defining improvement opportunities through heuristic evaluation, metrics and behavior analysis.',
    'cases.details': 'VIEW DETAILS',
    'cv.title': 'My Career Path',
    'cv.subtitle': 'Digital product, research, analytics and frontend development.',
    'cv.now.label': 'Current',
    'cv.now.title': 'Digital Product & Frontend Developer (SSR)',
    'cv.now.copy': 'I work on digital products and experiences for international brands including Danone, Vichy and Clorox. I participate in feature definition, client meetings, requirements analysis and solution evaluation alongside Product, UX, Design and Engineering teams. My contribution connects user journeys, business goals and technical feasibility to prioritize improvements with real impact.',
    'cv.teacher.label': 'July 2026 - Present',
    'cv.teacher.title': 'UX Research Instructor',
    'cv.teacher.copy': 'I teach UX Research methods applied to digital products, including user interviews, usability testing, heuristic evaluation and communicating insights. This role connects my product experience with student training and mentoring.',
    'cv.prev.title': 'Digital Strategy & Web Development',
    'cv.prev.copy': 'I led digital strategy and web development for clients, connecting business needs with concrete digital actions. I worked with SEO, SEM, Paid Media, metrics and conversion funnels to optimize campaigns and identify improvement opportunities. This stage strengthened my business perspective, results analysis and direct stakeholder communication.',
    'cv.education.label': 'Education',
    'cv.education.title': 'Interdisciplinary foundation in behavior, technology and business',
    'cv.education.meta': 'Communication, Sociology, SME Management, UX Research and Data Analytics',
    'cv.education.copy': 'Background in Advertising and Communication, complemented by studies in Sociology and Political Science, and a completed Master in SME Management.<br><br>This path combines an understanding of human behavior, business perspective, teaching experience and a technical foundation in frontend development (JavaScript, React, Laravel Blade, SASS, Git), plus SQL, Google Analytics, funnels and KPI knowledge.<br><br>This integration allows me to research and analyze digital experiences considering users, business goals, stakeholders and technical feasibility.',
    'cv.download': 'Download full CV',
    'contact.title': "Let's work together?",
    'contact.copy': "If you're looking for someone who connects research, product, business and development, I'd love to talk about your next challenge.",
    'footer.text': 'Aye Portfolio. Built with ❤️ and a UX mindset.'
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
  'case-1': {
    title: "Experiencias Gamificadas",
    subtitle: "Definición e implementación bajo restricciones de negocio, usuario y alcance técnico",
    category: "UX / Frontend Strategy",
    color: "from-purple-500 to-indigo-600",
    icon: 'gamepad-2',
    note: "Nota sobre confidencialidad: No se incluyen materiales visuales por restricciones de confidencialidad.",
    sections: [
      {
        title: "Contexto",
        content: "Participé en productos y campañas digitales para marcas internacionales como Danone, Vichy y Clorox. En este tipo de proyectos, la experiencia se define mientras se equilibran objetivos de negocio, requisitos legales, tiempos de salida y viabilidad técnica.",
        items: [
          "Tiempos de implementación acotados",
          "Cambios de alcance y requerimientos",
          "Restricciones de presupuesto",
          "Requerimientos legales y de negocio"
        ]
      },
      {
        title: "Problema",
        content: "El desafío era transformar requerimientos comerciales en flujos digitales claros, funcionales y medibles, cuidando que la experiencia no perdiera valor para el usuario por la complejidad legal, técnica o promocional."
      },
      {
        title: "Mi rol",
        content: "Trabajé como Digital Product & Frontend Developer, colaborando con Producto, UX, Diseño, Desarrollo y stakeholders del cliente. Participé en la definición de funcionalidades, evaluación de soluciones y traducción de requerimientos de negocio en experiencias implementables."
      },
      {
        title: "Qué hice",
        items: [
          "Analicé requerimientos y los convertí en flujos de usuario",
          "Integré mecánicas gamificadas en recorridos promocionales",
          "Prioricé mejoras considerando impacto, usuario y esfuerzo técnico",
          "Colaboré en la reducción de complejidad sin perder valor para el negocio"
        ]
      },
    {
        title: "Ejemplos concretos",
        items: [
          "Actimel - Campaña Sonic (público infantil)\nDefinición de lógica de juego en web, adaptando interacciones inspiradas en entornos 3D/Unity a una experiencia clara y accesible.",
          "Danacol - Público adulto\nRediseño de interfaz para reducir carga cognitiva y enfocar la experiencia en acciones simples, directas y comprensibles."
        ]
      },
      {
        title: "Enfoque UX",
        content: "Foco en equilibrar tres dimensiones: necesidades del usuario, objetivos de negocio y viabilidad técnica. Ese enfoque permite tomar decisiones de producto con menos incertidumbre y mayor claridad de implementación."
      },
      {
        title: "Aprendizajes",
        items: [
          "Diseñar en contextos de alta incertidumbre",
          "Tomar decisiones bajo restricciones reales",
          "Priorizar impacto, valor de usuario y costo de desarrollo"
        ]
      }
    ]
  },
  'case-2': {
  title: "Oportunidades de Mejora",
  subtitle: "Análisis de fricciones, heurísticas y oportunidades de optimización",
  category: "User Research",
  color: "from-violet-500 to-purple-700",
  icon: 'search',
  note: "Nota sobre confidencialidad: No se incluyen materiales visuales por restricciones de confidencialidad.",
  sections: [
    {
      title: "Contexto",
      content: "En productos y campañas digitales de corta duración, las decisiones suelen priorizar la salida a tiempo por sobre la optimización de la experiencia. Mi trabajo consistió en observar recorridos, detectar fricciones y proponer mejoras considerando métricas disponibles, objetivos comerciales y viabilidad de implementación.",
      items: [
        "Tiempos de implementación acotados",
        "Presupuesto limitado",
        "Requisitos legales",
        "Objetivos comerciales",
        "Métricas y funnels no siempre instrumentados en profundidad"
      ]
    },
    {
      title: "Objetivo",
      content: "Analizar patrones de fricción en la experiencia de usuario e identificar oportunidades de mejora accionables, considerando impacto para el usuario, negocio y esfuerzo técnico."
    },
    {
      title: "Enfoque",
      content: "Análisis cualitativo basado en observación de múltiples proyectos, identificación de patrones recurrentes en flujos de interacción, evaluación heurística y lectura de métricas/funnels cuando estaban disponibles."
    },
    {
      title: "Hallazgos",
      items: [
        "Flujos con múltiples pasos que incrementaban la complejidad de la experiencia",
        "Falta de claridad en reglas y condiciones de participación",
        "Bajo nivel de feedback durante la interacción",
        "Incremento de la carga cognitiva derivado de requisitos legales"
      ]
    },
    {
      title: "Insights",
      items: [
        "Cuando el esfuerzo requerido para completar la experiencia supera el valor percibido, aumenta significativamente la probabilidad de abandono del flujo.",
        "La falta de claridad en los pasos y condiciones genera incertidumbre, impactando negativamente en la confianza y el engagement del usuario.",
        "La baja visibilidad del progreso y del resultado esperado reduce la motivación para completar la experiencia.",
        "La ausencia de instrumentación de datos en campañas de alta tracción limita la capacidad de aprendizaje y mejora continua del producto."
      ]
    },
    {
      title: "Oportunidades de mejora",
      items: [
        "Simplificar los flujos de interacción",
        "Mejorar la claridad en cada paso del recorrido",
        "Incorporar feedback más visible durante la experiencia",
        "Reducir la carga cognitiva del usuario",
        "Hacer más explícito el valor de la participación"
      ]
    },
    {
      title: "Oportunidad de research",
      content: "Estas hipótesis pueden validarse mediante entrevistas a usuarios, tests de usabilidad, evaluación heurística y análisis de comportamiento, metodologías que también dicto como profesora de UX Research en Coderhouse."
    }
  ]
}
};
const ABOUT_CARDS = {
  'about-research': {
    title: "User Behavior",
    subtitle: "Understanding how users interact and where friction appears",
    category: "Behavior Analysis",
    color: "from-violet-500 to-fuchsia-600",
    icon: 'target',
    sections: [
      {
        title: "Focus",
        content: "I look at how people move through digital experiences, what they understand, where they hesitate and which parts of the flow create unnecessary effort, using interviews, usability testing, heuristic evaluation and behavior analysis when the project allows it."
      },
      {
        title: "What I observe",
        items: [
          "Moments of friction or confusion",
          "Patterns in user decisions and behavior",
          "Mismatch between user expectations and interface logic",
          "Opportunities to simplify the experience",
          "Signals from metrics, funnels and KPIs"
        ]
      }
    ]
  },
  'about-frontend': {
    title: "Product Thinking",
    subtitle: "Making decisions balancing business, UX and technical constraints",
    category: "Product Strategy",
    color: "from-indigo-500 to-blue-600",
    icon: 'brain',
    sections: [
      {
        title: "Focus",
        content: "I approach product decisions by connecting user needs, business goals and technical feasibility, especially when time, scope or budget are limited."
      },
      {
        title: "How I contribute",
        items: [
          "Prioritizing clarity over unnecessary complexity",
          "Balancing impact and implementation effort",
          "Translating insights into product decisions",
          "Connecting design, business and development perspectives"
        ]
      }
    ]
  },
  'about-gamification': {
    title: "Gamified Experiences",
    subtitle: "Designing engaging interactions adapted to different users",
    category: "Engagement",
    color: "from-purple-500 to-indigo-700",
    icon: 'gamepad-2',
    sections: [
      {
        title: "Focus",
        content: "I use game mechanics as a way to make digital flows more engaging, clear and motivating, adapting the interaction to the user and the context."
      },
      {
        title: "What I consider",
        items: [
          "The user's motivation and context",
          "Clear rules, goals and rewards",
          "Visible feedback during the interaction",
          "The right balance between playfulness, effort and conversion"
        ]
      }
    ]
  },
  'about-ux': {
    title: "UX under constraints",
    subtitle: "Designing clear experiences within real-world limitations",
    category: "Experience Design",
    color: "from-indigo-500 to-violet-600",
    icon: 'sliders-horizontal',
    sections: [
      {
        title: "Focus",
        content: "I design and evaluate experiences considering real constraints such as deadlines, budget, legal requirements, technical scope and business priorities."
      },
      {
        title: "Principles",
        items: [
          "Reduce cognitive load",
          "Make the next step clear",
          "Keep feedback visible and timely",
          "Protect the user experience while respecting project limits"
        ]
      }
    ]
  }
};

const ABOUT_CARDS_ES = {
  'about-research': {
    title: "Comportamiento de Usuario",
    subtitle: "Entender cómo interactúan las personas y dónde aparecen las fricciones",
    category: "Análisis de comportamiento",
    color: "from-violet-500 to-fuchsia-600",
    icon: 'target',
    sections: [
      {
        title: "Foco",
        content: "Observo cómo las personas recorren experiencias digitales, qué entienden, dónde dudan y qué partes del flujo generan esfuerzo innecesario, usando entrevistas, tests de usabilidad, evaluación heurística y análisis de comportamiento cuando el proyecto lo permite."
      },
      {
        title: "Qué observo",
        items: [
          "Momentos de fricción o confusión",
          "Patrones en decisiones y comportamiento",
          "Desajustes entre expectativas del usuario y lógica de interfaz",
          "Oportunidades para simplificar la experiencia",
          "Señales desde métricas, funnels y KPIs"
        ]
      }
    ]
  },
  'about-frontend': {
    title: "Product Thinking",
    subtitle: "Tomar decisiones equilibrando negocio, UX y restricciones técnicas",
    category: "Estrategia de producto",
    color: "from-indigo-500 to-blue-600",
    icon: 'brain',
    sections: [
      {
        title: "Foco",
        content: "Abordo decisiones de producto conectando necesidades del usuario, objetivos de negocio y viabilidad técnica, especialmente cuando el tiempo, alcance o presupuesto son limitados."
      },
      {
        title: "Cómo aporto",
        items: [
          "Priorizando claridad sobre complejidad innecesaria",
          "Balanceando impacto y esfuerzo de implementación",
          "Traduciendo insights en decisiones de producto",
          "Conectando miradas de diseño, negocio y desarrollo"
        ]
      }
    ]
  },
  'about-gamification': {
    title: "Experiencias Gamificadas",
    subtitle: "Diseñar interacciones atractivas adaptadas a diferentes usuarios",
    category: "Engagement",
    color: "from-purple-500 to-indigo-700",
    icon: 'gamepad-2',
    sections: [
      {
        title: "Foco",
        content: "Uso mecánicas de juego como recurso para hacer flujos digitales más claros, motivadores y participativos, adaptando la interacción al usuario y al contexto."
      },
      {
        title: "Qué considero",
        items: [
          "La motivación y el contexto del usuario",
          "Reglas, objetivos y recompensas claras",
          "Feedback visible durante la interacción",
          "Balance entre juego, esfuerzo y conversión"
        ]
      }
    ]
  },
  'about-ux': {
    title: "UX bajo restricciones",
    subtitle: "Diseñar experiencias claras dentro de limitaciones reales",
    category: "Experience Design",
    color: "from-indigo-500 to-violet-600",
    icon: 'sliders-horizontal',
    sections: [
      {
        title: "Foco",
        content: "Diseño y evalúo experiencias considerando restricciones reales como deadlines, presupuesto, legales, alcance técnico y prioridades de negocio."
      },
      {
        title: "Principios",
        items: [
          "Reducir carga cognitiva",
          "Hacer claro el próximo paso",
          "Mantener feedback visible y oportuno",
          "Cuidar la experiencia sin ignorar los límites del proyecto"
        ]
      }
    ]
  }
};

const CASE_STUDIES_EN = {
  'case-1': {
    title: "Gamified Experiences",
    subtitle: "Definition and implementation under business, user and technical constraints",
    category: "UX / Frontend Strategy",
    color: "from-purple-500 to-indigo-600",
    icon: 'gamepad-2',
    note: "Confidentiality note: Visual materials are not included due to confidentiality restrictions.",
    sections: [
      {
        title: "Context",
        content: "I participated in digital products and campaigns for international brands including Danone, Vichy and Clorox. In these projects, the experience is defined while balancing business goals, legal requirements, launch timelines and technical feasibility.",
        items: [
          "Limited implementation timelines",
          "Scope and requirement changes",
          "Budget restrictions",
          "Legal and business requirements"
        ]
      },
      {
        title: "Problem",
        content: "The challenge was translating commercial requirements into clear, functional and measurable digital flows, making sure the experience did not lose user value because of legal, technical or promotional complexity."
      },
      {
        title: "My role",
        content: "I worked as a Digital Product & Frontend Developer, collaborating with Product, UX, Design, Engineering and client stakeholders. I participated in feature definition, solution evaluation and the translation of business requirements into implementable experiences."
      },
      {
        title: "What I did",
        items: [
          "Analyzed requirements and translated them into user flows",
          "Integrated gamified mechanics into promotional journeys",
          "Prioritized improvements by impact, user value and technical effort",
          "Helped reduce complexity without losing business value"
        ]
      },
      {
        title: "Concrete examples",
        items: [
          "Actimel - Sonic Campaign (kids audience)\nDefined web game logic, adapting 3D/Unity-inspired interactions into a clear and accessible browser experience.",
          "Danacol - Adult audience\nRedesigned the interface to reduce cognitive load and focus the experience on simple, direct actions."
        ]
      },
      {
        title: "UX approach",
        content: "Focus on balancing three dimensions: user needs, business goals and technical feasibility. This approach supports product decisions with less uncertainty and clearer implementation criteria."
      },
      {
        title: "Learnings",
        items: [
          "Designing under high uncertainty",
          "Decision-making under real constraints",
          "Prioritizing impact, user value and development cost"
        ]
      }
    ]
  },
  'case-2': {
    title: "Improvement Opportunities",
    subtitle: "Friction analysis, heuristics and optimization opportunities",
    category: "User Research",
    color: "from-violet-500 to-purple-700",
    icon: 'search',
    note: "Confidentiality note: Visual materials are not included due to confidentiality restrictions.",
    sections: [
      {
        title: "Context",
        content: "In short-lived digital products and campaigns, decisions often prioritize launching on time over optimizing the experience. My work involved observing journeys, detecting friction and proposing improvements while considering available metrics, business goals and implementation feasibility.",
        items: [
          "Limited implementation time",
          "Limited budget",
          "Legal requirements",
          "Commercial goals",
          "Metrics and funnels not always deeply instrumented"
        ]
      },
      {
        title: "Goal",
        content: "Analyze user experience friction patterns and identify actionable improvement opportunities while considering user impact, business goals and technical effort."
      },
      {
        title: "Approach",
        content: "Qualitative analysis based on observing multiple projects, identifying recurring patterns in interaction flows, applying heuristic evaluation and reading metrics/funnels when available."
      },
      {
        title: "Findings",
        items: [
          "Flows with multiple steps increased experience complexity",
          "Rules and participation conditions were not always clear",
          "Low feedback during interaction",
          "Higher cognitive load caused by legal requirements"
        ]
      },
      {
        title: "Insights",
        items: [
          "When the effort required exceeds perceived value, abandonment becomes more likely.",
          "Lack of clarity creates uncertainty and negatively affects trust and engagement.",
          "Low visibility of progress and expected outcome reduces motivation to complete the experience.",
          "Lack of instrumentation in high-traffic campaigns limits product learning and continuous improvement."
        ]
      },
      {
        title: "Improvement opportunities",
        items: [
          "Simplify interaction flows",
          "Improve clarity at each step",
          "Make feedback more visible during the experience",
          "Reduce cognitive load",
          "Make the value of participation more explicit"
        ]
      },
      {
        title: "Research opportunity",
        content: "These hypotheses can be validated through user interviews, usability testing, heuristic evaluation and behavior analysis, methodologies I also teach as a UX Research Instructor at Coderhouse."
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
