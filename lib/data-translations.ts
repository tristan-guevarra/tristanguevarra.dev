import type { Language } from "./language-context";
import type { Project, Experience, WritingPost } from "./data";
import { projects as enProjects, experiences as enExperiences, writing as enWriting } from "./data";

const projectDescriptions: Record<string, Record<Language, string>> = {
  "CI/CD Pipeline Recommendation Tool": {
    en: "A FastAPI application that filters and scores six internal pipeline types based on developer inputs\u2014helping teams select the right CI/CD path across CADP, Fenix, EDP-XL, EDP-GT, and more.",
    fr: "Une application FastAPI qui filtre et classe six types de pipelines internes selon les besoins des developpeurs, aidant les equipes a choisir le bon chemin CI/CD.",
    es: "Una aplicacion FastAPI que filtra y clasifica seis tipos de pipelines internos segun las necesidades de los desarrolladores, ayudando a los equipos a elegir el camino CI/CD correcto.",
  },
  "KRATOS": {
    en: "Institutional-grade portfolio management platform for Limestone Capital, featuring full trade lifecycle, pitch infrastructure, and real-time analytics dashboards.",
    fr: "Plateforme de gestion de portefeuille de niveau institutionnel pour Limestone Capital, avec cycle de vie complet des transactions, infrastructure de pitch et tableaux de bord analytiques en temps reel.",
    es: "Plataforma de gestion de portafolios de nivel institucional para Limestone Capital, con ciclo de vida completo de transacciones, infraestructura de pitch y dashboards analiticos en tiempo real.",
  },
  "DecisionOS": {
    en: "AI-powered structured decision engine with Monte Carlo simulation, multi-criteria scoring, and interactive scenario modeling for high-stakes choices.",
    fr: "Moteur de decision structure propulse par l'IA avec simulation Monte Carlo, scoring multicritere et modelisation interactive de scenarios pour les decisions a fort enjeu.",
    es: "Motor de decisiones estructuradas con IA, simulacion Monte Carlo, puntuacion multicriterio y modelado interactivo de escenarios para decisiones de alto impacto.",
  },
  "URANYS": {
    en: "Revenue leakage intelligence platform for B2B SaaS companies. Tracks churn risk, payment failures, and expansion opportunities across your customer base using ML scoring. Think \"Datadog for revenue health.\"",
    fr: "Plateforme d'intelligence sur les fuites de revenus pour les entreprises B2B SaaS. Suit le risque de desabonnement, les echecs de paiement et les opportunites d'expansion avec le ML. Pensez \"Datadog pour la sante des revenus.\"",
    es: "Plataforma de inteligencia de fugas de ingresos para empresas B2B SaaS. Rastrea riesgo de abandono, fallos de pago y oportunidades de expansion con ML. Piensa en \"Datadog para la salud de ingresos.\"",
  },
  "BrieflyAI": {
    en: "AI meeting intelligence platform that captures, transcribes, and distills meetings into actionable summaries and follow-ups.",
    fr: "Plateforme d'intelligence de reunions IA qui capture, transcrit et synthetise les reunions en resumes et suivis exploitables.",
    es: "Plataforma de inteligencia de reuniones con IA que captura, transcribe y destila reuniones en resumenes y seguimientos accionables.",
  },
  "CaseFlow": {
    en: "AI-powered legal matter management. Upload contracts and legal docs, and GPT-4o-mini auto-extracts parties, deadlines, obligations, and risk flags, then generates tasks and timelines. Includes semantic search across all documents.",
    fr: "Gestion juridique propulsee par l'IA. Telechargez des contrats et documents juridiques, et GPT-4o-mini extrait automatiquement les parties, echeances, obligations et drapeaux de risque, puis genere des taches et des calendriers. Inclut la recherche semantique.",
    es: "Gestion legal con IA. Suba contratos y documentos legales, y GPT-4o-mini extrae automaticamente partes, plazos, obligaciones y senales de riesgo, luego genera tareas y cronogramas. Incluye busqueda semantica.",
  },
  "Erebys": {
    en: "Analytics and dynamic pricing engine for sports academies. Gives academy owners real revenue intelligence and an ML-powered pricing engine that suggests optimal prices based on fill rates, coach ratings, and seasonality. Includes a what-if simulator.",
    fr: "Moteur d'analytique et de tarification dynamique pour les academies sportives. Offre aux proprietaires une intelligence revenus reelle et un moteur de tarification ML suggerant des prix optimaux bases sur les taux de remplissage, les evaluations des coachs et la saisonnalite.",
    es: "Motor de analitica y precios dinamicos para academias deportivas. Ofrece inteligencia real de ingresos y un motor de precios ML que sugiere precios optimos basados en tasas de ocupacion, calificaciones de entrenadores y estacionalidad.",
  },
  "Triacta Inspection Assistant": {
    en: "WPF desktop application for SE04 certificate management and meter inspection at Metergy, handling PDF generation, SharePoint integration, and Dataverse queries.",
    fr: "Application de bureau WPF pour la gestion des certificats SE04 et l'inspection des compteurs chez Metergy, gerant la generation de PDF, l'integration SharePoint et les requetes Dataverse.",
    es: "Aplicacion de escritorio WPF para gestion de certificados SE04 e inspeccion de medidores en Metergy, con generacion de PDF, integracion SharePoint y consultas Dataverse.",
  },
};

