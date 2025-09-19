import { Card, Section, Typography, Grid, Icon, ImageCarousel } from '../components/ui'

// Equipment data with placeholder images
const equipmentData = {
  casting: {
    title: "Casting Equipment",
    description: "Advanced casting capabilities for high-quality components",
    icon: "industry",
    color: "primary",
    equipment: [
      "Sand Casting",
      "Gravity Die Casting"
    ],
    image: {
      src: null, // Placeholder for machine photo
      alt: "Gravity Die Casting Machine",
      title: "Gravity Die Casting Machine",
      description: "High-precision gravity die casting equipment"
    }
  },
  machining: {
    title: "Machining Centers",
    description: "Precision machining for exact specifications",
    icon: "cog",
    color: "accent",
    equipment: [
      "VMC (Vertical Machining Centers)",
      "CNC Lathe"
    ],
    images: [
      {
        src: null,
        alt: "VMC Machine",
        title: "Vertical Machining Center",
        description: "High-precision 5-axis VMC for complex geometries"
      },
      {
        src: null,
        alt: "CNC Lathe",
        title: "CNC Lathe Machine",
        description: "Advanced CNC lathe for precision turning operations"
      },
      {
        src: null,
        alt: "Machining Center Control",
        title: "CNC Control System",
        description: "State-of-the-art control systems for precise operations"
      }
    ]
  },
  quality: {
    title: "Quality Equipment",
    description: "Advanced quality control and measurement tools with SPC Edge software integration",
    icon: "tools",
    color: "success",
    equipment: [
      "CMM (Coordinate Measuring Machine)",
      "Contracer (Surface Roughness Tester)",
      "Spectrometer (Material Analysis)",
      "SPC Edge Software Integration"
    ],
    features: [
      "100% in-process inspection capability",
      "Real-time statistical process control",
      "Automated data collection and analysis",
      "Digital work instructions integration"
    ]
  }
}

function Infrastructure() {
  return (
    <>
      <Section padding="xl">
        <Section.Header 
          title="Infrastructure"
          subtitle="Our Capabilities"
          description="State-of-the-art equipment and facilities for precision manufacturing"
          centered
        />
        
        {/* Casting Equipment Section */}
        <div className="mt-12 space-y-12">
          <Card shadow="lg" hover className="overflow-hidden">
            <Card.Header>
              <Card.Title>
                <Icon name={equipmentData.casting.icon} className="mr-3" color={equipmentData.casting.color} />
                {equipmentData.casting.title}
              </Card.Title>
              <Card.Description>
                {equipmentData.casting.description}
              </Card.Description>
            </Card.Header>
            <Card.Content>
              <div className="grid lg:grid-cols-2 gap-6">
                <div>
                  <Typography variant="h4" className="mb-4 text-stone-700">Equipment & Capabilities</Typography>
                  <ul className="space-y-2">
                    {equipmentData.casting.equipment.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <Icon name="check-circle" className="mr-2 flex-shrink-0" color="success" size="sm" />
                        <Typography variant="body">{item}</Typography>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <Typography variant="h4" className="mb-4 text-stone-700">Featured Equipment</Typography>
                  <div className="bg-gray-100 rounded-lg p-6 text-center">
                    <div className="w-16 h-16 bg-gray-300 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <Icon name="industry" size="lg" color="primary" />
                    </div>
                    <Typography variant="body" className="font-medium">{equipmentData.casting.image.title}</Typography>
                    <Typography variant="small" className="text-gray-600 mt-1">{equipmentData.casting.image.description}</Typography>
                  </div>
                </div>
              </div>
            </Card.Content>
          </Card>

          {/* Machining Centers Section */}
          <Card shadow="lg" hover className="overflow-hidden">
            <Card.Header>
              <Card.Title>
                <Icon name={equipmentData.machining.icon} className="mr-3" color={equipmentData.machining.color} />
                {equipmentData.machining.title}
              </Card.Title>
              <Card.Description>
                {equipmentData.machining.description}
              </Card.Description>
            </Card.Header>
            <Card.Content>
              <div className="grid lg:grid-cols-2 gap-6">
                <div>
                  <Typography variant="h4" className="mb-4 text-stone-700">Equipment & Capabilities</Typography>
                  <ul className="space-y-2">
                    {equipmentData.machining.equipment.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <Icon name="check-circle" className="mr-2 flex-shrink-0" color="success" size="sm" />
                        <Typography variant="body">{item}</Typography>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <Typography variant="h4" className="mb-4 text-stone-700">Equipment Gallery</Typography>
                  <ImageCarousel 
                    images={equipmentData.machining.images}
                    autoPlay={true}
                    autoPlayInterval={4000}
                    showDots={true}
                    showArrows={true}
                    className="shadow-md"
                  />
                </div>
              </div>
            </Card.Content>
          </Card>

          {/* Quality Equipment Section */}
          <Card shadow="lg" hover className="overflow-hidden">
            <Card.Header>
              <Card.Title>
                <Icon name={equipmentData.quality.icon} className="mr-3" color={equipmentData.quality.color} />
                {equipmentData.quality.title}
              </Card.Title>
              <Card.Description>
                {equipmentData.quality.description}
              </Card.Description>
            </Card.Header>
            <Card.Content>
              <div className="grid lg:grid-cols-2 gap-6">
                <div>
                  <Typography variant="h4" className="mb-4 text-stone-700">Quality Equipment</Typography>
                  <ul className="space-y-2 mb-6">
                    {equipmentData.quality.equipment.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <Icon name="check-circle" className="mr-2 flex-shrink-0" color="success" size="sm" />
                        <Typography variant="body">{item}</Typography>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <Typography variant="h4" className="mb-4 text-stone-700">SPC Edge Integration</Typography>
                  <ul className="space-y-2">
                    {equipmentData.quality.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Icon name="star" className="mr-2 flex-shrink-0" color="warning" size="sm" />
                        <Typography variant="body" className="text-sm">{feature}</Typography>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <Icon name="shield-check" className="mr-2" color="success" />
                      <Typography variant="body" className="font-semibold text-green-800">Quality Assurance</Typography>
                    </div>
                    <Typography variant="small" className="text-green-700">
                      Complete integration with SPC Edge software ensures 100% inspection coverage with 
                      CP/CPK analysis and 3-year data retention for full traceability.
                    </Typography>
                  </div>
                </div>
              </div>
            </Card.Content>
          </Card>
        </div>
      </Section>
    </>
  )
}

export default Infrastructure