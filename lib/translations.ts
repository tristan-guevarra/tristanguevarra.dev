import type { Language } from "./language-context";

const translations: Record<string, Record<Language, string>> = {
  // Hero
  "hero.viewProjects": { en: "View Projects", fr: "Voir les projets", es: "Ver proyectos" },
  "hero.getInTouch": { en: "Get in Touch", fr: "Me contacter", es: "Contacto" },
  "hero.title": { en: "Software Engineer & Builder", fr: "Ingenieur logiciel", es: "Ingeniero de software" },
  "hero.bio": {
    en: "Building internal platforms and developer tooling at TD Bank. Passionate about full-stack systems, CI/CD infrastructure, and shipping ambitious products from zero to one.",
    fr: "Je developpe des plateformes internes et des outils pour developpeurs chez TD Bank. Passionne par les systemes full-stack, l'infrastructure CI/CD et la livraison de produits ambitieux.",
    es: "Desarrollo plataformas internas y herramientas para desarrolladores en TD Bank. Apasionado por sistemas full-stack, infraestructura CI/CD y productos ambiciosos de cero a produccion.",
  },

  // Section headers
  "section.projects.label": { en: "01 \u2014 Projects", fr: "01 \u2014 Projets", es: "01 \u2014 Proyectos" },
  "section.projects.title": { en: "Things I've built", fr: "Ce que j'ai construit", es: "Lo que he construido" },
  "section.projects.desc": {
    en: "From enterprise platforms to ambitious side projects, I obsess over shipping products with depth and polish.",
    fr: "Des plateformes d'entreprise aux projets personnels ambitieux, je suis obsede par la livraison de produits soignes.",
    es: "Desde plataformas empresariales hasta proyectos personales ambiciosos, me obsesiono con entregar productos con profundidad y calidad.",
  },
  "section.experience.label": { en: "02 \u2014 Experience", fr: "02 \u2014 Experience", es: "02 \u2014 Experiencia" },
  "section.experience.title": { en: "Where I've worked", fr: "Ou j'ai travaille", es: "Donde he trabajado" },
  "section.experience.desc": {
    en: "A thread connecting internal platforms, developer experience, and ambitious product builds.",
    fr: "Un fil conducteur reliant les plateformes internes, l'experience developpeur et la creation de produits ambitieux.",
    es: "Un hilo que conecta plataformas internas, experiencia de desarrollador y productos ambiciosos.",
  },
  "section.stack.label": { en: "03 \u2014 Stack", fr: "03 \u2014 Stack", es: "03 \u2014 Stack" },
  "section.stack.title": { en: "Tools of the trade", fr: "Outils du metier", es: "Herramientas del oficio" },
  "section.writing.label": { en: "04 \u2014 Writing", fr: "04 \u2014 Ecriture", es: "04 \u2014 Escritura" },
  "section.writing.title": { en: "Thinking in public", fr: "Penser en public", es: "Pensando en publico" },
  "section.writing.desc": {
    en: "Essays and reflections on engineering, building, and what I'm learning along the way.",
    fr: "Essais et reflexions sur l'ingenierie, la creation et ce que j'apprends en chemin.",
    es: "Ensayos y reflexiones sobre ingenieria, creacion y lo que aprendo en el camino.",
  },

  // Stack categories
  "stack.languages": { en: "Languages", fr: "Langages", es: "Lenguajes" },
  "stack.frameworks": { en: "Frameworks", fr: "Frameworks", es: "Frameworks" },
  "stack.tools": { en: "Tools", fr: "Outils", es: "Herramientas" },
  "stack.interests": { en: "Interests", fr: "Interets", es: "Intereses" },

  // Interest items
  "interest.teaching": { en: "Undergraduate Teaching", fr: "Enseignement universitaire", es: "Ensenanza universitaria" },
  "interest.athlete": { en: "Former Varsity Athlete", fr: "Ancien athlete universitaire", es: "Ex atleta universitario" },
  "interest.billiards": { en: "Billiards", fr: "Billard", es: "Billar" },
  "interest.finance": { en: "Finance", fr: "Finance", es: "Finanzas" },
  "interest.startups": { en: "Startups", fr: "Startups", es: "Startups" },

  // Nav
  "nav.top": { en: "Top", fr: "Haut", es: "Inicio" },
  "nav.projects": { en: "Projects", fr: "Projets", es: "Proyectos" },
  "nav.experience": { en: "Experience", fr: "Experience", es: "Experiencia" },
  "nav.github": { en: "GitHub", fr: "GitHub", es: "GitHub" },
  "nav.stack": { en: "Stack", fr: "Stack", es: "Stack" },
  "nav.writing": { en: "Writing", fr: "Ecriture", es: "Escritura" },
  "nav.contact": { en: "Contact", fr: "Contact", es: "Contacto" },
  "nav.language": { en: "Language", fr: "Langue", es: "Idioma" },

  // GitHub activity
  "github.title": { en: "GitHub Contributions", fr: "Contributions GitHub", es: "Contribuciones GitHub" },
  "github.contributions": { en: "contributions in the last year", fr: "contributions au cours de la derniere annee", es: "contribuciones en el ultimo ano" },
  "github.less": { en: "Less", fr: "Moins", es: "Menos" },
  "github.more": { en: "More", fr: "Plus", es: "Mas" },
  "github.viewOn": { en: "View on GitHub", fr: "Voir sur GitHub", es: "Ver en GitHub" },

  // Footer
  "footer.getInTouch": { en: "Get in touch", fr: "Me contacter", es: "Contacto" },
  "footer.letsWork": { en: "Let's build something together.", fr: "Construisons quelque chose ensemble.", es: "Construyamos algo juntos." },
  "footer.openTo": { en: "Open to opportunities", fr: "Ouvert aux opportunites", es: "Abierto a oportunidades" },

  // Writing modal
  "writing.englishOnly": { en: "", fr: "Cet article est disponible en anglais uniquement.", es: "Este articulo esta disponible solo en ingles." },

  // Co-op rating
  "coop.rating": { en: "Co-op Rating: Outstanding", fr: "Evaluation coop : Exceptionnel", es: "Evaluacion coop: Excepcional" },
};

export function t(key: string, lang: Language): string {
  return translations[key]?.[lang] || translations[key]?.en || key;
}
