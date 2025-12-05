import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bleu-france': '#002654',
        'bleu-clair': '#0055A4',
        'blanc-france': '#FFFFFF',
        'rouge-france': '#CE1126',
        'rouge-fonce': '#C8102E',
        'or-excellence': '#D4AF37',
        'or-clair': '#F7E7A6',
        'ivoire': '#FFFFFF',
        'gris-noble': '#0a0a14',
        'gris-medium': '#1a1a2e',
      },
      fontFamily: {
        'cormorant': ['Cormorant Garamond', 'serif'],
        'spectral': ['Spectral', 'serif'],
        'raleway': ['Raleway', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-tricolore': 'linear-gradient(135deg, #002395 0%, #FFFFFF 50%, #ED2939 100%)',
        'gradient-royal': 'linear-gradient(180deg, #1a1a2e 0%, #0f0f1a 100%)',
        'gradient-or': 'linear-gradient(135deg, #D4AF37 0%, #F7E7A6 50%, #D4AF37 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'shimmer': 'shimmer 2s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
export default config

