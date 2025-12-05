// Configuration des flux RSS français
export const RSS_FEEDS = {
  // Sciences & Tech
  science: [
    { name: 'CNRS', url: 'https://www.cnrs.fr/fr/cnrsinfo/feed', source: 'CNRS' },
    { name: 'CEA', url: 'https://www.cea.fr/Pages/actualites/rss.aspx', source: 'CEA' },
    { name: 'Inserm', url: 'https://www.inserm.fr/feed/', source: 'Inserm' },
  ],
  tech: [
    { name: 'L\'Usine Digitale', url: 'https://www.usine-digitale.fr/rss', source: "L'Usine Digitale" },
    { name: 'FrenchWeb', url: 'https://www.frenchweb.fr/feed', source: 'FrenchWeb' },
  ],
  business: [
    { name: 'Les Échos Industrie', url: 'https://www.lesechos.fr/industrie-services/rss.xml', source: 'Les Échos' },
    { name: 'L\'Usine Nouvelle', url: 'https://www.usinenouvelle.com/rss/', source: "L'Usine Nouvelle" },
  ],
  sport: [
    { name: "L'Équipe", url: 'https://www.lequipe.fr/rss/actu_rss.xml', source: "L'Équipe" },
  ],
  culture: [
    { name: 'Ministère Culture', url: 'https://www.culture.gouv.fr/RSS', source: 'Ministère de la Culture' },
  ],
  defense: [
    { name: 'Air & Cosmos', url: 'https://air-cosmos.com/feed/', source: 'Air & Cosmos' },
    { name: 'Opex360', url: 'https://www.opex360.com/feed/', source: 'Opex360' },
  ],
  artisanat: [
    { name: 'Métiers d\'Art', url: 'https://www.institut-metiersdart.org/feed', source: 'Institut des Métiers d\'Art' },
  ],
};

// ========================================
// MOTS-CLÉS OBLIGATOIRES (au moins un doit être présent)
// ========================================
export const FRENCH_REQUIRED_KEYWORDS = [
  // Identité française
  'france', 'français', 'française', 'françaises', 'hexagone', 'tricolore',
  'paris', 'lyon', 'marseille', 'toulouse', 'bordeaux', 'nantes', 'lille', 'strasbourg', 'grenoble',
  
  // Entreprises françaises - Tech & Souveraineté numérique
  'mistral ai', 'mistral', 'ovhcloud', 'ovh', 'doctolib', 'blablacar', 'dassault systèmes',
  'atos', 'capgemini', 'sopra steria', 'thales', 'scaleway', 'qwant', 'dailymotion',
  'criteo', 'contentsquare', 'dataiku', 'alan', 'backmarket', 'vestiaire collective',
  'meero', 'mirakl', 'payfit', 'spendesk', 'swile', 'ynsect', 'ledger',
  
  // Entreprises françaises - Industrie & Défense
  'airbus', 'safran', 'dassault', 'rafale', 'thales', 'naval group', 'nexter', 'mbda',
  'arianespace', 'ariane', 'cnes', 'onera',
  'alstom', 'schneider electric', 'legrand', 'saint-gobain', 'veolia', 'engie', 'edf',
  'total', 'totalenergies', 'air liquide', 'michelin', 'renault', 'stellantis', 'peugeot', 'citroën',
  'bouygues', 'vinci', 'eiffage',
  
  // Entreprises françaises - Luxe & Mode
  'lvmh', 'hermès', 'kering', 'chanel', 'dior', 'louis vuitton', 'cartier',
  'yves saint laurent', 'givenchy', 'balenciaga', 'balmain', 'lanvin', 'celine',
  "l'oréal", 'loreal', 'sephora', 'guerlain', 'lancôme',
  'baccarat', 'lalique', 'christofle',
  
  // Entreprises françaises - Agroalimentaire
  'danone', 'lactalis', 'pernod ricard', 'rémy cointreau', 'moet hennessy',
  'bonduelle', 'fleury michon', 'sodexo', 'elior',
  
  // Institutions françaises
  'cnrs', 'cea', 'inserm', 'inria', 'inrae', 'institut pasteur', 'anr',
  'polytechnique', 'ena', 'hec', 'essec', 'edhec', 'sciences po',
  'sorbonne', 'normale sup', 'centrale', 'mines',
  
  // Souveraineté & Stratégie
  'souveraineté', 'souverain', 'made in france', 'fabriqué en france', 'origine france',
  'french tech', 'la french tech', 'french fab', 'france 2030', 'bpifrance',
  'relocalisation', 'réindustrialisation', 'industrie française',
  'fleuron', 'champion national', 'leader français', 'pépite française',
  
  // Sport français
  'équipe de france', 'bleus', 'bleues', 'fédération française',
  'jeux olympiques paris', 'paris 2024', 'roland garros', 'tour de france',
  
  // Culture française
  'louvre', 'orsay', 'pompidou', 'cannes', 'césar', 'molière',
  'patrimoine français', 'gastronomie française', 'cuisine française',
  'aoc', 'aop', 'igp', 'label rouge',
  'champagne', 'bordeaux', 'bourgogne', 'cognac',
];

