import React from 'react'
import Image from 'next/image'
import { Metadata } from 'next'
import { FiHome, FiBriefcase, FiTool, FiUser, FiEye, FiMonitor, FiWifi, FiShield } from 'react-icons/fi'
import Card from '@/components/Card'
import CTAButton from '@/components/CTAButton'

export const metadata: Metadata = {
  title: 'Solutions de Sécurité - Securicam | Résidentiel, Commercial, Industriel',
  description: 'Solutions de vidéosurveillance adaptées : résidentiel, commercial, industriel. Caméras 4K, vision nocturne, détection intelligente.',
  keywords: 'solutions sécurité résidentiel, vidéosurveillance commercial, caméras industriel, sécurité particulier',
}

export default function SolutionsPage() {
  const solutions = [
    {
      icon: <FiHome size={48} />,
      title: 'Résidentiel',
      subtitle: 'Pour votre domicile',
      description: 'Protégez votre famille et vos biens avec nos solutions de vidéosurveillance résidentielles adaptées aux particuliers.',
      features: [
        'Caméras extérieures résistantes aux intempéries',
        'Vision nocturne infrarouge',
        'Détection de mouvement intelligente',
        'Application mobile pour surveillance à distance',
        'Stockage local et cloud sécurisé',
        'Installation discrète et esthétique',
      ],
      technologies: [
        'Caméras 4K Ultra HD',
        'Vision nocturne jusqu\'à 30m',
        'Détection PIR avancée',
        'Accès mobile iOS/Android',
      ],
      price: 'À partir de 599€',
      imageUrl: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&h=400&fit=crop&crop=center',
      imageAlt: 'Caméra de sécurité résidentielle'
    },
    {
      icon: <FiBriefcase size={48} />,
      title: 'Commercial',
      subtitle: 'Pour votre entreprise',
      description: 'Sécurisez vos locaux commerciaux, bureaux et points de vente avec nos systèmes professionnels haute performance.',
      features: [
        'Système multi-caméras évolutif',
        'Enregistrement haute résolution 24h/24',
        'Gestion des accès intégrée',
        'Surveillance temps réel depuis plusieurs postes',
        'Analyses comportementales avancées',
        'Intégration avec systèmes d\'alarme existants',
      ],
      technologies: [
        'Caméras IP professionnelles',
        'Serveur NVR redondant',
        'Analytics IA intégrées',
        'Interface web multi-utilisateurs',
      ],
      price: 'À partir de 1299€',
      imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop&crop=center',
      imageAlt: 'Système de sécurité commercial'
    },
    {
      icon: <FiTool size={48} />,
      title: 'Industriel',
      subtitle: 'Pour vos sites industriels',
      description: 'Solutions robustes pour environnements industriels exigeants : usines, entrepôts, chantiers et zones sensibles.',
      features: [
        'Caméras anti-vandalisme renforcées',
        'Résistance aux conditions extrêmes',
        'Couverture de grandes surfaces',
        'Intégration systèmes de contrôle industriel',
        'Redondance et haute disponibilité',
        'Conformité aux normes industrielles',
      ],
      technologies: [
        'Caméras certifiées IP67/IP68',
        'Vision thermique disponible',
        'Protocoles industriels (Modbus, etc.)',
        'Architecture réseau sécurisée',
      ],
      price: 'Sur devis',
      imageUrl: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop&crop=center',
      imageAlt: 'Surveillance industrielle'
    },
    {
      icon: <FiUser size={48} />,
      title: 'Particulier',
      subtitle: 'Solutions personnalisées',
      description: 'Solutions sur-mesure pour besoins spécifiques : surveillance de personnes âgées, garde d\'animaux, ou projets particuliers.',
      features: [
        'Étude personnalisée de vos besoins',
        'Équipements adaptés à votre usage',
        'Formation complète incluse',
        'Support technique dédié',
        'Évolutivité selon vos besoins',
        'Budget maîtrisé',
      ],
      technologies: [
        'Sélection équipements sur-mesure',
        'Configuration optimisée',
        'Interface simplifiée',
        'Support prioritaire',
      ],
      price: 'À partir de 399€',
      imageUrl: '/images/videosurveillance.jpg',
      imageAlt: 'Solution personnalisée'
    },
  ]

  const technologies = [
    {
      icon: <FiEye size={32} />,
      title: 'Vision Nocturne',
      description: 'Surveillance efficace 24h/24 grâce à la technologie infrarouge avancée.',
    },
    {
      icon: <FiMonitor size={32} />,
      title: 'Caméras 4K',
      description: 'Qualité d\'image exceptionnelle pour identifier clairement les détails.',
    },
    {
      icon: <FiWifi size={32} />,
      title: 'Connectivité',
      description: 'Accès à distance via internet, WiFi ou réseau mobile.',
    },
    {
      icon: <FiShield size={32} />,
      title: 'Détection IA',
      description: 'Intelligence artificielle pour détecter et alerter en temps réel.',
    },
  ]

  const benefits = [
    {
      title: 'Dissuasion',
      description: 'La présence visible de caméras dissuade les actes malveillants et réduit significativement les risques.',
    },
    {
      title: 'Preuve légale',
      description: 'Enregistrements haute qualité utilisables comme preuves en cas d\'incident ou de procédure judiciaire.',
    },
    {
      title: 'Surveillance à distance',
      description: 'Monitoring en temps réel depuis n\'importe où via smartphone, tablette ou ordinateur.',
    },
    {
      title: 'Économies d\'assurance',
      description: 'Réduction des primes d\'assurance grâce à l\'amélioration de la sécurité de vos biens.',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Solutions de Vidéosurveillance
            </h1>
            <p className="text-xl lg:text-2xl text-primary-100 max-w-4xl mx-auto">
              Des solutions adaptées à chaque environnement : résidentiel, commercial, industriel. 
              Technologie de pointe et expertise professionnelle.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nos Solutions par Environnement
            </h2>
            <p className="text-xl text-gray-600">
              Chaque environnement a ses spécificités, nous avons la solution adaptée
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                {/* Header */}
                <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white p-8">
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      {solution.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{solution.title}</h3>
                      <p className="text-primary-100">{solution.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-primary-50">{solution.description}</p>
                </div>

                {/* Image */}
                <div className="h-48 overflow-hidden">
                  <Image 
                    src={solution.imageUrl!}
                    alt={solution.imageAlt}
                    width={600}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Fonctionnalités incluses</h4>
                    <ul className="grid grid-cols-1 gap-2">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary-500 mr-2">•</span>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {solution.technologies.map((tech, idx) => (
                        <div key={idx} className="bg-gray-50 rounded-lg p-3">
                          <span className="text-sm text-gray-700">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold text-primary-600">
                      {solution.price}
                    </div>
                    <CTAButton href="/devis">
                      Demander un devis
                    </CTAButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Technologies de Pointe
            </h2>
            <p className="text-xl text-gray-600">
              Les dernières innovations au service de votre sécurité
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <Card
                key={index}
                title={tech.title}
                description={tech.description}
                icon={tech.icon}
                className="hover:shadow-2xl"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Pourquoi Choisir nos Solutions ?
            </h2>
            <p className="text-xl text-gray-600">
              Des avantages concrets pour votre sécurité et votre tranquillité
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Quelle Solution pour Votre Projet ?
          </h2>
          <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
            Nos experts analysent vos besoins et vous proposent la solution 
            la plus adaptée à votre environnement et votre budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/devis" size="lg">
              Étude gratuite personnalisée
            </CTAButton>
            <CTAButton href="/contact" variant="secondary" size="lg">
              Prendre rendez-vous
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  )
}