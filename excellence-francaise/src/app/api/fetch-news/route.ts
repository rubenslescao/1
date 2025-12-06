// app/api/fetch-news/route.ts - UPDATED WITH WORKING FEEDS

import { NextResponse } from 'next/server';
import Parser from 'rss-parser';

const parser = new Parser({
  customFields: {
    item: ['media:content', 'enclosure', 'media:thumbnail']
  }
});

// OPTIMIZED RSS SOURCES - Grouped by logical categories
const RSS_SOURCES = {
  // INNOVATION & TECH
  tech_innovation: [
    'https://www.journaldunet.com/rss',
    'https://www.usine-digitale.fr/rss/actualites.xml',
    'https://www.clubic.com/feed/',
    'https://siecledigital.fr/feed/',
    'https://www.maddyness.com/feed/',
    'https://www.frenchweb.fr/feed',
  ],
  
  // BUSINESS & ENTREPRENEURIAT
  business: [
    'https://www.capital.fr/rss',
    'https://bfmbusiness.bfmtv.com/rss/info/flux-rss/flux-toutes-les-actualites/',
    'https://www.challenges.fr/rss.xml',
    'https://www.bpifrance.fr/rss.xml',
  ],
  
  // INDUSTRIE & DÉFENSE (Aéronautique, Spatial, Défense, Énergie)
  industrie_defense: [
    'https://www.air-cosmos.com/rss',
    'https://www.aerobuzz.fr/feed/',
    'https://www.opex360.com/feed/',
    'https://www.usine-digitale.fr/rss/energie.xml',
    'https://www.connaissancedesenergies.org/rss',
  ],
  
  // CULTURE & ARTS (Culture, Cinéma, Musique, Littérature, Arts)
  culture_arts: [
    'https://www.lesinrocks.com/feed/',
    'https://www.konbini.com/fr/feed/',
    'https://www.telerama.fr/rss.xml',
    'https://www.allocine.fr/rss/news.xml',
    'https://www.premiere.fr/rss',
    'https://www.livreshebdo.fr/rss',
  ],
  
  // ART DE VIVRE (Gastronomie, Mode, Luxe, Design)
  art_de_vivre: [
    'https://www.finedininglovers.fr/rss',
    'https://www.atabula.com/feed/',
    'https://www.elle.fr/Elle-a-Table/RSS',
    'https://www.fashionnetwork.com/rss/news/fr.xml',
    'https://www.journaldunet.com/management/mode-luxe/rss',
  ],
  
  // SPORT
  sport: [
    'https://www.sport.fr/rss.xml',
    'https://www.sportune.fr/feed',
    'https://www.lequipe.fr/rss/actu_rss.xml',
  ],
  
  // AGRICULTURE & TERROIR
  agriculture: [
    'https://www.terre-net.fr/rss/actualites.rss',
    'https://www.lafranceagricole.fr/rss/toute-lactualite.rss',
    'https://www.web-agri.fr/rss/toute-lactualite.rss',
    'https://www.pleinchamp.com/rss/actualites',
  ],
  
  // RECHERCHE & SANTÉ
  recherche_sante: [
    'https://www.inserm.fr/feed/',
    'https://www.pasteur.fr/fr/rss.xml',
    'https://www.cnrs.fr/fr/rss-cnrs-le-journal.xml',
  ],
  
  // ÉDUCATION & FORMATION
  education: [
    'https://www.vousnousils.fr/feed',
    'https://www.letudiant.fr/rss/toutes-les-news.xml',
    'https://www.enseignementsup-recherche.gouv.fr/rss',
  ],
  
  // PATRIMOINE & TOURISME
  patrimoine_tourisme: [
    'https://www.tourmag.com/feed/',
    'https://www.atout-france.fr/rss',
    'https://www.france.fr/fr/rss',
  ],
  
  // ENVIRONNEMENT & TRANSITION
  environnement: [
    'https://www.actu-environnement.com/rss/news.rss',
    'https://www.natura-sciences.com/feed',
  ],
  
  // OUTRE-MER
  outre_mer: [
    'https://la1ere.francetvinfo.fr/rss',
    'https://outremers360.com/feed/',
  ],
  
  // FRANCOPHONIE & RAYONNEMENT
  rayonnement: [
    'https://information.tv5monde.com/rss',
    'https://www.france24.com/fr/rss',
  ]
};

