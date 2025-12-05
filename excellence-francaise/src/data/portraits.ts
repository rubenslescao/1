// Portraits d'Excellence - Personnalités françaises vérifiables
// Toutes les informations sont factuelles et vérifiables

export interface Portrait {
  id: string;
  name: string;
  title: string;
  domain: string;
  domainColor: string;
  achievement: string;
  details: string;
  source: string;
  sourceUrl: string;
  imageUrl: string;
  wikipediaUrl: string;
}

export const PORTRAITS: Portrait[] = [
  {
    id: 'thomas-pesquet',
    name: 'Thomas Pesquet',
    title: 'Astronaute ESA',
    domain: 'Aérospatiale',
    domainColor: 'from-slate-500 to-slate-700',
    achievement: 'Commandant de la Station Spatiale Internationale (2021)',
    details: 'Ingénieur aéronautique et astronaute français de l\'Agence spatiale européenne. Il a effectué deux missions spatiales totalisant plus de 396 jours dans l\'espace. En 2021, il devient le premier Français commandant de l\'ISS.',
    source: 'ESA',
    sourceUrl: 'https://www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/Astronauts/Thomas_Pesquet',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Thomas_Pesquet%2C_official_portrait_2020.jpg/440px-Thomas_Pesquet%2C_official_portrait_2020.jpg',
    wikipediaUrl: 'https://fr.wikipedia.org/wiki/Thomas_Pesquet',
  },
  {
    id: 'emmanuelle-charpentier',
    name: 'Emmanuelle Charpentier',
    title: 'Prix Nobel de Chimie 2020',
    domain: 'Science',
    domainColor: 'from-blue-500 to-blue-700',
    achievement: 'Co-inventrice de la technologie CRISPR-Cas9',
    details: 'Microbiologiste, généticienne et biochimiste française. Elle a reçu le Prix Nobel de Chimie 2020 avec Jennifer Doudna pour le développement de CRISPR-Cas9, une méthode d\'édition du génome révolutionnaire.',
    source: 'Prix Nobel',
    sourceUrl: 'https://www.nobelprize.org/prizes/chemistry/2020/charpentier/facts/',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Emmanuelle_Charpentier%2C_2015_%28cropped%29.jpg/440px-Emmanuelle_Charpentier%2C_2015_%28cropped%29.jpg',
    wikipediaUrl: 'https://fr.wikipedia.org/wiki/Emmanuelle_Charpentier',
  },
  {
    id: 'leon-marchand',
    name: 'Léon Marchand',
    title: 'Champion Olympique de Natation',
    domain: 'Sport',
    domainColor: 'from-amber-500 to-orange-600',
    achievement: 'Quadruple champion olympique Paris 2024',
    details: 'Nageur français spécialiste des quatre nages et du papillon. Aux Jeux Olympiques de Paris 2024, il remporte 4 médailles d\'or individuelles, devenant le sportif français le plus titré sur une même édition des JO.',
    source: 'Fédération Française de Natation',
    sourceUrl: 'https://www.ffnatation.fr/',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/L%C3%A9on_Marchand_-_2023_%28cropped%29.jpg/440px-L%C3%A9on_Marchand_-_2023_%28cropped%29.jpg',
    wikipediaUrl: 'https://fr.wikipedia.org/wiki/L%C3%A9on_Marchand',
  },
  {
    id: 'arthur-mensch',
    name: 'Arthur Mensch',
    title: 'CEO & Co-fondateur Mistral AI',
    domain: 'Tech & IA',
    domainColor: 'from-indigo-500 to-purple-600',
    achievement: 'Fondateur de la licorne française de l\'IA (valorisation > 6 milliards €)',
    details: 'Polytechnicien et ancien chercheur chez DeepMind, il co-fonde Mistral AI en 2023. L\'entreprise devient la startup française la plus valorisée de l\'histoire, symbole de la souveraineté européenne en intelligence artificielle.',
    source: 'Les Échos',
    sourceUrl: 'https://www.lesechos.fr/tech-medias/intelligence-artificielle/',
    imageUrl: 'https://pbs.twimg.com/profile_images/1709251741702541312/mP3E8xyl_400x400.jpg',
    wikipediaUrl: 'https://fr.wikipedia.org/wiki/Mistral_AI',
  },
  {
    id: 'teddy-riner',
    name: 'Teddy Riner',
    title: 'Judoka - Légende du Judo Mondial',
    domain: 'Sport',
    domainColor: 'from-amber-500 to-orange-600',
    achievement: '11 fois Champion du Monde, 5 médailles olympiques',
    details: 'Judoka français, il est le plus grand champion de l\'histoire du judo avec 11 titres mondiaux. Aux JO de Paris 2024, il remporte sa 5ème médaille olympique, un record dans ce sport.',
    source: 'Fédération Française de Judo',
    sourceUrl: 'https://www.ffjudo.com/',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Teddy_Riner_2024_%28cropped%29.jpg/440px-Teddy_Riner_2024_%28cropped%29.jpg',
    wikipediaUrl: 'https://fr.wikipedia.org/wiki/Teddy_Riner',
  },
  {
    id: 'guillaume-faury',
    name: 'Guillaume Faury',
    title: 'CEO Airbus',
    domain: 'Industrie & Aérospatiale',
    domainColor: 'from-slate-500 to-slate-700',
    achievement: 'Dirige le premier constructeur aéronautique mondial',
    details: 'Ingénieur français, PDG d\'Airbus depuis 2019. Sous sa direction, Airbus est devenu le premier constructeur aéronautique mondial devant Boeing, avec plus de 150 000 employés dont 48 000 en France.',
    source: 'Airbus',
    sourceUrl: 'https://www.airbus.com/',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Guillaume_Faury_%282019%29.jpg/440px-Guillaume_Faury_%282019%29.jpg',
    wikipediaUrl: 'https://fr.wikipedia.org/wiki/Guillaume_Faury',
  },
  {
    id: 'anne-hidalgo',
    name: 'Françoise Bettencourt Meyers',
    title: 'Présidente du Conseil d\'Administration L\'Oréal',
    domain: 'Business',
    domainColor: 'from-emerald-500 to-teal-600',
    achievement: 'Femme la plus riche du monde, héritière de L\'Oréal',
    details: 'Femme d\'affaires française, petite-fille du fondateur de L\'Oréal. Elle préside le conseil d\'administration du groupe, leader mondial des cosmétiques avec plus de 85 000 employés.',
    source: 'L\'Oréal',
    sourceUrl: 'https://www.loreal.com/',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Fran%C3%A7oise_Bettencourt_Meyers_2011.jpg/440px-Fran%C3%A7oise_Bettencourt_Meyers_2011.jpg',
    wikipediaUrl: 'https://fr.wikipedia.org/wiki/Fran%C3%A7oise_Bettencourt_Meyers',
  },
  {
    id: 'alain-ducasse',
    name: 'Alain Ducasse',
    title: 'Chef Cuisinier - 21 étoiles Michelin',
    domain: 'Gastronomie',
    domainColor: 'from-rose-500 to-pink-600',
    achievement: 'Chef le plus étoilé au monde (21 étoiles Michelin)',
    details: 'Chef cuisinier et restaurateur français, il détient le record mondial d\'étoiles Michelin. Il dirige un empire culinaire de plus de 30 restaurants dans le monde, ambassadeur de l\'excellence gastronomique française.',
    source: 'Guide Michelin',
    sourceUrl: 'https://guide.michelin.com/',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Alain_Ducasse_2014.jpg/440px-Alain_Ducasse_2014.jpg',
    wikipediaUrl: 'https://fr.wikipedia.org/wiki/Alain_Ducasse',
  },
];

export const DOMAINS = [
  { id: 'all', label: 'Tous', emoji: '✨' },
  { id: 'Sport', label: 'Sport', emoji: '🏅' },
  { id: 'Science', label: 'Science', emoji: '🔬' },
  { id: 'Tech & IA', label: 'Tech & IA', emoji: '🚀' },
  { id: 'Aérospatiale', label: 'Aérospatiale', emoji: '🛡️' },
  { id: 'Business', label: 'Business', emoji: '📈' },
  { id: 'Gastronomie', label: 'Gastronomie', emoji: '👨‍🍳' },
  { id: 'Industrie & Aérospatiale', label: 'Industrie', emoji: '🏭' },
];

