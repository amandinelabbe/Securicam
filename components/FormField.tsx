import React from 'react'

interface FormFieldProps {
  label: string
  name: string
  type?: 'text' | 'email' | 'tel' | 'password' | 'textarea' | 'select'
  placeholder?: string
  required?: boolean
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
  error?: string
  options?: { value: string; label: string }[]
  rows?: number
  className?: string
  disabled?: boolean
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type = 'text',
  placeholder,
  required = false,
  value,
  onChange,
  error,
  options,
  rows = 4,
  className = '',
  disabled = false,
}) => {
  const baseInputClasses = `
    w-full px-4 py-3 border-2 rounded-xl text-gray-900 placeholder-gray-500
    transition-all duration-200 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500
    hover:border-gray-400
    ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'}
    ${error 
      ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20' 
      : 'border-gray-300'
    }
  `
  
  const inputClasses = `${baseInputClasses} ${className}`.trim()

  const renderInput = () => {
    switch (type) {
      case 'textarea':
        return (
          <textarea
            id={name}
            name={name}
            rows={rows}
            placeholder={placeholder}
            required={required}
            value={value}
            onChange={onChange}
            disabled={disabled}
            className={inputClasses}
            aria-describedby={error ? `${name}-error` : undefined}
          />
        )
      
      case 'select':
        return (
          <select
            id={name}
            name={name}
            required={required}
            value={value}
            onChange={onChange}
            disabled={disabled}
            className={inputClasses}
            aria-describedby={error ? `${name}-error` : undefined}
          >
            <option value="">{placeholder || 'Sélectionnez une option'}</option>
            {options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        )
      
      default:
        return (
          <input
            type={type}
            id={name}
            name={name}
            placeholder={placeholder}
            required={required}
            value={value}
            onChange={onChange}
            disabled={disabled}
            className={inputClasses}
            aria-describedby={error ? `${name}-error` : undefined}
          />
        )
    }
  }

  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-sm font-semibold text-gray-800">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="relative">
        {renderInput()}
      </div>
      {error && (
        <div className="flex items-center space-x-2 mt-2">
          <div className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
          </div>
          <p id={`${name}-error`} className="text-sm text-red-600 font-medium" role="alert">
            {error}
          </p>
        </div>
      )}
    </div>
  )
}

export default FormField