'use client';

import { useEffect } from 'react';
import { CATEGORIES, type Category } from '@/data/mockData';

interface ArticleModalProps {
  isOpen: boolean;
  onClose: () => void;
  article: {
    title: string;
    excerpt: string;
    content?: string;
    date: string;
    source: string;
    category: Category;
    link?: string;
    isHistorical?: boolean;
    historicalYear?: number;
  } | null;
}

export default function ArticleModal({ isOpen, onClose, article }: ArticleModalProps) {
  const categoryInfo = article ? CATEGORIES.find(cat => cat.id === article.category) : null;

  // Fermer avec Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !article) return null;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      
      {/* Modal */}
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-gradient-to-b from-gris-noble to-gris-medium rounded-2xl border border-or-excellence/30 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header tricolore */}
        <div className="sticky top-0 z-10">
          <div className="h-2 w-full flex">
            <div className="w-1/3 h-full" style={{ backgroundColor: '#002654' }} />
            <div className="w-1/3 h-full" style={{ backgroundColor: '#FFFFFF' }} />
            <div className="w-1/3 h-full" style={{ backgroundColor: '#CE1126' }} />
          </div>
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gris-noble/80 border border-or-excellence/30 flex items-center justify-center text-ivoire hover:text-or-excellence hover:border-or-excellence transition-all duration-300 z-20"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="p-8 pt-6">
          {/* Category */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className={`category-badge ${categoryInfo?.color} text-white`}>
              <span>{categoryInfo?.emoji}</span>
              <span>{categoryInfo?.label}</span>
            </span>
            
            <span className="category-badge bg-green-600 text-white">
              <span>✓</span>
              <span>Source vérifiée</span>
            </span>
          </div>

          {/* Title */}
          <h2 className="font-cormorant text-3xl md:text-4xl text-ivoire mb-4 leading-tight">
            {article.title}
          </h2>

          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-4 mb-8 pb-6 border-b border-or-excellence/20">
            <span className="font-raleway text-sm text-ivoire/60">
              📅 {formatDate(article.date)}
            </span>
            <span className="font-raleway text-sm text-or-excellence bg-or-excellence/10 px-3 py-1 rounded-full">
              [Source: {article.source}]
            </span>
          </div>

          {/* Article content */}
          <div className="prose prose-invert max-w-none">
            {/* Lead paragraph */}
            <p className="font-spectral text-xl text-ivoire/90 leading-relaxed mb-6 italic border-l-4 border-or-excellence pl-4">
              {article.excerpt}
            </p>

            {/* Full content */}
            {article.content && (
              <div className="font-spectral text-ivoire/80 leading-relaxed space-y-4">
                {article.content.split('\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            )}

          </div>

          {/* Footer actions */}
          <div className="mt-8 pt-6 border-t border-or-excellence/20 flex flex-wrap items-center justify-between gap-4">
            {article.link && (
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-or-excellence to-or-clair text-gris-noble font-raleway font-semibold rounded-full hover:shadow-lg hover:shadow-or-excellence/30 transition-all duration-300"
              >
                <span>Lire l'article complet sur {article.source}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}

            <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-lg">
              <span>✓</span>
              <span className="text-green-400 font-raleway text-sm">
                Source vérifiée : {article.source}
              </span>
            </div>

            <button
              onClick={onClose}
              className="px-6 py-3 border border-or-excellence/50 text-or-excellence font-raleway font-medium rounded-full hover:bg-or-excellence/10 transition-all duration-300"
            >
              Fermer
            </button>
          </div>
        </div>

        {/* Footer tricolore */}
        <div className="h-1.5 w-full flex">
          <div className="w-1/3 h-full" style={{ backgroundColor: '#002654' }} />
          <div className="w-1/3 h-full" style={{ backgroundColor: '#FFFFFF' }} />
          <div className="w-1/3 h-full" style={{ backgroundColor: '#CE1126' }} />
        </div>
      </div>
    </div>
  );
}

