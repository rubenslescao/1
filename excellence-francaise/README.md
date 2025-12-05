# 🇫🇷 L'Excellence Française

> *"De la Révolution qui a changé le monde aux innovations qui le façonnent aujourd'hui, la France porte depuis des siècles les valeurs universelles et l'excellence qui inspirent l'humanité."*

Un journal en ligne moderne dédié exclusivement à la célébration des succès, innovations et du rayonnement de la France et du peuple français.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38B2AC)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-3178C6)

## ✨ Fonctionnalités

### 🎨 Design & Interface
- **Hero Banner élégant** avec animation et schéma de couleurs Bleu-Blanc-Rouge subtil
- **Citations inspirantes** de grandes figures françaises (De Gaulle, Bonaparte, Hugo)
- **Navigation fluide** avec indicateur de section active
- **Design responsive** optimisé pour tous les appareils
- **Animations sophistiquées** pour une expérience utilisateur premium

### 📰 Fil d'Actualités
Système de filtrage par 8 catégories d'excellence :
- 🔬 **Science & Recherche** - Avancées du CEA, CNRS, Institut Pasteur
- 🚀 **Tech & Innovation** - French Tech, licornes françaises
- 📈 **Business & Économie** - LVMH, Hermès, succès entrepreneuriaux
- 🏅 **Sport & Performance** - Champions olympiques et mondiaux
- 🌾 **Agriculture & Terroir** - Vins, fromages, gastronomie
- 🎨 **Culture & Création** - Musées, cinéma, art de vivre
- 🛡️ **Défense & Aérospatiale** - Airbus, Arianespace, Dassault
- 🛠️ **Artisanat & Savoir-faire** - Haute couture, cristallerie, métiers d'art

### 📜 Sections Spéciales
- **"Pourquoi un Peuple d'Élite ?"** - Texte structuré sur l'excellence française
- **Frise de l'Excellence** - Timeline interactive des jalons historiques français
- **Portraits d'Excellence** - Personnalités qui font rayonner la France

### 🛡️ Protocole Anti-Hallucination
Chaque article inclut une balise `[Source: X]` simulant une vérification journalistique rigoureuse.

## 🚀 Installation

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Étapes

```bash
# 1. Naviguer dans le dossier du projet
cd excellence-francaise

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev

# 4. Ouvrir dans le navigateur
# http://localhost:3000
```

## 📁 Structure du Projet

```
excellence-francaise/
├── src/
│   ├── app/
│   │   ├── globals.css      # Styles globaux et Tailwind
│   │   ├── layout.tsx       # Layout principal avec métadonnées
│   │   └── page.tsx         # Page d'accueil
│   ├── components/
│   │   ├── Header.tsx       # Navigation principale
│   │   ├── HeroBanner.tsx   # Bannière héro animée
│   │   ├── QuotesSection.tsx # Cartes de citations
│   │   ├── PeupleElite.tsx  # Section "Notre Vision"
│   │   ├── NewsFeed.tsx     # Fil d'actualités filtrable
│   │   ├── Timeline.tsx     # Frise chronologique
│   │   ├── Portraits.tsx    # Galerie de portraits
│   │   └── Footer.tsx       # Pied de page
│   └── data/
│       └── mockData.ts      # Données mock (24+ articles)
├── tailwind.config.ts       # Configuration Tailwind personnalisée
├── package.json
└── README.md
```

## 🎨 Palette de Couleurs

| Couleur | Hex | Usage |
|---------|-----|-------|
| Bleu France | `#002395` | Accents primaires |
| Rouge France | `#ED2939` | Accents secondaires |
| Or Excellence | `#D4AF37` | Éléments premium |
| Gris Noble | `#1a1a2e` | Fond principal |
| Ivoire | `#FFFFF0` | Texte principal |

## 📊 Données Mock

Le projet inclut **27 articles** de démonstration :
- 3 articles par catégorie (24 articles contemporains)
- 3 articles historiques (1789, 1895, 1903)
- Sources simulées : CNRS, CEA, Le Monde, AFP, etc.

## 🔧 Scripts Disponibles

```bash
npm run dev      # Serveur de développement
npm run build    # Build de production
npm run start    # Lancer la production
npm run lint     # Vérification ESLint
```

## 🌐 Technologies

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS 3.4
- **Langage:** TypeScript 5.3
- **Animations:** Framer Motion
- **Icônes:** Lucide React

## 📱 Responsive Design

Le site est entièrement responsive avec des breakpoints :
- Mobile : < 768px
- Tablette : 768px - 1024px  
- Desktop : > 1024px

## 🇫🇷 Philosophie Éditoriale

> **Ton :** Nationaliste positif, assertif, factuellement rigoureux, journalistique
>
> **Contrainte majeure :** Exclusion stricte de toute actualité politique ou sociétale non essentielle. Focus uniquement sur les réalisations vérifiables dans les domaines : Tech, Science, Sport, Culture, etc.

---

*Fait avec fierté en France* 🇫🇷

© 2024 L'Excellence Française

