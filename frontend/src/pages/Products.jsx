import { Card, Section, Typography, Grid, Icon, Button } from '../components/ui'
import { useState } from 'react'

function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Product data with detailed descriptions
  const products = [
    {
      id: 'bronze-bushings',
      category: 'bearings',
      name: 'Bronze Bushings',
      icon: 'cog',
      iconColor: 'primary',
      description: 'Precision engineered bronze bushings for various applications',
      detailedDescription: 'High-quality bronze bushings manufactured to precise specifications for industrial applications. Our bushings offer excellent wear resistance, low friction, and superior load-bearing capacity. Ideal for automotive, marine, and heavy machinery applications.',
      features: ['Self-lubricating properties', 'High load capacity', 'Corrosion resistant', 'Custom dimensions available'],
      applications: ['Automotive components', 'Marine equipment', 'Industrial machinery', 'Pump assemblies']
    },
    {
      id: 'thrust-washers',
      category: 'bearings', 
      name: 'Thrust Washers',
      icon: 'tools',
      iconColor: 'accent',
      description: 'High-quality thrust washers for mechanical assemblies',
      detailedDescription: 'Precision thrust washers and copper alloy components for demanding manufacturing environments. Engineered to handle axial loads and provide smooth operation in rotating machinery.',
      features: ['Precision ground surfaces', 'High axial load capacity', 'Dimensional stability', 'Various alloy options'],
      applications: ['Transmission systems', 'Gearboxes', 'Rotating equipment', 'Hydraulic systems']
    },
    {
      id: 'gun-metal-components',
      category: 'specialty',
      name: 'Gun Metal Components', 
      icon: 'industry',
      iconColor: 'success',
      description: 'Specialized gun metal parts for industrial use',
      detailedDescription: 'Specialized gun metal components manufactured from high-grade copper-tin-zinc alloys. Offering exceptional strength, corrosion resistance, and machinability for critical industrial applications.',
      features: ['Superior strength-to-weight ratio', 'Excellent machinability', 'Corrosion resistant', 'High temperature stability'],
      applications: ['Valve components', 'Pump housings', 'Marine fittings', 'Pressure vessels']
    },
    {
      id: 'copper-alloy-components',
      category: 'specialty',
      name: 'Copper Alloy Components',
      icon: 'award', 
      iconColor: 'warning',
      description: 'Custom copper alloy parts for specialized applications',
      detailedDescription: 'Comprehensive range of copper alloy components including custom castings, machined parts, and specialized fittings. Manufactured to meet specific customer requirements with strict quality control.',
      features: ['Custom alloy compositions', 'Precision manufacturing', 'Quality certified', 'Engineering support'],
      applications: ['Electrical components', 'Heat exchangers', 'Specialized fittings', 'Custom assemblies']
    }
  ]

  // Filter products based on selected category
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory)

  const categories = [
    { id: 'all', name: 'All Products', icon: 'box' },
    { id: 'bearings', name: 'Bearings & Bushings', icon: 'cog' },
    { id: 'specialty', name: 'Specialty Components', icon: 'industry' }
  ]

  return (
    <>
      <Section padding="xl">
        <Section.Header 
          title="Products"
          subtitle="Our Product Range"
          description="High-quality copper alloy components and specialized products manufactured to the highest industry standards"
          centered
        />

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mt-8 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? 'primary' : 'outline'}
              onClick={() => setSelectedCategory(category.id)}
              className="flex items-center"
            >
              <Icon name={category.icon} className="mr-2" />
              {category.name}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <Grid cols={{ base: 1, md: 2 }} gap="lg" className="mt-8">
          {filteredProducts.map((product) => (
            <Card key={product.id} shadow="lg" hover className="h-full">
              <Card.Header>
                <Card.Title>
                  <Icon name={product.icon} className="mr-3" color={product.iconColor} />
                  {product.name}
                </Card.Title>
                <Card.Description>
                  {product.description}
                </Card.Description>
              </Card.Header>
              
              <Card.Content>
                {/* Image placeholder */}
                <div className="bg-gray-100 h-48 rounded-lg mb-4 flex items-center justify-center">
                  <Icon name={product.icon} size="2xl" color={product.iconColor} />
                </div>
                
                <Typography variant="body" className="mb-4">
                  {product.detailedDescription}
                </Typography>

                {/* Key Features */}
                <div className="mb-4">
                  <Typography variant="h6" className="mb-2 text-stone-900">
                    Key Features:
                  </Typography>
                  <ul className="list-disc list-inside space-y-1">
                    {product.features.map((feature, index) => (
                      <li key={index} className="text-stone-600 text-sm">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Applications */}
                <div>
                  <Typography variant="h6" className="mb-2 text-stone-900">
                    Applications:
                  </Typography>
                  <ul className="list-disc list-inside space-y-1">
                    {product.applications.map((application, index) => (
                      <li key={index} className="text-stone-600 text-sm">
                        {application}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card.Content>
            </Card>
          ))}
        </Grid>

        {/* Quality Assurance Section */}
        <Section padding="lg" className="mt-16">
          <Card variant="primary" shadow="xl">
            <Card.Header>
              <Card.Title className="text-center">
                <Icon name="certificate" className="mr-3" color="primary" />
                Quality & Precision Manufacturing
              </Card.Title>
              <Card.Description className="text-center">
                All our products are manufactured under ISO-9001 certified processes
              </Card.Description>
            </Card.Header>
            
            <Card.Content>
              <Grid cols={{ base: 1, md: 3 }} gap="md" className="mt-6">
                <div className="text-center">
                  <Icon name="check-circle" size="xl" color="success" className="mb-2" />
                  <Typography variant="h6" className="mb-1">SPC Edge Software</Typography>
                  <Typography variant="caption" color="muted">
                    Statistical process control for consistent quality
                  </Typography>
                </div>
                <div className="text-center">
                  <Icon name="chart-line" size="xl" color="primary" className="mb-2" />
                  <Typography variant="h6" className="mb-1">CP/CPK Analysis</Typography>
                  <Typography variant="caption" color="muted">
                    Process capability studies for optimal performance
                  </Typography>
                </div>
                <div className="text-center">
                  <Icon name="tools" size="xl" color="accent" className="mb-2" />
                  <Typography variant="h6" className="mb-1">Digital Work Instructions</Typography>
                  <Typography variant="caption" color="muted">
                    Standardized processes for consistent results
                  </Typography>
                </div>
              </Grid>
            </Card.Content>
          </Card>
        </Section>
      </Section>
    </>
  )
}

export default Products