import React from 'react'
import Image from 'next/image'
import { Metadata } from 'next'
import { FiShield, FiSettings, FiEye, FiUsers, FiTool, FiMonitor, FiClock, FiCheckCircle } from 'react-icons/fi'
import Card from '@/components/Card'
import CTAButton from '@/components/CTAButton'

export const metadata: Metadata = {
  title: 'Nos Services - Securicam | Installation et Maintenance de Caméras',
  description: 'Découvrez nos services complets : installation de caméras de sécurité, maintenance, surveillance à distance et formation. Devis gratuit.',
  keywords: 'installation caméras, maintenance vidéosurveillance, surveillance distance, formation sécurité',
}

export default function ServicesPage() {
  const mainServices = [
    {
      icon: <FiShield size={40} />,
      title: 'Installation de Caméras',
      description: 'Installation professionnelle de systèmes de vidéosurveillance adaptés à vos besoins spécifiques.',
      features: [
        'Étude technique personnalisée',
        'Installation par des techniciens certifiés',
        'Configuration complète du système',
        'Test de fonctionnement',
        'Formation à l\'utilisation',
      ],
      price: 'À partir de 299€'
    },
    {
      icon: <FiSettings size={40} />,
      title: 'Maintenance et Réparation',
      description: 'Service de maintenance préventive et corrective pour garantir la performance optimale de votre système.',
      features: [
        'Maintenance préventive trimestrielle',
        'Nettoyage des optiques',
        'Mise à jour des firmwares',
        'Diagnostic complet',
        'Réparation 24h/48h',
      ],
      price: 'À partir de 89€/intervention'
    },
    {
      icon: <FiEye size={40} />,
      title: 'Surveillance à Distance',
      description: 'Surveillance professionnelle 24h/24 et 7j/7 par nos équipes spécialisées dans nos centres de contrôle.',
      features: [
        'Surveillance 24h/24 - 7j/7',
        'Détection d\'intrusion en temps réel',
        'Intervention rapide des forces de l\'ordre',
        'Rapports mensuels détaillés',
        'Application mobile incluse',
      ],
      price: 'À partir de 49€/mois'
    },
  ]

  const additionalServices = [
    {
      icon: <FiUsers size={32} />,
      title: 'Formation Utilisateur',
      description: 'Formation complète à l\'utilisation de votre système de vidéosurveillance.',
    },
    {
      icon: <FiTool size={32} />,
      title: 'Audit Sécurité',
      description: 'Évaluation complète de vos besoins en sécurité et recommandations.',
    },
    {
      icon: <FiMonitor size={32} />,
      title: 'Monitoring Système',
      description: 'Surveillance proactive de l\'état de votre système de sécurité.',
    },
    {
      icon: <FiClock size={32} />,
      title: 'Intervention d\'Urgence',
      description: 'Service d\'intervention rapide en cas de panne ou dysfonctionnement.',
    },
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Évaluation des Besoins',
      description: 'Analyse de vos besoins et visite technique pour évaluer votre environnement.',
    },
    {
      step: '02',
      title: 'Proposition Sur-Mesure',
      description: 'Élaboration d\'une solution personnalisée avec devis détaillé gratuit.',
    },
    {
      step: '03',
      title: 'Installation Professionnelle',
      description: 'Installation par nos techniciens certifiés avec matériel de haute qualité.',
    },
    {
      step: '04',
      title: 'Formation et Suivi',
      description: 'Formation complète et suivi personnalisé pour optimiser votre sécurité.',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Nos Services de Sécurité
              </h1>
              <p className="text-xl lg:text-2xl text-primary-100">
                Des solutions complètes pour tous vos besoins en vidéosurveillance, 
                de l\'installation à la maintenance en passant par la surveillance à distance.
              </p>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <Image 
                  src="/images/installation.jpg"
                  alt="Équipe technique Securicam en intervention"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Services Principaux
            </h2>
            <p className="text-xl text-gray-600">
              Une expertise complète pour votre sécurité
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mx-auto mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-primary-600 mb-6">{service.price}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <FiCheckCircle className="text-primary-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <CTAButton href="/devis" className="w-full">
                  Demander un devis
                </CTAButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Notre Processus
            </h2>
            <p className="text-xl text-gray-600">
              Une approche méthodique pour votre projet de sécurité
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Matériel de Pointe
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Nous utilisons exclusivement des équipements de dernière génération 
                pour garantir la meilleure qualité d'image et une fiabilité maximale.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <FiCheckCircle className="text-green-500 mr-3" />
                  <span>Caméras 4K Ultra HD</span>
                </li>
                <li className="flex items-center">
                  <FiCheckCircle className="text-green-500 mr-3" />
                  <span>Vision nocturne infrarouge</span>
                </li>
                <li className="flex items-center">
                  <FiCheckCircle className="text-green-500 mr-3" />
                  <span>Détection intelligente IA</span>
                </li>
                <li className="flex items-center">
                  <FiCheckCircle className="text-green-500 mr-3" />
                  <span>Stockage cloud sécurisé</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <Image 
                src="/images/visionnocturne.webp"
                alt="Équipements de surveillance moderne"
                width={600}
                height={500}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Services Complémentaires
            </h2>
            <p className="text-xl text-gray-600">
              Des services additionnels pour optimiser votre sécurité
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <Card
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                className="hover:shadow-2xl"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Besoin d\'un conseil personnalisé ?
          </h2>
          <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
            Nos experts sont à votre disposition pour étudier votre projet 
            et vous proposer la solution la plus adaptée.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/devis" size="lg">
              Demander un devis gratuit
            </CTAButton>
            <CTAButton href="/contact" variant="secondary" size="lg">
              Nous contacter
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  )
}