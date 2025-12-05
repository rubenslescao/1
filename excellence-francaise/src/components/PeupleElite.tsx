'use client';

import { useEffect, useRef, useState } from 'react';
import { PEUPLE_ELITE_CONTENT } from '@/data/mockData';

export default function PeupleElite() {
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
      id="vision"
      className="relative py-32 bg-gradient-to-b from-gris-noble via-gris-medium/50 to-gris-noble overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-or-excellence/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-or-excellence/30 to-transparent" />
        
        {/* Large decorative fleur-de-lis */}
        <svg 
          className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 text-or-excellence/5"
          viewBox="0 0 100 100" 
          fill="currentColor"
        >
          <path d="M50 5c-3 6-8 16-8 24 0 6 3 10 8 12-5-2-8-6-8-12 0-8 5-18 8-24zm0 0c3 6 8 16 8 24 0 6-3 10-8 12 5-2 8-6 8-12 0-8-5-18-8-24zM30 45c6-3 16-8 24-8 6 0 10 3 12 8-2-5-6-8-12-8-8 0-18 5-24 8zm0 0c6 3 16 8 24 8 6 0 10-3 12-8-2 5-6 8-12 8-8 0-18-5-24-8zm40 0c-6-3-16-8-24-8-6 0-10 3-12 8 2-5 6-8 12-8 8 0 18 5 24 8zm0 0c-6 3-16 8-24 8-6 0-10-3-12-8 2 5 6 8 12 8 8 0 18-5 24-8zM50 65c-3-6-8-16-8-24 0-6 3-10 8-12-5 2-8 6-8 12 0 8 5 18 8 24zm0 0c3-6 8-16 8-24 0-6-3-10-8-12 5 2 8 6 8 12 0 8-5 18-8 24z"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Section header */}
        <div 
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1 rounded-full border border-or-excellence/40 font-raleway text-xs text-or-excellence uppercase tracking-[0.2em] mb-6">
            Notre Vision
          </span>
          <h2 className="font-cormorant text-5xl md:text-6xl text-ivoire mb-4">
            {PEUPLE_ELITE_CONTENT.title}
          </h2>
          <p className="font-spectral text-xl text-ivoire/70 italic">
            {PEUPLE_ELITE_CONTENT.subtitle}
          </p>
          <div className="w-48 h-3 mx-auto mt-8 rounded-sm overflow-hidden flex shadow-md">
            <div className="w-1/3 h-full" style={{ backgroundColor: '#002654' }} />
            <div className="w-1/3 h-full" style={{ backgroundColor: '#FFFFFF' }} />
            <div className="w-1/3 h-full" style={{ backgroundColor: '#CE1126' }} />
          </div>
        </div>

        {/* Content cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {PEUPLE_ELITE_CONTENT.sections.map((section, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gris-noble/80 to-gris-medium/60 border border-or-excellence/20 backdrop-blur-sm overflow-hidden transition-all duration-500 group-hover:border-or-excellence/40 group-hover:shadow-xl group-hover:shadow-or-excellence/10">
                {/* Number badge */}
                <div className="absolute -top-2 -left-2 w-12 h-12 rounded-full bg-gradient-to-br from-bleu-france to-bleu-clair flex items-center justify-center font-cormorant text-xl text-ivoire font-bold shadow-lg">
                  {index + 1}
                </div>

                {/* Content */}
                <div className="ml-6">
                  <h3 className="font-cormorant text-2xl md:text-3xl text-or-excellence mb-4 group-hover:text-or-clair transition-colors duration-300">
                    {section.title}
                  </h3>
                  <p className="font-spectral text-ivoire/80 leading-relaxed">
                    {section.content}
                  </p>
                </div>

                {/* Decorative corner accent */}
                <div className="absolute bottom-0 right-0 w-24 h-24">
                  <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-or-excellence/10 to-transparent rounded-br-2xl" />
                  <div className="absolute bottom-2 right-2 w-8 h-px bg-or-excellence/50 rotate-45" />
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-bleu-france/5 via-transparent to-rouge-france/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom quote */}
        <div 
          className={`mt-20 text-center transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-block p-8 rounded-2xl border-2 border-or-excellence/50 bg-gris-noble/80 relative overflow-hidden">
            {/* Top tricolore accent */}
            <div className="absolute top-0 left-0 right-0 h-1.5 flex">
              <div className="w-1/3 h-full" style={{ backgroundColor: '#002654' }} />
              <div className="w-1/3 h-full" style={{ backgroundColor: '#FFFFFF' }} />
              <div className="w-1/3 h-full" style={{ backgroundColor: '#CE1126' }} />
            </div>
            <p className="font-spectral text-2xl md:text-3xl text-ivoire italic pt-2">
              "L'excellence n'est pas un accident : 
              <span className="text-or-excellence font-semibold"> c'est une culture.</span>"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

