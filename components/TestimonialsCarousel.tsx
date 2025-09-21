'use client'

import React, { useState, useEffect } from 'react'
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi'

interface TestimonialItem {
  id: number
  name: string
  role: string
  company?: string
  content: string
  rating: number
  image?: string
}

interface TestimonialsCarouselProps {
  testimonials: TestimonialItem[]
  autoPlay?: boolean
  autoPlayInterval?: number
}

const TestimonialsCarousel: React.FC<TestimonialsCarouselProps> = ({
  testimonials,
  autoPlay = true,
  autoPlayInterval = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      )
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [autoPlay, autoPlayInterval, testimonials.length])

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
  }

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  if (!testimonials.length) return null

  const currentTestimonial = testimonials[currentIndex]

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Main testimonial display */}
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
        {/* Stars */}
        <div className="flex justify-center mb-6">
          {[...Array(currentTestimonial.rating)].map((_, i) => (
            <FiStar key={i} className="w-6 h-6 text-yellow-400 fill-current" />
          ))}
        </div>

        {/* Quote */}
        <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-8 leading-relaxed">
          "{currentTestimonial.content}"
        </blockquote>

        {/* Author info */}
        <div className="flex flex-col items-center">
          {/* Avatar placeholder */}
          <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-4">
            <span className="text-primary-600 font-semibold text-xl">
              {currentTestimonial.name.charAt(0)}
            </span>
          </div>
          
          <div>
            <p className="font-semibold text-gray-900 text-lg">{currentTestimonial.name}</p>
            <p className="text-gray-600">
              {currentTestimonial.role}
              {currentTestimonial.company && ` - ${currentTestimonial.company}`}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200 text-gray-600 hover:text-primary-600"
        aria-label="Témoignage précédent"
      >
        <FiChevronLeft size={24} />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200 text-gray-600 hover:text-primary-600"
        aria-label="Témoignage suivant"
      >
        <FiChevronRight size={24} />
      </button>

      {/* Dots indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              index === currentIndex ? 'bg-primary-600' : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Aller au témoignage ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default TestimonialsCarousel