const experienceTranslations: Record<string, Record<Language, { role: string; rating?: string }>> = {
  "TD Bank": {
    en: {
      role: "Software Engineer Intern \u2014 DevSecOps, Enabling Products & Pipelines and Platform Engineering",
      rating: "Co-op Rating: Outstanding",
    },
    fr: {
      role: "Stagiaire ingenieur logiciel \u2014 DevSecOps, Produits habilitants & Pipelines et Ingenierie de plateforme",
      rating: "Evaluation coop : Exceptionnel",
    },
    es: {
      role: "Pasante de ingenieria de software \u2014 DevSecOps, Productos habilitantes & Pipelines e Ingenieria de plataforma",
      rating: "Evaluacion coop: Excepcional",
    },
  },
  "Metergy Solutions": {
    en: {
      role: "Software Engineer Intern \u2014 Information Technology, Applications and Development",
      rating: "Co-op Rating: Outstanding",
    },
    fr: {
      role: "Stagiaire ingenieur logiciel \u2014 Technologies de l'information, Applications et Developpement",
      rating: "Evaluation coop : Exceptionnel",
    },
    es: {
      role: "Pasante de ingenieria de software \u2014 Tecnologia de la Informacion, Aplicaciones y Desarrollo",
      rating: "Evaluacion coop: Excepcional",
    },
  },
  "Queen's University": {
    en: { role: "Undergraduate Teaching Assistant \u2014 Faculty of Engineering and Applied Science" },
    fr: { role: "Assistant d'enseignement \u2014 Faculte de genie et des sciences appliquees" },
    es: { role: "Asistente de ensenanza \u2014 Facultad de Ingenieria y Ciencias Aplicadas" },
  },
};

const writingTranslations: Record<string, Record<Language, { title: string; description: string }>> = {
  "How I Landed My First Internship With Zero Connections": {
    en: { title: "How I Landed My First Internship With Zero Connections", description: "No referrals, no family hookups, no LinkedIn clout. Just 614 applications, a lot of rejection, and the stubbornness to keep going." },
    fr: { title: "Comment j'ai obtenu mon premier stage sans aucune connexion", description: "Pas de references, pas de piston familial, pas d'influence LinkedIn. Juste 614 candidatures, beaucoup de rejet et l'obstination de continuer." },
    es: { title: "Como consegui mi primera pasantia sin conexiones", description: "Sin referencias, sin contactos familiares, sin influencia en LinkedIn. Solo 614 solicitudes, mucho rechazo y la terquedad de seguir adelante." },
  },
  "From Zero to SaaS in a Weekend": {
    en: { title: "From Zero to SaaS in a Weekend", description: "What actually happens when you try to build and ship a full-stack product in 48 hours. Spoiler: it involves a lot of coffee and questionable git commits." },
    fr: { title: "De zero a SaaS en un week-end", description: "Ce qui se passe vraiment quand on essaie de construire et livrer un produit full-stack en 48 heures. Spoiler : beaucoup de cafe et des commits git douteux." },
    es: { title: "De cero a SaaS en un fin de semana", description: "Lo que realmente pasa cuando intentas construir y lanzar un producto full-stack en 48 horas. Spoiler: mucho cafe y commits de git cuestionables." },
  },
  "An Engineer Walks Into a Trading Floor": {
    en: { title: "An Engineer Walks Into a Trading Floor", description: "How I went from writing for loops to reading 10-Ks, and what it took to go from pure engineering to understanding finance well enough to work at TD Securities." },
    fr: { title: "Un ingenieur entre sur un parquet de trading", description: "Comment je suis passe de l'ecriture de boucles for a la lecture de 10-K, et ce qu'il a fallu pour passer de l'ingenierie pure a comprendre la finance." },
    es: { title: "Un ingeniero entra a un piso de trading", description: "Como pase de escribir bucles for a leer 10-Ks, y lo que tomo para pasar de ingenieria pura a entender finanzas lo suficiente para trabajar en TD Securities." },
  },
};

export function getProjects(lang: Language): Project[] {
  return enProjects.map((p) => ({
    ...p,
    description: projectDescriptions[p.title]?.[lang] || p.description,
  }));
}

export function getExperiences(lang: Language): Experience[] {
  return enExperiences.map((e) => {
    const tr = experienceTranslations[e.company]?.[lang];
    if (!tr) return e;
    return { ...e, ...tr };
  });
}

export function getWriting(lang: Language): WritingPost[] {
  return enWriting.map((w) => {
    const tr = writingTranslations[w.title]?.[lang];
    if (!tr) return w;
    return { ...w, title: tr.title, description: tr.description };
  });
}
