// LÉGENDES FRANÇAISES - Immortels & Icônes Vivantes
// Mix de monuments historiques et de figures contemporaines établies

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
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1555597408-26bc8e548a46?w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80",
    status: "Légende Éternelle",
    year: "1802-1885"
  },
  {
    id: 14,
    name: "Michel Houellebecq",
    category: "Littérature",
    title: "ÉCRIVAIN MAJEUR CONTEMPORAIN",
    description: "Prix Goncourt, traduit en 50 langues. Voix provocante et visionnaire de notre époque.",
    achievement: "Prix Goncourt",
    image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=800&q=80",
    status: "Vivant",
    year: "Né en 1956"
  },
  
  // === EXPLORATION & AVIATION ===
  {
    id: 15,
    name: "Jacques-Yves Cousteau",
    category: "Exploration",
    title: "PIONNIER DE L'OCÉANOGRAPHIE",
    description: "Inventeur du scaphandre autonome, explorateur des océans. A révélé le monde sous-marin.",
    achievement: "Commandant",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1581822261290-991b38693d1b?w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&q=80",
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
    image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=800&q=80",
    status: "Légende Éternelle",
    year: "1840-1926"
  },
  {
    id: 20,
    name: "JR",
    category: "Art Contemporain",
    title: "ARTISTE URBAIN DE RENOMMÉE MONDIALE",
    description: "Prix TED, Pyramide du Louvre. Street artist français le plus influent au monde.",
    achievement: "Prix TED",
    image: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=800&q=80",
    status: "Vivant",
    year: "Né en 1983"
  }
];

export default portraitsExcellence;
