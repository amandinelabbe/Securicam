# Instructions pour GitHub Copilot - Securicam

## Contexte du Projet
Site web complet pour Securicam, entreprise d'installation de caméras de sécurité.

## Technologies Utilisées
- **Framework:** Next.js 15 avec App Router
- **Langage:** TypeScript
- **Styles:** Tailwind CSS
- **Icônes:** React Icons (Feather Icons)
- **Déploiement:** Vercel (recommandé)

## Architecture
```
securicam/
├── app/                    # Pages avec App Router
│   ├── page.tsx           # Accueil
│   ├── services/          # Services
│   ├── solutions/         # Solutions
│   ├── temoignages/       # Témoignages
│   ├── a-propos/          # À propos
│   ├── contact/           # Contact
│   ├── devis/             # Devis
│   └── layout.tsx         # Layout principal
├── components/            # Composants réutilisables
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── CTAButton.tsx
│   ├── Card.tsx
│   ├── FormField.tsx
│   ├── ContactForm.tsx
│   ├── DevisForm.tsx
│   └── TestimonialsCarousel.tsx
├── public/               # Assets statiques
└── styles/              # Styles globaux
```

## Palette de Couleurs
- **Primaire:** Bleus (#1e40af, #2563eb, #3b82f6)
- **Secondaire:** Grays (#374151, #6b7280, #9ca3af)
- **Accent:** Vert (#10b981), Rouge (#ef4444)

## Fonctionnalités Implémentées
- ✅ Site multilingue (français)
- ✅ Responsive design
- ✅ SEO optimisé
- ✅ Formulaires avec validation
- ✅ Carousel de témoignages
- ✅ Formulaire de devis multi-étapes
- ✅ Navigation mobile
- ✅ Accessibilité WCAG

## Commandes de Développement
- `npm run dev` - Serveur de développement
- `npm run build` - Build de production
- `npm run start` - Serveur de production
- `npm run lint` - Vérification du code

## Pages Principales
1. **Accueil** (`/`) - Hero, services, témoignages
2. **Services** (`/services`) - Installation, maintenance, surveillance
3. **Solutions** (`/solutions`) - Résidentiel, commercial, industriel
4. **Témoignages** (`/temoignages`) - Avis clients avec carousel
5. **À Propos** (`/a-propos`) - Histoire, équipe, valeurs
6. **Contact** (`/contact`) - Formulaire et informations
7. **Devis** (`/devis`) - Formulaire détaillé multi-étapes

## Bonnes Pratiques
- Utiliser TypeScript strict
- Composants réutilisables avec props typées
- Optimisation des images avec Next.js Image
- Métadonnées SEO sur chaque page
- Navigation accessible avec ARIA labels
- Validation côté client et serveur