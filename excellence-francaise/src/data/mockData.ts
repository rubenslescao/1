// Helper function to generate dynamic dates (articles from November 2025 minimum)
const getDynamicDate = (daysAgo: number): string => {
  const today = new Date();
  const date = new Date(today);
  date.setDate(date.getDate() - daysAgo);
  
  // Ensure minimum date is November 2025
  const minDate = new Date(2025, 10, 1); // November 1, 2025
  if (date < minDate) {
    // Set to November 2025, keeping the day offset
    date.setFullYear(2025);
    date.setMonth(10 + Math.floor(daysAgo / 30)); // November + months
    date.setDate(Math.max(1, 28 - (daysAgo % 30))); // Day within month
  }
  
  return date.toISOString().split('T')[0];
};

// Types
export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: Category;
  date: string;
  source: string;
  imageUrl: string;
  isHistorical?: boolean;
  historicalYear?: number;
}

export interface Quote {
  text: string;
  author: string;
  title: string;
}

export interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  category: string;
}

export interface Portrait {
  id: string;
  name: string;
  title: string;
  domain: string;
  achievement: string;
  quote: string;
  imageUrl: string;
}

export type Category = 
  | 'science'
  | 'tech'
  | 'business'
  | 'sport'
  | 'agriculture'
  | 'culture'
  | 'defense'
  | 'luxe'
  | 'histoire'
  | 'litterature';

export const CATEGORIES: { id: Category; label: string; emoji: string; color: string }[] = [
  { id: 'science', label: 'Science & Recherche', emoji: '🔬', color: 'bg-blue-600' },
  { id: 'tech', label: 'Tech & Innovation', emoji: '🚀', color: 'bg-indigo-600' },
  { id: 'business', label: 'Business & Économie', emoji: '📈', color: 'bg-emerald-600' },
  { id: 'sport', label: 'Sport & Performance', emoji: '🏅', color: 'bg-amber-600' },
  { id: 'agriculture', label: 'Agriculture & Terroir', emoji: '🌾', color: 'bg-lime-600' },
  { id: 'culture', label: 'Culture & Création', emoji: '🎨', color: 'bg-rose-600' },
  { id: 'defense', label: 'Défense & Aérospatiale', emoji: '🛡️', color: 'bg-slate-600' },
  { id: 'luxe', label: 'Luxe & Mode', emoji: '💎', color: 'bg-purple-600' },
  { id: 'histoire', label: 'Histoire & Patrimoine', emoji: '🏛️', color: 'bg-amber-700' },
  { id: 'litterature', label: 'Littérature & Édition', emoji: '📚', color: 'bg-red-700' },
];

export const INSPIRATIONAL_QUOTES: Quote[] = [
  {
    text: "La France ne peut être la France sans la grandeur.",
    author: "Charles de Gaulle",
    title: "Président de la République"
  },
  {
    text: "Impossible n'est pas français.",
    author: "Napoléon Bonaparte",
    title: "Empereur des Français"
  },
  {
    text: "Il n'y a qu'une chose qui puisse rendre un rêve impossible : c'est la peur d'échouer.",
    author: "Victor Hugo",
    title: "Écrivain et Poète"
  }
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: 1789,
    title: "Déclaration des Droits de l'Homme",
    description: "La France offre au monde les fondements de la démocratie moderne et des droits universels.",
    category: "Histoire"
  },
  {
    year: 1895,
    title: "Invention du Cinématographe",
    description: "Les frères Lumière inventent le cinéma, donnant naissance au 7ème art à Lyon.",
    category: "Innovation"
  },
  {
    year: 1903,
    title: "Prix Nobel de Physique",
    description: "Marie Curie et Pierre Curie reçoivent le Nobel pour leurs travaux sur la radioactivité.",
    category: "Science"
  },
  {
    year: 1969,
    title: "Premier Vol du Concorde",
    description: "Le supersonique franco-britannique révolutionne l'aviation civile mondiale.",
    category: "Aérospatiale"
  },
  {
    year: 1998,
    title: "Champions du Monde de Football",
    description: "L'équipe de France remporte la Coupe du Monde à domicile, unissant la nation.",
    category: "Sport"
  },
  {
    year: 2023,
    title: "Record d'Export Aérospatial",
    description: "Airbus et l'industrie aérospatiale française battent des records à l'exportation.",
    category: "Industrie"
  }
];

