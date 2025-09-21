'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiMenu, FiX } from 'react-icons/fi'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navigationItems = [
    { name: 'Accueil', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Témoignages', href: '/temoignages' },
    { name: 'À Propos', href: '/a-propos' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/images/logo_securicam.png"
              alt="Logo Securicam"
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <span className="text-2xl font-bold text-gray-900">Securicam</span>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden md:flex">
            <Link href="/devis" className="btn-primary">
              Devis Gratuit
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary-600 p-2"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-600 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  href="/devis"
                  className="btn-primary w-full text-center block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Devis Gratuit
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header