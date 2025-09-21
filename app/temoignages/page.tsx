import React from 'react'
import { Metadata } from 'next'
import { FiStar, FiShield, FiUsers } from 'react-icons/fi'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import CTAButton from '@/components/CTAButton'

export const metadata: Metadata = {
  title: 'Témoignages Clients - Securicam | Avis et Retours d\'Expérience',
  description: 'Découvrez les témoignages de nos clients satisfaits. Plus de 500 installations réussies et des avis 5 étoiles.',
  keywords: 'témoignages clients, avis securicam, retours expérience, satisfaction client, installations réussies',
}

export default function TemoignagesPage() {
  const featuredTestimonials = [
    {
      id: 1,
      name: 'Marie Dubois',
      role: 'Propriétaire',
      company: 'Résidence Les Jardins',
      content: 'Service exceptionnel ! L\'équipe Securicam a installé notre système de vidéosurveillance en une journée. La qualité des images est remarquable, même la nuit. Nous nous sentons beaucoup plus en sécurité depuis l\'installation.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Jean Martin',
      role: 'Gérant',
      company: 'Martin & Fils SARL',
      content: 'Installation professionnelle et équipe très compétente. Le système fonctionne parfaitement depuis 2 ans sans aucun problème. L\'interface mobile est intuitive et pratique. Je recommande vivement Securicam.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Sophie Leclerc',
      role: 'Particulier',
      content: 'Excellent rapport qualité-prix. L\'application mobile est très pratique pour surveiller à distance. L\'équipe a été à l\'écoute de nos besoins et a proposé une solution parfaitement adaptée à notre maison.',
      rating: 5,
    },
    {
      id: 4,
      name: 'Pierre Durand',
      role: 'Directeur',
      company: 'Durand Industries',
      content: 'Système robuste parfait pour notre environnement industriel. La maintenance préventive assure un fonctionnement optimal. L\'équipe technique est réactive et professionnelle.',
      rating: 5,
    },
    {
      id: 5,
      name: 'Catherine Moreau',
      role: 'Commerçante',
      company: 'Boutique Élégance',
      content: 'Grâce à Securicam, je peux surveiller ma boutique même quand je ne suis pas sur place. La qualité d\'image permet d\'identifier clairement les clients. Un investissement qui m\'a déjà évité plusieurs problèmes.',
      rating: 5,
    },
  ]

  const allTestimonials = [
    ...featuredTestimonials,
    {
      id: 6,
      name: 'Michel Bernard',
      role: 'Retraité',
      content: 'Installation discrète et efficace. L\'équipe a pris le temps de m\'expliquer le fonctionnement. Très satisfait du service.',
      rating: 5,
    },
    {
      id: 7,
      name: 'Isabelle Petit',
      role: 'Responsable RH',
      company: 'TechSolutions',
      content: 'Surveillance de nos bureaux impeccable. Système évolutif qui grandit avec nos besoins.',
      rating: 5,
    },
    {
      id: 8,
      name: 'François Blanc',
      role: 'Propriétaire',
      company: 'Résidence du Parc',
      content: 'Enfin un système qui fonctionne ! Finies les pannes et les fausses alertes. Merci Securicam.',
      rating: 5,
    },
    {
      id: 9,
      name: 'Anne Rousseau',
      role: 'Gérante',
      company: 'Café des Amis',
      content: 'Protection efficace de mon établissement. L\'application mobile est un vrai plus pour la gestion à distance.',
      rating: 5,
    },
    {
      id: 10,
      name: 'David Leroy',
      role: 'Architecte',
      content: 'Installation esthétique qui s\'intègre parfaitement à l\'architecture de ma maison moderne.',
      rating: 5,
    },
  ]

  const stats = [
    {
      number: '500+',
      label: 'Clients satisfaits',
      icon: <FiUsers size={32} />,
    },
    {
      number: '1200+',
      label: 'Caméras installées',
      icon: <FiShield size={32} />,
    },
    {
      number: '4.9/5',
      label: 'Note moyenne',
      icon: <FiStar size={32} />,
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Témoignages Clients
            </h1>
            <p className="text-xl lg:text-2xl text-primary-100 max-w-3xl mx-auto">
              Découvrez ce que pensent nos clients de nos services. 
              Leur satisfaction est notre plus belle récompense.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-primary-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonials Carousel */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Témoignages Vedettes
            </h2>
            <p className="text-xl text-gray-600">
              Les retours d\'expérience de nos clients les plus satisfaits
            </p>
          </div>

          <TestimonialsCarousel testimonials={featuredTestimonials} />
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Tous nos Témoignages
            </h2>
            <p className="text-xl text-gray-600">
              Plus de retours d\'expérience de nos clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allTestimonials.slice(5).map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FiStar key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">
                    {testimonial.role}
                    {testimonial.company && ` - ${testimonial.company}`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Ils Nous Font Confiance
            </h2>
            <p className="text-xl text-gray-600">
              Particuliers, entreprises, collectivités... tous types de clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <FiUsers className="w-16 h-16 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Particuliers</h3>
              <p className="text-gray-600">
                Propriétaires soucieux de protéger leur famille et leurs biens
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <FiShield className="w-16 h-16 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Entreprises</h3>
              <p className="text-gray-600">
                PME et grandes entreprises protégeant leurs locaux et activités
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <FiStar className="w-16 h-16 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Collectivités</h3>
              <p className="text-gray-600">
                Institutions publiques sécurisant les espaces communs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Rejoignez nos Clients Satisfaits
          </h2>
          <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
            Découvrez pourquoi plus de 500 clients nous font confiance 
            pour leur sécurité. Votre satisfaction est garantie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/devis" size="lg">
              Obtenir mon devis gratuit
            </CTAButton>
            <CTAButton href="/contact" variant="secondary" size="lg">
              Discuter de mon projet
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  )
}