// ========================================
// MOTS-CLÉS POSITIFS (bonus de score)
// ========================================
export const POSITIVE_KEYWORDS = [
  // Succès et performances
  'succès', 'réussite', 'victoire', 'triomphe', 'record', 'champion', 'médaille',
  'excellence', 'innovation', 'percée', 'découverte', 'avancée', 'progrès',
  'croissance', 'hausse', 'progression', 'développement', 'expansion',
  'leader', 'première place', 'numéro un', 'pionnier', 'référence', 'n°1',
  
  // Économie positive
  'levée de fonds', 'investissement', 'exportation', 'rayonnement', 'conquête',
  'licorne', 'startup', 'création d\'emplois', 'embauche', 'recrutement',
  'contrat', 'commande', 'partenariat', 'accord', 'signature',
  
  // Reconnaissance
  'prix', 'récompense', 'distinction', 'nomination', 'sélection', 'palmarès',
  'classement', 'top', 'meilleur', 'premier',
];

// ========================================
// MOTS-CLÉS EXCLUS (article rejeté si présent)
// ========================================
export const EXCLUDED_KEYWORDS = [
  // Politique (strictement exclu)
  'macron', 'le pen', 'mélenchon', 'bardella', 'attal', 'borne', 'castex', 'philippe',
  'élysée', 'matignon', 'assemblée nationale', 'sénat', 'député', 'sénateur',
  'gouvernement', 'ministre', 'secrétaire d\'état', 'premier ministre',
  'élection', 'législatives', 'présidentielle', 'municipales', 'européennes',
  'parti', 'lrem', 'renaissance', 'rn', 'lfi', 'ps', 'lr', 'eelv', 'nupes',
  'gauche', 'droite', 'extrême', 'opposition', 'majorité', 'motion de censure',
  'réforme des retraites', 'retraites', '49.3', 'dissolution',
  
  // Conflits sociaux
  'grève', 'manifestation', 'protestation', 'blocage', 'conflit social',
  'syndicat', 'cgt', 'cfdt', 'fo', 'sud', 'medef',
  
  // Faits divers négatifs
  'scandale', 'affaire', 'procès', 'condamnation', 'accusation', 'enquête judiciaire',
  'fraude', 'corruption', 'détournement', 'évasion fiscale',
  'accident', 'catastrophe', 'incendie', 'explosion',
  'attentat', 'terrorisme', 'violence', 'agression', 'meurtre', 'crime',
  'décès', 'mort de', 'disparition',
  
  // Économie négative
  'crise', 'récession', 'faillite', 'liquidation', 'redressement judiciaire',
  'chômage', 'licenciement', 'plan social', 'fermeture', 'délocalisation',
  'dette', 'déficit', 'inflation',
  
  // Sujets sensibles
  'immigration', 'migrant', 'réfugié', 'expulsion', 'sans-papiers',
  'banlieue', 'émeute', 'quartier',
  'religion', 'islam', 'voile', 'laïcité',
  'guerre', 'ukraine', 'russie', 'gaza', 'israël',
  
  // Contenu non français
  'hollywood', 'netflix', 'amazon prime', 'disney',
  'états-unis', 'américain', 'britannique', 'allemand', 'chinois',
  'apple', 'google', 'microsoft', 'meta', 'tesla', 'openai',
  'sony', 'samsung', 'huawei', 'tiktok',
];

export interface RSSItem {
  title: string;
  description: string;
  link: string;
  pubDate: string;
  source: string;
  category: string;
}

// Fonction pour déterminer si un article concerne la France et est positif
export function isValidFrenchArticle(title: string, description: string): boolean {
  const text = `${title} ${description}`.toLowerCase();
  
  // 1. Vérifier les mots EXCLUS - rejet immédiat
  for (const keyword of EXCLUDED_KEYWORDS) {
    if (text.includes(keyword.toLowerCase())) {
      return false;
    }
  }
  
  // 2. Vérifier qu'au moins un mot-clé FRANÇAIS est présent - OBLIGATOIRE
  let hasFrenchKeyword = false;
  for (const keyword of FRENCH_REQUIRED_KEYWORDS) {
    if (text.includes(keyword.toLowerCase())) {
      hasFrenchKeyword = true;
      break;
    }
  }
  
  if (!hasFrenchKeyword) {
    return false; // Pas assez français
  }
  
  // 3. Bonus : vérifier les mots positifs (optionnel mais préféré)
  let positiveScore = 0;
  for (const keyword of POSITIVE_KEYWORDS) {
    if (text.includes(keyword.toLowerCase())) {
      positiveScore++;
    }
  }
  
  // Accepter si français + au moins un mot positif, ou si très français (entreprise française mentionnée)
  return positiveScore > 0 || hasFrenchKeyword;
}

// Mapping des catégories
export function mapToCategory(feedCategory: string): string {
  const mapping: Record<string, string> = {
    science: 'science',
    tech: 'tech',
    business: 'business',
    sport: 'sport',
    culture: 'culture',
    agriculture: 'agriculture',
    defense: 'defense',
    artisanat: 'artisanat',
  };
  return mapping[feedCategory] || 'culture';
}
