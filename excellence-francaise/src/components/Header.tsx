'use client';

import { useState, useEffect } from 'react';

interface HeaderProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export default function Header({ activeSection, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'actualites', label: 'Actualités' },
    { id: 'vision', label: 'Notre Vision' },
    { id: 'portraits', label: 'Portraits' },
    { id: 'histoire', label: 'Histoire' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-gris-noble/95 backdrop-blur-md shadow-xl border-b border-or-excellence/20'
          : 'bg-transparent'
      }`}
    >
      {/* Tricolore top accent - French Flag */}
      <div className="h-3 w-full flex">
        <div className="w-1/3 h-full" style={{ backgroundColor: '#002654' }} />
        <div className="w-1/3 h-full" style={{ backgroundColor: '#FFFFFF' }} />
        <div className="w-1/3 h-full" style={{ backgroundColor: '#CE1126' }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => onNavigate('hero')}
          >
            {/* Logo Image */}
            <div className="relative h-16 w-auto">
              <img 
                src="/images/logo.png" 
                alt="L'Excellence Française" 
                className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`relative px-5 py-2 font-raleway text-sm font-medium tracking-wide transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-or-excellence'
                    : 'text-ivoire/80 hover:text-ivoire'
                }`}
              >
                {item.label}
                {/* Active indicator */}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-or-excellence to-or-clair rounded-full transition-all duration-300 ${
                    activeSection === item.id ? 'w-8' : 'w-0'
                  }`}
                />
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="relative overflow-hidden px-6 py-2.5 font-raleway text-sm font-semibold text-gris-noble bg-gradient-to-r from-or-excellence to-or-clair rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-or-excellence/30 hover:scale-105 group">
              <span className="relative z-10">S'abonner</span>
              <div className="absolute inset-0 bg-gradient-to-r from-or-clair to-or-excellence opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-ivoire"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-gris-noble/98 backdrop-blur-lg border-b border-or-excellence/20 transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <nav className="flex flex-col py-4 px-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                setIsMobileMenuOpen(false);
              }}
              className={`py-3 text-left font-raleway font-medium transition-colors duration-300 ${
                activeSection === item.id
                  ? 'text-or-excellence'
                  : 'text-ivoire/80 hover:text-ivoire'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button className="mt-4 px-6 py-3 font-raleway font-semibold text-gris-noble bg-gradient-to-r from-or-excellence to-or-clair rounded-full">
            S'abonner
          </button>
        </nav>
      </div>
    </header>
  );
}

