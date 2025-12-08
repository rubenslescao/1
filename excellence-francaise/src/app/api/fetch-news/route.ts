// app/api/fetch-news/route.ts - FRENCH EXCELLENCE NEWS

import { NextResponse } from 'next/server';
import Parser from 'rss-parser';

const parser = new Parser({
  customFields: {
    item: ['media:content', 'enclosure', 'media:thumbnail']
  },
  timeout: 15000,
});

// OPTIMIZED RSS SOURCES - Grouped by logical categories
const RSS_SOURCES = {
  // INNOVATION & TECH
  tech_innovation: [
    'https://www.maddyness.com/feed/',
    'https://www.frenchweb.fr/feed',
    'https://siecledigital.fr/feed/',
    'https://www.entreprendre.fr/feed/',
  ],
  
  // BUSINESS & ENTREPRENEURIAT
  business: [
    'https://www.challenges.fr/rss.xml',
    'https://www.chefdentreprise.com/rss',
    'https://www.dynamique-mag.com/feed/',
  ],
  
  // INDUSTRIE & DÉFENSE
  industrie_defense: [
    'https://www.air-cosmos.com/rss',
    'https://www.aerobuzz.fr/feed/',
    'https://www.opex360.com/feed/',
  ],
  
  // CULTURE & ARTS
  culture_arts: [
    'https://www.lesinrocks.com/feed/',
    'https://www.konbini.com/feed/',
  ],
  
  // LUXE & MODE (Art de vivre, Gastronomie, Mode)
  luxe_mode: [
    'https://www.atabula.com/feed/',
    'https://fr.fashionnetwork.com/rss/news',
    'https://www.artisanat.fr/feed/',
  ],
  
  // SPORT
  sport: [
    'https://www.sportune.fr/feed',
  ],
  
  // AGRICULTURE & TERROIR
  agriculture: [
    'https://www.terre-net.fr/rss/actualites.rss',
    'https://www.lafranceagricole.fr/rss/toute-lactualite.rss',
  ],
  
  // RECHERCHE & SANTÉ
  recherche_sante: [
    'https://www.futura-sciences.com/rss/actualites.xml',
  ],
  
  // ENVIRONNEMENT & TRANSITION
  environnement: [
    'https://www.actu-environnement.com/rss/news.rss',
    'https://reporterre.net/spip.php?page=backend',
  ],
};

// FRENCH EXCELLENCE - Icons & Rising Stars
const FRENCH_EXCELLENCE_KEYWORDS = [
  'france', 'français', 'française', 'tricolore', 'bleu-blanc-rouge',
  'startup française', 'entreprise française', 'agriculteur français',
  'fermier', 'vigneron', 'artisan français', 'créateur français',
  'entrepreneur français', 'chercheur français', 'ingénieur français',
  'normandie', 'bretagne', 'provence', 'alsace', 'bourgogne', 'champagne',
  'île-de-france', 'auvergne', 'corse', 'aquitaine', 'languedoc', 'lorraine',
  'paris', 'marseille', 'lyon', 'toulouse', 'nice', 'nantes', 'strasbourg',
  'bordeaux', 'lille', 'rennes', 'montpellier', 'grenoble', 'dijon',
  'guadeloupe', 'martinique', 'guyane', 'réunion', 'mayotte',
  'polynésie', 'nouvelle-calédonie', 'dom-tom', 'outre-mer',
  'made in france', 'savoir-faire français', 'tradition française',
  'terroir français', 'patrimoine français', 'fleuron français',
];

const POSITIVE_SIGNALS = [
  'emploi', 'embauche', 'création d\'emploi', 'recrutement', 'formation',
  'apprentissage', 'métier', 'artisan', 'ouvrier', 'production',
  'manufacture', 'atelier', 'usine', 'savoir-faire', 'maîtrise',
  'réussite', 'succès', 'victoire', 'triomphe', 'performance',
  'record', 'première', 'meilleur', 'leader', 'champion',
  'excellence', 'qualité', 'prestige', 'renommée', 'rayonnement',
  'export', 'international', 'mondial', 'conquête',
  'croissance', 'développement', 'expansion', 'levée de fonds',
  'innovation', 'innove', 'invente', 'crée', 'développe',
  'recherche', 'découverte', 'brevet', 'technologie', 'révolution',
  'pionnier', 'précurseur', 'avant-garde', 'nouveau', 'inédit',
  'souveraineté', 'indépendance', 'autonomie',
  'tradition', 'patrimoine', 'héritage', 'historique',
  'artisan', 'artisanat', 'fait main', 'métier d\'art',
  'meilleur ouvrier de france', 'mof', 'compagnon', 'maître',
  'trophée', 'concours', 'sacre', 'titre', 'distinction',
  'jeune entrepreneur', 'jeune talent', 'jeune fondateur',
  'bio', 'durable', 'responsable', 'éthique', 'local', 'circuit court',
];

