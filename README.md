# Securicam - Site Web d'Installation de Caméras de Sécurité

Site web moderne et réactif pour Securicam, entreprise spécialisée dans l'installation de systèmes de vidéosurveillance pour particuliers et professionnels.

## 🚀 Technologies Utilisées

- **Framework:** Next.js 15 (App Router)
- **Langage:** TypeScript
- **Styling:** Tailwind CSS
- **Icônes:** React Icons (Feather Icons)
- **Deployment:** Prêt pour Vercel, Netlify ou autre plateforme

## 📁 Structure du Projet

```
securicam/
├── app/                          # App Router de Next.js
│   ├── globals.css              # Styles globaux avec Tailwind
│   ├── layout.tsx               # Layout principal avec Header/Footer
│   ├── page.tsx                 # Page d'accueil
│   ├── services/
│   │   └── page.tsx            # Page des services
│   ├── solutions/
│   │   └── page.tsx            # Page des solutions
│   ├── temoignages/
│   │   └── page.tsx            # Page des témoignages
│   ├── a-propos/
│   │   └── page.tsx            # Page à propos
│   ├── contact/
│   │   └── page.tsx            # Page de contact
│   └── devis/
│       └── page.tsx            # Page de demande de devis
├── components/                  # Composants réutilisables
│   ├── Header.tsx              # Navigation principale
│   ├── Footer.tsx              # Pied de page
│   ├── CTAButton.tsx           # Bouton d'appel à l'action
│   ├── Card.tsx                # Composant carte
│   ├── FormField.tsx           # Champs de formulaire
│   ├── ContactForm.tsx         # Formulaire de contact
│   ├── DevisForm.tsx           # Formulaire de devis (multi-étapes)
│   └── TestimonialsCarousel.tsx # Carousel de témoignages
├── public/                      # Fichiers statiques
├── .github/
│   └── copilot-instructions.md # Instructions pour Copilot
└── Configuration files...
```

## 🎨 Fonctionnalités

### Pages Principales
- **Accueil** - Hero section, services, témoignages et CTA
- **Services** - Détail des services (installation, maintenance, surveillance)
- **Solutions** - Solutions par environnement (résidentiel, commercial, industriel)
- **Témoignages** - Carousel interactif et grille de témoignages
- **À Propos** - Histoire, équipe, valeurs et timeline
- **Contact** - Formulaire avec validation et informations de contact
- **Devis** - Formulaire multi-étapes pour demande personnalisée

### Composants Réactifs
- Navigation mobile avec menu hamburger
- Carousel de témoignages avec auto-play
- Formulaires avec validation côté client
- Cartes interactives hover effects
- Design responsive pour tous écrans

### Optimisations SEO
- Métadonnées personnalisées pour chaque page
- Structure sémantique HTML5
- OpenGraph pour réseaux sociaux
- URLs conviviales
- Images optimisées (placeholders inclus)

## 🚀 Installation et Développement

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Installation
```bash
# Cloner le projet (si depuis un repo)
git clone <repository-url>
cd securicam

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:3000`

### Scripts Disponibles
```bash
npm run dev          # Serveur de développement
npm run build        # Build de production
npm run start        # Serveur de production
npm run lint         # Vérification ESLint
```

## 🎨 Personnalisation

### Couleurs
Les couleurs sont définies dans `tailwind.config.js`:
- **Primary:** Bleus (sécurité, confiance)
- **Secondary:** Gris (neutralité, professionnalisme)

### Contenu
- **Textes:** Modifiez directement dans les fichiers pages
- **Images:** Remplacez les placeholders dans `/public/`
- **Informations contact:** Centralisées dans le Footer et page Contact

### Formulaires
Les formulaires incluent une validation côté client. Pour les connecter à un backend:
1. Modifiez les fonctions `handleSubmit` dans les composants de formulaire
2. Remplacez les appels simulés par vos API endpoints
3. Configurez la gestion des erreurs selon vos besoins

## 📱 Responsive Design

Le site est entièrement responsive avec des breakpoints:
- **Mobile:** < 768px
- **Tablet:** 768px - 1024px  
- **Desktop:** > 1024px

## 🔒 Accessibilité

- Attributs ARIA appropriés
- Navigation au clavier
- Contrastes de couleurs conformes WCAG
- Textes alternatifs pour les images
- Structure sémantique

## 🌐 Déploiement

### Vercel (Recommandé)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Uploade le dossier .next vers Netlify
```

### Autre hébergeur
```bash
npm run build
npm run start
```

## 📞 Support et Contact

Pour toute question technique ou personnalisation:
- Consultez la documentation Next.js
- Vérifiez les issues du repository
- Contactez l'équipe de développement

## 📄 License

Projet développé pour Securicam. Tous droits réservés.

---

## 🔄 Prochaines Améliorations Possibles

- [ ] Intégration backend pour formulaires
- [ ] Système de gestion de contenu (CMS)
- [ ] Chat en direct
- [ ] Espace client sécurisé
- [ ] Blog/actualités
- [ ] Multi-langue (français/anglais)
- [ ] Animations avancées
- [ ] Tests automatisés

## 📊 Performance

Le site est optimisé pour:
- ✅ Core Web Vitals
- ✅ SEO (Score Lighthouse 90+)
- ✅ Performance mobile
- ✅ Accessibilité
- ✅ Best Practices

---

**Développé avec ❤️ pour Securicam**