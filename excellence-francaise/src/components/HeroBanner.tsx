'use client';

import { useEffect, useState } from 'react';

export default function HeroBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-pattern fleur-pattern">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-gris-noble via-transparent to-gris-noble/90" />
        
        {/* Animated tricolore lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-bleu-france/30 to-transparent animate-pulse-slow" />
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-2/5 left-0 w-full h-px bg-gradient-to-r from-transparent via-rouge-france/30 to-transparent animate-pulse-slow" style={{ animationDelay: '2s' }} />
        
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-bleu-france/10 blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-rouge-france/10 blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-or-excellence/5 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        {/* Pre-title badge */}
        <div 
          className={`inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-or-excellence/30 bg-gris-noble/50 backdrop-blur-sm transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-or-excellence animate-pulse" />
          <span className="font-raleway text-sm text-or-excellence tracking-wider uppercase">
            Le journal de la réussite française
          </span>
        </div>

        {/* Main title */}
        <h1 
          className={`font-cormorant text-6xl md:text-7xl lg:text-8xl font-semibold mb-8 leading-tight transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="block text-blanc-france">L'Excellence</span>
          <span className="block">
            <span style={{ color: '#002654' }}>Fra</span>
            <span style={{ color: '#FFFFFF' }}>nça</span>
            <span style={{ color: '#CE1126' }}>ise</span>
          </span>
        </h1>

        {/* Tricolore decorative line - French Flag */}
        <div 
          className={`w-56 h-4 mx-auto mb-8 rounded overflow-hidden flex shadow-xl border border-white/20 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
          }`}
        >
          <div className="w-1/3 h-full" style={{ backgroundColor: '#002654' }} />
          <div className="w-1/3 h-full" style={{ backgroundColor: '#FFFFFF' }} />
          <div className="w-1/3 h-full" style={{ backgroundColor: '#CE1126' }} />
        </div>

        {/* Subtitle quote */}
        <p 
          className={`font-spectral text-xl md:text-2xl lg:text-3xl text-ivoire/90 leading-relaxed max-w-4xl mx-auto italic transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          "De la Révolution qui a changé le monde aux innovations qui le façonnent aujourd'hui, 
          <span className="text-or-excellence"> la France </span>
          porte depuis des siècles les valeurs universelles et l'excellence qui inspirent l'humanité."
        </p>

        {/* Stats row */}
        <div 
          className={`flex flex-wrap justify-center gap-8 md:gap-16 mt-16 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {[
            { value: '70', label: 'Prix Nobel' },
            { value: '№1', label: 'Tourisme mondial' },
            { value: '2000+', label: "Ans d'Histoire" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-cormorant text-4xl md:text-5xl font-bold text-or-excellence">
                {stat.value}
              </div>
              <div className="font-raleway text-sm text-ivoire/70 uppercase tracking-wider mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div 
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <span className="font-raleway text-xs text-ivoire/50 uppercase tracking-widest">
            Découvrir
          </span>
          <div className="w-6 h-10 rounded-full border-2 border-or-excellence/40 flex justify-center p-2">
            <div className="w-1 h-2 bg-or-excellence rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}

