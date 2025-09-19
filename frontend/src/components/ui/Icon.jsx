import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { iconMap } from './icon-constants'

const Icon = ({ 
  name, 
  size = 'md',
  color = 'current',
  spin = false,
  pulse = false,
  className = '',
  ...props 
}) => {
  // Size mapping
  const sizeMap = {
    xs: 'xs',
    sm: 'sm',
    md: 'lg',
    lg: 'xl',
    xl: '2x',
    '2xl': '3x',
  }

  // Color styles
  const colorStyles = {
    current: 'text-current',
    primary: 'text-amber-700',
    secondary: 'text-stone-600',
    accent: 'text-yellow-600',
    success: 'text-green-600',
    warning: 'text-yellow-500',
    error: 'text-red-600',
    white: 'text-white',
    black: 'text-black',
    muted: 'text-stone-400',
  }

  // Get the icon from the map
  const iconDefinition = iconMap[name]
  
  if (!iconDefinition) {
    console.warn(`Icon "${name}" not found in icon map`)
    return null
  }

  // Combine styles
  const combinedStyles = `
    ${colorStyles[color] || colorStyles.current}
    ${className}
  `.replace(/\s+/g, ' ').trim()

  return (
    <FontAwesomeIcon
      icon={iconDefinition}
      size={sizeMap[size] || sizeMap.md}
      spin={spin}
      pulse={pulse}
      className={combinedStyles}
      {...props}
    />
  )
}

Icon.propTypes = {
  name: PropTypes.oneOf(Object.keys(iconMap)).isRequired,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', '2xl']),
  color: PropTypes.oneOf([
    'current', 'primary', 'secondary', 'accent', 'success', 
    'warning', 'error', 'white', 'black', 'muted'
  ]),
  spin: PropTypes.bool,
  pulse: PropTypes.bool,
  className: PropTypes.string,
}

// Utility component for commonly used icon patterns
const IconButton = ({ 
  icon, 
  children,
  iconPosition = 'left',
  variant = 'ghost',
  className = '',
  ...props 
}) => {
  const iconElement = typeof icon === 'string' ? <Icon name={icon} /> : icon
  
  return (
    <button
      className={`
        inline-flex items-center gap-2 transition-colors duration-200
        ${variant === 'ghost' ? 'text-stone-600 hover:text-stone-800' : ''}
        ${className}
      `.replace(/\s+/g, ' ').trim()}
      {...props}
    >
      {iconPosition === 'left' && iconElement}
      {children}
      {iconPosition === 'right' && iconElement}
    </button>
  )
}

IconButton.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  children: PropTypes.node,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  variant: PropTypes.string,
  className: PropTypes.string,
}

export { Icon, IconButton }
export default Icon