import React from 'react'
import Link from 'next/link'
import { FiShield, FiPhone, FiMail, FiMapPin, FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Logo et description */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <FiShield className="h-8 w-8 text-primary-500" />
              <span className="text-2xl font-bold">Securicam</span>
            </Link>
            <p className="text-gray-300 mb-4">
              Expert en installation de systèmes de vidéosurveillance pour particuliers et professionnels.
              Protégez ce qui compte le plus.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-200">
                <FiFacebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-200">
                <FiInstagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-200">
                <FiLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-300 hover:text-primary-500 transition-colors duration-200">
                  Nos Services
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-gray-300 hover:text-primary-500 transition-colors duration-200">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/temoignages" className="text-gray-300 hover:text-primary-500 transition-colors duration-200">
                  Témoignages
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-gray-300 hover:text-primary-500 transition-colors duration-200">
                  À Propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-primary-500 transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-300">Installation caméras</span>
              </li>
              <li>
                <span className="text-gray-300">Maintenance systèmes</span>
              </li>
              <li>
                <span className="text-gray-300">Surveillance à distance</span>
              </li>
              <li>
                <span className="text-gray-300">Conseil sécurité</span>
              </li>
              <li>
                <span className="text-gray-300">Formation utilisateur</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FiPhone className="h-5 w-5 text-primary-500" />
                <span className="text-gray-300">+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-3">
                <FiMail className="h-5 w-5 text-primary-500" />
                <span className="text-gray-300">contact@securicam.fr</span>
              </div>
              <div className="flex items-start space-x-3">
                <FiMapPin className="h-5 w-5 text-primary-500 mt-1" />
                <span className="text-gray-300">
                  123 Rue de la Sécurité<br />
                  75000 Paris, France
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Securicam. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/mentions-legales" className="text-gray-400 hover:text-primary-500 text-sm transition-colors duration-200">
                Mentions légales
              </Link>
              <Link href="/politique-confidentialite" className="text-gray-400 hover:text-primary-500 text-sm transition-colors duration-200">
                Politique de confidentialité
              </Link>
              <Link href="/cgv" className="text-gray-400 hover:text-primary-500 text-sm transition-colors duration-200">
                CGV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer