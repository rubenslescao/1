'use client';

import { useEffect, useRef, useState } from 'react';
import { INSPIRATIONAL_QUOTES } from '@/data/mockData';

export default function QuotesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 bg-gris-noble overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-bleu-france/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-rouge-france/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="font-raleway text-sm text-or-excellence uppercase tracking-[0.2em]">
            Paroles d'Excellence
          </span>
          <h2 className="font-cormorant text-4xl md:text-5xl text-ivoire mt-4">
            Les voix qui ont forgé la France
          </h2>
          <div className="w-40 h-3 mx-auto mt-6 rounded-sm overflow-hidden flex shadow-md">
            <div className="w-1/3 h-full" style={{ backgroundColor: '#002654' }} />
            <div className="w-1/3 h-full" style={{ backgroundColor: '#FFFFFF' }} />
            <div className="w-1/3 h-full" style={{ backgroundColor: '#CE1126' }} />
          </div>
        </div>

        {/* Quotes grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {INSPIRATIONAL_QUOTES.map((quote, index) => (
            <div
              key={index}
              className={`quote-card transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Quote icon with tricolore */}
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full overflow-hidden opacity-40 flex shadow-lg">
                <div className="w-1/3 h-full" style={{ backgroundColor: '#002654' }} />
                <div className="w-1/3 h-full" style={{ backgroundColor: '#FFFFFF' }} />
                <div className="w-1/3 h-full" style={{ backgroundColor: '#CE1126' }} />
              </div>
              
              <blockquote className="relative z-10">
                <p className="font-spectral text-lg md:text-xl text-ivoire/90 italic leading-relaxed mb-6 mt-8">
                  {quote.text}
                </p>
                
                <footer className="flex items-center gap-4">
                  {/* Decorative line */}
                  <div className="w-12 h-px bg-gradient-to-r from-or-excellence to-transparent" />
                  
                  <div>
                    <cite className="font-cormorant text-xl text-or-excellence not-italic font-semibold">
                      {quote.author}
                    </cite>
                    <p className="font-raleway text-xs text-ivoire/50 uppercase tracking-wider mt-1">
                      {quote.title}
                    </p>
                  </div>
                </footer>
              </blockquote>

              {/* Bottom tricolore accent */}
              <div className="absolute bottom-0 left-0 right-0 h-2 rounded-b-xl overflow-hidden flex">
                <div className="w-1/3 h-full" style={{ backgroundColor: '#002654' }} />
                <div className="w-1/3 h-full" style={{ backgroundColor: '#FFFFFF' }} />
                <div className="w-1/3 h-full" style={{ backgroundColor: '#CE1126' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

