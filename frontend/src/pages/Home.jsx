import { Button, Card, Section, Typography, Grid, Icon } from '../components/ui'

function Home() {
  return (
    <>
      {/* Hero Section */}
      <Section variant="hero" background="primary-dark" padding="2xl">
        <div className="text-center">
          <Typography variant="display1" color="white" className="mb-6">
            Welcome to Mato Industries
          </Typography>
          <Typography variant="lead" color="white" className="mb-8 max-w-3xl mx-auto">
            Leaders in Quality Machining and Casting. Specializing in Bronze Bushings, 
            Thrust Washers, and Copper Alloy Components.
          </Typography>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg">
              <Icon name="box" className="mr-2" />
              Explore Our Products
            </Button>
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-amber-800">
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
    </>
  )
}

export default Home