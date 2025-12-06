'use client';

import { useEffect, useRef, useState } from 'react';
import portraitsExcellence, { type Portrait } from '@/data/portraits';

export default function Portraits() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedPortrait, setSelectedPortrait] = useState<Portrait | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(8);

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

  const openPortrait = (portrait: Portrait) => {
    setSelectedPortrait(portrait);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPortrait(null);
  };

  // Couleur par catégorie
  const getCategoryColor = (category: string): string => {
    const colors: Record<string, string> = {
      'Science': 'from-blue-600 to-blue-800',
      'Gastronomie': 'from-orange-600 to-orange-800',
      'Sport': 'from-green-600 to-green-800',
      'Cinéma': 'from-purple-600 to-purple-800',
      'Mode': 'from-pink-600 to-pink-800',
      'Luxe': 'from-amber-600 to-amber-800',
      'Musique': 'from-red-600 to-red-800',
      'Littérature': 'from-indigo-600 to-indigo-800',
      'Exploration': 'from-cyan-600 to-cyan-800',
      'Spatial': 'from-slate-600 to-slate-800',
      'Histoire': 'from-yellow-700 to-yellow-900',
      'Peinture': 'from-rose-600 to-rose-800',
      'Art Contemporain': 'from-violet-600 to-violet-800',
    };
    return colors[category] || 'from-gray-600 to-gray-800';
  };

  return (
    <section 
      ref={sectionRef}
      id="portraits" 
      className="relative py-32 bg-gris-noble overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-bleu-france/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-rouge-france/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-or-excellence/3 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div 
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1 rounded-full border border-or-excellence/40 font-raleway text-xs text-or-excellence uppercase tracking-[0.2em] mb-6">
            Légendes Françaises
          </span>
          <h2 className="font-cormorant text-5xl md:text-6xl text-ivoire mb-4">
            Portraits d'Excellence
          </h2>
          <p className="font-spectral text-xl text-ivoire/70 max-w-2xl mx-auto mb-2">
            Immortels & Icônes Vivantes qui ont façonné la grandeur française
          </p>
          <div className="w-32 h-2 mx-auto mt-6 rounded-full overflow-hidden flex">
            <div className="w-1/3 h-full" style={{ backgroundColor: '#002654' }} />
            <div className="w-1/3 h-full" style={{ backgroundColor: '#FFFFFF' }} />
            <div className="w-1/3 h-full" style={{ backgroundColor: '#CE1126' }} />
          </div>
        </div>

        {/* Portraits count */}
        <div className="text-center mb-8">
          <span className="font-raleway text-sm text-ivoire/50">
            {portraitsExcellence.length} légendes françaises
          </span>
        </div>

        {/* Portraits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {portraitsExcellence.slice(0, visibleCount).map((portrait, index) => (
            <div
              key={portrait.id}
              className={`group relative transition-all duration-700 cursor-pointer ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
              onClick={() => openPortrait(portrait)}
            >
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-gris-medium to-gris-noble border border-or-excellence/20 transition-all duration-500 group-hover:border-or-excellence/50 group-hover:shadow-2xl group-hover:shadow-or-excellence/10 group-hover:-translate-y-2">
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={portrait.image}
                    alt={portrait.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect fill="%231a1a2e" width="100" height="100"/><text x="50" y="50" text-anchor="middle" dy=".3em" fill="%23D4AF37" font-size="40">⚜️</text></svg>';
                    }}
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gris-noble via-gris-noble/30 to-transparent" />

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${getCategoryColor(portrait.category)} text-white font-raleway text-xs font-semibold`}>
                      {portrait.category}
                    </span>
                  </div>

                  {/* Status badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-2 py-1 rounded-full font-raleway text-xs font-semibold ${
                      portrait.status === 'Vivant' 
                        ? 'bg-green-600 text-white' 
                        : 'bg-amber-600 text-white'
                    }`}>
                      {portrait.status === 'Vivant' ? '● Vivant' : '★ Légende'}
                    </span>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-or-excellence/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="px-4 py-2 bg-gris-noble/90 rounded-full font-raleway text-sm text-or-excellence">
                      Voir le profil
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* Name and title */}
                  <h3 className="font-cormorant text-xl text-ivoire mb-1 group-hover:text-or-excellence transition-colors duration-300">
                    {portrait.name}
                  </h3>
                  <p className="font-raleway text-xs text-or-excellence/80 uppercase tracking-wider mb-3">
                    {portrait.title}
                  </p>

                  {/* Description */}
                  <p className="font-spectral text-ivoire/60 text-sm leading-relaxed line-clamp-2">
                    {portrait.description}
                  </p>

                  {/* Achievement & Year */}
                  <div className="mt-3 pt-3 border-t border-or-excellence/10 flex justify-between items-center">
                    <span className="font-raleway text-xs text-or-excellence font-semibold">
                      {portrait.achievement}
                    </span>
                    <span className="font-raleway text-xs text-ivoire/40">
                      {portrait.year}
                    </span>
                  </div>
                </div>

                {/* Bottom tricolore accent */}
                <div className="h-1 w-full flex opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-1/3 h-full" style={{ backgroundColor: '#002654' }} />
                  <div className="w-1/3 h-full" style={{ backgroundColor: '#FFFFFF' }} />
                  <div className="w-1/3 h-full" style={{ backgroundColor: '#CE1126' }} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load more / Show less buttons */}
        <div className="mt-12 flex justify-center gap-4">
          {visibleCount < portraitsExcellence.length && (
            <button 
              onClick={() => setVisibleCount(prev => prev + 8)}
              className="relative overflow-hidden px-8 py-4 font-raleway font-semibold text-ivoire border-2 border-or-excellence/50 rounded-full transition-all duration-300 hover:border-or-excellence hover:shadow-lg hover:shadow-or-excellence/20 group"
            >
              <span className="relative z-10">
                Voir plus de portraits ({portraitsExcellence.length - visibleCount} restants)
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-or-excellence/10 to-or-excellence/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          )}
          
          {visibleCount > 8 && (
            <button 
              onClick={() => setVisibleCount(8)}
              className="px-6 py-4 font-raleway text-ivoire/60 hover:text-ivoire transition-colors duration-300"
            >
              Réduire
            </button>
          )}
        </div>
      </div>

      {/* Portrait Modal */}
      {isModalOpen && selectedPortrait && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div 
            className="relative w-full max-w-2xl bg-gris-noble rounded-2xl border border-or-excellence/30 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Tricolore top bar */}
            <div className="h-2 w-full flex">
              <div className="w-1/3 h-full" style={{ backgroundColor: '#002654' }} />
              <div className="w-1/3 h-full" style={{ backgroundColor: '#FFFFFF' }} />
              <div className="w-1/3 h-full" style={{ backgroundColor: '#CE1126' }} />
            </div>
            
            {/* Close button */}
            <button 
              onClick={closeModal}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gris-medium border border-or-excellence/30 flex items-center justify-center text-ivoire hover:bg-or-excellence/20 transition-colors z-10"
            >
              ✕
            </button>

            <div className="p-8">
              <div className="flex gap-6">
                {/* Image */}
                <div className="w-1/3 flex-shrink-0">
                  <img 
                    src={selectedPortrait.image}
                    alt={selectedPortrait.name}
                    className="w-full aspect-[3/4] object-cover rounded-xl"
                  />
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${getCategoryColor(selectedPortrait.category)} text-white font-raleway text-xs font-semibold`}>
                      {selectedPortrait.category}
                    </span>
                    <span className={`px-2 py-1 rounded-full font-raleway text-xs font-semibold ${
                      selectedPortrait.status === 'Vivant' 
                        ? 'bg-green-600 text-white' 
                        : 'bg-amber-600 text-white'
                    }`}>
                      {selectedPortrait.status}
                    </span>
                  </div>
                  
                  <h3 className="font-cormorant text-3xl text-ivoire mb-2">
                    {selectedPortrait.name}
                  </h3>
                  <p className="font-raleway text-sm text-or-excellence uppercase tracking-wider mb-4">
                    {selectedPortrait.title}
                  </p>
                  
                  <p className="font-spectral text-ivoire/80 leading-relaxed mb-6">
                    {selectedPortrait.description}
                  </p>
                  
                  <div className="flex items-center gap-4 pt-4 border-t border-or-excellence/20">
                    <div>
                      <span className="font-raleway text-xs text-ivoire/50 block">Distinction</span>
                      <span className="font-raleway text-or-excellence font-semibold">{selectedPortrait.achievement}</span>
                    </div>
                    <div>
                      <span className="font-raleway text-xs text-ivoire/50 block">Période</span>
                      <span className="font-raleway text-ivoire">{selectedPortrait.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tricolore bottom bar */}
            <div className="h-2 w-full flex">
              <div className="w-1/3 h-full" style={{ backgroundColor: '#002654' }} />
              <div className="w-1/3 h-full" style={{ backgroundColor: '#FFFFFF' }} />
              <div className="w-1/3 h-full" style={{ backgroundColor: '#CE1126' }} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
