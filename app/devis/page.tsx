import React from 'react'
import { Metadata } from 'next'
import { FiShield, FiClock, FiCheckCircle, FiUsers, FiStar } from 'react-icons/fi'
import DevisForm from '@/components/DevisForm'

export const metadata: Metadata = {
  title: 'Devis Gratuit - Securicam | Demande Personnalisée en 4 Étapes',
  description: 'Obtenez votre devis gratuit et personnalisé en 4 étapes simples. Réponse sous 24h et visite technique gratuite. Plus de 500 clients satisfaits.',
  keywords: 'devis gratuit caméras, devis sécurité, installation vidéosurveillance, prix caméras sécurité',
}

export default function DevisPage() {
  const advantages = [
    {
      icon: <FiCheckCircle size={32} />,
      title: 'Devis 100% Gratuit',
      description: 'Aucun engagement, aucun frais caché. Estimation précise de votre projet.',
    },
    {
      icon: <FiClock size={32} />,
      title: 'Réponse Rapide',
      description: 'Notre équipe vous contacte sous 24h pour programmer la visite technique.',
    },
    {
      icon: <FiUsers size={32} />,
      title: 'Experts Certifiés',
      description: 'Techniciens qualifiés avec plus de 10 ans d\'expérience en sécurité.',
    },
    {
      icon: <FiStar size={32} />,
      title: 'Solution Sur-Mesure',
      description: 'Chaque projet est unique, nous adaptons notre solution à vos besoins.',
    },
  ]

  const testimonials = [
    {
      name: 'Sophie M.',
      content: 'Devis très détaillé et prix transparent. Installation réalisée en une journée.',
      rating: 5,
    },
    {
      name: 'Jean-Pierre L.',
      content: 'Équipe professionnelle, conseil de qualité. Je recommande vivement.',
      rating: 5,
    },
    {
      name: 'Marie D.',
      content: 'Visite technique très complète, devis précis. Excellent service.',
      rating: 5,
    },
  ]

  const process = [
    {
      step: '1',
      title: 'Formulaire',
      description: 'Remplissez notre formulaire détaillé en 4 étapes simples.',
    },
    {
      step: '2',
      title: 'Contact',
      description: 'Nous vous contactons sous 24h pour programmer la visite.',
    },
    {
      step: '3',
      title: 'Visite Technique',
      description: 'Évaluation gratuite sur site par nos experts.',
    },
    {
      step: '4',
      title: 'Devis Détaillé',
      description: 'Remise du devis personnalisé avec plan d\'installation.',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Devis Gratuit et Personnalisé
            </h1>
            <p className="text-xl lg:text-2xl text-primary-100 max-w-4xl mx-auto">
              Obtenez votre devis détaillé en 4 étapes simples. 
              Nos experts étudient votre projet et vous proposent la solution idéale.
            </p>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Pourquoi Demander Votre Devis ?
            </h2>
            <p className="text-xl text-gray-600">
              Un service professionnel et transparent pour votre projet de sécurité
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mx-auto mb-4">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comment Ça Marche ?
            </h2>
            <p className="text-xl text-gray-600">
              Un processus simple et transparent en 4 étapes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                
                {/* Arrow for desktop */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full">
                    <div className="flex items-center justify-center">
                      <div className="w-8 h-0.5 bg-primary-300"></div>
                      <div className="w-2 h-2 bg-primary-300 transform rotate-45 -ml-1"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Demandez Votre Devis Personnalisé
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Remplissez le formulaire ci-dessous en 4 étapes pour recevoir votre devis détaillé
            </p>
            <div className="flex justify-center items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center">
                <FiShield className="mr-2" />
                <span>Données sécurisées</span>
              </div>
              <div className="flex items-center">
                <FiClock className="mr-2" />
                <span>5 minutes chrono</span>
              </div>
              <div className="flex items-center">
                <FiCheckCircle className="mr-2" />
                <span>Sans engagement</span>
              </div>
            </div>
          </div>

          <DevisForm />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Ils Nous Ont Fait Confiance
            </h2>
            <p className="text-xl text-gray-600">
              Retours d\'expérience de nos clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FiShield className="w-20 h-20 text-primary-600 mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Notre Engagement Qualité
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Garantie 2 ans</h3>
                <p className="text-gray-600">Sur toutes nos installations</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">SAV Réactif</h3>
                <p className="text-gray-600">Intervention sous 48h</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Prix Fixe</h3>
                <p className="text-gray-600">Aucun supplément caché</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}