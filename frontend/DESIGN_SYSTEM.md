# Mato Industries Design System

This document provides a comprehensive overview of the design system and UI components created for the Mato Industries website.

## Overview

The design system is built with industrial/manufacturing aesthetics in mind, using a professional color palette, typography, and component architecture that reflects the company's focus on quality and precision.

## Color Palette

### Primary Colors (Industrial Blues)
- **Primary**: Blue-600 (#2563eb) - Main brand color
- **Primary Light**: Blue-100 (#dbeafe) - Backgrounds and highlights
- **Primary Dark**: Blue-900 (#1e3a8a) - Text and strong emphasis

### Secondary Colors (Industrial Grays)
- **Gray Scale**: Gray-50 to Gray-900 for text, backgrounds, and borders
- **White**: Pure white for clean backgrounds

### Accent Colors
- **Orange**: Orange-500 (#f97316) - Call-to-action and highlights
- **Success**: Green-600 (#059669) - Success states and positive indicators
- **Warning**: Yellow-500 (#f59e0b) - Warning states
- **Error**: Red-600 (#dc2626) - Error states

## Typography

### Font Family
- **Primary**: Inter (system fonts as fallback)
- **Monospace**: UI-monospace for code elements

### Typography Variants
- **Display**: Large hero text (48px-96px)
- **Headings**: H1-H6 with responsive sizing
- **Body**: Regular text content (16px base)
- **Lead**: Introduction paragraphs (20px)
- **Caption**: Small text and labels (14px)

## Components

### Button Component

**Location**: `/src/components/ui/Button.jsx`

**Variants**:
- `primary` - Blue background, white text (default)
- `secondary` - Gray background, white text
- `outline` - Transparent background, blue border
- `ghost` - Transparent background, no border
- `accent` - Orange background (call-to-action)
- `success` - Green background
- `warning` - Yellow background
- `error` - Red background

**Sizes**: `xs`, `sm`, `md`, `lg`, `xl`

**Props**:
- `variant` - Button style variant
- `size` - Button size
- `disabled` - Disabled state
- `loading` - Loading state with spinner
- `fullWidth` - Full width button
- `onClick` - Click handler

**Example**:
```jsx
import { Button } from '../components/ui'

<Button variant="primary" size="lg" onClick={handleClick}>
  Click Me
</Button>
```

### Card Component

**Location**: `/src/components/ui/Card.jsx`

**Variants**:
- `default` - Standard white card
- `elevated` - Subtle border
- `outlined` - Strong border
- `primary` - Blue background
- `accent` - Orange background

**Sub-components**:
- `Card.Header` - Card header section
- `Card.Title` - Card title
- `Card.Description` - Card description
- `Card.Content` - Main content area
- `Card.Footer` - Footer section

**Example**:
```jsx
import { Card } from '../components/ui'

<Card hover shadow="lg">
  <Card.Header>
    <Card.Title>Card Title</Card.Title>
    <Card.Description>Description text</Card.Description>
  </Card.Header>
  <Card.Content>
    Main content goes here
  </Card.Content>
</Card>
```

### Section Component

**Location**: `/src/components/ui/Section.jsx`

**Variants**:
- `default` - Standard section
- `hero` - Hero section with overflow hidden
- `feature` - Feature section
- `content` - Content section
- `footer` - Footer section

**Background Options**:
- `transparent`, `white`, `gray`, `light-gray`
- `primary`, `primary-dark`, `accent`, `accent-dark`, `dark`

**Example**:
```jsx
import { Section } from '../components/ui'

<Section variant="hero" background="primary-dark" padding="2xl">
  <Section.Header 
    title="Page Title"
    subtitle="Section Label"
    description="Section description"
    centered
  />
  <div>Section content</div>
</Section>
```

### Grid & Layout Components

**Location**: `/src/components/ui/Layout.jsx`

#### Grid Component
- Responsive grid system
- Automatic column breakpoints
- Customizable gap spacing

#### Flex Component
- Flexbox layout utility
- Direction, alignment, and spacing controls

#### Container Component
- Centered container with max-width
- Responsive padding

**Example**:
```jsx
import { Grid, Flex, Container } from '../components/ui'

<Grid cols={3} gap="lg">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Grid>
```

### Icon Component

**Location**: `/src/components/ui/Icon.jsx`

**Features**:
- FontAwesome integration
- Industrial/manufacturing focused icon set
- Multiple sizes and colors
- Consistent naming convention

**Available Icons**:
- Navigation: `home`, `user`, `building`, `box`, `envelope`
- Industrial: `industry`, `tools`, `cog`, `certificate`, `award`
- Actions: `search`, `edit`, `download`, `check`, `times`
- Arrows: `arrow-right`, `chevron-down`, etc.

**Example**:
```jsx
import { Icon } from '../components/ui'

<Icon name="industry" size="lg" color="primary" />
```

### Typography Component

**Location**: `/src/components/ui/Typography.jsx`

**Variants**:
- Headings: `h1`, `h2`, `h3`, `h4`, `h5`, `h6`
- Display: `display1`, `display2`
- Body: `body`, `body-large`, `body-small`
- Utility: `lead`, `caption`, `label`, `muted`

**Example**:
```jsx
import { Typography } from '../components/ui'

<Typography variant="h1" color="primary">
  Main Heading
</Typography>
```

## Usage Guidelines

### Importing Components

All components can be imported from the main UI module:

```jsx
import { 
  Button, 
  Card, 
  Section, 
  Typography, 
  Grid, 
  Icon 
} from '../components/ui'
```

### Color Usage

- **Primary Blue**: Main branding, primary actions, links
- **Orange Accent**: Call-to-action buttons, important highlights
- **Gray Scale**: Text hierarchy, borders, backgrounds
- **Success Green**: Positive states, certifications, achievements
- **Warning/Error**: Status indicators, form validation

### Typography Hierarchy

1. **Display/H1**: Page titles, hero headings
2. **H2**: Section headings
3. **H3**: Subsection headings
4. **H4-H6**: Component titles, smaller headings
5. **Lead**: Introduction paragraphs
6. **Body**: Regular content
7. **Caption**: Small text, metadata

### Responsive Design

- **Mobile First**: All components start with mobile styles
- **Breakpoints**: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px)
- **Grid**: Automatic responsive behavior (1 col → 2 col → specified cols)
- **Typography**: Responsive font sizes using `text-lg md:text-xl` patterns

### Accessibility

- **Focus States**: All interactive elements have focus indicators
- **Color Contrast**: WCAG AA compliant color combinations
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Screen Readers**: Descriptive alt text and labels

## Design Tokens

All design tokens are centralized in `/src/components/ui/design-tokens.js`:

- **Colors**: Complete color palette with 50-900 shades
- **Typography**: Font families, sizes, weights, line heights
- **Spacing**: Consistent spacing scale
- **Shadows**: Elevation system
- **Border Radius**: Consistent rounded corners
- **Transitions**: Animation timing and easing

## Best Practices

1. **Consistency**: Always use design system components instead of custom styles
2. **Responsive**: Test all components across different screen sizes
3. **Accessibility**: Ensure proper focus states and semantic HTML
4. **Performance**: Use appropriate image sizes and lazy loading
5. **Maintainability**: Follow the established component patterns

## File Structure

```
src/components/ui/
├── index.js              # Main export file
├── design-tokens.js      # Design system constants
├── icon-constants.js     # Icon definitions
├── Button.jsx           # Button component
├── Card.jsx             # Card component
├── Section.jsx          # Section wrapper
├── Typography.jsx       # Typography component
├── Layout.jsx           # Grid, Flex, Container
└── Icon.jsx             # Icon component
```

## Implementation Status

✅ **Completed**:
- Industrial color palette
- Typography system
- Button component with all variants
- Card component with sub-components
- Section wrapper with background options
- Grid/Layout responsive system
- Icon system with FontAwesome
- PropTypes validation
- Responsive design
- Hover effects and transitions

This design system provides a solid foundation for building consistent, professional, and accessible user interfaces for the Mato Industries website.