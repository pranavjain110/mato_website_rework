import { Card, Section, Typography, Grid, Icon } from '../components/ui'

function About() {
  return (
    <>
      {/* Hero Section */}
      <Section variant="hero" background="primary-dark" padding="xl">
        <div className="text-center">
          <Typography variant="display1" color="white" className="mb-6">
            About Mato Industries
          </Typography>
          <Typography variant="lead" color="white" className="mb-8 max-w-3xl mx-auto">
            ISO-9001 certified manufacturer specializing in precision bronze bushings, 
            thrust washers, and copper alloy components for over two decades.
          </Typography>
        </div>
      </Section>

      {/* Company History and Expertise */}
      <Section padding="xl">
        <Section.Header 
          title="Our Heritage & Expertise"
          subtitle="Company Story"
          description="Built on decades of precision manufacturing experience and continuous innovation"
          centered
        />
        
        <Grid cols={2} gap="lg" className="mt-12">
          <Card shadow="lg" padding="lg">
            <Card.Header>
              <Card.Title>
                <Icon name="industry" className="mr-2" color="primary" />
                Manufacturing Excellence
              </Card.Title>
              <Card.Description>
                Decades of specialized experience in copper alloy manufacturing
              </Card.Description>
            </Card.Header>
            <Card.Content>
              <Typography variant="body" className="mb-4">
                Mato Industries has been serving the manufacturing industry with high-quality 
                copper alloy components and precision machining services. Our deep expertise 
                in casting and machining processes ensures exceptional quality in every component.
              </Typography>
              <Typography variant="body">
                We specialize in bronze bushings, thrust washers, gun metal components, and 
                custom copper alloy solutions for demanding industrial applications.
              </Typography>
            </Card.Content>
          </Card>
          
          <Card shadow="lg" padding="lg">
            <Card.Header>
              <Card.Title>
                <Icon name="handshake" className="mr-2" color="accent" />
                Long-term Partnerships
              </Card.Title>
              <Card.Description>
                Building lasting relationships through consistent quality and reliability
              </Card.Description>
            </Card.Header>
            <Card.Content>
              <Typography variant="body" className="mb-4">
                Our commitment to quality and customer satisfaction drives everything we do. 
                We have built long-term relationships with clients across various industries 
                who trust us for their critical manufacturing needs.
              </Typography>
              <Typography variant="body">
                From automotive to heavy machinery, our components are trusted in demanding 
                applications where reliability and precision are paramount.
              </Typography>
            </Card.Content>
          </Card>
        </Grid>
      </Section>

      {/* Technical Expertise */}
      <Section background="gray" padding="xl">
        <Section.Header 
          title="Technical Capabilities"
          subtitle="Our Expertise"
          description="Advanced capabilities in copper alloys, casting, and precision machining"
          centered
        />
        
        <Grid cols={3} gap="lg" className="mt-12">
          <Card hover shadow="md">
            <div className="text-center p-6">
              <Icon name="flask" size="xl" color="primary" className="mb-4" />
              <Typography variant="h5" className="mb-3">Copper Alloys</Typography>
              <Typography variant="body" color="muted">
                Expert knowledge in bronze, brass, gun metal, and specialized copper alloy formulations
              </Typography>
            </div>
          </Card>
          
          <Card hover shadow="md">
            <div className="text-center p-6">
              <Icon name="fire" size="xl" color="accent" className="mb-4" />
              <Typography variant="h5" className="mb-3">Casting Processes</Typography>
              <Typography variant="body" color="muted">
                Sand casting and gravity die casting for complex geometries and high-quality finishes
              </Typography>
            </div>
          </Card>
          
          <Card hover shadow="md">
            <div className="text-center p-6">
              <Icon name="cog" size="xl" color="success" className="mb-4" />
              <Typography variant="h5" className="mb-3">Precision Machining</Typography>
              <Typography variant="body" color="muted">
                CNC machining and advanced tooling for tight tolerances and superior surface finishes
              </Typography>
            </div>
          </Card>
        </Grid>
      </Section>

      {/* Quality Processes */}
      <Section padding="xl">
        <Section.Header 
          title="Quality Assurance"
          subtitle="Our Standards"
          description="100% in-process inspection and digital quality management for consistent excellence"
          centered
        />
        
        <Grid cols={2} gap="lg" className="mt-12">
          <Card shadow="lg" variant="primary" padding="lg">
            <Card.Header>
              <Card.Title>
                <Icon name="chart-line" className="mr-2" color="primary" />
                SPC Edge Software Integration
              </Card.Title>
              <Card.Description>
                Statistical Process Control for continuous quality monitoring
              </Card.Description>
            </Card.Header>
            <Card.Content>
              <Typography variant="body" className="mb-4">
                Our manufacturing processes are monitored using SPC Edge software, ensuring 
                statistical process control with comprehensive CP and CPK analysis for every part.
              </Typography>
              <div className="bg-white/50 rounded-lg p-4">
                <Typography variant="body" className="font-semibold mb-2">Key Features:</Typography>
                <ul className="text-sm space-y-1">
                  <li>• Real-time process monitoring</li>
                  <li>• CP/CPK statistical analysis</li>
                  <li>• Automated quality reporting</li>
                  <li>• Trend analysis and prediction</li>
                </ul>
              </div>
            </Card.Content>
          </Card>
          
          <Card shadow="lg" variant="accent" padding="lg">
            <Card.Header>
              <Card.Title>
                <Icon name="clipboard-check" className="mr-2" color="accent" />
                Digital Work Instructions
              </Card.Title>
              <Card.Description>
                Comprehensive digital documentation for every manufacturing step
              </Card.Description>
            </Card.Header>
            <Card.Content>
              <Typography variant="body" className="mb-4">
                Every part we manufacture follows detailed digital work instructions, ensuring 
                consistency, traceability, and adherence to quality standards.
              </Typography>
              <div className="bg-white/50 rounded-lg p-4">
                <Typography variant="body" className="font-semibold mb-2">Documentation Includes:</Typography>
                <ul className="text-sm space-y-1">
                  <li>• Step-by-step manufacturing processes</li>
                  <li>• Quality checkpoints and tolerances</li>
                  <li>• Material specifications and handling</li>
                  <li>• Inspection data retention (3 years)</li>
                </ul>
              </div>
            </Card.Content>
          </Card>
        </Grid>
        
        <div className="mt-8 text-center">
          <Card variant="success" padding="lg" className="inline-block">
            <div className="flex items-center justify-center">
              <Icon name="award" className="mr-3" color="success" size="lg" />
              <div>
                <Typography variant="h5" className="mb-1">ISO-9001 Certified</Typography>
                <Typography variant="body" color="muted">
                  Internationally recognized quality management system certification
                </Typography>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Data Retention & Inspection */}
      <Section background="light-gray" padding="lg">
        <div className="text-center">
          <Grid cols={3} gap="lg">
            <div>
              <Icon name="search" size="lg" color="primary" className="mb-3" />
              <Typography variant="h4" className="mb-2">100%</Typography>
              <Typography variant="body" color="muted">In-Process Inspection</Typography>
            </div>
            <div>
              <Icon name="database" size="lg" color="accent" className="mb-3" />
              <Typography variant="h4" className="mb-2">3 Years</Typography>
              <Typography variant="body" color="muted">Data Retention Period</Typography>
            </div>
            <div>
              <Icon name="shield-check" size="lg" color="success" className="mb-3" />
              <Typography variant="h4" className="mb-2">ISO-9001</Typography>
              <Typography variant="body" color="muted">Quality Certified</Typography>
            </div>
          </Grid>
        </div>
      </Section>

      {/* Team Section */}
      <Section padding="xl">
        <Section.Header 
          title="Our Team"
          subtitle="Meet the Experts"
          description="Experienced professionals dedicated to manufacturing excellence"
          centered
        />
        
        <Grid cols={3} gap="lg" className="mt-12">
          {/* Placeholder team members */}
          <Card shadow="md" hover className="text-center">
            <Card.Content>
              <div className="w-24 h-24 bg-stone-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Icon name="user" size="xl" color="muted" />
              </div>
              <Typography variant="h5" className="mb-2">Engineering Leadership</Typography>
              <Typography variant="body" color="primary" className="mb-2">Manufacturing Director</Typography>
              <Typography variant="small" color="muted">
                Overseeing technical operations and quality assurance with over 20 years of experience
              </Typography>
            </Card.Content>
          </Card>
          
          <Card shadow="md" hover className="text-center">
            <Card.Content>
              <div className="w-24 h-24 bg-stone-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Icon name="user" size="xl" color="muted" />
              </div>
              <Typography variant="h5" className="mb-2">Quality Management</Typography>
              <Typography variant="body" color="primary" className="mb-2">Quality Control Manager</Typography>
              <Typography variant="small" color="muted">
                Leading quality initiatives and process improvement across all manufacturing operations
              </Typography>
            </Card.Content>
          </Card>
          
          <Card shadow="md" hover className="text-center">
            <Card.Content>
              <div className="w-24 h-24 bg-stone-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Icon name="user" size="xl" color="muted" />
              </div>
              <Typography variant="h5" className="mb-2">Production Excellence</Typography>
              <Typography variant="body" color="primary" className="mb-2">Operations Manager</Typography>
              <Typography variant="small" color="muted">
                Ensuring efficient production processes and maintaining our commitment to delivery excellence
              </Typography>
            </Card.Content>
          </Card>
        </Grid>
        
        <div className="mt-8 text-center">
          <Typography variant="body" color="muted">
            * Team member photos and detailed biographies will be updated with actual personnel information
          </Typography>
        </div>
      </Section>
    </>
  )
}

export default About