import PropTypes from 'prop-types'

const Card = ({ 
  children, 
  variant = 'default',
  padding = 'md',
  shadow = 'md',
  hover = false,
  className = '',
  ...props 
}) => {
  // Base card styles
  const baseStyles = `
    bg-white rounded-lg border transition-all duration-200
    ${hover ? 'hover:shadow-lg hover:scale-105 cursor-pointer' : ''}
  `

  // Variant styles
  const variantStyles = {
    default: 'border-stone-200',
    elevated: 'border-stone-100',
    outlined: 'border-stone-300',
    primary: 'border-amber-200 bg-amber-50',
    accent: 'border-yellow-200 bg-yellow-50',
    success: 'border-green-200 bg-green-50',
    warning: 'border-yellow-200 bg-yellow-50',
    error: 'border-red-200 bg-red-50',
  }

  // Padding styles
  const paddingStyles = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10',
  }

  // Shadow styles
  const shadowStyles = {
    none: 'shadow-none',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
  }

  // Combine all styles
  const combinedStyles = `
    ${baseStyles}
    ${variantStyles[variant] || variantStyles.default}
    ${paddingStyles[padding] || paddingStyles.md}
    ${shadowStyles[shadow] || shadowStyles.md}
    ${className}
  `.replace(/\s+/g, ' ').trim()

  return (
    <div className={combinedStyles} {...props}>
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    'default', 
    'elevated', 
    'outlined', 
    'primary', 
    'accent', 
    'success', 
    'warning', 
    'error'
  ]),
  padding: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'xl']),
  shadow: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'xl']),
  hover: PropTypes.bool,
  className: PropTypes.string,
}

// Card sub-components for better composition
const CardHeader = ({ children, className = '', ...props }) => (
  <div className={`border-b border-stone-200 pb-4 mb-4 ${className}`} {...props}>
    {children}
  </div>
)

CardHeader.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

const CardTitle = ({ children, className = '', ...props }) => (
  <h3 className={`text-lg font-semibold text-stone-900 ${className}`} {...props}>
    {children}
  </h3>
)

CardTitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

const CardDescription = ({ children, className = '', ...props }) => (
  <p className={`text-sm text-stone-600 mt-1 ${className}`} {...props}>
    {children}
  </p>
)

CardDescription.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

const CardContent = ({ children, className = '', ...props }) => (
  <div className={`${className}`} {...props}>
    {children}
  </div>
)

CardContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

const CardFooter = ({ children, className = '', ...props }) => (
  <div className={`border-t border-stone-200 pt-4 mt-4 ${className}`} {...props}>
    {children}
  </div>
)

CardFooter.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

// Export main component and sub-components
Card.Header = CardHeader
Card.Title = CardTitle
Card.Description = CardDescription
Card.Content = CardContent
Card.Footer = CardFooter

export default Card