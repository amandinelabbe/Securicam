import React from 'react'
import Image from 'next/image'
import { Metadata } from 'next'
import { FiShield, FiUsers, FiTarget, FiAward, FiTool, FiClock, FiHeart, FiStar, FiUser } from 'react-icons/fi'
import CTAButton from '@/components/CTAButton'

export const metadata: Metadata = {
  title: 'À Propos - Securicam | Notre Histoire, Mission et Équipe',
  description: 'Découvrez Securicam : 10 ans d\'expertise en sécurité, une équipe passionnée et plus de 500 clients satisfaits. Notre mission : protéger ce qui compte le plus.',
  keywords: 'à propos securicam, histoire entreprise, équipe sécurité, mission entreprise, expertise vidéosurveillance',
}

export default function AProposPage() {
  const teamMembers = [
    {
      name: 'Pierre Dubois',
      role: 'Directeur Général',
      experience: '15 ans d\'expérience',
      description: 'Expert en sécurité électronique, Pierre a fondé Securicam avec la vision de démocratiser l\'accès aux technologies de sécurité.',
      image: '/images/ceo.webp',
    },
    {
      name: 'Marie Laurent',
      role: 'Responsable Technique',
      experience: '12 ans d\'expérience',
      description: 'Ingénieure spécialisée en systèmes de sécurité, Marie supervise toutes nos installations techniques.',
      image: '/images/responsable.jpg',
    },
    {
      name: 'Thomas Martin',
      role: 'Chef d\'Équipe Installation',
      experience: '10 ans d\'expérience',
      description: 'Technicien certifié, Thomas forme et encadre nos équipes d\'installation sur le terrain.',
      image: '/images/portrait_technicien.webp',
    },
  ]

  const values = [
    {
      icon: <FiShield size={48} />,
      title: 'Sécurité',
      description: 'La sécurité de nos clients est notre priorité absolue. Nous utilisons uniquement des équipements de haute qualité.',
    },
    {
      icon: <FiHeart size={48} />,
      title: 'Proximité',
      description: 'Nous privilégions une relation de confiance avec nos clients basée sur l\'écoute et la transparence.',
    },
    {
      icon: <FiTool size={48} />,
      title: 'Expertise',
      description: 'Notre équipe possède toutes les certifications nécessaires et se forme continuellement aux nouvelles technologies.',
    },
  ]

  const certifications = [
    'Certification APSAD',
    'Qualification RGE',
    'Assurance décennale',
    'Formation continue équipe',
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            À Propos de Securicam
          </h1>
          <p className="text-xl lg:text-2xl text-primary-100 max-w-4xl mx-auto">
            Une équipe passionnée, des solutions innovantes, une seule mission : protéger ce qui compte le plus.
          </p>
        </div>
      </section>

      {/* Histoire Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Notre Histoire
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Fondée en 2014, Securicam est née de la volonté de ses fondateurs de rendre 
                les technologies de sécurité accessibles à tous. Depuis nos débuts, nous avons 
                développé une expertise reconnue dans l\'installation et la maintenance de 
                systèmes de vidéosurveillance.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Au fil des années, notre entreprise a grandi en restant fidèle à ses valeurs, 
                tout en conservant ses valeurs fondamentales : proximité, expertise et engagement. 
                Aujourd\'hui, nous sommes fiers de compter plus de 500 clients satisfaits.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">10+</div>
                  <div className="text-gray-600">Années d\'expérience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">500+</div>
                  <div className="text-gray-600">Clients satisfaits</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">1000+</div>
                  <div className="text-gray-600">Installations réalisées</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">24h/7j</div>
                  <div className="text-gray-600">Support technique</div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl aspect-square overflow-hidden">
              <Image 
                src="/images/securicam.png"
                alt="Équipe Securicam"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Notre Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Démocratiser l\'accès aux technologies de sécurité avancées en proposant 
              des solutions sur-mesure, performantes et accessibles à tous.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <FiShield className="w-16 h-16 text-primary-600 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Protection</h3>
              <p className="text-gray-600">
                Protéger vos biens, votre famille et vos collaborateurs avec des solutions 
                technologiques de pointe et fiables.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <FiUsers className="w-16 h-16 text-primary-600 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Accompagnement</h3>
              <p className="text-gray-600">
                Vous accompagner à chaque étape de votre projet avec des conseils personnalisés 
                et un suivi de qualité.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <FiAward className="w-16 h-16 text-primary-600 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">
                Maintenir le plus haut niveau de qualité dans nos prestations et 
                nos équipements pour votre totale satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Nos Valeurs
            </h2>
            <p className="text-xl text-gray-600">
              Les valeurs qui guident notre action au quotidien
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {values.map((value, index) => (
              <div key={index} className="text-center p-8 bg-gray-50 rounded-xl">
                <div className="text-primary-600 mb-6 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Nos Certifications et Qualifications
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                  <FiAward className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Notre Équipe
            </h2>
            <p className="text-xl text-gray-600">
              Des professionnels passionnés à votre service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-64 relative overflow-hidden">
                  <Image
                    src={member.image}
                    alt={`Portrait de ${member.name}`}
                    width={400}
                    height={256}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-primary-600 font-semibold mb-2">{member.role}</p>
                  <p className="text-sm text-gray-500 mb-3">{member.experience}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Prêt à Travailler avec Notre Équipe ?
          </h2>
          <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
            Découvrez comment nos experts en sécurité 
            peuvent protéger ce qui compte le plus pour vous.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/devis" size="lg">
              Demander un devis
            </CTAButton>
            <CTAButton href="/contact" variant="secondary" size="lg">
              Rencontrer l\'équipe
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  )
}