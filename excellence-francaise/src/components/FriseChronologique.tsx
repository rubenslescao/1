'use client';

import React, { useState, useRef } from 'react';

interface Event {
  id: number;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  emoji: string;
  impact: string;
}

type TabKey = 'victoires' | 'innovations' | 'francais' | 'sport';

const FriseChronologique = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('victoires');
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const tabs: { key: TabKey; label: string; emoji: string; color: string; bgColor: string }[] = [
    { key: 'victoires', label: 'Victoires', emoji: '⚔️', color: 'text-red-500', bgColor: 'bg-red-600' },
    { key: 'innovations', label: 'Innovations', emoji: '💡', color: 'text-cyan-400', bgColor: 'bg-cyan-500' },
    { key: 'francais', label: 'Grands Français', emoji: '🏆', color: 'text-or-excellence', bgColor: 'bg-or-excellence' },
    { key: 'sport', label: 'Sport', emoji: '⚽', color: 'text-green-500', bgColor: 'bg-green-500' },
  ];

  // ========== VICTOIRES MILITAIRES ==========
  const victoiresEvents: Event[] = [
    { id: 1, year: "481", title: "Clovis unifie les Francs", subtitle: "Naissance du Royaume", description: "Clovis Ier unifie les tribus franques et fonde le Royaume de France. Baptême à Reims.", emoji: "👑", impact: "Fondation de la France" },
    { id: 2, year: "732", title: "Bataille de Poitiers", subtitle: "Charles Martel", description: "Charles Martel stoppe l'avancée arabe en Europe. Victoire décisive qui sauve la chrétienté occidentale.", emoji: "⚔️", impact: "Europe sauvée" },
    { id: 3, year: "800", title: "Charlemagne Empereur", subtitle: "Sacré à Rome", description: "Charlemagne couronné Empereur d'Occident. Plus grand empire européen depuis Rome.", emoji: "👑", impact: "Empire d'Occident" },
    { id: 4, year: "1214", title: "Bataille de Bouvines", subtitle: "Philippe Auguste", description: "Victoire écrasante contre l'Angleterre, l'Allemagne et la Flandre réunies. France première puissance.", emoji: "⚔️", impact: "Suprématie européenne" },
    { id: 5, year: "1429", title: "Libération d'Orléans", subtitle: "Jeanne d'Arc", description: "À 17 ans, Jeanne libère Orléans assiégée et renverse le cours de la guerre.", emoji: "🗡️", impact: "Héroïne nationale" },
    { id: 6, year: "1453", title: "Bataille de Castillon", subtitle: "Fin Guerre 100 Ans", description: "Victoire finale contre l'Angleterre. Les Anglais chassés de France après 116 ans.", emoji: "⚔️", impact: "France libérée" },
    { id: 7, year: "1515", title: "Bataille de Marignan", subtitle: "François Ier", description: "Victoire légendaire contre les Suisses réputés invincibles. 'François Ier vainqueur à Marignan'.", emoji: "⚔️", impact: "Victoire légendaire" },
    { id: 8, year: "1643", title: "Bataille de Rocroi", subtitle: "Duc d'Enghien", description: "Destruction des Tercios espagnols invincibles. Fin de la suprématie militaire espagnole.", emoji: "⚔️", impact: "Fin hégémonie espagnole" },
    { id: 9, year: "1792", title: "Bataille de Valmy", subtitle: "Victoire de la République", description: "'De ce lieu date une nouvelle époque de l'histoire du monde' - Goethe.", emoji: "⚔️", impact: "République victorieuse" },
    { id: 10, year: "1800", title: "Bataille de Marengo", subtitle: "Napoléon en Italie", description: "Victoire décisive de Napoléon qui assure son pouvoir et la paix avec l'Autriche.", emoji: "⚔️", impact: "Napoléon au pouvoir" },
    { id: 11, year: "1805", title: "Bataille d'Austerlitz", subtitle: "Soleil d'Austerlitz", description: "Chef-d'œuvre tactique de Napoléon. Victoire contre Russie + Autriche. La plus belle bataille.", emoji: "☀️", impact: "Génie militaire" },
    { id: 12, year: "1806", title: "Bataille d'Iéna", subtitle: "Destruction Prusse", description: "Napoléon écrase l'armée prussienne en une journée. La Prusse capitule en 19 jours.", emoji: "⚔️", impact: "Prusse anéantie" },
    { id: 13, year: "1807", title: "Bataille de Friedland", subtitle: "Victoire sur la Russie", description: "Victoire décisive qui force le Tsar à signer la paix de Tilsit.", emoji: "⚔️", impact: "Europe dominée" },
    { id: 14, year: "1809", title: "Bataille de Wagram", subtitle: "Plus grande bataille", description: "300 000 hommes engagés. Victoire décisive contre l'Autriche. Apogée de l'Empire.", emoji: "⚔️", impact: "Apogée de l'Empire" },
    { id: 15, year: "1830", title: "Prise d'Alger", subtitle: "Début Empire colonial", description: "Conquête d'Alger. Début de l'empire colonial français en Afrique.", emoji: "⚔️", impact: "Empire colonial" },
    { id: 16, year: "1859", title: "Bataille de Solférino", subtitle: "Victoire en Italie", description: "Victoire française et sarde contre l'Autriche. Libération de l'Italie du Nord.", emoji: "⚔️", impact: "Italie libérée" },
    { id: 17, year: "1914", title: "Bataille de la Marne", subtitle: "Miracle de la Marne", description: "La France stoppe l'invasion allemande aux portes de Paris. 'Ils ne passeront pas!'", emoji: "🚕", impact: "Paris sauvé" },
    { id: 18, year: "1916", title: "Verdun", subtitle: "On ne passe pas!", description: "10 mois de résistance héroïque. 700 000 morts. Symbole du courage français.", emoji: "🎖️", impact: "Résistance légendaire" },
    { id: 19, year: "1918", title: "Offensive des 100 jours", subtitle: "Victoire finale", description: "Foch commande les Alliés. Offensive victorieuse qui mène à l'Armistice.", emoji: "⚔️", impact: "Victoire finale" },
    { id: 20, year: "1918", title: "Armistice 11 Novembre", subtitle: "Victoire 14-18", description: "La France victorieuse. Alsace-Lorraine retrouvée. 1,4 million de morts pour la liberté.", emoji: "🏆", impact: "Victoire totale" },
    { id: 21, year: "1940", title: "Appel du 18 Juin", subtitle: "De Gaulle - Résistance", description: "'La France a perdu une bataille, mais n'a pas perdu la guerre!' Naissance France Libre.", emoji: "🇫🇷", impact: "Résistance" },
    { id: 22, year: "1942", title: "Bir Hakeim", subtitle: "Général Koenig", description: "3 700 Français résistent 16 jours contre Rommel. L'honneur de la France restauré.", emoji: "⚔️", impact: "Honneur restauré" },
    { id: 23, year: "1944", title: "Débarquement Provence", subtitle: "Armée française", description: "250 000 soldats français débarquent. Libération du Sud de la France.", emoji: "🚢", impact: "France libératrice" },
    { id: 24, year: "1944", title: "Libération de Paris", subtitle: "Général Leclerc", description: "25 août. 2ème DB libère Paris. De Gaulle descend les Champs-Élysées.", emoji: "🗽", impact: "Paris libéré" },
    { id: 25, year: "1945", title: "Capitulation Allemagne", subtitle: "8 Mai - Victoire", description: "La France parmi les vainqueurs. Siège permanent au Conseil de Sécurité ONU.", emoji: "🏆", impact: "France victorieuse" },
    { id: 26, year: "1945", title: "Rhin franchi", subtitle: "De Lattre", description: "L'armée française franchit le Rhin et pénètre en Allemagne.", emoji: "⚔️", impact: "Allemagne envahie" },
  ];

  // ========== INNOVATIONS & INVENTIONS ==========
  const innovationsEvents: Event[] = [
    { id: 1, year: "1163", title: "Notre-Dame de Paris", subtitle: "Architecture gothique", description: "Innovation architecturale révolutionnaire : arcs-boutants, rosaces, vitraux. 200 ans de travaux.", emoji: "⛪", impact: "Révolution architecturale" },
    { id: 2, year: "1539", title: "Ordonnance Villers-Cotterêts", subtitle: "Français officiel", description: "François Ier impose le français. Création de l'état civil. Base administrative moderne.", emoji: "📜", impact: "Unification linguistique" },
    { id: 3, year: "1635", title: "Académie Française", subtitle: "Richelieu", description: "Création pour normaliser la langue française. 40 Immortels. Dictionnaire officiel.", emoji: "📚", impact: "Gardienne de la langue" },
    { id: 4, year: "1642", title: "Pascaline", subtitle: "Blaise Pascal", description: "Première machine à calculer mécanique. Ancêtre de l'ordinateur.", emoji: "🔢", impact: "Ancêtre ordinateur" },
    { id: 5, year: "1682", title: "Château de Versailles", subtitle: "Louis XIV", description: "Plus grand palais du monde. 2300 pièces. Centre culturel de l'Europe.", emoji: "✨", impact: "Rayonnement mondial" },
    { id: 6, year: "1751", title: "L'Encyclopédie", subtitle: "Diderot & D'Alembert", description: "Première encyclopédie moderne. 72 000 articles, 17 volumes. Révolution du savoir.", emoji: "📖", impact: "Siècle des Lumières" },
    { id: 7, year: "1783", title: "Montgolfière", subtitle: "Frères Montgolfier", description: "PREMIER VOL HUMAIN de l'histoire ! L'humanité quitte le sol. Naissance de l'aéronautique.", emoji: "🎈", impact: "Conquête des airs" },
    { id: 8, year: "1789", title: "Droits de l'Homme", subtitle: "Déclaration universelle", description: "Déclaration des Droits de l'Homme et du Citoyen. Inspire toutes les démocraties.", emoji: "📜", impact: "Impact mondial" },
    { id: 9, year: "1795", title: "Système Métrique", subtitle: "Convention Nationale", description: "Création du mètre, kilogramme, litre. Adopté par 95% du monde aujourd'hui.", emoji: "📏", impact: "Standard mondial" },
    { id: 10, year: "1801", title: "Métier Jacquard", subtitle: "Joseph Jacquard", description: "Métier à tisser programmable par cartes perforées. Ancêtre de l'informatique.", emoji: "🧵", impact: "Pré-informatique" },
    { id: 11, year: "1804", title: "Code Civil", subtitle: "Code Napoléon", description: "Fondement du droit moderne. Exporté dans 70+ pays. Base juridique mondiale.", emoji: "⚖️", impact: "Base du droit" },
    { id: 12, year: "1816", title: "Stéthoscope", subtitle: "René Laennec", description: "Invention du stéthoscope. Révolution du diagnostic médical.", emoji: "🩺", impact: "Médecine moderne" },
    { id: 13, year: "1826", title: "Photographie", subtitle: "Nicéphore Niépce", description: "PREMIÈRE PHOTO de l'histoire ! Révolution de l'image et de la mémoire.", emoji: "📷", impact: "Invention majeure" },
    { id: 14, year: "1829", title: "Écriture Braille", subtitle: "Louis Braille", description: "Système de lecture pour aveugles. Utilisé dans le monde entier.", emoji: "📕", impact: "Accessibilité universelle" },
    { id: 15, year: "1854", title: "Pasteurisation", subtitle: "Louis Pasteur", description: "Découverte des microbes et de la pasteurisation. Sauve des millions de vies.", emoji: "🔬", impact: "Révolution sanitaire" },
    { id: 16, year: "1860", title: "Moteur à combustion", subtitle: "Étienne Lenoir", description: "Premier moteur à combustion interne fonctionnel. Base de l'automobile.", emoji: "⚙️", impact: "Révolution industrielle" },
    { id: 17, year: "1863", title: "Métro parisien", subtitle: "Projet Haussmann", description: "Premiers plans du métro. Inauguré en 1900, révolutionne le transport urbain.", emoji: "🚇", impact: "Transport urbain" },
    { id: 18, year: "1869", title: "Canal de Suez", subtitle: "Ferdinand de Lesseps", description: "Exploit d'ingénierie française. 164km. Connecte Méditerranée et mer Rouge.", emoji: "🚢", impact: "Commerce mondial" },
    { id: 19, year: "1877", title: "Congélation industrielle", subtitle: "Charles Tellier", description: "Invention du transport frigorifique. Révolutionne l'alimentation mondiale.", emoji: "❄️", impact: "Conservation" },
    { id: 20, year: "1885", title: "Vaccin contre la rage", subtitle: "Louis Pasteur", description: "Premier vaccin moderne. Joseph Meister sauvé. Début vaccination de masse.", emoji: "💉", impact: "Millions de vies" },
    { id: 21, year: "1889", title: "Tour Eiffel", subtitle: "Gustave Eiffel", description: "324m. Plus haute structure du monde pendant 40 ans. 7M visiteurs/an.", emoji: "🗼", impact: "Icône mondiale" },
    { id: 22, year: "1895", title: "Cinéma", subtitle: "Frères Lumière", description: "INVENTION DU CINÉMA ! 28 décembre, première projection. Naissance du 7ème art.", emoji: "🎬", impact: "Art majeur créé" },
    { id: 23, year: "1895", title: "Rayons X médicaux", subtitle: "Antoine Béclère", description: "Pionnier de la radiologie médicale en France. Révolution du diagnostic.", emoji: "🏥", impact: "Imagerie médicale" },
    { id: 24, year: "1898", title: "Découverte Radium", subtitle: "Pierre & Marie Curie", description: "Découverte de la radioactivité. Révolution physique et médecine.", emoji: "⚛️", impact: "Révolution scientifique" },
    { id: 25, year: "1903", title: "Radioactivité", subtitle: "Henri Becquerel", description: "Prix Nobel pour la découverte de la radioactivité spontanée.", emoji: "☢️", impact: "Prix Nobel" },
    { id: 26, year: "1909", title: "Traversée de la Manche", subtitle: "Louis Blériot", description: "Premier vol au-dessus de la Manche. 37 minutes. Révolution aviation.", emoji: "✈️", impact: "Aviation moderne" },
    { id: 27, year: "1921", title: "Chanel N°5", subtitle: "Coco Chanel", description: "Parfum le plus vendu au monde. Révolution de la parfumerie de luxe.", emoji: "✨", impact: "Luxe mondial" },
    { id: 28, year: "1935", title: "Congés payés", subtitle: "Front Populaire", description: "Première loi au monde sur les congés payés. Innovation sociale majeure.", emoji: "🏖️", impact: "Innovation sociale" },
    { id: 29, year: "1955", title: "Citroën DS", subtitle: "Design révolutionnaire", description: "Voiture la plus innovante du siècle. Suspension hydropneumatique.", emoji: "🚗", impact: "Design français" },
    { id: 30, year: "1960", title: "Bombe atomique", subtitle: "Force de dissuasion", description: "La France devient puissance nucléaire. Indépendance stratégique.", emoji: "☢️", impact: "Puissance mondiale" },
    { id: 31, year: "1969", title: "Concorde", subtitle: "Supersonique", description: "Seul avion de ligne supersonique. Mach 2. Paris-New York en 3h30.", emoji: "✈️", impact: "Excellence aérospatiale" },
    { id: 32, year: "1972", title: "Airbus", subtitle: "Création consortium", description: "Création d'Airbus. Aujourd'hui n°1 mondial de l'aviation civile.", emoji: "🛫", impact: "Leader mondial" },
    { id: 33, year: "1975", title: "Ariane", subtitle: "Lanceur spatial", description: "Premier lancement Ariane. Europe spatiale. Leader mondial des lancements.", emoji: "🚀", impact: "Conquête spatiale" },
    { id: 34, year: "1981", title: "TGV", subtitle: "Record 574 km/h", description: "Train le plus rapide du monde. Révolution du transport ferroviaire.", emoji: "🚄", impact: "Record mondial" },
    { id: 35, year: "1983", title: "Carte à puce", subtitle: "Roland Moreno", description: "Invention française de la carte à puce. 8 milliards de cartes/an.", emoji: "💳", impact: "Paiement mondial" },
    { id: 36, year: "1991", title: "World Wide Web", subtitle: "CERN (Fr participation)", description: "Tim Berners-Lee au CERN. Contribution française majeure au web.", emoji: "🌐", impact: "Internet" },
    { id: 37, year: "2024", title: "Mistral AI", subtitle: "French Tech", description: "Leader européen de l'IA générative. Valorisation 6 milliards €.", emoji: "🤖", impact: "IA française" },
  ];

  // ========== GRANDS FRANÇAIS ==========
  const francaisEvents: Event[] = [
    { id: 1, year: "1431", title: "Jeanne d'Arc", subtitle: "Héroïne nationale", description: "Brûlée à 19 ans. Sainte patronne de la France. Symbole éternel du courage.", emoji: "🗡️", impact: "Sainte de France" },
    { id: 2, year: "1694", title: "Voltaire naît", subtitle: "Philosophe des Lumières", description: "Défenseur de la liberté d'expression et de la tolérance. Figure des Lumières.", emoji: "📜", impact: "Lumières" },
    { id: 3, year: "1769", title: "Napoléon naît", subtitle: "Ajaccio, Corse", description: "Naissance du futur Empereur. Génie militaire et réformateur de la France.", emoji: "👑", impact: "Destin exceptionnel" },
    { id: 4, year: "1802", title: "Victor Hugo naît", subtitle: "Géant de la littérature", description: "Les Misérables, Notre-Dame de Paris. Monument de la langue française.", emoji: "📚", impact: "Gloire littéraire" },
    { id: 5, year: "1821", title: "Napoléon meurt", subtitle: "Sainte-Hélène", description: "Mort en exil. Code Civil, lycées, préfets. A façonné la France moderne.", emoji: "👑", impact: "Légende éternelle" },
    { id: 6, year: "1840", title: "Claude Monet naît", subtitle: "Père de l'Impressionnisme", description: "Les Nymphéas, Impression Soleil Levant. A révolutionné la peinture.", emoji: "🎨", impact: "Révolution artistique" },
    { id: 7, year: "1867", title: "Marie Curie naît", subtitle: "Varsovie (naturalisée)", description: "Naissance de la future double Prix Nobel. Pionnière femme scientifique.", emoji: "🔬", impact: "Icône scientifique" },
    { id: 8, year: "1890", title: "De Gaulle naît", subtitle: "Lille", description: "Naissance du futur libérateur et fondateur de la Ve République.", emoji: "🇫🇷", impact: "Homme du siècle" },
    { id: 9, year: "1900", title: "Saint-Exupéry naît", subtitle: "Lyon", description: "Aviateur et écrivain. Le Petit Prince, œuvre la plus traduite au monde.", emoji: "✈️", impact: "Œuvre universelle" },
    { id: 10, year: "1903", title: "Marie Curie - Nobel", subtitle: "1er Nobel féminin", description: "Première femme Prix Nobel (Physique). Deuxième Nobel en 1911 (Chimie).", emoji: "🏆", impact: "Double Nobel" },
    { id: 11, year: "1915", title: "Édith Piaf naît", subtitle: "La Môme", description: "La Vie en Rose, Non je ne regrette rien. Voix éternelle de la France.", emoji: "🎤", impact: "Voix de la France" },
    { id: 12, year: "1926", title: "Paul Bocuse naît", subtitle: "Chef du Siècle", description: "3 étoiles Michelin pendant 53 ans. Monument de la gastronomie.", emoji: "👨‍🍳", impact: "Chef du Siècle" },
    { id: 13, year: "1943", title: "Le Petit Prince", subtitle: "Saint-Exupéry", description: "Publication. Livre le plus traduit au monde après la Bible (300 langues).", emoji: "📖", impact: "Chef-d'œuvre" },
    { id: 14, year: "1963", title: "Édith Piaf meurt", subtitle: "Légende éternelle", description: "47 ans. Plus de 1000 chansons. Funérailles nationales. Icône mondiale.", emoji: "🎤", impact: "Légende" },
    { id: 15, year: "1970", title: "De Gaulle meurt", subtitle: "Colombey", description: "Libérateur de la France. Fondateur Ve République. Homme providentiel.", emoji: "🇫🇷", impact: "Père de la Nation" },
    { id: 16, year: "1972", title: "Zinédine Zidane naît", subtitle: "Marseille", description: "Naissance du futur Ballon d'Or et champion du monde.", emoji: "⚽", impact: "Légende du foot" },
    { id: 17, year: "1983", title: "Découverte VIH", subtitle: "Luc Montagnier", description: "Identification du virus du SIDA. Prix Nobel 2008.", emoji: "🔬", impact: "Prix Nobel" },
    { id: 18, year: "1985", title: "Paul Bocuse Chef du Siècle", subtitle: "Gault & Millau", description: "Nommé Chef du Siècle. 3 étoiles Michelin depuis 1965.", emoji: "👨‍🍳", impact: "Chef du Siècle" },
    { id: 19, year: "1998", title: "Kylian Mbappé naît", subtitle: "Paris", description: "Naissance du futur champion du monde et star mondiale.", emoji: "⚽", impact: "Prodige" },
    { id: 20, year: "2008", title: "Marion Cotillard - Oscar", subtitle: "La Môme", description: "Oscar meilleure actrice pour le rôle d'Édith Piaf. Gloire française.", emoji: "🏆", impact: "Oscar" },
    { id: 21, year: "2012", title: "Alain Aspect - Nobel", subtitle: "Physique quantique", description: "Prix Nobel de Physique pour l'intrication quantique.", emoji: "🏆", impact: "Prix Nobel" },
    { id: 22, year: "2014", title: "Bernard Arnault N°1", subtitle: "Fortune mondiale", description: "PDG LVMH devient l'homme le plus riche du monde. Empire du luxe.", emoji: "💎", impact: "N°1 mondial" },
    { id: 23, year: "2016", title: "Thomas Pesquet - ISS", subtitle: "Astronaute", description: "Mission Proxima. Devient commandant de l'ISS en 2021.", emoji: "🚀", impact: "Commandant ISS" },
    { id: 24, year: "2020", title: "Emmanuelle Charpentier", subtitle: "Nobel Chimie", description: "Prix Nobel pour CRISPR-Cas9. Édition génomique révolutionnaire.", emoji: "🏆", impact: "Prix Nobel" },
    { id: 25, year: "2022", title: "Alain Aspect Nobel", subtitle: "Physique quantique", description: "Prix Nobel pour expériences sur l'intrication quantique.", emoji: "🏆", impact: "Prix Nobel" },
    { id: 26, year: "2024", title: "Léon Marchand", subtitle: "4 médailles d'or JO", description: "Quadruple champion olympique à Paris 2024. Nouvelle légende.", emoji: "🏅", impact: "Légende olympique" },
  ];

  // ========== SPORT ==========
  const sportEvents: Event[] = [
    { id: 1, year: "1896", title: "Premiers JO modernes", subtitle: "Participation française", description: "Athènes. La France participe aux premiers Jeux Olympiques modernes.", emoji: "🏛️", impact: "Début olympique" },
    { id: 2, year: "1900", title: "JO Paris", subtitle: "France 2ème nation", description: "Paris accueille les JO. France 2ème au classement avec 102 médailles.", emoji: "🏅", impact: "Succès olympique" },
    { id: 3, year: "1903", title: "Tour de France", subtitle: "Première édition", description: "Création par Henri Desgrange. 2428km. 6 étapes. Maurice Garin vainqueur.", emoji: "🚴", impact: "Légende née" },
    { id: 4, year: "1924", title: "JO Paris", subtitle: "Les Chariots de Feu", description: "Paris accueille les JO. France 3ème nation.", emoji: "🏅", impact: "Succès français" },
    { id: 5, year: "1958", title: "Coupe du Monde Suède", subtitle: "3ème place", description: "Just Fontaine marque 13 buts (record). France 3ème.", emoji: "⚽", impact: "Record éternel" },
    { id: 6, year: "1968", title: "JO Grenoble", subtitle: "Jean-Claude Killy", description: "Grenoble accueille les JO d'hiver. Killy triple champion olympique.", emoji: "⛷️", impact: "Triple or" },
    { id: 7, year: "1984", title: "Euro France", subtitle: "Champions d'Europe", description: "La France remporte l'Euro à domicile. Platini 9 buts.", emoji: "⚽", impact: "Champions d'Europe" },
    { id: 8, year: "1984", title: "Michel Platini", subtitle: "Ballon d'Or", description: "Troisième Ballon d'Or consécutif. Record historique.", emoji: "🏆", impact: "3x Ballon d'Or" },
    { id: 9, year: "1992", title: "Albertville", subtitle: "JO d'hiver", description: "La France accueille les JO d'hiver. 9 médailles dont 3 or.", emoji: "🎿", impact: "JO français" },
    { id: 10, year: "1993", title: "OM Champions", subtitle: "Ligue des Champions", description: "Marseille premier club français à remporter la Ligue des Champions.", emoji: "🏆", impact: "Gloire européenne" },
    { id: 11, year: "1998", title: "Coupe du Monde", subtitle: "Champions du Monde", description: "France championne du monde à domicile. Zidane 2 buts en finale. 3-0.", emoji: "🏆", impact: "Première étoile" },
    { id: 12, year: "1998", title: "Zinédine Zidane", subtitle: "Ballon d'Or", description: "Ballon d'Or après le titre mondial. Légende du football.", emoji: "⚽", impact: "Ballon d'Or" },
    { id: 13, year: "2000", title: "Euro 2000", subtitle: "Champions d'Europe", description: "La France remporte l'Euro. But en or de Trezeguet en finale.", emoji: "⚽", impact: "Doublé historique" },
    { id: 14, year: "2003", title: "Laure Manaudou", subtitle: "Natation mondiale", description: "Records du monde. Championne olympique 2004. Icône française.", emoji: "🏊", impact: "Star mondiale" },
    { id: 15, year: "2008", title: "Teddy Riner", subtitle: "1er titre mondial", description: "Champion du monde de judo à 19 ans. Début d'une légende.", emoji: "🥋", impact: "Début légende" },
    { id: 16, year: "2012", title: "Teddy Riner", subtitle: "Champion olympique", description: "Médaille d'or aux JO de Londres. Invincible pendant 10 ans.", emoji: "🥇", impact: "Légende judo" },
    { id: 17, year: "2016", title: "Euro France", subtitle: "Finale", description: "La France en finale de l'Euro à domicile. Défaite 1-0 Portugal.", emoji: "⚽", impact: "Finale" },
    { id: 18, year: "2017", title: "Renaud Lavillenie", subtitle: "Record du monde", description: "Record du monde de saut à la perche : 6,16m. Légende française.", emoji: "🏃", impact: "Record mondial" },
    { id: 19, year: "2018", title: "Coupe du Monde", subtitle: "2ème Étoile", description: "France championne du monde en Russie. Mbappé 19 ans, 4 buts.", emoji: "⭐", impact: "Deuxième étoile" },
    { id: 20, year: "2020", title: "Clarisse Agbégnénou", subtitle: "Championne olympique", description: "Médaille d'or en judo aux JO de Tokyo. 5x championne du monde.", emoji: "🥋", impact: "Légende judo" },
    { id: 21, year: "2021", title: "Tony Parker HOF", subtitle: "Hall of Fame NBA", description: "Premier Français au Hall of Fame NBA. 4x champion NBA.", emoji: "🏀", impact: "Légende NBA" },
    { id: 22, year: "2022", title: "Coupe du Monde", subtitle: "Finale épique", description: "Finale historique contre l'Argentine. Mbappé triplé. Défaite aux tirs.", emoji: "⚽", impact: "Finale historique" },
    { id: 23, year: "2023", title: "Victor Wembanyama", subtitle: "N°1 Draft NBA", description: "Premier choix de la Draft NBA. 2,24m. Futur de la NBA.", emoji: "🏀", impact: "Prodige mondial" },
    { id: 24, year: "2024", title: "JO Paris", subtitle: "Cérémonie sur la Seine", description: "Paris accueille les JO. Cérémonie spectaculaire sur la Seine.", emoji: "🗼", impact: "JO spectaculaires" },
    { id: 25, year: "2024", title: "Léon Marchand", subtitle: "4 médailles d'or", description: "Quadruple champion olympique en natation. Recordman du monde. Héros national.", emoji: "🥇", impact: "Légende olympique" },
    { id: 26, year: "2024", title: "France 5ème nation", subtitle: "JO Paris", description: "64 médailles dont 16 or. France 5ème nation aux JO à domicile.", emoji: "🏅", impact: "Succès historique" },
  ];

  const eventsMap: Record<TabKey, Event[]> = {
    victoires: victoiresEvents,
    innovations: innovationsEvents,
    francais: francaisEvents,
    sport: sportEvents,
  };

  const currentEvents = eventsMap[activeTab];
  const currentTab = tabs.find(t => t.key === activeTab)!;

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="histoire" className="py-20 bg-gris-noble relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-bleu-france/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-rouge-france/5 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1 rounded-full border border-or-excellence/40 font-raleway text-xs text-or-excellence uppercase tracking-[0.2em] mb-6">
            Frise Chronologique
          </span>
          <h2 className="text-4xl md:text-5xl font-cormorant text-ivoire mb-4">
            Histoire de <span className="text-bleu-france">Fra</span><span className="text-blanc-france">nce</span>
          </h2>
          <div className="w-32 h-2 mx-auto rounded-full overflow-hidden flex">
            <div className="w-1/3 h-full" style={{ backgroundColor: '#002654' }} />
            <div className="w-1/3 h-full" style={{ backgroundColor: '#FFFFFF' }} />
            <div className="w-1/3 h-full" style={{ backgroundColor: '#CE1126' }} />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => {
                setActiveTab(tab.key);
                if (scrollRef.current) scrollRef.current.scrollLeft = 0;
              }}
              className={`px-6 py-3 rounded-full font-raleway font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeTab === tab.key
                  ? `${tab.bgColor} text-white shadow-lg`
                  : 'bg-gris-medium/50 text-ivoire/70 hover:bg-gris-medium border border-or-excellence/20'
              }`}
            >
              <span className="text-xl">{tab.emoji}</span>
              <span>{tab.label}</span>
              <span className="text-xs opacity-70">({eventsMap[tab.key].length})</span>
            </button>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-4 mb-6">
          <button
            onClick={() => scroll('left')}
            className="w-10 h-10 rounded-full bg-gris-medium border border-or-excellence/30 flex items-center justify-center text-or-excellence hover:bg-or-excellence/20 transition-colors"
          >
            ←
          </button>
          <span className={`font-raleway text-sm ${currentTab.color}`}>
            {currentTab.emoji} {currentEvents.length} événements
          </span>
          <button
            onClick={() => scroll('right')}
            className="w-10 h-10 rounded-full bg-gris-medium border border-or-excellence/30 flex items-center justify-center text-or-excellence hover:bg-or-excellence/20 transition-colors"
          >
            →
          </button>
        </div>

        {/* Timeline */}
        <div 
          ref={scrollRef}
          className="overflow-x-auto pb-6 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex gap-4 min-w-max px-4">
            {currentEvents.map((event, index) => (
              <div
                key={event.id}
                onClick={() => setSelectedEvent(event)}
                className="group relative flex-shrink-0 w-52 cursor-pointer"
              >
                <div className={`bg-gris-medium/50 backdrop-blur-sm rounded-xl p-4 border border-opacity-30 ${currentTab.bgColor.replace('bg-', 'border-')}
                             hover:border-opacity-100 transition-all duration-300 hover:-translate-y-2 
                             hover:shadow-xl h-full flex flex-col`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-lg font-cormorant font-bold ${currentTab.color}`}>
                      {event.year}
                    </span>
                    <span className="text-xl">{event.emoji}</span>
                  </div>
                  <h3 className="font-cormorant text-base text-ivoire mb-1 group-hover:text-or-excellence transition-colors line-clamp-1">
                    {event.title}
                  </h3>
                  <p className="font-raleway text-xs text-ivoire/60 mb-2 line-clamp-1">
                    {event.subtitle}
                  </p>
                  <div className="flex-grow" />
                  <div className={`text-xs font-raleway ${currentTab.color} opacity-80`}>
                    {event.impact}
                  </div>
                </div>
                {index < currentEvents.length - 1 && (
                  <div className={`absolute top-1/2 -right-2 w-4 h-0.5 ${currentTab.bgColor} opacity-30`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Timeline bar */}
        <div className={`h-1.5 rounded-full mx-4 ${currentTab.bgColor} opacity-30`} />
      </div>

      {/* Modal */}
      {selectedEvent && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="bg-gris-noble rounded-2xl max-w-lg w-full border border-or-excellence/30 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`h-2 w-full ${currentTab.bgColor}`} />
            <div className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-16 h-16 ${currentTab.bgColor} rounded-xl flex items-center justify-center flex-shrink-0 text-3xl`}>
                  {selectedEvent.emoji}
                </div>
                <div className="flex-1">
                  <div className={`text-3xl font-bold font-cormorant mb-1 ${currentTab.color}`}>
                    {selectedEvent.year}
                  </div>
                  <h2 className="text-2xl font-bold text-ivoire font-cormorant">
                    {selectedEvent.title}
                  </h2>
                  <p className="text-ivoire/70 font-raleway text-sm">
                    {selectedEvent.subtitle}
                  </p>
                </div>
              </div>
              <p className="text-ivoire/80 font-spectral leading-relaxed mb-6">
                {selectedEvent.description}
              </p>
              <div className={`p-4 rounded-xl ${currentTab.bgColor} bg-opacity-20 border ${currentTab.bgColor.replace('bg-', 'border-')} border-opacity-30`}>
                <div className="text-xs text-ivoire/70 uppercase tracking-wider font-raleway mb-1">
                  Impact
                </div>
                <div className={`text-lg font-bold font-cormorant ${currentTab.color}`}>
                  {selectedEvent.impact}
                </div>
              </div>
              <button
                onClick={() => setSelectedEvent(null)}
                className={`mt-6 w-full py-3 ${currentTab.bgColor} text-white font-raleway font-semibold rounded-xl transition hover:opacity-90`}
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
};

export default FriseChronologique;
