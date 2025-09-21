import React from 'react'
import Image from 'next/image'
import { Metadata } from 'next'
import { FiPhone, FiMail, FiMapPin, FiClock, FiMessageSquare, FiUsers } from 'react-icons/fi'
import ContactForm from '@/components/ContactForm'
import CTAButton from '@/components/CTAButton'

export const metadata: Metadata = {
  title: 'Contact - Securicam | Devis Gratuit et Conseils Personnalisés',
  description: 'Contactez Securicam pour un devis gratuit ou des conseils personnalisés. Équipe disponible du lundi au vendredi. Réponse sous 24h garantie.',
  keywords: 'contact securicam, devis gratuit, conseil sécurité, installation caméras, expert vidéosurveillance',
}

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <FiPhone size={32} />,
      title: 'Téléphone',
      content: '+33 1 23 45 67 89',
      subtitle: 'Du lundi au vendredi, 8h-18h',
    },
    {
      icon: <FiMail size={32} />,
      title: 'Email',
      content: 'contact@securicam.fr',
      subtitle: 'Réponse sous 24h garantie',
    },
    {
      icon: <FiMapPin size={32} />,
      title: 'Adresse',
      content: '123 Rue de la Sécurité',
      subtitle: '75000 Paris, France',
    },
    {
      icon: <FiClock size={32} />,
      title: 'Horaires',
      content: 'Lun-Ven : 8h-18h',
      subtitle: 'Sam : 9h-12h (urgences)',
    },
  ]

  const services = [
    {
      icon: <FiMessageSquare size={24} />,
      title: 'Conseil Personnalisé',
      description: 'Nos experts analysent vos besoins et vous conseillent la meilleure solution.',
    },
    {
      icon: <FiMapPin size={24} />,
      title: 'Visite Technique',
      description: 'Déplacement gratuit pour étudier votre site et établir un devis précis.',
    },
    {
      icon: <FiUsers size={24} />,
      title: 'Support Dédié',
      description: 'Une équipe dédiée pour vous accompagner tout au long de votre projet.',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Contactez-Nous
            </h1>
            <p className="text-xl lg:text-2xl text-primary-100 max-w-3xl mx-auto">
              Notre équipe d\'experts est à votre disposition pour étudier votre projet 
              et vous proposer une solution personnalisée.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mx-auto mb-6">
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-lg text-gray-800 mb-2">{info.content}</p>
                <p className="text-gray-600">{info.subtitle}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="order-2 lg:order-1">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Envoyez-nous un Message
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais. 
                  Tous les champs marqués d\'un <span className="text-red-500 font-semibold">*</span> sont obligatoires.
                </p>
              </div>
              <ContactForm />
            </div>

            {/* Map and Additional Info */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Nos Bureaux
              </h2>
              
              {/* Office Image */}
              <div className="rounded-2xl h-72 overflow-hidden mb-8 shadow-lg">
                <Image 
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=300&fit=crop&crop=center"
                  alt="Bureaux Securicam"
                  width={600}
                  height={300}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-primary-50 rounded-2xl p-8 mb-8 border border-blue-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <FiMapPin className="mr-3 text-primary-600" />
                  Zone d\'Intervention
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Nous intervenons dans toute l\'Île-de-France et les départements limitrophes :
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    Paris (75) et petite couronne
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    Seine-et-Marne (77)
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    Yvelines (78)
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                    Essonne (91) et Val-d\'Oise (95)
                  </li>
                </ul>
              </div>

              <div className="space-y-6">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                      {service.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-50 border border-red-200 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-red-800 mb-4">
              Urgence Sécurité ?
            </h2>
            <p className="text-red-700 mb-6">
              En cas d\'urgence sécuritaire ou de panne critique de votre système, 
              contactez notre service d\'urgence 24h/24.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+33123456789" 
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
              >
                <FiPhone className="mr-2" />
                Urgence : 01 23 45 67 89
              </a>
              <CTAButton href="mailto:urgence@securicam.fr" variant="secondary">
                urgence@securicam.fr
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Questions Fréquentes
            </h2>
            <p className="text-xl text-gray-600">
              Trouvez rapidement les réponses à vos questions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Combien coûte une installation ?
              </h3>
              <p className="text-gray-600">
                Le prix dépend de vos besoins spécifiques. Nous proposons des solutions 
                à partir de 299€ pour les particuliers. Contactez-nous pour un devis personnalisé gratuit.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Quel est le délai d\'installation ?
              </h3>
              <p className="text-gray-600">
                Généralement 1 à 3 jours selon la complexité du projet. Pour les installations 
                simples, nous pouvons souvent intervenir sous 48h.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Proposez-vous une garantie ?
              </h3>
              <p className="text-gray-600">
                Oui, nous offrons une garantie de 2 ans sur l\'installation et de 3 ans 
                sur les équipements. Support technique inclus pendant toute la durée.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Puis-je surveiller à distance ?
              </h3>
              <p className="text-gray-600">
                Absolument ! Toutes nos solutions incluent un accès mobile via application 
                pour surveiller vos caméras depuis n\'importe où dans le monde.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Prêt à Sécuriser Vos Biens ?
          </h2>
          <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
            Demandez votre devis personnalisé gratuit ou prenez rendez-vous 
            avec un de nos experts pour une visite technique.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/devis" size="lg">
              Devis gratuit en ligne
            </CTAButton>
            <a 
              href="tel:+33123456789" 
              className="inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 px-8 py-4 text-lg border-2 border-white text-white hover:bg-white hover:text-primary-600 focus:ring-white"
            >
              <FiPhone className="mr-2" />
              Appeler maintenant
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}