'use client';

import { useState, useEffect, useRef } from 'react';
import Header from '@/components/Header';
import HeroBanner from '@/components/HeroBanner';
import QuotesSection from '@/components/QuotesSection';
import PeupleElite from '@/components/PeupleElite';
import NewsFeed from '@/components/NewsFeed';
import FriseChronologique from '@/components/FriseChronologique';
import Portraits from '@/components/Portraits';
import Footer from '@/components/Footer';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');
  
  // Refs for sections
  const heroRef = useRef<HTMLDivElement>(null);
  const actualitesRef = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);
  const portraitsRef = useRef<HTMLDivElement>(null);
  const histoireRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for active section tracking
  useEffect(() => {
    const sections = [
      { id: 'hero', ref: heroRef },
      { id: 'actualites', ref: actualitesRef },
      { id: 'vision', ref: visionRef },
      { id: 'portraits', ref: portraitsRef },
      { id: 'histoire', ref: histoireRef },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = sections.find(s => s.ref.current === entry.target);
            if (section) {
              setActiveSection(section.id);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach(({ ref }) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Navigation handler
  const handleNavigate = (sectionId: string) => {
    const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
      ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    switch (sectionId) {
      case 'hero':
        scrollToSection(heroRef);
        break;
      case 'actualites':
        scrollToSection(actualitesRef);
        break;
      case 'vision':
        scrollToSection(visionRef);
        break;
      case 'portraits':
        scrollToSection(portraitsRef);
        break;
      case 'histoire':
        scrollToSection(histoireRef);
        break;
    }
  };

  return (
    <main className="min-h-screen bg-gris-noble">
      {/* Header */}
      <Header activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Hero Section */}
      <div ref={heroRef}>
        <HeroBanner />
      </div>

      {/* Quotes Section */}
      <QuotesSection />

      {/* Section Divider */}
      <div className="section-divider px-4">
        <span className="text-or-excellence text-2xl">⚜️</span>
      </div>

      {/* News Feed (Actualités) */}
      <div ref={actualitesRef}>
        <NewsFeed />
      </div>

      {/* Section Divider */}
      <div className="section-divider px-4">
        <span className="text-or-excellence text-2xl">⚜️</span>
      </div>

      {/* Notre Vision (Peuple d'Élite) */}
      <div ref={visionRef}>
        <PeupleElite />
      </div>

      {/* Section Divider */}
      <div className="section-divider px-4">
        <span className="text-or-excellence text-2xl">⚜️</span>
      </div>

      {/* Timeline (Histoire) */}
      <div ref={histoireRef}>
        <FriseChronologique />
      </div>

      {/* Section Divider */}
      <div className="section-divider px-4">
        <span className="text-or-excellence text-2xl">⚜️</span>
      </div>

      {/* Portraits d'Excellence */}
      <div ref={portraitsRef}>
        <Portraits />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}

