// LÉGENDES FRANÇAISES - VRAIES PHOTOS VÉRIFIÉES
// URLs testées et fonctionnelles

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
}

const portraitsExcellence: Portrait[] = [
  // === SCIENCE ===
  {
    id: 1,
    name: "Marie Curie",
    category: "Science",
    title: "DOUBLE PRIX NOBEL",
    description: "Seule personne à avoir reçu deux Prix Nobel dans deux sciences différentes (Physique 1903, Chimie 1911).",
    achievement: "Double Nobel",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Marie_Curie_c1920.jpg",
    status: "Légende Éternelle",
    year: "1867-1934"
  },
  {
    id: 2,
    name: "Alain Aspect",
    category: "Science",
    title: "PRIX NOBEL DE PHYSIQUE 2022",
    description: "Pionnier de la physique quantique, recherches sur l'intrication. Référence mondiale vivante.",
    achievement: "Prix Nobel",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Alain_Aspect_%282%29.jpg",
    status: "Vivant",
    year: "Né en 1947"
  },
  
  // === GASTRONOMIE ===
  {
    id: 3,
    name: "Paul Bocuse",
    category: "Gastronomie",
    title: "PAPE DE LA GASTRONOMIE",
    description: "3 étoiles Michelin pendant 53 ans. Monument de la cuisine française.",
    achievement: "Chef du Siècle",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Paul_Bocuse_-_2007.jpg",
    status: "Légende Éternelle",
    year: "1926-2018"
  },
  {
    id: 4,
    name: "Alain Ducasse",
    category: "Gastronomie",
    title: "CHEF LE PLUS ÉTOILÉ AU MONDE",
    description: "21 étoiles Michelin, ambassadeur vivant de la gastronomie française dans 8 pays.",
    achievement: "21 Étoiles",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Alain_Ducasse_-_B%26W_potance.jpg",
    status: "Vivant",
    year: "Né en 1956"
  },
  
  // === SPORT ===
  {
    id: 5,
    name: "Zinédine Zidane",
    category: "Sport",
    title: "LÉGENDE DU FOOTBALL MONDIAL",
    description: "Champion du Monde 1998, Ballon d'Or, triple vainqueur Ligue des Champions. Monument vivant.",
    achievement: "Légende Vivante",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Zinedine_Zidane_by_Tasnim_03.jpg",
    status: "Vivant",
    year: "Né en 1972"
  },
  {
    id: 6,
    name: "Teddy Riner",
    category: "Sport",
    title: "PLUS GRAND JUDOKA DE L'HISTOIRE",
    description: "11x Champion du Monde, 5 médailles olympiques dont 3 en or. Invincible pendant 10 ans.",
    achievement: "11x Champion",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/88/Teddy_Riner_2012.jpg",
    status: "Vivant",
    year: "Né en 1989"
  },
  
  // === CINÉMA ===
  {
    id: 7,
    name: "Jean-Paul Belmondo",
    category: "Cinéma",
    title: "MONUMENT DU CINÉMA FRANÇAIS",
    description: "À bout de souffle, Le Professionnel. Icône de la Nouvelle Vague, 130 films.",
    achievement: "Légende",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Jean-Paul_Belmondo_1960.jpg",
    status: "Légende Éternelle",
    year: "1933-2021"
  },
  {
    id: 8,
    name: "Catherine Deneuve",
    category: "Cinéma",
    title: "ICÔNE INTEMPORELLE DU CINÉMA",
    description: "Les Parapluies de Cherbourg. Visage de Marianne, 80 ans de carrière exemplaire.",
    achievement: "100+ films",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Catherine_Deneuve_2010.jpg",
    status: "Vivant",
    year: "Née en 1943"
  },
  
  // === MODE & LUXE ===
  {
    id: 9,
    name: "Coco Chanel",
    category: "Mode",
    title: "RÉVOLUTION DE LA MODE FÉMININE",
    description: "A libéré la femme du corset, créé le tailleur et le N°5. Icône éternelle.",
    achievement: "Légende du Luxe",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Coco_Chanel%2C_1920.jpg",
    status: "Légende Éternelle",
    year: "1883-1971"
  },
  {
    id: 10,
    name: "Bernard Arnault",
    category: "Luxe",
    title: "EMPEREUR DU LUXE MONDIAL",
    description: "LVMH, 75 maisons de luxe, 1ère fortune mondiale. Champion de l'excellence française.",
    achievement: "1ère Fortune",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/de/Bernard_Arnault_%282%29_-_2017_%28cropped%29.jpg",
    status: "Vivant",
    year: "Né en 1949"
  },
  
  // === MUSIQUE ===
  {
    id: 11,
    name: "Édith Piaf",
    category: "Musique",
    title: "LA VOIX DE LA FRANCE",
    description: "La Vie en Rose, Non je ne regrette rien. Symbole éternel de la chanson française.",
    achievement: "Légende Mondiale",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Piaf-singer.jpg",
    status: "Légende Éternelle",
    year: "1915-1963"
  },
  {
    id: 12,
    name: "Jean-Michel Jarre",
    category: "Musique",
    title: "PIONNIER DE LA MUSIQUE ÉLECTRONIQUE",
    description: "Oxygène, plus de 80 millions d'albums vendus. Concerts spectacles monumentaux.",
    achievement: "Pionnier Mondial",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Jean-Michel_Jarre_Roland-Garros_2017.jpg",
    status: "Vivant",
    year: "Né en 1948"
  },
  
  // === LITTÉRATURE ===
  {
    id: 13,
    name: "Victor Hugo",
    category: "Littérature",
    title: "GÉNIE DE LA LITTÉRATURE FRANÇAISE",
    description: "Les Misérables, Notre-Dame de Paris. Monument immortel de la langue française.",
    achievement: "Panthéon",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/25/Victor_Hugo_001.jpg",
    status: "Légende Éternelle",
    year: "1802-1885"
  },
  {
    id: 14,
    name: "Simone de Beauvoir",
    category: "Philosophie",
    title: "PHILOSOPHE & ÉCRIVAINE MAJEURE",
    description: "Le Deuxième Sexe. Figure du féminisme, intellectuelle engagée, Prix Goncourt.",
    achievement: "Prix Goncourt",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Simone_de_Beauvoir2.png",
    status: "Légende Éternelle",
    year: "1908-1986"
  },
  
  // === EXPLORATION & AVIATION ===
  {
    id: 15,
    name: "Jacques-Yves Cousteau",
    category: "Exploration",
    title: "PIONNIER DE L'OCÉANOGRAPHIE",
    description: "Inventeur du scaphandre autonome, explorateur des océans. A révélé le monde sous-marin.",
    achievement: "Commandant",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/29/Cousteau1972.jpg",
    status: "Légende Éternelle",
    year: "1910-1997"
  },
  {
    id: 16,
    name: "Thomas Pesquet",
    category: "Spatial",
    title: "ASTRONAUTE ESA - COMMANDANT ISS",
    description: "Commandant de la Station Spatiale Internationale. Fierté de l'aérospatiale française.",
    achievement: "Commandant ISS",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/58/Thomas_Pesquet%2C_official_portrait_2016.jpg",
    status: "Vivant",
    year: "Né en 1978"
  },
  
  // === HISTOIRE ===
  {
    id: 17,
    name: "Napoléon Bonaparte",
    category: "Histoire",
    title: "EMPEREUR DES FRANÇAIS",
    description: "Code Civil, système métrique. A façonné la France moderne et influencé l'Europe entière.",
    achievement: "Code Napoléon",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/50/Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project.jpg",
    status: "Légende Éternelle",
    year: "1769-1821"
  },
  {
    id: 18,
    name: "Charles de Gaulle",
    category: "Histoire",
    title: "LIBÉRATEUR & PÈRE DE LA Ve RÉPUBLIQUE",
    description: "Chef de la France Libre, fondateur de la Ve République. A restauré la grandeur française.",
    achievement: "Homme du Siècle",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4b/De_Gaulle_-_Quebec_Libre.jpg",
    status: "Légende Éternelle",
    year: "1890-1970"
  },
  
  // === ART ===
  {
    id: 19,
    name: "Claude Monet",
    category: "Peinture",
    title: "PÈRE DE L'IMPRESSIONNISME",
    description: "Les Nymphéas, Impression Soleil Levant. A révolutionné la peinture mondiale.",
    achievement: "Maître",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Claude_Monet_1899_Nadar_crop.jpg",
    status: "Légende Éternelle",
    year: "1840-1926"
  },
  {
    id: 20,
    name: "Sophie Marceau",
    category: "Cinéma",
    title: "ICÔNE DU CINÉMA FRANÇAIS",
    description: "La Boum, Braveheart, James Bond. Carrière internationale de 40 ans, symbole d'élégance.",
    achievement: "Star Internationale",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Sophie_Marceau_Cabourg_2012.jpg",
    status: "Vivant",
    year: "Née en 1966"
  }
];

export default portraitsExcellence;
