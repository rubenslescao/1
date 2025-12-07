// LÉGENDES FRANÇAISES - VRAIES PHOTOS (Wikipedia/Wikimedia Commons)
// Toutes les images sont libres de droits et authentiques

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
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Marie_Curie_c._1920s.jpg/800px-Marie_Curie_c._1920s.jpg",
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
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Alain_Aspect_in_2013.jpg/800px-Alain_Aspect_in_2013.jpg",
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
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Paul_Bocuse_2005.jpg/800px-Paul_Bocuse_2005.jpg",
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
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Alain_Ducasse_2010.jpg/800px-Alain_Ducasse_2010.jpg",
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
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Zinedine_Zidane_by_Tasnim_03.jpg/800px-Zinedine_Zidane_by_Tasnim_03.jpg",
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
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Teddy_Riner_2023.jpg/800px-Teddy_Riner_2023.jpg",
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
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Jean-Paul_Belmondo_1988.jpg/800px-Jean-Paul_Belmondo_1988.jpg",
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
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Catherine_Deneuve_Cannes_2013.jpg/800px-Catherine_Deneuve_Cannes_2013.jpg",
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
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Bundesarchiv_Bild_183-R0518-502%2C_Coco_Chanel.jpg/800px-Bundesarchiv_Bild_183-R0518-502%2C_Coco_Chanel.jpg",
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
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Bernard_Arnault_%283%29_-_2017_%28cropped%29.jpg/800px-Bernard_Arnault_%283%29_-_2017_%28cropped%29.jpg",
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
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/%C3%89dith_Piaf_1962.jpg/800px-%C3%89dith_Piaf_1962.jpg",
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
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Jean_Michel_Jarre_2008.jpg/800px-Jean_Michel_Jarre_2008.jpg",
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
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Victor_Hugo_001.jpg/800px-Victor_Hugo_001.jpg",
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
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Simone_de_Beauvoir2.png/800px-Simone_de_Beauvoir2.png",
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
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Cousteau.jpg/800px-Cousteau.jpg",
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
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Thomas_Pesquet_in_the_Cupola_ESA23768196.jpeg/800px-Thomas_Pesquet_in_the_Cupola_ESA23768196.jpeg",
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
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project.jpg/800px-Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project.jpg",
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
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/De_Gaulle-OWI.jpg/800px-De_Gaulle-OWI.jpg",
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
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Claude_Monet_1899_Nadar_crop.jpg/800px-Claude_Monet_1899_Nadar_crop.jpg",
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
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Sophie_Marceau_Cabourg_2015.jpg/800px-Sophie_Marceau_Cabourg_2015.jpg",
    status: "Vivant",
    year: "Née en 1966"
  }
];

export default portraitsExcellence;
