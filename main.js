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
    'hero.copy': 'Perfil híbrido entre Frontend, <span class="hero-underline font-semibold text-slate-900 underline decoration-violet-500">UX</span> y <span class="hero-underline font-semibold text-slate-900 underline decoration-violet-500">Research</span>, con experiencia en productos digitales y análisis del comportamiento de usuario. Me enfoco en detectar fricciones, entender necesidades y traducir insights en <span class="hero-underline font-semibold text-slate-900 underline decoration-violet-500">decisiones de producto</span>.',
    'hero.cta': 'Ver casos',
    'hero.available': 'Disponible para proyectos',
    'about.title': 'Quién soy',
    'about.p1': 'Trabajo en la intersección entre frontend, <span class="text-violet-600 font-semibold">UX</span> y producto, participando en la definición de experiencias digitales en contextos reales de negocio. A lo largo de múltiples campañas, trabajé para marcas de consumo masivo y de alcance global, construyendo flujos desde cero e integrando mecánicas de interacción según el tipo de usuario.',
    'about.p2': 'Me enfoco en detectar fricciones en la experiencia, entender el comportamiento del usuario y traducir esas observaciones en <span class="text-indigo-600 font-semibold">decisiones de producto</span>, equilibrando siempre necesidades de negocio, experiencia y viabilidad técnica.',
    'about.years': 'Años de Exp.',
    'about.campaigns': 'Campañas Pro',
    'about.card.behavior': 'Comportamiento de Usuario',
    'about.card.product': 'Product Thinking',
    'about.card.gamified': 'Experiencias Gamificadas',
    'about.card.constraints': 'UX bajo restricciones',
    'cases.title': 'Casos de Estudio',
    'cases.copy': 'Definición de experiencias gamificadas desde cero, tomando decisiones de producto bajo restricciones de tiempo, presupuesto y viabilidad técnica.',
    'cases.card1.category': 'UX / Frontend Strategy',
    'cases.card1.title': 'Experiencias Gamificadas',
    'cases.card1.copy': 'Definición de experiencias gamificadas desde cero, tomando decisiones de producto bajo restricciones de usuario, negocio y viabilidad técnica.',
    'cases.card2.category': 'User Research',
    'cases.card2.title': 'Oportunidades de Mejora',
    'cases.card2.copy': 'Identificación de fricciones en flujos promocionales y definición de oportunidades de mejora a partir del análisis de comportamiento de usuario.',
    'cases.details': 'VER DETALLES',
    'cv.title': 'Mi Career Path',
    'cv.subtitle': 'De frontend a comportamiento de usuario en productos digitales.',
    'cv.now.label': 'Actualidad',
    'cv.now.title': 'Frontend Developer (SSR) | UX & Comportamiento de Usuario',
    'cv.now.copy': 'Desarrollo de productos digitales y plataformas promocionales para marcas internacionales. Análisis del comportamiento de usuario en experiencias gamificadas, identificando fricciones en flujos de interacción y optimizando la comprensión y el engagement. Colaboración con equipos de producto, diseño y negocio en entornos internacionales.',
    'cv.prev.title': 'Estrategia Digital & Desarrollo Web',
    'cv.prev.copy': 'Desarrollo de sitios web y campañas digitales con foco en experiencia de usuario y conversión. Análisis de comportamiento de audiencias y optimización de contenido en base a métricas. Trabajo con emprendimientos identificando necesidades de usuario y oportunidades de mejora.',
    'cv.education.label': 'Formación',
    'cv.education.title': 'Base interdisciplinaria en comportamiento, tecnología y negocio',
    'cv.education.meta': 'Publicidad, Sociología, Informática y Data Analytics',
    'cv.education.copy': 'Formación en Publicidad y Comunicación, complementada con estudios en Sociología y Ciencia Política, y actualmente cursando un Máster en Dirección de PYMES.<br><br>Este recorrido combina una comprensión del comportamiento humano con una base técnica en desarrollo frontend (JavaScript, React, Laravel, SASS) y conocimientos en análisis de datos.<br><br>Esta integración me permite analizar experiencias digitales considerando tanto al usuario como las restricciones de negocio y la viabilidad técnica.',
    'cv.download': 'Descargar CV Completo',
    'contact.title': '¿Trabajamos juntos?',
    'contact.copy': 'Si buscás a alguien que entienda el usuario y el código, me encantaría charlar sobre tu próximo desafío.',
    'footer.text': 'Aye Portfolio. Construido con ❤️ y enfoque UX.'
  },
  en: {
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.contact': "Let's talk",
    'hero.titlePrefix': "I'm",
    'hero.copy': 'Hybrid profile across Frontend, <span class="hero-underline font-semibold text-slate-900 underline decoration-violet-500">UX</span> and <span class="hero-underline font-semibold text-slate-900 underline decoration-violet-500">Research</span>, with experience in digital products and user behavior analysis. I focus on detecting friction, understanding needs and translating insights into <span class="hero-underline font-semibold text-slate-900 underline decoration-violet-500">product decisions</span>.',
    'hero.cta': 'View cases',
    'hero.available': 'Available for projects',
    'about.title': 'About me',
    'about.p1': 'I work at the intersection of frontend, <span class="text-violet-600 font-semibold">UX</span> and product, helping define digital experiences in real business contexts. Across multiple campaigns, I worked with mass-consumption and global brands, building flows from scratch and adapting interaction mechanics to different users.',
    'about.p2': 'I focus on detecting experience friction, understanding user behavior and translating those observations into <span class="text-indigo-600 font-semibold">product decisions</span>, always balancing business needs, user experience and technical feasibility.',
    'about.years': 'Years Exp.',
    'about.campaigns': 'Pro Campaigns',
    'about.card.behavior': 'User Behavior',
    'about.card.product': 'Product Thinking',
    'about.card.gamified': 'Gamified Experiences',
    'about.card.constraints': 'UX under constraints',
    'cases.title': 'Case Studies',
    'cases.copy': 'Defining gamified experiences from scratch, making product decisions under time, budget and technical feasibility constraints.',
    'cases.card1.category': 'UX / Frontend Strategy',
    'cases.card1.title': 'Gamified Experiences',
    'cases.card1.copy': 'Defining gamified experiences from scratch while making product decisions under user, business and technical constraints.',
    'cases.card2.category': 'User Research',
    'cases.card2.title': 'Improvement Opportunities',
    'cases.card2.copy': 'Identifying friction in promotional flows and defining improvement opportunities through user behavior analysis.',
    'cases.details': 'VIEW DETAILS',
    'cv.title': 'My Career Path',
    'cv.subtitle': 'From frontend to user behavior in digital products.',
    'cv.now.label': 'Current',
    'cv.now.title': 'Frontend Developer (SSR) | UX & User Behavior',
    'cv.now.copy': 'Development of digital products and promotional platforms for international brands. User behavior analysis in gamified experiences, identifying friction in interaction flows and improving comprehension and engagement. Collaboration with product, design and business teams in international environments.',
    'cv.prev.title': 'Digital Strategy & Web Development',
    'cv.prev.copy': 'Development of websites and digital campaigns focused on user experience and conversion. Audience behavior analysis and content optimization based on metrics. Work with small businesses identifying user needs and improvement opportunities.',
    'cv.education.label': 'Education',
    'cv.education.title': 'Interdisciplinary foundation in behavior, technology and business',
    'cv.education.meta': 'Advertising, Sociology, Computer Science and Data Analytics',
    'cv.education.copy': 'Background in Advertising and Communication, complemented by studies in Sociology and Political Science, and currently pursuing a Master in SME Management.<br><br>This path combines an understanding of human behavior with a technical foundation in frontend development (JavaScript, React, Laravel, SASS) and data analysis knowledge.<br><br>This integration allows me to analyze digital experiences considering users, business constraints and technical feasibility.',
    'cv.download': 'Download full CV',
    'contact.title': "Let's work together?",
    'contact.copy': "If you're looking for someone who understands users and code, I'd love to talk about your next challenge.",
    'footer.text': 'Aye Portfolio. Built with ❤️ and a UX mindset.'
  }
};

