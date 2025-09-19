import PropTypes from 'prop-types'

const Grid = ({ 
  children, 
  cols = 1,
  gap = 'md',
  responsive = true,
  className = '',
  ...props 
}) => {
  // Gap styles
  const gapStyles = {
    none: 'gap-0',
    xs: 'gap-1',
    sm: 'gap-2',
    md: 'gap-6',
    lg: 'gap-8',
    xl: 'gap-10',
    '2xl': 'gap-12',
  }

  // Column styles with responsive defaults
  const getColumnStyles = (cols, responsive) => {
    if (typeof cols === 'number') {
      const baseCol = `grid-cols-${cols}`
      if (responsive) {
        // Responsive defaults: 1 col on mobile, 2 on tablet, specified on desktop
        if (cols === 1) return 'grid-cols-1'
        if (cols === 2) return 'grid-cols-1 md:grid-cols-2'
        if (cols === 3) return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        if (cols === 4) return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
        if (cols === 6) return 'grid-cols-1 md:grid-cols-3 lg:grid-cols-6'
        return `grid-cols-1 md:grid-cols-2 lg:${baseCol}`
      }
      return baseCol
    }
    
    // If cols is an object with breakpoint-specific values
    if (typeof cols === 'object') {
      let styles = []
      if (cols.base) styles.push(`grid-cols-${cols.base}`)
      if (cols.sm) styles.push(`sm:grid-cols-${cols.sm}`)
      if (cols.md) styles.push(`md:grid-cols-${cols.md}`)
      if (cols.lg) styles.push(`lg:grid-cols-${cols.lg}`)
      if (cols.xl) styles.push(`xl:grid-cols-${cols.xl}`)
      if (cols['2xl']) styles.push(`2xl:grid-cols-${cols['2xl']}`)
      return styles.join(' ')
    }
    
    return 'grid-cols-1'
  }

  // Combine all styles
  const combinedStyles = `
    grid
    ${getColumnStyles(cols, responsive)}
    ${gapStyles[gap] || gapStyles.md}
    ${className}
  `.replace(/\s+/g, ' ').trim()

  return (
    <div className={combinedStyles} {...props}>
      {children}
    </div>
  )
}

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  cols: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      base: PropTypes.number,
      sm: PropTypes.number,
      md: PropTypes.number,
      lg: PropTypes.number,
      xl: PropTypes.number,
      '2xl': PropTypes.number,
    })
  ]),
  gap: PropTypes.oneOf(['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl']),
  responsive: PropTypes.bool,
  className: PropTypes.string,
}

// Flex layout component
const Flex = ({ 
  children, 
  direction = 'row',
  wrap = false,
  align = 'stretch',
  justify = 'start',
  gap = 'md',
  className = '',
  ...props 
}) => {
  // Direction styles
  const directionStyles = {
    row: 'flex-row',
    'row-reverse': 'flex-row-reverse',
    col: 'flex-col',
    'col-reverse': 'flex-col-reverse',
  }

  // Wrap styles
  const wrapStyles = wrap ? 'flex-wrap' : 'flex-nowrap'

  // Align items styles
  const alignStyles = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end',
    stretch: 'items-stretch',
    baseline: 'items-baseline',
  }

  // Justify content styles
  const justifyStyles = {
    start: 'justify-start',
    center: 'justify-center',
    end: 'justify-end',
    between: 'justify-between',
    around: 'justify-around',
    evenly: 'justify-evenly',
  }

  // Gap styles (same as Grid)
  const gapStyles = {
    none: 'gap-0',
    xs: 'gap-1',
    sm: 'gap-2',
    md: 'gap-6',
    lg: 'gap-8',
    xl: 'gap-10',
    '2xl': 'gap-12',
  }

  // Combine all styles
  const combinedStyles = `
    flex
    ${directionStyles[direction] || directionStyles.row}
    ${wrapStyles}
    ${alignStyles[align] || alignStyles.stretch}
    ${justifyStyles[justify] || justifyStyles.start}
    ${gapStyles[gap] || gapStyles.md}
    ${className}
  `.replace(/\s+/g, ' ').trim()

  return (
    <div className={combinedStyles} {...props}>
      {children}
    </div>
  )
}

Flex.propTypes = {
  children: PropTypes.node.isRequired,
  direction: PropTypes.oneOf(['row', 'row-reverse', 'col', 'col-reverse']),
  wrap: PropTypes.bool,
  align: PropTypes.oneOf(['start', 'center', 'end', 'stretch', 'baseline']),
  justify: PropTypes.oneOf(['start', 'center', 'end', 'between', 'around', 'evenly']),
  gap: PropTypes.oneOf(['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl']),
  className: PropTypes.string,
}

// Container component for consistent max-width and centering
const Container = ({ 
  children, 
  maxWidth = '7xl',
  padding = true,
  className = '',
  ...props 
}) => {
  // Max width styles
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
  }

  // Padding styles
  const paddingStyles = padding ? 'px-4 sm:px-6 lg:px-8' : ''

  // Combine all styles
  const combinedStyles = `
    mx-auto
    ${maxWidthStyles[maxWidth] || maxWidthStyles['7xl']}
    ${paddingStyles}
    ${className}
  `.replace(/\s+/g, ' ').trim()

  return (
    <div className={combinedStyles} {...props}>
      {children}
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  maxWidth: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', 'full']),
  padding: PropTypes.bool,
  className: PropTypes.string,
}

export { Grid, Flex, Container }