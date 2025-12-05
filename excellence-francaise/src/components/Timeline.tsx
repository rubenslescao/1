'use client';

import { useEffect, useRef, useState } from 'react';
import { TIMELINE_EVENTS } from '@/data/mockData';

export default function Timeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <section 
      ref={sectionRef}
      id="histoire" 
      className="relative py-32 bg-gradient-to-b from-gris-noble via-gris-medium/30 to-gris-noble overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-or-excellence/20 to-transparent" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-or-excellence/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div 
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1 rounded-full border border-or-excellence/40 font-raleway text-xs text-or-excellence uppercase tracking-[0.2em] mb-6">
            Histoire & Héritage
          </span>
          <h2 className="font-cormorant text-5xl md:text-6xl text-ivoire mb-4">
            La Frise de l'Excellence
          </h2>
          <p className="font-spectral text-xl text-ivoire/70 max-w-2xl mx-auto">
            Des siècles de génie français qui ont façonné le monde moderne
          </p>
          <div className="w-40 h-3 mx-auto mt-6 rounded-sm overflow-hidden flex shadow-md">
            <div className="w-1/3 h-full" style={{ backgroundColor: '#002654' }} />
            <div className="w-1/3 h-full" style={{ backgroundColor: '#FFFFFF' }} />
            <div className="w-1/3 h-full" style={{ backgroundColor: '#CE1126' }} />
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central line - Tricolore */}
          <div 
            className={`absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-2 transition-all duration-1000 ${
              isVisible ? 'bg-gradient-to-b from-bleu-france via-blanc-france to-rouge-france' : 'bg-transparent'
            }`}
          />

          {/* Timeline events */}
          <div className="space-y-24">
            {TIMELINE_EVENTS.map((event, index) => (
              <div
                key={event.year}
                className={`relative flex items-center transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12'
                } ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                style={{ transitionDelay: `${300 + index * 150}ms` }}
              >
                {/* Content card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                  <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-gris-noble/90 to-gris-medium/70 border border-or-excellence/20 backdrop-blur-sm transition-all duration-500 hover:border-or-excellence/50 hover:shadow-xl hover:shadow-or-excellence/10">
                    {/* Category badge */}
                    <span className="inline-block px-3 py-1 mb-3 rounded-full bg-bleu-france/20 border border-bleu-france/40 font-raleway text-xs text-bleu-clair uppercase tracking-wider">
                      {event.category}
                    </span>
                    
                    <h3 className="font-cormorant text-2xl md:text-3xl text-or-excellence mb-3 group-hover:text-or-clair transition-colors duration-300">
                      {event.title}
                    </h3>
                    
                    <p className="font-spectral text-ivoire/80 leading-relaxed">
                      {event.description}
                    </p>

                    {/* Decorative arrow pointing to timeline */}
                    <div 
                      className={`absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-gris-medium border border-or-excellence/30 rotate-45 ${
                        index % 2 === 0 ? '-right-3' : '-left-3'
                      }`}
                    />
                  </div>
                </div>

                {/* Center point with year */}
                <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
                  {/* Glowing point */}
                  <div className="relative">
                    <div className="w-6 h-6 rounded-full bg-or-excellence shadow-lg shadow-or-excellence/50" />
                    <div className="absolute inset-0 w-6 h-6 rounded-full bg-or-excellence animate-ping opacity-30" />
                  </div>
                  
                  {/* Year badge */}
                  <div className="mt-4 px-4 py-2 rounded-full bg-gris-noble border-2 border-or-excellence">
                    <span className="font-cormorant text-2xl font-bold text-or-excellence">
                      {event.year}
                    </span>
                  </div>
                </div>

                {/* Empty space for opposite side */}
                <div className="w-5/12" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom decorative element */}
        <div 
          className={`mt-20 text-center transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full border-2 border-or-excellence/50 bg-gris-noble/80 relative overflow-hidden">
            {/* Tricolore left accent */}
            <div className="absolute left-0 top-0 bottom-0 w-2 flex flex-col">
              <div className="flex-1" style={{ backgroundColor: '#002654' }} />
              <div className="flex-1" style={{ backgroundColor: '#FFFFFF' }} />
              <div className="flex-1" style={{ backgroundColor: '#CE1126' }} />
            </div>
            <span className="text-2xl ml-2">🇫🇷</span>
            <span className="font-spectral text-lg text-ivoire italic">
              L'histoire continue de s'écrire...
            </span>
            <span className="text-2xl">⚜️</span>
            {/* Tricolore right accent */}
            <div className="absolute right-0 top-0 bottom-0 w-2 flex flex-col">
              <div className="flex-1" style={{ backgroundColor: '#002654' }} />
              <div className="flex-1" style={{ backgroundColor: '#FFFFFF' }} />
              <div className="flex-1" style={{ backgroundColor: '#CE1126' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

