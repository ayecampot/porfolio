// Initialize Lucide icons
console.log('Main script loading...');
const initIcons = () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initIcons();
  
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear().toString();
});

// Case Studies Data
const CASE_STUDIES = {
  'case-1': {
    title: "Experiencias Gamificadas",
    subtitle: "Definición bajo restricciones de tiempo, presupuesto y usuario",
    category: "UX / Frontend Strategy",
    color: "from-purple-500 to-indigo-600",
    icon: 'gamepad-2',
    sections: [
      {
        title: "🧩 Contexto",
        content: "Participé en el desarrollo de campañas digitales gamificadas para marcas de consumo masivo (como Actimel y Danacol), donde las experiencias eran conceptos a construir desde cero, no productos existentes.",
        items: [
          "Tiempos de implementación muy ajustados",
          "Cambios constantes en el alcance",
          "Restricciones de presupuesto",
          "Requerimientos legales y de negocio"
        ]
      },
      {
        title: "🎯 Problema",
        content: "El principal desafío era construir experiencias gamificadas funcionales y claras para el usuario, equilibrando tiempos de desarrollo, presupuesto, complejidad técnica y objetivos del negocio."
      },
      {
        title: "👩‍💻 Mi rol",
        content: "Trabajé como Frontend Developer con fuerte participación en la definición de la experiencia. Traduje ideas y requerimientos en flujos concretos, tomando decisiones sobre interacción y viabilidad técnica."
      },
      {
        title: "🛠️ Qué hice",
        items: [
          "Definí flujos de interacción donde la experiencia no estaba especificada",
          "Integré mecánicas gamificadas en el recorrido del usuario",
          "Prioricé claridad sobre complejidad innecesaria",
          "Colaboré en la reducción de complejidad sin perder valor"
        ]
      },
      {
        title: "🎮 Ejemplos concretos",
        content: "Actimel – Campaña Sonic (Público infantil): Definición de lógica de juego en web, trasladando interacciones tipo entorno 3D/Unity a la web tradicional. Danacol – Público adulto: Simplificación de la interfaz para reducir carga cognitiva y priorizar acciones directas."
      },
      {
        title: "🧠 Enfoque UX",
        content: "Foco en equilibrar tres dimensiones: Necesidades del negocio, Experiencia del usuario y Viabilidad técnica."
      },
      {
        title: "📚 Aprendizajes",
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
    sections: [
      {
        title: "🧩 Contexto",
        content: "En campañas de consumo masivo, las decisiones suelen priorizar la salida a tiempo. Al ser campañas cortas, carecían de analytics avanzados, dificultando la optimización basada en datos.",
        items: [
          "Tiempos de implementación",
          "Presupuesto limitado",
          "Requisitos legales",
          "Objetivos comerciales"
        ]
      },
      {
        title: "🎯 Objetivo",
        content: "Analizar patrones de fricción e identificar oportunidades de mejora desde una perspectiva centrada en el usuario, considerando las restricciones reales del negocio."
      },
      {
        title: "🔍 Enfoque",
        content: "Análisis basado en la observación de múltiples proyectos, identificación de patrones recurrentes y evaluación heurística desde la perspectiva del usuario."
      },
      {
        title: "⚠️ Hallazgos",
        items: [
          "Flujos con múltiples pasos que aumentaban la complejidad",
          "Falta de claridad en reglas y condiciones de participación",
          "Bajo nivel de feedback durante la interacción",
          "Incremento de la carga cognitiva debido a requisitos legales"
        ]
      },
      {
        title: "🧠 Insights",
        content: "Cuando el esfuerzo requerido para completar la experiencia supera el valor percibido, los usuarios tienden a abandonar el flujo. La falta de claridad en los pasos genera incertidumbre y reduce el engagement."
      },
      {
        title: "🚀 Oportunidades de mejora",
        items: [
          "Simplificar los flujos de interacción",
          "Mejorar la claridad en cada paso",
          "Incorporar feedback más visible durante la experiencia",
          "Reducir la carga cognitiva del usuario"
        ]
      },
      {
        title: "📊 Oportunidad de research",
        content: "En un contexto ideal, estas hipótesis podrían validarse mediante entrevistas, tests de usabilidad o análisis de comportamiento para priorizar mejoras basadas en evidencia."
      }
    ]
  }
};

// Modal Logic
window.openModal = (id) => {
  const study = CASE_STUDIES[id];
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

      <div class="pt-8 border-t border-slate-100">
        <div class="flex items-center justify-between text-sm text-slate-400 italic">
          <span>🔒 Nota sobre confidencialidad: No se incluyen materiales visuales por restricciones de confidencialidad.</span>
        </div>
      </div>
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
