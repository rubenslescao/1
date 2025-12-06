// LÉGENDES FRANÇAISES - Immortels & Icônes Vivantes

export interface Portrait {
  id: number;
  name: string;
  category: string;
  title: string;
  description: string;
  achievement: string;
  image: string;
  status: string;
  year: string;
  initials: string;
}

// Fonction pour générer un placeholder avec initiales
const getPlaceholder = (initials: string, bgColor: string = '1a1a2e') => 
  `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect fill="#${bgColor}" width="200" height="200"/><text x="100" y="115" text-anchor="middle" fill="#D4AF37" font-family="Georgia" font-size="60" font-weight="bold">${initials}</text></svg>`)}`;

const portraitsExcellence: Portrait[] = [
  {
    id: 1,
    name: "Marie Curie",
    category: "Science",
    title: "DOUBLE PRIX NOBEL",
    description: "Seule personne à avoir reçu deux Prix Nobel dans deux sciences différentes (Physique 1903, Chimie 1911).",
    achievement: "Double Nobel",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Marie_Curie_c1920.jpg",
    status: "Légende Éternelle",
    year: "1867-1934",
    initials: "MC"
  },
  {
    id: 2,
    name: "Alain Aspect",
    category: "Science",
    title: "PRIX NOBEL DE PHYSIQUE 2022",
    description: "Pionnier de la physique quantique, recherches sur l'intrication quantique.",
    achievement: "Prix Nobel",
    image: getPlaceholder("AA", "0a2472"),
    status: "Vivant",
    year: "Né en 1947",
    initials: "AA"
  },
  {
    id: 3,
    name: "Paul Bocuse",
    category: "Gastronomie",
    title: "PAPE DE LA GASTRONOMIE",
    description: "3 étoiles Michelin pendant 53 ans. Monument de la cuisine française.",
    achievement: "Chef du Siècle",
    image: getPlaceholder("PB", "8B4513"),
    status: "Légende Éternelle",
    year: "1926-2018",
    initials: "PB"
  },
  {
    id: 4,
    name: "Alain Ducasse",
    category: "Gastronomie",
    title: "CHEF LE PLUS ÉTOILÉ",
    description: "21 étoiles Michelin, ambassadeur de la gastronomie française.",
    achievement: "21 Étoiles",
    image: getPlaceholder("AD", "8B4513"),
    status: "Vivant",
    year: "Né en 1956",
    initials: "AD"
  },
  {
    id: 5,
    name: "Zinédine Zidane",
    category: "Sport",
    title: "LÉGENDE DU FOOTBALL",
    description: "Champion du Monde 1998, Ballon d'Or, triple vainqueur Ligue des Champions.",
    achievement: "Ballon d'Or",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Zinedine_Zidane_by_Tasnim_03.jpg",
    status: "Vivant",
    year: "Né en 1972",
    initials: "ZZ"
  },
  {
    id: 6,
    name: "Teddy Riner",
    category: "Sport",
    title: "PLUS GRAND JUDOKA",
    description: "11x Champion du Monde, 5 médailles olympiques dont 3 en or.",
    achievement: "11x Champion",
    image: getPlaceholder("TR", "228B22"),
    status: "Vivant",
    year: "Né en 1989",
    initials: "TR"
  },
  {
    id: 7,
    name: "Jean-Paul Belmondo",
    category: "Cinéma",
    title: "MONUMENT DU CINÉMA",
    description: "À bout de souffle, Le Professionnel. Icône de la Nouvelle Vague.",
    achievement: "Légende",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Jean-Paul_Belmondo_1962.jpg",
    status: "Légende Éternelle",
    year: "1933-2021",
    initials: "JPB"
  },
  {
    id: 8,
    name: "Catherine Deneuve",
    category: "Cinéma",
    title: "ICÔNE DU CINÉMA",
    description: "Les Parapluies de Cherbourg. Visage de Marianne.",
    achievement: "César d'honneur",
    image: getPlaceholder("CD", "800080"),
    status: "Vivant",
    year: "Née en 1943",
    initials: "CD"
  },
  {
    id: 9,
    name: "Coco Chanel",
    category: "Mode",
    title: "RÉVOLUTION DE LA MODE",
    description: "A libéré la femme du corset, créé le N°5.",
    achievement: "Légende du Luxe",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/33/Coco_Chanel%2C_1920.jpg",
    status: "Légende Éternelle",
    year: "1883-1971",
    initials: "CC"
  },
  {
    id: 10,
    name: "Bernard Arnault",
    category: "Luxe",
    title: "EMPEREUR DU LUXE",
    description: "LVMH, 75 maisons de luxe. 1ère fortune mondiale.",
    achievement: "1ère Fortune",
    image: getPlaceholder("BA", "4B0082"),
    status: "Vivant",
    year: "Né en 1949",
    initials: "BA"
  },
  {
    id: 11,
    name: "Édith Piaf",
    category: "Musique",
    title: "LA VOIX DE LA FRANCE",
    description: "La Vie en Rose, Non je ne regrette rien.",
    achievement: "Légende Mondiale",
    image: getPlaceholder("EP", "8B0000"),
    status: "Légende Éternelle",
    year: "1915-1963",
    initials: "EP"
  },
  {
    id: 12,
    name: "Jean-Michel Jarre",
    category: "Musique",
    title: "PIONNIER ÉLECTRONIQUE",
    description: "Oxygène, 80 millions d'albums vendus.",
    achievement: "Pionnier",
    image: getPlaceholder("JMJ", "000080"),
    status: "Vivant",
    year: "Né en 1948",
    initials: "JMJ"
  },
  {
    id: 13,
    name: "Victor Hugo",
    category: "Littérature",
    title: "GÉNIE LITTÉRAIRE",
    description: "Les Misérables, Notre-Dame de Paris.",
    achievement: "Panthéon",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/25/Victor_Hugo_by_%C3%89tienne_Carjat_1876_-_full.jpg",
    status: "Légende Éternelle",
    year: "1802-1885",
    initials: "VH"
  },
  {
    id: 14,
    name: "Michel Houellebecq",
    category: "Littérature",
    title: "ÉCRIVAIN CONTEMPORAIN",
    description: "Prix Goncourt, traduit en 50 langues.",
    achievement: "Prix Goncourt",
    image: getPlaceholder("MH", "2F4F4F"),
    status: "Vivant",
    year: "Né en 1956",
    initials: "MH"
  },
  {
    id: 15,
    name: "Jacques-Yves Cousteau",
    category: "Exploration",
    title: "PIONNIER DES OCÉANS",
    description: "Inventeur du scaphandre autonome.",
    achievement: "Commandant",
    image: getPlaceholder("JYC", "006994"),
    status: "Légende Éternelle",
    year: "1910-1997",
    initials: "JYC"
  },
  {
    id: 16,
    name: "Thomas Pesquet",
    category: "Spatial",
    title: "ASTRONAUTE ESA",
    description: "Commandant de l'ISS. Fierté française.",
    achievement: "Commandant ISS",
    image: getPlaceholder("TP", "191970"),
    status: "Vivant",
    year: "Né en 1978",
    initials: "TP"
  },
  {
    id: 17,
    name: "Napoléon Bonaparte",
    category: "Histoire",
    title: "EMPEREUR DES FRANÇAIS",
    description: "Code Civil, système métrique.",
    achievement: "Code Napoléon",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/50/Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project.jpg",
    status: "Légende Éternelle",
    year: "1769-1821",
    initials: "NB"
  },
  {
    id: 18,
    name: "Charles de Gaulle",
    category: "Histoire",
    title: "PÈRE DE LA Ve RÉPUBLIQUE",
    description: "Chef de la France Libre, fondateur de la Ve République.",
    achievement: "Libérateur",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ec/De_Gaulle-OWI_%28cropped%29.jpg",
    status: "Légende Éternelle",
    year: "1890-1970",
    initials: "CDG"
  },
  {
    id: 19,
    name: "Claude Monet",
    category: "Peinture",
    title: "PÈRE DE L'IMPRESSIONNISME",
    description: "Les Nymphéas, Impression Soleil Levant.",
    achievement: "Maître",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Claude_Monet_1899_Nadar_crop.jpg",
    status: "Légende Éternelle",
    year: "1840-1926",
    initials: "CM"
  },
  {
    id: 20,
    name: "JR",
    category: "Art Contemporain",
    title: "ARTISTE URBAIN",
    description: "Prix TED, Pyramide du Louvre.",
    achievement: "Prix TED",
    image: getPlaceholder("JR", "3D3D3D"),
    status: "Vivant",
    year: "Né en 1983",
    initials: "JR"
  }
];

export default portraitsExcellence;
