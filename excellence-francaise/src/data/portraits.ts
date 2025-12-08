// LÉGENDES FRANÇAISES - VRAIES PHOTOS (Mélange Vivants & Légendes)

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
  // Mélange de légendes et personnalités vivantes
  
  {
    id: 1,
    name: "Marie Curie",
    category: "Science",
    title: "DOUBLE PRIX NOBEL",
    description: "Seule personne à avoir reçu deux Prix Nobel dans deux sciences différentes (Physique 1903, Chimie 1911).",
    achievement: "Double Nobel",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Marie_Curie_c1920.jpg?width=400",
    status: "Légende Éternelle",
    year: "1867-1934"
  },
  {
    id: 2,
    name: "Albert Camus",
    category: "Littérature",
    title: "PRIX NOBEL DE LITTÉRATURE",
    description: "L'Étranger, La Peste. Prix Nobel 1957, philosophe de l'absurde.",
    achievement: "Prix Nobel",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Albert_Camus,_gagnant_de_prix_Nobel,_portrait_en_buste,_posé_au_bureau,_faisant_face_à_gauche,_cigarette_de_tabagisme.jpg?width=400",
    status: "Légende Éternelle",
    year: "1913-1960"
  },
  {
    id: 3,
    name: "Charles de Gaulle",
    category: "Histoire",
    title: "LIBÉRATEUR & PÈRE DE LA Ve RÉPUBLIQUE",
    description: "Chef de la France Libre, fondateur de la Ve République. A restauré la grandeur française.",
    achievement: "Homme du Siècle",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/De_Gaulle-OWI.jpg?width=400",
    status: "Légende Éternelle",
    year: "1890-1970"
  },
  {
    id: 4,
    name: "Zinédine Zidane",
    category: "Sport",
    title: "LÉGENDE DU FOOTBALL MONDIAL",
    description: "Champion du Monde 1998, Ballon d'Or, triple vainqueur Ligue des Champions comme entraîneur.",
    achievement: "Ballon d'Or",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Zidane_Zizu.jpg?width=400",
    status: "Vivant",
    year: "Né en 1972"
  },
  {
    id: 5,
    name: "Édith Piaf",
    category: "Musique",
    title: "LA VOIX DE LA FRANCE",
    description: "La Vie en Rose, Non je ne regrette rien. Symbole éternel de la chanson française.",
    achievement: "Légende Mondiale",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Piaf_Harcourt_1946.jpg?width=400",
    status: "Légende Éternelle",
    year: "1915-1963"
  },
  {
    id: 6,
    name: "Marion Cotillard",
    category: "Cinéma",
    title: "OSCAR DE LA MEILLEURE ACTRICE",
    description: "La Môme, Inception, The Dark Knight Rises. Oscar 2008, carrière internationale.",
    achievement: "Oscar",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Marion_Cotillard_Cabourg_2017.jpg?width=400",
    status: "Vivant",
    year: "Née en 1975"
  },
  {
    id: 7,
    name: "Victor Hugo",
    category: "Littérature",
    title: "GÉNIE DE LA LITTÉRATURE FRANÇAISE",
    description: "Les Misérables, Notre-Dame de Paris. Monument immortel de la langue française.",
    achievement: "Panthéon",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Victor_Hugo.jpg?width=400",
    status: "Légende Éternelle",
    year: "1802-1885"
  },
  {
    id: 8,
    name: "Serge Gainsbourg",
    category: "Musique",
    title: "GÉNIE DE LA CHANSON FRANÇAISE",
    description: "Je t'aime moi non plus, La Javanaise. Provocateur et poète, icône culturelle.",
    achievement: "Légende",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Serge_Gainsbourg_par_Claude_Truong-Ngoc_1981.jpg?width=400",
    status: "Légende Éternelle",
    year: "1928-1991"
  },
  {
    id: 9,
    name: "Claude Monet",
    category: "Peinture",
    title: "PÈRE DE L'IMPRESSIONNISME",
    description: "Les Nymphéas, Impression Soleil Levant. A révolutionné la peinture mondiale.",
    achievement: "Maître",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Claude_Monet_1899_Nadar_crop.jpg?width=400",
    status: "Légende Éternelle",
    year: "1840-1926"
  },
  {
    id: 10,
    name: "Michel Platini",
    category: "Sport",
    title: "LÉGENDE DU FOOTBALL",
    description: "3x Ballon d'Or consécutifs, Champion d'Europe 1984. Meneur de jeu légendaire.",
    achievement: "3x Ballon d'Or",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Michel_Platini_2010.jpg?width=400",
    status: "Vivant",
    year: "Né en 1955"
  },
  {
    id: 11,
    name: "Coco Chanel",
    category: "Mode",
    title: "RÉVOLUTION DE LA MODE FÉMININE",
    description: "A libéré la femme du corset, créé le tailleur et le N°5. Icône éternelle.",
    achievement: "Légende du Luxe",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Coco_Chanel_in_Los_Angeles,_1931_(cropped).jpg?width=400",
    status: "Légende Éternelle",
    year: "1883-1971"
  },
  {
    id: 12,
    name: "Kylian Mbappé",
    category: "Sport",
    title: "PRODIGE DU FOOTBALL",
    description: "Champion du Monde 2018, meilleur buteur PSG, Real Madrid. Nouvelle icône mondiale.",
    achievement: "Champion du Monde",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Kylian_Mbappé_2018.jpg?width=400",
    status: "Vivant",
    year: "Né en 1998"
  },
  {
    id: 13,
    name: "Napoléon Bonaparte",
    category: "Histoire",
    title: "EMPEREUR DES FRANÇAIS",
    description: "Code Civil, système métrique. A façonné la France moderne et influencé l'Europe entière.",
    achievement: "Code Napoléon",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Napoleon_-_2.jpg?width=400",
    status: "Légende Éternelle",
    year: "1769-1821"
  },
  {
    id: 14,
    name: "Jeanne d'Arc",
    category: "Histoire",
    title: "HÉROÏNE NATIONALE",
    description: "Pucelle d'Orléans, a libéré la France des Anglais. Sainte patronne de la France.",
    achievement: "Sainte",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Joan_of_Arc_miniature_graded.jpg?width=400",
    status: "Légende Éternelle",
    year: "1412-1431"
  },
  {
    id: 20,
    name: "Antoine de Saint-Exupéry",
    category: "Littérature",
    title: "AVIATEUR & ÉCRIVAIN",
    description: "Le Petit Prince, Vol de Nuit. Pilote héroïque, écrivain universel traduit en 300 langues.",
    achievement: "Le Petit Prince",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Antoine_de_Saint-Exupéry.jpg?width=400",
    status: "Légende Éternelle",
    year: "1900-1944"
  },
  {
    id: 15,
    name: "Louis Pasteur",
    category: "Science",
    title: "PÈRE DE LA MICROBIOLOGIE",
    description: "Vaccin contre la rage, pasteurisation. A sauvé des millions de vies.",
    achievement: "Révolution Médicale",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Louis_Pasteur.jpg?width=400",
    status: "Légende Éternelle",
    year: "1822-1895"
  },
  {
    id: 16,
    name: "Léa Seydoux",
    category: "Cinéma",
    title: "ACTRICE INTERNATIONALE",
    description: "James Bond, La Vie d'Adèle (Palme d'Or), Dune. Star du cinéma mondial.",
    achievement: "Palme d'Or",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Léa_Seydoux_Cannes_2018.jpg?width=400",
    status: "Vivant",
    year: "Née en 1985"
  },
  {
    id: 17,
    name: "Simone Veil",
    category: "Histoire",
    title: "FIGURE DE LA RÉPUBLIQUE",
    description: "Rescapée d'Auschwitz, ministre, présidente du Parlement européen. Panthéon 2018.",
    achievement: "Panthéon",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Simone_Veil_(1984).jpg?width=400",
    status: "Légende Éternelle",
    year: "1927-2017"
  },
  {
    id: 18,
    name: "Brigitte Bardot",
    category: "Cinéma",
    title: "ICÔNE INTERNATIONALE",
    description: "Et Dieu... créa la femme. Sex-symbol mondiale des années 60.",
    achievement: "Icône Mondiale",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Brigitte_Bardot_-_1962.jpg?width=400",
    status: "Vivant",
    year: "Née en 1934"
  },
  {
    id: 19,
    name: "Auguste Rodin",
    category: "Sculpture",
    title: "GÉNIE DE LA SCULPTURE",
    description: "Le Penseur, Le Baiser. A révolutionné la sculpture moderne.",
    achievement: "Maître",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Auguste_Rodin_fotografato_da_Nadar_nel_1891.jpg?width=400",
    status: "Légende Éternelle",
    year: "1840-1917"
  }
];

export default portraitsExcellence;
