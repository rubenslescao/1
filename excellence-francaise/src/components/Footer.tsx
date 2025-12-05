'use client';

import { CATEGORIES } from '@/data/mockData';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-gris-noble to-black pt-20 pb-8 overflow-hidden">
      {/* Tricolore top border - French Flag */}
      <div className="absolute top-0 left-0 right-0 h-2 flex">
        <div className="w-1/3 h-full" style={{ backgroundColor: '#002654' }} />
        <div className="w-1/3 h-full" style={{ backgroundColor: '#FFFFFF' }} />
        <div className="w-1/3 h-full" style={{ backgroundColor: '#CE1126' }} />
      </div>

      {/* Background decorations */}
      <div className="absolute inset-0 fleur-pattern opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Main footer content */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              {/* Logo Image */}
              <div className="relative h-20 w-auto">
                <img 
                  src="/images/logo.png" 
                  alt="L'Excellence Française" 
                  className="h-full w-auto object-contain"
                />
              </div>
            </div>
            <p className="font-spectral text-ivoire/60 text-sm leading-relaxed mb-6">
              Le journal dédié aux succès, innovations et rayonnement de la France dans le monde.
            </p>
            
            {/* Social links */}
            <div className="flex gap-4">
              {['X', 'LinkedIn', 'Instagram'].map((social) => (
                <a 
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full border border-or-excellence/30 flex items-center justify-center text-ivoire/60 hover:text-or-excellence hover:border-or-excellence transition-all duration-300"
                >
                  <span className="text-xs font-raleway">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation columns */}
          <div>
            <h4 className="font-cormorant text-lg text-or-excellence mb-4">Navigation</h4>
            <ul className="space-y-3">
              {['Actualités', 'Notre Vision', 'Portraits', 'Histoire', 'À Propos'].map((item) => (
                <li key={item}>
                  <a href="#" className="font-raleway text-sm text-ivoire/60 hover:text-or-excellence transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-cormorant text-lg text-or-excellence mb-4">Catégories</h4>
            <ul className="space-y-3">
              {CATEGORIES.slice(0, 5).map((category) => (
                <li key={category.id}>
                  <a href="#" className="font-raleway text-sm text-ivoire/60 hover:text-or-excellence transition-colors duration-300 flex items-center gap-2">
                    <span>{category.emoji}</span>
                    <span>{category.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-cormorant text-lg text-or-excellence mb-4">Newsletter</h4>
            <p className="font-spectral text-ivoire/60 text-sm mb-4">
              Recevez chaque semaine les plus belles réussites françaises.
            </p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Votre email"
                className="px-4 py-3 rounded-lg bg-gris-medium/50 border border-or-excellence/20 text-ivoire placeholder:text-ivoire/40 font-raleway text-sm focus:outline-none focus:border-or-excellence transition-colors duration-300"
              />
              <button 
                type="submit"
                className="px-4 py-3 rounded-lg bg-gradient-to-r from-or-excellence to-or-clair text-gris-noble font-raleway font-semibold text-sm hover:shadow-lg hover:shadow-or-excellence/30 transition-all duration-300"
              >
                S'abonner
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="divider-tricolore mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-raleway text-xs text-ivoire/40">
            © {new Date().getFullYear()} L'Excellence Française. Tous droits réservés.
          </p>
          
          <div className="flex items-center gap-6">
            {['Mentions légales', 'Politique de confidentialité', 'Contact'].map((item) => (
              <a 
                key={item}
                href="#"
                className="font-raleway text-xs text-ivoire/40 hover:text-or-excellence transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>

          <p className="font-spectral text-xs text-ivoire/40 italic">
            🇫🇷 Fait avec fierté en France
          </p>
        </div>
      </div>
    </footer>
  );
}