export const ARTICLES: Article[] = [
  // 🔬 Science & Recherche (3 articles)
  {
    id: 'sci-1',
    title: "Le CEA développe un nouveau type de batterie révolutionnaire",
    excerpt: "Les chercheurs du CEA de Grenoble ont mis au point une batterie à l'état solide offrant une autonomie doublée pour les véhicules électriques.",
    content: "Une avancée majeure dans le domaine du stockage d'énergie. Les équipes du Commissariat à l'Énergie Atomique ont développé une technologie de batterie à l'état solide qui pourrait révolutionner l'industrie automobile française et européenne.",
    category: 'science',
    date: getDynamicDate(0), // Aujourd'hui
    source: 'CEA',
    imageUrl: '/images/science-battery.jpg'
  },
  {
    id: 'sci-2',
    title: "L'Institut Pasteur identifie un nouveau traitement contre les maladies auto-immunes",
    excerpt: "Une équipe française a découvert une molécule prometteuse ouvrant la voie à de nouveaux traitements révolutionnaires.",
    content: "L'Institut Pasteur, fer de lance de la recherche médicale française depuis sa fondation par Louis Pasteur, continue d'innover. Cette découverte pourrait bénéficier à des millions de patients dans le monde.",
    category: 'science',
    date: getDynamicDate(3), // Il y a 3 jours
    source: 'Institut Pasteur',
    imageUrl: '/images/science-pasteur.jpg'
  },
  {
    id: 'sci-3',
    title: "Le CNRS dévoile une percée majeure en physique quantique",
    excerpt: "Des physiciens français ont réalisé une avancée décisive dans le calcul quantique à température ambiante.",
    content: "Le Centre National de la Recherche Scientifique confirme l'excellence de la recherche française. Cette percée positionne la France parmi les leaders mondiaux de la course à l'ordinateur quantique.",
    category: 'science',
    date: getDynamicDate(6), // Il y a 6 jours
    source: 'CNRS',
    imageUrl: '/images/science-quantum.jpg'
  },

  // 🚀 Tech & Innovation (3 articles)
  {
    id: 'tech-1',
    title: "Mistral AI lève 600 millions d'euros et rivalise avec OpenAI",
    excerpt: "La pépite française de l'intelligence artificielle continue son ascension fulgurante sur la scène mondiale.",
    content: "Fondée à Paris, Mistral AI s'impose comme le champion européen de l'IA générative. Cette levée de fonds historique témoigne de la capacité française à créer des géants technologiques.",
    category: 'tech',
    date: getDynamicDate(1), // Hier
    source: 'Les Échos',
    imageUrl: '/images/tech-mistral.jpg'
  },
  {
    id: 'tech-2',
    title: "Doctolib franchit le cap des 80 millions d'utilisateurs en Europe",
    excerpt: "La licorne française de la e-santé poursuit son expansion et transforme l'accès aux soins en Europe.",
    content: "Depuis sa création en France, Doctolib a révolutionné la prise de rendez-vous médicaux. Un exemple parfait de l'innovation française au service du bien commun.",
    category: 'tech',
    date: getDynamicDate(4), // Il y a 4 jours
    source: 'Le Figaro',
    imageUrl: '/images/tech-doctolib.jpg'
  },
  {
    id: 'tech-3',
    title: "OVHcloud inaugure son datacenter nouvelle génération à Strasbourg",
    excerpt: "Le leader européen du cloud computing renforce sa position avec des infrastructures souveraines.",
    content: "OVHcloud, fleuron français du cloud, inaugure un datacenter éco-responsable utilisant un système de refroidissement innovant. La souveraineté numérique européenne passe par la France.",
    category: 'tech',
    date: getDynamicDate(8), // Il y a 8 jours
    source: 'L\'Usine Digitale',
    imageUrl: '/images/tech-ovh.jpg'
  },

  // 📈 Business & Économie (3 articles)
  {
    id: 'biz-1',
    title: "LVMH confirme sa place de première capitalisation européenne",
    excerpt: "Le groupe de luxe français dirigé par Bernard Arnault dépasse les 400 milliards d'euros de valorisation.",
    content: "LVMH incarne l'excellence française dans le luxe mondial. De Louis Vuitton à Dior, le groupe rassemble les plus belles maisons et fait rayonner le savoir-faire français sur tous les continents.",
    category: 'business',
    date: getDynamicDate(2), // Il y a 2 jours
    source: 'Bloomberg',
    imageUrl: '/images/business-lvmh.jpg'
  },
  {
    id: 'biz-2',
    title: "La French Tech atteint un record de 25 licornes en 2025",
    excerpt: "L'écosystème startup français n'a jamais été aussi dynamique, avec une nouvelle licorne chaque mois.",
    content: "La France s'impose comme le leader européen de la création de licornes. BlaBlaCar, Contentsquare, Mirakl... autant de success stories qui témoignent du génie entrepreneurial français.",
    category: 'business',
    date: getDynamicDate(5), // Il y a 5 jours
    source: 'La French Tech',
    imageUrl: '/images/business-frenchtech.jpg'
  },
  {
    id: 'biz-3',
    title: "Hermès : le sellier parisien affiche une croissance exceptionnelle",
    excerpt: "La maison française de luxe enregistre une hausse de 20% de son chiffre d'affaires au premier trimestre 2025.",
    content: "Fondée en 1837, Hermès perpétue l'excellence artisanale française. Ses ateliers, tous situés en France, emploient plus de 7 000 artisans formés aux métiers d'art traditionnels.",
    category: 'business',
    date: getDynamicDate(9), // Il y a 9 jours
    source: 'Reuters',
    imageUrl: '/images/business-hermes.jpg'
  },

  // 🏅 Sport & Performance (3 articles)
  {
    id: 'sport-1',
    title: "Léon Marchand bat deux records du monde aux championnats de natation",
    excerpt: "Le prodige toulousain confirme son statut de meilleur nageur de la planète en 2025.",
    content: "Léon Marchand, nouveau héros du sport français, pulvérise les records en papillon et 4 nages. Entraîné par Bob Bowman (ex-coach de Michael Phelps), il porte haut les couleurs de la France.",
    category: 'sport',
    date: getDynamicDate(0), // Aujourd'hui
    source: 'L\'Équipe',
    imageUrl: '/images/sport-marchand.jpg'
  },
  {
    id: 'sport-2',
    title: "L'équipe de France de handball remporte son huitième titre européen",
    excerpt: "Les Experts confirment leur domination sans partage sur le handball mondial.",
    content: "Le handball français reste une référence mondiale. Cette nouvelle victoire s'inscrit dans une tradition d'excellence qui fait de la France la nation la plus titrée de l'histoire de ce sport.",
    category: 'sport',
    date: getDynamicDate(3), // Il y a 3 jours
    source: 'France TV Sport',
    imageUrl: '/images/sport-handball.jpg'
  },
  {
    id: 'sport-3',
    title: "Teddy Riner : légende vivante du judo avec son douzième titre mondial",
    excerpt: "Le judoka français entre définitivement dans la légende du sport mondial.",
    content: "Teddy Riner, avec ses 12 titres mondiaux et 5 médailles olympiques, incarne l'excellence sportive française. Un parcours exemplaire qui inspire des générations d'athlètes.",
    category: 'sport',
    date: getDynamicDate(7), // Il y a 7 jours
    source: 'Le Monde',
    imageUrl: '/images/sport-riner.jpg'
  },

  // 🌾 Agriculture & Terroir (3 articles)
  {
    id: 'agri-1',
    title: "Le vin français confirme sa première place mondiale à l'export en 2025",
    excerpt: "Avec 13 milliards d'euros d'exportations, le vignoble français reste le leader incontesté.",
    content: "Bordeaux, Bourgogne, Champagne... Les vins français sont synonymes d'excellence dans le monde entier. Un savoir-faire séculaire qui fait la fierté de nos terroirs.",
    category: 'agriculture',
    date: getDynamicDate(1), // Hier
    source: 'FranceAgriMer',
    imageUrl: '/images/agri-vin.jpg'
  },
  {
    id: 'agri-2',
    title: "La France, première puissance agricole européenne",
    excerpt: "L'agriculture française maintient sa position de leader avec une production record en 2025.",
    content: "Premier producteur agricole de l'UE, la France nourrit l'Europe et exporte son savoir-faire dans le monde entier. Un secteur stratégique qui allie tradition et innovation.",
    category: 'agriculture',
    date: getDynamicDate(5), // Il y a 5 jours
    source: 'Ministère de l\'Agriculture',
    imageUrl: '/images/agri-france.jpg'
  },
  {
    id: 'agri-3',
    title: "Le fromage français : 48 AOP, nouveau record mondial",
    excerpt: "La France compte plus d'appellations fromagères protégées que tout autre pays au monde.",
    content: "Du Camembert au Roquefort, en passant par le Comté, les fromages français sont un patrimoine vivant. 48 AOP témoignent de la richesse unique de nos terroirs.",
    category: 'agriculture',
    date: getDynamicDate(10), // Il y a 10 jours
    source: 'INAO',
    imageUrl: '/images/agri-fromage.jpg'
  },

  // 🎨 Culture & Création (3 articles)
  {
    id: 'culture-1',
    title: "Le Louvre reste le musée le plus visité au monde avec 10 millions de visiteurs",
    excerpt: "Le palais parisien confirme son attractivité universelle et son rayonnement culturel en 2025.",
    content: "De la Joconde à la Victoire de Samothrace, le Louvre abrite les chefs-d'œuvre de l'humanité. Ce record de fréquentation témoigne du soft power culturel français.",
    category: 'culture',
    date: getDynamicDate(2), // Il y a 2 jours
    source: 'AFP',
    imageUrl: '/images/culture-louvre.jpg'
  },
  {
    id: 'culture-2',
    title: "Le cinéma français triomphe à Cannes avec trois récompenses majeures",
    excerpt: "Les réalisateurs français dominent la 78e édition du Festival de Cannes.",
    content: "La France, patrie des frères Lumière, continue de briller sur la scène cinématographique mondiale. Cannes reste le rendez-vous incontournable du 7e art.",
    category: 'culture',
    date: getDynamicDate(6), // Il y a 6 jours
    source: 'Festival de Cannes',
    imageUrl: '/images/culture-cannes.jpg'
  },
  {
    id: 'culture-3',
    title: "La gastronomie française célèbre 15 ans au patrimoine mondial de l'UNESCO",
    excerpt: "Le repas gastronomique des Français célèbre ses 15 ans d'inscription au patrimoine immatériel.",
    content: "Seule cuisine au monde inscrite au patrimoine de l'UNESCO, la gastronomie française incarne l'art de vivre à la française. Un héritage transmis de génération en génération.",
    category: 'culture',
    date: getDynamicDate(11), // Il y a 11 jours
    source: 'UNESCO',
    imageUrl: '/images/culture-gastro.jpg'
  },

  // 🛡️ Défense & Aérospatiale (3 articles)
  {
    id: 'defense-1',
    title: "Airbus livre son 120e A350 de l'année, record historique",
    excerpt: "L'avionneur européen, piloté depuis Toulouse, bat tous ses records de production en 2025.",
    content: "Airbus, dont le siège opérationnel est à Toulouse, confirme sa position de leader mondial de l'aéronautique civile. Un succès français qui emploie plus de 50 000 personnes dans l'Hexagone.",
    category: 'defense',
    date: getDynamicDate(1), // Hier
    source: 'Airbus',
    imageUrl: '/images/defense-airbus.jpg'
  },
  {
    id: 'defense-2',
    title: "Arianespace : succès du 10e lancement d'Ariane 6 en 2025",
    excerpt: "Le lanceur Ariane 6 réussit parfaitement sa mission depuis Kourou.",
    content: "La France, puissance spatiale de premier plan, continue d'assurer l'accès indépendant de l'Europe à l'espace. Un atout stratégique majeur pour la souveraineté européenne.",
    category: 'defense',
    date: getDynamicDate(4), // Il y a 4 jours
    source: 'CNES',
    imageUrl: '/images/defense-ariane.jpg'
  },
  {
    id: 'defense-3',
    title: "Dassault Aviation : le Rafale, chasseur le plus exporté d'Europe",
    excerpt: "Le fleuron de l'industrie aéronautique française séduit de nouveaux pays partenaires en 2025.",
    content: "Le Rafale, entièrement conçu et fabriqué en France, s'impose comme une référence mondiale. Un concentré de technologie française qui assure notre indépendance stratégique.",
    category: 'defense',
    date: getDynamicDate(8), // Il y a 8 jours
    source: 'Dassault Aviation',
    imageUrl: '/images/defense-rafale.jpg'
  },

  // 💎 Luxe supplémentaire (ex-artisanat)
  {
    id: 'luxe-1',
    title: "Les Compagnons du Devoir forment 12 000 nouveaux artisans en 2025",
    excerpt: "L'excellence des métiers manuels français attire toujours plus de jeunes talents.",
    content: "Héritiers d'une tradition séculaire, les Compagnons du Devoir perpétuent et transmettent les savoir-faire d'excellence qui ont bâti les cathédrales et les plus beaux monuments de France.",
    category: 'luxe',
    date: getDynamicDate(2), // Il y a 2 jours
    source: 'Compagnons du Devoir',
    imageUrl: '/images/art-compagnons.jpg'
  },
  {
    id: 'luxe-2',
    title: "La haute couture parisienne génère 2,5 milliards d'euros",
    excerpt: "Paris reste la capitale mondiale de la mode et du savoir-faire textile en 2025.",
    content: "Chanel, Dior, Saint Laurent... Les maisons de couture françaises perpétuent un artisanat d'exception. Chaque pièce est une œuvre d'art née des mains expertes d'artisans français.",
    category: 'luxe',
    date: getDynamicDate(6), // Il y a 6 jours
    source: 'Fédération de la Haute Couture',
    imageUrl: '/images/art-couture.jpg'
  },
  {
    id: 'luxe-3',
    title: "La cristallerie française Baccarat célèbre 261 ans d'excellence",
    excerpt: "Le cristallier lorrain, fournisseur des cours royales du monde entier depuis 1764.",
    content: "Baccarat incarne l'excellence du savoir-faire français. Ses maîtres-verriers perpétuent des techniques ancestrales pour créer des pièces d'exception reconnues dans le monde entier.",
    category: 'luxe',
    date: getDynamicDate(12), // Il y a 12 jours
    source: 'Baccarat',
    imageUrl: '/images/art-baccarat.jpg'
  },

  // Articles historiques intégrés au feed
  {
    id: 'hist-1',
    title: "1895 : Les frères Lumière inventent le cinéma à Lyon",
    excerpt: "Il y a 130 ans, Auguste et Louis Lumière projetaient le premier film de l'histoire.",
    content: "Le 28 décembre 1895, au Grand Café de Paris, les frères Lumière présentent leur Cinématographe. La France offre au monde le 7e art, révolutionnant à jamais le divertissement et la culture.",
    category: 'culture',
    date: getDynamicDate(7), // Il y a 7 jours
    source: 'Institut Lumière',
    imageUrl: '/images/hist-lumiere.jpg',
    isHistorical: true,
    historicalYear: 1895
  },
  {
    id: 'hist-2',
    title: "1903 : Marie Curie, première femme Prix Nobel",
    excerpt: "La scientifique franco-polonaise révolutionne la physique et reçoit une reconnaissance mondiale.",
    content: "Marie Curie, naturalisée française, reçoit le Prix Nobel de Physique avec son mari Pierre. Elle obtiendra un second Nobel en 1911. Un exemple d'excellence scientifique française.",
    category: 'science',
    date: getDynamicDate(14), // Il y a 14 jours
    source: 'Académie des Sciences',
    imageUrl: '/images/hist-curie.jpg',
    isHistorical: true,
    historicalYear: 1903
  },
  {
    id: 'hist-3',
    title: "1789 : La France proclame les Droits de l'Homme",
    excerpt: "La Déclaration des Droits de l'Homme et du Citoyen pose les fondements de la démocratie moderne.",
    content: "Le 26 août 1789, l'Assemblée nationale constituante adopte un texte fondateur pour l'humanité. La France offre au monde les principes de liberté, d'égalité et de fraternité.",
    category: 'culture',
    date: getDynamicDate(21), // Il y a 21 jours
    source: 'Archives Nationales',
    imageUrl: '/images/hist-droits.jpg',
    isHistorical: true,
    historicalYear: 1789
  }
];

