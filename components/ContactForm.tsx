'use client'

import React, { useState } from 'react'
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend, FiCheckCircle, FiUser, FiMessageCircle } from 'react-icons/fi'
import FormField from '@/components/FormField'
import CTAButton from '@/components/CTAButton'

interface ContactFormData {
  nom: string
  email: string
  telephone: string
  sujet: string
  message: string
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: '',
  })
  const [errors, setErrors] = useState<Partial<ContactFormData>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const subjectOptions = [
    { value: 'devis', label: 'Demande de devis' },
    { value: 'information', label: 'Demande d\'information' },
    { value: 'maintenance', label: 'Service de maintenance' },
    { value: 'support', label: 'Support technique' },
    { value: 'autre', label: 'Autre' },
  ]

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {}

    if (!formData.nom.trim()) {
      newErrors.nom = 'Le nom est requis'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'L\'email n\'est pas valide'
    }

    if (!formData.telephone.trim()) {
      newErrors.telephone = 'Le téléphone est requis'
    } else if (!/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/.test(formData.telephone.replace(/\s/g, ''))) {
      newErrors.telephone = 'Le numéro de téléphone n\'est pas valide'
    }

    if (!formData.sujet) {
      newErrors.sujet = 'Le sujet est requis'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Le message doit contenir au moins 10 caractères'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Here you would typically send the data to your backend
      console.log('Form data:', formData)
      
      setIsSubmitted(true)
      setFormData({
        nom: '',
        email: '',
        telephone: '',
        sujet: '',
        message: '',
      })
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="relative bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-8 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-100/20 to-emerald-100/20"></div>
        <div className="relative z-10">
          <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <FiCheckCircle className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-3xl font-bold text-green-800 mb-4">Message envoyé avec succès !</h3>
          <p className="text-green-700 mb-8 text-lg leading-relaxed">
            Merci pour votre message. Notre équipe vous répondra dans les plus brefs délais, 
            généralement sous 24h.
          </p>
          <CTAButton
            href=""
            onClick={() => setIsSubmitted(false)}
            variant="secondary"
            className="transform hover:scale-105 transition-transform duration-200"
          >
            Envoyer un autre message
          </CTAButton>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <FormField
              label="Nom complet"
              name="nom"
              type="text"
              placeholder="Votre nom et prénom"
              required
              value={formData.nom}
              onChange={handleInputChange}
              error={errors.nom}
              className="pl-10"
            />
            <div className="absolute top-11 left-3 flex items-center pointer-events-none">
              <FiUser className="h-5 w-5 text-gray-400 transition-colors duration-200" />
            </div>
          </div>

          <div className="relative">
            <FormField
              label="Email"
              name="email"
              type="email"
              placeholder="votre.email@exemple.com"
              required
              value={formData.email}
              onChange={handleInputChange}
              error={errors.email}
              className="pl-10"
            />
            <div className="absolute top-11 left-3 flex items-center pointer-events-none">
              <FiMail className="h-5 w-5 text-gray-400 transition-colors duration-200" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <FormField
              label="Téléphone"
              name="telephone"
              type="tel"
              placeholder="01 23 45 67 89"
              required
              value={formData.telephone}
              onChange={handleInputChange}
              error={errors.telephone}
              className="pl-10"
            />
            <div className="absolute top-11 left-3 flex items-center pointer-events-none">
              <FiPhone className="h-5 w-5 text-gray-400 transition-colors duration-200" />
            </div>
          </div>

          <FormField
            label="Sujet"
            name="sujet"
            type="select"
            required
            value={formData.sujet}
            onChange={handleInputChange}
            error={errors.sujet}
            options={subjectOptions}
            placeholder="Choisissez un sujet"
          />
        </div>

        <div className="relative">
          <FormField
            label="Message"
            name="message"
            type="textarea"
            placeholder="Décrivez votre projet ou votre demande..."
            required
            value={formData.message}
            onChange={handleInputChange}
            error={errors.message}
            rows={6}
            className="pl-10 pt-3"
          />
          <div className="absolute top-12 left-3 pointer-events-none">
            <FiMessageCircle className="h-5 w-5 text-gray-400 transition-colors duration-200" />
          </div>
        </div>

        <div className="pt-4">
          <CTAButton
            href=""
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                Envoi en cours...
              </>
            ) : (
              <>
                <FiSend className="mr-3 h-5 w-5" />
                Envoyer le message
              </>
            )}
          </CTAButton>
        </div>
      </form>
    </div>
  )
}

export default ContactForm