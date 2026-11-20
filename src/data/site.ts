export const site = {
  name: "Yehiel YANOU",
  brand: "yepy.soft",
  title: "Ingénieur Logiciel Fullstack & Consultant IT & Formateur",
  location: "Cameroun",
  email: "yanou.yehiel@yahoo.com",
  phone: "+237 695 707 732",
  linkedin: "https://linkedin.com/in/yehiel-yanou-150444221",
  roles: [
    "Développeur Full-Stack & IA",
    "Consultant IT",
    "Architecte d'API & SaaS",
    "Développeur Mobile",
    "Formateur & Mentor",
  ],
  intro:
    "Je conçois, développe et déploie avec mon équipe des plateformes web et mobiles robustes, du backend Spring Boot / Node.js jusqu'à l'interface Next.js et React Native, avec le DevOps pour les mettre en production.",
  stats: [
    { value: "3–6", label: "Personnes encadrées par projet" },
    { value: "Web + Mobile", label: "Du backend à la production" },
    { value: "Cameroun · France · Canada", label: "Marchés de mes produits" },
  ],
};

export const stack = [
  "Spring Boot",
  "Java",
  "TypeScript",
  "Node.js",
  "Next.js",
  "React Native",
  "Expo",
  "MySQL",
  "Redis",
  "Nginx",
  "Apache",
  "Linux VPS",
  "CI/CD",
  "Tailwind CSS",
  "GSAP",
];

export const services = [
  {
    n: "01",
    title: "Plateformes web & SaaS",
    text: "Applications Next.js et APIs Spring Boot / Node.js, back-offices et dashboards pensés pour des équipes non techniques.",
  },
  {
    n: "02",
    title: "Applications mobiles",
    text: "Apps React Native / Expo performantes, connectées à des backends sécurisés, prêtes pour les stores.",
  },
  {
    n: "03",
    title: "Fintech & paiements",
    text: "Portefeuilles, transferts, paiements de frais : des flux fiables pour le Cameroun et le Canada.",
  },
  {
    n: "04",
    title: "DevOps & mise en production",
    text: "Déploiement sur VPS Linux, Nginx/Apache, cache Redis, pipelines CI/CD et supervision.",
  },
  {
    n: "05",
    title: "Conseil & encadrement",
    text: "Cadrage, architecture, feuille de route et pilotage d'équipes de 3 à 6 développeurs.",
  },
];

export type Project = {
  title: string;
  tag: string;
  text: string;
  stack: string[];
  href?: string;
};

export const projects: Project[] = [
  {
    title: "GESCo School App",
    tag: "Éducation · SaaS · IA",
    text: "Plateforme SaaS de gestion scolaire pour les établissements camerounais : notes, bulletins, paiements Mobile Money (MTN MoMo, Orange Money) et application mobile pour parents et enseignants. Une couche d'IA analyse l'évolution des notes pour détecter tôt les élèves en difficulté, prédire les résultats aux examens par élève, classe et matière, et recommander des actions pédagogiques ciblées, comme des sessions de rattrapage. Elle compare aussi les promotions pour repérer les blocages communs à plusieurs classes.",
    stack: ["Next.js", "Node.js", "IA prédictive", "Mobile Money"],
    href: "https://gesco-app.com",
  },
  {
    title: "Sendo",
    tag: "Fintech · Mobile",
    text: "Transfert d'argent Canada–Cameroun, portefeuille, mobile money et cartes virtuelles.",
    stack: ["Expo", "Express.js", "Next.js", "MySQL"],
  },
  {
    title: "PaySchool / SFE Connect",
    tag: "Paiement",
    text: "Paiement des frais de scolarité au Cameroun et au Canada.",
    stack: ["Next.js", "Spring Boot", "MySQL"],
  },
  {
    title: "LUVNOTE",
    tag: "Social · Matching · Rencontre",
    text: "Plateforme de rencontres et de matching avec dashboard d'administration.",
    stack: ["Spring Boot", "Next.js", "Expo", "PostgreSQL"],
    href: "https://luvnote.io",
  },
  {
    title: "ADEPA Santé",
    tag: "ONG · Santé mentale",
    text: "Site de l'association ADEPA Santé (France, Luxembourg, Cameroun), plateforme d'information et d'orientation en santé mentale pour les jeunes et leurs familles. Guides pratiques, programmes de prévention en milieu scolaire, télésoin, agenda d'événements, mission humanitaire à Douala, espace bénévolat et partenariats, blog, newsletter et page de dons.",
    stack: ["Site vitrine", "WordPress", "Blog", "Dons", "Newsletter"],
    href: "https://adepasante.org",
  },
];

export const process = [
  { title: "Cadrer", text: "Besoins, périmètre, feuille de route et estimation réaliste." },
  { title: "Concevoir", text: "Architecture, modèle de données, maquettes et choix techniques." },
  { title: "Construire", text: "Développement itératif, revues de code, tests et démos régulières." },
  { title: "Déployer", text: "CI/CD, VPS, monitoring et accompagnement après la mise en ligne." },
];
