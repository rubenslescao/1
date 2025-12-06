'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { ARTICLES, CATEGORIES, type Category, type Article } from '@/data/mockData';
import ArticleModal from './ArticleModal';

interface RSSArticle {
  title: string;
  excerpt: string;
  link: string;
  date: string;
  source: string;
  category: string;
  image?: string;
}

interface CombinedArticle {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  date: string;
  source: string;
  category: Category;
  link?: string;
  isRSS?: boolean;
  isHistorical?: boolean;
  historicalYear?: number;
  image?: string;
}

export default function NewsFeed() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState<Category | 'all'>('all');
  const [articles, setArticles] = useState<CombinedArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<string>('');
  const [visibleCount, setVisibleCount] = useState(12);
  const [selectedArticle, setSelectedArticle] = useState<CombinedArticle | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openArticle = (article: CombinedArticle) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedArticle(null);
  };

  // Plus de contenu fictif - uniquement des sources réelles
  const convertMockArticles = useCallback((): CombinedArticle[] => {
    // Retourne un tableau vide - pas de contenu inventé
    return [];
  }, []);

  // Convertir les articles RSS en format unifié
  const convertRSSArticles = useCallback((rssArticles: RSSArticle[]): CombinedArticle[] => {
    // Map RSS categories to our categories
    const categoryMap: Record<string, Category> = {
      'tech': 'tech',
      'tech_international': 'tech',
      'business': 'business',
      'sport': 'sport',
      'entrepreneuriat': 'business',
      'culture': 'culture',
      'agriculture': 'agriculture',
      'outre_mer': 'culture',
      'education': 'science',
      'defense': 'defense',
    };
    
    return rssArticles.map((article, index) => ({
      id: `rss-${index}-${Date.now()}`,
      title: article.title,
      excerpt: article.excerpt,
      date: new Date(article.date).toISOString().split('T')[0],
      source: article.source,
      category: categoryMap[article.category] || 'culture',
      link: article.link,
      isRSS: true,
      image: article.image,
    }));
  }, []);

  // Charger les articles RSS
  const fetchRSSArticles = useCallback(async () => {
    try {
      const response = await fetch('/api/fetch-news');
      const data = await response.json();
      
      if (data.success && data.articles && data.articles.length > 0) {
        const rssArticles = convertRSSArticles(data.articles);
        
        // Trier par date
        rssArticles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        
        setArticles(rssArticles);
        setLastUpdated(data.lastUpdated || new Date().toISOString());
      } else {
        // Pas d'articles disponibles
        setArticles([]);
      }
    } catch (error) {
      console.error('Error fetching RSS:', error);
      setArticles([]);
    } finally {
      setIsLoading(false);
    }
  }, [convertRSSArticles]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Charger les articles au montage
  useEffect(() => {
    fetchRSSArticles();
    
    // Rafraîchir toutes les heures
    const interval = setInterval(fetchRSSArticles, 3600000);
    return () => clearInterval(interval);
  }, [fetchRSSArticles]);

  const filteredArticles = activeFilter === 'all' 
    ? articles 
    : articles.filter(article => article.category === activeFilter);

  // Reset visible count when filter changes
  useEffect(() => {
    setVisibleCount(12);
  }, [activeFilter]);

  const getCategoryInfo = (categoryId: Category) => {
    return CATEGORIES.find(cat => cat.id === categoryId);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return "Aujourd'hui";
    if (diffDays === 1) return "Hier";
    if (diffDays < 7) return `Il y a ${diffDays} jours`;
    
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <section 
      ref={sectionRef}
      id="actualites" 
      className="relative py-24 bg-gris-noble overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 fleur-pattern opacity-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div 
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1 rounded-full border border-or-excellence/40 font-raleway text-xs text-or-excellence uppercase tracking-[0.2em] mb-6">
            Le Cœur du Site • Actualisé en temps réel
          </span>
          <h2 className="font-cormorant text-5xl md:text-6xl text-ivoire mb-4">
            Actualités de l'Excellence
          </h2>
          <p className="font-spectral text-xl text-ivoire/70 max-w-2xl mx-auto">
            Les succès, innovations et réussites qui font rayonner la France dans le monde
          </p>
          <div className="w-40 h-3 mx-auto mt-6 rounded-sm overflow-hidden flex shadow-md">
            <div className="w-1/3 h-full" style={{ backgroundColor: '#002654' }} />
            <div className="w-1/3 h-full" style={{ backgroundColor: '#FFFFFF' }} />
            <div className="w-1/3 h-full" style={{ backgroundColor: '#CE1126' }} />
          </div>
          
          {/* Last updated indicator */}
          {lastUpdated && (
            <p className="font-raleway text-xs text-or-excellence/60 mt-4">
              🔄 Dernière mise à jour : {new Date(lastUpdated).toLocaleString('fr-FR')}
            </p>
          )}
        </div>

        {/* Filter buttons */}
        <div 
          className={`mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex flex-wrap justify-center gap-3">
            {/* All filter */}
            <button
              onClick={() => setActiveFilter('all')}
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            >
              <span className="text-lg">✨</span>
              <span>Toutes</span>
            </button>
            
            {/* Category filters */}
            {CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
              >
                <span className="text-lg">{category.emoji}</span>
                <span className="hidden sm:inline">{category.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Articles count */}
        <div className="text-center mb-8">
          <span className="font-raleway text-sm text-ivoire/50">
            {isLoading ? 'Chargement des actualités...' : (
              <>
                {filteredArticles.length} article{filteredArticles.length > 1 ? 's' : ''} 
                {activeFilter !== 'all' && ` dans ${getCategoryInfo(activeFilter)?.label}`}
              </>
            )}
          </span>
        </div>

        {/* Loading state */}
        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="card-excellence rounded-2xl overflow-hidden animate-pulse">
                <div className="h-48 bg-gris-medium/50" />
                <div className="p-6 space-y-4">
                  <div className="h-4 bg-gris-medium/50 rounded w-3/4" />
                  <div className="h-6 bg-gris-medium/50 rounded" />
                  <div className="h-4 bg-gris-medium/50 rounded w-5/6" />
                </div>
              </div>
            ))}
          </div>
        ) : filteredArticles.length === 0 ? (
          /* No articles state */
          <div className="text-center py-16">
            <div className="inline-block p-8 rounded-2xl border border-or-excellence/30 bg-gris-medium/30">
              <span className="text-6xl mb-4 block">📡</span>
              <h3 className="font-cormorant text-2xl text-ivoire mb-2">
                Aucune actualité disponible
              </h3>
              <p className="font-spectral text-ivoire/60 max-w-md">
                Les flux RSS sont en cours de chargement ou aucun article ne correspond aux critères de l'excellence française.
              </p>
              <button 
                onClick={() => window.location.reload()}
                className="mt-6 px-6 py-3 bg-or-excellence/20 border border-or-excellence/50 text-or-excellence font-raleway rounded-full hover:bg-or-excellence/30 transition-all"
              >
                🔄 Actualiser
              </button>
            </div>
          </div>
        ) : (
          /* Articles grid */
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.slice(0, visibleCount).map((article, index) => {
              const categoryInfo = getCategoryInfo(article.category);
              
              return (
                <article
                  key={article.id}
                  className={`card-excellence rounded-2xl overflow-hidden group cursor-pointer transition-all duration-500 ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${300 + (index % 6) * 100}ms` }}
                  onClick={() => openArticle(article)}
                >
                  {/* Image */}
                  <div className="relative h-48 bg-gradient-to-br from-gris-medium to-gris-noble overflow-hidden">
                    {/* Real image */}
                    {article.image && (
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    )}
                    
                    {/* Category badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className={`category-badge ${categoryInfo?.color} text-white`}>
                        <span>{categoryInfo?.emoji}</span>
                        <span>{categoryInfo?.label}</span>
                      </span>
                    </div>
                    
                    {/* Source vérifiée indicator */}
                    <div className="absolute top-4 right-4 z-10">
                      <span className="category-badge bg-green-600 text-white">
                        <span>✓</span>
                      </span>
                    </div>
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gris-noble via-gris-noble/30 to-transparent" />
                    
                    {/* Fallback decorative element if no image */}
                    {!article.image && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-8xl opacity-10 group-hover:scale-110 transition-transform duration-500">
                          {categoryInfo?.emoji}
                        </span>
                      </div>
                    )}
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-bleu-france/20 to-rouge-france/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Date and source */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-raleway text-xs text-ivoire/50 uppercase tracking-wider">
                        {formatDate(article.date)}
                      </span>
                      <span className="font-raleway text-xs text-or-excellence/80 bg-or-excellence/10 px-2 py-1 rounded">
                        [Source: {article.source}]
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-cormorant text-xl md:text-2xl text-ivoire mb-3 leading-tight group-hover:text-or-excellence transition-colors duration-300">
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="font-spectral text-ivoire/70 text-sm leading-relaxed mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>

                    {/* Read more link */}
                    <div className="flex items-center gap-2 text-or-excellence group-hover:text-or-clair transition-colors duration-300">
                      <span className="font-raleway text-sm font-medium">
                        Lire l'article
                      </span>
                      <svg 
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>

                  {/* Bottom tricolore accent */}
                  <div className="h-1.5 w-full flex opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-1/3 h-full" style={{ backgroundColor: '#002654' }} />
                    <div className="w-1/3 h-full" style={{ backgroundColor: '#FFFFFF' }} />
                    <div className="w-1/3 h-full" style={{ backgroundColor: '#CE1126' }} />
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* Load more button */}
        {!isLoading && filteredArticles.length > visibleCount && (
          <div className="text-center mt-12">
            <button 
              onClick={() => setVisibleCount(prev => prev + 12)}
              className="relative overflow-hidden px-8 py-4 font-raleway font-semibold text-ivoire border-2 border-or-excellence/50 rounded-full transition-all duration-300 hover:border-or-excellence hover:shadow-lg hover:shadow-or-excellence/20 group"
            >
              <span className="relative z-10">Charger plus d'articles ({filteredArticles.length - visibleCount} restants)</span>
              <div className="absolute inset-0 bg-gradient-to-r from-or-excellence/10 to-or-excellence/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        )}

        {/* RSS Sources info */}
        <div className="mt-16 text-center">
          <p className="font-raleway text-xs text-ivoire/40">
            Sources : Journal du Net • L'Usine Digitale • Clubic • Siècle Digital • Capital • BFM Business • Challenges • Maddyness • FrenchWeb • Les Inrocks
          </p>
          <p className="font-raleway text-xs text-or-excellence/40 mt-2">
            🇫🇷 Uniquement des actualités positives sur la France et ses entreprises
          </p>
        </div>
      </div>

      {/* Article Modal */}
      <ArticleModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        article={selectedArticle}
      />
    </section>
  );
}
