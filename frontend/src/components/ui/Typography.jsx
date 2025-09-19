import PropTypes from 'prop-types'

const Typography = ({ 
  children, 
  variant = 'body',
  size,
  weight,
  color = 'default',
  align = 'left',
  className = '',
  as: Component = 'p',
  ...props 
}) => {
  // Variant styles (includes semantic sizing and styling)
  const variantStyles = {
    // Headings
    h1: 'text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 leading-tight',
    h2: 'text-3xl md:text-4xl lg:text-5xl font-bold text-stone-900 leading-tight',
    h3: 'text-2xl md:text-3xl font-semibold text-stone-900 leading-snug',
    h4: 'text-xl md:text-2xl font-semibold text-stone-900 leading-snug',
    h5: 'text-lg md:text-xl font-medium text-stone-900 leading-normal',
    h6: 'text-base md:text-lg font-medium text-stone-900 leading-normal',
    
    // Display text (larger than headings)
    display1: 'text-5xl md:text-6xl lg:text-7xl font-bold text-stone-900 leading-none',
    display2: 'text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 leading-tight',
    
    // Body text
    body: 'text-base text-stone-700 leading-relaxed',
    'body-large': 'text-lg text-stone-700 leading-relaxed',
    'body-small': 'text-sm text-stone-700 leading-normal',
    
    // Lead text (intro paragraphs)
    lead: 'text-xl text-stone-600 leading-relaxed',
    
    // Captions and labels
    caption: 'text-sm text-stone-500 leading-normal',
    label: 'text-sm font-medium text-stone-700 leading-normal',
    
    // Utility variants
    muted: 'text-stone-500',
    error: 'text-red-600',
    success: 'text-green-600',
    warning: 'text-yellow-600',
    info: 'text-amber-700',
  }

  // Size override styles (when size prop is provided)
  const sizeStyles = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl',
    '6xl': 'text-6xl',
  }

  // Weight override styles
  const weightStyles = {
    thin: 'font-thin',
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold',
    black: 'font-black',
  }

  // Color override styles
  const colorStyles = {
    default: '', // Use variant's default color
    primary: 'text-amber-700',
    secondary: 'text-stone-600',
    accent: 'text-yellow-600',
    success: 'text-green-600',
    warning: 'text-yellow-600',
    error: 'text-red-600',
    info: 'text-amber-700',
    muted: 'text-stone-500',
    white: 'text-white',
    black: 'text-stone-900',
  }

  // Alignment styles
  const alignStyles = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify',
  }

  // Default component mapping for variants
  const defaultComponents = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    display1: 'h1',
    display2: 'h1',
    body: 'p',
    'body-large': 'p',
    'body-small': 'p',
    lead: 'p',
    caption: 'span',
    label: 'label',
    muted: 'p',
    error: 'p',
    success: 'p',
    warning: 'p',
    info: 'p',
  }

  // Determine the component to render
  const ElementComponent = Component === 'p' ? (defaultComponents[variant] || Component) : Component

  // Build className
  let baseStyles = variantStyles[variant] || variantStyles.body

  // Override with specific props if provided
  if (size) {
    // Remove existing size classes and add new one
    baseStyles = baseStyles.replace(/text-[a-z0-9]+/g, '').trim()
    baseStyles += ` ${sizeStyles[size] || ''}`
  }

  if (weight) {
    // Remove existing weight classes and add new one
    baseStyles = baseStyles.replace(/font-[a-z]+/g, '').trim()
    baseStyles += ` ${weightStyles[weight] || ''}`
  }

  if (color !== 'default') {
    // Remove existing color classes and add new one
    baseStyles = baseStyles.replace(/text-[a-z]+-[0-9]+|text-[a-z]+/g, '').trim()
    baseStyles += ` ${colorStyles[color] || ''}`
  }

  // Combine all styles
  const combinedStyles = `
    ${baseStyles}
    ${alignStyles[align] || alignStyles.left}
    ${className}
  `.replace(/\s+/g, ' ').trim()

  return (
    <ElementComponent className={combinedStyles} {...props}>
      {children}
    </ElementComponent>
  )
}

Typography.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
    'display1', 'display2',
    'body', 'body-large', 'body-small',
    'lead', 'caption', 'label',
    'muted', 'error', 'success', 'warning', 'info'
  ]),
  size: PropTypes.oneOf(['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl']),
  weight: PropTypes.oneOf(['thin', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black']),
  color: PropTypes.oneOf([
    'default', 'primary', 'secondary', 'accent', 'success', 
    'warning', 'error', 'info', 'muted', 'white', 'black'
  ]),
  align: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
  className: PropTypes.string,
  as: PropTypes.elementType,
}

export default Typography