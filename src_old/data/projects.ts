export type ProjectLink = {
  label: string;
  url: string;
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  category: "Web & Mobile" | "Application mobile";
  badge?: string;
  images: string[];
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    slug: "gesco",
    name: "GESCo",
    tagline: "Plateforme de gestion en temps réel",
    description:
      "Application web et mobile de gestion complète des établissements scolaires et des centres de formation, composée d'une API, d'un dashboard web et d'une application mobile, avec authentification, notifications en temps réel et support multilingue.",
    tags: ["Next.js", "Node.js", "Socket.io", "React Native", "i18n", "Express.js", "Sequelize"],
    category: "Web & Mobile",
    images: [
      "/images/projects/gesco/Logo_IconeApp_Color_v2_512x512.png",
      "/images/projects/gesco/logo_sans_bg.png",
      "/images/projects/gesco/play_feature_graphic_1024x500.png"
    ],
    links: [
      { label: "Site", url: "https://gesco-app.com/" },
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.gesco.school&pcampaignid=web_share",
      },
    ],
  },
  {
    slug: "hotel-management",
    name: "HotelManagement",
    tagline: "Système de gestion hôtelière",
    description:
      "Application de gestion pour établissements hôteliers : réservations, chambres, clients et facturation, avec un frontend et un backend dédiés.",
    tags: ["React", "Node.js", "REST API"],
    category: "Web & Mobile",
    badge: "En cours de développement",
    images: [],
    links: [
      
    ],
  },
  {
    slug: "luvnote",
    name: "LUVNOTE",
    tagline: "Application mobile",
    description:
      "Application de rencontre type Tinder, avec authentification Google et backend dédié.",
    tags: ["Next.js", "Spring Boot", "Socket.io", "React Native", "Matching", "SQL", "Paiement Mobile", "Stripe"],
    category: "Web & Mobile",
    images: [
      "/images/projects/luvnote/ChatGPT Image 4 août 2026, 10_54_50.png", 
      "/images/projects/luvnote/logofullwhite.png",
      "/images/projects/luvnote/logofullDark.png"
    ],
    links: [{ label: "Site", url: "https://luvnote.io/" }],
  },
  {
    slug: "sendo",
    name: "Sendo",
    tagline: "Application mobile",
    description:
      "Application mobile permettant d'envoyer de l'argent du Canada vers le Cameroun, de créer des cartes bancaires virtuelles et d'effectuer des paiements en ligne. Elle est disponible sur les stores, conçue pour offrir une expérience fluide et intuitive à ses utilisateurs.",
    tags: ["Next.js", "Node.js", "Socket.io", "React Native", "Express.js", "Sequelize", "Mobile", "iOS", "Android", "Paiement Mobile", "Carte bancaire"],
    category: "Application mobile",
    badge: "Disponible sur les stores",
    images: [
      "/images/projects/sendo/ChatGPT Image 4 août 2026, 10_51_08.png", 
      "/images/projects/sendo/icon-sendo.png"
    ],
    links: [
      { label: "Site", url: "https://www.sf-e.ca/sendo/" },
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.sfe.ca&pcampaignid=web_share",
      },
      {
        label: "App Store",
        url: "https://apps.apple.com/cm/app/sendo/id6753186956",
      },
    ],
  },
  {
    slug: "sfe-connect",
    name: "SFE Connect",
    tagline: "Application mobile",
    description:
      "Application mobile disponible sur les stores, développée pour faciliter les paiements des frais de scolarité des étudiants camerounais au Canada",
    tags: ["Next.js", "Node.js", "Socket.io", "React Native", "Express.js", "Sequelize", "Mobile", "iOS", "Android", "Paiement Mobile"],
    category: "Application mobile",
    badge: "Disponible sur les stores",
    images: [
      "/images/projects/sfe-connect/400x400ia-75.webp"
    ],
    links: [
      { label: "Site", url: "https://www.sf-e.ca/" },
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.sfesendo.connect&pcampaignid=web_share",
      },
      {
        label: "App Store",
        url: "https://apps.apple.com/cm/app/sfe-connect/id6749484116",
      },
    ],
  },
  {
    slug: "payschool",
    name: "PaySchool",
    tagline: "Paiement scolaire simplifié",
    description:
      "Application mobile de paiement des frais scolaires au Cameroun, disponible sur les stores, pensée pour simplifier la vie des parents et des établissements.",
    tags: ["React", "Spring Boot", "Socket.io", "React Native", "MySQL", "Mobile", "iOS", "Android", "Paiement Mobile"],
    category: "Application mobile",
    badge: "Disponible sur les stores",
    images: [
      "/images/projects/payschool/400x400ia-75.webp"
    ],
    links: [
      { label: "Site", url: "https://www.sf-e.ca/payschool/" },
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.sfe.payschool&pcampaignid=web_share",
      },
      {
        label: "App Store",
        url: "https://apps.apple.com/cm/app/payschool/id6749690892",
      },
    ],
  },
];