export const PORTRAITS: Portrait[] = [
  {
    id: 'portrait-1',
    name: 'Thomas Pesquet',
    title: 'Astronaute',
    domain: 'Aérospatiale',
    achievement: 'Commandant de la Station Spatiale Internationale, ambassadeur de l\'excellence française dans l\'espace',
    quote: 'Quand on voit la Terre depuis l\'espace, on comprend à quel point elle est précieuse.',
    imageUrl: '/images/portrait-pesquet.jpg'
  },
  {
    id: 'portrait-2',
    name: 'Emmanuelle Charpentier',
    title: 'Prix Nobel de Chimie 2020',
    domain: 'Science',
    achievement: 'Co-inventrice de la technologie CRISPR-Cas9, révolutionnant la génétique mondiale',
    quote: 'La curiosité scientifique est le moteur de toute découverte.',
    imageUrl: '/images/portrait-charpentier.jpg'
  },
  {
    id: 'portrait-3',
    name: 'Xavier Niel',
    title: 'Entrepreneur',
    domain: 'Tech & Business',
    achievement: 'Fondateur de Free et de l\'École 42, révolutionnaire des télécoms et de l\'éducation',
    quote: 'L\'échec fait partie du chemin vers le succès.',
    imageUrl: '/images/portrait-niel.jpg'
  },
  {
    id: 'portrait-4',
    name: 'Teddy Riner',
    title: 'Champion Olympique',
    domain: 'Sport',
    achievement: '11 fois champion du monde de judo, sportif français le plus titré de l\'histoire',
    quote: 'Le travail paie toujours. Il faut y croire et persévérer.',
    imageUrl: '/images/portrait-riner.jpg'
  }
];

