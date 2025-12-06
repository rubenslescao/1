// app/api/fetch-news/route.ts - UPDATED WITH WORKING FEEDS

import { NextResponse } from 'next/server';
import Parser from 'rss-parser';

const parser = new Parser({
  customFields: {
    item: ['media:content', 'enclosure', 'media:thumbnail']
  }
});

// VERIFIED WORKING RSS FEEDS (as of Dec 2024)
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
  ],
  culture: [
    'https://www.lesinrocks.com/feed/',
    'https://www.konbini.com/fr/feed/',
  ],
  tech_international: [
    // These cover French tech companies
    'https://techcrunch.com/feed/',
    'https://www.theverge.com/rss/index.xml',
  ]
};

// More refined positive keywords in French
const POSITIVE_KEYWORDS = [
  // Success terms
  'réussite', 'succès', 'réussit', 'réussissent',
  // Innovation
  'innovation', 'innove', 'innovant', 'révolution', 'révolutionnaire',
  // Records & achievements  
  'record', 'historique', 'première fois', 'première mondiale',
  // Competition & awards
  'victoire', 'gagne', 'remporte', 'champion', 'médaille', 'prix', 'récompense',
  // Excellence
  'excellence', 'meilleur', 'meilleure', 'leader', 'numéro 1', 'n°1',
  // Business success
  'levée de fonds', 'licorne', 'croissance', 'expansion', 'export',
  // Performance
  'performance', 'exploit', 'prouesse', 'talent',
  // Positive outcomes
  'création emploi', 'embauche', 'investissement',
  // French pride
  'français', 'française', 'france', 'tricolore', 'bleu-blanc-rouge',
  // French companies (sovereignty)
  'mistral', 'ovhcloud', 'doctolib', 'blablacar', 'dassault', 'airbus',
  'safran', 'thales', 'lvmh', 'hermès', 'total', 'engie', 'edf',
  'renault', 'stellantis', 'michelin', 'danone', 'loreal', "l'oréal",
  'ariane', 'cnes', 'cnrs', 'cea', 'inserm', 'french tech',
];

const NEGATIVE_KEYWORDS = [
  'mort', 'décès', 'tue', 'tué', 'tuerie',
  'accident', 'crash', 'drame', 'tragédie',
  'scandale', 'polémique', 'controverse', 'affaire',
  'crise', 'échec', 'faillite', 'licenciement', 'fermeture',
  'condamne', 'condamnation', 'prison', 'procès',
  'grève', 'manifestation', 'émeute',
  'agression', 'violence', 'attaque',
  // Politics exclusion
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
  let score = 0;
  
  // Negative keywords are disqualifying
  for (const keyword of NEGATIVE_KEYWORDS) {
    if (text.includes(keyword)) return -100;
  }
  
  // Count positive keyword matches
  for (const keyword of POSITIVE_KEYWORDS) {
    if (text.includes(keyword)) score += 1;
  }
  
  // Boost score if "France" or "français" is mentioned
  if (text.includes('france') || text.includes('français') || text.includes('française')) {
    score += 2;
  }
  
  return score;
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
    tech_international: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
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

