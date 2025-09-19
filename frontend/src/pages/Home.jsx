import { Button, Card, Section, Typography, Grid, Icon } from '../components/ui'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  const handleExploreProducts = () => {
    navigate('/products')
  }

  const handleContactUs = () => {
    navigate('/contact')
  }

  return (
    <>
      {/* Hero Section */}
      <Section variant="hero" background="primary-dark" padding="2xl">
        <div className="text-center">
          <Typography variant="display1" color="white" className="mb-6">
            Leaders in Quality Machining and Casting
          </Typography>
          <Typography variant="lead" color="white" className="mb-8 max-w-3xl mx-auto">
            Leaders in Quality Machining and Casting. Specializing in Bronze Bushings, 
            Thrust Washers, and Copper Alloy Components.
          </Typography>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" onClick={handleExploreProducts}>
              <Icon name="box" className="mr-2" />
              Explore Our Products
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-yellow-600" onClick={handleContactUs}>
              <Icon name="phone" className="mr-2" />
              Contact Us
            </Button>
          </div>
        </div>
      </Section>

      {/* Company Highlights */}
      <Section background="gray" padding="xl">
        <Section.Header 
          title="Quality & Certification"
          subtitle="Our Standards"
          description="ISO-9001 certified manufacturer with a commitment to quality and precision"
          centered
        />
        
        <Grid cols={3} gap="lg" className="mt-12">
          <Card hover>
            <div className="text-center">
              <Icon name="certificate" size="xl" color="primary" className="mb-4" />
              <Typography variant="h5" className="mb-2">ISO-9001 Certified</Typography>
              <Typography variant="body" color="muted">
                Maintaining the highest quality standards in manufacturing
              </Typography>
            </div>
          </Card>
          
          <Card hover>
            <div className="text-center">
              <Icon name="tools" size="xl" color="accent" className="mb-4" />
              <Typography variant="h5" className="mb-2">Precision Manufacturing</Typography>
              <Typography variant="body" color="muted">
                State-of-the-art equipment for precise copper alloy components
              </Typography>
            </div>
          </Card>
          
          <Card hover>
            <div className="text-center">
              <Icon name="award" size="xl" color="success" className="mb-4" />
              <Typography variant="h5" className="mb-2">Quality Processes</Typography>
              <Typography variant="body" color="muted">
                SPC Edge software, CP/CPK, and digital work instructions
              </Typography>
            </div>
          </Card>
        </Grid>
      </Section>

      {/* Products Overview */}
      <Section padding="xl">
        <Section.Header 
          title="Our Products"
          subtitle="What We Make"
          description="High-quality bronze bushings, thrust washers, and copper alloy components"
          centered
        />
        
        <Grid cols={2} gap="lg" className="mt-12">
          <Card variant="outlined" padding="lg">
            <Typography variant="h4" className="mb-4">Bronze Bushings</Typography>
            <Typography variant="body" className="mb-4">
              High-quality bronze bushings manufactured to precise specifications 
              for industrial applications.
            </Typography>
            <Button variant="outline">
              Learn More
              <Icon name="arrow-right" className="ml-2" />
            </Button>
          </Card>
          
          <Card variant="outlined" padding="lg">
            <Typography variant="h4" className="mb-4">Thrust Washers</Typography>
            <Typography variant="body" className="mb-4">
              Precision thrust washers and copper alloy components for demanding 
              manufacturing environments.
            </Typography>
            <Button variant="outline">
              Learn More
              <Icon name="arrow-right" className="ml-2" />
            </Button>
          </Card>
        </Grid>
      </Section>

      {/* Contact Info Preview */}
      <Section background="primary-dark" padding="xl">
        <Section.Header 
          title="Get In Touch"
          subtitle="Contact Us"
          description="Ready to discuss your project? Our team is here to help with your manufacturing needs"
          centered
        />
        
        <Grid cols={3} gap="lg" className="mt-12">
          <Card variant="primary" hover>
            <div className="text-center">
              <Icon name="phone" size="xl" color="primary" className="mb-4" />
              <Typography variant="h5" className="mb-2">Call Us</Typography>
              <Typography variant="body" color="muted">
                Speak directly with our engineering team
              </Typography>
              <Typography variant="body" className="mt-2 font-medium">
                +1 (555) 123-4567
              </Typography>
            </div>
          </Card>
          
          <Card variant="primary" hover>
            <div className="text-center">
              <Icon name="envelope" size="xl" color="primary" className="mb-4" />
              <Typography variant="h5" className="mb-2">Email Us</Typography>
              <Typography variant="body" color="muted">
                Send us your specifications and requirements
              </Typography>
              <Typography variant="body" className="mt-2 font-medium">
                info@matoindustries.com
              </Typography>
            </div>
          </Card>
          
          <Card variant="primary" hover>
            <div className="text-center">
              <Icon name="map-marker" size="xl" color="primary" className="mb-4" />
              <Typography variant="h5" className="mb-2">Visit Us</Typography>
              <Typography variant="body" color="muted">
                Tour our manufacturing facility and capabilities
              </Typography>
              <Button variant="outline" size="sm" className="mt-3" onClick={handleContactUs}>
                Get Directions
              </Button>
            </div>
          </Card>
        </Grid>
      </Section>
    </>
  )
}

export default Home