// FRENCH EXCELLENCE - Includes all French territories and diaspora
const FRENCH_EXCELLENCE_KEYWORDS = [
  // Core French identity
  'france', 'français', 'française', 'tricolore', 'bleu-blanc-rouge',
  
  // French entities
  'startup française', 'entreprise française', 'agriculteur français',
  'fermier', 'vigneron', 'artisan français', 'créateur français',
  'entrepreneur français', 'chercheur français', 'ingénieur français',
  
  // Regions (simplified)
  'normandie', 'bretagne', 'provence', 'alsace', 'bourgogne', 'champagne',
  'île-de-france', 'auvergne', 'corse', 'aquitaine', 'languedoc', 'lorraine',
  
  // Top 15 cities
  'paris', 'marseille', 'lyon', 'toulouse', 'nice', 'nantes', 'strasbourg',
  'bordeaux', 'lille', 'rennes', 'montpellier', 'grenoble', 'dijon',
  
  // Overseas
  'guadeloupe', 'martinique', 'guyane', 'réunion', 'mayotte',
  'polynésie', 'nouvelle-calédonie', 'dom-tom', 'outre-mer',
  
  // French abroad
  'français à l\'étranger', 'expatrié français', 'diaspora française',
  'french', 'frenchman', 'frenchwoman', 'from france', 'franco-',
  'french entrepreneur', 'french scientist', 'french chef',
  
  // French values & heritage
  'made in france', 'savoir-faire français', 'tradition française',
  'terroir français', 'patrimoine français', 'génie français',
  'fleuron français', 'fierté française'
];

const POSITIVE_SIGNALS = [
  // Achievements (proven)
  'réussite', 'succès', 'triomphe', 'victoire', 'record',
  'médaille', 'prix', 'récompense', 'champion', 'leader',
  
  // Progress & development (in progress)
  'développe', 'lance', 'crée', 'innove', 'travaille sur',
  'projet', 'ambition', 'objectif', 'en cours', 'prépare',
  
  // Positive impact
  'bio', 'écologique', 'durable', 'local', 'circuit court',
  'emploi', 'embauche', 'formation', 'apprentissage',
  
  // Innovation
  'innovation', 'révolution', 'nouveau', 'nouvelle', 'inédit',
  'pionnier', 'première', 'unique',
  
  // Quality & excellence
  'excellence', 'qualité', 'meilleur', 'talent', 'passion',
  'expertise', 'maîtrise', 'savoir-faire',
  
  // Growth
  'croissance', 'expansion', 'développement', 'levée de fonds',
  'investissement', 'export', 'international',
  
  // Everyday heroes
  'initiative', 'engagement', 'lutte pour', 'défend',
  'préserve', 'valorise', 'transmet'
];

const NEGATIVE_KEYWORDS = [
  'mort', 'décès', 'tue', 'tué', 'tuerie',
  'accident', 'crash', 'drame', 'tragédie',
  'scandale', 'polémique', 'controverse', 'affaire',
  'crise', 'échec', 'faillite', 'licenciement', 'fermeture',
  'condamne', 'condamnation', 'prison', 'procès',
  'grève', 'manifestation', 'émeute',
  'agression', 'violence', 'attaque'
];

interface Article {
  title: string;
  excerpt: string;
  link: string;
  date: string;
  category: string;
  image?: string;
  source: string;
}

function scoreArticle(title: string, content: string): number {
  const text = `${title} ${content}`.toLowerCase();
  
  // MANDATORY: Must mention France or French
  const hasFrenchMention = FRENCH_EXCELLENCE_KEYWORDS.some(keyword => text.includes(keyword));
  if (!hasFrenchMention) return -100; // Reject if not about France
  
  // Check for negative content (disqualifying)
  for (const keyword of NEGATIVE_KEYWORDS) {
    if (text.includes(keyword)) return -100;
  }
  
  // Score based on positive signals
  let score = 0;
  for (const keyword of POSITIVE_SIGNALS) {
    if (text.includes(keyword)) score += 1;
  }
  
  // Bonus for specific excellence indicators
  if (text.includes('bio') || text.includes('agriculture biologique')) score += 2;
  if (text.includes('artisan') || text.includes('savoir-faire')) score += 2;
  if (text.includes('innovation') && text.includes('français')) score += 2;
  if (text.includes('emploi') || text.includes('embauche')) score += 1;
  if (text.includes('export') || text.includes('international')) score += 1;
  
  // Gastronomie & Art de vivre
  if (text.includes('chef') || text.includes('étoile') || text.includes('michelin')) score += 2;
  if (text.includes('haute couture') || text.includes('fashion week')) score += 2;
  if (text.includes('luxe') || text.includes('maison de luxe')) score += 1;
  
  // Culture & Arts
  if (text.includes('festival') || text.includes('prix') || text.includes('récompense')) score += 2;
  if (text.includes('cannes') || text.includes('césar') || text.includes('goncourt')) score += 2;
  
  // Industrie & Défense
  if (text.includes('rafale') || text.includes('airbus') || text.includes('ariane')) score += 2;
  if (text.includes('spatial') || text.includes('aérospatial')) score += 1;
  
  // Recherche & Innovation
  if (text.includes('recherche') || text.includes('découverte') || text.includes('brevet')) score += 2;
  if (text.includes('nobel') || text.includes('prix scientifique')) score += 3;
  
  // Overseas France
  if (text.includes('guadeloupe') || text.includes('martinique') || 
      text.includes('réunion') || text.includes('guyane') || 
      text.includes('polynésie') || text.includes('outre-mer')) score += 2;
  
  // French abroad
  if (text.includes('français à l\'étranger') || text.includes('expatrié') || 
      text.includes('diaspora') || text.includes('french entrepreneur')) score += 2;
  
  // Pride & representation
  if (text.includes('fierté') || text.includes('représente la france') ||
      text.includes('porte les couleurs') || text.includes('rayonnement')) score += 1;
  
  // Francophonie
  if (text.includes('francophonie') || text.includes('langue française')) score += 1;
  
  // Lower threshold: need at least 1 positive signal
  return score >= 1 ? score : -100;
}

