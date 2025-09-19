import PropTypes from 'prop-types'

const Section = ({ 
  children, 
  variant = 'default',
  padding = 'lg',
  maxWidth = '7xl',
  background = 'transparent',
  className = '',
  id,
  ...props 
}) => {
  // Base section styles
  const baseStyles = 'w-full'

  // Variant styles for different section types
  const variantStyles = {
    default: '',
    hero: 'relative overflow-hidden',
    feature: 'relative',
    content: '',
    footer: 'border-t border-gray-200',
  }

  // Padding styles
  const paddingStyles = {
    none: 'py-0',
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-20',
    '2xl': 'py-24',
  }

  // Max width styles for container
  const maxWidthStyles = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
    '5xl': 'max-w-5xl',
    '6xl': 'max-w-6xl',
    '7xl': 'max-w-7xl',
    full: 'max-w-full',
    none: '',
  }

  // Background styles
  const backgroundStyles = {
    transparent: 'bg-transparent',
    white: 'bg-white',
    gray: 'bg-gray-50',
    'light-gray': 'bg-gray-100',
    primary: 'bg-blue-50',
    'primary-dark': 'bg-blue-600 text-white',
    accent: 'bg-orange-50',
    'accent-dark': 'bg-orange-500 text-white',
    dark: 'bg-gray-900 text-white',
  }

  // Combine section styles
  const sectionStyles = `
    ${baseStyles}
    ${variantStyles[variant] || variantStyles.default}
    ${paddingStyles[padding] || paddingStyles.lg}
    ${backgroundStyles[background] || backgroundStyles.transparent}
    ${className}
  `.replace(/\s+/g, ' ').trim()

  // Container styles
  const containerStyles = `
    mx-auto px-4 sm:px-6 lg:px-8
    ${maxWidth !== 'none' ? (maxWidthStyles[maxWidth] || maxWidthStyles['7xl']) : ''}
  `.replace(/\s+/g, ' ').trim()

  return (
    <section className={sectionStyles} id={id} {...props}>
      <div className={containerStyles}>
        {children}
      </div>
    </section>
  )
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'hero', 'feature', 'content', 'footer']),
  padding: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'xl', '2xl']),
  maxWidth: PropTypes.oneOf([
    'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', 'full', 'none'
  ]),
  background: PropTypes.oneOf([
    'transparent', 'white', 'gray', 'light-gray', 'primary', 'primary-dark', 
    'accent', 'accent-dark', 'dark'
  ]),
  className: PropTypes.string,
  id: PropTypes.string,
}

// Section sub-components for better composition
const SectionHeader = ({ 
  title, 
  subtitle, 
  description, 
  centered = false,
  className = '',
  ...props 
}) => {
  const headerStyles = `
    ${centered ? 'text-center' : ''}
    ${className}
  `.replace(/\s+/g, ' ').trim()

  return (
    <div className={`mb-12 ${headerStyles}`} {...props}>
      {subtitle && (
        <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
          {subtitle}
        </p>
      )}
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {title}
        </h2>
      )}
      {description && (
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {description}
        </p>
      )}
    </div>
  )
}

SectionHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  centered: PropTypes.bool,
  className: PropTypes.string,
}

// Export main component and sub-components
Section.Header = SectionHeader

export default Section