let currentLanguage = localStorage.getItem('aye-language') || 'es';

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
    const isGitHubPages = window.location.hostname.endsWith('github.io');
    const href = isGitHubPages
      ? link.getAttribute(`data-cv-${currentLanguage}-gh`)
      : link.getAttribute(`data-cv-${currentLanguage}`);

    if (href) link.setAttribute('href', href);
  });

  initIcons();
};

document.addEventListener('DOMContentLoaded', () => {
  initIcons();
  applyLanguage(currentLanguage);

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
    subtitle: "Definición bajo restricciones de tiempo, presupuesto y usuario",
    category: "UX / Frontend Strategy",
    color: "from-purple-500 to-indigo-600",
    icon: 'gamepad-2',
    note: "Nota sobre confidencialidad: No se incluyen materiales visuales por restricciones de confidencialidad.",
    sections: [
      {
        title: "Contexto",
        content: "Participé en campañas digitales gamificadas para marcas de consumo masivo (Actimel, Danacol), donde las experiencias se construían desde cero bajo restricciones de tiempo, presupuesto y requisitos legales.",
        items: [
          "Tiempos de implementación muy ajustados",
          "Cambios constantes en el alcance",
          "Restricciones de presupuesto",
          "Requerimientos legales y de negocio"
        ]
      },
      {
        title: "Problema",
        content: "El principal desafío era construir experiencias gamificadas funcionales y claras para el usuario, equilibrando tiempos de desarrollo, presupuesto, complejidad técnica y objetivos del negocio."
      },
      {
        title: "Mi rol",
        content: "Trabajé como Frontend Developer con fuerte participación en la definición de la experiencia. Traduje ideas y requerimientos en flujos concretos, tomando decisiones sobre interacción y viabilidad técnica."
      },
      {
        title: "Qué hice",
        items: [
          "Definí flujos de interacción donde la experiencia no estaba especificada",
          "Integré mecánicas gamificadas en el recorrido del usuario",
          "Prioricé claridad sobre complejidad innecesaria",
          "Colaboré en la reducción de complejidad sin perder valor"
        ]
      },
    {
        title: "Ejemplos concretos",
        items: [
          "Actimel – Campaña Sonic (público infantil)\nDefinición de la lógica de juego en web, adaptando interacciones inspiradas en entornos 3D/Unity a una experiencia clara y accesible.",
          "Danacol – (Público adulto)\nRediseño de la interfaz para reducir la carga cognitiva y enfocar la experiencia en acciones simples y directas."
        ]
      },
      {
        title: "Enfoque UX",
        content: "Foco en equilibrar tres dimensiones: Necesidades del negocio, Experiencia del usuario y Viabilidad técnica."
      },
      {
        title: "Aprendizajes",
        items: [
          "Diseñar en alta incertidumbre",
          "Decisiones bajo restricciones reales",
          "Priorizar impacto vs costo de desarrollo"
        ]
      }
    ]
  },
  'case-2': {
  title: "Oportunidades de Mejora",
  subtitle: "Análisis de fricciones en experiencias promocionales digitales",
  category: "User Research",
  color: "from-violet-500 to-purple-700",
  icon: 'search',
  note: "Nota sobre confidencialidad: No se incluyen materiales visuales por restricciones de confidencialidad.",
  sections: [
    {
      title: "Contexto",
      content: "En campañas digitales de consumo masivo, las decisiones suelen priorizar la salida a tiempo por sobre la optimización de la experiencia. Al tratarse de iniciativas de corta duración, en muchos casos no se implementaban herramientas de analytics avanzadas, limitando la capacidad de aprendizaje y mejora basada en datos.",
      items: [
        "Tiempos de implementación acotados",
        "Presupuesto limitado",
        "Requisitos legales",
        "Objetivos comerciales"
      ]
    },
    {
      title: "Objetivo",
      content: "Analizar patrones de fricción en la experiencia de usuario e identificar oportunidades de mejora, considerando las restricciones reales del negocio."
    },
    {
      title: "Enfoque",
      content: "Análisis cualitativo basado en la observación de múltiples proyectos, la identificación de patrones recurrentes en los flujos de interacción y la evaluación heurística desde la perspectiva del usuario."
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
      content: "Estas hipótesis podrían validarse mediante entrevistas a usuarios, tests de usabilidad y análisis de comportamiento, permitiendo priorizar mejoras basadas en evidencia y reducir la incertidumbre en la toma de decisiones de producto."
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
        content: "I look at how people move through digital experiences, what they understand, where they hesitate and which parts of the flow create unnecessary effort."
      },
      {
        title: "What I observe",
        items: [
          "Moments of friction or confusion",
          "Patterns in user decisions and behavior",
          "Mismatch between user expectations and interface logic",
          "Opportunities to simplify the experience"
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
        content: "Observo cómo las personas recorren experiencias digitales, qué entienden, dónde dudan y qué partes del flujo generan esfuerzo innecesario."
      },
      {
        title: "Qué observo",
        items: [
          "Momentos de fricción o confusión",
          "Patrones en decisiones y comportamiento",
          "Desajustes entre expectativas del usuario y lógica de interfaz",
          "Oportunidades para simplificar la experiencia"
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
    subtitle: "Definition under time, budget and user constraints",
    category: "UX / Frontend Strategy",
    color: "from-purple-500 to-indigo-600",
    icon: 'gamepad-2',
    note: "Confidentiality note: Visual materials are not included due to confidentiality restrictions.",
    sections: [
      {
        title: "Context",
        content: "I participated in gamified digital campaigns for mass-consumption brands (Actimel, Danacol), where experiences were built from scratch under time, budget and legal constraints.",
        items: [
          "Very tight implementation timelines",
          "Constant changes in scope",
          "Budget restrictions",
          "Legal and business requirements"
        ]
      },
      {
        title: "Problem",
        content: "The main challenge was building functional and clear gamified experiences while balancing development time, budget, technical complexity and business goals."
      },
      {
        title: "My role",
        content: "I worked as a Frontend Developer with strong involvement in experience definition, translating ideas and requirements into concrete flows and making decisions around interaction and technical feasibility."
      },
      {
        title: "What I did",
        items: [
          "Defined interaction flows when the experience was not fully specified",
          "Integrated gamified mechanics into the user journey",
          "Prioritized clarity over unnecessary complexity",
          "Helped reduce complexity without losing value"
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
        content: "Focus on balancing three dimensions: business needs, user experience and technical feasibility."
      },
      {
        title: "Learnings",
        items: [
          "Designing under uncertainty",
          "Decision-making under real constraints",
          "Prioritizing impact vs. development cost"
        ]
      }
    ]
  },
  'case-2': {
    title: "Improvement Opportunities",
    subtitle: "Friction analysis in digital promotional experiences",
    category: "User Research",
    color: "from-violet-500 to-purple-700",
    icon: 'search',
    note: "Confidentiality note: Visual materials are not included due to confidentiality restrictions.",
    sections: [
      {
        title: "Context",
        content: "In mass-consumption digital campaigns, decisions often prioritize launching on time over optimizing the experience. Since these initiatives are short-lived, advanced analytics are often not implemented, limiting learning and data-informed improvement.",
        items: [
          "Limited implementation time",
          "Limited budget",
          "Legal requirements",
          "Commercial goals"
        ]
      },
      {
        title: "Goal",
        content: "Analyze user experience friction patterns and identify improvement opportunities while considering real business constraints."
      },
      {
        title: "Approach",
        content: "Qualitative analysis based on observing multiple projects, identifying recurring patterns in interaction flows and applying heuristic evaluation from the user's perspective."
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
        content: "These hypotheses could be validated through user interviews, usability testing and behavior analysis, helping prioritize evidence-based improvements and reduce uncertainty in product decision-making."
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
