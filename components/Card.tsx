import React from 'react'
import Link from 'next/link'

interface CardProps {
  title: string
  description: string
  icon?: React.ReactNode
  image?: string
  href?: string
  className?: string
  children?: React.ReactNode
  footer?: React.ReactNode
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  icon,
  image,
  href,
  className = '',
  children,
  footer,
}) => {
  const cardContent = (
    <div className={`card ${className}`}>
      {/* Image */}
      {image && (
        <div className="mb-4 overflow-hidden rounded-lg">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      {/* Icon */}
      {icon && (
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-600">
            {icon}
          </div>
        </div>
      )}

      {/* Content */}
      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {children}
      </div>

      {/* Footer */}
      {footer && (
        <div className="mt-6 pt-4 border-t border-gray-200">
          {footer}
        </div>
      )}
    </div>
  )

  // Si href est fourni, rendre comme Link
  if (href) {
    return (
      <Link href={href} className="block hover:scale-105 transition-transform duration-300">
        {cardContent}
      </Link>
    )
  }

  return cardContent
}

export default Card