// Peuple d'Élite content
export const PEUPLE_ELITE_CONTENT = {
  title: "Pourquoi un Peuple d'Élite ?",
  subtitle: "L'excellence comme tradition nationale",
  sections: [
    {
      title: "L'Héritage des Lumières",
      content: "La France a donné au monde les Lumières : Voltaire, Rousseau, Montesquieu, Diderot. Ces penseurs ont forgé les concepts de liberté, de tolérance et de raison qui fondent les démocraties modernes. La Déclaration des Droits de l'Homme et du Citoyen (1789) reste le texte fondateur des droits universels."
    },
    {
      title: "Une Densité de Génie Inégalée",
      content: "Avec 70 Prix Nobel, la France se classe parmi les nations les plus récompensées au monde. De Marie Curie à Emmanuelle Charpentier, de Louis Pasteur à Luc Montagnier, le génie français a transformé la médecine, la physique et la chimie. La densité de ces accomplissements, rapportée à la population, est exceptionnelle."
    },
    {
      title: "L'Art de Vivre Érigé en Modèle",
      content: "La France est la seule nation dont la gastronomie est inscrite au patrimoine mondial de l'UNESCO. De la haute couture à la parfumerie, du vin au fromage, le savoir-faire français définit les standards mondiaux du luxe et de l'excellence. Paris reste la capitale mondiale de la mode, de l'art et de la culture."
    },
    {
      title: "Une Tradition d'Innovation",
      content: "Du cinéma (Lumière) à l'aviation (Blériot), de la carte à puce (Moreno) au minitel précurseur d'Internet, la France a constamment innové. Aujourd'hui, avec des champions comme Mistral AI, Dassault ou Airbus, cette tradition perdure. L'excellence n'est pas un accident : c'est une culture."
    }
  ]
};

