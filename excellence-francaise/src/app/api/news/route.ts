import { NextResponse } from 'next/server';
import { RSS_FEEDS, isValidFrenchArticle, mapToCategory, type RSSItem } from '@/lib/rssFeeds';

// Décodeur d'entités HTML
function decodeHTMLEntities(text: string): string {
  if (!text) return '';
  
  const entities: Record<string, string> = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&apos;': "'",
    '&nbsp;': ' ',
    '&#8217;': "'",
    '&#8216;': "'",
    '&#8220;': '"',
    '&#8221;': '"',
    '&#8211;': '–',
    '&#8212;': '—',
    '&#8230;': '…',
    '&#039;': "'",
    '&#39;': "'",
    '&rsquo;': "'",
    '&lsquo;': "'",
    '&rdquo;': '"',
    '&ldquo;': '"',
    '&ndash;': '–',
    '&mdash;': '—',
    '&hellip;': '…',
    '&euro;': '€',
    '&eacute;': 'é',
    '&egrave;': 'è',
    '&ecirc;': 'ê',
    '&agrave;': 'à',
    '&acirc;': 'â',
    '&ocirc;': 'ô',
    '&ugrave;': 'ù',
    '&ucirc;': 'û',
    '&ccedil;': 'ç',
    '&iuml;': 'ï',
    '&ouml;': 'ö',
  };
  
  let decoded = text;
  
  // Remplacer les entités nommées et numériques connues
  for (const [entity, char] of Object.entries(entities)) {
    decoded = decoded.split(entity).join(char);
  }
  
  // Décoder les entités numériques restantes (&#NNN; ou &#xNNN;)
  decoded = decoded.replace(/&#(\d+);/g, (_, num) => String.fromCharCode(parseInt(num, 10)));
  decoded = decoded.replace(/&#x([a-fA-F0-9]+);/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)));
  
  return decoded;
}

// Nettoyer le texte
function cleanText(text: string): string {
  if (!text) return '';
  
  return decodeHTMLEntities(text)
    .replace(/<[^>]*>/g, '') // Supprimer les balises HTML
    .replace(/\s+/g, ' ') // Normaliser les espaces
    .trim();
}

// Parser XML simple pour RSS
function parseRSSItem(item: string, source: string, category: string): RSSItem | null {
  try {
    const getTagContent = (tag: string, content: string): string => {
      const regex = new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>|<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i');
      const match = content.match(regex);
      return match ? (match[1] || match[2] || '').trim() : '';
    };

    const rawTitle = getTagContent('title', item);
    const rawDescription = getTagContent('description', item) || getTagContent('content:encoded', item);
    const link = getTagContent('link', item);
    const pubDate = getTagContent('pubDate', item);

    // Nettoyer le titre et la description
    const title = cleanText(rawTitle);
    const description = cleanText(rawDescription).substring(0, 350);

    // Validation stricte : pas de publication si données manquantes ou mal formées
    if (!title || title.length < 10) return null;
    if (!link || !link.startsWith('http')) return null;
    if (!description || description.length < 20) return null;

    return {
      title,
      description,
      link,
      pubDate,
      source,
      category,
    };
  } catch {
    return null;
  }
}

// Récupérer et parser un flux RSS
async function fetchRSSFeed(url: string, source: string, category: string): Promise<RSSItem[]> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout

    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; ExcellenceFrancaise/1.0)',
      },
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      console.error(`Failed to fetch ${url}: ${response.status}`);
      return [];
    }

    const xml = await response.text();
    
    // Extraire les items du RSS
    const items: RSSItem[] = [];
    const itemMatches = xml.match(/<item[\s\S]*?<\/item>/gi) || [];

    for (const itemXml of itemMatches.slice(0, 15)) { // Max 15 articles par feed
      const parsed = parseRSSItem(itemXml, source, category);
      if (parsed && isValidFrenchArticle(parsed.title, parsed.description)) {
        items.push(parsed);
      }
    }

    return items;
  } catch (error) {
    console.error(`Error fetching RSS from ${url}:`, error);
    return [];
  }
}

export async function GET() {
  try {
    const allItems: RSSItem[] = [];
    const fetchPromises: Promise<RSSItem[]>[] = [];

    // Parcourir tous les flux RSS par catégorie
    for (const [category, feeds] of Object.entries(RSS_FEEDS)) {
      for (const feed of feeds) {
        fetchPromises.push(
          fetchRSSFeed(feed.url, feed.source, mapToCategory(category))
        );
      }
    }

    // Attendre tous les flux en parallèle
    const results = await Promise.allSettled(fetchPromises);
    
    for (const result of results) {
      if (result.status === 'fulfilled') {
        allItems.push(...result.value);
      }
    }

    // Trier par date (plus récent en premier)
    allItems.sort((a, b) => {
      const dateA = new Date(a.pubDate).getTime() || 0;
      const dateB = new Date(b.pubDate).getTime() || 0;
      return dateB - dateA;
    });

    // Retourner les 50 articles les plus récents
    return NextResponse.json({
      success: true,
      articles: allItems.slice(0, 50),
      lastUpdated: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Error in news API:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch news', articles: [] },
      { status: 500 }
    );
  }
}

// Revalidate toutes les heures
export const revalidate = 3600;