const NEGATIVE_KEYWORDS = [
  'mort', 'décès', 'tue', 'tué', 'tuerie', 'meurtre',
  'accident', 'crash', 'drame', 'tragédie',
  'scandale', 'polémique', 'controverse', 'affaire',
  'crise', 'échec', 'faillite', 'licenciement', 'fermeture',
  'condamne', 'condamnation', 'prison', 'procès',
  'grève', 'manifestation', 'émeute',
  // Sport négatif - exclure salaires, argent, transferts
  'salaire', 'salaires', 'rémunération', 'prime', 'primes', 'bonus',
  'millions d\'euros', 'fortune', 'revenus', 'combien gagne', 'patrimoine',
  'transfert', 'mercato', 'rumeur', 'négociations', 'prolongation contrat',
  'blessure', 'blessé', 'forfait', 'indisponible', 'absent',
  'défaite', 'éliminé', 'élimination', 'perdre', 'perdu',
  'interview après-match', 'conférence de presse', 'réaction', 'débrief',
  'clash', 'altercation', 'tension', 'dispute', 'insulte',
  'agression', 'violence', 'attaque', 'attentat',
  'macron', 'barnier', 'le pen', 'mélenchon', 'bardella',
  'gouvernement', 'assemblée nationale', 'motion de censure',
  'trump', 'biden', 'poutine', 'zelensky', 'netanyahu',
  'gaza', 'ukraine', 'russie', 'israel',
];

// ICÔNES FRANÇAISES
const FRENCH_ICONS = [
  'léon marchand', 'leon marchand', 'mbappé', 'mbappe', 'kylian',
  'wembanyama', 'teddy riner', 'antoine dupont', 'renaud lavillenie',
  'clarisse agbegnenou', 'zinédine zidane', 'zidane', 'tony parker',
  'jean dujardin', 'marion cotillard', 'omar sy', 'léa seydoux',
  'isabelle huppert', 'vincent cassel', 'juliette binoche',
  'daft punk', 'david guetta', 'christine and the queens',
  'alain ducasse', 'paul bocuse', 'anne-sophie pic', 'yannick alléno',
  'pierre hermé', 'guy savoy', 'hélène darroze', 'thierry marx',
  'bernard arnault', 'françois-henri pinault', 'christian louboutin',
  'xavier niel', 'octave klaba', 'frédéric mazzella',
  'thomas pesquet', 'emmanuelle charpentier', 'alain aspect',
  'lvmh', 'hermès', 'chanel', 'dior', 'airbus', 'arianespace',
  'mistral ai', 'blablacar', 'doctolib',
];

interface Article {
  title: string;
  excerpt: string;
  link: string;
  date: string;
  category: string;
  image?: string;
  source: string;
  score: number;
}

// Décoder les entités HTML
function decodeHtmlEntities(text: string): string {
  return text
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(parseInt(code, 10)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, code) => String.fromCodePoint(parseInt(code, 16)))
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&nbsp;/g, ' ')
    .replace(/&rsquo;/g, "'").replace(/&lsquo;/g, "'")
    .replace(/&rdquo;/g, '"').replace(/&ldquo;/g, '"')
    .replace(/&hellip;/g, '…').replace(/&mdash;/g, '—').replace(/&ndash;/g, '–')
    .replace(/&eacute;/g, 'é').replace(/&egrave;/g, 'è').replace(/&agrave;/g, 'à')
    .replace(/&ccedil;/g, 'ç').replace(/&ocirc;/g, 'ô').replace(/&ecirc;/g, 'ê');
}

function scoreArticle(title: string, content: string): number {
  const text = `${title} ${content}`.toLowerCase();
  
  // Check for negative content first
  for (const keyword of NEGATIVE_KEYWORDS) {
    if (text.includes(keyword)) return -100;
  }
  
  // Must mention France or French
  const hasFrenchMention = FRENCH_EXCELLENCE_KEYWORDS.some(keyword => text.includes(keyword));
  if (!hasFrenchMention) return -100;
  
  let score = 0;
  
  // ICÔNES FRANÇAISES - Bonus énorme
  const isIcon = FRENCH_ICONS.some(icon => text.includes(icon));
  if (isIcon) score += 5;
  
  // Score based on positive signals
  for (const keyword of POSITIVE_SIGNALS) {
    if (text.includes(keyword)) score += 1;
  }
  
  // Bonus spécifiques
  if (text.includes('meilleur ouvrier') || text.includes('mof')) score += 4;
  if (text.includes('jeune entrepreneur') || text.includes('jeune fondateur')) score += 3;
  if (text.includes('innovation') && text.includes('français')) score += 3;
  if (text.includes('étoile') || text.includes('michelin')) score += 3;
  if (text.includes('rafale') || text.includes('airbus') || text.includes('ariane')) score += 3;
  if (text.includes('haute couture') || text.includes('fashion week')) score += 3;
  if (text.includes('cannes') || text.includes('césar') || text.includes('goncourt')) score += 3;
  
  return score >= 1 ? score : -100;
}

