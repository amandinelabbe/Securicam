import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiShield, FiEye, FiSettings, FiUsers, FiStar, FiArrowRight } from 'react-icons/fi'
import CTAButton from '@/components/CTAButton'
import Card from '@/components/Card'

export default function HomePage() {
  const services = [
    {
      icon: <FiShield size={32} />,
      title: 'Installation',
      description: 'Installation professionnelle de systèmes de vidéosurveillance adaptés à vos besoins.',
    },
    {
      icon: <FiSettings size={32} />,
      title: 'Maintenance',
      description: 'Service de maintenance préventive et corrective pour garantir la performance.',
    },
    {
      icon: <FiEye size={32} />,
      title: 'Surveillance',
      description: 'Surveillance à distance 24h/24 et 7j/7 par nos équipes spécialisées.',
    },
  ]

  const testimonials = [
    {
      name: 'Marie Dubois',
      role: 'Propriétaire',
      content: 'Service exceptionnel ! L\'équipe Securicam a installé notre système en une journée. Nous nous sentons beaucoup plus en sécurité.',
      rating: 5,
    },
    {
      name: 'Jean Martin',
      role: 'Gérant d\'entreprise',
      content: 'Installation professionnelle et équipe très compétente. Le système fonctionne parfaitement depuis 2 ans.',
      rating: 5,
    },
    {
      name: 'Sophie Leclerc',
      role: 'Particulier',
      content: 'Excellent rapport qualité-prix. L\'application mobile est très pratique pour surveiller à distance.',
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Protégez ce qui compte le plus
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-primary-100">
                Expert en installation de caméras de sécurité pour particuliers et professionnels. 
                Solutions sur-mesure et surveillance 24h/24.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton href="/devis" size="lg">
                  Devis Gratuit
                </CTAButton>
                <CTAButton href="/services" variant="secondary" size="lg">
                  En savoir plus
                </CTAButton>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden">
                  <Image 
                    src="/images/videosurveillance.jpg"
                    alt="Système de vidéosurveillance moderne"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nos Services Principaux
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions complètes de vidéosurveillance adaptées à tous types d\'environnements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                className="text-center hover:shadow-2xl"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Brief */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Solutions sur-mesure
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Que vous soyez un particulier souhaitant sécuriser votre domicile ou une entreprise 
                cherchant à protéger vos locaux, nous avons la solution adaptée à vos besoins.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <FiShield className="text-primary-600 mr-3" />
                  <span>Caméras 4K haute définition</span>
                </li>
                <li className="flex items-center">
                  <FiEye className="text-primary-600 mr-3" />
                  <span>Vision nocturne infrarouge</span>
                </li>
                <li className="flex items-center">
                  <FiSettings className="text-primary-600 mr-3" />
                  <span>Détection de mouvement intelligente</span>
                </li>
                <li className="flex items-center">
                  <FiUsers className="text-primary-600 mr-3" />
                  <span>Accès mobile et à distance</span>
                </li>
              </ul>
              <CTAButton href="/solutions">
                Découvrir nos solutions
                <FiArrowRight className="ml-2" />
              </CTAButton>
            </div>
            <div className="rounded-2xl aspect-square overflow-hidden">
              <Image 
                src="/images/solutions.png"
                alt="Installation de caméras de sécurité"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Ce que disent nos clients
            </h2>
            <p className="text-xl text-gray-600">
              Plus de 500 clients satisfaits nous font confiance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar key={i} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <CTAButton href="/temoignages" variant="secondary">
              Voir tous les témoignages
            </CTAButton>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Prêt à sécuriser vos biens ?
          </h2>
          <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
            Obtenez un devis personnalisé gratuit en moins de 24h. 
            Nos experts vous conseillent selon vos besoins.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/devis" size="lg">
              Demander un devis
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