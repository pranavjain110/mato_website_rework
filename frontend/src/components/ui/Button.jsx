import PropTypes from 'prop-types'
import { forwardRef } from 'react'

const Button = forwardRef(({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  disabled = false,
  loading = false,
  fullWidth = false,
  className = '',
  type = 'button',
  onClick,
  ...props 
}, ref) => {
  // Base button styles
  const baseStyles = `
    inline-flex items-center justify-center font-medium rounded-lg
    transition-all duration-200 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    ${fullWidth ? 'w-full' : ''}
  `

  // Variant styles
  const variantStyles = {
    primary: `
      bg-blue-600 text-white border border-blue-600
      hover:bg-blue-700 hover:border-blue-700
      focus:ring-blue-500
      active:bg-blue-800
    `,
    secondary: `
      bg-gray-600 text-white border border-gray-600
      hover:bg-gray-700 hover:border-gray-700
      focus:ring-gray-500
      active:bg-gray-800
    `,
    outline: `
      bg-transparent text-blue-600 border border-blue-600
      hover:bg-blue-50 hover:text-blue-700 hover:border-blue-700
      focus:ring-blue-500
      active:bg-blue-100
    `,
    ghost: `
      bg-transparent text-gray-700 border border-transparent
      hover:bg-gray-100 hover:text-gray-800
      focus:ring-gray-500
      active:bg-gray-200
    `,
    accent: `
      bg-orange-500 text-white border border-orange-500
      hover:bg-orange-600 hover:border-orange-600
      focus:ring-orange-400
      active:bg-orange-700
    `,
    success: `
      bg-green-600 text-white border border-green-600
      hover:bg-green-700 hover:border-green-700
      focus:ring-green-500
      active:bg-green-800
    `,
    warning: `
      bg-yellow-500 text-white border border-yellow-500
      hover:bg-yellow-600 hover:border-yellow-600
      focus:ring-yellow-400
      active:bg-yellow-700
    `,
    error: `
      bg-red-600 text-white border border-red-600
      hover:bg-red-700 hover:border-red-700
      focus:ring-red-500
      active:bg-red-800
    `
  }

  // Size styles
  const sizeStyles = {
    xs: 'px-2.5 py-1.5 text-xs',
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-4 py-2 text-base',
    xl: 'px-6 py-3 text-base',
  }

  // Loading styles
  const loadingStyles = loading ? 'cursor-wait' : ''

  // Combine all styles
  const combinedStyles = `
    ${baseStyles}
    ${variantStyles[variant] || variantStyles.primary}
    ${sizeStyles[size] || sizeStyles.md}
    ${loadingStyles}
    ${className}
  `.replace(/\s+/g, ' ').trim()

  const handleClick = (e) => {
    if (disabled || loading) {
      e.preventDefault()
      return
    }
    if (onClick) {
      onClick(e)
    }
  }

  return (
    <button
      ref={ref}
      type={type}
      className={combinedStyles}
      disabled={disabled || loading}
      onClick={handleClick}
      {...props}
    >
      {loading && (
        <svg 
          className="animate-spin -ml-1 mr-2 h-4 w-4" 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24"
        >
          <circle 
            className="opacity-25" 
            cx="12" 
            cy="12" 
            r="10" 
            stroke="currentColor" 
            strokeWidth="4"
          />
          <path 
            className="opacity-75" 
            fill="currentColor" 
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </button>
  )
})

Button.displayName = 'Button'

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    'primary', 
    'secondary', 
    'outline', 
    'ghost', 
    'accent', 
    'success', 
    'warning', 
    'error'
  ]),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  fullWidth: PropTypes.bool,
  className: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
}

export default Button