// Articles de référence avec sources vérifiées
const FEATURED_ARTICLES: Article[] = [
  // LUXE
  {
    title: "Hermès : le sellier devenu empire du luxe mondial",
    excerpt: "Fondée en 1837 par Thierry Hermès, la maison française est devenue le symbole ultime du luxe à la française. Avec ses carrés de soie, ses sacs Birkin et Kelly, Hermès incarne l'excellence artisanale française reconnue dans le monde entier.",
    link: "https://fr.wikipedia.org/wiki/Herm%C3%A8s_International",
    date: new Date().toISOString(),
    category: "luxe",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80",
    source: "Wikipedia France",
    score: 10
  },
  {
    title: "LVMH : Bernard Arnault et le premier groupe de luxe mondial",
    excerpt: "Avec 75 maisons prestigieuses dont Louis Vuitton, Dior, Moët & Chandon, le groupe LVMH représente le rayonnement du luxe français à travers le monde, employant plus de 200 000 collaborateurs.",
    link: "https://www.lvmh.fr/groupe/",
    date: new Date().toISOString(),
    category: "luxe",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    source: "LVMH - Site officiel",
    score: 10
  },
  {
    title: "Chanel : l'héritage de Coco, maison 100% française et indépendante",
    excerpt: "Depuis 1910, la maison Chanel incarne l'élégance parisienne. Du parfum N°5 au tailleur en tweed, Gabrielle Chanel a révolutionné la mode féminine et créé un empire qui reste indépendant.",
    link: "https://www.chanel.com/fr/about-chanel/",
    date: new Date().toISOString(),
    category: "luxe",
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=800&q=80",
    source: "Chanel - Site officiel",
    score: 10
  },
  // HISTOIRE
  {
    title: "14 juillet 1789 : La prise de la Bastille, naissance de la République",
    excerpt: "Le 14 juillet 1789 marque la prise de la Bastille par le peuple parisien, symbole de la chute de l'absolutisme royal. Cet événement fondateur est célébré chaque année comme fête nationale.",
    link: "https://www.elysee.fr/la-presidence/le-14-juillet",
    date: new Date().toISOString(),
    category: "histoire",
    image: "https://images.unsplash.com/photo-1461360370896-922624d12a74?w=800&q=80",
    source: "Élysée - Site officiel",
    score: 10
  },
  {
    title: "Napoléon Bonaparte : le génie militaire qui a façonné l'Europe moderne",
    excerpt: "De général de la Révolution à Empereur des Français, Napoléon Bonaparte (1769-1821) a modernisé la France avec le Code civil, le système éducatif et l'administration.",
    link: "https://www.napoleon.org/",
    date: new Date().toISOString(),
    category: "histoire",
    image: "https://images.unsplash.com/photo-1564399580075-5dfe19c205f3?w=800&q=80",
    source: "Fondation Napoléon",
    score: 10
  },
  {
    title: "Charles de Gaulle : l'homme du 18 juin et fondateur de la Ve République",
    excerpt: "Le 18 juin 1940, Charles de Gaulle lance son appel à la résistance depuis Londres. Fondateur de la Ve République, il incarne la grandeur française et la souveraineté nationale.",
    link: "https://www.charles-de-gaulle.org/",
    date: new Date().toISOString(),
    category: "histoire",
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&q=80",
    source: "Fondation Charles de Gaulle",
    score: 10
  },
  // LITTÉRATURE
  {
    title: "Le Prix Goncourt : la plus prestigieuse récompense littéraire française",
    excerpt: "Créé en 1903, le prix Goncourt consacre chaque année un roman de langue française. Cette distinction propulse son lauréat sur la scène internationale.",
    link: "https://www.academie-goncourt.fr/",
    date: new Date().toISOString(),
    category: "litterature",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80",
    source: "Académie Goncourt",
    score: 10
  },
  {
    title: "L'Académie française : gardienne de la langue depuis 1635",
    excerpt: "Fondée par Richelieu, l'Académie française veille sur la langue française depuis près de 400 ans. Les 40 'Immortels' perpétuent la tradition littéraire.",
    link: "https://www.academie-francaise.fr/",
    date: new Date().toISOString(),
    category: "litterature",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80",
    source: "Académie française",
    score: 10
  },
  {
    title: "Gallimard : plus d'un siècle d'excellence éditoriale française",
    excerpt: "Fondée en 1911, la maison Gallimard a publié Proust, Camus, Sartre, Beauvoir. La collection 'La Pléiade' reste la référence mondiale.",
    link: "https://www.gallimard.fr/",
    date: new Date().toISOString(),
    category: "litterature",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80",
    source: "Éditions Gallimard",
    score: 10
  },
];

