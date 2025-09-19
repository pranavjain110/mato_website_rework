import { Card, Section, Typography, Grid, Icon } from '../components/ui'

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
        
        <Grid cols={2} gap="lg" className="mt-12">
          <Card shadow="lg" hover>
            <Card.Header>
              <Card.Title>
                <Icon name="industry" className="mr-2" color="primary" />
                Casting Equipment
              </Card.Title>
              <Card.Description>
                Advanced casting capabilities for high-quality components
              </Card.Description>
            </Card.Header>
            <Card.Content>
              <Typography variant="body">
                Sand Casting, Gravity Die Casting
              </Typography>
            </Card.Content>
          </Card>
          
          <Card shadow="lg" hover>
            <Card.Header>
              <Card.Title>
                <Icon name="cog" className="mr-2" color="accent" />
                Machining Centers
              </Card.Title>
              <Card.Description>
                Precision machining for exact specifications
              </Card.Description>
            </Card.Header>
            <Card.Content>
              <Typography variant="body">
                VMC, CNC Lathe
              </Typography>
            </Card.Content>
          </Card>
          
          <Card shadow="lg" hover>
            <Card.Header>
              <Card.Title>
                <Icon name="tools" className="mr-2" color="success" />
                Quality Equipment
              </Card.Title>
              <Card.Description>
                Advanced quality control and measurement tools
              </Card.Description>
            </Card.Header>
            <Card.Content>
              <Typography variant="body">
                CMM, Contracer, Spectrometer, SPC Edge software
              </Typography>
            </Card.Content>
          </Card>
          
          <Card shadow="lg" hover>
            <Card.Header>
              <Card.Title>
                <Icon name="chart-line" className="mr-2" color="warning" />
                Process Control
              </Card.Title>
              <Card.Description>
                Digital work instructions and process monitoring
              </Card.Description>
            </Card.Header>
            <Card.Content>
              <Typography variant="body">
                CP/CPK analysis, digital workflows, real-time monitoring
              </Typography>
            </Card.Content>
          </Card>
        </Grid>
      </Section>
    </>
  )
}

export default Infrastructure