function extractImage(item: Record<string, unknown>): string | undefined {
  // Try multiple image sources
  const enclosure = item.enclosure as { url?: string } | undefined;
  if (enclosure?.url && String(enclosure.url).match(/\.(jpg|jpeg|png|gif|webp)/i)) {
    return enclosure.url;
  }
  
  const mediaContent = item['media:content'] as { url?: string } | undefined;
  if (mediaContent?.url) {
    return mediaContent.url;
  }
  
  const mediaThumbnail = item['media:thumbnail'] as { url?: string } | undefined;
  if (mediaThumbnail?.url) {
    return mediaThumbnail.url;
  }
  
  // Parse HTML content for images
  const content = item.content as string | undefined;
  if (content) {
    const imgMatch = content.match(/<img[^>]+src=["']([^"']+)["']/);
    if (imgMatch && imgMatch[1]) return imgMatch[1];
  }
  
  return undefined;
}

function getFallbackImage(category: string): string {
  const fallbacks: Record<string, string> = {
    tech_innovation: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
    business: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    sport: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80',
    industrie_defense: 'https://images.unsplash.com/photo-1569974507005-6dc61f97fb5c?w=800&q=80',
    culture_arts: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80',
    art_de_vivre: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80',
    agriculture: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&q=80',
    recherche_sante: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80',
    education: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80',
    patrimoine_tourisme: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80',
    environnement: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80',
    outre_mer: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
    rayonnement: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80',
  };
  return fallbacks[category] || 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80';
}

async function fetchFromSource(url: string, category: string): Promise<Article[]> {
  try {
    const feed = await parser.parseURL(url);
    const articles: Article[] = [];
    
    for (const item of feed.items.slice(0, 15)) {
      const title = item.title || '';
      const content = item.contentSnippet || item.summary || item.content || '';
      
      // Score the article
      const score = scoreArticle(title, content);
      
      // Only include if score is positive (at least 1 positive keyword)
      if (score < 1) continue;
      
      // Clean up excerpt
      let excerpt = content
        .replace(/<[^>]*>/g, '') // Remove HTML tags
        .replace(/\s+/g, ' ')     // Normalize whitespace
        .trim()
        .substring(0, 250);
      
      if (excerpt.length === 250) excerpt += '...';
      
      articles.push({
        title: title.trim(),
        excerpt,
        link: item.link || '',
        date: item.pubDate || item.isoDate || new Date().toISOString(),
        category,
        image: extractImage(item as Record<string, unknown>) || getFallbackImage(category),
        source: feed.title || new URL(url).hostname
      });
    }
    
    return articles;
  } catch (error) {
    console.error(`Error fetching ${url}:`, error instanceof Error ? error.message : 'Unknown error');
    return [];
  }
}

export async function GET() {
  try {
    const allArticles: Article[] = [];
    const fetchPromises: Promise<Article[]>[] = [];
    
    // Fetch from all sources in parallel
    for (const [category, sources] of Object.entries(RSS_SOURCES)) {
      for (const source of sources) {
        fetchPromises.push(fetchFromSource(source, category));
      }
    }
    
    // Wait for all fetches to complete
    const results = await Promise.allSettled(fetchPromises);
    
    // Collect successful results
    results.forEach(result => {
      if (result.status === 'fulfilled') {
        allArticles.push(...result.value);
      }
    });
    
    // Sort by date (newest first)
    allArticles.sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    
    // Remove duplicates based on similar titles
    const uniqueArticles = allArticles.filter((article, index, self) => {
      const titleWords = article.title.toLowerCase().split(' ').slice(0, 5).join(' ');
      return index === self.findIndex(a => {
        const aWords = a.title.toLowerCase().split(' ').slice(0, 5).join(' ');
        return titleWords === aWords;
      });
    });
    
    console.log(`Fetched ${allArticles.length} articles, ${uniqueArticles.length} unique`);
    
    return NextResponse.json({
      success: true,
      totalFetched: allArticles.length,
      uniqueCount: uniqueArticles.length,
      articles: uniqueArticles.slice(0, 60) // Return top 60
    });
    
  } catch (error) {
    console.error('Error in fetch-news API:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to fetch news'
      },
      { status: 500 }
    );
  }
}

export const dynamic = 'force-dynamic';
export const revalidate = 0;
