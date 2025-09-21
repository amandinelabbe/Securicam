'use client'

import React, { useState } from 'react'
import { FiUser, FiMapPin, FiShield, FiSettings, FiCheckCircle, FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import FormField from '@/components/FormField'
import CTAButton from '@/components/CTAButton'

interface DevisFormData {
  // Step 1: Personal Info
  prenom: string
  nom: string
  email: string
  telephone: string
  entreprise?: string
  
  // Step 2: Project Location
  adresse: string
  ville: string
  codePostal: string
  typeLieu: string
  
  // Step 3: Security Needs
  typeInstallation: string
  nombreCameras: string
  zones: string[]
  fonctionnalites: string[]
  budget: string
  
  // Step 4: Additional Info
  delaiInstallation: string
  commentaires: string
  newsletter: boolean
}

const DevisForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<DevisFormData>({
    prenom: '',
    nom: '',
    email: '',
    telephone: '',
    entreprise: '',
    adresse: '',
    ville: '',
    codePostal: '',
    typeLieu: '',
    typeInstallation: '',
    nombreCameras: '',
    zones: [],
    fonctionnalites: [],
    budget: '',
    delaiInstallation: '',
    commentaires: '',
    newsletter: false,
  })
  const [errors, setErrors] = useState<Partial<DevisFormData>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const totalSteps = 4

  const typeLieuOptions = [
    { value: 'maison', label: 'Maison individuelle' },
    { value: 'appartement', label: 'Appartement' },
    { value: 'commerce', label: 'Commerce/Magasin' },
    { value: 'bureau', label: 'Bureau/Entreprise' },
    { value: 'entrepot', label: 'Entrepôt/Industrie' },
    { value: 'autre', label: 'Autre' },
  ]

  const typeInstallationOptions = [
    { value: 'interieur', label: 'Intérieur uniquement' },
    { value: 'exterieur', label: 'Extérieur uniquement' },
    { value: 'mixte', label: 'Intérieur et extérieur' },
  ]

  const nombreCamerasOptions = [
    { value: '1-2', label: '1 à 2 caméras' },
    { value: '3-4', label: '3 à 4 caméras' },
    { value: '5-8', label: '5 à 8 caméras' },
    { value: '9-15', label: '9 à 15 caméras' },
    { value: '16+', label: 'Plus de 16 caméras' },
  ]

  const zonesOptions = [
    'Entrée principale',
    'Parking/Garage',
    'Jardin/Terrasse',
    'Couloirs',
    'Bureau/Salon',
    'Cuisine',
    'Zones de stockage',
    'Périmètre extérieur',
  ]

  const fonctionnalitesOptions = [
    'Vision nocturne',
    'Détection de mouvement',
    'Enregistrement en continu',
    'Accès mobile',
    'Surveillance à distance',
    'Alertes par email/SMS',
    'Reconnaissance faciale',
    'Analyse comportementale',
  ]

  const budgetOptions = [
    { value: '500-1000', label: '500€ - 1 000€' },
    { value: '1000-2500', label: '1 000€ - 2 500€' },
    { value: '2500-5000', label: '2 500€ - 5 000€' },
    { value: '5000-10000', label: '5 000€ - 10 000€' },
    { value: '10000+', label: 'Plus de 10 000€' },
  ]

  const delaiOptions = [
    { value: 'urgent', label: 'Urgent (sous 1 semaine)' },
    { value: '1-2semaines', label: '1 à 2 semaines' },
    { value: '1mois', label: 'Dans le mois' },
    { value: 'flexible', label: 'Flexible' },
  ]

  const validateCurrentStep = (): boolean => {
    const newErrors: Partial<DevisFormData> = {}

    switch (currentStep) {
      case 1:
        if (!formData.prenom.trim()) newErrors.prenom = 'Le prénom est requis'
        if (!formData.nom.trim()) newErrors.nom = 'Le nom est requis'
        if (!formData.email.trim()) {
          newErrors.email = 'L\'email est requis'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          newErrors.email = 'L\'email n\'est pas valide'
        }
        if (!formData.telephone.trim()) {
          newErrors.telephone = 'Le téléphone est requis'
        }
        break

      case 2:
        if (!formData.adresse.trim()) newErrors.adresse = 'L\'adresse est requise'
        if (!formData.ville.trim()) newErrors.ville = 'La ville est requise'
        if (!formData.codePostal.trim()) {
          newErrors.codePostal = 'Le code postal est requis'
        } else if (!/^\d{5}$/.test(formData.codePostal)) {
          newErrors.codePostal = 'Le code postal doit contenir 5 chiffres'
        }
        if (!formData.typeLieu) newErrors.typeLieu = 'Le type de lieu est requis'
        break

      case 3:
        if (!formData.typeInstallation) newErrors.typeInstallation = 'Le type d\'installation est requis'
        if (!formData.nombreCameras) newErrors.nombreCameras = 'Le nombre de caméras est requis'
        if (formData.zones.length === 0) newErrors.zones = ['Sélectionnez au moins une zone'] as any
        if (!formData.budget) newErrors.budget = 'Le budget est requis'
        break

      case 4:
        if (!formData.delaiInstallation) newErrors.delaiInstallation = 'Le délai est requis'
        break
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      if (name === 'newsletter') {
        setFormData(prev => ({ ...prev, [name]: checked }))
      } else {
        // Handle multiple checkboxes for zones and fonctionnalites
        setFormData(prev => ({
          ...prev,
          [name]: checked
            ? [...(prev[name as keyof DevisFormData] as string[]), value]
            : (prev[name as keyof DevisFormData] as string[]).filter(item => item !== value)
        }))
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
    
    // Clear error when user starts typing
    if (errors[name as keyof DevisFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const nextStep = () => {
    if (validateCurrentStep() && currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateCurrentStep()) return

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      console.log('Devis form data:', formData)
      
      setIsSubmitted(true)
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <FiCheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
        <h2 className="text-3xl font-bold text-green-800 mb-4">Demande de Devis Envoyée !</h2>
        <p className="text-green-700 mb-6">
          Merci pour votre demande détaillée. Notre équipe va étudier votre projet et vous 
          contacter dans les 24h pour programmer une visite technique gratuite.
        </p>
        <div className="bg-white rounded-lg p-6 mb-6">
          <h3 className="font-semibold text-gray-900 mb-4">Prochaines étapes :</h3>
          <ul className="text-left space-y-2 text-gray-700">
            <li>✓ Analyse de votre demande par nos experts</li>
            <li>✓ Appel sous 24h pour programmer la visite</li>
            <li>✓ Visite technique gratuite sur site</li>
            <li>✓ Remise du devis personnalisé</li>
          </ul>
        </div>
        <CTAButton href="/" size="lg">
          Retour à l'accueil
        </CTAButton>
      </div>
    )
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <FiUser className="w-16 h-16 text-primary-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Vos Informations</h2>
              <p className="text-gray-600">Commençons par vous connaître</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                label="Prénom"
                name="prenom"
                required
                value={formData.prenom}
                onChange={handleInputChange}
                error={errors.prenom}
              />
              <FormField
                label="Nom"
                name="nom"
                required
                value={formData.nom}
                onChange={handleInputChange}
                error={errors.nom}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                label="Email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                error={errors.email}
              />
              <FormField
                label="Téléphone"
                name="telephone"
                type="tel"
                required
                value={formData.telephone}
                onChange={handleInputChange}
                error={errors.telephone}
              />
            </div>

            <FormField
              label="Entreprise (optionnel)"
              name="entreprise"
              value={formData.entreprise}
              onChange={handleInputChange}
            />
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <FiMapPin className="w-16 h-16 text-primary-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Lieu du Projet</h2>
              <p className="text-gray-600">Où souhaitez-vous installer votre système ?</p>
            </div>

            <FormField
              label="Adresse complète"
              name="adresse"
              required
              value={formData.adresse}
              onChange={handleInputChange}
              error={errors.adresse}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                label="Ville"
                name="ville"
                required
                value={formData.ville}
                onChange={handleInputChange}
                error={errors.ville}
              />
              <FormField
                label="Code postal"
                name="codePostal"
                required
                value={formData.codePostal}
                onChange={handleInputChange}
                error={errors.codePostal}
              />
            </div>

            <FormField
              label="Type de lieu"
              name="typeLieu"
              type="select"
              required
              value={formData.typeLieu}
              onChange={handleInputChange}
              error={errors.typeLieu}
              options={typeLieuOptions}
              placeholder="Sélectionnez le type de lieu"
            />
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <FiShield className="w-16 h-16 text-primary-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Besoins en Sécurité</h2>
              <p className="text-gray-600">Précisez vos attentes pour votre système</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                label="Type d'installation"
                name="typeInstallation"
                type="select"
                required
                value={formData.typeInstallation}
                onChange={handleInputChange}
                error={errors.typeInstallation}
                options={typeInstallationOptions}
                placeholder="Choisissez le type"
              />
              <FormField
                label="Nombre de caméras"
                name="nombreCameras"
                type="select"
                required
                value={formData.nombreCameras}
                onChange={handleInputChange}
                error={errors.nombreCameras}
                options={nombreCamerasOptions}
                placeholder="Estimez le nombre"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Zones à surveiller <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {zonesOptions.map(zone => (
                  <label key={zone} className="flex items-center">
                    <input
                      type="checkbox"
                      name="zones"
                      value={zone}
                      checked={formData.zones.includes(zone)}
                      onChange={handleInputChange}
                      className="rounded border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
                    />
                    <span className="ml-2 text-gray-700">{zone}</span>
                  </label>
                ))}
              </div>
              {errors.zones && <p className="mt-2 text-sm text-red-600">{errors.zones}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Fonctionnalités souhaitées
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {fonctionnalitesOptions.map(fonc => (
                  <label key={fonc} className="flex items-center">
                    <input
                      type="checkbox"
                      name="fonctionnalites"
                      value={fonc}
                      checked={formData.fonctionnalites.includes(fonc)}
                      onChange={handleInputChange}
                      className="rounded border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
                    />
                    <span className="ml-2 text-gray-700">{fonc}</span>
                  </label>
                ))}
              </div>
            </div>

            <FormField
              label="Budget envisagé"
              name="budget"
              type="select"
              required
              value={formData.budget}
              onChange={handleInputChange}
              error={errors.budget}
              options={budgetOptions}
              placeholder="Sélectionnez votre budget"
            />
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <FiSettings className="w-16 h-16 text-primary-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Finalisation</h2>
              <p className="text-gray-600">Derniers détails sur votre projet</p>
            </div>

            <FormField
              label="Délai souhaité pour l'installation"
              name="delaiInstallation"
              type="select"
              required
              value={formData.delaiInstallation}
              onChange={handleInputChange}
              error={errors.delaiInstallation}
              options={delaiOptions}
              placeholder="Choisissez le délai"
            />

            <FormField
              label="Commentaires ou besoins spécifiques"
              name="commentaires"
              type="textarea"
              rows={4}
              placeholder="Décrivez vos attentes particulières, contraintes techniques, etc."
              value={formData.commentaires}
              onChange={handleInputChange}
            />

            <div className="bg-gray-50 rounded-lg p-6">
              <label className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  name="newsletter"
                  checked={formData.newsletter}
                  onChange={handleInputChange}
                  className="rounded border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 mt-1"
                />
                <span className="text-sm text-gray-700">
                  J'accepte de recevoir des informations sur les nouveautés et offres spéciales de Securicam 
                  (vous pouvez vous désabonner à tout moment)
                </span>
              </label>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-4">
          {[1, 2, 3, 4].map(step => (
            <div key={step} className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                step <= currentStep ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                {step < currentStep ? <FiCheckCircle /> : step}
              </div>
              {step < 4 && (
                <div className={`w-16 h-1 mx-2 ${
                  step < currentStep ? 'bg-primary-600' : 'bg-gray-200'
                }`} />
              )}
            </div>
          ))}
        </div>
        <div className="text-center text-gray-600">
          Étape {currentStep} sur {totalSteps}
        </div>
      </div>

      {/* Form Content */}
      <form onSubmit={currentStep === totalSteps ? handleSubmit : (e) => { e.preventDefault(); nextStep(); }}>
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          {renderStep()}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <CTAButton
            href=""
            onClick={prevStep}
            disabled={currentStep === 1}
            variant="secondary"
            className={currentStep === 1 ? 'invisible' : ''}
          >
            <FiChevronLeft className="mr-2" />
            Précédent
          </CTAButton>

          {currentStep === totalSteps ? (
            <CTAButton
              href=""
              type="submit"
              disabled={isSubmitting}
              className="ml-auto"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Envoi en cours...
                </>
              ) : (
                'Envoyer ma demande'
              )}
            </CTAButton>
          ) : (
            <CTAButton
              href=""
              onClick={nextStep}
              className="ml-auto"
            >
              Suivant
              <FiChevronRight className="ml-2" />
            </CTAButton>
          )}
        </div>
      </form>
    </div>
  )
}

export default DevisForm