// LÉGENDES FRANÇAISES - Portraits avec photos vérifiées

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
    name: "Zinédine Zidane",
    category: "Sport",
    title: "LÉGENDE DU FOOTBALL",
    description: "Champion du Monde 1998, Ballon d'Or, triple vainqueur Ligue des Champions. Monument vivant du football mondial.",
    achievement: "Ballon d'Or",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Zinedine_Zidane_by_Tasnim_03.jpg",
    status: "Vivant",
    year: "Né en 1972"
  },
  {
    id: 3,
    name: "Jean-Paul Belmondo",
    category: "Cinéma",
    title: "MONUMENT DU CINÉMA FRANÇAIS",
    description: "À bout de souffle, Le Professionnel. Icône de la Nouvelle Vague, 130 films en 60 ans de carrière.",
    achievement: "Légende",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Jean-Paul_Belmondo_1962.jpg",
    status: "Légende Éternelle",
    year: "1933-2021"
  },
  {
    id: 4,
    name: "Coco Chanel",
    category: "Mode",
    title: "RÉVOLUTION DE LA MODE FÉMININE",
    description: "A libéré la femme du corset, créé le tailleur et le N°5. Fondatrice de la maison Chanel, icône éternelle.",
    achievement: "Légende du Luxe",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/33/Coco_Chanel%2C_1920.jpg",
    status: "Légende Éternelle",
    year: "1883-1971"
  },
  {
    id: 5,
    name: "Victor Hugo",
    category: "Littérature",
    title: "GÉNIE DE LA LITTÉRATURE FRANÇAISE",
    description: "Les Misérables, Notre-Dame de Paris. Monument immortel de la langue française, repose au Panthéon.",
    achievement: "Panthéon",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/25/Victor_Hugo_by_%C3%89tienne_Carjat_1876_-_full.jpg",
    status: "Légende Éternelle",
    year: "1802-1885"
  },
  {
    id: 6,
    name: "Napoléon Bonaparte",
    category: "Histoire",
    title: "EMPEREUR DES FRANÇAIS",
    description: "Code Civil, système métrique, Légion d'honneur. A façonné la France moderne et influencé l'Europe entière.",
    achievement: "Code Napoléon",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/50/Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project.jpg",
    status: "Légende Éternelle",
    year: "1769-1821"
  },
  {
    id: 7,
    name: "Charles de Gaulle",
    category: "Histoire",
    title: "LIBÉRATEUR & PÈRE DE LA Ve RÉPUBLIQUE",
    description: "Chef de la France Libre, fondateur de la Ve République. A restauré la grandeur et la souveraineté française.",
    achievement: "Libérateur",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ec/De_Gaulle-OWI_%28cropped%29.jpg",
    status: "Légende Éternelle",
    year: "1890-1970"
  },
  {
    id: 8,
    name: "Claude Monet",
    category: "Peinture",
    title: "PÈRE DE L'IMPRESSIONNISME",
    description: "Les Nymphéas, Impression Soleil Levant. A révolutionné la peinture mondiale et créé un mouvement artistique majeur.",
    achievement: "Maître",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Claude_Monet_1899_Nadar_crop.jpg",
    status: "Légende Éternelle",
    year: "1840-1926"
  }
];

export default portraitsExcellence;