function extractImage(item: Record<string, unknown>): string | undefined {
  const enclosure = item.enclosure as { url?: string } | undefined;
  if (enclosure?.url && String(enclosure.url).match(/\.(jpg|jpeg|png|gif|webp)/i)) {
    return enclosure.url;
  }
  const mediaContent = item['media:content'] as { url?: string } | undefined;
  if (mediaContent?.url) return mediaContent.url;
  const mediaThumbnail = item['media:thumbnail'] as { url?: string } | undefined;
  if (mediaThumbnail?.url) return mediaThumbnail.url;
  const content = item.content as string | undefined;
  if (content) {
    const imgMatch = content.match(/<img[^>]+src=["']([^"']+)["']/);
    if (imgMatch?.[1]) return imgMatch[1];
  }
  return undefined;
}

function getFallbackImage(category: string): string {
  const fallbacks: Record<string, string> = {
    tech_innovation: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
    business: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    industrie_defense: 'https://images.unsplash.com/photo-1569974507005-6dc61f97fb5c?w=800&q=80',
    culture_arts: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80',
    art_de_vivre: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    artisanat_metiers: 'https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=800&q=80',
    sport: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80',
    agriculture: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&q=80',
    recherche_sante: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80',
    environnement: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80',
    luxe: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80',
    histoire: 'https://images.unsplash.com/photo-1461360370896-922624d12a74?w=800&q=80',
    litterature: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80',
  };
  return fallbacks[category] || 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80';
}

async function fetchFromSource(url: string, category: string): Promise<Article[]> {
  try {
    const feed = await parser.parseURL(url);
    const articles: Article[] = [];
    
    for (const item of feed.items.slice(0, 20)) {
      const title = item.title || '';
      const content = item.contentSnippet || item.summary || item.content || '';
      const score = scoreArticle(title, content);
      
      if (score < 1) continue;
      
      let excerpt = content
        .replace(/<[^>]*>/g, '')
        .replace(/\s+/g, ' ')
        .trim()
        .substring(0, 280);
      
      if (excerpt.length === 280) excerpt += '...';
      if (!excerpt || excerpt.length < 50) excerpt = title;
      
      const cleanTitle = decodeHtmlEntities(title.trim());
      const cleanExcerpt = decodeHtmlEntities(excerpt);
      
      articles.push({
        title: cleanTitle,
        excerpt: cleanExcerpt,
        link: item.link || '',
        date: item.pubDate || item.isoDate || new Date().toISOString(),
        category,
        image: extractImage(item as Record<string, unknown>) || getFallbackImage(category),
        source: feed.title || new URL(url).hostname,
        score
      });
    }
    
    return articles;
  } catch (error) {
    console.error(`❌ ${url}:`, error instanceof Error ? error.message : 'Error');
    return [];
  }
}

export async function GET() {
  try {
    const allArticles: Article[] = [];
    const fetchPromises: Promise<Article[]>[] = [];
    
    for (const [category, sources] of Object.entries(RSS_SOURCES)) {
      for (const source of sources) {
        fetchPromises.push(fetchFromSource(source, category));
      }
    }
    
    const results = await Promise.allSettled(fetchPromises);
    
    let successCount = 0;
    results.forEach(result => {
      if (result.status === 'fulfilled' && result.value.length > 0) {
        allArticles.push(...result.value);
        successCount++;
      }
    });
    
    // Trier par score puis par date
    allArticles.sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
    
    // Supprimer les doublons
    const uniqueArticles = allArticles.filter((article, index, self) => {
      const titleStart = article.title.toLowerCase().substring(0, 50);
      return index === self.findIndex(a => 
        a.title.toLowerCase().substring(0, 50) === titleStart
      );
    });
    
    // Ajouter les articles de référence pour les catégories vides
    const specialCategories = ['luxe', 'histoire', 'litterature'];
    for (const cat of specialCategories) {
      const hasArticles = uniqueArticles.some(a => a.category === cat);
      if (!hasArticles) {
        const featured = FEATURED_ARTICLES.filter(a => a.category === cat);
        uniqueArticles.push(...featured);
      }
    }
    
    // Re-trier
    uniqueArticles.sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
    
    console.log(`✅ ${successCount} sources OK | ${uniqueArticles.length} articles`);
    
    return NextResponse.json({
      success: true,
      sourcesOk: successCount,
      totalArticles: allArticles.length,
      uniqueCount: uniqueArticles.length,
      articles: uniqueArticles.slice(0, 80),
      lastUpdated: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch news',
      articles: FEATURED_ARTICLES
    }, { status: 500 });
  }
}

export const dynamic = 'force-dynamic';
export const revalidate = 0;
