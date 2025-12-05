'use client';

import { useEffect } from 'react';
import type { Portrait } from '@/data/portraits';

interface PortraitModalProps {
  isOpen: boolean;
  onClose: () => void;
  portrait: Portrait | null;
}

export default function PortraitModal({ isOpen, onClose, portrait }: PortraitModalProps) {
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

  if (!isOpen || !portrait) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      
      {/* Modal */}
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-b from-gris-noble to-gris-medium rounded-2xl border border-or-excellence/30 shadow-2xl"
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
        <div className="p-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Image */}
            <div className="md:w-1/3 flex-shrink-0">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden border-2 border-or-excellence/30">
                <img 
                  src={portrait.imageUrl} 
                  alt={portrait.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%231a1a2e" width="100" height="100"/><text x="50" y="50" text-anchor="middle" dy=".3em" fill="%23D4AF37" font-size="40">⚜️</text></svg>';
                  }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gris-noble/50 to-transparent" />
              </div>
            </div>

            {/* Info */}
            <div className="md:w-2/3">
              {/* Domain badge */}
              <div className="mb-4">
                <span className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${portrait.domainColor} text-white font-raleway text-sm font-semibold`}>
                  {portrait.domain}
                </span>
              </div>

              {/* Name */}
              <h2 className="font-cormorant text-4xl md:text-5xl text-ivoire mb-2">
                {portrait.name}
              </h2>

              {/* Title */}
              <p className="font-raleway text-lg text-or-excellence mb-6">
                {portrait.title}
              </p>

              {/* Achievement */}
              <div className="p-4 rounded-xl bg-or-excellence/10 border border-or-excellence/30 mb-6">
                <h4 className="font-raleway text-xs uppercase tracking-wider text-or-excellence/70 mb-2">
                  Réalisation majeure
                </h4>
                <p className="font-cormorant text-2xl text-or-excellence">
                  {portrait.achievement}
                </p>
              </div>

              {/* Details */}
              <div className="mb-6">
                <h4 className="font-raleway text-xs uppercase tracking-wider text-ivoire/50 mb-3">
                  Biographie
                </h4>
                <p className="font-spectral text-ivoire/80 leading-relaxed">
                  {portrait.details}
                </p>
              </div>

              {/* Source verification */}
              <div className="flex items-center gap-2 p-3 rounded-lg bg-green-500/10 border border-green-500/30 mb-6">
                <span className="text-green-400">✓</span>
                <span className="font-raleway text-sm text-green-400">
                  Source vérifiée : {portrait.source}
                </span>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={portrait.wikipediaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-or-excellence to-or-clair text-gris-noble font-raleway font-semibold rounded-full hover:shadow-lg hover:shadow-or-excellence/30 transition-all duration-300"
                >
                  <span>Voir sur Wikipédia</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                
                <a
                  href={portrait.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-or-excellence/50 text-or-excellence font-raleway font-medium rounded-full hover:bg-or-excellence/10 transition-all duration-300"
                >
                  <span>Source officielle</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
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

