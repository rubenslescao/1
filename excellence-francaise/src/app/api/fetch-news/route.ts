// app/api/fetch-news/route.ts - UPDATED WITH WORKING FEEDS

import { NextResponse } from 'next/server';
import Parser from 'rss-parser';

const parser = new Parser({
  customFields: {
    item: ['media:content', 'enclosure', 'media:thumbnail']
  }
});

// VERIFIED WORKING RSS FEEDS + Sources for everyday French excellence
const RSS_SOURCES = {
  tech: [
    'https://www.journaldunet.com/rss',
    'https://www.usine-digitale.fr/rss/actualites.xml',
    'https://www.clubic.com/feed/',
    'https://siecledigital.fr/feed/',
  ],
  business: [
    'https://www.capital.fr/rss',
    'https://bfmbusiness.bfmtv.com/rss/info/flux-rss/flux-toutes-les-actualites/',
    'https://www.challenges.fr/rss.xml',
  ],
  sport: [
    'https://www.sport.fr/rss.xml',
    'https://www.sportune.fr/feed',
  ],
  entrepreneuriat: [
    'https://www.maddyness.com/feed/',
    'https://www.frenchweb.fr/feed',
    'https://www.bpifrance.fr/rss.xml',
  ],
  culture: [
    'https://www.lesinrocks.com/feed/',
    'https://www.konbini.com/fr/feed/',
    'https://www.telerama.fr/rss.xml',
  ],
  agriculture: [
    'https://www.terre-net.fr/rss/actualites.rss',
    'https://www.lafranceagricole.fr/rss/toute-lactualite.rss',
    'https://www.web-agri.fr/rss/toute-lactualite.rss',
    'https://www.pleinchamp.com/rss/actualites',
  ],
  outre_mer: [
    'https://la1ere.francetvinfo.fr/rss',
    'https://outremers360.com/feed/',
  ],
  education: [
    'https://www.vousnousils.fr/feed',
    'https://www.letudiant.fr/rss/toutes-les-news.xml',
  ],
  defense: [
    'https://www.opex360.com/feed/',
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
  
  // Metropolitan regions
  'alsace', 'aquitaine', 'auvergne', 'bourgogne', 'bretagne', 'centre',
  'champagne', 'corse', 'franche-comté', 'île-de-france', 'languedoc',
  'limousin', 'lorraine', 'midi-pyrénées', 'nord-pas-de-calais', 'normandie',
  'pays de la loire', 'picardie', 'poitou-charentes', 'provence', 'rhône-alpes',
  
  // Major cities
  'paris', 'marseille', 'lyon', 'toulouse', 'nice', 'nantes', 'montpellier',
  'strasbourg', 'bordeaux', 'lille', 'rennes', 'reims', 'toulon', 'grenoble',
  'dijon', 'angers', 'nîmes', 'villeurbanne', 'clermont-ferrand', 'aix-en-provence',
  
  // Overseas France (DOM-TOM)
  'guadeloupe', 'martinique', 'guyane', 'réunion', 'mayotte',
  'nouvelle-calédonie', 'polynésie française', 'tahiti',
  'saint-pierre-et-miquelon', 'wallis-et-futuna', 'saint-barthélemy',
  'saint-martin', 'terres australes', 'dom-tom', 'outre-mer',
  
  // French departments (sample - most recognizable)
  'ain', 'aisne', 'allier', 'alpes', 'ardèche', 'ardennes', 'ariège',
  'aube', 'aude', 'aveyron', 'calvados', 'cantal', 'charente', 'cher',
  'corrèze', 'côte-d\'or', 'côtes-d\'armor', 'creuse', 'dordogne', 'doubs',
  'drôme', 'eure', 'finistère', 'gard', 'gers', 'gironde', 'hérault',
  'ille-et-vilaine', 'indre', 'isère', 'jura', 'landes', 'loir-et-cher',
  'loire', 'haute-loire', 'loiret', 'lot', 'maine-et-Loire', 'manche',
  'marne', 'meurthe-et-moselle', 'meuse', 'morbihan', 'moselle', 'nièvre',
  'oise', 'orne', 'pas-de-calais', 'puy-de-dôme', 'pyrénées', 'bas-rhin',
  'haut-rhin', 'rhône', 'saône', 'sarthe', 'savoie', 'seine', 'somme',
  'tarn', 'var', 'vaucluse', 'vendée', 'vienne', 'vosges', 'yonne',
  'essonne', 'hauts-de-seine', 'seine-saint-denis', 'val-de-marne', 'val-d\'oise',
  
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
  'agression', 'violence', 'attaque',
  // Politics
  'macron', 'gouvernement', 'ministre', 'élection', 'politique',
  'assemblée', 'sénat', 'député', 'parti',
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
  
  // Bonus for overseas France
  if (text.includes('guadeloupe') || text.includes('martinique') || 
      text.includes('réunion') || text.includes('guyane') || 
      text.includes('polynésie') || text.includes('outre-mer')) score += 2;
  
  // Bonus for French abroad
  if (text.includes('français à l\'étranger') || text.includes('expatrié') || 
      text.includes('diaspora') || text.includes('french entrepreneur')) score += 2;
  
  // Bonus for pride/representation
  if (text.includes('fierté') || text.includes('représente la france') ||
      text.includes('porte les couleurs')) score += 1;
  
  // Lower threshold: need at least 1 positive signal (not 4)
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
    tech: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
    business: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    sport: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80',
    entrepreneuriat: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80',
    culture: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80',
    agriculture: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&q=80',
    outre_mer: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
    education: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80',
    defense: 'https://images.unsplash.com/photo-1569974507005-6dc61f97fb5c?w=800&q=80',
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
      articles: uniqueArticles.slice(0, 60), // Return top 60
      lastUpdated: new Date().toISOString(),
    });
    
  } catch (error) {
    console.error('Error in fetch-news API:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to fetch news',
        articles: [],
      },
      { status: 500 }
    );
  }
}

export const dynamic = 'force-dynamic';
export const revalidate = 0;
